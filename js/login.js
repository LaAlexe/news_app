const loginForm = document.querySelector('.loginForm');
const buttonForm = document.querySelector('.form-submit');
const errorBlock = document.querySelector('.error_block');
const closeErrorBlock = document.querySelector('.close');
const adminPass = loginForm.querySelector('[name="pass"]').value.trim();
const passwordLength = 8;


document.getElementById('pass').addEventListener('keyup', (e)=>{
    e.preventDefault();
    
        if(document.getElementById('pass').value.length == passwordLength ) {
            buttonForm.removeAttribute('disabled');
    }
    
});



loginForm.addEventListener('submit', e => {
        e.preventDefault();

    const adminEmail = loginForm.querySelector('[name="mail"]').value.trim();
    const adminPass = loginForm.querySelector('[name="pass"]').value.trim();
    
    if(adminEmail == 'admin@gmail.com' && adminPass == 'Aa111111'){
        window.location.href = 'admin.html'
    }
    
    else if(adminEmail == 'user@gmail.com' && adminPass == '111111aA') {
        window.location.href = 'user.html'
    }
    
    else {
        errorBlock.style.display = 'block';
        document.forms[0].reset()
        
        closeErrorBlock.addEventListener('click', () => {
            errorBlock.style.display='none';
        })
    }
    
    
});

