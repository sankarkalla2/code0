import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "sankar",
    email: "sankarkalla",
    post: {
      create: [
        {
          title: "lfjaljfa",
          content: "hello world",
          published: true,
        },
        {
          title: "lfjljfalfj",
          content: "hello world 2",
          published: false,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
