const fs = require('fs');
let code = fs.readFileSync('server/prisma/seed-ai4cris.ts', 'utf8');

const newHelpers = `
function ai4crisMemberTabs(opts: any = {}): PuckNode {
  return {
    type: 'Ai4CrisMemberTabs',
    props: {
      tabs: opts.tabs || [],
      id: 'member-tabs-' + Math.random().toString(36).substr(2, 9),
    },
  };
}

function ai4crisTrackAccordion(opts: any = {}): PuckNode {
  return {
    type: 'Ai4CrisTrackAccordion',
    props: {
      tracks: opts.tracks || [],
      id: 'track-accordion-' + Math.random().toString(36).substr(2, 9),
    },
  };
}

function ai4crisSection(opts: any = {}): PuckNode {
  return {
    type: 'Ai4CrisSection',
    props: {
      title: opts.title || 'GIỚI THIỆU',
      titleAlign: opts.titleAlign || 'left',
      contentHtml: opts.contentHtml || '',
      variant: opts.variant || 'card-white',
      id: 'ai4cris-section-' + Math.random().toString(36).substr(2, 9),
    },
  };
}
`;

code = code.replace(/function ai4crisSection\(opts: any = \{\}\): PuckNode \{[\s\S]*?\}/, '');
code = code.replace('function tabsBlock', newHelpers + '\n\nfunction tabsBlock');

fs.writeFileSync('server/prisma/seed-ai4cris.ts', code);
console.log("Successfully injected helpers");
