const menu_btn = document.querySelectorAll(".menu-btn");
const categories = document.querySelectorAll(".categories");
const sub_menu = document.getElementsByClassName("sub-menu")[0];
const return_btn = document.getElementsByClassName("return")[0];
const graph = document.getElementsByClassName("graph")[0];
const sub_menu_container = document.querySelector(".sub-menu-container");
const close_btn = document.querySelector(".btn-close");
const active_menu = document.querySelector(".active-menu");
const nodesData = [
  {
    relations: [1],
    width: 84,
    radius: 400,
    icon: '<img width="46px" src="./assets/images/media-movie-multimedia-video-svgrepo-com 1.svg" />',
    text: "تولیدات رسانه تولیدات رسانه تولیدات رسانه تولیدات رسانه",
    position: 0,
    translateY: 0,
  },
  {
    relations: [],
    width: 74,
    radius: 390,
    icon: '<img width="46px" src="./assets/images/language-svgrepo-com 1.svg" />',
    text: "زبان‌های خارجی",
    position: 20,
    translateY: -50,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="32px" src="./assets/images/pen-swirl-svgrepo-com 1.svg" />',
    text: "محتوای متنی",
    position: 30,
    translateY: 30,
  },
  {
    relations: [],
    width: 57,
    radius: 410,
    icon: '<img width="36px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور استان‌ها",
    position: 15,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="46px" src="./assets/images/collections-svgrepo-com 1.svg" />',
    text: "پیش تولید",
    position: 50,
    translateY: 0,
  },
  {
    relations: [],
    width: 80,
    radius: 410,
    icon: '<img width="46px" src="./assets/images/palette-svgrepo-com 1.svg" />',
    text: "مدیریت هنر و تبلیغ نوین",
    position: 70,
    translateY: 50,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="32px" src="./assets/images/share-svgrepo-com 1.svg" />',
    text: "عملیات رسانه‌ای",
    position: 80,
    translateY: -40,
  },
  {
    relations: [],
    width: 57,
    radius: 390,
    icon: '<img width="36px" src="./assets/images/city-svgrepo-com 1.svg" />',
    text: "امور اجرایی",
    position: 90,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="46px" src="./assets/images/gregorian-chants-svgrepo-com 1.svg" />',
    text: "ادیان و مذاهب",
    position: 110,
    translateY: 0,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="32px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "تولیدات رسانه",
    position: 125,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 390,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "زبان‌های خارجی",
    position: 130,
    translateY: -50,
  },
  {
    relations: [],
    width: 57,
    radius: 400,
    icon: '<img width="36px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "محتوای متنی",
    position: 146,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 390,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور استان‌ها",
    position: 150,
    translateY: -36,
  },
  {
    relations: [],
    width: 84,
    radius: 400,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "پیش تولید",
    position: 170,
    translateY: 0,
  },
  {
    relations: [],
    width: 74,
    radius: 390,
    icon: '<img width="36px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "مدیریت هنر و تبلیغ نوین",
    position: 190,
    translateY: -50,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="32px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "عملیات رسانه‌ای",
    position: 200,
    translateY: 30,
  },
  {
    relations: [],
    width: 57,
    radius: 410,
    icon: '<img width="36px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور اجرایی",
    position: 185,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 410,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "ادیان و مذاهب",
    position: 220,
    translateY: 50,
  },
  {
    relations: [],
    width: 74,
    radius: 400,
    icon: '<img width="36px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "تولیدات رسانه",
    position: 230,
    translateY: -40,
  },
  {
    relations: [],
    width: 57,
    radius: 390,
    icon: '<img width="36px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "زبان‌های خارجی",
    position: 240,
    translateY: 50,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "محتوای متنی",
    position: 260,
    translateY: 0,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور استان‌ها",
    position: 280,
    translateY: 0,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "پیش تولید",
    position: 295,
    translateY: 50,
  },
  {
    relations: [],
    width: 53,
    radius: 390,
    icon: '<img width="36px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "مدیریت هنر و تبلیغ نوین",
    position: 300,
    translateY: -50,
  },
  {
    relations: [],
    width: 80,
    radius: 400,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "عملیات رسانه‌ای",
    position: 316,
    translateY: 50,
  },
  {
    relations: [],
    width: 57,
    radius: 390,
    icon: '<img width="36px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "امور اجرایی",
    position: 320,
    translateY: -36,
  },
  {
    relations: [],
    width: 80,
    radius: 410,
    icon: '<img width="46px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "ادیان و مذاهب",
    position: 330,
    translateY: 50,
  },
  {
    relations: [],
    width: 53,
    radius: 400,
    icon: '<img width="32px" src="./assets/images/iran-svgrepo-com (1) 1.svg" />',
    text: "تولیدات رسانه",
    position: 345,
    translateY: -50,
  },
  // { width: 80, radius: 390, icon: '<img src="./assets/images/iran-svgrepo-com (1) 1.svg" />', text: 'Node 8', position: 90, translateY: 50 },
];

