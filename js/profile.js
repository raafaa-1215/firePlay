document.addEventListener('DOMContentLoaded', function () {
    var usernameCheck = localStorage.getItem('username');

    if(usernameCheck === null || usernameCheck === undefined) {
        document.getElementById('notLogedIn').style.display = 'flex';
        document.getElementById('content').style.display = 'none';
    } else {
        document.getElementById('username').textContent = usernameCheck;
        document.getElementById('birthday').textContent = localStorage.getItem('birthday');
        document.getElementById('gender').textContent = localStorage.getItem('gender');
        document.getElementById('favorite_game').textContent = localStorage.getItem('favoriteGame');
        document.getElementById('favorite-category').textContent = localStorage.getItem('birfavoriteCategory');
    }
    
});

function changePassword() {
    var pass1 = prompt("Please enter your new password: ");

    if (isValidPassword(pass1.trim())) {
        var pass2 = prompt("Confirm your new password: ");

        if (pass1 === pass2) {
            var oldPass = prompt("To confirm the operation, enter your old password: ");

            if (oldPass !== localStorage.getItem('password')) {
                alert("Old password is incorrect. Try again.");
            } else {
                localStorage.setItem('password', pass1);
                alert("Password changed successfuly!!");
            }
        } else {
            alert("Passwords do not match. Try again.");
        }
    } else {
        alert('Please enter a valid password.\nIt bust be between 6 to 15 characters and " or \' are allowed.');
    }
}

function isValidPassword(password) {
    var passRegex = /^[^"']*.{6,15}[^"']*$/;
    return passRegex.test(password);
}

function editProfile() {
    document.getElementById('saveChangesBtn').style.display = 'block';
    document.getElementById('dontSaveChangesBtn').style.display = 'block';
    document.getElementById('editProfileBtn').style.display = 'none';
    document.getElementById('changePassBtn').style.display = 'none';

    document.getElementById('username_input').style.display = 'block';
    document.getElementById('birthday_input').style.display = 'block';
    document.getElementById('gender_input').style.display = 'block';
    document.getElementById('favorite_game_input').style.display = 'block';
    document.getElementById('favorite_category_input').style.display = 'block';

    document.getElementById('username').style.display = 'none';
    document.getElementById('birthday').style.display = 'none';
    document.getElementById('gender').style.display = 'none';
    document.getElementById('favorite_game').style.display = 'none';
    document.getElementById('favorite_category').style.display = 'none';
}

function saveChanges(index) {
    switch (index) {
        case 1:
            var username = document.getElementById('username_input').value;
            var birthday = document.getElementById('birthday_input').value;
            var gender = document.getElementById('gender_input').value;
            var favorite_game = document.getElementById('favorite_game_input').value;
            var favorite_category = document.getElementById('favorite_category_input').value;

            if (username.trim() === '') {
                alert('Please enter your username.');
            } else if (!isValidUsername(username)) {
                alert('Please enter a valid username.\nNo offensive words are allowed.\nMust be at least 4 characters long.');
            } else {
                if (favorite_game !== '' && !isValidGame(favorite_game)) {
                        alert('Please enter a valid game.');
                } else {
                    var result = prompt("Please enter your password to save your changes.");
                    if (result !== localStorage.getItem('password')) {
                        alert("Password is incorrect!!");
                    } else {
                        setSavedData(username, birthday, gender, favorite_game, favorite_category);
                    }
                }        
            }

        default:
            document.getElementById('saveChangesBtn').style.display = 'none';
            document.getElementById('dontSaveChangesBtn').style.display = 'none';
            document.getElementById('editProfileBtn').style.display = 'block';
            document.getElementById('changePassBtn').style.display = 'block';

            document.getElementById('username_input').style.display = 'none';
            document.getElementById('birthday_input').style.display = 'none';
            document.getElementById('gender_input').style.display = 'none';
            document.getElementById('favorite_game_input').style.display = 'none';
            document.getElementById('favorite_category_input').style.display = 'none';

            document.getElementById('username').style.display = 'block';
            document.getElementById('birthday').style.display = 'block';
            document.getElementById('gender').style.display = 'block';
            document.getElementById('favorite_game').style.display = 'block';
            document.getElementById('favorite_category').style.display = 'block';
        break;
    } 
}

function isValidUsername(username) {
    var usernameRegex = /^\b(?!nigger|nigga|retarded\b)[a-zA-Z0-9_-]{4,20}\b$/;
    return usernameRegex.test(username);
}

function isValidGame(favorite_game) {
    var gameRegex = /^\b(?!nigger|nigga|retarded\b)[a-zA-Z0-9_-]\b$/;
    return gameRegex.test(favorite_game);
}

function setSavedData(username, birthday, gender, favoriteGame, favoriteCategory) {
    localStorage.setItem("username", username);
    document.getElementById('username').textContent = username;

    if (birthday !== '') {
        localStorage.setItem("birthday", birthday);
        document.getElementById('birthday').textContent = birthday;
    } else if (gender !== '') {
        localStorage.setItem("gender", gender);
        document.getElementById('gender').textContent = gender;
    } else if (favoriteGame !== '') {
        localStorage.setItem("favoriteGame", favoriteGame);
        document.getElementById('favorite_game').textContent = favoriteGame;    
    } else if (favoriteCategory !== '') {
        localStorage.setItem("favoriteCategory", favoriteCategory);
        document.getElementById('favorite_category').textContent = favoriteCategory;
    }
}