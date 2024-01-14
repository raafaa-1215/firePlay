$(document).ready(function() {
    checkDisplay();

    function checkDisplay() {
        var checkLogin = localStorage.getItem('username');

        console.log(checkLogin);
        
        if (!(checkLogin === null || checkLogin === undefined)) {
            var conta = document.getElementById('conta');
            var login = document.getElementById('login');

            conta.style.display = 'block';
            login.style.display = 'none';
        }
    }

    var logout = document.getElementById('logout');
    
    logout.addEventListener('click', function (event) {
        var result = window.confirm("Do you want to logout?");

        if (result) {
            localStorage.clear();
        } else {
            event.preventDefault();
        }
    });
});

