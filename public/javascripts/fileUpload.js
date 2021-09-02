FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);

FilePond.setOptions({
  stylePanelAspectRatio: 320 / 210,
  imageResizeTargetHeight: 320,
  imageResizeTargetWidth: 210,
  imageResizeMode: "contain",
});

// Turn all file input elements into ponds
FilePond.parse(document.body);
