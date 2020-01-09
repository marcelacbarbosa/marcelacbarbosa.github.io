function initialize()
{
    //Taking date and hour
    var today = new Date();
    var date = (today.getMonth()+1) + '-'+ today.getDate() + '-' + today.getFullYear();
    var time = today.getHours() + ":" + addZero(today.getMinutes());
    var dateTime = date+' '+ time;
    document.getElementById("displayTime").innerHTML = dateTime;

    function addZero(min) {
        if (min < 10) {
          min = "0" + min;
        }
        return min;
      }
    
    // Array of Products 
    arrayItems.push( new Item( "PRD001", "Dress Style", "Dress black, bottons, long.", 39.00, 10, 2, "Dress", 10.00, ["I don't like!", "Amazing"], "img/dress1.jpg" ));
    arrayItems.push( new Item( "PRD002", "Dress Flower", "Dress beige, with flowers, long.", 45.00, 6, 1, "Dress", 10.00, ["I don't like!", "Amazing"], "img/dress2.jpg" ));
    arrayItems.push( new Item( "PRD003", "Dress Night", "Dress black and whaite, long, swirled.", 57.00, 4, 1, "Dress", 12.00, ["I don't like!", "Amazing"], "img/dress3.jpg" ));
    arrayItems.push( new Item( "PRD004", "Jeans Basic", "Jeans blue, traditional, Tommy.", 20.00, 15, 3, "Jeans", 5.00, ["I don't like!", "Amazing"], "img/jeans1.jpg" ));
    arrayItems.push( new Item( "PRD005", "Jeans Torn", "Jeans green, torn, Dzarm.", 26.00, 20, 2, "Jeans", 5.00, ["good!", "bad"], "img/jeans2.jpg" ));
    arrayItems.push( new Item( "PRD006", "Jeans Torn", "Blue, Guess.", 15.00, 10, 1, "Jeans", 6.00, ["good!", "I don't like!"], "img/jeans3.jpg" ));
    arrayItems.push( new Item( "PRD007", "Shoes Blue", "Blue, suede.", 105.00, 10, 1, "Shoes", 6.00, ["good!", "I don't like!"], "img/shoes1.jpg" ));
    arrayItems.push( new Item( "PRD008", "Tennis All-star", "Black, day by day.", 49.00, 1, 2, "Shoes", 6.00, ["Best Option!", "bad"], "img/shoes2.jpg" ));
    arrayItems.push( new Item( "PRD009", "Tennis Mizuno", "many colors.", 56.00, 5, 1, "Shoes", 5.00, ["Confortable!", "bad"], "img/shoes3.jpg" ));
    arrayItems.push( new Item( "PRD010", "Skirt Grey", "Grey, midle.", 56.00, 5, 1, "Skirts", 5.00, ["Confortable!", "bad"], "img/skirt1.jpg" ));
    arrayItems.push( new Item( "PRD011", "Skirt Red", "Red, Curt, Little Flowers .", 56.00, 5, 1, "Skirts", 5.00, ["I don't like!", "Amazing"], "img/skirt2.jpg" ));
    arrayItems.push( new Item( "PRD012", "Skirt Long", "Black and White Stripes.", 56.00, 5, 1, "Skirts", 5.00, ["Good!", "Amazing"], "img/skirt3.jpg" ));
    arrayItems.push( new Item( "PRD013", "T-Shirt Black", "Black with wing draw.", 56.00, 5, 1, "T-Shirt", 5.00, ["I don't like!", "Amazing"], "img/t-Shirt1.jpg" ));
    arrayItems.push( new Item( "PRD014", "T-Shirt white", "White with draw of a man.", 56.00, 5, 1, "T-Shirt", 5.00, ["I don't like!", "Amazing"], "img/t-Shirt2.jpg" ));
    arrayItems.push( new Item( "PRD015", "T-Shirt Simple", "White.", 56.00, 5, 1, "T-Shirt", 5.00, ["Good!", "bad"], "img/t-Shirt3.jpg" ));
    
    // Array of Cart Items
    arrayCart.push( new Cart( "PRD001", 39.00, 1, 10.00 ));
    arrayCart.push( new Cart( "PRD002", 45.00, 2, 10.00 ));
    arrayCart.push( new Cart( "PRD003", 57.00, 1, 12.00 ));
    arrayCart.push( new Cart( "PRD004", 20.00, 2, 5.00 ));
    arrayCart.push( new Cart( "PRD005", 26.00, 1, 10.00 ));

    displayStoreItems();
    displayCartItems();
    calculateCart();
      
}

