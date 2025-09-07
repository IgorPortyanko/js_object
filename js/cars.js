
export const cars = {
    brand: 'MAN',
    model: 'TGL 12.190 4x2 BL',
    release: 2025,
    tank_capacity: 150,
    average_consumption: 22,
    drivers: ['Санич', 'Колян', 'Ігор Вікторович'],
    foto: './img/man.jpg',

    getInfo(block) {
        let info = `
            <p>Виробник ${this.brand}</p>
            <p>Модель ${this.model}</p>
            <p>Рік виробництва ${this.release}р</p>
            <p>Паливний бак ${this.tank_capacity}л</p>
            <p>Витрати палива ${this.average_consumption}л на 100км</p>
        `
        block.insertAdjacentHTML('beforeend', info)
    }
}