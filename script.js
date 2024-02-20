document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;

    // Retrieve selected radio button value for gender
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';

    // Retrieve selected options for food choice
    const foodChoice = [];
    const foodOptions = document.getElementById('foodChoice').selectedOptions;
    for (let i = 0; i < foodOptions.length; i++) {
        foodChoice.push(foodOptions[i].value);
    }

    const country = document.getElementById('country').value;

    // Append data to the table
    appendRow('First Name', firstName);
    appendRow('Last Name', lastName);
    appendRow('Address', address);
    appendRow('Pincode', pincode);
    appendRow('Gender', gender);
    appendRow('Food Choice', foodChoice.join(', ')); // Join multiple food choices with comma
    appendRow('Country', country);

    // Reset form after submission
    this.reset();
});

function appendRow(fieldName, fieldValue) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${fieldName}</td>
        <td>${fieldValue}</td>
    `;
    document.querySelector('#dataTable tbody').appendChild(newRow);
}
