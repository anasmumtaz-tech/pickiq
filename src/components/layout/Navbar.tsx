import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-extrabold text-blue-600">
          PickIQ
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex gap-3">
          <Button variant="outline">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}