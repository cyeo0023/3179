var spec2 = "sphere.json";
var spec3 = "bubble.json";
var spec4 = "radial.json";
var spec5 = "vaccine.json";
vegaEmbed('#map', spec2,{"actions":false}).then(function(result) {
}).catch(console.error);
vegaEmbed('#bubble_plot', spec3,{"actions":false}).then(function(result) {
}).catch(console.error);
vegaEmbed('#radial_plot', spec4,{"actions":false}).then(function(result) {
}).catch(console.error);
vegaEmbed('#vaccine', spec5,{"actions":false}).then(function(result) {
}).catch(console.error);
