export default function FaqSection({ faqs }) {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Questions? We Have Answers
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="text-gray-700 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
