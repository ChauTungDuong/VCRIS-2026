import { TopImage } from "../components/TopImage";

export default function Program() {
  return (
    <div className="pt-16">
      <TopImage title="Conference Program" />

      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p
            className="text-[28px] font-bold italic text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The VCRIS 2026 program will be updated later.
          </p>
        </div>
      </section>

      {/*
        NOTE:
        The detailed two-day schedule UI is intentionally hidden for now.
        Restore previous Program page implementation here when final data is ready.
      */}
    </div>
  );
}
