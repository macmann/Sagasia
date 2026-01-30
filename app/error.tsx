"use client";

import { useEffect } from "react";
import Link from "next/link";
import { buttonClasses } from "@/components/Button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Something went wrong.</h1>
      <p className="text-text-dark/70">{error.message}</p>
      <div className="flex flex-wrap gap-3">
        <button className={buttonClasses("primary")} onClick={() => reset()} type="button">
          Try again
        </button>
        <Link href="/" className={buttonClasses("secondary")}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
