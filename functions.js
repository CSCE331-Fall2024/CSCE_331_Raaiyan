function themeButton() {
    if(localStorage.getItem("theme") === "1") {
        document.getElementById('page_style').setAttribute("href", "style2.css");
        localStorage.setItem("theme", "2");
    }
    else {
        document.getElementById('page_style').setAttribute("href", "style.css");
        localStorage.setItem("theme", "1");
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "2") {
        document.getElementById('page_style').setAttribute("href", "style2.css");
        localStorage.setItem("theme", "2");
    } else {
        document.getElementById('page_style').setAttribute("href", "style.css");
        localStorage.setItem("theme", "1");
    }
}