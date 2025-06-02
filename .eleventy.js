module.exports = function(eleventyConfig) {
  // Passthrough copy for the 'images' folder
  // This will copy your 'images' folder and its contents to the '_site/images' directory
  eleventyConfig.addPassthroughCopy("images");

  // Passthrough copy for the 'css' folder
  // This will copy your 'css' folder and its contents to the '_site/css' directory
  eleventyConfig.addPassthroughCopy("css");

  // You can add more configurations here as your site grows.

  // Return your Object options:
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    // Set custom directories for input, output, includes, and data
    dir: {
      input: ".", //  Source files are in the root
      includes: "_includes", // For layouts, partials, etc.
      data: "_data", // For global data files
      output: "_site" // The build output folder
    },
    // Template formats to process, Nunjucks and Markdown are common
    templateFormats: [
      "md",
      "njk",
      "html"
    ],
    // Pre-process Markdown files with Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};