module.exports = function(eleventyConfig) {
  // Passthrough copy the "css" folder
  eleventyConfig.addPassthroughCopy("css");
  // Passthrough copy the "images" folder
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};