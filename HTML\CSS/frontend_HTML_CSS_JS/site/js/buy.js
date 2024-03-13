class Buy {
  constructor(container = '.cart-flex') {
    this.container = container;
    this.productArray = [];
    this.amount = 0;
    this._init();
  }

  _init() {
    $('.hover').draggable({revert: true, opacity: 0.5});

    $('.cart-hover').droppable({
      accept: $('.hover'),
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: (event, ui) => {
        this.addProduct(ui.draggable);
      }
    });

    $('.add_flex').on('click', 'a', (e) => {

      let $product = $(`.hover[data-id=${e.target.dataset.id}]`);

      this.addProduct($product);

    });

    //***************BUY FROM PRODUCT PAGE***********************

    $('.add_to_cart').on('click', 'button', (e) => {

      let $product = $(`.item_descr[data-id=${e.target.dataset.id}]`);

      this.addProduct($product);

    });
  }

  _remove(item) {

    let productId = +$(item).data('cartitemid');
    let find = this.productArray.find(productArr => productArr.id === productId);

    if (find.quantity > 1) {
      find.quantity--;
      this._updateCart(find);
    } else {
      let div = $(document).find(`div[data-cartitemid="${$(item).data('cartitemid')}"]`);
      div.remove();
      this.productArray.splice(this.productArray.indexOf(find), 1);
    }
    this.amount -= find.price;
    this._renderCart(this.amount);


  }

  addProduct(product) {

    let productId = +$(product).data('id');
    let find = this.productArray.find(productArr => productArr.id === productId);
    if (find) {
      find.quantity++;
      this.amount += find.price;
      this._updateCart(find);
    } else {
      let cartItem = {
        id: +$(product).data('id'),
        src: $(product).data('img'),
        name: $(product).data('name'),
        color: 'Red',
        size: 'XXL',
        price: parseFloat($(product).data('price')),
        quantity: 1,
        ship: 0
      };

      this.amount += cartItem.price;
      this.productArray.push(cartItem);

      this._render(this.container, cartItem);
    }
    this._renderCart(this.amount);

    sessionStorage.setItem('cart', JSON.stringify(this.productArray));
  }

  _updateCart(product) {
    let $container = $(document).find(`div[data-cartitemid="${product.id}"]`);
    $container.find('.span').text(`${product.quantity} x ${product.price}`);
  }

  _renderCart(amount) {
    $('#cart-sum').text(`$${amount.toFixed(2)}`);
  }

  _render(container, product) {

    let $itemContainer = $(`<div/>`, {
      class: 'item-parent',
      'data-cartItemId': product.id
    });

    let $itemDivImg = $(`<div/>`, {
      class: 'item-img'
    });
    let $itemImg = $(`<img/>`, {
      src: product.src
    });

    let $itemDesc = $(`<div/>`, {
      class: 'item-desc',
    });
    let $itemDescP = $('<p/>', {
      text: product.name
    });
    let $itemDescSpan = $('<span/>', {
      class: 'span',
      text: `${product.quantity} x $${product.price}`
    });

    let $itemDel = $(`<div/>`, {
      class: 'item-del',
      html: `<i class="fas fa-times-circle" data-cartItemId=${product.id}></i>`,

    });
    $itemDel.on('click', 'i', (e) => {
      this._remove(e.target)
    });

    $itemDivImg.append($itemImg);
    $itemContainer.append($itemDivImg);

    $itemDesc.append($itemDescP);
    $itemDesc.append($itemDescSpan);
    $itemContainer.append($itemDesc);

    $itemContainer.append($itemDel);

    $(container).prepend($itemContainer);

  }


}