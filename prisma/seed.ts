import "dotenv/config";
import prisma from "../src/client.js";

async function main() {
  await prisma.user.deleteMany();
  await prisma.user.createMany({
    data: [
      { lastname: "Doe", firstname: "Alice", pseudo: "alice123", email: "alice@example.com", password: "password123" },
      { lastname: "Smith", firstname: "Bob", pseudo: "bob456", email: "bob@example.com", password: "password123" },
      { lastname: "Doe", firstname: "John", pseudo: "john789", email: "john@example.com", password: "password123" },
    ],
  });
  console.log("Base de données peuplée avec succès !");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });