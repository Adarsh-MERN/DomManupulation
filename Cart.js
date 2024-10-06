let localStorageData = JSON.parse(localStorage.getItem('cartData'))
//console.log(localStorageData)
function populateData(){
    for(i=0;i<localStorageData.length;i++){
        document.getElementById('cartpageContainer').innerHTML +=`<div = class="itemDiv" id="itemDiv${i+1}"><div><button class="removeBtn" id="removeBtn${i+1}">Remove</button></div><div><img src="${localStorageData[i].productImage}" alt="Product Image" id="image${i+1}"></div><div><p id="productName${i+1}">${localStorageData[i].prodName}</p></div><div><button class="btnAdd" id="addBtn${i+1}">+</button><span class="increase" id="qty${i+1}">1</span><button class="btnSub" id="subBtn${i+1}">-</button></div><div><p class="price" id="price${i+1}" data-initialprice=${localStorageData[i].prodPrice}>${localStorageData[i].prodPrice}</p></div></div>`
    }
    for(i = 0; i < document.getElementsByClassName('btnAdd').length; i++){
        document.getElementsByClassName('removeBtn')[i].addEventListener("click", (e)=>{
            let productImage = document.getElementById(e.target.id).parentElement.nextElementSibling.childNodes[0].src
            let prodName = document.getElementById(e.target.id).parentElement.nextElementSibling.nextElementSibling.childNodes[0].innerText
            let prodPrice = document.getElementById(e.target.id).parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].innerText
            let obj= {prodName, prodPrice, productImage}
            localStorageData = JSON.parse(JSON.stringify(localStorageData).replace(JSON.stringify(obj)+',',''))
            document.getElementById('cartpageContainer').innerHTML=" "
            populateData()        
        })
        document.getElementsByClassName('btnAdd')[i].addEventListener("click", (e)=>{
            let qtyId = document.getElementById(e.target.id).parentElement.childNodes[1].id
            let price = document.getElementById(e.target.id).parentElement.nextElementSibling.childNodes[0].dataset.initialprice
            let pricediv = document.getElementById(e.target.id).parentElement.nextElementSibling.childNodes[0].id
            increaseQty(qtyId, price, pricediv)
        })
        document.getElementsByClassName('btnSub')[i].addEventListener("click", (e)=>{
            let qtyId = document.getElementById(e.target.id).parentElement.childNodes[1].id
            let price = document.getElementById(e.target.id).parentElement.nextElementSibling.childNodes[0].dataset.initialprice
            let pricediv = document.getElementById(e.target.id).parentElement.nextElementSibling.childNodes[0].id
            decreaseQty(qtyId, price, pricediv)
        })
    }
}
populateData()

function increaseQty(qtyId, price, pricediv){
    let qty = Number(document.getElementById(qtyId).innerText)
    let totalprice;
    if(qty < 10){
        qty++
        totalprice = price * qty
        document.getElementById(qtyId).innerText = qty
        document.getElementById(pricediv).innerText = Math.round(totalprice*100)/100 
    }else{
        alert("maximum value Reached")
    }
}
function decreaseQty(qtyId, price, pricediv){
    let qty = Number(document.getElementById(qtyId).innerText)
    let totalprice;
    if(qty > 1){
        qty--
        totalprice = price * qty
        document.getElementById(qtyId).innerText = qty
        document.getElementById(pricediv).innerText = Math.round(totalprice*100)/100
    }else{
        alert("Minimum value Reached")
    }
}

let data = []
document.getElementById('checkOut').addEventListener('click', (e)=>{
    for(i = 0; i < document.getElementById('cartpageContainer').childElementCount; i++){
        let prodName = document.getElementById(`productName${i+1}`).innerText
        let prodPrice = document.getElementById(`price${i+1}`).innerText
        let prodCount = document.getElementById(`qty${i+1}`).innerText
        let prodImage = document.getElementById(`image${i+1}`).src
        let obj = {prodName, prodPrice, prodCount, prodImage}
        data.push(obj)
    }
    console.log(data)
    localStorage.setItem('finalList', JSON.stringify(data))
    localStorage.removeItem('cartData')
    if(data.length>0){
        window.open('Checkout.html','_blank')
    }    
})

