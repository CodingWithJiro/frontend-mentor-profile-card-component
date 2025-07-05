// TOGGLE COLOR THEME COMPONENT SCRIPT
toggleColorTheme();

// DECLARE FUNCTION
function toggleColorTheme() {
    // DECLARE VARIABLE: TOGGLE BUTTON ELEMENT
    const button = document.querySelector(".theme__button");

    // DECLARE VARIABLE: HTML ELEMENT
    const html = document.querySelector("html");

    // DECLARE VARIABLE: SAVED USER THEME FROM LOCAL STORAGE
    const savedTheme = localStorage.getItem("theme");

    // DECLARE VARIABLE: IF THE USER DOES PREFER DARK RETURN TRUE, OTHERWISE RETURNS FALSE
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // DECLARE VARIABLE: THEME ICONS
    const iconLight = document.querySelector(".theme__icon--light"); 
    const iconDark = document.querySelector(".theme__icon--dark");

    // DECLARE VARIABLE: BACKGROUND IMAGES
    const patternTop = document.querySelector(".profile__background--top");
    const patternBottom = document.querySelector(".profile__background--bottom");
    const patternCard = document.querySelector(".card__background");
    
    // SET THEME ON PAGE LOAD
    // CONDITION: IF SAVED THEME IS DARK OR IF SAVED THEME IS NULL BUT USER PREFERS DARK ANYWAYS, ADD DARK CLASS TO HTML ELEMENT AND ACTIVE CLASS TO BUTTON ELEMENT
    if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
        html.classList.add("dark");
        button.classList.add("active");
        iconLight.classList.add("hidden");
        iconDark.classList.remove("hidden");
        patternTop.setAttribute("src", "./assets/img/bg-pattern-top-dark_978x978.svg");
        patternBottom.setAttribute("src", "./assets/img/bg-pattern-bottom-dark_978x978.svg");
        patternCard.setAttribute("src", "./assets/img/bg-pattern-card-dark_350x140.svg");
    }

    // ADD CLICK LISTENER FOR THE BUTTON
    button.addEventListener("click", () =>  {
        // ADD FUNCTION THAT TOGGLES DARK CLASS IN THE HTML ELEMENT
        html.classList.toggle("dark");

        // DECLARE VARIABLE: IF THE USER'S CURRENT PAGE IS DARK RETURN TRUE, OTHERWISE RETURN FALSE
        const isDark = html.classList.contains("dark");

        // CONDITION: IF HTML CONTAINS DARK CLASS, DO THE FOLLOWING
        if (isDark) {
            button.classList.add("active");
            iconLight.classList.add("hidden");
            iconDark.classList.remove("hidden");
            patternTop.setAttribute("src", "./assets/img/bg-pattern-top-dark_978x978.svg");
            patternBottom.setAttribute("src", "./assets/img/bg-pattern-bottom-dark_978x978.svg");
            patternCard.setAttribute("src", "./assets/img/bg-pattern-card-dark_350x140.svg");
        } else {
            button.classList.remove("active");
            iconLight.classList.remove("hidden");
            iconDark.classList.add("hidden");
            patternTop.setAttribute("src", "./assets/img/bg-pattern-top_978x978.svg");
            patternBottom.setAttribute("src", "./assets/img/bg-pattern-bottom_978x978.svg");
            patternCard.setAttribute("src", "./assets/img/bg-pattern-card_350x140.svg");
        }

        // SAVE THE THEME ITEM IN THE LOCAL STORAGE
        // CONDITION: IF USERS PAGE IS DARK, SET THEME ITEM TO "DARK", OTHERWISE SET TO "LIGHT"
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}
