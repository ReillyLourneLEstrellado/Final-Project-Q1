
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function (e) {
        e.preventDefault();

        
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const sex = document.querySelector('input[name="sex"]:checked');
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const supportReason = document.getElementById('supportReason').value.trim();

        let valid = true;

        
        if (!firstName) {
            document.getElementById('firstNameError').textContent = 'required';
            valid = false;
        }
        if (!lastName) {
            document.getElementById('lastNameError').textContent = 'required';
            valid = false;
        }
        if (!sex) {
            document.getElementById('sexError').textContent = 'required';
            valid = false;
        }
        if (!email) {
            document.getElementById('emailError').textContent = 'required';
            valid = false;
        }
        if (!password) {
            document.getElementById('passwordError').textContent = 'required';
            valid = false;
        }
        if (!supportReason) {
            document.getElementById('supportReasonError').textContent = 'required';
            valid = false;
        }

        if (!valid) return;

        
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('sex', sex ? sex.value : '');
        localStorage.setItem('email', email);
        localStorage.setItem('supportReason', supportReason);

        
        window.location.href = proj_profile_lastname.html;
    });
}


if (document.getElementById('profileFirstName')) {
    document.getElementById('profileFirstName').textContent = localStorage.getItem('firstName') || '';
    document.getElementById('profileLastName').textContent = localStorage.getItem('lastName') || '';
    document.getElementById('profileEmail').textContent = localStorage.getItem('email') || '';
    document.getElementById('profileSex').textContent = localStorage.getItem('sex') || '';
    document.getElementById('profileSupportReason').textContent = localStorage.getItem('supportReason') || '';
}
