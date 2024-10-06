let data = [];
function userInput(){
    let firstName = document.getElementById('firstName').value
    let middleName = document.getElementById('middleName').value
    let lastName = document.getElementById('lastName').value
    let phone = document.getElementById('phone').value
    let address = document.getElementById('address').value
    let obj ={firstName,middleName,lastName,phone,address}
    data.push(obj)
    localStorage.setItem('userData',JSON.stringify(data))
}
document.getElementById('orderBtn').addEventListener('click', (e)=>{
    const re = /[0-9]{10}/;
    if(document.getElementById('phone').value.match(re)){
        userInput()
        alert('Form Submited Succesfuly')
        window.open('Thankyou.html','_blank')
    }else{
        alert('Invalid Phone Number')
    }
})

