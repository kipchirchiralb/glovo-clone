const languageBtn = document.querySelector("#language-btn");
const languagesList = document.querySelector("#languages-list");

languageBtn.addEventListener("click", () => {
  languageBtn.classList.toggle("active");
  console.log("btn clickd");

  if (languageBtn.classList.contains("active")) {
    languagesList.style.display = "block";
  } else {
    languagesList.style.display = "none";
  }
});

// API
const languages = document.querySelectorAll(".language");

languages.forEach((langBtn) => {
  langBtn.addEventListener("click", (event) => {
    const selectedLanguage = event.target.getAttribute("id");
    console.log(selectedLanguage);
    // changing language using google API
    languagesList.style.display = "none";
    languageBtn.classList.remove("active");
  });
});
