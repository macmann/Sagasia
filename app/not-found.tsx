import Link from "next/link";
import { buttonClasses } from "@/components/Button";

export default function NotFoundPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-text-dark/70">The page you are looking for does not exist.</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className={buttonClasses("primary")}>
          Back to home
        </Link>
        <Link href="/contact" className={buttonClasses("secondary")}>
          Contact us
        </Link>
      </div>
      <div className="space-y-2 text-sm text-text-dark/70">
        <p>Popular links:</p>
        <ul className="space-y-1">
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/industries">Industries</Link>
          </li>
          <li>
            <Link href="/insights">Insights</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
