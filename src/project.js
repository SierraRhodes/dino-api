export default class DinoService {
  static getDino(words,paragraphs) {
    let request = new XMLHttpRequest();
    const url = `https://dinoipsum.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
    request.addEventListener("loadend", function() {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve([response, words, paragraphs]);
      } else {
        reject([this, response, words, paragraphs]);
      }
      request.open("GET", url, true);
      request.send();
  });
 }
}