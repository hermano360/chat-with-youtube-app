"use client";

import { PartnerPage } from "@/components/PartnerPage";
import { PAGE_CONFIG } from "@/types";

const { username, displayName } = PAGE_CONFIG["joenissim"];

export default function Page() {
  return <PartnerPage username={username} displayName={displayName} />;
}
