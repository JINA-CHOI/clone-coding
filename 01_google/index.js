const settingBtn = document.querySelector(".settingBtn");
const settingMenu = document.querySelector(".setting-menu");
const className = "settingShowing";

function clickSetting(){
    settingMenu.classList.toggle(className);
}

settingBtn.addEventListener("click",clickSetting);
