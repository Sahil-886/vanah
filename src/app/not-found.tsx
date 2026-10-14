import React from "react";
import Link from "next/link";
import siteConfig from "../../content/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-limewash text-ink flex flex-col items-center justify-center p-6 text-center">
      <span lang="sa" className="font-devanagari text-5xl sm:text-6xl text-sage mb-6">
        {siteConfig.wordmark}
      </span>
      <h1 className="font-serif italic text-3xl sm:text-4xl text-ink font-light tracking-tight max-w-md">
        This path leads back to the garden.
      </h1>
      <p className="mt-4 text-sm sm:text-base font-sans text-ink-soft max-w-xs leading-relaxed">
        The page you are looking for does not exist or has wandered off under the trees.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="bg-sage text-line text-sm font-sans font-medium px-6 py-3.5 rounded-[2px] hover:bg-sage-deep transition-colors inline-block"
        >
          Return to Café Vanah →
        </Link>
      </div>
    </div>
  );
}
