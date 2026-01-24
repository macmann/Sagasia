import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-neutral-700">The page you are looking for does not exist.</p>
      <Link className="underline" href="/">
        Go home
      </Link>
    </div>
  );
}
