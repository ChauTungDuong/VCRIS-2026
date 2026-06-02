import type { Prisma } from "@prisma/client";
import {
  createPuckContent,
  type PuckBlock,
  type PuckContent,
  type PuckNode,
} from "../../src/utils/puck.js";

type JsonValue = Prisma.InputJsonValue;
type Props = Record<string, JsonValue>;

let idScope = "seed";
let idCounters = new Map<string, number>();

export function beginPageSeed(scope: string) {
  idScope = scope;
  idCounters = new Map<string, number>();
}

export function seedId(prefix: string) {
  const next = (idCounters.get(prefix) || 0) + 1;
  idCounters.set(prefix, next);
  return `${idScope}-${prefix}-${next}`;
}

export function node(type: string, props: Props = {}): PuckNode {
  return {
    type,
    props: {
      id: seedId(type.toLowerCase()),
      ...props,
    },
  };
}

export function block(type: string, props: Props = {}, zones?: Record<string, PuckNode[]>): PuckBlock {
  const id = typeof props.id === "string" ? props.id : seedId(type.toLowerCase());

  return {
    node: {
      type,
      props: {
        id,
        ...props,
      },
    },
    zones: zones
      ? Object.fromEntries(
          Object.entries(zones).map(([zone, children]) => [`${id}:${zone}`, children]),
        )
      : undefined,
  };
}

export function section(children: PuckNode[], props: Props = {}): PuckBlock {
  return block(
    "Section",
    {
      backgroundColor: "#FFFFFF",
      padding: "72px 24px",
      maxWidth: "1200px",
      borderBottom: "1px solid #DEE2E6",
      ...props,
    },
    { content: children },
  );
}

export function columns(columns: PuckNode[][], props: Props = {}): PuckBlock {
  return block(
    "Columns",
    {
      columns: columns.length,
      gap: "32px",
      ...props,
    },
    Object.fromEntries(columns.map((children, index) => [`column-${index}`, children])),
  );
}

export function pageTitle(title: string, bgImageUrl = "/images/lake.jpg"): PuckBlock {
  return { node: node("TopImageHeader", { title, bgImageUrl, height: "320px" }) };
}

export function heading(
  content: string,
  props: Props = {},
): PuckNode {
  return node("SectionHeading", {
    content,
    level: 2,
    fontSize: "36px",
    fontFamily: "var(--font-display)",
    fontWeight: "700",
    fontStyle: "italic",
    color: "#212529",
    textAlign: "left",
    margin: "0 0 24px 0",
    ...props,
  });
}

export function text(content: string, props: Props = {}): PuckNode {
  return node("TextBlock", {
    content,
    fontSize: "16px",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#4A4A4A",
    textAlign: "left",
    lineHeight: "1.75",
    margin: "0 0 16px 0",
    padding: "0",
    ...props,
  });
}

export function rich(html: string, props: Props = {}): PuckNode {
  return node("RichText", {
    html,
    maxWidth: "100%",
    padding: "0",
    ...props,
  });
}

export function list(items: string[], props: Props = {}): PuckNode {
  return node("ListBlock", {
    items: items.map((value) => ({ value })),
    ordered: false,
    fontSize: "16px",
    fontFamily: "var(--font-body)",
    color: "#212529",
    spacing: "8px",
    ...props,
  });
}

export function table(headers: string[], rows: string[][], props: Props = {}): PuckNode {
  return node("TableBlock", {
    headers: headers.map((value) => ({ value })),
    rows,
    headerBg: "#1B4F91",
    headerColor: "#FFFFFF",
    borderColor: "#DEE2E6",
    ...props,
  });
}

export function infoBox(title: string, content: string, props: Props = {}): PuckNode {
  return node("InfoBox", {
    title,
    content,
    icon: "i",
    bgColor: "#E8F0FE",
    borderColor: "#1B4F91",
    titleColor: "#0b2740",
    ...props,
  });
}

export function alertBox(title: string, content: string, type = "info", props: Props = {}): PuckNode {
  return node("AlertBox", {
    type,
    title,
    content,
    showIcon: true,
    ...props,
  });
}

export function featureCard(title: string, description: string, icon = "#", props: Props = {}): PuckNode {
  return node("FeatureCard", {
    icon,
    title,
    description,
    bgColor: "#FFFFFF",
    accentColor: "#1B4F91",
    iconBg: "#E8F0FE",
    bordered: true,
    ...props,
  });
}

export function personCard(props: Props): PuckNode {
  return node("PersonCard", {
    name: "Speaker name",
    title: "Role",
    affiliation: "Affiliation",
    image: "",
    bio: "",
    layout: "horizontal",
    bgColor: "#FFFFFF",
    ...props,
  });
}

export function timeline(events: Array<{ date: string; title: string; description?: string; completed?: boolean }>): PuckNode {
  return node("Timeline", {
    events: events.map((event) => ({
      date: event.date,
      title: event.title,
      description: event.description || "",
      completed: Boolean(event.completed),
    })),
    accentColor: "#1B4F91",
  });
}

export function imageGrid(images: string[], columnsCount = 3): PuckNode {
  return node("ImageGrid", {
    images: images.map((url) => ({ url })),
    columns: columnsCount,
  });
}

export function map(embedUrl: string, height = "500px"): PuckNode {
  return node("Map", { embedUrl, height });
}

export function button(label: string, url: string, props: Props = {}): PuckNode {
  return node("ButtonLink", {
    label,
    url,
    variant: "primary",
    align: "left",
    ...props,
  });
}

export function contactCta(title: string, subtitle: string, btnEmail: string): PuckBlock {
  return {
    node: node("ContactCTA", {
      title,
      subtitle,
      btnLabel: "Contact Us",
      btnEmail,
    }),
  };
}

export function content(blocks: Array<PuckBlock | PuckNode>): PuckContent {
  return createPuckContent(
    blocks.map((item) => ("node" in item ? item : { node: item })),
  );
}
