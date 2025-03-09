import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.employee.createMany({
    data: [
      {
        firstName: "John",
        lastName: "Doe",
        email: "hseal419@gmail.com",
        phone: "123-456-7890",
        role: "Staff",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "mani@gmail.com",
        phone: "123-456-7890",
        role: "Admin",
      },
      {
        firstName: "Alice",
        lastName: "Smith",
        email: "smith@gmail.com",
        phone: "123-456-7890",
        role: "Staff",
      },
    ],
  });

  console.log("Seed data created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
