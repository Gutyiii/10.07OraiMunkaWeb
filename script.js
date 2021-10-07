$(function () {
  const termek = [];

  adatbeolvasas("jsontermekek.json", termek);

  $("#gomb").click(function () {});

  function adatbeolvasas(fajlNev, tomb /*,myCallback*/) {
    $.ajax({
      url: fajlNev,
      success: function (result) {
        //tomb.splice(0,tomb.length);
        result.forEach((elem) => {
          tomb.push(elem);
        });
        console.log(tomb);
        /*myCallback();*/
        megjelenit(termek);
      },
    });
  }

  function megjelenit(tomb) {
    $("#tablazat").append("<table></table>");
    $("table").append("<tr></tr>");
    $("tr")
      .eq(0)
      .append("<th>Terméknév</th><th>Leírás</th><th>Készlet</th><th>Ár</th>");
    tomb.forEach((element) => {
      let inde = 1;
      tomb.forEach((index) => {
        $("table").append("<tr></tr>");
        $("tr")
          .eq(inde)
          .append("<td>" + element[index] + "</td>");
        /*$("tr")
          .eq(inde)
          .append(
            "<input type='button' id='gomb' name='gomb' value='Módósít>'"
          );*/
        inde++;
      });
    });
  }
});
