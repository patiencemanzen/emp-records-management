import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { firstName, lastName, email, password }: RegisterRequest =
      await req.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response("User already exists", { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: await bcrypt.hash(password, 10),
      },
    });

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    } else {
      return new Response("An unknown error occurred", { status: 500 });
    }
  }
}
