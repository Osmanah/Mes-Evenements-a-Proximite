$(document).ready(function() {

    var divContainer = $("#DivDomApi");

// le lien d'api
// La filtrage des évenements concertPlus

var glob = function(json) {
     json.records.forEach(function(item) {
      creImg = $("<img/>");
      creHref = creImg.attr("src", item.record.fields.image);
      apiImage = creImg.attr("class", "apiImage");
      divContainer.append(creImg);

      divTitle = $("<div></div>");
      title = $("<h5></h5>");
      divTitle.append(title);
      divContainer.append(divTitle);
      divTitle.attr("class", "apiDivTitle");
      title.attr("class", "apiTitle");
      title.append(" " + item.record.fields.title);

      divDateStart = $("<div></div>");
      dateStart = $("<h5>Date de début:</h5>");
      divDateStart.append(dateStart);
      divContainer.append(divDateStart);
      divDateStart.attr("class", "apiDivDateStart");
      dateStart.attr("class", "apiDateStart");
      dateStart.append(" " + item.record.fields.date_start);

      divDateEnd = $("<div></div>");
      dateEnd = $("<h5>Date de fin:</h5>");
      divDateEnd.append(dateEnd);
      divContainer.append(divDateEnd);
      divDateEnd.attr("class", "apiDivDateEnd");
      dateEnd.attr("class", "apiDateEnd");
      dateEnd.append(" " + item.record.fields.date_end);

      divAdresse = $("<div></div>");
      adresse = $("<h5>City: </h5>");
      divAdresse.append(adresse);
      divContainer.append(divAdresse);
      divAdresse.attr("class", "apiDivAdresse");
      adresse.attr("class", "apiAdresse");
      adresse.append(" " + item.record.fields.city);

      divPrix = $("<div></div>");
      prix = $("<h5>Le prix:</h5>");
      divPrix.append(prix);
      divContainer.append(divPrix);
      divPrix.attr("class", "apiDivPrix");
      prix.attr("class", "apiPrix");
      prix.append(" " + item.record.fields.pricing_info);

      divDescription = $("<div></div>");
      description = $("<h5>Description:</h5>");
      divDescription.append(description);
      divContainer.append(divDescription);
      divDescription.attr("class", "apiDivDescription");
      description.attr("class", "apiDescription");
      description.append(" " + item.record.fields.description);

      creLink = $("<a target='blank' >Le lien vers le site: </a>");
      creLink.attr("class", "creLink");
      divContainer.append(creLink);
      creLink.attr("href", item.record.fields.link);
  });
};


    $("#concertGeneral").on("click", function() {

     divContainer.empty();

        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22%C3%8Ele-de-France%22%2C%20%22Concert%22%2C%20%222017%22&rows=30&start=24&pretty=false&timezone=UTC", function(json) {
          glob(json);        });  });

    $("#concertGratuit").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22gratuit%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertDixEuro").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2210%E2%82%AC%22&rows=30&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });


    $("#concertVingtEuro").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2220%E2%82%AC%22%2C%2230%E2%82%AC%22&rows=30&start=8&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertPlus").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2240%E2%82%AC%22&rows=30&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertRock").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mars%22%20%2C%20%22Rock%22&rows=30&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertElectro").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Electro%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
          glob(json);        });    });

    $("#concertHouse").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22House%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertJazz").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Jazz%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertFunk").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Funk%22&rows=30&start=7&pretty=false&timezone=UTC", function(json) {
          glob(json);        });  });

    $("#concertBlues").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Blues%22&rows=30&&start=4pretty=false&timezone=UTC", function(json) {
          glob(json);        });  });

    $("#concertPop").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Pop%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
          glob(json);        });    });

});
