
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Name = async () => {
    const session = await getServerSession(authOptions);

    return (
        <p>{session?.user?.name}</p>
    );

}

export default Name;