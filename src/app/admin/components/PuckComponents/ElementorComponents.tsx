import React, { useState } from "react";
import { ComponentConfig } from "@measured/puck";

// ====== ALERT / NOTICE BOX ======
export type AlertBoxProps = {
  type: "info" | "warning" | "success" | "error";
  title: string;
  content: string;
  showIcon: boolean;
};

export const AlertBox: ComponentConfig<AlertBoxProps> = {
  label: "Alert / Notice Box",
  defaultProps: {
    type: "info",
    title: "Information",
    content: "This is an important notice.",
    showIcon: true,
  },
  fields: {
    type: {
      type: "select",
      label: "Type",
      options: [
        { label: "Info (Blue)", value: "info" },
        { label: "Warning (Yellow)", value: "warning" },
        { label: "Success (Green)", value: "success" },
        { label: "Error (Red)", value: "error" },
      ],
    },
    title: { type: "text", label: "Title" },
    content: { type: "textarea", label: "Content" },
    showIcon: {
      type: "select",
      label: "Show Icon",
      options: [{ label: "Yes", value: true }, { label: "No", value: false }],
    },
  },
  render: ({ type, title, content, showIcon, puck }: any) => {
    const styles: Record<string, { bg: string; border: string; icon: string; titleColor: string }> = {
      info:    { bg: "#EFF6FF", border: "#3B82F6", icon: "ℹ️", titleColor: "#1D4ED8" },
      warning: { bg: "#FFFBEB", border: "#F59E0B", icon: "⚠️", titleColor: "#92400E" },
      success: { bg: "#F0FDF4", border: "#22C55E", icon: "✅", titleColor: "#166534" },
      error:   { bg: "#FEF2F2", border: "#EF4444", icon: "❌", titleColor: "#991B1B" },
    };
    const s = styles[type] || styles.info;
    return (
      <div
        ref={puck.dragRef}
        style={{
          backgroundColor: s.bg,
          borderLeft: `4px solid ${s.border}`,
          borderRadius: "8px",
          padding: "16px 20px",
          margin: "0 0 16px 0",
          fontFamily: "Syne, sans-serif",
        }}
      >
        {title && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            {showIcon && <span style={{ fontSize: "18px" }}>{s.icon}</span>}
            <strong style={{ color: s.titleColor, fontSize: "16px" }}>{title}</strong>
          </div>
        )}
        <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{content}</p>
      </div>
    );
  },
};

// ====== BADGE / TAG ======
export type BadgeProps = {
  text: string;
  color: string;
  bgColor: string;
  borderRadius: string;
  fontSize: string;
};

