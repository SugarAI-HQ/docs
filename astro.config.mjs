import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import mdx from "@astrojs/mdx";
// import expressiveCode from "astro-expressive-code";
// import remarkToc from "remark-toc";
// import rehypeMinifyHtml from "remark-rehype";

const site = "https://docs.sugarai.dev/";

// https://astro.build/config
export default defineConfig({
  site: "http://docs.sugarai.dev",
  integrations: [
    starlight({
      title: "Sugar AI Docs",
      social: {
        github: "https://github.com/SugarAI-HQ/docs",
        discord: "https://discord.com/invite/WRu3KXqz",
      },
      favicon: "/public/images/sugar-ai/favicon.png",
      editLink: {
        baseUrl: "https://github.com/SugarAI-HQ/docs/edit/main/",
      },
      logo: {
        light: "/public/images/sugar-ai/logo-transparent.png",
        dark: "/public/images/sugar-ai/logo-transparent.png",
        replacesTitle: true,
      },
      head: [
        {
          tag: "title",
          content: "Sugar AI Documentation",
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/public/images/sugar-ai/logo-transparent.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: site + "/images/sugar-ai/logo-transparent.png",
          },
        },
      ],
      sidebar: [
        {
          label: "Get Started",
          autogenerate: {
            directory: "guides",
          },
          //   items: [
          //     // Each item here is one entry in the navigation menu.
          //     { label: "Get Started", link: "/guides/get-started/" },
          //   ],
        },
        {
          label: "Key Features",
          autogenerate: {
            directory: "key-features",
          },
        },
        {
          label: "Integrations",
          autogenerate: {
            directory: "integrations",
          },
        },
      ],
    }),
    // expressiveCode(),
    // mdx({
    //   syntaxHighlight: "shiki",
    //   shikiConfig: {
    //     theme: "dracula",
    //   },
    //   remarkPlugins: [remarkToc],
    //   rehypePlugins: [rehypeMinifyHtml],
    //   remarkRehype: {
    //     footnoteLabel: "Footnotes",
    //   },
    //   gfm: false,
    // }),
  ],
});
