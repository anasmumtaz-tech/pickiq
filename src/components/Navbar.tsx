export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-extrabold text-blue-600">
            PickIQ
          </h1>
        </div>

        <div className="hidden gap-8 md:flex text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Compare</a>
          <a href="#">Deals</a>
          <a href="#">Blog</a>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-2 text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
}