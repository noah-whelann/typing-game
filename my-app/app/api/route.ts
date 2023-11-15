import { NextRequest } from "next/server";
import { z } from "zod";

z.object({ //give the shape of the object in the body of the request

})

export async function POST(request: NextRequest) {
    const body = await request.json();

}