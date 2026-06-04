import type { Metadata } from "next";

import { FaqPage } from "@/components/pages/faq-page";

export const metadata: Metadata = {
  title: "FAQ | Next Software Development Company Software",
  description:
    "Answers about how Next Software Development Company Software works, project timelines, pricing, tech stack, and post-launch support.",
};

export default function FaqsRoute() {
  return <FaqPage />;
}
