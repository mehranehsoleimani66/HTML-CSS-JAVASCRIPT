const inputEl = document.getElementById("input");
const infoEl = document.getElementById("info-text");
const meaningContainerEls = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
const fetchData = async (word) => {
  try {
    infoEl.style.display = "block";
    meaningContainerEls.style.display = "none";
    infoEl.innerText = `searchinf for meaning of :${word}`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
        meaningContainerEls.style.display = "block";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    }else{
        infoEl.style.display = "none";
        meaningContainerEls.style.display = "block";
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
    }

   
  } catch (error) {
    infoEl.innerText = 'someThing went wrong...try again later';
  }
};

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchData(e.target.value);
  }
});
