const allBox = document.getElementById('container')
//console.log(allBox)
// const page = document.getElementById('navigator')
// console.log(page);

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    sessionStorage.setItem('ApiData', JSON.stringify(data));
    
    
    console.log(sessionData);
    
    /*for(let i = 0; i < data.length; i++){
        allBox.innerHTML += `<div class="box" id="box${i+1}"><img src=${data[i].image} alt="image"/><h4>${data[i].title}</h4><div class="details"><p>${data[i].price}</p><button class="action" id="action${i+1}">Show Details</button></div><div class="descriptionNone" id="description${i+1}"><h4>${data[i].description}</h4><p>${data[i].category}</p><p>Ratings:<span>${data[i].rating.rate}</span></p><p>Ratings Count:<span>${data[i].rating.count}</span></p></div></div>`;
        
        /*const childDiv = document.createElement('div')
        childDiv.class = "box"
        const childImg = document.createElement("img")
        childImg.src = data[i].image
        childImg.alt = "Image"
        childImg.height = 100 + "px"
        childImg.width = 100 + "px"
        const h3 = document.createElement('h3')
        h3.innerHTML= data[i].title
        const p = document.createElement('p')
        p.innerHTML = data[i].price
        childDiv.appendChild(childImg)
        childDiv.appendChild(h3)
        childDiv.appendChild(p)
        allBox.appendChild(childDiv)
    }*/
    /*const buttonClasss = document.getElementsByClassName('action');
    //console.log(buttonClasss);
    for(let i = 0; i < buttonClasss.length; i++){
        buttonClasss[i].addEventListener('click', (e)=>{
            handleToggel(document.getElementById(e.target.id).parentElement.nextElementSibling.id, e.target.id);
            //console.log(e.target.closest("div"));
            //const findDiv = document.getElementById(e.target.id);
            //console.log(findDiv);
            //const findId = document.getElementById(e.target.id).parentElement.nextElementSibling.id;
            //console.log(findId);
        })
    }
    function handleToggel(dId, bId){
        const descriptionId = document.getElementById(dId);
        const buttonId = document.getElementById(bId);
         /*descriptionId.classList.toggle('descriptionNone');
         descriptionId.classList.toggle('descriptionDisplay');
         if(buttonId.innerHTML =='Show Details'){
             buttonId.innerHTML = 'Show Less';
         }else{
             buttonId.innerHTML = 'Show Details';
         }
         if(buttonId.innerHTML == 'Show Details'){
             descriptionId.classList.add('descriptionDisplay')
             descriptionId.classList.remove('descriptionNone')
             buttonId.innerHTML = 'Show Less'
         }else{
             descriptionId.classList.add('descriptionNone')
             descriptionId.classList.remove('descriptionDisplay')
             buttonId.innerHTML = 'Show Details'
         }
    }*/
})
.catch(err => console.log(err));
function getSessionData(){
    const sessionData = JSON.parse(sessionStorage.getItem('ApiData'));
    return sessionData;    
}
const itemPerPage = 4;
    loadData(getSessionData(), 1);
    function loadData(sData, num){
        //console.log(sData)
        //console.log(typeof(num));
        //allBox.innerHTML=null;
        //console.log(allBox)
        for(let i = 0; i < sData.length; i++){
            if((i >= (num-1) * itemPerPage) && (i < num * itemPerPage)){
                console.log(i);
                allBox.innerHTML +=  `<div class="box" id="box${i+1}"><img src=${sData[i].image} alt="image"/><h4>${sData[i].title}</h4><div class="details"><p>${sData[i].price}</p><button class="action" id="action${i+1}">Show Details</button></div><div class="descriptionNone" id="description${i+1}"><h4>${sData[i].description}</h4><p>${sData[i].category}</p><p>Ratings : <span>${sData[i].rating.rate}</span></p><p>Ratings Count : <span>${sData[i].rating.count}</span></p></div></div>`;
            }
        }
    }
    document.body.innerHTML += `<div class="pagination" id="pagination1"></div>`
    const pageDiv = document.getElementById("pagination1")
    for(let i=0; i < getSessionData().length/itemPerPage; i++){
        pageDiv.innerHTML += `<span class="page" id="page${i+1}">${i+1}</span>`
    }
    const spanClass = document.getElementsByClassName("page")
    //console.log(spanClass);
    for(let i = 0; i < spanClass.length; i++){
        spanClass[i].addEventListener('click',(e)=>{
            loadData(getSessionData(), Number(e.target.innerHTML))
        })
    }
    const buttonClasss = document.getElementsByClassName('action');
    //console.log(buttonClasss);
    for(let i = 0; i < buttonClasss.length; i++){
        buttonClasss[i].addEventListener('click', (e)=>{
            handleToggel(document.getElementById(e.target.id).parentElement.nextElementSibling.id, e.target.id);
            //console.log(e.target.closest("div"));
            //const findDiv = document.getElementById(e.target.id);
            //console.log(findDiv);
            //const findId = document.getElementById(e.target.id).parentElement.nextElementSibling.id;
            //console.log(findId);
        })
    }
    function handleToggel(dId, bId){
        const descriptionId = document.getElementById(dId);
        const buttonId = document.getElementById(bId);
         /*descriptionId.classList.toggle('descriptionNone');
         descriptionId.classList.toggle('descriptionDisplay');
         if(buttonId.innerHTML =='Show Details'){
             buttonId.innerHTML = 'Show Less';
         }else{
             buttonId.innerHTML = 'Show Details';
         }*/
         if(buttonId.innerHTML == 'Show Details'){
             descriptionId.classList.add('descriptionDisplay')
             descriptionId.classList.remove('descriptionNone')
             buttonId.innerHTML = 'Show Less'
         }else{
             descriptionId.classList.add('descriptionNone')
             descriptionId.classList.remove('descriptionDisplay')
             buttonId.innerHTML = 'Show Details'
         }
    }