// this file is script which is going to add elevation layer as well as a layer which
//contains points selected to dispay their elevation.

// Plot elevation at some points

var elevation = ee.Image('CGIAR/SRTM90_V4');

var allPointsSelected = [
  ee.Feature(
      ee.Geometry.Point([145.8960858217797, -17.56668979348206]),
      {'name': 'point 1'}),
  ee.Feature(
      ee.Geometry.Point([145.89668123185277, -17.566176769199103]), 
      {'name': 'point 2'}),
  ee.Feature(
      ee.Geometry.Point([145.89865533768773, -17.566054026681186]),
      {'name': 'point 3'}),
  ee.Feature(
      ee.Geometry.Point([145.89865533768773, -17.566054026681186]),
      {'name': 'point 4'}),
  ee.Feature(
      ee.Geometry.Point([145.89923234664957, -17.565685718404545]), 
      {'name': 'point 5'})
];

var allPointsSelected = ee.FeatureCollection(allPointsSelected);

var elevationTestChart = ui.Chart.image.byRegion({
  image: elevation,
  regions: allPointsSelected,
  scale: 200,
  xProperty: 'name'
});
elevationTestChart.setOptions({
  title: 'Elevation test chart',
  vAxis: {
    title: 'Elevation (meters)'
  },
  legend: 'none',
  lineWidth: 1,
  pointSize: 4
});

print(elevationTestChart);

// elevation = elevation.setName("hansen1"); 
// elevation = elevation.setOpacity(0.5); 

// layer 1 = layer 1.setName("hansen1"); 
// layer 1 = layer 1.setOpacity(0.5); 

Map.addLayer(elevation, {min: 500, max: 4500});
Map.addLayer(allPointsSelected, {color: 'FF0000'});
Map.setCenter(145.89865533768773, -17.565685718404545, 11);
Map.setCenter(145.89865533768773, -17.565685718404545, 11);