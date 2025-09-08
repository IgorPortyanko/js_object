
export const cars = {
    brand: 'MAN',
    model: 'TGL 12.190 4x2 BL',
    release: 2025,
    tank_capacity: 150,
    average_consumption: 22,
    drivers: ['Санич', 'Колян', 'Ігор Вікторович'],
    foto: './img/man.jpg',

    getInfo() {
        let info = `
            <p>Виробник ${this.brand}</p>
            <p>Модель ${this.model}</p>
            <p>Рік виробництва ${this.release}р</p>
            <p>Паливний бак ${this.tank_capacity}л</p>
            <p>Витрати палива ${this.average_consumption}л на 100км</p>
        `
        return info
    },

    verifyDriver(driver) {
        return this.drivers.includes(driver)
    },

    addDriver(driver) {
        this.drivers.push(driver)
    },

    calculate(distance) {
        const fuel = distance / 100 * this.average_consumption;
        const time = distance / 80;
        const breaks = Math.floor(time / 4);
        const totalTime = time + breaks;
        return {
            fuel: fuel.toFixed(2),
            totalTime: totalTime.toFixed(2)
        }
    }
}