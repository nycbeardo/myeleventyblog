const moment = require('moment');

moment.locale('en');

const Image = require("@11ty/eleventy-img")
const path = require('path')
const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")


async function imageShortcode(src, alt) {
  let sizes = "(min-width: 1024px) 100vw, 50vw" // Default sizes for mobile and desktop viewing
  let srcPrefix = `./_site/images/`
  src = srcPrefix + src
  console.log(`Generating image(s) from:  ${src}`)
  if(alt === undefined) {
    // Throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`)
  }  
  let metadata = await Image(src, {
    widths: [600, 900, 1500],
    formats: [ 'gif', 'jpeg', 'png'],
    urlPath: "/images/",
    outputDir: "./_site/images/",
   

    /* path + resulting image file name is dealt with in this function */
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)
      return `${name}-${width}w.${format}`
    }
  })  
  let lowsrc = metadata.jpeg[0]
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1]  
  /* output image file and resulting <tag>, will be shown in html files */
  return `<picture>
    ${Object.values(metadata).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`
    }).join("\n")}
    <img
      src="${lowsrc.url}"
      width="${highsrc.width}"
      height="${highsrc.height}"
      alt="${alt}"
      loading="lazy"
      decoding="async">
  </picture>`
}


// module.exports, add lines needed for each plugin to work properly
module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).utc().format('LL'); // E.g. May 31, 2019
  });

  eleventyConfig.addShortcode('excerpt', article => extractExcerpt(article));

  // Folders to copy to output folder
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("/dark.js");

  eleventyConfig.addPlugin(pluginTailwindCSS, {
      src: "src/css/site.css",
      dest: "css",
      keepFolderStructure: false,
      minify: false
    });

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)
  eleventyConfig.addLiquidShortcode("image", imageShortcode)
  // === Liquid needed if `markdownTemplateEngine` **isn't** changed from Eleventy default
  eleventyConfig.addJavaScriptFunction("image", imageShortcode)

  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
    }
  });
};

function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn('Failed to extract excerpt: Document has no property "templateContent".');
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
    { start: '<p>', end: '</p>' }
  ];

  separatorsList.some(separators => {
    const startPosition = content.indexOf(separators.start);

    // This end position could use "lastIndexOf" to return all the paragraphs rather than just the first
    // paragraph when matching is on "<p>" and "</p>".
    const endPosition = content.indexOf(separators.end);

    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
      return true; // Exit out of array loop on first match
    }
  });




let markdownIt = require("markdown-it");
let options = {
    // whatever options you have set for the library here
  };
let mdfigcaption = require('markdown-it-image-figures');
let figoptions = {
    figcaption: true
};

const mdLib = markdownIt(options).use(mdfigcaption, figoptions);

module.exports = function (config) {
    //other config here
    
    config.setLibrary("md", mdLib);
}





  return excerpt;
}