function createTable() {
    event.preventDefault();
    let loanAmount = document.getElementById("loanAmount").value,
        interestRate = document.getElementById("interestRate").value,
        paymentAmount = document.getElementById("paymentAmount").value,
        table = document.getElementById("loanTable"),
        month = 1,
        interestPaid = 0;

    let loanBalance = loanAmount;

    table.innerHTML = "";
    let tableHeader = '<tr><th>Payment Number:</th><th>Loan Balance:</th></tr>';
    table.insertAdjacentHTML('beforeend', tableHeader);
    for( loanBalance=loanAmount ; (loanBalance > 0);  )
    {
        let oldLoanBalance = loanBalance;
        let currentInterest = (interestRate / 1200 * loanBalance);
        
        // Running total of interest
        interestPaid+=currentInterest;

        loanBalance = loanBalance - paymentAmount + currentInterest ;
        
        if (loanBalance > oldLoanBalance){
            alert('Warning! Interest is greater than payment amount!');
            break;
        } 

        if (loanBalance > 0) {
            let tableContent = '<tr><td>' + month++ + '</td><td>' + loanBalance + '</td></tr>';
            table.insertAdjacentHTML('beforeend', tableContent);
        }

        if (loanBalance < 0){
            let tableEnd = '<tr><th>Payments:</th><th>Interest:</th></tr><tr><td>' + --month + '</td><td>' + interestPaid + '</td></tr>';
            table.insertAdjacentHTML('beforeend', tableEnd);
            break;
        }  
    }
}