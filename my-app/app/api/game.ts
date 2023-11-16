// app/api/game.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { createGame, getUserStats, cleanup } from '../utils/prismaUtils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const gameData = JSON.parse(req.body);

      // Use the createGame function from prismaUtils
      const savedGameData = await createGame(gameData);

      // Send a success response with the saved data
      res.status(201).json({ success: true, data: savedGameData });
    } catch (error) {
      // Handle errors and send an error response
      console.error('Error saving game data:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      // Use the cleanup function from prismaUtils
      await cleanup();
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}