


function calculate(){
    const totalAmount = document.getElementById("totalAmount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let year = Number(yearsInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }
    if(year < 0 || isNaN(year)){
        year = 0;
        yearsInput.value = 0;
    }

    const result = principal * Math.pow((1 + rate / 1), 1 * year);
    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});

}