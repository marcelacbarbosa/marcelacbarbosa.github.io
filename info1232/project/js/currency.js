//function that checks currency
function currency()
{
    var currencyOption = document.getElementById("chooseCurrency").value;

    if (currencyOption == "USD")
    {
        var currency = 2;
    }
    else
    {
        var currency = 1;
    }
    return currency;
}