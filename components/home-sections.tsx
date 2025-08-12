type Feature = { title: string; body: string }
export function Features({ items }: { items: Feature[] }) {
  return (
    <section className="grid md:grid-cols-3 gap-6 mt-10">
      {items.map((it, i) => (
        <div key={i} className="rounded-2xl border border-white/10 p-6">
          <h3 className="text-lg font-semibold">{it.title}</h3>
          <p className="text-[var(--muted)] mt-2">{it.body}</p>
        </div>
      ))}
    </section>
  )
}
