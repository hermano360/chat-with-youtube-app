"use client";

import { PartnerPage } from "@/components/PartnerPage";
import { Creators, PAGE_CONFIG } from "@/types";

const { username, displayName } = PAGE_CONFIG[Creators.juliensolo];

export default function Page() {
  return <PartnerPage username={username} displayName={displayName} />;
}