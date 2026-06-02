export default function PageTitle({ title }: { title: string }) {
  return (
    <h1
      className="text-center text-[28px] md:text-[36px] font-bold text-red-600 uppercase mb-8 mt-4"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {title}
    </h1>
  );
}
