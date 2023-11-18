export default async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    // validate email and password are both valid and have correct amount of characters or something
    console.log({email, password});
  } catch (e) {
    console.log({ e });
  }
}
