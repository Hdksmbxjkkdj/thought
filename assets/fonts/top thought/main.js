const menu_btn = document.querySelectorAll(".menu-btn");
const categories = document.querySelectorAll(".categories");
const sub_menu = document.getElementsByClassName("sub-menu")[0];
const return_btn = document.getElementsByClassName("return")[0];
const graph = document.getElementsByClassName("graph")[0];

menu_btn.forEach((el,i,arr) =>{
    el.addEventListener("click",(e)=>{
        e.preventDefault()
        sub_menu.classList.add("show")
        menu_btn.forEach(el=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
    })
})

categories.forEach((el,i,arr)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();
        categories.forEach(el=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
    })
})

return_btn.addEventListener("click",function() {
    if(graph.classList.contains("hidden")) {
        graph.classList.remove("hidden")
    }
    else {
        graph.classList.add("hidden");
    }
})