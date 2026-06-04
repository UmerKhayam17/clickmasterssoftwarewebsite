import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About | Next Software Development Company Software",
  description:
    "Next Software Development Company is a boutique software studio pairing thoughtful design with rigorous engineering.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
