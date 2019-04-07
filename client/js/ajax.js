console.log("yeppppeee");

$("#modalcenter").on("submit", "#orderForm", function(e) {
  e.preventDefault();
  const form = $(this);
  const data = form.serializeArray();

  console.log(data);

  const item = $("#item").value();
  const price = $("#price").value();
  const quantity = $("#quantity").value();
  const total = $("#total").value();
  const url = $(this).attr("action");

  // $Post(url, {
  //   item: item,
  //   price: price,
  //   quantity: quantity,
  //   total: total
  // }).done(function(data) {
  //   console.log("clicked me");
  //   console.log(data);
  // });

  // const foodItem = $(this).serialize();
});
