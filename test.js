fetch("https://api.lecto.ai/v1/translate/text", {
  method: "POST",
  headers: {
    "X-API-Key": "7MRG5VM-MQ74HEE-KT5PAX4-D3KP2K2",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    texts: ["Just try it mate.", "What are you waiting for?"],
    to: ["pt-BR", "de"],
    from: "en",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data.translations[0].translated))
  .catch((error) => console.error("Error:", error));
