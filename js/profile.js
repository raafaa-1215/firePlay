function editProfile() {
    var saveChanges = document.getElementById('saveChangesBtn');
    var editProfile = document.getElementById('editProfileBtn');
    var dontSaveChanges = document.getElementById('dontSaveChangesBtn');
    var changePass = document.getElementById('changePassBtn');

    saveChanges.style.display = 'block';
    dontSaveChanges.style.display = 'block';
    editProfile.style.display = 'none';
    changePass.style.display = 'none';

    var usernameInput = document.getElementById('username_input');
    var birthdayInput = document.getElementById('birthday_input');
    var genderInput = document.getElementById('gender_input');
    var favoriteGameInput = document.getElementById('favorite_game_input');
    var favoriteCategoryInput = document.getElementById('favorite_category_input');

    usernameInput.style.display = 'block';
    usernameInput.type = 'text';
    birthdayInput.style.display = 'block';
    birthdayInput.type = 'date';
    genderInput.style.display = 'block';
    genderInput.type = 'text';
    favoriteGameInput.style.display = 'block';
    favoriteGameInput.type = 'text';
    favoriteCategoryInput.style.display = 'block';
    favoriteCategoryInput.type = 'text';

    var usernameH4 = document.getElementById('username');
    var birthdayH4 = document.getElementById('birthday');
    var genderH4 = document.getElementById('gender');
    var favoriteGameH4 = document.getElementById('favorite_game');
    var favoriteCategoryH4 = document.getElementById('favorite_category');

    usernameH4.style.display = 'none';
    birthdayH4.style.display = 'none';
    genderH4.style.display = 'none';
    favoriteGameH4.style.display = 'none';
    favoriteCategoryH4.style.display = 'none';
}

function saveChanges(index) {
    switch (index) {
        case 1:
            var username = document.getElementById('username_input').value;
            document.getElementById('username').textContent = username;

            var birthday = document.getElementById('birthday_input').value;
            document.getElementById('birthday').textContent = birthday;

            var gender = document.getElementById('gender_input').value;
            document.getElementById('gender').textContent = gender;

            var favorite_game = document.getElementById('favorite_game_input').value;
            document.getElementById('favorite_game').textContent = favorite_game;

            var favorite_category = document.getElementById('favorite_category_input').value;
            document.getElementById('favorite_category').textContent = favorite_category;

        default:
            var saveChanges = document.getElementById('saveChangesBtn');
            var editProfile = document.getElementById('editProfileBtn');
            var dontSaveChanges = document.getElementById('dontSaveChangesBtn');
            var changePass = document.getElementById('changePassBtn');

            saveChanges.style.display = 'none';
            dontSaveChanges.style.display = 'none';
            editProfile.style.display = 'block';
            changePass.style.display = 'block';

            var usernameInput = document.getElementById('username_input');
            var birthdayInput = document.getElementById('birthday_input');
            var genderInput = document.getElementById('gender_input');
            var favoriteGameInput = document.getElementById('favorite_game_input');
            var favoriteCategoryInput = document.getElementById('favorite_category_input');

            usernameInput.style.display = 'none';
            birthdayInput.style.display = 'none';
            genderInput.style.display = 'none';
            favoriteGameInput.style.display = 'none';
            favoriteCategoryInput.style.display = 'none';

            var usernameH4 = document.getElementById('username');
            var birthdayH4 = document.getElementById('birthday');
            var genderH4 = document.getElementById('gender');
            var favoriteGameH4 = document.getElementById('favorite_game');
            var favoriteCategoryH4 = document.getElementById('favorite_category');

            usernameH4.style.display = 'block';
            birthdayH4.style.display = 'block';
            genderH4.style.display = 'block';
            favoriteGameH4.style.display = 'block';
            favoriteCategoryH4.style.display = 'block';
        break;
    } 
}