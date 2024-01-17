document.addEventListener('DOMContentLoaded', function () {
    var reportBtn = document.getElementById('submitReportBtn');
    
    reportBtn.addEventListener('click', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        } else {
            var username = document.getElementById('username').value;
            var reportUsername = document.getElementById('report_username').value;
            var motive = document.getElementById('motive').value;
            var description = document.getElementById('report_text').value;

            if (description === '') {
                description = 'Not given';
            }

            var report = {Username: username, 
                          Reported_Username: reportUsername, 
                          Motive: motive,
                          Description: description};
            
            setReportData(report);
            window.location.href = 'users-page.html';
        }
    });
    
    function validateForm() {
        var username = document.getElementById('username').value;
        var reportedUsername = document.getElementById('report_username').value;
        var motive = document.getElementById('motive').value;

        var isValid = true;

        if (localStorage.getItem('username') === null) {
            isValid = false;
            alert('You need to login in order to report other users.');
        } else if (username.trim() === '' || username !== localStorage.getItem('username')) {
            isValid = false;
            alert('Please enter your username.');
        } else if (reportedUsername.trim() === '' || !isValidUsername(reportedUsername)) {
            isValid = false;
            alert('Please enter your username');
        } else {
            if (motive.trim() === '') {
                isValid = false;
                alert('Please enter a motive.');
            }
        }
    
        return isValid;
    }

    function isValidUsername(username) {
        var usernameRegex = /^\b(?!nigger|nigga|retarded\b)[a-zA-Z0-9_-]{4,20}\b$/;
        return usernameRegex.test(username);
    }

    function setReportData(report) {
        localStorage.setItem("report",JSON.stringify(report));
    }
});