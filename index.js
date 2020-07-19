document.getElementById("tar").onclick = () => {
  let interest = document.getElementById("showRate");
  let rate = document.getElementById("rate");
  rate.style.color = "green";
  interest.textContent = "10%";
  interest.style.color = "green";
  document.getElementById("tar").style.color = "green";
  document.getElementById("piggy").style.color = "#000000";
  document.getElementById("safe").style.color = "#000000";
  document.getElementById("flexN").style.color = "#000000";
  document.getElementById("flexD").style.color = "#000000";
};

document.getElementById("safe").onclick = () => {
  let interest = document.getElementById("showRate");
  let rate = document.getElementById("rate");
  rate.style.color = "#30A8F5";
  interest.textContent = "6% - 15.5%";
  interest.style.color = "#30A8F5";
  document.getElementById("tar").style.color = "#000000";
  document.getElementById("piggy").style.color = "#000000";
  document.getElementById("safe").style.color = "#30A8F5";
  document.getElementById("flexN").style.color = "#000000";
  document.getElementById("flexD").style.color = "#000000";
};

document.getElementById("piggy").onclick = () => {
  let interest = document.getElementById("showRate");
  let rate = document.getElementById("rate");
  interest.textContent = "10% - 15%";
  rate.style.color = "#062863";
  interest.style.color = "#062863";
  document.getElementById("tar").style.color = "#000000";
  document.getElementById("piggy").style.color = "#062863";
  document.getElementById("safe").style.color = "#000000";
  document.getElementById("flexN").style.color = "#000000";
  document.getElementById("flexD").style.color = "#000000";
};

document.getElementById("flexN").onclick = () => {
  let interest = document.getElementById("showRate");
  let rate = document.getElementById("rate");
  interest.textContent = "10% - 15%";
  interest.style.color = "#e94ea5";
  rate.style.color = "#e94ea5";
  document.getElementById("tar").style.color = "#000000";
  document.getElementById("piggy").style.color = "#000000";
  document.getElementById("safe").style.color = "#000000";
  document.getElementById("flexN").style.color = "#e94ea5";
  document.getElementById("flexD").style.color = "#000000";
};

document.getElementById("flexD").onclick = () => {
  let interest = document.getElementById("showRate");
  let rate = document.getElementById("rate");
  interest.textContent = "6%";
  interest.style.color = "Grey";
  rate.style.color = "grey";
  document.getElementById("tar").style.color = "#000000";
  document.getElementById("piggy").style.color = "#000000";
  document.getElementById("safe").style.color = "#000000";
  document.getElementById("flexN").style.color = "#000000";
  document.getElementById("flexD").style.color = "grey";
};

let obj = {
  Yearly: 1,
  Monthly: 12,
  Weekly: 56,
  Daily: 365,
};

document.getElementById("submitPiggy").onclick = (e) => {
  e.preventDefault();
  let x = document.getElementById("periodPiggy");
  let y = document.getElementById("intervalPiggy");
  let valX = x.options[x.selectedIndex].text;
  let valY = y.options[y.selectedIndex].text;
  let amount = parseInt(document.getElementById("amountPiggy").value);

  let interest = amount * Math.pow(1 + 0.1 / obj[valY], obj[valY] * obj[valX]);
  document.getElementById("balance").textContent = "₦ " + parseInt(interest);
};

document.getElementById("submitSafe").onclick = (e) => {
  e.preventDefault();
  let x = document.getElementById("periodSafe");
  let y = document.getElementById("intervalSafe");
  let valX = x.options[x.selectedIndex].text;
  let valY = y.options[y.selectedIndex].text;
  let amount = parseInt(document.getElementById("amountSafe").value);

  let interest = amount * Math.pow(1 + 0.06 / obj[valY], obj[valY] * obj[valX]);
  document.getElementById("balance").textContent = "₦ " + parseInt(interest);
};

document.getElementById("submitTar").onclick = (e) => {
  e.preventDefault();
  let x = document.getElementById("periodTar");
  let y = document.getElementById("intervalTar");
  let valX = x.options[x.selectedIndex].text;
  let valY = y.options[y.selectedIndex].text;
  let amount = parseInt(document.getElementById("amountTar").value);

  let interest = amount * Math.pow(1 + 0.1 / obj[valY], obj[valY] * obj[valX]);
  document.getElementById("balance").textContent = "₦ " + parseInt(interest);
};

document.getElementById("submitFlexN").onclick = (e) => {
  e.preventDefault();
  let x = document.getElementById("periodFlexN");
  let y = document.getElementById("intervalFlexN");
  let valX = x.options[x.selectedIndex].text;
  let valY = y.options[y.selectedIndex].text;
  let amount = parseInt(document.getElementById("amountFlexN").value);

  let interest = amount * Math.pow(1 + 0.1 / obj[valY], obj[valY] * obj[valX]);
  document.getElementById("balance").textContent = "₦ " + parseInt(interest);
};

document.getElementById("submitFlexD").onclick = (e) => {
  e.preventDefault();
  let x = document.getElementById("periodFlexD");
  let y = document.getElementById("intervalFlexD");
  let valX = x.options[x.selectedIndex].text;
  let valY = y.options[y.selectedIndex].text;
  let amount = parseInt(document.getElementById("amountFlexD").value);

  let interest = amount * Math.pow(1 + 0.1 / obj[valY], obj[valY] * obj[valX]);
  document.getElementById("balance").textContent = "₦ " + parseInt(interest);
};
