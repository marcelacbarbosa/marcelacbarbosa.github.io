// Clear input Cart ID Product msg onFocus 
function clearProdMsg()
{
    document.getElementById("cartIdValidation").innerHTML = "";
    return;
}

// Clear input Cart Quantity msg onFocus 
function clearQuantMsg()
{
    document.getElementById("cartQuantValidation").innerHTML = "";
    return;
}

// Clear input Review Product ID msg onFocus 
function clearProdRevMsg()
{
    document.getElementById("displayItemReview").innerHTML = "";
    document.getElementById("storeItemReview").innerHTML = "";
    document.getElementById("dispItemRevDetHead").style.display = "none";
    document.getElementById("dispItemRevHead").style.display = "none";
    document.getElementById("storeItemReview").style.display = "none";
    document.getElementById("reviewValidationText").innerHTML = "";
    /*
    
    
    document.getElementById("reviewValidation").style.display = "none";
    */
    return;
}

// Clear input Review msg onFocus 
function clearRevMsg()
{
    document.getElementById("reviewValidationText").innerHTML = "";
    return;
}