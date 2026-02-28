import "dotenv/config";
import prisma from "../src/client.js";

async function main() {
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
      { name: "John Doe", email: "john@example.com" },
    ],
  });

  console.log("Base de données peuplée avec succès !");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });