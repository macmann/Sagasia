import Link from "next/link";
import { buttonClasses } from "@/components/Button";

export default function NotFoundPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className={buttonClasses("primary")}>
        Back to home
      </Link>
    </div>
  );
}
