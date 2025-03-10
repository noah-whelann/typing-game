// utils/prismaUtils.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface GameData {
  id: number
  userId: string;
  wpm: number;
  accuracy: number;
  duration: number;
  date: Date;
}

const createGame = async (data: GameData) => {
  return prisma.game.create({
    data: {
      id: data.id,
      UserId: data.userId,
      wpm: data.wpm,
      accuracy: data.accuracy,
      duration: data.duration,
      date: data.date,
    },
  });
};

const getUser = async (userId: string) => {
  console.log(userId)
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      games: true,
    },
  });

  if (!user) {
    // Handle the case where the user with the given id is not found
    throw new Error('User not found');
  }

  return {
    data: user
  };

};

const cleanup = async () => {
  await prisma.$disconnect();
};

export { createGame, getUser, cleanup };
