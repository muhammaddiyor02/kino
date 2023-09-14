var elList = document.querySelector('.list')
var elSelYear = document.querySelector('.year')
var elSelReyting = document.querySelector('.reyting')
var elCatagory = document.querySelector('.catagory')
var elInp = document.querySelector('.inp')



var kino = movies.slice(0,200)
var arrCatagory = []
kino.forEach((item)=>{
 if(arrCatagory.includes(item.Categories) == false){
  arrCatagory.push(item.Categories)
 }
})
arrCatagory.forEach(((item)=>{
var newOption = document.createElement('option') 
newOption.textContent = item
newOption.value = item
elCatagory.appendChild(newOption)

}))
function addIt(data){
  elList.innerHTML = ''
  data.forEach((item)=>{
var newLi = document.createElement('li')
newLi.innerHTML = `  <div class="card" style="width: 18rem;">
<img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title">${item.Title}</h5>
  <h5 class="card-title">${item.Categories}</h5>

  <p class="card-text">${item.imdb_rating}</p>
  <p class="card-text">${item.movie_year}</p>

  <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary" target="_blank">whatch movie</a>
</div>
</div>`
elList.appendChild(newLi)

})
}addIt(kino)
 


elSelYear.addEventListener('change',()=>{



 if(elSelYear.value == 'old'){
  addIt( kino.sort((a,b)=> a.movie_year - b.movie_year));
 }else if(elSelYear.value == 'new'){
  addIt(kino.sort((a,b)=> b.movie_year - a.movie_year))
 }else{
  addIt(kino)
 }  

})
elSelReyting.addEventListener('change',()=>{

  elList.innerHTML = ''

 if(elSelReyting.value == 'min'){
  addIt( kino.sort((a,b)=> a.imdb_rating - b.imdb_rating));
 }else if(elSelReyting.value == 'max'){
  addIt(kino.sort((a,b)=> b.imdb_rating - a.imdb_rating))
 }else{
  addIt(kino)
 }  

})
elCatagory.addEventListener('change', ()=>{
if(elCatagory.value == ''){
addIt(kino)
}else{
  addIt(kino.filter((item)=>item.Categories == elCatagory.value));
} 
})

function fnSearch(){
  let newKino = kino.filter((item)=>item.Title.toString().toLowerCase().includes(elInp.value.trim().toLowerCase()))
  newKino.forEach((item)=>{
      item.Title = item.Title.toLowerCase().replace(elInp.value.toLowerCase(), `<mark>${elInp.value}</mark>`)
  })
  addIt(kino.filter((item)=>item.Title.toString().toLowerCase().includes(elInp.value.trim().toLowerCase()) == true))
}