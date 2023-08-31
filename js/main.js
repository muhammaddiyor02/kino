var elList = document.querySelector('.list')
var elSelYear = document.querySelector('.year')
var elSelReyting = document.querySelector('.reyting')


var kino = movies.slice(0,200)
function addIt(data){
  elList.innerHTML = ''
  data.forEach((item)=>{
var newLi = document.createElement('li')
newLi.innerHTML = `  <div class="card" style="width: 18rem;">
<img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title">${item.Title}</h5>
  <p class="card-text">${item.imdb_rating}</p>
  <p class="card-text">${item.movie_year}</p>

  <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary" target="_blank">whatch movie</a>
</div>
</div>`
elList.appendChild(newLi)

})
}addIt(kino)
 


elSelYear.addEventListener('change',()=>{

  elList.innerHTML = ''

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