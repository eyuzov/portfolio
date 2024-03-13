class Buy {
  constructor(product, container = '.cart-flex') {
    this.product = product;
    this.container = container;
    this._render(this.container, this.product);
  }

  _render(container, product) {
    let $itemContainer = $(`<div/>`, {
      class: 'item-parent'
    });

    let $itemDivImg = $(`<div/>`, {
      class: 'item-img'
    });
    let $itemImg = $(`<img/>`, {
      src: $(product)[0].dataset.img
    });

    let $itemDesc = $(`<div/>`, {
      class: 'item-desc',
    });
    let $itemDescP = $('<p/>', {
      text: $(product)[0].dataset.name
    });
    let $itemDescSpan = $('<span/>', {
      text: $(product)[0].dataset.price
    });

    let $itemDel = $(`<div/>`, {
      class: 'item-del',
      html: `<i class="fas fa-times-circle"></i>`
    });

    $itemDivImg.append($itemImg);
    $itemContainer.append($itemDivImg);

    $itemDesc.append($itemDescP);
    $itemDesc.append($itemDescSpan);
    $itemContainer.append($itemDesc);

    $itemContainer.append($itemDel);

    $(container).prepend($itemContainer);
    $('#cart-sum').text($(product)[0].dataset.price);

  }


}
