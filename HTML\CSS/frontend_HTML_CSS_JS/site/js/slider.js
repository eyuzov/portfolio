class Slider {
  constructor() {
    this._init();
  }

  _init() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [52, 400],
      slide: function (event, ui) {
        $("#amount-start").val(`$ ${0 + ui.values[0]}`);
        $("#amount-end").val(`$ ${0 + ui.values[1]}`);
      }
    });
    $("#amount-start").val("$ " + $("#slider-range").slider("values", 0));
    $("#amount-end").val("$ " + $("#slider-range").slider("values", 1));
  }
}