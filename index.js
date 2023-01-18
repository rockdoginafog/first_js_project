const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const submitButton = document.querySelector(".submit");
const ratingState = document.querySelector(".rating-state")
const rates = document.querySelectorAll(".number")
const rating = document.getElementById("rating")
const rateAgain = document.querySelector(".rate-again")
const chooseNumber = document.querySelector(".choose-a-number")


rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })

})

submitButton.addEventListener("click", () => {
    if(rates.innerHTML = rating.innerHTML) {
            thankYouContainer.classList.remove("hidden")
            thankYouContainer.classList.add("animation")
            ratingState.classList.add("hidden")
    } else {
            chooseNumber.classList.remove("hidden")
            chooseNumber.classList.add("animation")
    }
})

/* rates.addEventListener("click", () => {
        chooseNumber.classList.remove("hidden")
}) */

rateAgain.addEventListener("click",() => {
    thankYouContainer.classList.add("hidden")
    ratingState.classList.remove("hidden")
    chooseNumber.classList.add("hidden")

})


/* if(rates.innerHTML = rating.innerHTML) {
    chooseNumber.classList.remove("hidden")
} */
