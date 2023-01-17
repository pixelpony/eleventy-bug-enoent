const pluginWebc = require("@11ty/eleventy-plugin-webc");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/component/**/*.webc",
  });

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  eleventyConfig.addPassthroughCopy("./src/style");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/font");

  eleventyConfig.addWatchTarget("./src/style/*.css");
  // eleventyConfig.addWatchTarget("./src/js/*.js");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "include",
      layouts: "layout",
    },
  };
};
