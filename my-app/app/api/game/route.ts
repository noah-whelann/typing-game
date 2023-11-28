
import { NextResponse } from 'next/server';
import { createGame, getUserStats, cleanup } from '@/app/actions/createGame/createGame';

export async function POST(req) {
  try {
      const gameData = JSON.parse(req.body);

      // Use the createGame function from prismaUtils
      const savedGameData = await createGame(gameData);

      // Send a success response with the saved data
      NextResponse.json({ success: true, data: savedGameData });

    } catch (error) {
      // Handle errors and send an error response
      console.error('Error saving game data:', error);
      NextResponse.json({ success: false, error: 'Internal Server Error' });
    } finally {
      // Use the cleanup function from prismaUtils
      await cleanup();
    }
}

export async function GET(req) {
  try {
    // Assuming you have a userId parameter in the query string
    const userId = String(req.query.id); // Convert the string to a number

    // Use the getUserStats function from prismaUtils
    const userGames = await getUserStats(userId);

    // Send a success response with the user stats
    NextResponse.json({ success: true, data: userGames });
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error getting user stats:', error);
    NextResponse.json({ success: false, error: 'Internal Server Error' });
  } finally {
    await cleanup();
  }
}