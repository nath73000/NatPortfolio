import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
];

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-5xl px-4 py-4 flex justify-between">
        <Link href="/" className="font-semibold">
          YourName
        </Link>
        <nav className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-600 hover:text-black">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
