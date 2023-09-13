
let catogary = `
<li class="nav-item">
<a class="nav-link" href="index.html">
  <span class="menu-title">雪映全集介绍</span>
  <i class="mdi mdi-home menu-icon"></i>
</a>
</li>`

directory.map((item,index) =>{
    let name = item.book
    catogary += `<li class="nav-item">
    <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic${index}" aria-expanded="false" aria-controls="ui-basic">
      <span class="menu-title">${name}</span>
      <i class="menu-arrow"></i>
      <i class="mdi mdi-book-open-variant menu-icon"></i>
    </a>`

    let subBook = item.sub
    subBook.map(item2=>{
        // name,fileID
        if(item2){
            catogary += `<div class="collapse" id="ui-basic${index}">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="${item2.fileID}">${item2.name}</a></li>
            </ul>
          </div>`
        }
    })


    catogary += `</li>`
})

document.querySelector('#nav').innerHTML = catogary

