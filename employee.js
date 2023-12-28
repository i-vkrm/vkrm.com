document.getElementById('showCodeButton').addEventListener('click', function () {
    var employeeCodeInput = document.getElementById('employee-CodeInput').value;
    var employee = document.querySelector('.employee[data-employee-code="' + employeeCodeInput + '"]');
    if (employee) {
        employee.style.display = 'block';
    } else {
        alert('Employee code not found.');
    }
});

// Replace this variable with your Instagram profile URL
const InstagramProfileUrl = 'https://www.instagram.com/i.vkrm/';

// Get the acnhor tag by its ID
const instagramLink = document.getElementById('instagramLink');

// Update the href attribute with the Instagram profile URL
instagramLink.href = InstagramProfileUrl;

let displayValue = '';
const name = prompt("for Entertainment Purpose only don't take serious:");

