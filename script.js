const plusPeople = document.querySelector('.plusPeople');
const sumPeople = document.querySelector('.sumPeople');
const minusPeople = document.querySelector('.minusPeople');

// People Response Tab

let count = 1;
plusPeople.addEventListener('click', ()=>{
    count ++ ;
    sumPeople.innerHTML = count;
})
minusPeople.addEventListener('click', ()=>{
    if (count > 1){
        count -- ;
    }
    sumPeople.innerHTML = count;
})

// Calculate Summary Display Tab

const calculator = document.querySelector('.calculator');
calculator.addEventListener('click',()=>{
    document.querySelector('.summary_area').style.display="block";

// Billing Display Tab

const totalBill = Number(document.querySelector('.totalBill').value);
const totalTip = Number(document.querySelector('.totalTip').value);
let total = (totalBill * totalTip)/100;
let finalPeople = sumPeople.innerHTML;

document.querySelector('.perPersonBill').innerHTML = totalBill;
document.querySelector('.tipAmount').innerHTML = total;

// Tex Calculation Tab

const texAmount = document.querySelector('.texAmount').innerHTML = (totalBill * 5)/100;

// Final Bill Per Person Tab

document.querySelector('.totalPerPerson').innerHTML = ((totalBill + total + texAmount)/finalPeople).toFixed(2);

})