import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(res: NextApiResponse) {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json({ data: employees });
  } catch {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, email, phone, role } = req.body;

  try {
    const employee = await prisma.employee.create({
      data: { firstName, lastName, email, phone, role },
    });
    res.status(201).json({ data: employee });
  } catch {
    res.status(500).json({ error: "Failed to create employee" });
  }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, phone } = req.body;
  const { id } = await req.body;

  try {
    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: { firstName, lastName, phone },
    });
    res.status(200).json({ data: updatedEmployee });
  } catch {
    res.status(500).json({ error: "Failed to update employee" });
  }
}

export async function DELETE(req: Request, res: NextApiResponse) {
  try {
    const { id } = await req.json();

    await prisma.employee.delete({ where: { id } });

    res.status(200).json({ message: "Employee deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete employee" });
  }
}
