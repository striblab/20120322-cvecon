/**
 * Main JS file for project.
 */

/**
 * Define globals that are added through the js.globals in
 * the config.json file, here, mostly so linting won't get triggered
 * and its a good queue of what is available:
 */
// /* global $, _ */

/**
 * Adding dependencies
 * ---------------------------------
 * Import local ES6 or CommonJS modules like this:
 * import utilsFn from './shared/utils.js';
 *
 * Or import libraries installed with npm like this:
 * import module from 'module';
 */

// Dependencies
import utils from './shared/utils.js';

// DOM loaded
utils.documentReady(() => {
  // Mark page with note about development or staging
  utils.environmentNoting();
});


// Auto enable Pym for embedding.  This will enable a Pym Child if
// the url contains ?pym=true
utils.autoEnablePym();



/**
 * Adding Svelte templates in the client
 * ---------------------------------
 * We can bring in the same Svelte templates that we use
 * to render the HTML into the client for interactivity.  The key
 * part is that we need to have similar data.
 *
 * First, import the template.  This is the main one, and will
 * include any other templates used in the project.
 *
 *   `import Content from '../templates/_index-content.svelte.html';`
 *
 * Get the data parts that are needed.  There are two ways to do this.
 * If you are using the buildData function to get data, then add make
 * sure the config for your data has a `local: "content.json"` property
 *
 *  1. For smaller datasets, just import them like other files.
 *     `import content from '../assets/data/content.json';`
 *  2. For larger data points, utilize window.fetch.
 *     `let content = await (await window.fetch('../assets/data/content.json')).json();`
 *
 * Once you have your data, use it like a Svelte component:
 *
 * utils.documentReady(() => {
 *   const app = new Content({
 *     target: document.querySelector('.article-lcd-body-content'),
 *     hydrate: true,
 *     data: {
 *       content
 *     }
 *   });
 * });
 */



// Common code to get svelte template loaded on the client.  Note that
// we need to pull in the data we assume is in the template.
//
// import Content from '../templates/_index-content.svelte.html';
// // import content from '../content.json';
//
// utils.documentReady(() => {
//   const app = new Content({
//     target: document.querySelector('.article-lcd-body-content'),
//     hydrate: true,
//     data: {
//       // content
//     }
//   });
// });

// !function(){"use strict";window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}})}();