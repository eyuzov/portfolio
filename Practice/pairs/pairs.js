pairs = {
  cards: [
    // {name: '2', src: 'cards/club/2.jpg'},
    // {name: '3', src: 'cards/club/3.jpg'},
    // {name: '4', src: 'cards/club/4.jpg'},
    // {name: '5', src: 'cards/club/5.jpg'},
    {name: '6', src: 'cards/club/6.jpg', shown: 0},
    {name: '7', src: 'cards/club/7.jpg', shown: 0},
    {name: '8', src: 'cards/club/8.jpg', shown: 0},
    {name: '9', src: 'cards/club/9.jpg', shown: 0},
    {name: '10', src: 'cards/club/10.jpg', shown: 0},
    {name: 'j', src: 'cards/club/j.jpg', shown: 0},
    {name: 'q', src: 'cards/club/q.jpg', shown: 0},
    {name: 'k', src: 'cards/club/k.jpg', shown: 0},
    {name: 'a', src: 'cards/club/a.jpg', shown: 0},

    // {name: '2', src: 'cards/diamond/2.jpg'},
    // {name: '3', src: 'cards/diamond/3.jpg'},
    // {name: '4', src: 'cards/diamond/4.jpg'},
    // {name: '5', src: 'cards/diamond/5.jpg'},
    {name: '6', src: 'cards/diamond/6.jpg', shown: 0},
    {name: '7', src: 'cards/diamond/7.jpg', shown: 0},
    {name: '8', src: 'cards/diamond/8.jpg', shown: 0},
    {name: '9', src: 'cards/diamond/9.jpg', shown: 0},
    {name: '10', src: 'cards/diamond/10.jpg', shown: 0},
    {name: 'j', src: 'cards/diamond/j.jpg', shown: 0},
    {name: 'q', src: 'cards/diamond/q.jpg', shown: 0},
    {name: 'k', src: 'cards/diamond/k.jpg', shown: 0},
    {name: 'a', src: 'cards/diamond/a.jpg', shown: 0},

    // {name: '2', src: 'cards/heart/2.jpg'},
    // {name: '3', src: 'cards/heart/3.jpg'},
    // {name: '4', src: 'cards/heart/4.jpg'},
    // {name: '5', src: 'cards/heart/5.jpg'},
    {name: '6', src: 'cards/heart/6.jpg', shown: 0},
    {name: '7', src: 'cards/heart/7.jpg', shown: 0},
    {name: '8', src: 'cards/heart/8.jpg', shown: 0},
    {name: '9', src: 'cards/heart/9.jpg', shown: 0},
    {name: '10', src: 'cards/heart/10.jpg', shown: 0},
    {name: 'j', src: 'cards/heart/j.jpg', shown: 0},
    {name: 'q', src: 'cards/heart/q.jpg', shown: 0},
    {name: 'k', src: 'cards/heart/k.jpg', shown: 0},
    {name: 'a', src: 'cards/heart/a.jpg', shown: 0},

    // {name: '2', src: 'cards/spade/2.jpg'},
    // {name: '3', src: 'cards/spade/3.jpg'},
    // {name: '4', src: 'cards/spade/4.jpg'},
    // {name: '5', src: 'cards/spade/5.jpg'},
    {name: '6', src: 'cards/spade/6.jpg', shown: 0},
    {name: '7', src: 'cards/spade/7.jpg', shown: 0},
    {name: '8', src: 'cards/spade/8.jpg', shown: 0},
    {name: '9', src: 'cards/spade/9.jpg', shown: 0},
    {name: '10', src: 'cards/spade/10.jpg', shown: 0},
    {name: 'j', src: 'cards/spade/j.jpg', shown: 0},
    {name: 'q', src: 'cards/spade/q.jpg', shown: 0},
    {name: 'k', src: 'cards/spade/k.jpg', shown: 0},
    {name: 'a', src: 'cards/spade/a.jpg', shown: 0},
  ],
  compare: {
    first: {name: null, obj: null},
    second: {name: null, obj: null},
  },
  turn: 0,
  score: 0,
  countOpenedCard: 0,
  init() {
    this.turn = 0;
    let container = document.getElementById('container');
    container.addEventListener('click', (e) => this.play(e));
    let j = 0;
    while (j < this.cards.length) {
      let item = Math.floor(Math.random() * this.cards.length);
      if (this.cards[item].shown === 0) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        div.appendChild(img);
        div.classList.add('card');
        img.setAttribute('src', `${this.cards[item].src}`);
        container.appendChild(div);
        this.cards[item].shown = 1;
        j++;
      }
    }
    let timer = setTimeout(() => this.start(), 2000);

  },
  start() {
    let card = document.getElementsByClassName('card');
    for (let i of card) {
      i.children[0].setAttribute('style', 'display: none;')
    }
  },
  play(e) {

    if (e.target.tagName === 'DIV') {
      e.target.children[0].setAttribute('style', 'display: block');
      if (this.turn === 0) {
        this.compare.first.obj = e.target.children[0];
        this.compare.first.name = e.target.children[0].attributes.src.value.substr
        (e.target.children[0].attributes.src.value.lastIndexOf('/') + 1);

        this.turn += 1;

      } else {
        this.compare.second.obj = e.target.children[0];
        this.compare.second.name = e.target.children[0].attributes.src.value.substr
        (e.target.children[0].attributes.src.value.lastIndexOf('/') + 1);

        this.turn += 1;
      }
    }
    if (this.turn === 2) {
      this.score += 1;
      let score = document.getElementById('text');
      score.innerHTML = this.score;

      if (this.compare.first.name === this.compare.second.name) {
        this.countOpenedCard += 2;
        this.turn = 0;
        if (this.countOpenedCard === this.cards.length) {

          score.innerHTML = `Congratulations you win for ${this.score} turns`;
        }
      } else {
        setTimeout(() => this.hide(), 500);
        this.turn = 0;

      }
    }


  },
  hide() {
    this.compare.second.obj.setAttribute('style', 'display: none');
    this.compare.first.obj.setAttribute('style', 'display: none');
    this.compare.second.obj = null;
    this.compare.first.obj = null;
    this.compare.second.name = null;
    this.compare.first.name = null;
  },
};