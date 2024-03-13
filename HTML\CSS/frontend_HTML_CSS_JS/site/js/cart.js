class Cart {
  constructor(source = '../products.json', container = '.table') {
    this.source = source;
    this.container = container;
    this.amount = 0;
    this.id = 0;
    this.cartArray = [];
    this.total = 0;
    this._init(this.source);
  }

  _clearCart(){
    for (let i=0; i<=this.cartArray.length; i++){
      this.cartArray.shift();
      sessionStorage.clear();
      location.reload();
    }
  };

  _init(source) {
    $('#clear').click(()=>{
      this._clearCart();
    });
    $('#continue').click(()=>{
      location.href = 'catalog.html';
    });
    if (sessionStorage.length > 0) {
      let $restoredSession = JSON.parse(sessionStorage.getItem('cart'));
      for (let item of $restoredSession) {
        this.cartArray.push(item);
      }
    }

    fetch(source)
      .then(result => result.json())
      .then(data => {
        for (let product of data) {
          let find = this.cartArray.find(cartItem => cartItem.id === product.id);
          if (find) {
            this._changeArr(find, product.quantity);
          } else {
            this.cartArray.push(product);
            this._render(this.cartArray);
          }
        }
      })
  }

  _changeArr(item, quantity) {
    item.quantity += quantity;
    this._render(this.cartArray);
  }

  _remove(item) {
    let find = this.cartArray.find(cartItem => cartItem.id === $(item).data('itemid'));
    if (find.quantity > 1) {
      find.quantity--;
      this.total -= find.price;

      $('#quant')[0].value = find.quantity;
      $('#subtotal').html(`${find.quantity * find.price}`);
      $('.all-total').html(`$ ${this.total.toFixed(2)}`);
    } else {
      this.total -= find.price;
      if (this.total < 0) {
        this.total = (this.total*0) + 0;
      }
      let $tr = $(document).find(`tr[data-itemid="${$(item).data('itemid')}"]`);
      $('.all-total').html(`$ ${(this.total).toFixed(2)}`);
      this.cartArray.splice(this.cartArray.indexOf(find), 1);

      $tr.remove();
    }
  }

  _render(arr) {
    for (let product of arr) {
      this._renderItem(product);
    }
  }

  _renderItem(product) {

    let $row = $(`<tr/>`, {
      class: "head",
      "data-itemid": product.id
    });
    let $td1 = $(`<td/>`, {
      class: "product"
    });
    let $td1Div = $(`<div/>`, {
      class: "product-view"
    });
    let $td1DivA = $(`<a/>`, {
      href: "product.html",
    });
    let $td1DivAImg = $(`<img/>`, {
      class: "preview",
      alt: "preview",
      src: `${product.src}`
    });
    let $td1DivADiv = $(`<div/>`, {
      class: "prod-desc",
      html: `<h3>Mango People T-shirt</h3><p>Color: <span>${product.color}</span>\n
            <br>Size: <span>${product.size}</span></p>`
    });

    let $td2 = $(`<td/>`, {
      class: "other other-details",
      html: `$ ${product.price}`,
      id: "price"
    });
    let $td3 = $(`<td/>`, {
      class: "other other-details"
    });

    let $td3Input = $(`<input/>`, {
      type: "text",
      class: "quant",
      id: "quant",
      value: product.quantity
    });

    let $td4 = $(`<td/>`, {
      class: "other other-details",
      html: product.ship
    });
    let $td5 = $(`<td/>`, {
      class: "other other-details",
      id: "subtotal",
      html: `$ ${(product.price * product.quantity).toFixed(2)}`
    });


    let $td6 = $(`<td/>`, {
      class: "other other-details",
      html: `<i class="fas fa-times-circle" data-itemid=${product.id}></i>`,

    });

    $td6.on('click', 'i', (e) => {

      this._remove(e.target);

    });

    $td1.append($td1Div);
    $td1Div.append($td1DivA);
    $td1DivA.append($td1DivAImg);
    $td1DivA.append($td1DivADiv);

    $td3.append($td3Input);

    $row.append($td1);
    $row.append($td2);
    $row.append($td3);
    $row.append($td4);
    $row.append($td5);
    $row.append($td6);
    $(this.container).append($row);
    this.total += product.price * product.quantity;
    $('.all-total').html(`$ ${this.total.toFixed(2)}`);
  }

}