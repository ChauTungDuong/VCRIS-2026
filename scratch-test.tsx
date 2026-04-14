import React from "react";
import { renderToString } from "react-dom/server";
import { Render, DropZone } from "@measured/puck";
import { puckConfig } from "./src/app/admin/components/PuckComponents";

const data = {
  content: [
    {
      type: "HomeHero",
      props: {
        id: "hero1",
        bgImageUrl: "/images/lake.jpg"
      }
    }
  ],
  root: { props: {} },
  zones: {
    "hero-content": [ { type: "SectionHeading", id: "h0", props: { id: "h0", content: "HW1", level: 1 } } ],
    "hero1-hero-content": [ { type: "SectionHeading", id: "h1", props: { id: "h1", content: "HW1", level: 1 } } ],
    "hero1:hero-content": [ { type: "SectionHeading", id: "h2", props: { id: "h2", content: "HW1", level: 1 } } ],
    "hero1_hero-content": [ { type: "SectionHeading", id: "h3", props: { id: "h3", content: "HW1", level: 1 } } ]
  }
};
    const SectionHeadingPatch = {
      ...puckConfig.components.SectionHeading,
      render: (props) => {
        console.log("SectionHeading rendering!", props);
        return React.createElement("h1", {}, props.content);
      }
    };

    const HomeHeroPatch = {
      ...puckConfig.components.HomeHero,
      render: (props) => {
        return React.createElement("div", {}, 
          [
             React.createElement(DropZone, { zone: "hero-content" })
          ]
        );
      }
    };

    const modifiedConfig = {
      ...puckConfig,
      components: {
        ...puckConfig.components,
        HomeHero: HomeHeroPatch,
        SectionHeading: SectionHeadingPatch
      }
    };

    const html = renderToString(React.createElement(Render, { config: modifiedConfig, data }));
    console.log("Rendered HTML => ", html);
