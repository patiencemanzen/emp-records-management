import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const employees = await prisma.employee.findMany();
    return NextResponse.json({ data: employees }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch employees" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, role } = await req.json();

  try {
    const employee = await prisma.employee.create({
      data: { firstName, lastName, email, phone, role },
    });
    return NextResponse.json({ data: employee }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create employee" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const { firstName, lastName, phone, id } = await req.json();

  try {
    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: { firstName, lastName, phone },
    });
    return NextResponse.json({ data: updatedEmployee }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to update employee" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    await prisma.employee.delete({ where: { id } });

    return NextResponse.json({ message: "Employee deleted" }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete employee" },
      { status: 500 }
    );
  }
}
