export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            PickIQ
          </h1>
        </div>

        <div className="hidden gap-8 md:flex">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Categories</a>
          <a href="#" className="hover:text-blue-600">Compare</a>
          <a href="#" className="hover:text-blue-600">Deals</a>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Sign In
        </button>

      </div>
    </nav>
  );
}