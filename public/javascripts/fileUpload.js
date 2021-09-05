// Check that our root CSS styles have loaded into the DOM. If --book-cover-width-large is not equal to null, it has been loaded into the DOM and is ready to use. If the variable is equal to null, and has not been loaded, an event listener will wait for it to load. When the CSS styles have loaded, the event listener will run the ready function.
const rootStyles = window.getComputedStyle(document.documentElement);

if (
  rootStyles.getPropertyValue("--book-cover-width-large") != null &&
  rootStyles.getPropertyValue("--book-cover-width-large") != ""
) {
  ready();
} else {
  document.getElementById("main-css").addEventListener("load", ready);
}

// When the CSS styles have been loaded into the DOM, run the code inside of the ready() function. This is like the old jQuery documentReady() function.
function ready() {
  // The parseFloat method is needed to convert the coverWidth from a string to a float number.
  const coverWidth = parseFloat(
    rootStyles.getPropertyValue("--book-cover-width-large")
  );
  // The parseFloat method is needed to convert the coverAspectRatio from a string to a float number.
  const coverAspectRatio = parseFloat(
    rootStyles.getPropertyValue("--book-cover-aspect-ratio")
  );
  const coverHeight = coverWidth / coverAspectRatio;
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
  );

  FilePond.setOptions({
    stylePanelAspectRatio: 1 / coverAspectRatio,
    imageResizeTargetHeight: coverHeight,
    imageResizeTargetWidth: coverWidth,
    imageResizeMode: "contain",
  });

  // Turn all file input elements into ponds
  FilePond.parse(document.body);
}
