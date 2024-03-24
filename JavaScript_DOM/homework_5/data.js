
const url = 'https://api.quotable.io/random';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const quote = data.content;
    const author = data.author;

    
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.textContent = "${quote}";
    authorElement.textContent = - ${author};
  })
  .catch(error => console.error('Error fetching data:', error));
