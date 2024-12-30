document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name && email && phone) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all required fields.');
    }
});

