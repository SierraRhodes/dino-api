import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import DinoService from './dino-service';

function getDino(words, paragraphs) {
  let request = new XMLHttpRequest();
  const url = `https://dinoipsum.com/api/?format=json&type=words&paragraphs=${paragraphs}&words=${words}`;

  request.addEventListener("readystatechange", function() {
    console.log(this.readyState);

  });

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    console.log(response);
    if(this.status === 200) {
      const words = response;
      const paragraphs = response;
      printElements(response, words, paragraphs);
    } else {
      printError(this, response, words, paragraphs);
    }
  });
  
  request.open("GET", url, true);
  request.send();
}

//UI Logic

function printError(request, apiResponse, words, paragraphs) {
  document.querySelector("#show-response").innerText = `There was an error processing your request ${words}, ${paragraphs}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function printElements(apiResponse) {
document.querySelector("#show-response").innerText =  JSON.stringify(apiResponse);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const words = document.querySelector("#words").value;
  const paragraphs = document.querySelector("#paragraphs").value;
  getDino(words, paragraphs);
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});