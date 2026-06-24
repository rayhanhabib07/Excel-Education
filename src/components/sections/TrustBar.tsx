const stats = [
  { value: "200+", label: "GPA 5 Achievers" },
  { value: "15+", label: "Expert Teachers" },
  { value: "10+", label: "Years of Excellence" },
  { value: "25", label: "Max Batch Size" },
];

export default function TrustBar() {
  return (
    <section className="py-10 px-4 sm:px-6 bg-white border-y border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#1e3a8a]">
              {stat.value}
            </p>
            <p className="text-sm text-[#64748b] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
