import React from "react";
import type { Config } from "@measured/puck";
import { HomeHero, HomeImportantDates, HomeAbout, HomeCfa } from "./HomeComponents";
import { TopImageHeader, ContactCTA, Map, ImageGrid } from "./GeneralComponents";
import {
  AlertBox, Badge, Callout, Divider, PersonCard, StatCard,
  Timeline, TabsBlock, VideoEmbed, PricingCard, ProgressBar,
  IconTextRow, TwoColText, NumberedList,
  HeroBanner, FeatureCard, ScheduleTable, InfoBox, GradientSection, DownloadButton,
} from "./ElementorComponents";
import { RichTextField } from "./RichTextField";
import { makeTipTapField } from "./TipTapField";
import { makeMediaField } from "./MediaPickerField";
import { VenuePageTitle, VenueDetails, VenuePhotoGrid, VenuePhotoItem, VenueAboutContainer, VenueText, VenueLink } from "./VenueComponents";
import {
  Ai4CrisCountdown,
  Ai4CrisTimeline,
  Ai4CrisSection,
  Ai4CrisMemberTabs,
  Ai4CrisTrackAccordion,
  Ai4CrisHeading,
  Ai4CrisText,
  Ai4CrisButton
} from "./Ai4CrisComponents";

// ==========================
// Shared Field Configs
// ==========================
const fontFamilyOptions = [
  { label: "Montserrat (Display)", value: "var(--font-display)" },
  { label: "Open Sans (Body)", value: "var(--font-body)" },
  { label: "JetBrains Mono", value: "var(--font-mono)" },
  { label: "System Default", value: "system-ui, sans-serif" },
];

const fontSizeOptions = [
  { label: "12px", value: "12px" }, { label: "14px", value: "14px" },
  { label: "16px", value: "16px" }, { label: "18px", value: "18px" },
  { label: "20px", value: "20px" }, { label: "24px", value: "24px" },
  { label: "28px", value: "28px" }, { label: "32px", value: "32px" },
  { label: "36px", value: "36px" }, { label: "42px", value: "42px" },
  { label: "48px", value: "48px" }, { label: "56px", value: "56px" },
  { label: "64px", value: "64px" },
];

const fontWeightOptions = [
  { label: "Normal (400)", value: "400" },
  { label: "Medium (500)", value: "500" },
  { label: "Semibold (600)", value: "600" },
  { label: "Bold (700)", value: "700" },
  { label: "Extrabold (800)", value: "800" },
];

const textAlignOptions = [
  { label: "Left", value: "left" },
  { label: "Center", value: "center" },
  { label: "Right", value: "right" },
  { label: "Justify", value: "justify" },
];

// ==========================
// Component Definitions
// ==========================

