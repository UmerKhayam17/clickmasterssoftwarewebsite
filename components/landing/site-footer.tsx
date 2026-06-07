import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { container } from "@/lib/landing/constants";
import { siteBrand } from "@/lib/landing/brand";
import { motionStagger } from "@/lib/landing/motion";
import { footerBrand, footerColumns, footerLegal } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="w-full bg-horizon-navy text-white">
      <div className={cn(container, "py-10 md:py-12")}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <Link href="/" className="font-heading text-xl font-medium text-white md:text-2xl">
              {siteBrand.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {footerBrand.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={`mailto:${siteBrand.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" aria-hidden />
                  {siteBrand.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden />
                {siteBrand.phone}
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 shrink-0" aria-hidden />
                {siteBrand.location}
              </li>
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerColumns.map((column, i) => (
              <Reveal key={column.title} delay={(i + 1) * motionStagger}>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                    {column.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/80 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerBrand.copyright}</p>
          <div className="flex flex-wrap gap-4">
            {footerLegal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
