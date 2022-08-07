// * DOMContentLoaded event – DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
// * load event – external resources are loaded, so styles are applied, image sizes are known etc.
// * beforeunload event – the user is leaving: we can check if the user saved the changes and ask them whether they really want to leave.
// * unload – the user almost left, but we still can initiate some operations, such as sending out statistics.

// * this script tag include by head tag inside
// * exists when the script is loaded / render line by line
// ! Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')at index.html: 15: 24 -- why? 👇
// const change = document.getElementById("firstCondainer");
// * Ans:👆 this instruction starting to search the firstCondainer id
// change.innerHTML = `<h1>Add some content change</h1>`;

// TODO: DOM Event -- DOMContentLoaded -- HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", () => {
  // Reference
  const change = document.getElementById("firstCondainer");
  // select element
  const firstChild01 = change.children[0];
  const img = change.children[1];
  // change the child 0 content.
  firstChild01.innerHTML = `<h1>Add some content change</h1>`;

  // TODO: offsetWidth - imgage width, offsetHeight - image Height
  console.log(
    `DOMContentLoaded --> image - width : ${img.offsetWidth}, Heightt : ${img.offsetHeight}`
  );
});

// load window event
// window.onload = function () {}
window.addEventListener("load", () => {
  // Reference
  const change = document.getElementById("firstCondainer");
  // select element
  const firstChild01 = change.children[0];
  const img = change.children[1];
  // change the child 0 content.
  firstChild01.innerHTML = `<h1>change the content change</h1>`;

  // TODO: offsetWidth - imgage width, offsetHeight - image Height
  console.log(
    `load --> image - width : ${img.offsetWidth}, Height : ${img.offsetHeight}`
  );
  // all load in css, img etc...
});

// unloade
// window.onunload = function () {
//   alert(`You are closing the page unloaded.`);
// }

// beforeload
// window.onbeforeunload = function () {
//   alert(`You are about the unloaded before`);
// }
