import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";
const site = "https://docs.sugarai.dev/";


// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Sugar AI Docs",
    social: {
      github: "https://github.com/SugarAI-HQ/docs",
      discord: "https://discord.com/invite/WRu3KXqz"
    },
    // favicon: '/public/images/sugar/favicon.png',
    editLink: {
      baseUrl: "https://github.com/sugar-ai/docs/edit/main/"
    },
    logo: {
      light: "/public/images/sugar-ai/logo-transparent.png",
      dark: "/public/images/sugar-ai/logo-transparent.png",
      replacesTitle: true
    },
    head: [{
      tag: "title",
      content: "Sugar AI Documentation"
    }, {
      tag: "meta",
      attrs: {
        property: "og:image",
        content: "/public/images/sugar-ai/logo-transparent.png"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: site + "/images/sugar-ai/logo-transparent.png"
      }
    }],
    sidebar: [{
      label: "Introduction",
      autogenerate: {
        directory: "guides"
      }
      //   items: [
      //     // Each item here is one entry in the navigation menu.
      //     { label: "Get Started", link: "/guides/get-started/" },
      //   ],
    }, {
      label: "Key Features",
      autogenerate: {
        directory: "key-features"
      }
    }]
  }), mdx()]
});