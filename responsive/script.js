
const changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");
    let Cards = document.querySelectorAll("#cards-theme");
    //console.log(Cards.length)
    for(let i=0; i < Cards.length; i++) {
        Cards[i].classList.toggle("dark-card")
    }
});



