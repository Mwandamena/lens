"use client";
import { Button, FloatingInput, ModuleButton } from "@social-lens/ui";
import { ArrowRight, Plus, Settings } from "lucide-react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <ModuleButton variant="solid" colorScheme="brand" size="lg">
        Follow <ArrowRight />
      </ModuleButton>
      <ModuleButton variant="outline" colorScheme="neutral">
        Cancel
      </ModuleButton>
      <ModuleButton variant="ghost" colorScheme="danger" size="sm">
        Delete
      </ModuleButton>
      <ModuleButton variant="subtle" colorScheme="neutral" size="sm">
        <Settings />
      </ModuleButton>

      <FloatingInput label="Username" />
    </div>
  );
}
