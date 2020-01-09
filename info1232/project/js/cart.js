function Cart(newCartId, newCartPrice, newCartQuant, newCartShip)
{
	//   Assing values
    this.itemId = newCartId;
    this.cartPrice = newCartPrice;
    this.cartQuant = newCartQuant;
    this.cartShip = newCartShip;
}

//function add cart
function addItemToCart(){
    var idItem = document.getElementById("prodIdInput");
    var quantItem = document.getElementById("quantItemInput").value;

    // Validate if the input ID is empty
    if (validEmpty(idItem)){
        document.getElementById("cartIdValidation").innerHTML = "Must enter item ID!";
        return;
    }

    // Validate already has the Item in the product list
    if (!(validExist(arrayItems,idItem.value)))
    {
       document.getElementById("cartIdValidation").innerHTML = "  Item not found!";
       document.getElementById("prodIdInput").value = "";
       return;
    }

    if (!(validQuantZero()))
    {
       document.getElementById("cartQuantValidation").innerHTML = "  Quantity must be greater than 0!";
       document.getElementById("quantItemInput").value = "0";
       document.getElementById("cartIdValidation").value = "";
       return;
    }

    
    if (!validQuantity()){
        document.getElementById("cartQuantValidation").innerHTML = " Not enough in stock! ";
        document.getElementById("cartIdValidation").value = "";
        document.getElementById("quantItemInput").value = "0";
        return;
    } 

    if (!validQuantityCust()){
        document.getElementById("cartIdValidation").value = "";
        document.getElementById("quantItemInput").value = "0";
        return;
    } 
    
    if (!validQuantityCustCart()){
        document.getElementById("cartIdValidation").value = "";
        document.getElementById("quantItemInput").value = "0";
        return;
    }

    var endArray = arrayCart.length - 1;
    for (var i = 0; i <= arrayCart.length; i++)
    {
        let theCart = arrayCart[i];
        
		if (arrayCart.length > 0){
            if (idItem.value == theCart.itemId) 
            {
                theCart.cartQuant = parseInt(theCart.cartQuant) + parseInt(quantItem);
                for (var i = 0; i < arrayItems.length; i++)
                {
                    let theStore = arrayItems[i];
                    if (idItem.value == theStore.itemId)
                    {
                    theStore.itemQuant = parseInt(theStore.itemQuant) - parseInt(quantItem);
                    }
                }   
            }
            else if (i == endArray )
            {
                for (var i = 0; i < arrayItems.length; i++)
                {
                    let theStore = arrayItems[i];
                    if (idItem.value == theStore.itemId)
                    {
                        theStore.itemQuant = parseInt(theStore.itemQuant) - parseInt(quantItem);
                        var newItemPrice = theStore.itemPrice;
                        var newIItemCostShip = theStore.itemCostShip;
                    }
                }
                arrayCart.push( new Cart(idItem.value, newItemPrice, quantItem,  newIItemCostShip));
            }
        }
        else
        {
            for (var i = 0; i < arrayItems.length; i++)
            {
                let theStore = arrayItems[i];
                if (idItem.value == theStore.itemId)
                {
                    theStore.itemQuant = parseInt(theStore.itemQuant) - parseInt(quantItem);
                    var newItemPrice = theStore.itemPrice;
                    var newIItemCostShip = theStore.itemCostShip;
                }
            }
            arrayCart.push( new Cart(idItem.value, newItemPrice, quantItem,  newIItemCostShip));
        }  
    }
    calculateCart();
    displayCartItems();
    displayStoreItems();   
}

// Function to remove items from cart
function removeItemFromCart(){
    var idItem = document.getElementById("prodIdInput");
    var quantItem = document.getElementById("quantItemInput").value;

    // call function to validate if the input ID is empty
    if (validEmpty(idItem))
    {
        document.getElementById("cartIdValidation").innerHTML = "<b>  Must enter item ID! </b>";
        return;
    }

     // call function to validate already has the Item in the Cart
     if (!(validExist(arrayCart,idItem.value)))
     {
        document.getElementById("cartIdValidation").innerHTML = "  Item not found!";
        document.getElementById("prodIdInput").value = "";
        return;
     }

     // call function to validate if customer is trying to remove more than have in cart
    if (!validRemQuantity())
    {
        document.getElementById("cartQuantValidation").innerHTML = " Removing more than you have on cart! ";
        return;
    }

    // call function to validate if cquantity at cart is grater than 0
    if (!(validQuantZero()))
    {
       document.getElementById("cartQuantValidation").innerHTML = "  Quantity must be greater than 0!";
       return;
    }

    for (var i = 0; i < arrayCart.length; i++)
    {
        let theCart = arrayCart[i];
        
        if (idItem.value == theCart.itemId)
        {
            if (theCart.cartQuant == quantItem)
            {
                arrayCart.splice(i, 1);
                for (var x = 0; x < arrayItems.length; x++)
                {
                    let theStore = arrayItems[x];
                    if (idItem.value == theStore.itemId)
                    {
                        theStore.itemQuant = parseInt(theStore.itemQuant) + parseInt(quantItem);
                    }   
                }    
            }
            else 
            {
                theCart.cartQuant -= parseInt(quantItem);
                for (var x = 0; x < arrayItems.length; x++)
                {
                    let theStore = arrayItems[x];
                    if (idItem.value == theStore.itemId)
                    {
                        theStore.itemQuant = parseInt(theStore.itemQuant) + parseInt(quantItem);
                    }   
                }    
           }
        }
    }
    displayCartItems();
    displayStoreItems();
    calculateCart();
}

