const q = console.log;

//use 100vh for mobile responsive
//COP!!!
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
///////////////////////////////////////////

let elementWidth = document.getElementById("box1").offsetHeight;

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    document.getElementById(
      `box${(i - 1) * 4 + j}`
    ).style = `background-position: ${-elementWidth * (j - 1)}px ${
      -elementWidth * (i - 1)
    }px; width: ${elementWidth}px; height: ${elementWidth}px;`;
  }
}

window.addEventListener("resize", () => {
  let elementWidth = document.getElementById("box1").offsetHeight;

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      document.getElementById(
        `box${(i - 1) * 4 + j}`
      ).style = `background-position: ${-elementWidth * (j - 1)}px ${
        -elementWidth * (i - 1)
      }px;`;
    }
  }
});

let isAction = false;

const action = () => {
  if (!isAction) {
    document.getElementById("main").classList.add("mainAct");
    for (let i = 1; i <= 16; i++) {
      document.getElementById(`box${i}`).classList.add("rotation");
    }
    isAction = true;
  } else {
    document.getElementById("main").classList.remove("mainAct");
    for (let i = 1; i <= 16; i++) {
      document.getElementById(`box${i}`).classList.remove("rotation");
    }
    isAction = false;
  }
};
