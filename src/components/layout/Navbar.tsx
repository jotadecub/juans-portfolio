import { profile } from "../../data/profile";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
];

export default function Navbar() {
  return (
    <header className="bg-[#f3f4f4] py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a
          href="#inicio"
          aria-label="Volver al inicio"
          className="w-fit rounded-sm text-2xl font-extrabold tracking-tighter focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          {profile.initials}
        </a>

        <nav
          aria-label="Navegación principal"
          className="flex flex-wrap gap-x-6 gap-y-3"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm py-1 text-sm text-[#333c40] underline-offset-8 transition-colors hover:text-black hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}