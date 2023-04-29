// var metotunu gözüm kesmediği için özellikle onu kullandım

$(function() {
    $.getJSON("data.json", function(data) {
      var html = treeYapi(data);
      $("#agac").html(html);    // tree kimliğine sahip bir html elementine dönüştürme
      console.log($("#agac").html(html))
    });
  });

//   $.getJSON() bir jQuery fonksiyonudur ve parametre olarak bir URL 
//   ve bir geri çağırma fonksiyonu alır. Bu fonksiyon AJAX çağrısı yapar 
//   ve JSON formatındaki verileri bu URL'den alır. Daha sonra geri 
//   çağırma fonksiyonu, alınan JSON verilerini bir JavaScript nesnesine
//   dönüştürür ve bu nesneyi parametre olarak alır. Bu örnekte, data.json
//   dosyasından verileri alır ve data değişkenine atar.
//    function(data) ise geri çağırma fonksiyonudur ve data parametresi,
//   alınan JSON verilerini içeren JavaScript nesnesini temsil eder.
  
  function treeYapi(data) {
    var ul = "<ul>";        // ul değişkeni aslında kod bloğunun sonunda html kodunu barındıracak
    ul += "<li>";
    // console.log(ul);
    if (data.children) {
      var muhitAdi = data.name; // toLowerCase() kullanabilirim böylece muhitAdi id değerini daha çok andırır
      ul += "<button id='" + muhitAdi + "'>" + data.name + "</button>";
    //   console.log(muhitAdi);
      ul += "<ul id='" + muhitAdi + "-children'>";
      for (var i = 0; i < data.children.length; i++) {
        var child = data.children[i];
        // console.log(child)
        ul += "<li>" + treeYapi(child) + "</li>";
      }
      ul += "</ul>";
    } else {
        ul += "<span>" + data.name + "</span>";
    }
    ul += "</li>";
    ul += "</ul>";
    // console.log(ul);

    return ul;
  }
  
  $(document).on("click", "#agac button", function() {
    var buttonId = $(this).attr("id");
    $("#" + buttonId + "-children").toggle();
  });
  
//   45. satır: Bu kod, agac kimliğine sahip öğenin soyundan gelen tüm düğme öğelerine 
//  (HTML'deki agac: tree yapısı kapsayıcı öğe) bir tıklama olayı dinleyicisi 
//  iliştiren bir jQuery işlevidir. Bu düğme öğelerinden biri tıklandığında, 
//  ikinci argüman olarak belirtilen işlev yürütülür.

//  46. satır: Bu satır, tıklanan butonun ID'sini almak için kullanılır.
// $(this) seçicisi, olayın tetiklendiği butona atıfta bulunur. attr() yöntemi,
// seçilen öğenin belirtilen özniteliğinin değerini alır. 
// Bu durumda, id özniteliğinin değeri alınır ve buttonId değişkenine atanır.




  