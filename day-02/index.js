const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

function toggleTheme() {
  christmasBtn.addEventListener('click', function() {
    if (this.checked) {
      body.classList.remove('snow')
      body.classList.add('christmas')
      greeting.innerText = '🎅 Merry Christmas!'
    }
  })

  snowBtn.addEventListener('click', function() {
    if (this.checked) {
      body.classList.remove('christmas')
      body.classList.add('snow')
      greeting.innerText = '☃️ Merry Christmas!'
    }
  })
}

toggleTheme()

// Stretch goals:
// - Add more themes!
// - Allow the user to customize the themes.
// - Turn the radio buttons into a toggle switch.