export const puckConfig: Config = {
  categories: {
    ai4cris: { 
      title: "🔥 AI4CRIS 2026", 
      components: ["Ai4CrisCountdown", "Ai4CrisTimeline", "Ai4CrisSection", "Ai4CrisMemberTabs", "Ai4CrisTrackAccordion", "Ai4CrisHeading", "Ai4CrisText", "Ai4CrisButton"] 
    },
    layout: { title: "📐 Layout", components: ["HeroBanner", "TwoColText", "IconTextRow", "Divider", "GradientSection", "InfoBox"] },
    content: { title: "📦 Content", components: ["ListBlock", "NumberedList", "TableBlock", "ImageBlock", "ImageGrid", "Badge", "DownloadButton", "ScheduleTable"] },
    interactive: { title: "🎛️ Interactive", components: ["ButtonLink", "AccordionGroup", "TabsBlock", "AlertBox"] },
    media: { title: "🎬 Media", components: ["VideoEmbed", "Map"] },
    cards: { title: "🃏 Cards", components: ["PersonCard", "StatCard", "PricingCard", "IconTextRow", "TwoColText", "FeatureCard"] },
    data: { title: "📊 Data Viz", components: ["Timeline", "ProgressBar"] },
    contact: { title: "📬 Contact", components: ["ContactCTA"] },
    hero: { title: "🚀 Hero Sections", components: ["HeroBanner"] },
    home: { title: "🏠 Home Layouts", components: ["HomeHero", "HomeImportantDates", "HomeAbout", "HomeCfa"] },
    general: { title: "🌐 Page Layouts", components: ["TopImageHeader"] },
    macro: { title: "🧩 Macro Blocks", components: ["TopImageHeader", "HomeHero", "HomeImportantDates", "HomeAbout", "HomeCfa"] },
    venue: { title: "🏢 Venue", components: ["VenuePageTitle", "VenueDetails", "VenuePhotoGrid", "VenuePhotoItem", "VenueAboutContainer", "VenueText", "VenueLink"] },
  },
  root: {
    render: ({ children }: { children: React.ReactNode }) => (
      <div className="puck-root-wrapper">
        {children}
      </div>
    )
  },
  components: {
    // ===== HOME PAGE SPECIFIC =====
    HomeHero,
    HomeImportantDates,
    HomeAbout,
    HomeCfa,

    // ===== GENERAL LAYOUTS =====
    TopImageHeader,
    ContactCTA,
    Map,
    ImageGrid,

    // ===== ELEMENTOR-STYLE COMPONENTS =====
    AlertBox,
    Badge,
    Callout,
    Divider,
    PersonCard,
    StatCard,
    Timeline,
    TabsBlock,
    VideoEmbed,
    PricingCard,
    ProgressBar,
    IconTextRow,
    TwoColText,
    NumberedList,
    HeroBanner,
    FeatureCard,
    ScheduleTable,
    InfoBox,
    GradientSection,
    DownloadButton,

    // ===== VENUE COMPONENTS =====
    VenuePageTitle, VenueDetails, VenuePhotoGrid, VenuePhotoItem, VenueAboutContainer, VenueText, VenueLink,

    // ===== AI4CRIS COMPONENTS =====
    Ai4CrisCountdown,
    Ai4CrisTimeline,
    Ai4CrisSection,
    Ai4CrisMemberTabs,
    Ai4CrisTrackAccordion,
    Ai4CrisHeading,
    Ai4CrisText,
    Ai4CrisButton,

    // ====== SECTION ======
    Section: {
      label: "Section",
      defaultProps: {
        backgroundColor: "#FFFFFF",
        padding: "64px 24px",
        maxWidth: "1200px",
        borderBottom: "none",
      },
      fields: {
        backgroundColor: { type: "text", label: "Background Color" },
        padding: { type: "text", label: "Padding" },
        maxWidth: { type: "text", label: "Max Width" },
        borderBottom: { type: "text", label: "Border Bottom" },
      },
      render: ({ backgroundColor, padding, maxWidth, borderBottom, puck }: any) => (
        <section
          style={{ backgroundColor, padding, borderBottom }}
          ref={puck.dragRef}
        >
          <div style={{ maxWidth, margin: "0 auto" }}>
            {puck.renderDropZone({ zone: "content" })}
          </div>
        </section>
      ),
    },

    // ====== COLUMNS ======
    Columns: {
      label: "Columns Grid",
      defaultProps: {
        columns: 2,
        gap: "24px",
      },
      fields: {
        columns: {
          type: "select",
          label: "Columns",
          options: [
            { label: "2 Columns", value: 2 },
            { label: "3 Columns", value: 3 },
            { label: "4 Columns", value: 4 },
          ],
        },
        gap: { type: "text", label: "Gap" },
      },
      render: ({ columns, gap, puck }: any) => (
        <div
          ref={puck.dragRef}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap,
          }}
        >
          {Array.from({ length: columns }).map((_, i) => (
            <div key={i}>
              {puck.renderDropZone({ zone: `column-${i}` })}
            </div>
          ))}
        </div>
      ),
    },

    // ====== SPACER ======
    Spacer: {
      label: "Spacer",
      defaultProps: { height: "40px" },
      fields: {
        height: { type: "text", label: "Height" },
      },
      render: ({ height, puck }: any) => (
        <div ref={puck.dragRef} style={{ height }} />
      ),
    },

    // ====== SECTION HEADING ======
    SectionHeading: {
      label: "Heading",
      defaultProps: {
        content: "Section Title",
        level: 2,
        fontSize: "36px",
        fontFamily: "var(--font-display)",
        fontWeight: "700",
        fontStyle: "normal",
        color: "#212529",
        textAlign: "left",
        margin: "0 0 24px 0",
      },
      fields: {
        content: { type: "textarea", label: "Heading Text" },
        level: {
          type: "select",
          label: "Level (H1-H6)",
          options: [
            { label: "H1", value: 1 }, { label: "H2", value: 2 },
            { label: "H3", value: 3 }, { label: "H4", value: 4 },
            { label: "H5", value: 5 }, { label: "H6", value: 6 },
          ],
        },
        fontSize: { type: "select", label: "Font Size", options: fontSizeOptions },
        fontFamily: { type: "select", label: "Font Family", options: fontFamilyOptions },
        fontWeight: { type: "select", label: "Font Weight", options: fontWeightOptions },
        fontStyle: {
          type: "select",
          label: "Font Style",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Italic", value: "italic" },
          ],
        },
        color: { type: "text", label: "Text Color" },
        textAlign: { type: "select", label: "Text Align", options: textAlignOptions },
        margin: { type: "text", label: "Margin" },
      },
      render: ({ content, level, fontSize, fontFamily, fontWeight, fontStyle, color, textAlign, margin, puck }: any) => {
        const Tag = (`h${level}` as any);
        return (
          <Tag
            ref={puck.dragRef}
            style={{ fontSize, fontFamily, fontWeight, fontStyle, color, textAlign, margin, lineHeight: 1.2, letterSpacing: "-0.01em" }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      },
    },

    // ====== TEXT BLOCK ======
    TextBlock: {
      label: "Text",
      defaultProps: {
        content: "Enter your text here...",
        fontSize: "16px",
        fontFamily: "var(--font-body)",
        fontWeight: "400",
        fontStyle: "normal",
        color: "#212529",
        textAlign: "left",
        lineHeight: "1.75",
        margin: "0 0 16px 0",
        padding: "0",
      },
      fields: {
        content: makeTipTapField("Content"),
        fontSize: { type: "select", label: "Font Size", options: fontSizeOptions },
        fontFamily: { type: "select", label: "Font Family", options: fontFamilyOptions },
        fontWeight: { type: "select", label: "Font Weight", options: fontWeightOptions },
        fontStyle: {
          type: "select",
          label: "Font Style",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Italic", value: "italic" },
          ],
        },
        color: { type: "text", label: "Text Color" },
        textAlign: { type: "select", label: "Text Align", options: textAlignOptions },
        lineHeight: { type: "text", label: "Line Height" },
        margin: { type: "text", label: "Margin" },
        padding: { type: "text", label: "Padding" },
      },
      render: ({ content, fontSize, fontFamily, fontWeight, fontStyle, color, textAlign, lineHeight, margin, padding, puck }: any) => (
        <div
          ref={puck.dragRef}
          style={{ fontSize, fontFamily, fontWeight, fontStyle, color, textAlign, lineHeight, margin, padding }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ),
    },

    // ====== RICH TEXT ======
    RichText: {
      label: "Rich Text (HTML)",
      defaultProps: {
        html: "<p>Rich text content with <strong>formatting</strong>.</p>",
        maxWidth: "100%",
        padding: "0",
      },
      fields: {
        html: makeTipTapField("HTML Content"),
        maxWidth: { type: "text", label: "Max Width" },
        padding: { type: "text", label: "Padding" },
      },
      render: ({ html, maxWidth, padding, puck }: any) => (
        <div
          ref={puck.dragRef}
          style={{ maxWidth, padding, fontFamily: "var(--font-body)", lineHeight: 1.75, color: "#212529" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ),
    },

    // ====== LIST BLOCK ======
    ListBlock: {
      label: "List",
      defaultProps: {
        items: ["Item 1", "Item 2", "Item 3"],
        ordered: false,
        fontSize: "16px",
        fontFamily: "var(--font-body)",
        color: "#212529",
        spacing: "8px",
      },
      fields: {
        items: {
          type: "array",
          label: "Items",
          arrayFields: {
            value: { type: "text", label: "Item" },
          },
          getItemSummary: (item: any) => item.value || "Empty item",
        } as any,
        ordered: {
          type: "select",
          label: "Style",
          options: [
            { label: "Bullets", value: false },
            { label: "Numbered", value: true },
          ],
        },
        fontSize: { type: "select", label: "Font Size", options: fontSizeOptions },
        fontFamily: { type: "select", label: "Font Family", options: fontFamilyOptions },
        color: { type: "text", label: "Text Color" },
        spacing: { type: "text", label: "Item Spacing" },
      },
      render: ({ items, ordered, fontSize, fontFamily, color, spacing, puck }: any) => {
        const Tag = ordered ? "ol" : "ul";
        const itemList = Array.isArray(items)
          ? items.map((item: any) => (typeof item === "string" ? item : item.value || ""))
          : [];
        return (
          <Tag
            ref={puck.dragRef}
            style={{
              fontSize, fontFamily, color,
              paddingLeft: "24px", margin: "0 0 16px 0",
              display: "flex", flexDirection: "column", gap: spacing,
            }}
          >
            {itemList.map((item: string, i: number) => (
              <li key={i} style={{ lineHeight: 1.7 }}>{item}</li>
            ))}
          </Tag>
        );
      },
    },

    // ====== TABLE BLOCK ======
    TableBlock: {
      label: "Table",
      defaultProps: {
        headers: ["Column 1", "Column 2", "Column 3"],
        rows: [
          ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
          ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
        ],
        headerBg: "#1B4F91",
        headerColor: "#FFFFFF",
        borderColor: "#DEE2E6",
      },
      fields: {
        headers: {
          type: "array",
          label: "Headers",
          arrayFields: { value: { type: "text" } },
          getItemSummary: (item: any) => item.value || "Header",
        } as any,
        headerBg: { type: "text", label: "Header Background" },
        headerColor: { type: "text", label: "Header Text Color" },
        borderColor: { type: "text", label: "Border Color" },
      },
      render: ({ headers, rows, headerBg, headerColor, borderColor, puck }: any) => {
        const headerList = Array.isArray(headers)
          ? headers.map((h: any) => typeof h === "string" ? h : h.value || "")
          : [];
        return (
          <div ref={puck.dragRef} style={{ overflowX: "auto", margin: "0 0 16px 0" }}>
            <table style={{
              width: "100%", borderCollapse: "collapse",
              fontFamily: "var(--font-body)", fontSize: 14,
            }}>
              <thead>
                <tr>
                  {headerList.map((h: string, i: number) => (
                    <th key={i} style={{
                      padding: "12px 16px", backgroundColor: headerBg,
                      color: headerColor, fontWeight: 700, textAlign: "left",
                      border: `1px solid ${borderColor}`,
                      fontFamily: "var(--font-display)",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(rows) && rows.map((row: string[], ri: number) => (
                  <tr key={ri}>
                    {row.map((cell: string, ci: number) => (
                      <td key={ci} style={{
                        padding: "10px 16px",
                        border: `1px solid ${borderColor}`,
                        backgroundColor: ri % 2 === 0 ? "#FFFFFF" : "#F8F9FA",
                        color: "#212529",
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
    },

    // ====== IMAGE BLOCK ======
    ImageBlock: {
      label: "Image",
      defaultProps: {
        src: "",
        alt: "Image",
        width: "100%",
        maxWidth: "800px",
        borderRadius: "4px",
        align: "center",
        caption: "",
      },
      fields: {
        src: makeMediaField("Image"),
        alt: { type: "text", label: "Alt Text" },
        width: { type: "text", label: "Width" },
        maxWidth: { type: "text", label: "Max Width" },
        borderRadius: { type: "text", label: "Border Radius" },
        align: { type: "select", label: "Alignment", options: textAlignOptions },
        caption: { type: "text", label: "Caption" },
      },
      render: ({ src, alt, width, maxWidth, borderRadius, align, caption, puck }: any) => (
        <figure
          ref={puck.dragRef}
          style={{ textAlign: align, margin: "0 0 16px 0" }}
        >
          {src ? (
            <img
              src={src}
              alt={alt}
              style={{ width, maxWidth, borderRadius, display: "inline-block" }}
            />
          ) : (
            <div style={{
              width: "100%", maxWidth, height: 200,
              backgroundColor: "#DEE2E6", borderRadius,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#4A4A4A", fontSize: 14, margin: "0 auto",
              fontFamily: "var(--font-body)",
              border: "2px dashed #1B4F91",
            }}>
              🖼️ Click "Browse" in the sidebar to pick an image
            </div>
          )}
          {caption && (
            <figcaption style={{
              fontSize: 13, color: "#4A4A4A",
              marginTop: 8, fontFamily: "var(--font-body)",
              fontStyle: "italic",
            }}>{caption}</figcaption>
          )}
        </figure>
      ),
    },

    // ====== BUTTON LINK ======
    ButtonLink: {
      label: "Button / Link",
      defaultProps: {
        text: "Learn More",
        url: "#",
        variant: "primary",
        size: "medium",
        align: "left",
      },
      fields: {
        text: { type: "text", label: "Button Text" },
        url: { type: "text", label: "URL" },
        variant: {
          type: "select",
          label: "Style",
          options: [
            { label: "Primary (Filled)", value: "primary" },
            { label: "Secondary (Outline)", value: "secondary" },
            { label: "Danger / Red", value: "danger" },
            { label: "Dark (Navy)", value: "dark" },
            { label: "Text Link", value: "text" },
          ],
        },
        size: {
          type: "select",
          label: "Size",
          options: [
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
          ],
        },
        align: { type: "select", label: "Alignment", options: textAlignOptions },
      },
      render: ({ text, url, variant, size, align, puck }: any) => {
        const sizeMap: Record<string, React.CSSProperties> = {
          small: { padding: "6px 16px", fontSize: 13 },
          medium: { padding: "10px 24px", fontSize: 14 },
          large: { padding: "14px 36px", fontSize: 16 },
        };
        const variantMap: Record<string, React.CSSProperties> = {
          primary: {
            backgroundColor: "#1B4F91", color: "#FFFFFF", border: "none",
            borderRadius: 4,
          },
          secondary: {
            backgroundColor: "transparent", color: "#1B4F91",
            border: "2px solid #1B4F91", borderRadius: 4,
          },
          danger: {
            backgroundColor: "#C12026", color: "#FFFFFF", border: "none",
            borderRadius: 4,
          },
          dark: {
            backgroundColor: "#0b2740", color: "#FFFFFF", border: "none",
            borderRadius: 4,
          },
          text: {
            backgroundColor: "transparent", color: "#1B4F91",
            border: "none", textDecoration: "underline",
          },
        };
        return (
          <div ref={puck.dragRef} style={{ textAlign: align, margin: "16px 0" }}>
            <a
              href={url}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                ...sizeMap[size],
                ...variantMap[variant],
              }}
            >
              {text}
            </a>
          </div>
        );
      },
    },

    // ====== ACCORDION GROUP ======
    AccordionGroup: {
      label: "Accordion / FAQ Group",
      defaultProps: {
        items: [
          { title: "Question 1", content: "<p>Answer 1...</p>", isOpen: false },
          { title: "Question 2", content: "<p>Answer 2...</p>", isOpen: false },
        ]
      },
      fields: {
        items: {
          type: "array",
          label: "Accordion Items",
          arrayFields: {
            title: { type: "text", label: "Title" },
            content: makeTipTapField("Content"),
            isOpen: {
              type: "select",
              label: "Default State",
              options: [
                { label: "Closed", value: false },
                { label: "Open", value: true },
              ],
            },
          },
          getItemSummary: (item: any) => item.title || "Item",
        } as any,
      },
      render: ({ items, puck }: any) => (
        <div ref={puck.dragRef} style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "0 0 16px 0" }}>
          {(items || []).map((item: any, i: number) => (
            <details
              key={i}
              style={{
                backgroundColor: "#FFFFFF", borderRadius: 4,
                border: "1px solid #DEE2E6",
                fontFamily: "var(--font-body)",
                padding: "16px 20px",
              }}
              open={item.isOpen}
            >
              <summary style={{
                fontSize: 16, fontWeight: 700, color: "#212529",
                cursor: "pointer", listStyle: "none",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                fontFamily: "var(--font-display)",
              }}>
                {item.title}
                <span style={{ color: "#1B4F91", fontSize: 20 }}>+</span>
              </summary>
              <div style={{
                marginTop: 12, fontSize: 15, color: "#4A4A4A", lineHeight: 1.7,
                borderTop: "1px solid #DEE2E6", paddingTop: 12,
              }}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </details>
          ))}
        </div>
      ),
    },
  },
};

export default puckConfig;
