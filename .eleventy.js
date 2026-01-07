const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter("date", (dateInput, format = "%Y") => {
    try {
      if (!dateInput) return "";
      let dt;
      if (dateInput === "now") {
        dt = DateTime.now();
      } else if (dateInput instanceof Date) {
        dt = DateTime.fromJSDate(dateInput);
      } else {
        dt = DateTime.fromISO(String(dateInput));
        if (!dt.isValid) {
          const parsed = new Date(dateInput);
          dt = DateTime.fromJSDate(parsed);
        }
      }

      const map = { "%Y": "yyyy" };
      const luxonFormat = map[format] || format;
      return dt.toFormat(luxonFormat);
    } catch (e) {
      return "";
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk","md","html"]
  };
};