const rotor = document.getElementById("rotor");

nodesData.forEach((node, i) => {
  const nodeContainer = document.createElement("div");
  nodeContainer.classList.add("node-container");
  nodeContainer.setAttribute("id", `container-${i}`);
  nodeContainer.style.transform = `rotateY(${node.position}deg) translateZ(${
    node.radius
  }px) translateY(${node.translateY ? node.translateY : 0}px)`;

  // nodeContainer.addEventListener('mouseover', function () {
  //     status = false;
  // })
  // nodeContainer.addEventListener('mouseout', function () {
  //     status = true;
  //     interval()
  // })
  const nodeElement = document.createElement("div");
  nodeElement.classList.add("node");
  nodeElement.style.width = `${node.width}px`;
  nodeElement.style.height = `${node.width}px`;
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

// nodesData.forEach((item, index) => {
//     item.relations.forEach((pos) => {
//         let x2 = nodesData[pos].line.x
//         let y2 = nodesData[pos].line.y

//         console.log("f", y2 - item.line.y + "px");

//         var newSvg = `<svg>
//         <line x1="${item.line.x}" y1="${item.line.y}" x2="${x2}" y2="${y2}" stroke="blue" stroke-width="2"></line>
//         </svg>`

//         document.querySelector('.rotor').innerHTML += newSvg

//     })
// })

function changeAngle(angle = 0) {
  nodesData.forEach((node, i) => {
    let newAngle = angle + node.position;

    /***
     * update rotaiton
     */

    document.querySelector(
      `#container-${i}`
    ).style.transform = `rotateY(${newAngle}deg) translateZ(${
      node.radius
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
  marquee(document.querySelector(".title"))
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
}

function UnShownSubMenu() {
  sub_menu.classList.remove("show");
}
function DeselectItems() {
  menu_btn.forEach((el) => {
    el.classList.remove("active");
  });
}
function hide_active_menu() {
  active_menu.style.display="none";
}

menu_btn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    active_menu.style.display = "block"
    active_menu.style.top = e.target.offsetTop+"px"
    if (!sub_menu.classList.contains("show")) {
      ShowSubMenu();
    } else {
      UnShownSubMenu();
      setTimeout(() => {
        ShowSubMenu();
      }, 100);
    }
    DeselectItems()
    el.classList.add("active");
  });
});

categories.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    categories.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
  });
});

return_btn.addEventListener("click", function () {
  UnShownGraph();
  UnShownSubMenu();
  DeselectItems();
  hide_active_menu();
});

close_btn.addEventListener("click", function () {
  UnShownSubMenu();
  DeselectItems();
  hide_active_menu();
});

function marquee(element) {
  if(element.offsetWidth>150) {
   var marq = document.createElement("MARQUEE")
   marq.innerText = element.innerText;
   element.innerText = "";
   element.appendChild(marq);
  }
}