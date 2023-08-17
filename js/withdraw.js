document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('clicked');

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // console.log(withdrawFieldString);



    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalElementString = withdrawTotalElement.innerText;
    const previousWithdrawTotalElement = parseFloat(previousWithdrawTotalElementString);



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You don not have sufficient balance for withdraw');
        return;
    }

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotalElement;

    withdrawTotalElement.innerText = currentWithdrawTotal;



    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBalanceTotal;

});