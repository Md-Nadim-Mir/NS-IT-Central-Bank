//  deposit function

document.getElementById('deposit-bnt').addEventListener('click',function(){


    // deposit activities


    // new balance added
    let newDepositString=document.getElementById('deposit-input').value;
    let newDepositAmout=parseFloat(newDepositString);

    if(!newDepositAmout){
        alert('please enter a number')
    }

    else{

        // previous balance added
    let depositAmountString=document.getElementById('deposit-amount').innerText;
    let previousDepositAmount=parseFloat(depositAmountString);

    // total deposit balance
    let totalDeposit=newDepositAmout+previousDepositAmount;
    

    document.getElementById('deposit-amount').innerText=totalDeposit;
    
    document.getElementById('deposit-input').value=''


   //    total balance activities


    //  previous total balance
    let previousBanlanceString=document.getElementById('balance-amount').innerText;
    let previousBanlance=parseFloat(previousBanlanceString);

    // current total balance
    let newBalanceTotal=previousBanlance+newDepositAmout;

    document.getElementById('balance-amount').innerText=newBalanceTotal;

    }
   
    


   

})