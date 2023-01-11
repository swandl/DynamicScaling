let txt = [
  document.getElementById("text1"),
  document.getElementById("text2")
];

let box = [
  document.getElementById("box1"),
  document.getElementById("box2")
];

function isOverflown (i) {
  return box[i].scrollWidth > box[i].clientWidth;
}

async function resize (i) {
  while (isOverflown(i)) {
    txt[i].style.scale -= 0.01;
  }
}

txt[0].style.scale = 1;
txt[1].style.scale = 1;

resize(0);
resize(1);
