var spec2 = "sphere.json";
var spec3 = "bubble.json";
var spec4 = "radial.json";
var spec5 = "vaccine.json";
vegaEmbed('#map', spec2).then(function(result) {
}).catch(console.error);
vegaEmbed('#bubble_plot', spec3).then(function(result) {
}).catch(console.error);
vegaEmbed('#radial_plot', spec4).then(function(result) {
}).catch(console.error);
vegaEmbed('#vaccine', spec5).then(function(result) {
}).catch(console.error);
