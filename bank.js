
//  deposit function

document.getElementById('deposit-bnt').addEventListener('click',function(){


    // deposit activities

    let newDepositString=document.getElementById('deposit-input').value;
    let newDepositAmout=parseFloat(newDepositString);
   
    
    

    let depositAmountString=document.getElementById('deposit-amount').innerText;
    let previousDepositAmount=parseFloat(depositAmountString);

    let totalDeposit=newDepositAmout+previousDepositAmount;
    

    document.getElementById('deposit-amount').innerText=totalDeposit;


    document.getElementById('deposit-input').value=''


   //    total balance activities

   let previousBanlanceString=document.getElementById('balance-amount').innerText;

    let previousBanlance=parseFloat(previousBanlanceString);

    let newBalanceTotal=previousBanlance+newDepositAmout;

    document.getElementById('balance-amount').innerText=newBalanceTotal;


   

})


//  withdraw function

document.getElementById('withdraw-btn').addEventListener('click',function(){


    let newWithdrawAmoutString=document.getElementById('withdraw-input').value;
    let newWithdrawAmout=parseFloat(newWithdrawAmoutString);
    
   

    let previousWithdrawString=document.getElementById('withdraw-amount').innerText;
    let previousWithdrawAmount=parseFloat(previousWithdrawString);

    let totalWithdraw= previousWithdrawAmount+newWithdrawAmout;

    document.getElementById('withdraw-amount').innerText=totalWithdraw;

    document.getElementById('withdraw-input').value='';

    
     //    total balance activities

   let previousBanlanceString=document.getElementById('balance-amount').innerText;

   let previousBanlance=parseFloat(previousBanlanceString);

   let newBalanceTotal=previousBanlance-newWithdrawAmout;

   document.getElementById('balance-amount').innerText=newBalanceTotal;


})