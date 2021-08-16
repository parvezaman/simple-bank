document.getElementById('login-button').addEventListener('click', function(){
    // console.log('button clicked');

    // get email 
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value; 
    // console.log(userEmail);

    // get password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // check user
    if(userEmail == 'a@b.com' && userPassword == '123'){
        // console.log('valid user!!!');
        window.location.href = './banking.html';
    }
    else{
        alert('false credentials. try again!');
    }
       
})


