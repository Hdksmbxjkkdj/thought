const menu_btn = document.querySelectorAll(".menu-btn");
const categories = document.querySelectorAll(".categories");
const sub_menu = document.getElementsByClassName("sub-menu")[0];
const return_btn = document.getElementsByClassName("return")[0];
const graph = document.getElementsByClassName("graph")[0];
const sub_menu_container = document.querySelector(".sub-menu-container");
const close_btn = document.querySelectorAll(".btn-close");
// const active_menu = document.querySelector(".active-menu");

const nodesData = [
  {
    relations: [1],
    width: 84,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/media-movie-multimedia-video-svgrepo-com 1.svg" />',
    text: "تولیدات رسانه",
    position: 0,
    translateY: 0,
  },
  {
    relations: [],
    width: 74,
    radius: 390,
    icon: '<img width="65%" src="./assets/images/language-svgrepo-com 1.svg" />',
    text: "زبان‌های خارجی",
    position: 20,
    translateY: -50,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/pen-swirl-svgrepo-com 1.svg" />',
    text: "محتوای متنی",
    position: 30,
    translateY: 30,
  },
  {
    relations: [],
    width: 57,
    radius: 410,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور استان‌ها",
    position: 15,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/collections-svgrepo-com 1.svg" />',
    text: "پیش تولید",
    position: 50,
    translateY: 0,
  },
  {
    relations: [],
    width: 80,
    radius: 410,
    icon: '<img width="65%" src="./assets/images/palette-svgrepo-com 1.svg" />',
    text: "مدیریت هنر و تبلیغ نوین",
    position: 70,
    translateY: 50,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/share-svgrepo-com 1.svg" />',
    text: "عملیات رسانه‌ای",
    position: 80,
    translateY: -40,
  },
  {
    relations: [],
    width: 57,
    radius: 390,
    icon: '<img width="65%" src="./assets/images/city-svgrepo-com 1.svg" />',
    text: "امور اجرایی",
    position: 90,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/gregorian-chants-svgrepo-com 1.svg" />',
    text: "ادیان و مذاهب",
    position: 110,
    translateY: 0,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "تولیدات رسانه",
    position: 125,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 390,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "زبان‌های خارجی",
    position: 130,
    translateY: -50,
  },
  {
    relations: [],
    width: 57,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "محتوای متنی",
    position: 146,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 390,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور استان‌ها",
    position: 150,
    translateY: -36,
  },
  {
    relations: [],
    width: 84,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "پیش تولید",
    position: 170,
    translateY: 0,
  },
  {
    relations: [],
    width: 74,
    radius: 390,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "مدیریت هنر و تبلیغ نوین",
    position: 190,
    translateY: -50,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "عملیات رسانه‌ای",
    position: 200,
    translateY: 30,
  },
  {
    relations: [],
    width: 57,
    radius: 410,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور اجرایی",
    position: 185,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 410,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "ادیان و مذاهب",
    position: 220,
    translateY: 50,
  },
  {
    relations: [],
    width: 74,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "تولیدات رسانه",
    position: 230,
    translateY: -40,
  },
  {
    relations: [],
    width: 57,
    radius: 390,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "زبان‌های خارجی",
    position: 240,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "محتوای متنی",
    position: 260,
    translateY: 0,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور استان‌ها",
    position: 280,
    translateY: 0,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "پیش تولید",
    position: 295,
    translateY: 50,
  },
  {
    relations: [],
    width: 53,
    radius: 390,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "مدیریت هنر و تبلیغ نوین",
    position: 300,
    translateY: -50,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "عملیات رسانه‌ای",
    position: 316,
    translateY: 50,
  },
  {
    relations: [],
    width: 57,
    radius: 390,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور اجرایی",
    position: 320,
    translateY: -36,
  },
  {
    relations: [],
    width: 80,
    radius: 410,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "ادیان و مذاهب",
    position: 330,
    translateY: 50,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="65%" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "تولیدات رسانه",
    position: 345,
    translateY: -50,
  },
  // { width: 80, radius: 390, icon: '<img src="./assets/images/iran-svgrepo-com (1) 1.svg" />', text: 'Node 8', position: 90, translateY: 50 },
];

