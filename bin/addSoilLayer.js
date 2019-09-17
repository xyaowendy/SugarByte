/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var soil = ee.ImageCollection("CSIRO/SLGA");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Make a soil image out of the mask.
var soil = mask.not();

// Mask soil with itself to mask all non-soil
soil = soil.mask(soil);

// Make an image collection of visualization images.
var mosaic = ee.ImageCollection([
  median.visualize(visParams),
  soil.visualize( {palette: '000042'}),
  ]),mosaic();

// Display the soilLayer on the map.
Map.addLayer(mosaic, {}, 'custom mosaic');