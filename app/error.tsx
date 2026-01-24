"use client";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="text-neutral-700">{error.message}</p>
      <button
        className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
