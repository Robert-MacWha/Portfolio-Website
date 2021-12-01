const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({'static/images': '/images'});   // add the static dir to the output file
  eleventyConfig.addPassthroughCopy({'static/css':    '/css'});   // add the static dir to the output file
  eleventyConfig.addPassthroughCopy({'static/js':     '/js'});   // add the static dir to the output file
  eleventyConfig.addPassthroughCopy({'static/fonts':  '/fonts'});   // add the static dir to the output file
  eleventyConfig.addPassthroughCopy({'static/vendors':     '/vendors'});   // add the static dir to the output file
  eleventyConfig.addPassthroughCopy('admin');           // add the admin dir to the output file
  eleventyConfig.addPassthroughCopy('_redirects'); // adds redirect rules

  // return data
  return {  
    dir: {
        input: 'src',
        output: '_site',
        includes: '_includes/components',
        layouts: '_includes/layouts'
    }
  };
};
