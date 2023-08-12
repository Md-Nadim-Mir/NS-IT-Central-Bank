

// add event listener include to the login button

document.getElementById('login').addEventListener('click',function(){


    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    if(email=='mdnadimmir50@gmail.com' && password=='nadim'){

        window.location.href='bank.html'

    }

    else{

        alert('Invalid User')

    }

})