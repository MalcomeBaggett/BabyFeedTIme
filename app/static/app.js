//code snippet to use materialize select component
$(document).ready(function () {
    $('select').formSelect();
});

// UI Vars
const form = document.querySelector('#baby-form')
const milkType = document.querySelector('#milktype')
const amount = document.querySelector('#amount')
const feedBody = document.querySelector('#feed-body')
const tableData = document.querySelector('#table-data')
const feedTable = document.querySelector('#feed-table')

form.addEventListener('submit', (e) => {
    // if (amount.value === "" || milkType.value === "") {
    //     alert('Please check you inputs.')
    // }
    // get date and time
    console.log(feedTable.rows[0].cells.length)
    const now = Date.now();
    const date = new Date(now).toLocaleDateString();
    const time = new Date(now).toLocaleTimeString();
    const rowInput = [`${amount.value}ML`, milkType.value, date, time]

    const row = feedBody.insertRow()
    for (let i = 0; i < rowInput.length; i++) {
        const cell = row.insertCell(i)
        const text = document.createTextNode(rowInput[i])
        cell.appendChild(text)
    }
    amount.value = ""
    milkType.value = "Choose your option"
    e.preventDefault()
})
