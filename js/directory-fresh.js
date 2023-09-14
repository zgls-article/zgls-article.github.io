
// let catogary = ''

// directory.map((item,index) =>{
//     let name = item.book
//     catogary += `<li class="nav-item">
//     <a class="nav-link" data-bs-toggle="collapse" href=".ui-basic${index}" aria-expanded="false" aria-controls="ui-basic">
//       <span class="menu-title">${name}</span>
//       ${item.sub.length>0?'<i class="menu-arrow"></i>':''}
//       <i class="mdi mdi-book-open-variant menu-icon"></i>
//     </a>`

//     let subBook = item.sub
//     subBook.map((item2,index2)=>{
//         // name,fileID
//         if(item2 && item2.name){
//             catogary += `<div class="collapse ui-basic${index}">
//             <ul class="nav flex-column sub-menu">
//               <li class="nav-item" onclick="addBody(${item2.name})"> <a class="nav-link" href="">${item2.name}</a></li>
//             </ul>
//           </div>`
//         }
//     })


//     catogary += `</li>`
// })

// document.querySelector('#nav').innerHTML = catogary
// import {useState} from "react"
import React, { useState } from 'react';

function Catogary(){
  let [fileName,setFileName] = useState('雪映專集介紹');
  function Content(){
    return(
      <>
        <iframe src={"./source/"+fileName+'.html'} width="100%" frameborder="0"></iframe>
        <footer class="footer">
          <div class="container-fluid d-flex justify-content-between">
            <span class="text-muted d-block text-center text-sm-start d-sm-inline-block">Made By Daijin 2023</span>
            <span class="text-muted d-block text-center text-sm-start d-sm-inline-block">网站问题请微信联系：KeepNerd</span>
          </div>
        </footer>
      </>
    )
  }
  ReactDOM.render(<Content/>,document.querySelector('#contentBody'))
  let resAll = directory.map((item,index) =>{
    let name = item.book
    let subBook = item.sub
    let resSub = subBook.map((item2)=>{
      // name,fileID
      if(item2 && item2.name){
       return(<div class={"collapse ui-basic"+index}>
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"  onclick={()=>setFileName(item2.name)}> <a class="nav-link" href="">{item2.name}</a></li>
          </ul>
        </div>)
      }
    })
    return (
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href={".ui-basic"+index} aria-expanded="false" aria-controls="ui-basic">
          <span class="menu-title">{name}</span>
          {item.sub.length>0?<i class="menu-arrow"></i>:''}
          <i class="mdi mdi-book-open-variant menu-icon"></i>
        </a>
        {resSub}
      </li>
    )
  })
  
  return(
    <>
      {resAll}
    </>
  )
}
ReactDOM.render(<Catogary/>,document.querySelector('#nav'))


