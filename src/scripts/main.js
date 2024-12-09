const buttonSwitchTheme = document.getElementById("switch-theme-button");
const body              = document.getElementsByTagName("body")[0];
const main              = document.getElementsByTagName("main")[0];


function handleSwithcTheme(){
    body.classList.toggle("light-theme");
    main.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");  
    main.classList.toggle("dark-theme");
}

buttonSwitchTheme.addEventListener("click", handleSwithcTheme);