const rotor = document.getElementById("rotor");

var w, hm, rotate_ratio, disc_ratio;

function init() {
  w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  console.log(w);

  rotate_ratio, (disc_ratio = 1);

  if (w < 525) {
    rotate_ratio = 0.6;
    disc_ratio = 0.66;
  } else if (w < 705) {
    rotate_ratio = 0.65;
    disc_ratio = 0.66;
  } else if (w < 768) {
    rotate_ratio = 0.63;
    disc_ratio = 0.72;
  } else if (w < 800) {
    rotate_ratio = 0.72;
    disc_ratio = 0.75;
  } else if (w < 1000) {
    rotate_ratio = 0.78;
    disc_ratio = 0.8;
  } else if (w < 1500) {
    rotate_ratio = 0.9;
    disc_ratio = 0.9;
  } else if (w < 2000) {
    rotate_ratio = 0.85;
    disc_ratio = 0.85;
  }

  if (h < 700) {
    document.querySelector(".assembly").style.top = "calc(50vh - 140px)";
    document.querySelector(".graph").style.paddingTop = "20px";
    document.querySelector(".footer").style.marginBottom = "0.5rem";
  } else if (h < 840) {
    document.querySelector(".assembly").style.top = "calc(50vh - 180px)";
    document.querySelector(".graph").style.paddingTop = "150px";
  } else if (h < 880) {
    document.querySelector(".assembly").style.top = "calc(50vh - 228px)";
  }

  // console.log();
  document.querySelector(".menu-1").style.height =
    document.querySelector(".menu").clientHeight - 10 + "px";

  document.querySelector(".round-circle").style.width =
    1000 * disc_ratio + "px";
  document.querySelector(".round-circle").style.height =
    900 * disc_ratio + "px";
  document.querySelector(".round-circle").style.left = `calc(50% - ${
    (1000 * disc_ratio) / 2
  }px)`;
  document.querySelector(".round-circle").style.bottom = `-${
    41 * disc_ratio
  }rem`;
}
["load", "resize"].forEach((event) => {
  window.addEventListener(event, init);
});

init();

nodesData.forEach((node, i) => {
  const nodeContainer = document.createElement("div");
  nodeContainer.classList.add("node-container");
  nodeContainer.setAttribute("id", `container-${i}`);
  nodeContainer.style.transform = `rotateY(${node.position}deg) translateZ(${
    rotate_ratio * node.radius
  }px) translateY(${node.translateY ? node.translateY : 0}px)`;

  const nodeElement = document.createElement("div");
  nodeElement.classList.add("node");
  nodeElement.style.width = `${rotate_ratio * node.width}px`;
  nodeElement.style.height = `${rotate_ratio * node.width}px`;
  nodeElement.style.transform = `rotateY(-${node.position}deg)`;

  const nodeIcon = document.createElement("div");
  nodeIcon.classList.add("node-icon");
  nodeIcon.innerHTML = node.icon;

  const nodeText = document.createElement("div");
  nodeText.classList.add("node-text");
  nodeText.textContent = node.text;

  nodeElement.appendChild(nodeIcon);
  nodeElement.appendChild(nodeText);
  nodeContainer.appendChild(nodeElement);
  rotor.appendChild(nodeContainer);
});

document.querySelectorAll('div[id *= "container-"]').forEach((item, index) => {
  nodesData[index].line = {
    x: item.getBoundingClientRect().left,
    y: item.getBoundingClientRect().top,
  };
});

