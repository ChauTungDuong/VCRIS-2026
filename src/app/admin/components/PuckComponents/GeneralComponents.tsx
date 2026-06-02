import { ComponentConfig } from "@measured/puck";
import { ArrowRight } from "lucide-react";
import { makeMediaField } from "./MediaPickerField";

// 1. Top Image Header
export type TopImageHeaderProps = {
  title: string;
  bgImageUrl?: string;
  height?: string;
};

export const TopImageHeader: ComponentConfig<TopImageHeaderProps> = {
  fields: {
    title: { type: "text", label: "Page Title" },
    bgImageUrl: makeMediaField("Background Image") as any,
    height: { type: "text", label: "Height (e.g. 300px)" },
  },
  defaultProps: {
    title: "Page Title",
    bgImageUrl: "/images/lake.jpg",
    height: "300px",
  },
  render: ({ title, bgImageUrl, height, puck }) => (
    <section
      ref={puck.dragRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: height || "300px",
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0b2740"
      }}
    >
      <div className="absolute inset-0 bg-deep/60" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1
          className="text-white text-[40px] md:text-[56px] font-bold uppercase tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
        {/* Accent bar */}
        <div style={{ width: 64, height: 4, background: "#C12026", margin: "16px auto 0" }} />
      </div>
    </section>
  ),
};

// 2. Contact CTA
export type ContactCTAProps = {
  title: string;
  subtitle: string;
  btnLabel: string;
  btnEmail: string;
};

export const ContactCTA: ComponentConfig<ContactCTAProps> = {
  fields: {
    title: { type: "text", label: "Title" },
    subtitle: { type: "text", label: "Subtitle" },
    btnLabel: { type: "text", label: "Button Label" },
    btnEmail: { type: "text", label: "Email Address" },
  },
  defaultProps: {
    title: "Questions?",
    subtitle: "Contact us for more information",
    btnLabel: "Contact Us",
    btnEmail: "contact@example.com",
  },
  render: ({ title, subtitle, btnLabel, btnEmail, puck }) => (
    <section ref={puck.dragRef} className="bg-deep py-24 relative overflow-hidden">
      {/* Dotted grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <h3
          className="text-[36px] font-bold uppercase text-white mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <div style={{ width: 48, height: 4, background: "#C12026", margin: "0 auto 20px" }} />
        <p
          className="text-[16px] text-white/75 mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>
        <a
          href={`mailto:${btnEmail}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-cipher text-white text-[15px] font-bold hover:shadow-lg transition-all"
          style={{ fontFamily: "var(--font-body)", borderRadius: 4, letterSpacing: "0.04em", textTransform: "uppercase" }}
        >
          {btnLabel} <ArrowRight size={18} />
        </a>
      </div>
    </section>
  ),
};

// 3. Map Component
export type MapProps = {
  embedUrl: string;
  height?: string;
};

export const Map: ComponentConfig<MapProps> = {
  fields: {
    embedUrl: { type: "text", label: "Google Maps Embed URL" },
    height: { type: "text", label: "Height (e.g. 500px)" },
  },
  defaultProps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.195748202528!2d105.79383627503006!3d20.984786980650942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc6bd794301%3A0x57488c6bd794301!2zSOG7jWMgdmnhu4duIEvhu7kgdGh14bqtdCBN4bqtdCBtw6M!5e0!3m2!1svi!2s!4v1711440000000!5m2!1svi!2s",
    height: "500px",
  },
  render: ({ embedUrl, height, puck }) => (
    <div ref={puck.dragRef} className="overflow-hidden border border-rule" style={{ height: height || "500px", borderRadius: 4 }}>
      <iframe src={embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  ),
};

// 4. Image Grid
export type ImageGridProps = {
  images: { url: string }[];
  columns?: number;
};

export const ImageGrid: ComponentConfig<ImageGridProps> = {
  fields: {
    images: {
      type: "array",
      label: "Images",
      arrayFields: {
        url: makeMediaField("Image URL") as any,
      },
    },
    columns: { type: "number", label: "Columns" },
  },
  defaultProps: {
    images: [{ url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b" }],
    columns: 3,
  },
  render: ({ images, columns, puck }) => (
    <div ref={puck.dragRef} className={`grid grid-cols-1 md:grid-cols-${columns || 3} gap-6`}>
      {images.map((img, i) => (
        <div key={i} className="h-48 md:h-64 overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300" style={{ borderRadius: 4 }}>
          <img src={(img as any).url} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
        </div>
      ))}
    </div>
  ),
};
