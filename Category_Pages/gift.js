const giftList = document.getElementById('gift-list')

function filterdata(gift, i) {
  if (gift.language === 1){
    
  }
}

function rendergift(gift, i) {
  // Create .gift element
  const giftElement = document.createElement('div')

  giftElement.classList.add('gift')
  giftElement.classList.add(`gift-${i}`)

  console.log(giftElement)
  console.log(gift.imageurl)

  // Create the inner HTML content
  const giftHTML = `
    <a href="notesDetail.html?name=${notes.name}">
      <img src="${notes.envelopeurl}">
    </a>
    <ul>
      <li> ${notes.name}</li>
      <li>Love Language ${notes.language}</li>
 
    </ul>
  `

  // let checkUsers = gift.filter(gift => gift.languages == "Gifts");
  // rendergift(gift)
  // Set the inner HTML content of the giftElement
  giftElement.innerHTML = giftHTML

  // Add to the list #gift-list
  giftList.appendChild(giftElement)
}

    
fetch('gifts.json')
    .then((response) => response.json())
    .then((json) => {
      json.gift.forEach(function(gift, i) {
        // if (gift.year_released < 2000) {
          rendergift(gift, i)
        // }
      })
    });

