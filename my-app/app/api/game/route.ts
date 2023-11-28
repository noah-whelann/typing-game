
import { NextResponse } from 'next/server';
import { createGame, getUserStats, cleanup } from '@/app/actions/createGame/createGame';

export interface GetUserGames extends Request {
  id: string
}
 

export async function POST(req: Request) {
  console.log("Received POST request")
  try {
    const gameData = JSON.parse(req.body);

    // Use the createGame function from prismaUtils
    const savedGameData = await createGame(gameData);

    // Send a success response with the saved data
    return NextResponse.json({ success: true, data: savedGameData });

  } catch (error) {
    // Handle errors and send an error response
    console.error('Error saving game data:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' });
  } finally {
    // Use the cleanup function from prismaUtils
    await cleanup();
  }
}

export async function GET(req: GetUserGames) {
  console.log("Received GET request")
  try {
    // Assuming you have a userId parameter in the query string
    const userId = String(req.id); // Convert the string to a number

    // Use the getUserStats function from prismaUtils
    const user = await getUserStats(userId);
    const userGames = user.data.games
    // Send a success response with the user stats
    return NextResponse.json({ data: userGames });
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error getting user stats:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' });
  } finally {
    await cleanup();
  }
}