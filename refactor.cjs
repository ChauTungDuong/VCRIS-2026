const fs = require('fs');

let componentsStr = fs.readFileSync('src/app/admin/components/PuckComponents/Ai4CrisComponents.tsx', 'utf8');

// 1. Add Ai4CrisHeading, Ai4CrisText, Ai4CrisButton
const newComponents = `
// ==========================
// AI4CRIS Heading
// ==========================
export type Ai4CrisHeadingProps = {
  text: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align: "left" | "center" | "right";
  color: "cipher" | "ink" | "slate" | "white" | "primary" | "warning";
  italic: boolean;
};

export const Ai4CrisHeading: ComponentConfig<Ai4CrisHeadingProps> = {
  label: "AI4CRIS Heading",
  defaultProps: {
    text: "Tiêu đề phụ",
    level: "h3",
    align: "left",
    color: "cipher",
    italic: false,
  },
  fields: {
    text: { type: "text", label: "Nội dung" },
    level: {
      type: "select", label: "Cấp độ",
      options: [
        { label: "H1", value: "h1" }, { label: "H2", value: "h2" }, { label: "H3", value: "h3" },
        { label: "H4", value: "h4" }, { label: "H5", value: "h5" }, { label: "H6", value: "h6" },
      ]
    },
    align: {
      type: "select", label: "Căn lề",
      options: [
        { label: "Trái", value: "left" }, { label: "Giữa", value: "center" }, { label: "Phải", value: "right" }
      ]
    },
    color: {
      type: "select", label: "Màu sắc",
      options: [
        { label: "Đỏ (Cipher)", value: "cipher" }, { label: "Xanh đậm (Ink)", value: "ink" },
        { label: "Xám (Slate)", value: "slate" }, { label: "Trắng (White)", value: "white" },
        { label: "Xanh nhạt (Primary)", value: "primary" }, { label: "Vàng (Warning)", value: "warning" },
      ]
    },
    italic: {
      type: "select", label: "In nghiêng",
      options: [{ label: "Không", value: false }, { label: "Có", value: true }] as any
    }
  },
  render: ({ text, level, align, color, italic, puck }) => {
    const Tag = level;
    let colorClass = "text-cipher";
    if (color === "ink") colorClass = "text-ink";
    if (color === "slate") colorClass = "text-slate";
    if (color === "white") colorClass = "text-white";
    if (color === "primary") colorClass = "text-[#0EA5A0]";
    if (color === "warning") colorClass = "text-[#975a16]";

    const sizeClass = level === "h1" ? "text-[36px] md:text-[44px]" :
                      level === "h2" ? "text-[28px] md:text-[32px]" :
                      level === "h3" ? "text-[22px] md:text-[24px]" :
                      level === "h4" ? "text-[18px] md:text-[20px]" : "text-[16px]";

    return (
      <Tag ref={puck.dragRef} className={\`\${sizeClass} \${colorClass} font-bold \${italic ? 'italic' : ''} text-\${align} mb-4\`} style={{ fontFamily: "var(--font-display)" }}>
        {text}
      </Tag>
    );
  }
};

// ==========================
// AI4CRIS Text
// ==========================
export type Ai4CrisTextProps = {
  contentHtml: string;
};

export const Ai4CrisText: ComponentConfig<Ai4CrisTextProps> = {
  label: "AI4CRIS Rich Text",
  defaultProps: {
    contentHtml: "<p>Nội dung văn bản...</p>",
  },
  fields: {
    contentHtml: makeTipTapField("Nội dung (HTML)"),
  },
  render: ({ contentHtml, puck }) => (
    <div ref={puck.dragRef} className="ai4cris-html-content space-y-4" style={{ fontFamily: "var(--font-body)" }} dangerouslySetInnerHTML={{ __html: contentHtml }} />
  )
};

// ==========================
// AI4CRIS Button
// ==========================
export type Ai4CrisButtonProps = {
  label: string;
  url: string;
  variant: "primary" | "secondary" | "outline";
};

export const Ai4CrisButton: ComponentConfig<Ai4CrisButtonProps> = {
  label: "AI4CRIS Button",
  defaultProps: {
    label: "Click here",
    url: "#",
    variant: "primary",
  },
  fields: {
    label: { type: "text", label: "Nhãn nút" },
    url: { type: "text", label: "Đường dẫn" },
    variant: {
      type: "select", label: "Kiểu",
      options: [
        { label: "Màu đỏ chính (Primary)", value: "primary" },
        { label: "Màu xanh (Secondary)", value: "secondary" },
        { label: "Viền (Outline)", value: "outline" }
      ]
    }
  },
  render: ({ label, url, variant, puck }) => {
    let className = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-[14px] uppercase tracking-wider transition-all duration-300 ";
    if (variant === "primary") {
      className += "bg-cipher text-white hover:bg-ink hover:text-white";
    } else if (variant === "secondary") {
      className += "bg-ink text-white hover:bg-cipher hover:text-white";
    } else {
      className += "border-2 border-cipher text-cipher hover:bg-cipher hover:text-white";
    }

    return (
      <div ref={puck.dragRef} className="my-4">
        <a href={url} className={className} style={{ fontFamily: "var(--font-display)" }}>
          {label}
        </a>
      </div>
    );
  }
};
`;

componentsStr = componentsStr.replace('// ==========================\n// AI4CRIS Countdown Block', newComponents + '\n// ==========================\n// AI4CRIS Countdown Block');

// 2. Modify Ai4CrisSection
componentsStr = componentsStr.replace(/export type Ai4CrisSectionProps = {[\s\S]*?};/, `export type Ai4CrisSectionProps = {
  title: string;
  titleAlign: "left" | "center";
  variant: "card-white" | "card-blue" | "plain" | "warning-yellow";
};`);

