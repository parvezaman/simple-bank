// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('cl');
    // get the ammount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmount = depositInput.value;
    // console.log(depositAmmount);

    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const previousDepositAmmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmmount) + parseFloat(newDepositAmmount);
    depositTotal.innerText = newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmmount);

    balanceTotal.innerText = newBalanceTotal;
    // clear deposit input field
    depositInput.value = '';
})



// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('k');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmmountText = withdrawInput.value;
    const newWithdrawAmmount = parseFloat(withdrawAmmountText);
    // console.log(withdrawAmmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw input
    withdrawInput.value = '';
})