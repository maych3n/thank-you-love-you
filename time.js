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

    // Sample JSON data
const notesData = [
  { language: "Quality Time", category: "A" },
  // { name: "Item 2", category: "B" },
  // { name: "Item 3", category: "A" },
  // { name: "Item 4", category: "C" },
  // { name: "Item 5", category: "B" }
];

// Function to filter JSON data by category
function filterByCategory(data, category) {
  return data.filter(item => item.category === category);
}

// Usage example
const category = "A";
const filteredData = filterByCategory(jsonData, category);
console.log(filteredData);

    // console.log(json)
    // json.forEach(row => {
    //   if(row.language="Quality Time"){notes.push(row)} 
    
    
      
    // });

    



//     fetch('time.json')
//   .then(response => response.json())
//   .then((data) => {
//     // let parentElement = document.getElementById('background')

//     for(let i = 0; i < data.length; i++) {
//     //  Only show data with a grade of A and cuisine_description containing "pizza"
//     if(data[i].language == "Time") {
// //       let newDiv = document.createElement ('div')
// //         newDiv.innerHTML =` 
// //           <h4>${data[i].grade}</h4>
// //           <p>${data[i].boro}</p>
// //          <p>${data[i].street}</p>
// //           <p>${data[i].zipcode}</p>
// //          <p>${data[i].dba}</p>
// // <p>${data[i].cuisine_description}</p>
// //           `
// //   //  parentElement.append(newDiv)
//    }
//   }
// });