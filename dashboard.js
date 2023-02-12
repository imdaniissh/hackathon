const foodForm = document.querySelector('#food-form');
      const foodTable = document.querySelector('#food-table');

      foodForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const foodItem = document.querySelector('#food-item').value;
        const servingSize = document.querySelector('#serving-size').value;
        const calories = document.querySelector('#calories').value;
        const protein = document.querySelector('#protein').value;
        const carbohydrates = document.querySelector('#carbohydrates').value;
        const fat = document.querySelector('#fat').value;

        const row = foodTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
const cell5 = row.insertCell(4);
const cell6 = row.insertCell(5);
cell1.innerHTML = foodItem;
cell2.innerHTML = servingSize;
cell3.innerHTML = calories;
cell4.innerHTML = protein;
cell5.innerHTML = carbohydrates;
cell6.innerHTML = fat;

foodForm.reset();
});

//  physical activity//
const exerciseForm = document.querySelector('#exercise-form');
const exerciseTable = document.querySelector('#exercise-table');

exerciseForm.addEventListener('submit', function(event) {
event.preventDefault();
const type = document.querySelector('#type').value;
const duration = document.querySelector('#duration').value;
const intensity = document.querySelector('#intensity').value;

const row = exerciseTable.insertRow();
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);

cell1.innerHTML = type;
cell2.innerHTML = duration;
cell3.innerHTML = intensity;

exerciseForm.reset();
});
















