import './clock.js';
import { cars } from './cars.js'

const out = document.querySelector('.car__out-info');
const driverBtn = document.querySelector('.btn-2');
const avtoInfoBtn = document.querySelector('.btn-1');
const calculateBtn = document.querySelector('.btn-3');

avtoInfoBtn.addEventListener('click', () => {
    cars.getInfo(out)
})