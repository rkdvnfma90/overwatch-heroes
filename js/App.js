function App({ $container, $logo }) {
  this.$container = $container
  this.$logo = $logo
  this.heroesCount = 32
  this.initArray = Array(this.heroesCount).fill(0)

  this.render = () => {
    const $heroes = document.createElement('div')
    const $logoImage = document.createElement('img')

    $heroes.className = 'heroes'
    $logoImage.src = './images/logo_overwatch.png'
    $logoImage.alt = 'Overwatch Logo'

    this.$container.appendChild($heroes)
    this.$logo.appendChild($logoImage)
    this.$container.appendChild($logo)

    this.initArray.forEach((_, index) => {
      const $hero = document.createElement('div')
      const $image = document.createElement('div')

      $hero.className = 'hero'
      $image.className = 'image'

      $image.style.backgroundImage = `url("./images/hero${index + 1}.png")`

      $heroes.appendChild($hero)
      $hero.appendChild($image)
    })
  }

  this.render()
}

export default App
