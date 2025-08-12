export default function Unavailable() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold">Service not available in your region</h1>
      <p className="mt-2 text-[var(--muted)]">
        This site currently serves visitors from the United States, United Kingdom, and Ireland.
      </p>
    </div>
  )
}
