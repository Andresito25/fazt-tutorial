import Link from "next/link";
import { ModeToggle } from "./theme-toggle-button";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between my-6 mx-4">
      <Link href="/" className={buttonVariants({ variant: "secondary" })}>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          NextActionsCRUD
        </h1>
      </Link>
      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
