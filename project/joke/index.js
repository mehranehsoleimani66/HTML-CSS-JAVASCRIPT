

const btn1 = document.getElementById("btn");
const joke1 = document.getElementById("joke");

const apiKey = "iGCnftl39th6joeZ5P8NPQ==8VGyoKdNXT3qZhI4";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  }
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

  joke1.innerText = "updating...";
  btn1.innerText = "loading...";
  btn1.disabled = true;
  const response = await fetch(apiURL, options);
  try{
    const data = await response.json();
    btn1.disabled = false;
    btn1.innerText = "tell me joke";
    joke1.innerHTML = data[0].joke;
  }
  catch{
console.log(error,'error')
  }
 
}

btn1.addEventListener("click", getJoke);
