export default function WhyItMattersSection({ title, content }) {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto sm:mx-4 lg:mx-24">
        <h2 className="text-4xl font-worksans mb-6">{title}</h2>
        <p className=" text-2xl font-worksans max-w-5xl leading-relaxed">{content}</p>
      </div>
    </section>
  );
}
