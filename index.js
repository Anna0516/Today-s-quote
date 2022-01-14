let myName = prompt('Välkommen! Vad heter du?')
document.querySelector('#greeting').textContent = 'Hej ' + myName + '! Här är dagens citat, bara för dig.'


fetch('https://picsum.photos/v2/list')
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      for (let n = 0; n < Math.min(result.length, 2); n++) {

        const myImageDiv = document.querySelector('#image')
        const img = document.createElement('img')

        img.setAttribute('src', 'https://picsum.photos/id/' + (Math.floor(Math.random() * 1000) + 1) + '/350')


        myImageDiv.appendChild(img)
      }
    })

fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      const quoteText = JSON.stringify(result.content + ' ' + result.author)
      const myQuoteDiv = document.querySelector('#quote');
      const myQuote = document.createElement('p');
      myQuote.innerText = quoteText;
      myQuoteDiv.append(myQuote)
    })
