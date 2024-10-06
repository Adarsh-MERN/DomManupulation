const cart = document.getElementById("cartNumber")
const allBox = document.getElementById('container')

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    sessionStorage.setItem('ApiData', JSON.stringify(data));
})
.catch(err => console.log(err));
const sessionData = JSON.parse(sessionStorage.getItem('ApiData'));
const itemPerPage = 4;
const calculatePageCount = (totalRecords, ITEM_PER_PAGE) => {
    return Math.ceil(totalRecords / ITEM_PER_PAGE);
}
const calculateRemainder = (totalRecords, recordsPerPage) => {
    return totalRecords - Math.floor(totalRecords / recordsPerPage) * recordsPerPage;
}
// Function to populate Data to Webpage
function loadData(startIndex, lastIndex){
    document.getElementById("container").innerHTML=" "
    for(let i = startIndex; i < lastIndex; i++){
        document.getElementById("container").innerHTML +=  `<div class="box" id="box${i+1}"><img src=${sessionData[i].image} alt="image"/><h4>${sessionData[i].title}</h4><div class="details"><p>${sessionData[i].price}</p><button class="action" id="action${i+1}">Add to Cart</button></div><div class="descriptionNone" id="description${i+1}"><h4>${sessionData[i].description}</h4><p>${sessionData[i].category}</p><p>Ratings : <span>${sessionData[i].rating.rate}</span></p><p>Ratings Count : <span>${sessionData[i].rating.count}</span></p></div></div>`;
    }
    addEventListenerToButton();
}
const pageCount = calculatePageCount(sessionData.length, itemPerPage);
const remainder = calculateRemainder(sessionData.length, itemPerPage);
// Initial population
if (itemPerPage > sessionData.length){
    loadData(0, sessionData.length);
}else{
    loadData(0, itemPerPage);
}
// Add pagination buttons if records need more than 1 page
if(pageCount > 1){
    document.body.innerHTML += `<div class="pagination" id="pagination1"></div>`
    const pageDiv = document.getElementById("pagination1")
    for(let i=0; i < pageCount; i++){
        pageDiv.innerHTML += `<span class="page" onclick="loadData(${i*itemPerPage},${i*itemPerPage+itemPerPage}); ">${parseInt(i + 1)}</span>`
    }
}

// function to Add click EventListner to Button
function addEventListenerToButton(){
    for(let i = 0; i < document.getElementsByClassName('action').length; i++){
        document.getElementsByClassName('action')[i].addEventListener('click', (e)=>{
            let imageUrl = document.getElementById(e.target.id).parentElement.parentElement.childNodes[0].src
            let productName = document.getElementById(e.target.id).parentElement.parentElement.childNodes[1].innerText
            let productPrice = document.getElementById(e.target.id).parentElement.childNodes[0].innerText
            //console.log(imageUrl, productName, productPrice)
            addToCart(productName, productPrice, imageUrl);
        })
    }
}    
addEventListenerToButton();

// saving cart Data
let data = [];
function addToCart(prodName, prodPrice, productImage){
    let obj = {prodName, prodPrice, productImage};
    if(data.length > 0){
        if(JSON.stringify(data).includes(JSON.stringify(obj))==true){
            alert("Item already added to your basket")
        }else{
            data.push(obj)
            document.getElementById("cartNumber").innerText = data.length
        }
    }else{
        data.push(obj);
        document.getElementById("cartNumber").innerText = data.length
    }
}

document.getElementById("cartLogo").addEventListener('click', (e)=>{
    localStorage.setItem('cartData', JSON.stringify(data))
    if(data.length > 0){
        window.open('Cart.html','_blank')
    }else{
        alert('Cart is Empty')
    }
})