export const Badge: ComponentConfig<BadgeProps> = {
  label: "Badge / Tag",
  defaultProps: {
    text: "New",
    color: "#FFFFFF",
    bgColor: "#0EA5A0",
    borderRadius: "20px",
    fontSize: "12px",
  },
  fields: {
    text: { type: "text", label: "Text" },
    color: { type: "text", label: "Text Color" },
    bgColor: { type: "text", label: "Background Color" },
    borderRadius: { type: "text", label: "Border Radius" },
    fontSize: { type: "text", label: "Font Size" },
  },
  render: ({ text, color, bgColor, borderRadius, fontSize, puck }: any) => (
    <span
      ref={puck.dragRef}
      style={{
        display: "inline-block",
        color,
        backgroundColor: bgColor,
        borderRadius,
        fontSize,
        fontFamily: "Syne, sans-serif",
        fontWeight: 600,
        padding: "4px 12px",
        margin: "0 4px 8px 0",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  ),
};

// ====== CALLOUT / HIGHLIGHTED QUOTE ======
export type CalloutProps = {
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  fontSize: string;
  padding: string;
};

export const Callout: ComponentConfig<CalloutProps> = {
  label: "Callout / Quote Block",
  defaultProps: {
    text: "This is an important quote or highlighted content.",
    bgColor: "#F0FDFD",
    textColor: "#0D1B2A",
    borderColor: "#0EA5A0",
    fontSize: "18px",
    padding: "24px 32px",
  },
  fields: {
    text: { type: "textarea", label: "Text" },
    bgColor: { type: "text", label: "Background Color" },
    textColor: { type: "text", label: "Text Color" },
    borderColor: { type: "text", label: "Left Border Color" },
    fontSize: { type: "text", label: "Font Size" },
    padding: { type: "text", label: "Padding" },
  },
  render: ({ text, bgColor, textColor, borderColor, fontSize, padding, puck }: any) => (
    <blockquote
      ref={puck.dragRef}
      style={{
        backgroundColor: bgColor,
        borderLeft: `6px solid ${borderColor}`,
        borderRadius: "0 8px 8px 0",
        padding,
        margin: "0 0 24px 0",
        color: textColor,
        fontSize,
        fontFamily: "Cormorant Garamond, serif",
        fontStyle: "italic",
        lineHeight: 1.7,
      }}
    >
      {text}
    </blockquote>
  ),
};

// ====== DIVIDER ======
export type DividerProps = {
  style: "solid" | "dashed" | "dotted";
  color: string;
  width: string;
  thickness: string;
  margin: string;
};

export const Divider: ComponentConfig<DividerProps> = {
  label: "Divider / Separator",
  defaultProps: {
    style: "solid",
    color: "#E4E8EE",
    width: "100%",
    thickness: "1px",
    margin: "32px 0",
  },
  fields: {
    style: {
      type: "select",
      label: "Style",
      options: [
        { label: "Solid", value: "solid" },
        { label: "Dashed", value: "dashed" },
        { label: "Dotted", value: "dotted" },
      ],
    },
    color: { type: "text", label: "Color" },
    width: { type: "text", label: "Width" },
    thickness: { type: "text", label: "Thickness" },
    margin: { type: "text", label: "Margin" },
  },
  render: ({ style, color, width, thickness, margin, puck }: any) => (
    <hr
      ref={puck.dragRef}
      style={{
        border: "none",
        borderTop: `${thickness} ${style} ${color}`,
        width,
        margin,
      }}
    />
  ),
};

// ====== PERSON CARD ======
export type PersonCardProps = {
  name: string;
  title: string;
  affiliation: string;
  image: string;
  bio: string;
  layout: "vertical" | "horizontal";
  bgColor: string;
};

export const PersonCard: ComponentConfig<PersonCardProps> = {
  label: "Person / Speaker Card",
  defaultProps: {
    name: "Dr. Full Name",
    title: "Professor",
    affiliation: "University Name, Country",
    image: "",
    bio: "",
    layout: "vertical",
    bgColor: "#FFFFFF",
  },
  fields: {
    name: { type: "text", label: "Name" },
    title: { type: "text", label: "Title / Role" },
    affiliation: { type: "text", label: "Affiliation" },
    image: { type: "text", label: "Photo URL" },
    bio: { type: "textarea", label: "Bio / Description" },
    layout: {
      type: "select",
      label: "Layout",
      options: [
        { label: "Vertical (Card)", value: "vertical" },
        { label: "Horizontal (Row)", value: "horizontal" },
      ],
    },
    bgColor: { type: "text", label: "Card Background" },
  },
  render: ({ name, title, affiliation, image, bio, layout, bgColor, puck }: any) => {
    const isHorizontal = layout === "horizontal";
    return (
      <div
        ref={puck.dragRef}
        style={{
          display: isHorizontal ? "flex" : "block",
          alignItems: isHorizontal ? "flex-start" : undefined,
          gap: isHorizontal ? "24px" : undefined,
          backgroundColor: bgColor,
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          border: "1px solid #F0EDE8",
          marginBottom: "16px",
          fontFamily: "Syne, sans-serif",
        }}
      >
        {image && (
          <img
            src={image}
            alt={name}
            style={{
              width: isHorizontal ? "100px" : "100%",
              maxWidth: isHorizontal ? "100px" : "200px",
              height: isHorizontal ? "100px" : "auto",
              borderRadius: isHorizontal ? "50%" : "8px",
              objectFit: "cover",
              flexShrink: 0,
              margin: isHorizontal ? "0" : "0 auto 16px",
              display: "block",
            }}
          />
        )}
        <div style={{ textAlign: isHorizontal ? "left" : "center" }}>
          <h3 style={{ margin: "0 0 4px", fontSize: "18px", fontWeight: 700, color: "#0D1B2A" }}>{name}</h3>
          {title && <p style={{ margin: "0 0 2px", fontSize: "14px", color: "#0EA5A0", fontWeight: 600 }}>{title}</p>}
          {affiliation && <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#64748B" }}>{affiliation}</p>}
          {bio && <p style={{ margin: 0, fontSize: "14px", color: "#374151", lineHeight: 1.6 }}>{bio}</p>}
        </div>
      </div>
    );
  },
};

// ====== STAT CARD ======
export type StatCardProps = {
  number: string;
  label: string;
  icon: string;
  color: string;
  bgColor: string;
  borderRadius: string;
};

export const StatCard: ComponentConfig<StatCardProps> = {
  label: "Stat / Counter Card",
  defaultProps: {
    number: "200+",
    label: "Attendees",
    icon: "👥",
    color: "#0EA5A0",
    bgColor: "#F0FDFD",
    borderRadius: "12px",
  },
  fields: {
    number: { type: "text", label: "Number / Value" },
    label: { type: "text", label: "Label" },
    icon: { type: "text", label: "Icon (emoji)" },
    color: { type: "text", label: "Number Color" },
    bgColor: { type: "text", label: "Background Color" },
    borderRadius: { type: "text", label: "Border Radius" },
  },
  render: ({ number, label, icon, color, bgColor, borderRadius, puck }: any) => (
    <div
      ref={puck.dragRef}
      style={{
        backgroundColor: bgColor,
        borderRadius,
        padding: "24px 16px",
        textAlign: "center",
        fontFamily: "Syne, sans-serif",
      }}
    >
      {icon && <div style={{ fontSize: "28px", marginBottom: "8px" }}>{icon}</div>}
      <div style={{ fontSize: "42px", fontWeight: 700, color, lineHeight: 1, marginBottom: "8px" }}>{number}</div>
      <div style={{ fontSize: "14px", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</div>
    </div>
  ),
};

// ====== TIMELINE ======
export type TimelineProps = {
  items: { date: string; title: string; description: string; passed: boolean }[];
  accentColor: string;
};

export const Timeline: ComponentConfig<TimelineProps> = {
  label: "Timeline / Important Dates",
  defaultProps: {
    items: [
      { date: "June 30, 2026", title: "Paper Submission Deadline", description: "", passed: false },
      { date: "July 31, 2026", title: "Notification of Acceptance", description: "", passed: false },
      { date: "Sep 25, 2026", title: "Camera-Ready Submission", description: "", passed: false },
      { date: "Oct 29-30, 2026", title: "Conference Dates", description: "", passed: false },
    ],
    accentColor: "#0EA5A0",
  },
  fields: {
    items: {
      type: "array",
      label: "Events",
      arrayFields: {
        date: { type: "text", label: "Date" },
        title: { type: "text", label: "Title" },
        description: { type: "text", label: "Description" },
        passed: {
          type: "select",
          label: "Status",
          options: [
            { label: "Upcoming", value: false },
            { label: "Passed", value: true },
          ],
        },
      },
      getItemSummary: (item: any) => item.title || "Event",
    } as any,
    accentColor: { type: "text", label: "Accent Color" },
  },
  render: ({ items, accentColor, puck }: any) => (
    <div ref={puck.dragRef} style={{ fontFamily: "Syne, sans-serif", padding: "8px 0" }}>
      {(items || []).map((item: any, i: number) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "24px",
            opacity: item.passed ? 0.5 : 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: item.passed ? "#CBD5E1" : accentColor,
                flexShrink: 0,
                marginTop: "4px",
              }}
            />
            {i < (items.length - 1) && (
              <div style={{ width: "2px", flex: 1, backgroundColor: "#E4E8EE", marginTop: "4px" }} />
            )}
          </div>
          <div style={{ paddingBottom: i < items.length - 1 ? "0" : "0" }}>
            <div style={{ fontSize: "13px", color: "#64748B", marginBottom: "2px", fontWeight: 500 }}>{item.date}</div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B2A", marginBottom: item.description ? "4px" : "0" }}>{item.title}</div>
            {item.description && <div style={{ fontSize: "14px", color: "#64748B" }}>{item.description}</div>}
          </div>
        </div>
      ))}
    </div>
  ),
};

// ====== TABS ======
export type TabsBlockProps = {
  tabs: { label: string; content: string }[];
  activeColor: string;
};

export const TabsBlock: ComponentConfig<TabsBlockProps> = {
  label: "Tabs",
  defaultProps: {
    tabs: [
      { label: "Tab 1", content: "Content for Tab 1" },
      { label: "Tab 2", content: "Content for Tab 2" },
    ],
    activeColor: "#0EA5A0",
  },
  fields: {
    tabs: {
      type: "array",
      label: "Tabs",
      arrayFields: {
        label: { type: "text", label: "Tab Label" },
        content: { type: "textarea", label: "Tab Content (HTML)" },
      },
      getItemSummary: (tab: any) => tab.label || "Tab",
    } as any,
    activeColor: { type: "text", label: "Active Tab Color" },
  },
  render: ({ tabs, activeColor, puck }: any) => {
    // For SSR / static render use first tab
    const [active, setActive] = useState(0);
    return (
      <div ref={puck.dragRef} style={{ fontFamily: "Syne, sans-serif", margin: "0 0 24px 0" }}>
        <div style={{ display: "flex", borderBottom: "2px solid #E4E8EE", marginBottom: "0" }}>
          {(tabs || []).map((tab: any, i: number) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "10px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "Syne, sans-serif",
                color: active === i ? activeColor : "#64748B",
                borderBottom: active === i ? `2px solid ${activeColor}` : "2px solid transparent",
                marginBottom: "-2px",
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          style={{
            padding: "24px",
            border: "1px solid #E4E8EE",
            borderTop: "none",
            borderRadius: "0 0 8px 8px",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#374151",
          }}
          dangerouslySetInnerHTML={{ __html: tabs?.[active]?.content || "" }}
        />
      </div>
    );
  },
};

// ====== VIDEO EMBED ======
export type VideoEmbedProps = {
  url: string;
  title: string;
  height: string;
  borderRadius: string;
};

export const VideoEmbed: ComponentConfig<VideoEmbedProps> = {
  label: "Video Embed",
  defaultProps: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Conference Video",
    height: "400px",
    borderRadius: "12px",
  },
  fields: {
    url: { type: "text", label: "Embed URL" },
    title: { type: "text", label: "Title" },
    height: { type: "text", label: "Height" },
    borderRadius: { type: "text", label: "Border Radius" },
  },
  render: ({ url, title, height, borderRadius, puck }: any) => (
    <div
      ref={puck.dragRef}
      style={{
        borderRadius,
        overflow: "hidden",
        margin: "0 0 24px 0",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <iframe
        src={url}
        title={title}
        height={height}
        width="100%"
        style={{ border: "none", display: "block" }}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  ),
};

// ====== PRICING CARD ======
export type PricingCardProps = {
  plan: string;
  price: string;
  currency: string;
  period: string;
  features: string[];
  btnText: string;
  btnUrl: string;
  highlighted: boolean;
  bgColor: string;
  accentColor: string;
};

export const PricingCard: ComponentConfig<PricingCardProps> = {
  label: "Pricing / Registration Card",
  defaultProps: {
    plan: "IEEE Member",
    price: "250",
    currency: "USD",
    period: "Early Bird",
    features: [
      "Full conference access",
      "IEEE Proceedings",
      "Coffee & Lunch",
      "Conference dinner",
    ],
    btnText: "Register Now",
    btnUrl: "#",
    highlighted: false,
    bgColor: "#FFFFFF",
    accentColor: "#0EA5A0",
  },
  fields: {
    plan: { type: "text", label: "Plan Name" },
    price: { type: "text", label: "Price" },
    currency: { type: "text", label: "Currency" },
    period: { type: "text", label: "Period / Label" },
    features: {
      type: "array",
      label: "Features",
      arrayFields: { value: { type: "text", label: "Feature" } },
      getItemSummary: (item: any) => item.value || "Feature",
    } as any,
    btnText: { type: "text", label: "Button Text" },
    btnUrl: { type: "text", label: "Button URL" },
    highlighted: {
      type: "select",
      label: "Featured / Highlighted",
      options: [{ label: "No", value: false }, { label: "Yes", value: true }],
    },
    bgColor: { type: "text", label: "Background Color" },
    accentColor: { type: "text", label: "Accent Color" },
  },
  render: ({ plan, price, currency, period, features, btnText, btnUrl, highlighted, bgColor, accentColor, puck }: any) => {
    const featureList = (features || []).map((f: any) => typeof f === "string" ? f : f.value || "");
    return (
      <div
        ref={puck.dragRef}
        style={{
          backgroundColor: bgColor,
          border: highlighted ? `2px solid ${accentColor}` : "1px solid #E4E8EE",
          borderRadius: "16px",
          padding: "32px 24px",
          textAlign: "center",
          fontFamily: "Syne, sans-serif",
          boxShadow: highlighted ? `0 8px 30px ${accentColor}33` : "0 2px 8px rgba(0,0,0,0.06)",
          position: "relative",
        }}
      >
        {highlighted && (
          <div style={{
            position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
            backgroundColor: accentColor, color: "#fff", fontSize: "12px", fontWeight: 700,
            padding: "4px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px",
          }}>
            Popular
          </div>
        )}
        <div style={{ fontSize: "14px", color: "#64748B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{plan}</div>
        <div style={{ marginBottom: "8px" }}>
          <span style={{ fontSize: "14px", color: accentColor, fontWeight: 600 }}>{currency} </span>
          <span style={{ fontSize: "48px", fontWeight: 800, color: "#0D1B2A", lineHeight: 1 }}>{price}</span>
        </div>
        <div style={{ fontSize: "13px", color: "#94A3B8", marginBottom: "24px" }}>{period}</div>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", textAlign: "left" }}>
          {featureList.map((f: string, i: number) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderBottom: "1px solid #F1F5F9", fontSize: "14px", color: "#374151" }}>
              <span style={{ color: accentColor, fontWeight: 700 }}>✓</span> {f}
            </li>
          ))}
        </ul>
        <a
          href={btnUrl}
          style={{
            display: "block",
            backgroundColor: highlighted ? accentColor : "transparent",
            color: highlighted ? "#fff" : accentColor,
            border: `2px solid ${accentColor}`,
            borderRadius: "30px",
            padding: "12px 24px",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "15px",
            transition: "all 0.2s",
          }}
        >
          {btnText}
        </a>
      </div>
    );
  },
};

// ====== PROGRESS BAR ======
export type ProgressBarProps = {
  label: string;
  value: number;
  max: number;
  color: string;
  bgColor: string;
  showValue: boolean;
};

export const ProgressBar: ComponentConfig<ProgressBarProps> = {
  label: "Progress Bar",
  defaultProps: {
    label: "Papers Submitted",
    value: 65,
    max: 100,
    color: "#0EA5A0",
    bgColor: "#E4E8EE",
    showValue: true,
  },
  fields: {
    label: { type: "text", label: "Label" },
    value: { type: "number", label: "Current Value" },
    max: { type: "number", label: "Max Value" },
    color: { type: "text", label: "Fill Color" },
    bgColor: { type: "text", label: "Track Color" },
    showValue: {
      type: "select",
      label: "Show Value",
      options: [{ label: "Yes", value: true }, { label: "No", value: false }],
    },
  },
  render: ({ label, value, max, color, bgColor, showValue, puck }: any) => {
    const percent = Math.min(100, Math.max(0, (value / max) * 100));
    return (
      <div ref={puck.dragRef} style={{ fontFamily: "Syne, sans-serif", marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#374151" }}>{label}</span>
          {showValue && <span style={{ fontSize: "14px", color: "#64748B" }}>{value}/{max}</span>}
        </div>
        <div style={{ backgroundColor: bgColor, borderRadius: "20px", height: "8px", overflow: "hidden" }}>
          <div style={{ backgroundColor: color, width: `${percent}%`, height: "100%", borderRadius: "20px", transition: "width 0.5s ease" }} />
        </div>
      </div>
    );
  },
};

// ====== ICON TEXT ROW ======
export type IconTextRowProps = {
  icon: string;
  text: string;
  subtext: string;
  iconSize: string;
  color: string;
  gap: string;
};

export const IconTextRow: ComponentConfig<IconTextRowProps> = {
  label: "Icon + Text Row",
  defaultProps: {
    icon: "📅",
    text: "October 29-30, 2026",
    subtext: "Conference Dates",
    iconSize: "32px",
    color: "#0D1B2A",
    gap: "16px",
  },
  fields: {
    icon: { type: "text", label: "Icon (emoji or text)" },
    text: { type: "text", label: "Primary Text" },
    subtext: { type: "text", label: "Secondary Text" },
    iconSize: { type: "text", label: "Icon Size" },
    color: { type: "text", label: "Text Color" },
    gap: { type: "text", label: "Gap" },
  },
  render: ({ icon, text, subtext, iconSize, color, gap, puck }: any) => (
    <div
      ref={puck.dragRef}
      style={{
        display: "flex",
        alignItems: "center",
        gap,
        padding: "12px 0",
        fontFamily: "Syne, sans-serif",
      }}
    >
      <span style={{ fontSize: iconSize, flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontSize: "16px", fontWeight: 700, color }}>{text}</div>
        {subtext && <div style={{ fontSize: "13px", color: "#94A3B8", marginTop: "2px" }}>{subtext}</div>}
      </div>
    </div>
  ),
};

// ====== TWO COLUMN TEXT ======
export type TwoColTextProps = {
  leftContent: string;
  rightContent: string;
  gap: string;
  ratio: string;
};

export const TwoColText: ComponentConfig<TwoColTextProps> = {
  label: "Two Column Text",
  defaultProps: {
    leftContent: "<p>Left column content here...</p>",
    rightContent: "<p>Right column content here...</p>",
    gap: "48px",
    ratio: "1fr 1fr",
  },
  fields: {
    leftContent: { type: "textarea", label: "Left Content (HTML)" },
    rightContent: { type: "textarea", label: "Right Content (HTML)" },
    gap: { type: "text", label: "Gap" },
    ratio: { type: "text", label: "Grid Ratio (e.g. 2fr 1fr)" },
  },
  render: ({ leftContent, rightContent, gap, ratio, puck }: any) => (
    <div
      ref={puck.dragRef}
      style={{
        display: "grid",
        gridTemplateColumns: ratio || "1fr 1fr",
        gap: gap || "48px",
        fontFamily: "Syne, sans-serif",
        lineHeight: 1.7,
        color: "#374151",
        fontSize: "16px",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: leftContent }} />
      <div dangerouslySetInnerHTML={{ __html: rightContent }} />
    </div>
  ),
};

// ====== NUMBERED LIST ======
export type NumberedListProps = {
  items: { title: string; description: string }[];
  accentColor: string;
  bgColor: string;
};

export const NumberedList: ComponentConfig<NumberedListProps> = {
  label: "Numbered Steps / Process",
  defaultProps: {
    items: [
      { title: "Step One", description: "Description of step one." },
      { title: "Step Two", description: "Description of step two." },
    ],
    accentColor: "#0EA5A0",
    bgColor: "#F0FDFD",
  },
  fields: {
    items: {
      type: "array",
      label: "Steps",
      arrayFields: {
        title: { type: "text", label: "Title" },
        description: { type: "textarea", label: "Description" },
      },
      getItemSummary: (item: any) => item.title || "Step",
    } as any,
    accentColor: { type: "text", label: "Accent Color" },
    bgColor: { type: "text", label: "Number Background" },
  },
  render: ({ items, accentColor, bgColor, puck }: any) => (
    <div ref={puck.dragRef} style={{ fontFamily: "Syne, sans-serif" }}>
      {(items || []).map((item: any, i: number) => (
        <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "24px", alignItems: "flex-start" }}>
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            backgroundColor: bgColor, color: accentColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "18px", flexShrink: 0,
            border: `2px solid ${accentColor}`,
          }}>
            {i + 1}
          </div>
          <div>
            <h4 style={{ margin: "0 0 6px", color: "#0D1B2A", fontSize: "17px", fontWeight: 700 }}>{item.title}</h4>
            <p style={{ margin: 0, color: "#64748B", fontSize: "15px", lineHeight: 1.6 }}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ====== HERO BANNER ======
export type HeroBannerProps = {
  title: string; subtitle: string; bgColor: string; textColor: string;
  btnText: string; btnUrl: string; btnColor: string; minHeight: string;
  pattern: "none" | "dots" | "lines";
};
export const HeroBanner: any = {
  label: "Hero Banner (Full Width)",
  defaultProps: { title: "Your Research Belongs Here", subtitle: "IEEE-indexed proceedings · Double-blind peer review · International audience", bgColor: "#1B4F91", textColor: "#FFFFFF", btnText: "Submit Paper", btnUrl: "#", btnColor: "#C12026", minHeight: "300px", pattern: "dots" },
  fields: {
    title: { type: "text", label: "Title" }, subtitle: { type: "text", label: "Subtitle" },
    bgColor: { type: "text", label: "Background Color" }, textColor: { type: "text", label: "Text Color" },
    btnText: { type: "text", label: "Button Text" }, btnUrl: { type: "text", label: "Button URL" },
    btnColor: { type: "text", label: "Button Color" }, minHeight: { type: "text", label: "Min Height" },
    pattern: { type: "select", label: "Background Pattern", options: [{ label: "None", value: "none" }, { label: "Dots", value: "dots" }, { label: "Lines", value: "lines" }] },
  },
  render: ({ title, subtitle, bgColor, textColor, btnText, btnUrl, btnColor, minHeight, pattern, puck }: any) => {
    const patternStyle = pattern === "dots" ? { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "20px 20px" } : pattern === "lines" ? { backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 0, transparent 50%)", backgroundSize: "16px 16px" } : {};
    const React = require("react");
    return React.createElement("div", { ref: puck.dragRef, style: { backgroundColor: bgColor, minHeight, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "60px 40px" } },
      React.createElement("div", { style: { position: "absolute", inset: 0, ...patternStyle } }),
      React.createElement("div", { style: { position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 } },
        React.createElement("h2", { style: { fontSize: 42, fontWeight: 800, color: textColor, fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 16 } }, title),
        subtitle && React.createElement("p", { style: { fontSize: 16, color: textColor, opacity: 0.8, marginBottom: 28, lineHeight: 1.7 } }, subtitle),
        btnText && React.createElement("a", { href: btnUrl, style: { display: "inline-block", padding: "12px 32px", background: btnColor, color: "#fff", fontWeight: 700, borderRadius: 4, textDecoration: "none", textTransform: "uppercase", fontSize: 14 } }, btnText)
      )
    );
  },
};

// ====== FEATURE CARD ======
export const FeatureCard: any = {
  label: "Feature Card",
  defaultProps: { icon: "🔐", title: "Post-Quantum Cryptography", description: "Research on cryptographic systems that are secure against quantum computers.", bgColor: "#FFFFFF", accentColor: "#1B4F91", iconBg: "#E8F0FE", bordered: true },
  fields: {
    icon: { type: "text", label: "Icon (emoji)" }, title: { type: "text", label: "Title" }, description: { type: "textarea", label: "Description" },
    bgColor: { type: "text", label: "Card Background" }, accentColor: { type: "text", label: "Accent Color" }, iconBg: { type: "text", label: "Icon Background" },
    bordered: { type: "select", label: "Show Border", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
  },
  render: ({ icon, title, description, bgColor, accentColor, iconBg, bordered, puck }: any) => {
    const React = require("react");
    return React.createElement("div", { ref: puck.dragRef, style: { background: bgColor, padding: 24, borderRadius: 4, border: bordered ? "1px solid #DEE2E6" : "none", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", fontFamily: "var(--font-body)" } },
      React.createElement("div", { style: { width: 48, height: 48, borderRadius: 4, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 } }, icon),
      React.createElement("h3", { style: { fontSize: 17, fontWeight: 700, color: accentColor, fontFamily: "var(--font-display)", marginBottom: 8, textTransform: "uppercase" } }, title),
      React.createElement("p", { style: { fontSize: 14, color: "#4A4A4A", lineHeight: 1.7, margin: 0 } }, description)
    );
  },
};

// ====== SCHEDULE TABLE ======
export const ScheduleTable: any = {
  label: "Schedule / Program Table",
  defaultProps: {
    events: [
      { time: "09:00", title: "Opening Ceremony", speaker: "Conference Chair", room: "Main Hall", type: "keynote" },
      { time: "09:30", title: "Keynote: Post-Quantum Cryptography", speaker: "Dr. A. Smith, MIT", room: "Main Hall", type: "keynote" },
      { time: "10:45", title: "Coffee Break", speaker: "", room: "", type: "break" },
      { time: "11:15", title: "Session A: Blockchain Security", speaker: "", room: "Room 201", type: "session" },
    ],
    accentColor: "#1B4F91",
  },
  fields: {
    events: { type: "array", label: "Events", arrayFields: { time: { type: "text", label: "Time" }, title: { type: "text", label: "Title" }, speaker: { type: "text", label: "Speaker" }, room: { type: "text", label: "Room" }, type: { type: "select", label: "Type", options: [{ label: "Keynote", value: "keynote" }, { label: "Session", value: "session" }, { label: "Break", value: "break" }, { label: "Other", value: "other" }] } }, getItemSummary: (e: any) => `${e.time || ""} - ${e.title || "Event"}` } as any,
    accentColor: { type: "text", label: "Accent Color" },
  },
  render: ({ events, accentColor, puck }: any) => {
    const React = require("react");
    return React.createElement("div", { ref: puck.dragRef, style: { fontFamily: "var(--font-body)", overflowX: "auto" } },
      React.createElement("div", { style: { border: "1px solid #DEE2E6", borderRadius: 4, overflow: "hidden" } },
        (events || []).map((ev: any, i: number) => {
          const isKeynote = ev.type === "keynote"; const isBreak = ev.type === "break";
          return React.createElement("div", { key: i, style: { display: "flex", background: isKeynote ? "#E8F0FE" : isBreak ? "#F8F9FA" : (i % 2 === 0 ? "#fff" : "#F8F9FA"), borderLeft: isKeynote ? `4px solid ${accentColor}` : isBreak ? "4px solid #DEE2E6" : "4px solid transparent", borderBottom: i < events.length - 1 ? "1px solid #DEE2E6" : "none" } },
            React.createElement("div", { style: { width: 80, padding: "14px 16px", flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, color: accentColor, borderRight: "1px solid #DEE2E6" } }, ev.time),
            React.createElement("div", { style: { flex: 1, padding: "14px 16px" } },
              React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: "#212529" } }, ev.title),
              ev.speaker && React.createElement("div", { style: { fontSize: 13, color: "#4A4A4A", marginTop: 3 } }, ev.speaker)
            ),
            ev.room && React.createElement("div", { style: { padding: "14px 16px", flexShrink: 0, fontSize: 12, color: "#4A4A4A", display: "flex", alignItems: "center" } },
              React.createElement("span", { style: { padding: "3px 8px", background: "#DEE2E6", borderRadius: 3 } }, ev.room)
            )
          );
        })
      )
    );
  },
};

// ====== INFO BOX ======
export const InfoBox: any = {
  label: "Info Box",
  defaultProps: { title: "Important Notice", content: "Please read all submission guidelines carefully before submitting your paper.", icon: "ℹ️", bgColor: "#E8F0FE", borderColor: "#1B4F91", titleColor: "#0b2740" },
  fields: { title: { type: "text", label: "Title" }, content: { type: "textarea", label: "Content (HTML)" }, icon: { type: "text", label: "Icon (emoji)" }, bgColor: { type: "text", label: "Background Color" }, borderColor: { type: "text", label: "Border Color" }, titleColor: { type: "text", label: "Title Color" } },
  render: ({ title, content, icon, bgColor, borderColor, titleColor, puck }: any) => {
    const React = require("react");
    return React.createElement("div", { ref: puck.dragRef, style: { background: bgColor, borderLeft: `4px solid ${borderColor}`, padding: "20px 24px", marginBottom: 16, borderRadius: "0 4px 4px 0", fontFamily: "var(--font-body)" } },
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10 } },
        icon && React.createElement("span", { style: { fontSize: 20 } }, icon),
        React.createElement("h4", { style: { margin: 0, fontSize: 15, fontWeight: 800, color: titleColor, fontFamily: "var(--font-display)", textTransform: "uppercase" } }, title)
      ),
      React.createElement("div", { style: { fontSize: 14, color: "#212529", lineHeight: 1.75 }, dangerouslySetInnerHTML: { __html: content } })
    );
  },
};

// ====== GRADIENT SECTION ======
export const GradientSection: any = {
  label: "Gradient Section Container",
  defaultProps: { fromColor: "#0b2740", toColor: "#1B4F91", direction: "135deg", padding: "64px 24px" },
  fields: { fromColor: { type: "text", label: "From Color" }, toColor: { type: "text", label: "To Color" }, direction: { type: "text", label: "Angle (e.g. 135deg)" }, padding: { type: "text", label: "Padding" } },
  render: ({ fromColor, toColor, direction, padding, puck }: any) => {
    const React = require("react");
    return React.createElement("section", { ref: puck.dragRef, style: { background: `linear-gradient(${direction}, ${fromColor}, ${toColor})`, padding, position: "relative", overflow: "hidden" } },
      React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto" } }, puck.renderDropZone({ zone: "gradient-content" }))
    );
  },
};

// ====== DOWNLOAD BUTTON ======
export const DownloadButton: any = {
  label: "Download / File Button",
  defaultProps: { label: "Call for Papers 2026", subLabel: "PDF · 2.4 MB", url: "#", icon: "📄", bgColor: "#E8F0FE", textColor: "#1B4F91" },
  fields: { label: { type: "text", label: "Label" }, subLabel: { type: "text", label: "Sub-label" }, url: { type: "text", label: "Download URL" }, icon: { type: "text", label: "Icon (emoji)" }, bgColor: { type: "text", label: "Background Color" }, textColor: { type: "text", label: "Text Color" } },
  render: ({ label, subLabel, url, icon, bgColor, textColor, puck }: any) => {
    const React = require("react");
    return React.createElement("a", { ref: puck.dragRef, href: url, download: true, style: { display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", background: bgColor, border: `1px solid ${textColor}33`, borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-body)", marginBottom: 8 } },
      React.createElement("span", { style: { fontSize: 28, flexShrink: 0 } }, icon),
      React.createElement("div", { style: { flex: 1 } },
        React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: textColor } }, label),
        subLabel && React.createElement("div", { style: { fontSize: 12, color: "#4A4A4A", marginTop: 2 } }, subLabel)
      ),
      React.createElement("span", { style: { fontSize: 18, color: textColor, opacity: 0.6 } }, "↓")
    );
  },
};
