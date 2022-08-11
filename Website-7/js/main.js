function hover() {
  new hoverEffect({
    parent: document.querySelector('.hover__block'),
    intensity: 0.3,
    image1: '../img/page1.jpg',
    image2: '../img/page2.jpg',
    displacementImage: '../img/page3.jpg'
  })

}

hover()