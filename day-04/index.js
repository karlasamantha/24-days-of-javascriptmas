const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.
function createItem(item) {
  const div = document.createElement('div')
  div.classList.add('checklist-item')  

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.name = item
  checkbox.id = item
  checkbox.innerText = item

  const label = document.createElement('label')
  label.setAttribute('for', checkbox.id)
  label.innerHTML = item

  div.appendChild(checkbox)
  div.appendChild(label)
 
  return div
}

function shoppingList() {
  for (let i = 0; i < items.length; i++) {
    const item = createItem(items[i])
    checklist.appendChild(item)
  }
}

shoppingList()
// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

