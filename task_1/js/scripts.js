/* This is Function called on buttonOnClick ,
 which takes value of option and call the function*/

function count() {
    var capital = 0;
    var small = 0;
    var special = 0;
    var number = 0;

    var str = document.getElementById('input_str').value;

    for (var i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") {
            capital++;
        } else if (str[i] >= "a" && str[i] <= "z") {
            small++;
        } else if (str[i] >= "0" && str[i] <= "9") {
            number++;
        } else { special++ };
    }
    document.getElementById('total_length').innerText = 'Total Length :' + str.length;
    document.getElementById('capital').innerText = 'Capital Letters :' + capital;
    document.getElementById('small').innerText = 'small Letters :' + small;
    document.getElementById('special').innerText = 'special Letters :' + special;
    document.getElementById('number').innerText = 'total Number:' + number;
}

function itemDetails() {
    var customerId = document.getElementById('customerId').value;
    var customerName = document.getElementById('customerName').value;
    var customerNumber = document.getElementById('customerNumber').value;
    customerItems = parseInt(document.getElementById('inputItems').value);
    localStorage.setItem("customerId", customerId);
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("customerNumber", customerNumber);
    localStorage.setItem("customerItems", customerItems);
    localStorage.getItem("customerId");
    localStorage.getItem("customerName");
    localStorage.getItem("customerNumber");
    localStorage.getItem("customerItems");
    var str = "";
    for (i = 1; i <= customerItems; i++) {
        document.getElementById('customerItems+').innerHTML = 'total Number:' + customerItems;
        str += "<br><br><br><h2>Item" + i + " Data </h3></br>";
        str += "<h3>Item Name " + i + "</h3>";
        str += "<Input id=ItemName_" + i + "></br>";
        str += "<h3>Quantity " + i + "</h3>";
        str += "<Input id=Quantity_" + i + "></br>";
        str += "<h3>Price " + i + "</h3>";
        str += "<Input id=Price_" + i + "></br>";
    }
    str += "<button type= 'submit'  onclick= 'saveData()'>Save </button>";

    document.getElementById('customerItems+').innerHTML = str;

}

function saveData() {
    // itemList = [];
    var print_str = '';
    var total_price = 0;

    for (i = 1; i <= customerItems; i++) {
        localStorage.setItem("ItemName_" + i, document.getElementById('ItemName_' + i).value);
        localStorage.setItem("Quantity_" + i, document.getElementById('Quantity_' + i).value);
        localStorage.setItem("Price_" + i, document.getElementById('Price_' + i).value);
        localStorage.getItem("ItemName_" + i);
        localStorage.getItem("Quantity_" + i);
        localStorage.getItem("Price_" + i);
    }
    if (confirm("Do You Want To Print Bill\nPress a button!") == true) {
        console.log(customerId);
        print_str += "<h2>CustomerId : " + localStorage.getItem("customerId") + " </h2>";
        print_str += "<h2>customerName : " + localStorage.getItem("customerName") + " </h2>";
        print_str += "<h2>customerNumber : " + localStorage.getItem("customerNumber") + " </h2>";
        print_str += "<div style = 'display : flex'><p style='margin:20px'>Item </p><p style='margin:20px'> QTY   </p>  <p style='margin:20px'>Price </p><p style='margin:20px'>   Total </p></div>";
        print_str += "<label>--------------------------------------------</label>: ";

        for (i = 1; i <= customerItems; i++) {
            var item_price = parseInt(localStorage.getItem("Quantity_" + i)) * parseInt(localStorage.getItem("Price_" + i));
            // item_price += item_price;

            print_str += "<div style='display : flex'><p style='margin:20px'>" + localStorage.getItem("ItemName_" + i) + "</p>" + "<p style='margin:20px'>" + localStorage.getItem("Quantity_" + i) + "</p>" + "<p style='margin:20px'>" + localStorage.getItem("Price_" + i) + " </p>" + "<p style='margin:20px'>" + item_price + "</p>" + "</div>";
            // for (var j in a) {
            //     total += a[j];
            // }
            document.getElementById('bill_details').innerHTML = print_str;
        }
        for (i = 1; i <= customerItems; i++) {
            items_price = parseInt(localStorage.getItem("Quantity_" + i)) * parseInt(localStorage.getItem("Price_" + i));
            debugger;
            // items_price += items_price;
            total_price += parseInt(items_price);
        }
        document.getElementById('total_price').innerHTML = 'Total : ' + total_price;
        tax_price = (parseInt(total_price) * 9) / 100;
        document.getElementById('tax_price').innerHTML = '9 % Tax  : ' + tax_price
        grand_total_price = ((total_price) + (tax_price));
        document.getElementById('grand_total_price').innerHTML = 'Grand Total : ' + grand_total_price;

    } else {
        text = 'Cancel';
    }

}

function apiCall() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users/2');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var responce = JSON.parse(xhr.response);
            console.log(responce);
            console.log(responce.data.first_name);
            document.getElementById('apiDisplay_email').innerText = 'Email : ' + responce.data.email;
            document.getElementById('apiDisplay_fname').innerText = 'First Name : ' + responce.data.first_name;

            document.getElementById('apiDisplay_lname').innerText = 'Last Name : ' + responce.data.last_name;
        } else {
            alert('failed' + xhr.status);
        }
    };
    xhr.send();

}

function onTap() {
    var person = prompt("Please enter your name");
    console.log(person);
    document.getElementById('prompt_display').innerHTML = 'You Have Entered  : ' + person;


}