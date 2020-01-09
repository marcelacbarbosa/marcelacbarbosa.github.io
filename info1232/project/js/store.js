// Store Item Constructor 
function Item(newItemId, newItemName, newItemDesc, newItemPrice, newItemQuant, newItemPerCustomer, newItemCategory, newItemCostShip, newItemReview, newItemImag)
{
	//   Assing values
    this.itemId = newItemId;
    this.itemName = newItemName;
    this.itemDesc = newItemDesc;
    this.itemPrice = newItemPrice;
    this.itemQuant = newItemQuant;
    this.itemPerCustomer = newItemPerCustomer;
    this.itemCategory = newItemCategory;
    this.itemCostShip = newItemCostShip;
    this.itemReview = newItemReview;
    this.itemImage = newItemImag;
}

//Function to Display Parcel
function displayStoreItems()
{   
   //currency();
    
    var category = document.getElementById("categoryOption").value;
    var theDiv = document.getElementById("displayItemTable");
    theDiv.innerHTML = "";
    var theTable = document.createElement("table"); 
    var tr = document.createElement("tr");
    
    for (var i = 0; i < arrayItems.length; i++)
    {
        let theStore = arrayItems[i];
        var td = document.createElement("td");
        var iImage = document.createElement("img");
        var figcaption = document.createElement("figcaption");
		
		if (category == theStore.itemCategory)
		{
            iImage.src= theStore.itemImage;
            figcaption.innerHTML = "<p><b>Cod: </b>" + theStore.itemId + "<br><b>Name: </b>" + theStore.itemName + "<br> <b>Price: $</b>" 
            + (theStore.itemPrice * currency()).toFixed(2) + " " + document.getElementById("chooseCurrency").value + "<br> <b>Quantity: </b>" + theStore.itemQuant + "<br><b> Quant. Per Customer:</b>" 
            + theStore.itemPerCustomer + "</p>";
            td.appendChild(iImage); 
            td.appendChild(figcaption);
            tr.appendChild(td);
        }			
		else if (category == "All")
		{        
            iImage.src= theStore.itemImage;
            iImage.id="imgTable";
            figcaption.innerHTML = "<p><b>Cod:</b>" + theStore.itemId + "<br><b>Name:</b>" + theStore.itemName + "<br> <b>Price: $</b>" 
            + (theStore.itemPrice * currency()).toFixed(2) + " " + document.getElementById("chooseCurrency").value + "<br> <b>Quantity:</b>" 
            + theStore.itemQuant + "<br><b> Quant. Per Customer: </b> " + theStore.itemPerCustomer + "</p>";
            td.appendChild(iImage); 
            td.appendChild(figcaption);
            tr.appendChild(td);
        }
           
        theTable.appendChild(tr);         
    }
    theDiv.appendChild(theTable);
}

// function to add review to the product
function addReview()
{
    var idItem = document.getElementById("reviewIdInput");
    var getReviewInput = document.getElementById("reviewInput");

    if (validEmpty(idItem)){
        document.getElementById("reviewValidation").innerHTML = "Must enter item ID! ";
        return;
    }

    if (!(validExist(arrayItems,idItem.value)))
    {
       document.getElementById("reviewValidation").innerHTML = "  Item not found!";
       document.getElementById("reviewIdInput").value = "";
       return;
    }  

    if (validEmpty(getReviewInput)){
        document.getElementById("reviewValidationText").innerHTML = " Must enter review! ";
        return;
    } 

    for (var i = 0; i < arrayItems.length; i++)
    {
        let theStore = arrayItems[i];
        
        if (idItem.value == theStore.itemId)
        {
            theStore.itemReview.push(getReviewInput.value);
            
        }      
    }
    alert("Thank you for your review of item " + idItem.value + " \n- " + getReviewInput.value );
    document.getElementById("reviewIdInput").value = "";
    document.getElementById("reviewInput").value = "";
    document.getElementById("displayItemReview").innerHTML = "";
    document.getElementById("dispItemRevDetHead").style.display = "none";
    document.getElementById("dispItemRevHead").style.display = "none";
    document.getElementById("storeItemReview").style.display = "none";   
}

//function that shows item detail
function itemDetails()
{
    var idItem = document.getElementById("reviewIdInput");
    document.getElementById("displayItemReview").style.display = "block";
    document.getElementById("displayItemReview").innerHTML = "";
    document.getElementById("reviewValidation").innerHTML = "";
    document.getElementById("storeItemReview").innerHTML = "";
    var storeItemDetail ="";
    var storeItemReview ="";
    
    
    if (validEmpty(idItem)){
        document.getElementById("reviewValidation").innerHTML = "<b>  Must enter item ID! </b>";
        return;
    }

    if (!(validExist(arrayItems,idItem.value)))
    {
       document.getElementById("reviewValidation").innerHTML = "  Item not found!";
       document.getElementById("reviewIdInput").value = "";
       return;
    }   

    for (var i = 0; i < arrayItems.length; i++)
    {
        let theStore = arrayItems[i];
		if  (idItem.value == theStore.itemId){

            var dispItemPrice = (theStore.itemPrice * currency()).toFixed(2);
            var dispItemShip = (theStore.itemCostShip * currency()).toFixed(2);
            
            document.getElementById("displayItemReview").innerHTML += 
            "<div class=totalTable>" +
                "<div class=totalTableRow>" +
                    "<div class=totalPart1><span>Product Id</span></div><div class=totalPart2> " + theStore.itemId + "</div>" 
                    + "</div>" +
                "<div class=totalTableRow>" +
                    "<div class=totalPart1><span>Name </span></div><div class=totalPart2> " + theStore.itemName + "</div></p>" 
                    + "</div>" +
                "<div class=totalTableRow>" +
                    "<div class=totalPart1><span>Description</span></div><div class=totalPart2>" + theStore.itemDesc + "</div>" 
                    + "</div>" +
                "<div class=totalTableRow>" +
                    "<div class=totalPart1><span>Price</span></div><div class=totalPart2> $ " + dispItemPrice + " " + document.getElementById("chooseCurrency").value + "</div>" 
                    + "</div>" +
                "<div class=totalTableRow>" +
                    "<div class=totalPart1><span>Quantity</span></div><div class=totalPart2>" + theStore.itemQuant + "</div>" 
                    + "</div>" +
                "<div class=totalTableRow>" +
                    "<div class=totalPart1><span>Item Per Custome</span></div><div class=totalPart2> " + theStore.itemPerCustomer + "</div>" 
                    + "</div>" +
                "<div class=totalTableRow>" +
                    "<div class=totalPart1><span>Category</span></div><div class=totalPart2> " + theStore.itemCategory + "</div>" 
                    + "</div>" +
                "<div class=totalTableRow>" +
                    "<div class=totalPart1><span>Shipping</span></div><div class=totalPart2> $ " + dispItemShip + " " + document.getElementById("chooseCurrency").value+ "</div>" 
                    + "</div>" +
        
            "</div>";
         
            for (var x = 0; x < theStore.itemReview.length; x++)
            {
                storeItemReview += " - " + theStore.itemReview[x] + "<br>";
            }
            document.getElementById("storeItemReview").innerHTML += storeItemReview;
            document.getElementById("displayItemReview").style.display = "block";
            document.getElementById("dispItemRevHead").style.display = "block";
            document.getElementById("storeItemReview").style.display = "block";
            document.getElementById("dispItemRevDetHead").style.display = "block";
            document.getElementById("reviewInput").value = "";
            return;
        }
    }
}
