import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "High-Frequency Trading Technologies - SP25",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Handbook", link: "/syllabus" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [{ text: "Syllabus", link: "/syllabus" }],
      },
      {
        text: "Homeworks",
        collapsed: false,
        items: [
          { text: "Homework 0", link: "/hw0" },
          { text: "Homework 1", link: "/hw1" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ndhft" },
      { icon: "canvas", link: "https://canvas.nd.edu/courses/109765" },
    ],
  },
});
