let currentAssets = []

let animals = [
  {
    name: 'Bear',
    location: './assets/animals/bear.png'
  },
  {
    name: 'Cat',
    location: './assets/animals/cat.png'
  }
]

function loadAssets (gameType) {
  currentAssets = gameType
}

function startGame (gameType) {
  loadAssets(gameType)
  document.querySelector('.game').innerHTML = 'test'
}

function resetGame () {
  document.querySelector('.game').innerHTML = ''
}
