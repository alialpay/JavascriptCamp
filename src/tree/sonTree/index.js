// index.json dosyasını yükle
d3.json("index.json").then(function(data) {
  // d3.js kullanarak ağacı görselleştir
  var width = 500;
  var height = 500;

  var treeLayout = d3.tree().size([height, width - 100]);
  var rootNode = d3.hierarchy(data);

  var svg = d3.select("#tree").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(50, 50)");

  var links = treeLayout(rootNode).links();
  var link = svg.selectAll(".link")
    .data(links)
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal()
      .x(function(d) { return d.y; })
      .y(function(d) { return d.x; }));

  var nodes = svg.selectAll(".node")
    .data(rootNode.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
      return "translate(" + d.y + "," + d.x + ")";
    });

  nodes.append("circle")
    .attr("r", 5);

  nodes.append("text")
    .attr("x", function(d) { return d.children ? -8 : 8; })
    .attr("dy", 3)
    .attr("text-anchor", function(d) { return d.children ? "end" : "start"; })
    .text(function(d) { return d.data.name; });
});
