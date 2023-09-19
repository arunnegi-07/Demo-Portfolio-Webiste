document.addEventListener("DOMContentLoaded",(e) => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme-icon"]');

    const lightLogos = {
        theme: "./assets/theme_light.png",
    }

    const darkLogos = {
        theme: "./assets/theme_dark.png",
    }

    function setTheme(isDark){
        themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
    }

    toggleThemeButton.addEventListener('click',() => {
        const isDark = document.documentElement.classList.toggle('dark-theme');

        localStorage.setItem("isDark",isDark);

        setTheme(isDark);
    })
    
    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";
        console.log(isDark);

        document.documentElement.classList.toggle('dark-theme',isDark);
       
        setTheme(isDark);
    };
    
    loadTheme();
});