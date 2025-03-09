import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const getEmployee = async (id: string, res: NextApiResponse) => {
  try {
    const employee = await prisma.employee.findUnique({ where: { id } });

    if (!employee) return res.status(404).json({ error: "Employee not found" });

    res.status(200).json({ data: employee });
  } catch {
    res.status(500).json({ error: "Failed to fetch employee" });
  }
};

const updateEmployee = async (id: string, req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, phone } = req.body;
  
  try {
    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: { firstName, lastName, phone },
    });
    res.status(200).json({ data: updatedEmployee });
  } catch {
    res.status(500).json({ error: "Failed to update employee" });
  }
};

const deleteEmployee = async (id: string, res: NextApiResponse) => {
  try {
    await prisma.employee.delete({ where: { id } });
    res.status(200).json({ message: "Employee deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete employee" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

  switch (req.method) {
    case "GET":
      await getEmployee(id as string, res);
      break;
    case "PUT":
      await updateEmployee(id as string, req, res);
      break;
    case "DELETE":
      await deleteEmployee(id as string, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}