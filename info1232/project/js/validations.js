//validate is input is empty
function validEmpty(idItem)
{
    if (idItem.value == "")
    {
        return true;
    }
}

// Validade if the Item exist
function validExist(typeArray,idValue)
{
    for (var i = 0; i < typeArray.length; i++)
    {
		let theArray = typeArray[i];
        if  (idValue == theArray.itemId)
        {
            return true;
        }
    }
    return false;
}

// Validate if quantity iqual 0
function validQuantZero(){
    var quantValue = document.getElementById("quantItemInput").value;
    if (quantValue > 0){
        return true;
    }
    return false;
}

// Validate quantity of item in stock
function validQuantity(){
    var idValue = document.getElementById("prodIdInput").value;
    var quantValue = document.getElementById("quantItemInput").value;
    
    for (var i = 0; i < arrayItems.length; i++)
    {
		let theArray = arrayItems[i];
        if  ((idValue == theArray.itemId) && ( quantValue <= theArray.itemQuant))
        {
            return true;
        }
    }
    return false;
}

// Validate quantity of item per Customer
function validQuantityCust(){
    var idValue = document.getElementById("prodIdInput").value;
    var quantValue = document.getElementById("quantItemInput").value;
    
    for (var i = 0; i < arrayItems.length; i++)
    {
		let theArray = arrayItems[i];
        if  ((idValue == theArray.itemId) && (quantValue > theArray.itemPerCustomer))
        {
            document.getElementById("cartQuantValidation").innerHTML = "<b>  Maximum " + theArray.itemPerCustomer + " per Customer! </b>";
            return false;
        }
        
    }
    return true;
}

// Validate quantity of item per Customer Cart
function validQuantityCustCart(){
    var idValue = document.getElementById("prodIdInput").value;
    var quantValue = document.getElementById("quantItemInput").value;
    
    for (var i = 0; i < arrayItems.length; i++)
    {
		let theArray = arrayItems[i];
        if  (idValue == theArray.itemId) 
        {
            for (var x = 0; x < arrayCart.length; x++)
            {
                let theCart = arrayCart[x];
                var totQuant = parseInt(theCart.cartQuant) + parseInt(quantValue);
                if  ((idValue == theCart.itemId) && (totQuant > theArray.itemPerCustomer))
                {
                    document.getElementById("cartQuantValidation").innerHTML = "<b>  Maximum " + theArray.itemPerCustomer + " per Customer! </b>";
                    return false;
                }
            }
        }
    }
    return true;
}

//Validate quantity that is going to remove
function validRemQuantity()
{
    var idValue = document.getElementById("prodIdInput").value;
    var quantValue = document.getElementById("quantItemInput").value;
    if (quantValue == 0){
        return true;
    }

    for (var i = 0; i < arrayCart.length; i++)
    {
		let theCart = arrayCart[i];
        if  ((idValue == theCart.itemId) && ( quantValue <= theCart.cartQuant))
        {
            return true;
        }
    }
    return false;
}