"use client";

import { ProfileSection } from "@/components/about/ProfileSection";
import { PageContainer } from "@/components/layout/PageContainer";

export default function About() {
  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <ProfileSection />
      </div>
    </PageContainer>
  );
}