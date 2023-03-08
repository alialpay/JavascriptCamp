$(document).ready(function() {
    $.getJSON("index.json", function(data) {
      buildTree(data, $("#ankara-tree"));
    });
  
    function buildTree(data, parent) {
      var ul = $("<ul>");
      parent.append(ul);
  
      $.each(data.children, function(key, value) {
        var li = $("<li>").html(value.name);
  
        if (value.children) {
          li.addClass("parent");
          buildTree(value, $("<ul>").appendTo(li));
        }
  
        ul.append(li);
      });
    }
  
    $(".parent > ul").hide();
  
    $("li.parent").click(function() {
      $(this).children("ul").slideToggle();
    });
  });
  $(document).ready(function() {
    $.getJSON("index.json", function(data) {
      buildTree(data, $("#ankara-tree"));
    });
  
    function buildTree(data, parent) {
      var ul = $("<ul>");
      parent.append(ul);
  
      $.each(data.children, function(key, value) {
        var li = $("<li>").html(value.name);
  
        if (value.children) {
          li.addClass("parent");
          buildTree(value, $("<ul>").appendTo(li));
        }
  
        ul.append(li);
      });
    }
  
    $(".parent > ul").hide();
  
    $("li.parent").click(function() {
      $(this).children("ul").slideToggle();
    });
  });
    