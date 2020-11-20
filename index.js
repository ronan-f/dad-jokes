async function getDadJoke() {
  return await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data.joke);
}

async function appendDadJoke() {
  const joke = await getDadJoke();

  const jokeContainer = document.getElementById("#dad-joke");
  jokeContainer.innerText = joke;
}
