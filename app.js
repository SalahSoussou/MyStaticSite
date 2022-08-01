const icon = document.getElementById("sunImg");

icon.onclick = () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon.src =
      "https://github.com/SalahSoussou/public-images/blob/main/img/sun.png?raw=true";
  } else {
    icon.src =
      "https://github.com/SalahSoussou/public-images/blob/main/img/moon.png?raw=true";
  }
};
