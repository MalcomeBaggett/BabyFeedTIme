//code snippet to use materialize select component
$(document).ready(function () {
    $('select').formSelect();
});

// UI Vars
const form = document.querySelector('#baby-form')
const milkType = document.querySelector('#milktype')
const amount = document.querySelector('#amount')
const feedList = document.querySelector('.collection')

form.addEventListener('submit', (e) => {
    if (amount.value === "" || milkType.value === "") {
        alert('Please check you inputs.')
    }
    // create li to append to ul
    const li = document.createElement('li')
    // add materialize .collection item class
    li.className = "collection-item"
    // creat textNode and append
    li.appendChild(document.createTextNode(`Amount: ${amount.value} || Milk Type: ${milkType.value}`))
    // append to ul
    feedList.appendChild(li)
    e.preventDefault()

})