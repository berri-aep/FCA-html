const navs = document.querySelectorAll(".faq__navi");
const details = document.querySelectorAll(".faq__category");

navs.forEach((nav)=>{
    nav.addEventListener("click",()=>{
        removeActiveTab();
        nav.classList.add("active");
        const activeContent = document.querySelector(`#${nav.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    });
});

function removeActiveTab(){
    navs.forEach((nav)=>{
        nav.classList.remove("active");
    });
}

function removeActiveContent(){
    details.forEach((detail)=>{
        detail.classList.remove("active");
    })
}