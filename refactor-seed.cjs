const fs = require('fs');

let seedCode = fs.readFileSync('server/prisma/seed-ai4cris.ts', 'utf8');

// Replace the helpers
seedCode = seedCode.replace(/function ai4crisSection\([\s\S]*?function ai4crisMemberTabs/m, `
function mergeChildren(childrenInput: any[]) {
  const childrenNodes: any[] = [];
  const childZones: Record<string, any[]> = {};
  for (const child of childrenInput) {
     if ("node" in child) {
        childrenNodes.push(child.node);
        if (child.zones) Object.assign(childZones, child.zones);
     } else {
        childrenNodes.push(child);
     }
  }
  return { childrenNodes, childZones };
}

function ai4crisSection(childrenInput: any[], opts: any = {}): PuckBlock {
  const sectionId = \`ai4cris-section-\${Math.random().toString(36).substr(2, 9)}\`;
  const { childrenNodes, childZones } = mergeChildren(childrenInput);
  
  return {
    node: {
      type: "Ai4CrisSection",
      props: {
        title: opts.title !== undefined ? opts.title : "GIỚI THIỆU",
        titleAlign: opts.titleAlign || "left",
        variant: opts.variant || "card-white",
        id: sectionId,
      },
    },
    zones: {
      ...childZones,
      [\`\${sectionId}:content\`]: childrenNodes,
    },
  };
}

function ai4crisHeading(opts: any = {}): PuckNode {
  return {
    type: "Ai4CrisHeading",
    props: {
      text: opts.text || "Tiêu đề",
      level: opts.level || "h3",
      align: opts.align || "left",
      color: opts.color || "cipher",
      italic: opts.italic || false,
      id: \`ai4cris-heading-\${Math.random().toString(36).substr(2, 9)}\`,
    }
  }
}

function ai4crisText(contentHtml: string): PuckNode {
  return {
    type: "Ai4CrisText",
    props: {
      contentHtml: contentHtml || "",
      id: \`ai4cris-text-\${Math.random().toString(36).substr(2, 9)}\`,
    }
  }
}

function ai4crisButton(opts: any = {}): PuckNode {
  return {
    type: "Ai4CrisButton",
    props: {
      label: opts.label || "Click here",
      url: opts.url || "#",
      variant: opts.variant || "primary",
      id: \`ai4cris-button-\${Math.random().toString(36).substr(2, 9)}\`,
    }
  }
}

function ai4crisMemberTabs`);

seedCode = seedCode.replace(/function ai4crisMemberTabs\([\s\S]*?function ai4crisTrackAccordion/m, `function ai4crisMemberTabs(tabsData: any[]): PuckBlock {
  const tabsId = \`member-tabs-\${Math.random().toString(36).substr(2, 9)}\`;
  const zones: Record<string, PuckNode[]> = {};
  
  const tabs = tabsData.map(t => {
     const { childrenNodes, childZones } = mergeChildren(t.children || []);
     Object.assign(zones, childZones);
     zones[\`\${tabsId}:tab-\${t.id}\`] = childrenNodes;
     return { id: t.id, title: t.title };
  });

  return {
    node: {
      type: "Ai4CrisMemberTabs",
      props: {
        tabs,
        id: tabsId,
      },
    },
    zones,
  };
}

function ai4crisTrackAccordion`);

seedCode = seedCode.replace(/function ai4crisTrackAccordion\([\s\S]*?function tabsBlock/m, `function ai4crisTrackAccordion(tracksData: any[]): PuckBlock {
  const accId = \`track-accordion-\${Math.random().toString(36).substr(2, 9)}\`;
  const zones: Record<string, PuckNode[]> = {};
  
  const tracks = tracksData.map((t, idx) => {
     const trackId = t.id || \`track-\${idx}\`;
     const { childrenNodes, childZones } = mergeChildren(t.children || []);
     Object.assign(zones, childZones);
     zones[\`\${accId}:track-\${trackId}\`] = childrenNodes;
     return { id: trackId, title: t.title };
  });

  return {
    node: {
      type: "Ai4CrisTrackAccordion",
      props: {
        tracks,
        id: accId,
      },
    },
    zones,
  };
}

function tabsBlock`);

// Let's also update makePuckContent to handle nested zones returned from top-level blocks properly.
seedCode = seedCode.replace(/function makePuckContent\([\s\S]*?\n\}/m, `function makePuckContent(components: any[]) {
  const { childrenNodes, childZones } = mergeChildren(components);
  return createPuckContent(
    childrenNodes.map((node) => ({ node, zones: childZones }))
  );
}`);

// Write the changes to disk
fs.writeFileSync('server/prisma/seed-ai4cris.ts', seedCode);

console.log('Seed functions refactored to handle nesting correctly.');
