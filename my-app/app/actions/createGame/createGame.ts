// utils/prismaUtils.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface GameData {
  userId: string;
  wpm: number;
  accuracy: number;
  duration: number;
  date: Date;
}

const createGame = async (data: GameData) => {
  return prisma.game.create({
    data: {
      UserId: data.userId,
      wpm: data.wpm,
      accuracy: data.accuracy,
      duration: data.duration,
      date: data.date,
    },
  });
};

const getUserStats = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
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

export { createGame, getUserStats, cleanup };
