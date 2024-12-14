// Initialize EmailJS
(function() {
    emailjs.init("qJJ2eJClDp5B5SzPU"); // Your public key
})();

// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading alert
    Swal.fire({
        title: 'Sending message...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_t4qq9vp', 'template_i5elc88', {
        from_name: name,
        from_email: email,
        mobile_number: mobile,
        message: message
    })
    .then(function(response) {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            confirmButtonColor: '#3085d6'
        });
        document.getElementById('contactForm').reset();
    }, function(error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send message. Please try again.',
            confirmButtonColor: '#d33'
        });
    });
});