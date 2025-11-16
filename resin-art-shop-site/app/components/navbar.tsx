"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white shadow px-4 py-3 flex gap-6 items-center">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`font-semibold ${
            pathname === item.path ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
          } transition`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}