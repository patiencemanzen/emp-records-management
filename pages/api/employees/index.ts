import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const getEmployees = async (res: NextApiResponse)  => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json({ data: employees });
  } catch {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

const createEmployee = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, phone, role } = req.body;
 
  try {
    const employee = await prisma.employee.create({
      data: { firstName, lastName, email, phone, role },
    });
    res.status(201).json({ data: employee });
  } catch {
    res.status(500).json({ error: "Failed to create employee" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await getEmployees(res);
      break;
    case "POST":
      await createEmployee(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}