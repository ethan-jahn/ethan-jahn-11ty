module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/assets");

  return {
    dir: {
      input: "content",
      output: "_site"
    }
  };
};