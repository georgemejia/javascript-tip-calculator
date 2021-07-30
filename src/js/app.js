const billInput = document.querySelector('#input1')
const numberOfPeopleInput = document.querySelector('#input2')
const tipPercent = document.querySelector('select')
const tipElement = document.querySelector('#tip')
const totalElement = document.querySelector('#total')
const reset = document.querySelector('#reset')

tipPercent.addEventListener('change', (event) => {
  const billValue = billInput.value
  const tipValue = event.target.value

  if (billValue) {
    const bill = parseFloat(billValue)
    const percent = parseInt(tipValue)

    const tip = bill * (percent / 100)
    const total = bill + tip

    tipElement.innerHTML = `$${tip.toFixed(2)}`
    totalElement.innerHTML = `$${total.toFixed(2)}`
  }
})

billInput.addEventListener('keyup', (event) => {
  // get value from inputs
  const billValue = event.target.value
  const tipValue = tipPercent.value
  
  if (billValue) {
    // turn bill value into an integer
    const bill = parseFloat(billValue)
    // turn tip value into an integer
    const percent = parseInt(tipValue)
    // divide percent variable by 100 to get a decimal
    // multiply the bill by the decimal number to get the tip
    const tip = bill * (percent / 100)
    // add the tip to the bill to get the total
    const total = bill + tip
    tipElement.innerHTML = `$${tip.toFixed(2)}`
    totalElement.innerHTML = `$${total.toFixed(2)}`
  } else {
    tipElement.innerHTML = '$0.00'
    totalElement.innerHTML = '$0.00'
  }
})

numberOfPeopleInput.addEventListener('keyup', (event) => {
  const value = event.target.value
  const billValue = billInput.value

  if (billValue && value) {
    console.log(value)
    const numberOfPeople = parseInt(value)
    const bill = parseFloat(billInput.value)
    const percent = parseInt(tipPercent.value)

    const tip = bill * (percent / 100)
    const total = bill + tip

    const splitTip = tip / numberOfPeople
    const splitTotal = total / numberOfPeople

    tipElement.innerHTML = `$${splitTip.toFixed(2)}`
    totalElement.innerHTML = `$${splitTotal.toFixed(2)}`
  } else {
    tipElement.innerHTML = '$0.00'
    totalElement.innerHTML = '$0.00'
  }
})

reset.addEventListener('click', () => {
  billInput.value = null
  numberOfPeopleInput.value = null
  tipPercent.value = 10
})