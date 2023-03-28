const notesList = document.getElementById('notes-list')

function filterdata(notes, i) {
  if (notes.language === "Gifts"){
    
  }
}

function renderNotes(notes, i) {
  // Create .notes element
  const notesElement = document.createElement('div')

  notesElement.classList.add('notes')
  notesElement.classList.add(`notes-${i}`)

  console.log(notesElement)
  console.log(notes.imageurl)

  // Create the inner HTML content
  const notesHTML = `
    <a href="notesDetail.html?name=${notes.name}">
      <img src="${notes.envelopeurl}">
    </a>
    <ul>
      <li> ${notes.name}</li>
      <li>Love Language ${notes.language}</li>
 
    </ul>
  `

  // Set the inner HTML content of the notesElement
  notesElement.innerHTML = notesHTML

  // Add to the list #notes-list
  notesList.appendChild(notesElement)
}


// notes.forEach(function(notes) {
//   if (notes.language = "Gifts") {
//     renderNotes(notes)
//   }
// })

fetch('notes.json')
    .then((response) => response.json())
    .then((json) => {
      json.notes.forEach(function(notes, i) {
        // if (notes.year_released < 2000) {
          renderNotes(notes, i)
        // }
      })
    });