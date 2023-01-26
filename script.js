const amount = document.getElementById('totalAmount')
const noOfPeople = document.getElementById('noOfPeople')
const tip = Array.from(document.getElementsByName('tip'))
const generateBill = document.getElementById('generateBill')
const rstBtn = document.getElementById('rstBtn')
const tipAmntPerPerson = document.getElementById('tipAmntPerPerson')
const totalAmntPerPerson = document.getElementById('totalAmntPerPerson')
const errMsg = document.getElementById('errMsg')
let finalTip;  // to store the tip percentage
let tipPerPerson; // to store the tip amount applicable to per person
let tipAmount; // to store the value of tip which converted from percentage to number
let amountPerPerson; // to store the total amount per person after adding the splitted tip



//<=======code to generate bill starts=======>
generateBill.addEventListener('click', (e) => {
    e.preventDefault();
    for (let e of tip) {
        if (e.checked === true) {
            finalTip = e.value;
        }
    }
    if ((amount.value && noOfPeople.value) && finalTip) {
        console.log('inside calculation part')
        tipAmount = (finalTip / 100) * amount.value;
        tipPerPerson = (Number(tipAmount) / Number(noOfPeople.value)).toFixed(2);
        amountPerPerson = ((Number(tipAmount) + Number(amount.value)) / Number(noOfPeople.value)).toFixed(2);
        tipAmntPerPerson.innerText = '₹ ' + tipPerPerson;
        totalAmntPerPerson.innerText = '₹ ' + amountPerPerson;
        if (rstBtn.style.display === 'none') {
            rstBtn.style.display = 'inline'
        } else if ((amount.value && noOfPeople.value) && finalTip) {
            rstBtn.style.display = 'inline'
        } else {
            rstBtn.style.display = 'none'
        }
        errMsg.style.display = 'none'
    } else {
        errMsg.style.display = 'block'
    }
})
//<=======code to generate bill ends=======>



// <======= code to reset calculation form starts=======>
const resetFields = () => {
    amount.value = '';
    noOfPeople.value = '';
    document.querySelector('input[name="tip"]:checked').checked = false
    finalTip = '';
    console.log(finalTip)

    tipAmntPerPerson.innerText = '₹ 0.00';
    totalAmntPerPerson.innerText = '₹ 0.00';
    rstBtn.style.display = 'none';

}
// <======= code to reset calculation form ends=======>