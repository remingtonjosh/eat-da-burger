$(document).on("click", ".eatburger", function(event) {
  var burgerid = $(this).attr("data-id");
  var query = "/api/burgers/" + burgerid;
  $.ajax({
    method: "PUT",
    URL: query
  }).then(function(data) {
    location.reload();
  });
});
