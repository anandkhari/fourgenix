export default function ServiceListSection({ title, items }) {
  return (
    <section className="max-w-7xl mx-auto sm:mx-4 lg:mx-24 py-16 px-6">
      {/* text-left ensures all children align to left */}
      <h2 className="text-4xl font-worksans mb-8">{title}</h2>
      <ul className="space-y-2 list-disc pl-6 text-gray-700 text-lg body">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