function changeAngle(angle = 0) {
  nodesData.forEach((node, i) => {
    let newAngle = angle + node.position;

    /***
     * update rotaiton
     */

    document.querySelector(
      `#container-${i}`
    ).style.transform = `rotateY(${newAngle}deg) translateZ(${
      rotate_ratio * node.radius
    }px) translateY(${node.translateY ? node.translateY : 0}px)`;
    var x = newAngle % 360;
    if (x > 90 && x < 270) {
      document.querySelector(`#container-${i} .node`).style.filter =
        "blur(2px)";
      document.querySelector(`#container-${i} .node`).style.opacity = "0.9";
      document.querySelector(`#container-${i} .node`).style.cursor = "";
      document
        .querySelector(`#container-${i} .node`)
        .removeAttribute("onclick");
      document.querySelector(`#container-${i} .node-text`).style.opacity = "0";
    } else {
      document.querySelector(`#container-${i} .node`).style.filter = "";
      document.querySelector(`#container-${i} .node`).style.opacity = "1";
      document.querySelector(`#container-${i} .node`).style.cursor = "pointer";
      document
        .querySelector(`#container-${i} .node`)
        .setAttribute("onclick", `displayMenu("#container-${i}")`);
      document.querySelector(`#container-${i} .node-text`).style.opacity = "1";
    }
    document.querySelector(
      `#container-${i} .node`
    ).style.transform = `rotateY(${-newAngle}deg)`;
  });
}
var count = 0;

var x;

function intervalManger(run = true) {
  if (run) {
    x = setInterval(() => {
      count += 1;
      changeAngle(count);
    }, 70);
  } else {
    clearInterval(x);
  }
}

intervalManger();

document.querySelector(".rotor").addEventListener("mouseover", () => {
  intervalManger(false);
});

document.querySelector(".rotor").addEventListener("mouseout", () => {
  intervalManger(true);
});

function displayMenu(nodeContainer) {
  const icon = document.querySelector(
    `${nodeContainer} .node .node-icon`
  ).innerHTML;
  document.querySelector(".item-holder .item").innerHTML = icon;
  document.querySelector(".title").innerText = document.querySelector(
    `${nodeContainer} .node .node-text`
  ).innerText;
  marquee(document.querySelector(".title"));
  if (graph.classList.contains("shown")) {
    UnShownGraph();
  } else if (graph.classList.contains("hidden")) {
    ShowGraph();
  } else {
    graph.classList.add("shown");
  }
}

function ShowGraph() {
  graph.classList.remove("hidden");
  graph.classList.add("shown");
}

function UnShownGraph() {
  graph.classList.remove("shown");
  graph.classList.add("hidden");
}

function ShowSubMenu() {
  sub_menu.classList.add("show");
  document.querySelector(".right-side").style.zIndex = 100;
}

function UnShownSubMenu() {
  sub_menu.classList.remove("show");
  document.querySelector(".right-side").style.zIndex = -5;
}
function DeselectItems() {
  menu_btn.forEach((el) => {
    el.classList.remove("active");
  });
}
function hide_active_menu() {
  active_menu.style.display = "none";
}

menu_btn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if(document.documentElement.clientWidth<767){
      document.querySelector(".title-container .close").style.display = "block";
    }
    if (!sub_menu.classList.contains("show")) {
      ShowSubMenu();
    } else {
      UnShownSubMenu();
      setTimeout(() => {
        ShowSubMenu();
      }, 100);
    }
    DeselectItems();
    el.classList.add("active");
  });
});

categories.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    categories.forEach((el) => {
      if (!el.classList.contains("categories-option")) {
        el.classList.remove("active");
      }
      if (w < 768) {
        el.style.display = "none";
        el.style.zIndex = -1;
      }
    });

    if (!el.classList.contains("categories-option")) {
      el.classList.add("active");
    }
    if (w < 768) {
      document.querySelector(".categories-option").style.zIndex = 1;
      document.querySelector(".categories-option").innerHTML = el.innerHTML;
    }
  });
});

return_btn.addEventListener("click", function () {
  UnShownGraph();
  UnShownSubMenu();
  DeselectItems();
});

close_btn.forEach(element => {
  element.addEventListener("click", function () {
    UnShownSubMenu();
    DeselectItems();
    document.querySelector(".title-container .close").style.display = "none";
  });
});

function marquee(element) {
  if (element.offsetWidth > 150) {
    var marq = document.createElement("MARQUEE");
    marq.innerText = element.innerText;
    element.innerText = "";
    element.appendChild(marq);
  }
}

document
  .querySelector(".categories-option")
  .addEventListener("click", function () {
    document.querySelectorAll(".categories").forEach((item) => {
      item.style.display = "flex";
      item.style.zIndex = 3;
    });
    this.style.zIndex = -1;
  });
