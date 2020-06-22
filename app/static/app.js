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
    let date = moment().format("DD/MM/YYYY")
    let time = moment().format("HH:mm")
    const rowInput = [`${amount.value}ML`, milkType.value, date, time]

    let row = feedTable.insertRow()
    for (let i = 0; i <= rowInput.length - 1; i++) {
        let cell = row.insertCell(i)
        let text = document.createTextNode(rowInput[i])
        cell.appendChild(text)
    }
    amount.value = ""
    milkType.value = "Choose your option"
    e.preventDefault()


})