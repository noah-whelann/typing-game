
import { NextResponse } from 'next/server';
import { createGame, getUserStats, cleanup } from '@/app/actions/createGame/createGame';
import { parse } from 'url';

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

export async function GET(req: Request) {
  console.log("Received GET request");
  try {
    // Access the 'id' parameter from the query string
    const { query } = parse(req.url!, true);
    const userId = String(query.id)

    // Use the getUserStats function from prismaUtils
    const user = await getUserStats(userId);

    if (!user) {
      console.error('User not found');
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    const userGames = user.data.games;
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