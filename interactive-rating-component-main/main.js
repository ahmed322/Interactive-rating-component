let button = document.querySelector(".submit");
let face = document.querySelector(".face");
let rating = document.querySelector(".rate");
let ratingNum = document.querySelectorAll(".rate span");
let userRate = "";

//add active class to selected number
ratingNum.forEach((ele) => {
  ele.addEventListener("click", function () {
    ratingNum.forEach((e) => {
      e.classList.remove("active");
    });

    this.classList.add("active");
    userRate = this.innerHTML;
  });
});

//change to back face after rating the app
let image = document.querySelector(".image");
let textDiv = document.querySelector(".text");
let header = document.querySelector("h3");
let paragraph = document.querySelector("p");
// let paragraphText = document.createTextNode();

//create main function that change user input
button.onclick = function () {
  if (userRate === "") {
    button.style.cssText =
      " background: #f03963; color:white; transform: translate(-52%);";
    setTimeout(() => {
      button.style.cssText = "background: #f07539; color: white;";
    }, 150);
  } else {
    //remove button and rating values
    button.style.display = "none";
    rating.style.display = "none";

    // image change and style
    image.src = "images/illustration-thank-you.svg";
    image.style.cssText = `background: transparent;padding:0; border-radius:0;`;

    //creat section  (sammery of rating )
    let summary = image.nextElementSibling;
    summary.classList.add("summary");
    summary.style.display = "block";

    //add the user rate to sammary
    let span = summary.firstElementChild;
    span.innerHTML = userRate;
    //center all elements
    face.style.textAlign = "center";
    //change text
    header.innerHTML = `Thank you!`;
    paragraph.innerHTML = `  We appreciate you taking the time to give a rating. If you ever need more support,
  don’t hesitate to get in touch!
  `;
  }
};
