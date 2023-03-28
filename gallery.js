const notesList = document.getElementById('notes-list')

function filterdata(notes, i) {
  if (notes.language === 1){
    
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
 
    </ul>
  `

  // let checkUsers = notes.filter(notes => notes.languages == "Gifts");
  // renderNotes(notes)
  // Set the inner HTML content of the notesElement
  notesElement.innerHTML = notesHTML

  // Add to the list #notes-list
  notesList.appendChild(notesElement)
}

    
fetch('notes.json')
    .then((response) => response.json())
    .then((json) => {
      json.notes.forEach(function(notes, i) {
        // if (notes.year_released < 2000) {
          renderNotes(notes, i)
        // }
      })
    });

var newP;
let h,w,nh,nw,s; 

function newPosition(){   
  h = window.innerHeight - 50;
  w = window.innerWidth - 50;
  nh = Math.floor(Math.random() * h);
  nw = Math.floor(Math.random() * w);
  s = Math.floor(Math.random()*1000) + 500
  return [nh,nw,s];       
}

imgs.forEach(function imgs(myclass) {
  var newP = newPosition();
    });


// notes.forEach(function(notes) {
//   if (notes.language == "Gifts") {
    // renderNotes(notes)
//   }
// })

// var imgs = document.querySelectorAll(".notes notes");
// get window width and height
// var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;

// // // i stands for "index". you could also call this banana or haircut. it's a variable
// // for ( var i=0; i < imgs.length; i++ ) {
  
// //     // shortcut! the current div in the list
// //     var thisImg = imgs[i];
    
//     // get random numbers for each element
//     randomTop = getRandomNumber(0, winHeight);
//     randomLeft = getRandomNumber(0, winWidth);
    
//     // update top and left position
//     thisImg.style.top = randomTop +"px";
//     thisImg.style.left = randomLeft +"px";
    
// // }

// // function that returns a random number between a min and max
// function getRandomNumber(min, max) {
    
//   return Math.random() * (max - min) + min;