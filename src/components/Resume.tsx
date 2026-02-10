import React from "react";
import { PageContainer1, SectionContainer } from "../styles/Container.style";

const base = typeof window !== "undefined" ? window.location.origin : "";
const resumePdfUrl = `${base}${process.env.PUBLIC_URL || ""}/KiyonFarokhiResume.pdf`;

const NAVBAR_HEIGHT = 80;

export const Resume = () => {
  return (
    <PageContainer1
      style={{
        padding: 0,
        margin: 0,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SectionContainer
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "none",
          padding: 0,
          margin: 0,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <iframe
          src={resumePdfUrl}
          title="Kiyon Farokhi Resume (PDF)"
          width="100%"
          height={`calc(100vh - ${NAVBAR_HEIGHT + 28}px)`}
          style={{ border: "none", display: "block", flex: 1, minHeight: 0 }}
        />
        <p style={{ margin: "0.25rem", textAlign: "center", flexShrink: 0 }}>
          <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-secondary)", fontSize: "0.9rem" }}
          >
            Open / download PDF
          </a>
        </p>
      </SectionContainer>
    </PageContainer1>
  );
};