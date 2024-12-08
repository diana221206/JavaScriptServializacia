//Создала объект car
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Blue",
    type: "Sedan",
    display: function() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, Color: ${this.color}, Type: ${this.type}`);
    }
};

// Вывела оригинальный объект
console.log("Original Car Object:");
car.display();

// Сериализовала объект
const serializedCar = JSON.stringify(car);

// Вывела сериализованый объект
console.log("\nSerialized Car Object:");
console.log(serializedCar);

// Десерелиазовала объект
const deserializedCar = JSON.parse(serializedCar);

// Добавила к нему функцию вывода
deserializedCar.display = car.display;

// Получила десериализованный объект
console.log("\nDeserialized Car Object:");
deserializedCar.display();
