function passThePillow(n: number, time: number) {
  let person = 1;
  let tick = 1;
  let direction = "right";

  while (tick <= time) {
    if (person === 1) {
      person += 1;
      tick += 1;

      if (direction === "left") direction = "right";
    }

    if (person === n) {
      person -= 1;
      tick += 1;

      if (direction === "right") direction = "left";
    }

    if (person < n && person !== 1 && person !== n) {
      if (direction === "right") {
        person += 1;
        tick += 1;
      } else if (direction === "left") {
        person -= 1;
        tick += 1;
      }
    }
  }

  return person;
}

console.log(passThePillow(4, 5));
console.log(passThePillow(3, 2));
console.log(passThePillow(2, 341));
