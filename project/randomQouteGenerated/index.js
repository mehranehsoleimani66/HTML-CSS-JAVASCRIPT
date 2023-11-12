const btnEl = document.getElementById("btn");
const qouteEl = document.getElementById("qoute");
const authorEl = document.getElementById("author");
const url = "https://api.quotable.io/random";
async function getQoute() {
  try {
    btnEl.innerText = "loading ...";
    btnEl.disabled = true;
    qouteEl.innerText = "updating...";
    authorEl.innerText = "updating...";
    const result = await fetch(url);
    const data = await result.json();
    btnEl.innerText = "Get A Qoute";
    btnEl.disabled = false;
    const qoute = data.content;
    const qouteAuthor = data.author;

    qouteEl.innerText = qoute;
    authorEl.innerText = qouteAuthor;
  } catch (error) {
    console.log(error);
    qouteEl.innerText = "an error happend try again later";
    authorEl.innerText = "an error happend";
  }
}

btnEl.addEventListener("click", getQoute);
