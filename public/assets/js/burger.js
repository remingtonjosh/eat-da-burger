$(document).ready(function () {

    $(".eatburger").on("click", function (event) {
        var burgerid = $(this).attr("data-id");
        console.log(burgerid);
        $.ajax({
            method: "PUT",
            URL: "/api/burgers/" + burgerid
        }).then(function (data) {
            location.reload();
        })
    });
});