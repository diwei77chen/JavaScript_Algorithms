let qt;

function setup() {
  createCanvas(400, 400);
  const x = 200;
  const y = 200;
  const width = 200;
  const height = 200;
  let boundary = new Rectangle(200, 200, 200, 200);
  qt = new QuadTree(boundary, 4);

  // for (let i = 0; i < 500; i++) {
  //   let p = new Point(random(width * 2), random(height * 2));
  //   print(p);
  //   qt.insert(p);
  // }

  background(0);
  // print(qt);
}

function draw() {
  if (mouseIsPressed) {
    for (let i = 0; i < 3; ++i) {
      let m = new Point(mouseX + random(-5, 5), mouseY + random(-5, 5));
      qt.insert(m);
    }
    print(qt);
  }
  qt.show();
}
