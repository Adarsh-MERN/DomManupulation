let userData = JSON.parse(localStorage.getItem('userData'))
console.log(userData)
let finalData = JSON.parse(localStorage.getItem('finalList'))
console.log(finalData)
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

function populateData(){
    document.getElementById('thankyou-container').innerHTML += `<h1>Order Confirmation</h1><p>Order ID : <span class="info" id="orderId">OID26548694</span></p><p>Order Date : <span class="info" id="orderDate">${currentDate}</span></p><p>First Name : <span class="info" id="firstName">${userData[0].firstName}</span></p><p>Middle Name : <span class="info" id="middleName">${userData[0]?.middleName}</span></p><p>Last Name : <span class="info" id="lastName">${userData[0].lastName}</span></p><p>Phone No. : <span class="info" id="PhoneNo">${userData[0].phone}</span></p><p>Address : <span class="info" id="address">${userData[0].address}</span></p>`
    for(i=0;i<finalData.length;i++){
        document.getElementById('thankyou-container').innerHTML += `<div class="itemContainer" id="itemContainer"><div class="itemDiv" id="itemDiv${i+1}"><div><img src="${finalData[i].prodImage}" alt="Product Image" id="image${i+1}"></div><div><p id="prductName${i+1}">${finalData[i].prodName}</p></div><div><p id="productCount${i+1}">${finalData[i].prodCount}</p></div><div><p id="price${i+1}">${finalData[i].prodPrice}</p></div></div></div>`
    }
}
populateData();