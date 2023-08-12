

//  withdraw function

document.getElementById('withdraw-btn').addEventListener('click',function(){


    // previous withdraw amount
    let newWithdrawAmoutString=document.getElementById('withdraw-input').value;
    let newWithdrawAmout=parseFloat(newWithdrawAmoutString);
    
    // new withdraw amount
    let previousWithdrawString=document.getElementById('withdraw-amount').innerText;
    let previousWithdrawAmount=parseFloat(previousWithdrawString);

    
    // previous total balance 
    let previousBanlanceString=document.getElementById('balance-amount').innerText;
    let previousBanlance=parseFloat(previousBanlanceString);

    
    // check withdraw balance is less than current balance
    if(previousBanlance>newWithdrawAmout){

        // total withdraw amount
        let totalWithdraw= previousWithdrawAmount+newWithdrawAmout;
        document.getElementById('withdraw-amount').innerText=totalWithdraw;

        // new total balance
        let newBalanceTotal=previousBanlance-newWithdrawAmout;
       document.getElementById('balance-amount').innerText=newBalanceTotal;
    
       }


       else {

        alert('Your Account Not Sufficient Balance For Withdraw')
        document.getElementById('withdraw-input').value='';
   
      }



    document.getElementById('withdraw-amount').innerText=totalWithdraw;
    document.getElementById('withdraw-input').value='';
    



})