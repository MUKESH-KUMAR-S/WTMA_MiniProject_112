function submitForm(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get the form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Validation
    if (!/^[A-Za-z]{4,}$/.test(firstName)) {
        alert("First name should be at least 4 characters long.");
        return;
    }
    if (!/^[A-Za-z]+$/.test(lastName)) {
        alert("Last name should contain only alphabets.");
        return;
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        alert("Please enter a valid email.");
        return;
    }
    if (!/^\d{2}$/.test(age)) {
        alert("Age should be a 2-digit number.");
        return;
    }
    if (!gender) {
        alert("Please select a gender.");
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number should be 10 digits.");
        return;
    }
    if (!address) {
        alert("Address cannot be empty.");
        return;
    }

    // If validation is successful, redirect to another page and pass data
    const userDetails = {
        firstName,
        lastName,
        email,
        dob,
        age,
        gender: gender.value,
        phone,
        address
    };

    // Store data in localStorage (this will be used to display data on another page)
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to display.html
    window.location.href = 'display.html';
}
