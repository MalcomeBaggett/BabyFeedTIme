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
    if (amount.value === "" || milkType.value === "") {
        showError('Please check input!')
    } else {
        console.log(feedTable.rows[0].cells.length)
        const date = moment().format("DD/MM/YYYY")
        const time = moment().format("HH:mm")
        const rowInput = [`${amount.value}ML`, milkType.value, date, time]

        let row = feedBody.insertRow()
        for (let i = 0; i <= rowInput.length - 1; i++) {
            let cell = row.insertCell(i)
            let text = document.createTextNode(rowInput[i])
            cell.appendChild(text)
        }
        amount.value = ""
        milkType.value = "Choose your option"

    }
    e.preventDefault()
})

function showError(error) {
    const errDiv = document.createElement('div')
    errDiv.className = 'center'
    errDiv.id = 'err'
    const cardContent = document.querySelector('.card-content')
    const cardTitle = document.querySelector('.card-title')

    errDiv.appendChild(document.createTextNode(error))
    cardContent.insertBefore(errDiv, cardTitle)

    setTimeout(clearErr, 3000)
}

function clearErr() {
    document.getElementById('err').remove()
}