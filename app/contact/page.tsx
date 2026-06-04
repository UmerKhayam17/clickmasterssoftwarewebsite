import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact-page";
import { siteBrand, siteMetadata } from "@/lib/landing/brand";
import { parseContactSearchParams } from "@/lib/landing/contact-form-state";

export const metadata: Metadata = {
  title: `Contact | ${siteBrand.name}`,
  description: `Contact ${siteBrand.name} in ${siteBrand.location}. ${siteMetadata.description}`,
};

export default async function ContactRoute({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const initialValues = parseContactSearchParams(params);

  return <ContactPage initialValues={initialValues} />;
}
