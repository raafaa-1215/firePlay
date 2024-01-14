
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var inquiryType = document.getElementById('inquiry-type').value;
        var message = document.getElementById('message').value;

        var isValid = true;

        if (name.trim() === '') {
            isValid = false;
            alert('Please enter your name.');
        }

        if (email.trim() === '') {
            isValid = false;
            alert('Please enter your email.');
        } else if (!isValidEmail(email)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        if (inquiryType.trim() === '') {
            isValid = false;
            alert('Please select an inquiry type.');
        }

        if (message.trim() === '') {
            isValid = false;
            alert('Please enter your message.');
        } else {
            alert('Pedido de contacto enviado com sucesso');
            window.location.href = "index.html";
        }
        
        return isValid;
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
