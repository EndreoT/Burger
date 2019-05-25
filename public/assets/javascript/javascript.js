
$(function () {
  $(".change-devoured").click(function(event) {
    const id = $(this).data("id");
    const devouredBurger = {
      burgerName: $(this).data("name"),
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $("#submit-burger").click(function (event) {
    event.preventDefault();

    const burger = {
      burgerName: $("#burger-name").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: burger
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".delete-burger").click(function(event) {
    event.preventDefault();
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
