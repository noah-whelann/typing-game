import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

const Name = async () => {
  const session = await getServerSession(authOptions);
  return <p>{session?.user?.name}</p>;
};

export default Name;
