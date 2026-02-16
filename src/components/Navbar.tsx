import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner nav-only">
        <nav className="site-nav" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
