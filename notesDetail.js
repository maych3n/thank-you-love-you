console.log('Hello from detail page')

// Decode URI to handle notes titles with spaces
// Assumes the URL for this page looks like /albumDetail.html?name={ album_title }
const noteNameFromQueryString = decodeURI(window.location.search.replace('?name=', ''))


function renderNotesDetail(notes) {
  // Set the name of the page to the name of the notes
  document.querySelector('h1').innerText = notes.language
  
  // Create an image element to display the cover image of the notes
  const img = document.createElement('img')
        img.src = notes.imageurl

  // Append it to the bottom of the page
  document.body.appendChild(img)
}

fetch('notes.json')
    .then((response) => response.json())
    .then((json) => {
      const notes = json.notes

      // Find specific notes based on notes name passed in URL query string
      // Use Array.find to return the first element that passes our test function
      const foundNotes = notes.find(function(notes) {
        // Check that the name of the current notes in the array matches the name that we passed to the page in the URL
        return notes.name === noteNameFromQueryString
      })

      if (foundNotes) {
        renderNotesDetail(foundNotes)
      }
      else {
        // console.log('You asked for an notes that doesnt exist')
      }

      console.log('Found? ', foundNotes)
    });