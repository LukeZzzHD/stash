import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerAuthSession();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          Stash
        </a>
      </div>
      <div className={`flex-none gap-2 ${!session ? "hidden" : ""}`}>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="w-20">{session?.user.name}</div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/api/auth/signout">Sign out</Link>
            </li>

            <li>
              <a href="/settings">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
