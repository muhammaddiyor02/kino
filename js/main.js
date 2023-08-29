var elList = document.querySelector('.list')

var kino = movies.slice(50,200)
kino.forEach((item)=>{
    console.log(item);

var newLi = document.createElement('li')
newLi.innerHTML = `  <div class="card" style="width: 18rem;">
<img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title">${item.Title}</h5>
  <p class="card-text">${item.imdb_rating}</p>
  <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary" target="_blank">whatch movie</a>
</div>
</div>`
elList.appendChild(newLi)

})