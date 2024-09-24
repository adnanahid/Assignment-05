// common function
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
  if (id < getInnerText("mainBalance") && id > 0 && !isNaN(id) && typeof id !== "number") {
    document.getElementById(
      "my_modal_1"
    ).innerHTML = `<div id="modalContainer" class="modal-box text-center">
            <h1 class="text-3xl font-bold">Congrats!</h1>
            <img src="asset/coin.png" alt="" class="mx-auto pt-5">
            <p class="py-4">You have donated to Humankund</p>
            <h3 class="text-xl font-bold">Successfully</h3>
            <div class="modal-action mx-auto">
              <form method="dialog" class="mx-auto">
                <button class="btn bg-primaryColor">Close confirmation</button>
              </form>
            </div>
          </div>`;
  } else {
    alert("Invalid Amount to Donate");
  }
}

// Blog Btns function
document.getElementById("blogbtn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

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
  if (
    inputOneValue > 0 &&
    !isNaN(inputOneValue) &&
    getInnerText("mainBalance") > getValue("inputOne") && 
    typeof inputOneValue !== "number" 
  ) {
    document.getElementById("amountOne").innerText =
      amountoneValue + inputOneValue;
    const total_balance = getInnerText("mainBalance");
    document.getElementById("mainBalance").innerText =
      total_balance - inputOneValue;
    document.getElementById("my_modal_1").showModal();
    // historyList functions in divOne
    const historyList = document.createElement("div");
    const divOneTitle = document.getElementById("divOneTitle").innerText;
    historyList.innerHTML = `<div class="border-2 border-gray-300 rounded-lg">
          <div class="p-5 space-y-3">
            <p class="text-gray-700 text-xl lg:text-3xl font-bold">${inputOneValue} Taka is Donated for ${divOneTitle}</p>
            <p class="text-gray-700 text-sm lg:text-xl font-medium"> Date: ${new Date().toString()}</p>
          </div>
        </div>
        `;
    document.getElementById("historyContainer").appendChild(historyList);
  }

  modal(inputOneValue);
  document.getElementById("inputOne").value = "";
});

// divTwo
document.getElementById("donateBtnTwo").addEventListener("click", function () {
  const amounttwoValue = getInnerText("amountTwo");
  const inputTwoValue = getValue("inputTwo");
  if (
    inputTwoValue > 0 &&
    !isNaN(inputTwoValue) &&
    getInnerText("mainBalance") > getValue("inputTwo")&& 
    typeof inputTwoValue !== "number"
  ) {
    document.getElementById("amountTwo").innerText =
      amounttwoValue + inputTwoValue;
    const total_balance = getInnerText("mainBalance");
    document.getElementById("mainBalance").innerText =
      total_balance - inputTwoValue;
    document.getElementById("my_modal_1").showModal();
    // historyList functions in divTwo
    const historyList = document.createElement("div");
    const divTwoTitle = document.getElementById("divTwoTitle").innerText;
    historyList.innerHTML = `<div class="border-2 border-gray-300 rounded-lg">
            <div class="p-5 space-y-3">
              <p class="text-gray-700 text-xl lg:text-3xl font-bold">${inputTwoValue} Taka is Donated for ${divTwoTitle}</p>
              <p class="text-gray-700 text-sm lg:text-xl font-medium"> Date: ${new Date().toString()}</p>
            </div>
          </div>
          `;
    document.getElementById("historyContainer").appendChild(historyList);
  }

  modal(inputTwoValue);
  document.getElementById("inputTwo").value = "";
});

//div Three
document
  .getElementById("donateBtnThree")
  .addEventListener("click", function () {
    const amounthreeValue = getInnerText("amountThree");
    const inputThreeValue = getValue("inputThree");
    if (
      inputThreeValue > 0 &&
      !isNaN(inputThreeValue) &&
      getInnerText("mainBalance") > getValue("inputThree") && 
      typeof inputThreeValue !== "number"
    ) {
      document.getElementById("amountThree").innerText =
        amounthreeValue + inputThreeValue;
      const total_balance = getInnerText("mainBalance");
      document.getElementById("mainBalance").innerText =
        total_balance - inputThreeValue;
      document.getElementById("my_modal_1").showModal();

      // historyList functions in divThree
      const historyList = document.createElement("div");
      const divThreeTitle = document.getElementById("divThreeTitle").innerText;
      historyList.innerHTML = `<div class="border-2 border-gray-300 rounded-lg">
              <div class="p-5 space-y-3">
                <p class="text-gray-700 text-xl lg:text-3xl font-bold">${inputThreeValue} Taka is Donated for ${divThreeTitle}</p>
                <p class="text-gray-700 text-sm lg:text-xl font-medium"> Date: ${new Date().toString()}</p>
              </div>
            </div>
            `;
      document.getElementById("historyContainer").appendChild(historyList);
    }

    modal(inputThreeValue);
    document.getElementById("inputThree").value = "";
  });