//Function to Display Cart Items
function displayCartItems()
{   
    document.getElementById("prodIdInput").value = "";
    document.getElementById("quantItemInput").value = "0";
    document.getElementById("displayCartInfo").innerHTML = "";

    if (arrayCart.length == 0){
        document.getElementById("displayCartInfo").innerHTML += "<span>No Item in Cart. Add Items to Cart!.</span>"; 
        return;
    }

    /*document.getElementById("displayCartInfo").innerHTML += "<span class=line> ID </span> <span class=line> Price </span> <span class=line> Quantity </span> <span class=line> Subtotal </span><br>";
    */

    var theTable = document.createElement("table"); 
    var tr = document.createElement("tr");
      
    var theDiv = document.getElementById("displayCartInfo");
    var td = document.createElement("td");
    td.className = "cartTdHead";
    td.innerHTML = "<b>Product ID</b>";
    tr.appendChild(td);
    var td = document.createElement("td");
    td.className = "cartTdHead";
    td.innerHTML = "<b>Price</b>";
    tr.appendChild(td);
    var td = document.createElement("td");
    td.className = "cartTdHead";
    td.innerHTML = "<b>Quantity</b>";
    tr.appendChild(td);
    var td = document.createElement("td");
    td.className = "cartTdHead";
    td.innerHTML = "<b>Subtotal</b>";
    tr.appendChild(td);
    theTable.appendChild(tr);

    for (var i = 0; i < arrayCart.length; i++)
    {
        var tr = document.createElement("tr");
		let theCart = arrayCart[i];
		
        var dispCartPrice = (theCart.cartPrice * currency()).toFixed(2);
        var dispCartSub = dispCartPrice * theCart.cartQuant;
        /*document.getElementById("displayCartInfo").innerHTML += "<span class=col1>"+ theCart.itemId + "</span><span class=col2>$ " 
        + dispCartPrice + " " + document.getElementById("chooseCurrency").value + "</span><span class=col3>" 
        + theCart.cartQuant + "</span><span class=col1>$ "+ dispCartSub.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "</span><br>";     
        */
        var td = document.createElement("td");
        td.className = "carttd";
        td.innerHTML = theCart.itemId;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.className = "carttd";
        td.innerHTML = "$ " + dispCartPrice + " " + document.getElementById("chooseCurrency").value;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.className = "carttd";
        td.innerHTML = theCart.cartQuant;
        tr.appendChild(td);
        theTable.appendChild(tr);
        var td = document.createElement("td");
        td.className = "carttd";
        td.innerHTML = "$ " + dispCartSub.toFixed(2) + " " + document.getElementById("chooseCurrency").value;
        tr.appendChild(td);
        theDiv.appendChild(theTable);
    }
}

// function that calculate subtotal, total, taxes and shipping
function calculateCart() {
    var subtotalProd = 0;
    var shipping = 0;
    var subtotal = 0;
    var tax = 0;
    var total = 0;
    document.getElementById("displayTotal").innerHTML = "";
    currency();
    for (var i = 0; i < arrayCart.length; i++)
    {
        let theCart = arrayCart[i];
        subtotalProd += ((theCart.cartPrice * currency()) * theCart.cartQuant);
        shipping += ((theCart.cartShip * currency()) * theCart.cartQuant);
    }
    subtotal += (subtotalProd + shipping);
    tax = (subtotal * 0.13);
    total = (subtotal + tax);
    /*document.getElementById("displayTotal").innerHTML += "<p><span>Items Subtotal:</span> $ " + subtotalProd.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "<br>" +
    "<span>Estimated Shipping: </span>$ " + shipping.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "<br></p>" +
    "<span>Subtotal:</span> $ " + subtotal.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "<br>" +
    "<span>Estimated Tax:</span> $ " + tax.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "<br>" +
    "<span id=subtotal>Order Total:</span> $ " + total.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "<br>";*/

    document.getElementById("displayTotal").innerHTML += 
    "<div class=totalTable>" +
        "<div class=totalTableRow>" +
            "<div class=totalPart1><span>Items Subtotal:</span></div><div class=totalPart2> $ " + subtotalProd.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "</div>" 
        + "</div>" +
        "<div class=totalTableRow>" +
            "<div class=totalPart1><span>Estimated Shipping: </span></div><div class=totalPart2>$ " + shipping.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "</div></p>" 
        + "</div>" +
        "<div class=totalTableRow>" +
            "<div class=totalPart1><span>Subtotal:</span></div><div class=totalPart2> $ " + subtotal.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "</div>" 
        + "</div>" +
        "<div class=totalTableRow>" +
            "<div class=totalPart1><span>Estimated Tax:</span></div><div class=totalPart2> $ " + tax.toFixed(2) + " " + document.getElementById("chooseCurrency").value + "</div>" 
        + "</div>" +
        "<div class=totalTableRow>" +
            "<div class=totalPart1><span id=subtotal>Cart Totals:</span></div><div class=totalPart2> $ " + total.toFixed(2) + " " + document.getElementById("chooseCurrency").value 
        + "</div>" +
    "</div>";
}
