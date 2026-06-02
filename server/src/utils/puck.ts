import type { Prisma } from "@prisma/client";

export type PuckNode = {
  type: string;
  props?: Record<string, Prisma.InputJsonValue>;
};

export type PuckContent = {
  root: { props: Record<string, Prisma.InputJsonValue> };
  content: PuckNode[];
  zones: Record<string, PuckNode[]>;
};

export type PuckBlock = {
  node: PuckNode;
  zones?: Record<string, PuckNode[]>;
};

export const emptyPuckContent = (): PuckContent => ({
  root: { props: {} },
  content: [],
  zones: {},
});

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizePuckNodes(
  nodes: unknown,
  zones: Record<string, PuckNode[]>,
): PuckNode[] {
  if (!Array.isArray(nodes)) {
    return [];
  }

  return nodes.filter(isRecord).map((node): PuckNode => {
    const typedNode = node as Record<string, unknown> & {
      type?: unknown;
      props?: unknown;
    };

    const props: Record<string, Prisma.InputJsonValue> = isRecord(
      typedNode.props,
    )
      ? ({ ...typedNode.props } as Record<string, Prisma.InputJsonValue>)
      : {};
    const id =
      typeof props.id === "string" && props.id.length > 0 ? props.id : "";
    const children = Array.isArray(props.children) ? props.children : null;

    if (children) {
      delete props.children;

      if (id) {
        const zoneKey = `${id}:content`;
        if (!zones[zoneKey]) {
          zones[zoneKey] = normalizePuckNodes(children, zones);
        }
      }
    }

    return {
      ...(typedNode as Record<string, unknown>),
      props,
    } as PuckNode;
  });
}

export function normalizePuckContent(content: unknown): PuckContent {
  if (!isRecord(content)) {
    return emptyPuckContent();
  }

  const zones: Record<string, PuckNode[]> = {};
  const sourceZones = isRecord(content.zones) ? content.zones : {};

  for (const [zoneKey, zoneContent] of Object.entries(sourceZones)) {
    zones[zoneKey] = normalizePuckNodes(zoneContent, zones);
  }

  const root: PuckContent["root"] =
    isRecord(content.root) && isRecord(content.root.props)
      ? ({
          props: {
            ...(content.root.props as Record<string, Prisma.InputJsonValue>),
          },
        } as PuckContent["root"])
      : ({ props: {} } as PuckContent["root"]);

  return {
    root,
    content: normalizePuckNodes(content.content, zones),
    zones,
  };
}

export function createPuckContent(blocks: PuckBlock[]): PuckContent {
  const zones: Record<string, PuckNode[]> = {};

  for (const block of blocks) {
    if (!block.zones) {
      continue;
    }

    for (const [zoneKey, zoneContent] of Object.entries(block.zones)) {
      zones[zoneKey] = zoneContent;
    }
  }

  return {
    root: { props: {} },
    content: blocks.map((block) => block.node),
    zones,
  };
}
