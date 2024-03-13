"use strict";

const snake = {

  buttons: {
    start: null,
    pause: null,
    new: null,
  },

  settings: {
    row: 0,
    col: 0,
    speed: 0,
  },
  snake: [],

  foodX: 0,
  foodY: 0,
  direction: 'up',
  lastDirection: 'up',
  timer: null,
  totalScore: 0,

  init(row, col, speed) {
    this.settings.row = row;
    this.settings.col = col;
    this.settings.speed = speed;
    const btn = document.getElementById('start');
    const btn1 = document.getElementById('pause');
    const btn2 = document.getElementById('new');
    this.buttons.start = btn;
    this.buttons.pause = btn1;
    this.buttons.new = btn2;
    this.buttons.start.addEventListener('click', () => this.start(this.settings.speed));
    this.buttons.pause.addEventListener('click', () => this.pause());
    this.buttons.pause.setAttribute('disabled', '1');
    this.buttons.new.addEventListener('click', () => this.refresh());


    this.createSnakeHead();
    this.createFood();
    this.render(this.settings.row, this.settings.col);

    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowUp':
          if (this.lastDirection !== 'down') {
            this.lastDirection = this.direction = 'up';
          }
          break;
        case 'ArrowDown':
          if (this.lastDirection !== 'up') {
            this.lastDirection = this.direction = 'down';
          }
          break;
        case 'ArrowLeft':
          if (this.lastDirection !== 'right') {
            this.lastDirection = this.direction = 'left';
          }
          break;
        case 'ArrowRight':
          if (this.lastDirection !== 'left') {
            this.lastDirection = this.direction = 'right';
          }
          break;
      }
    });
  },
  createSnakeHead() {
    let snakeHead = {x: Math.floor(this.settings.row / 2), y: Math.floor(this.settings.col / 2)};
    this.snake.push(snakeHead);
  },
  refresh() {
    this.snake = [];
    this.createSnakeHead();
    this.createFood();
    this.render(this.settings.row, this.settings.col);
    this.buttons.start.removeAttribute('disabled');
  },
  pause() {
    clearInterval(this.timer);
    this.buttons.start.removeAttribute('disabled');
    this.buttons.pause.setAttribute('disabled', '1');
  },
  start(a) {
    this.timer = setInterval(() => this.play(), a);
    this.buttons.start.setAttribute('disabled', '1');
    this.buttons.new.setAttribute('disabled', '1');
    this.buttons.pause.removeAttribute('disabled');
  },
  play() {
    switch (this.direction) {
      case 'up':
        this.nextStep(-1, 0);
        break;
      case 'down':
        this.nextStep(1, 0);
        break;
      case 'left':
        this.nextStep(0, -1);
        break;
      case 'right':
        this.nextStep(0, 1);
        break;
    }
  },
  nextStep(a, b) {
    const snakeHead = {
      x: 0, y: 0
    };
    snakeHead.x = this.snake[0].x + a;
    snakeHead.y = this.snake[0].y + b;
    if (this.isSnake(snakeHead.x, snakeHead.y) ||
      ((snakeHead.x < 0 || snakeHead.x >= this.settings.row) ||
        (snakeHead.y < 0 || snakeHead.y >= this.settings.col))) {
      this.gameOver();
    } else {
      this.snake.unshift(snakeHead);
      this.snake.pop();
      this.render(this.settings.row, this.settings.col);
    }
  },
  gameOver() {
    clearInterval(this.timer);
    const score = document.getElementById('score');
    score.innerHTML = `Game Over :-( Yours score is ${this.totalScore}`;
    this.buttons.pause.setAttribute('disabled', '1');
    this.buttons.new.removeAttribute('disabled');
  },
  createFood() {
    const foodX = Math.floor(Math.random() * (this.settings.row));
    const foodY = Math.floor(Math.random() * (this.settings.col));
    if (!this.isSnake(foodX, foodY)) {
      this.foodX = foodX;
      this.foodY = foodY;
    }
  },
  render(row, col) {
    const score = document.getElementById('score');
    const container = document.getElementById('table');
    container.innerHTML = '';
    for (let i = 0; i < row; i++) {
      const tr = document.createElement('tr');
      container.appendChild(tr);
      for (let j = 0; j < col; j++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        if (this.isFood(i, j)) {
          td.classList.add('food');
        }
        if (this.isSnake(i, j)) {
          td.classList.add('snake');
        }
        if (this.isSnakeHead(i, j)) {
          td.classList.add('snake-head');
        }
        if (this.onFood()) {
          this.createFood();
          score.innerHTML = this.totalScore;
        }
      }
    }
  },
  onFood() {
    if (this.foodX === this.snake[0].x && this.foodY === this.snake[0].y) {
      let body = {x: this.snake[this.snake.length - 1].x, y: this.snake[this.snake.length - 1].y};
      this.snake.push(body);
      this.totalScore += 1;
      return true;
    }
  },
  isFood(x, y) {
    if (this.foodX === x && this.foodY === y) return true;
  },
  isSnake(x, y) {
    for (let i in this.snake) {
      if (this.snake[i].x === x && this.snake[i].y === y) return true;
    }
  },
  isSnakeHead(x, y) {
      if (this.snake[0].x === x && this.snake[0].y === y) return true;
  },
};
