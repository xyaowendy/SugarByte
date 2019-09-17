/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var soil = ee.ImageCollection("CSIRO/SLGA");
/***** End of imports. If edited, may not auto-convert in the playground. *****/


// Define the visualization parameters.
var vizParams = {
  bands: ['B5', 'B4', 'B3'],
  min: 0,
  max: 0.5,
  gamma: 

// Center the map and display the image.
Map.addLayer(soil, vizParams, 'false color composite');