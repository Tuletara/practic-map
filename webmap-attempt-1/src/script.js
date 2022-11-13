require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "c5fcfef663df4482b5ec9b438ea18cca"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
