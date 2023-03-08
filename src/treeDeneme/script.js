$(function() {
  $.getJSON("data.json", function(data) {
    var html = renderTree(data);
    $("#tree").html(html);
  });
});

function renderTree(data) {
  var html = "<ul>";
  html += "<li>" + data.name;
  if (data.children) {
    html += "<ul>";
    for (var i = 0; i < data.children.length; i++) {
      var child = data.children[i];
      html += "<li>" + renderTree(child) + "</li>";
    }
    html += "</ul>";
  }
  html += "</li>";
  html += "</ul>";
  return html;
}
