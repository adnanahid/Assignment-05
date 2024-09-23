function getValue(id){
  return parseFloat(document.getElementById(id).value);
}
function getInnerText(id){
  return parseFloat(document.getElementById(id).innerText);
}

// divOne
document.getElementById("donateBtnOne").addEventListener("click", function () {
  const amountoneValue = getInnerText('amountOne');
  const inputOneValue = getValue("inputOne");
  document.getElementById("amountOne").innerText = amountoneValue + inputOneValue;
  const topCornerBtn = getInnerText("mainBalance");
  document.getElementById("mainBalance").innerText = topCornerBtn - inputOneValue;
  console.log(topCornerBtn);
});

// divTwo
document.getElementById("donateBtnTwo").addEventListener("click", function () {
  const amounttwoValue = getInnerText('amountTwo');
  const inputTwoValue = getValue("inputTwo");
    document.getElementById("amountTwo").innerText = amounttwoValue + inputTwoValue;
    const topCornerBtn = getInnerText("mainBalance");
    document.getElementById("mainBalance").innerText = topCornerBtn - inputTwoValue;
    console.log(topCornerBtn);
});

//div Three
document.getElementById("donateBtnThree").addEventListener("click", function () {
  const amounthreeValue = getInnerText('amountThree');
  const inputthreeValue = getValue("inputThree");
    document.getElementById("amountThree").innerText = amounthreeValue + inputthreeValue;
    const topCornerBtn = getInnerText("mainBalance");
    document.getElementById("mainBalance").innerText = topCornerBtn - inputthreeValue;
    console.log(topCornerBtn);
  });
