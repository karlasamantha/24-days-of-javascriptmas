const countDownDisplay = document.getElementById('countdown-display')
const countDownHoursDisplay = document.querySelector('#countdown-hours')


function renderCountdown() {
  const xmasDate = Date.parse('December 25, 2021 00:00:00')
  const today = new Date()  
  
  const timeDiff = xmasDate - today
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  const hours = Math.floor(timeDiff / (1000 * 60 * 60))
  const mins = Math.floor(timeDiff / (1000 * 60))
  const secs = Math.floor(timeDiff / 1000)

  countDownDisplay.innerHTML = days
  countDownHoursDisplay.innerHTML = `${hours - days * 24}:${mins - hours * 60}:${secs - mins * 60}`

  // Task:
  // - Get today's date (you only need the day)
  // - Calculate remaining days
  // - Display remaining days in countdownDisplay
}

setInterval(() => {
  renderCountdown()  
}, 1000)


// Stretch goals
// - Display hours, minutes and seconds
// Add a countdown for another festival, your birthday etc