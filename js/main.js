import './clock.js';
import { cars } from './cars.js'

const out = document.querySelector('.car__out-info');
const driverBtn = document.querySelector('.btn-2');
const avtoInfoBtn = document.querySelector('.btn-1');
const calculateBtn = document.querySelector('.btn-3');

const modalDriver = document.getElementById('drivers');
const verify = document.querySelector('.verify-btn');
const closeBtn = document.querySelector('.close-btn');
const addDriver = document.querySelector('.add-btn');
const driverInput = document.querySelector('.driver-input')
const driverOut = document.querySelector('.driver-out')

const modalCalc = document.getElementById('calc');
const calcBtn = document.querySelector('.calc-btn');
const closeCalcBtn = document.querySelector('.close-calc-btn');
const calcInput = document.querySelector('.calc-input');
const calcOut = document.querySelector('.calc-out');


avtoInfoBtn.addEventListener('click', () => {
    out.innerHTML = out.innerHTML.trim() === '' ? cars.getInfo() : ''
})

driverBtn.addEventListener('click', () => {
    modalDriver.classList.remove('none')
})

closeBtn.addEventListener('click', () => {
    modalDriver.classList.add('none')
})

verify.addEventListener('click', () => {
    const driver = driverInput.value
    if(!driver) driverOut.textContent = 'Потрібно ввести ім`я';
    else if (cars.verifyDriver(driver)) {
        driverOut.textContent = 'Водій є в списку';
    } else{
        driverOut.textContent = 'Водія немає в списку';
    }
})

addDriver.addEventListener('click', () => {
    const driver = driverInput.value
    if(!driver) driverOut.textContent = 'Потрібно ввести ім`я';
    else {
        cars.addDriver(driver)
        driverInput.value = ''
    } 
})

calculateBtn.addEventListener('click', () => {
    modalCalc.classList.remove('none')
})

closeCalcBtn.addEventListener('click', () => {
    calcOut.innerHTML = ''
    calcInput.value = ''
    modalCalc.classList.add('none')
})

calcBtn.addEventListener('click', () => {
    const distance = calcInput.value
    const {fuel, totalTime} = cars.calculate(distance)
    if(distance <= 0) calcOut.textContent = 'Введіть коректну відстань';
    else {
        calcOut.innerHTML = `<p>Час в дорозі складе ${totalTime} годин</p>
                             <p>Витрати пального складуть ${fuel} літрів</p> `
    }
})