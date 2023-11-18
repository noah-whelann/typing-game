
import type { NextApiRequest, NextApiResponse } from 'next';
import { createGame, getUserStats, cleanup } from '@/app/actions/createGame/createGame';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received request:', req.method, req.url);
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
  } else if (req.method === 'GET') {
    try {
      // Assuming you have a userId parameter in the query string
      const userId = String(req.query.userId); // Convert the string to a number

      // Use the getUserStats function from prismaUtils
      const userGames = await getUserStats(userId);

      // Send a success response with the user stats
      res.status(200).json({ success: true, data: userGames });
    } catch (error) {
      // Handle errors and send an error response
      console.error('Error getting user stats:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {XMLDocument
      await cleanup();
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}