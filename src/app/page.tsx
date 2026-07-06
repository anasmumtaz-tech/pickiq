import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <h2 className="mb-8 text-4xl font-bold">

          Browse Categories

        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          <CategoryCard title="Mobiles" />
          <CategoryCard title="Laptops" />
          <CategoryCard title="Smart Watches" />
          <CategoryCard title="Audio" />
          <CategoryCard title="Gaming" />
          <CategoryCard title="Kitchen" />
          <CategoryCard title="Car Accessories" />
          <CategoryCard title="Home" />

        </div>

      </section>

      <Footer />

    </>
  );
}