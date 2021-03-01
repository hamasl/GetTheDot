const INFO_ELEMENT = document.querySelector("#info")

const INFO_PARAGRAPH = document.createElement("p")

INFO_PARAGRAPH.innerText = `Move with: WASD (recommended) or the arrow keys\n Press c to change color\nSelect difficulty with the buttons.`

/**
 * Adds the info paragrapf as child of the info element, when the mouse hovers over it 
 */
INFO_ELEMENT.addEventListener('mouseover', function () {
  INFO_ELEMENT.appendChild(INFO_PARAGRAPH)
})

/**
 * Removes the info paragrapf as child from the info element, when the mouse goes from it 
 */
INFO_ELEMENT.addEventListener('mouseout', function () {
  INFO_ELEMENT.removeChild(INFO_PARAGRAPH)
})