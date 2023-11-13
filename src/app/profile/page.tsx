import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";

export default async function Profile() {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <main className="min-w-screen flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex justify-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Welcome {session.user.name}!
        </h1>
      </div>
    </main>
  );
}
