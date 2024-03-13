class Copyright {
  constructor() {
    this._render();
  }

  _render() {
    let $year = new Date().getFullYear();
    let $a = $(`<h6>&copy; ${$year} Brand All Rights Reserved.</h6>`);
    $('.copy').append($a);
  }
}