componentsStr = componentsStr.replace(/contentHtml: "<p>Nội dung giới thiệu...<\/p>",\n/, '');
componentsStr = componentsStr.replace(/contentHtml: makeTipTapField\("Nội dung \(HTML\)"\),\n/, '');

componentsStr = componentsStr.replace(/render: \(\{ title, titleAlign, contentHtml, variant, puck \}\) => \{/, 'render: ({ title, titleAlign, variant, puck }) => {');
componentsStr = componentsStr.replace(/<div\s+className=\{`text-\[16px\] md:text-\[18px\] space-y-4 leading-relaxed \$\{[\s\S]*?dangerouslySetInnerHTML=\{\{ __html: contentHtml \}\}\s+\/>/, `
        <div className={\`text-[16px] md:text-[18px] space-y-4 leading-relaxed \${
            variant === "card-blue" ? "text-[#0b2740]" : variant === "warning-yellow" ? "text-[#975a16]" : "text-slate"
          }\`}>
          <DropZone zone="content" />
        </div>`);

// Import DropZone
if (!componentsStr.includes('DropZone')) {
  componentsStr = componentsStr.replace('import { ComponentConfig } from "@measured/puck";', 'import { ComponentConfig, DropZone } from "@measured/puck";');
}

// 3. Modify Ai4CrisMemberTabs
componentsStr = componentsStr.replace(/export type Ai4CrisMemberTabsProps = {[\s\S]*?};/, `export type Ai4CrisMemberTabsProps = {
  tabs: { id: string; title: string; }[];
};`);
componentsStr = componentsStr.replace(/{ id: "ban-chi-dao", title: "Ban chỉ đạo", contentHtml: "<p>Nội dung Ban chỉ đạo...<\/p>" },/g, '{ id: "ban-chi-dao", title: "Ban chỉ đạo" },');
componentsStr = componentsStr.replace(/{ id: "ban-to-chuc", title: "Ban tổ chức", contentHtml: "<p>Nội dung Ban tổ chức...<\/p>" },/g, '{ id: "ban-to-chuc", title: "Ban tổ chức" },');
componentsStr = componentsStr.replace(/{ id: "ban-chuong-trinh", title: "Ban chương trình", contentHtml: "<p>Nội dung Ban chương trình...<\/p>" },/g, '{ id: "ban-chuong-trinh", title: "Ban chương trình" },');

componentsStr = componentsStr.replace(/contentHtml: makeTipTapField\("Nội dung \(HTML\)"\),/, '');

componentsStr = componentsStr.replace(/<div className="ai4cris-html-content space-y-4" dangerouslySetInnerHTML=\{\{ __html: t.contentHtml \}\} \/>/, '<div className="ai4cris-html-content space-y-4"><DropZone zone={`tab-${t.id}`} /></div>');


// 4. Modify Ai4CrisTrackAccordion
componentsStr = componentsStr.replace(/export type Ai4CrisTrackAccordionProps = {[\s\S]*?};/, `export type Ai4CrisTrackAccordionProps = {
  tracks: { id: string; title: string; }[];
};`);

componentsStr = componentsStr.replace(/{ title: "Track 1: Chủ đề 1", contentHtml: "<ul><li>Mục 1<\/li><\/ul>" }/, '{ id: "track-1", title: "Track 1: Chủ đề 1" }');
componentsStr = componentsStr.replace(/title: \{ type: "text", label: "Tiêu đề Track" \},/g, 'id: { type: "text", label: "ID (không dấu, viết liền)" },\n        title: { type: "text", label: "Tiêu đề Track" },');
componentsStr = componentsStr.replace(/contentHtml: makeTipTapField\("Nội dung \(HTML\)"\),/, '');

componentsStr = componentsStr.replace(/<div className="mt-4" dangerouslySetInnerHTML=\{\{ __html: track.contentHtml \}\} \/>/, '<div className="mt-4"><DropZone zone={`track-${track.id}`} /></div>');

// Also margin-bottom for track groups: replace className="space-y-4" with "space-y-6"
componentsStr = componentsStr.replace(/className="space-y-4"/, 'className="space-y-6"');

fs.writeFileSync('src/app/admin/components/PuckComponents/Ai4CrisComponents.tsx', componentsStr);

// ======================
// Update index.tsx
let indexStr = fs.readFileSync('src/app/admin/components/PuckComponents/index.tsx', 'utf8');

indexStr = indexStr.replace(/Ai4CrisTrackAccordion\n\} from "\.\/Ai4CrisComponents";/, `Ai4CrisTrackAccordion,\n  Ai4CrisHeading,\n  Ai4CrisText,\n  Ai4CrisButton\n} from "./Ai4CrisComponents";`);

indexStr = indexStr.replace(/components: \["Ai4CrisCountdown", "Ai4CrisTimeline", "Ai4CrisSection", "Ai4CrisMemberTabs", "Ai4CrisTrackAccordion"\]/, `components: ["Ai4CrisCountdown", "Ai4CrisTimeline", "Ai4CrisSection", "Ai4CrisMemberTabs", "Ai4CrisTrackAccordion", "Ai4CrisHeading", "Ai4CrisText", "Ai4CrisButton"]`);

indexStr = indexStr.replace(/Ai4CrisTrackAccordion,/, `Ai4CrisTrackAccordion,\n    Ai4CrisHeading,\n    Ai4CrisText,\n    Ai4CrisButton,`);

fs.writeFileSync('src/app/admin/components/PuckComponents/index.tsx', indexStr);

console.log('Components refactored successfully.');
