class Point {
  constructor() {
    this.pointA = {
      x: 1,
      y: 1
    };

    this.pointB = {
      x: 10,
      y: 10
    };

    this.pointC = {
      x: 12,
      y: 2
    };

    this.pointD = {
      x: -1,
      y: 8
    }
  }

    razmakAB() {
      const razlikaY = this.pointB.y - this.pointA.y;
      const razlikaX = this.pointB.x - this.pointA.x;
      console.log(Math.hypot(razlikaY, razlikaX));
    }

    razmakCD() {
      const razlikaY = this.pointC.y - this.pointD.y;
      const razlikaX = this.pointC.x - this.pointD.x;
      console.log(Math.hypot(razlikaY, razlikaX));
    }

    pomjerenaRazlika(pomjeranjeX, pomjeranjeY) {
      const razlikaX = this.pointB.x - (this.pointA.x + pomjeranjeX);
      const razlikaY = this.pointB.y - (this.pointA.y + pomjeranjeY);
      console.log(Math.hypot(razlikaX, razlikaY));
    }
  }

const tačke = new Point;

tačke.pomjerenaRazlika(10, -5);
tačke.razmakAB();
tačke.razmakCD();
