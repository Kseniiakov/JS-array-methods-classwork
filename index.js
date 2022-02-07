const car = {
  speed: 0,
  moveForvard: function () {
    this.speed ++;
  },
  moveBack: function () {
    this.speed --;
  },
  stop: function () {
    this.speed = 0;
  }
}

