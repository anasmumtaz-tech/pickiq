type Props = {
  title: string;
};

export default function CategoryCard({ title }: Props) {
  return (
    <div className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-xl">

      <h2 className="text-lg font-semibold">
        {title}
      </h2>

    </div>
  );
}