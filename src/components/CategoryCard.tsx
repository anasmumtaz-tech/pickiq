type Props = {
  title: string;
};

export default function CategoryCard({ title }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}