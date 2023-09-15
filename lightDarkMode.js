document.addEventListener("DOMContentLoaded",(e) => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme-icon"]');
    const githubLogo = document.querySelector('img[alt="github-icon"]');
    const linkedinLogo = document.querySelector('img[alt="linkedin-icon"]');

    const lightLogos = {
        github: "assets/github_light.png",
        linkedin: "assets/linkedin_light.png",
        theme: "assets/theme_light.png",
    }

    const darkLogos = {
        github: "assets/github_dark.png",
        linkedin: "assets/linkedin_dark.png",
        theme: "assets/theme_dark.png",
    }

    function setTheme(isDark){
        githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
        linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
        themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
    }

    toggleThemeButton.addEventListener('click',() => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem("isDark",isDark);

        setTheme(isDark);
    })
    
    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";

        document.body.classList.toggle('dark-theme',isDark);
       
        setTheme(isDark);
    };
    
    loadTheme();
});