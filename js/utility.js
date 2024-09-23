function getValue(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInnerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function classes(id) {
  return document.getElementById(id).classList;
}


function modal(id) {
  if (id <= 0 || isNaN(id)) {
    document.getElementById(
      "modalContainer"
    ).innerHTML = `<p>Insufficient Balance</p>
     <div class="modal-action  mx-auto">
        <form method="dialog" class="mx-auto">
          <button class="btn">Close conformation</button>
        </form>
      </div>`;
  } else {
    document.getElementById(
      "my_modal_1"
    ).innerHTML = `<div id="modalContainer" class="modal-box text-center">
        <h1 class="text-3xl font-bold">Congrates!</h3>
        <img src="asset/coin.png" alt="" class="mx-auto pt-5">
        <p class="py-4">You Have Donate for Humankund</p>
        <h3 class="text-xl font-bold">Successfully</h3>
        <div class="modal-action  mx-auto">
        <form method="dialog" class="mx-auto">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close conformation</button>
        </form>
      </div>
    </div>`;
  }
}


// Blog Btns function

document.getElementById("blogbtn").addEventListener('click', function(){
  window.location.href = 'blog.html';
})

// toggleButton.addEventListener("click", () => {
//   if (toggleButton.textContent === "Blog") {
//     toggleButton.textContent = "Home";
//     window.location.href = 'home.html';
//   } else {
//     toggleButton.textContent = "Blog";
//   }
// });



// Click History btn
document.getElementById("historybtn").addEventListener("click", function () {
  classes("mainBody").add("hidden");
  classes("header").remove("hidden");
  classes("historybtn").add("bg-primaryColor");
  classes("historybtn").remove("btn-outline");
  classes("donationBtn").remove("bg-primaryColor");
  classes("donationBtn").add("btn-outline");
});

// Click donation btn
document.getElementById("donationBtn").addEventListener("click", function () {
  classes("mainBody").remove("hidden");
  classes("header").add("hidden");
  classes("historybtn").remove("bg-primaryColor");
  classes("historybtn").add("btn-outline");
  classes("donationBtn").add("bg-primaryColor");
  classes("donationBtn").remove("btn-outline");
});

// divOne
document.getElementById("donateBtnOne").addEventListener("click", function () {
  const amountoneValue = getInnerText("amountOne");
  const inputOneValue = getValue("inputOne");
  if (inputOneValue > 0 && !isNaN(inputOneValue)) {
    document.getElementById("amountOne").innerText =
      amountoneValue + inputOneValue;
    const topCornerBtn = getInnerText("mainBalance");
    document.getElementById("mainBalance").innerText =
      topCornerBtn - inputOneValue;
  }

  modal(inputOneValue);
  document.getElementById("inputOne").value = "";
});

// divTwo
document.getElementById("donateBtnTwo").addEventListener("click", function () {
  const amounttwoValue = getInnerText("amountTwo");
  const inputTwoValue = getValue("inputTwo");
  if (inputTwoValue > 0 && !isNaN(inputTwoValue)) {
    document.getElementById("amountTwo").innerText =
      amounttwoValue + inputTwoValue;
    const topCornerBtn = getInnerText("mainBalance");
    document.getElementById("mainBalance").innerText =
      topCornerBtn - inputTwoValue;
  }

  modal(inputTwoValue);
  document.getElementById("inputTwo").value = "";
});

//div Three
document
  .getElementById("donateBtnThree")
  .addEventListener("click", function () {
    const amounthreeValue = getInnerText("amountThree");
    const inputthreeValue = getValue("inputThree");
    if (inputthreeValue > 0 && !isNaN(inputthreeValue)) {
      document.getElementById("amountThree").innerText =
        amounthreeValue + inputthreeValue;
      const topCornerBtn = getInnerText("mainBalance");
      document.getElementById("mainBalance").innerText =
        topCornerBtn - inputthreeValue;
    }

    modal(inputthreeValue);
    document.getElementById("inputThree").value = "";
  });



