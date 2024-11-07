"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Importar Constants

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div>
      Barra de Navegacion
      <nav className="flex flex-col font-extrabold text-3xl gap-2 mb-10">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
        <Link
          className={`link ${pathname === "/citas" ? "active" : ""}`}
          href="/citas"
        >
          Citas
        </Link>
      </nav>
    </div>
  );
}
