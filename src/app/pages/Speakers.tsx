import React from 'react';
import PageRenderer from "../components/PageRenderer";

export default function Speakers() {
  return (
    <PageRenderer
      slug="speakers"
      fallback={
        <div className="pt-24 pb-24 bg-white min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h1
              className="text-[44px] font-bold italic text-ink leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Diễn giả
            </h1>
            <p className="text-[20px] text-slate italic" style={{ fontFamily: "var(--font-body)" }}>
              Thông tin về Diễn giả của Hội thảo AI4CRIS sẽ được cập nhật trong thời gian tới!
            </p>
          </div>
        </div>
      }
    />
  );
}
