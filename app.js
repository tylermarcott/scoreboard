let home = 0
let away = 0

let buttonClickHome = ''
let buttonClickAway = ''

function clickHome1() {
  console.log('clicked home')
  buttonClickHome++
  buttonClickHome += home
  removePlaceholderHome()
  updateHomeDom()
}

function clickAway1() {
  console.log('clicked away')
  buttonClickAway++
  buttonClickAway += away
  updateAwayDom()
  removePlaceholderAway()
}

function clickHome3() {
  console.log('clicked home')
  buttonClickHome += 3
  buttonClickHome += home
  updateHomeDom()
  removePlaceholderHome()
}

function clickAway3() {
  console.log('clicked away')
  buttonClickAway += 3
  buttonClickAway += away
  updateAwayDom()
  removePlaceholderAway()
}

function removePlaceholderHome() {
  if (buttonClickHome != 0) {
    let zeroElem = document.getElementById('home-zero')
    zeroElem.classList.add('d-none')
  }
}

function removePlaceholderAway() {
  if (buttonClickAway != 0) {
    let zeroElem = document.getElementById('away-zero')
    zeroElem.classList.add('d-none')
  }
}

function updateHomeDom() {
  let elem = document.getElementById('home-score')
  elem.innerText = buttonClickHome
}

function updateAwayDom() {
  let elem = document.getElementById('away-score')
  elem.innerText = buttonClickAway
}


function resetDom() {
  buttonClickHome = 0
  buttonClickAway = 0
  updateHomeDom()
  updateAwayDom()
}


// TODO: implement this in code
function winReset() {
  if (home == 15) {
    window.alert('Home Team wins!')
  }
  else if (away == 15) {
    window.alert('Away Team wins... BOOOOOOOOO!!!!!!!!!!!!!')
  }
}

