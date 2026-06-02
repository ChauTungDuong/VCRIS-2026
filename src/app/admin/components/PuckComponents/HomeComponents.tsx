import { ComponentConfig } from "@measured/puck";
import CountdownTimer from "../../../components/CountdownTimer";
import { makeMediaField } from "./MediaPickerField";

// 1. Home Hero
export type HomeHeroProps = {
  bgImageUrl?: string;
};

export const HomeHero: ComponentConfig<HomeHeroProps> = {
  fields: {
    bgImageUrl: makeMediaField("Background Image") as any,
  },
  defaultProps: {
    bgImageUrl: "/images/lake.jpg",
  },
  render: ({ bgImageUrl, puck }) => (
    <section ref={puck.dragRef} className="relative h-[500px] overflow-hidden" style={{
      backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#0b2740"
    }}>
       {/* Dark Overlay */}
       <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(11,39,64,0.93) 50%, rgba(11,39,64,0.55) 100%)" }} />
       
       <div className="relative max-w-[1200px] mx-auto px-6 h-full flex items-center">
        <header className="max-w-[640px] w-full" style={{ marginTop: "-10%" }}>
          {puck.renderDropZone({ zone: "hero-content" }) as any}
        </header>
      </div>
    </section>
  ),
};

// 2. Important Dates Wrapper
export type HomeImportantDatesProps = {
  conferenceDateRaw: string;
};

export const HomeImportantDates: ComponentConfig<HomeImportantDatesProps> = {
  fields: {
    conferenceDateRaw: { type: "text", label: "Target Conference Date for Countdown" },
  },
  defaultProps: {
    conferenceDateRaw: "October 29, 2026 00:00:00",
  },
  render: ({ conferenceDateRaw, puck }) => (
    <section ref={puck.dragRef} className="bg-warm py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="max-w-[560px]">
             <p className="text-[11px] font-semibold text-slate uppercase tracking-[2px] mb-6" style={{ fontFamily: "var(--font-body)" }}>
               Conference Opens In
             </p>
             <CountdownTimer targetDate={conferenceDateRaw} />
             
            <section className="mt-8 border border-rule p-6 md:p-8 text-center" style={{ background: "#E8F0FE", borderRadius: 4 }}>
               {puck.renderDropZone({ zone: "left-panel-content" }) as any}
             </section>
          </div>
          <div>
            {puck.renderDropZone({ zone: "right-panel-content" }) as any}
          </div>
        </div>
      </div>
    </section>
  ),
};

// 3. Home About Wrapper
export type HomeAboutProps = {};

export const HomeAbout: ComponentConfig<HomeAboutProps> = {
  render: ({ puck }) => (
    <section ref={puck.dragRef} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-7">
             {puck.renderDropZone({ zone: "about-left" }) as any}
          </div>
          <div className="col-span-12 md:col-span-5 relative">
             <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full border border-rule opacity-30" style={{ transform: "translate(20%, -10%)" }} />
             <div className="relative space-y-4">
               {puck.renderDropZone({ zone: "about-stats" }) as any}
             </div>
          </div>
        </div>
      </div>
    </section>
  )
};

// 4. Call for Papers CTA Wrapper
export type HomeCfaProps = {};

export const HomeCfa: ComponentConfig<HomeCfaProps> = {
  render: ({ puck }) => (
    <section ref={puck.dragRef} className="bg-cipher py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {puck.renderDropZone({ zone: "cfa-content" }) as any}
      </div>
    </section>
  )
};
