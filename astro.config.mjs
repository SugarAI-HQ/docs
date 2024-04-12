import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sugar AI Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "guides" },
          //   items: [
          //     // Each item here is one entry in the navigation menu.
          //     { label: "Get Started", link: "/guides/get-started/" },
          //   ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
