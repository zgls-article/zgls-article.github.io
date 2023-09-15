// import React from 'react';
// import ReactDOM from 'react-dom';
// import React from 'react';
// import React, { useState } from 'react';

function Catogary(){
  // let [fileName,setFileName] = React.useState('雪映專集介紹');
  let fileName = '雪映專集介紹'
  //通知
  function Notification(){
    console.log(notice)
    let res = notice.map(item=>{
      return(
        <>
          <a className="dropdown-item preview-item" href={item.link?item.link:''}>
            <div className="preview-thumbnail">
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject font-weight-normal mb-1">{item.message}</h6>
            </div>
          </a>
          <div className="dropdown-divider"></div>
        </>
      )
    })
    return(
      <>
        <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <i className="mdi mdi-bell-outline"></i>
                <span className={noticeNew?"count-symbol bg-danger":"count-symbol"}></span> 
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <h6 className="p-3 mb-0">消息</h6>
                <div className="dropdown-divider"></div>
                {res}
              </div>
            </li>
            <li className="nav-item d-none d-lg-block full-screen-link">
            <a className="nav-link">
              <div className="mdi mdi-fullscreen" id="fullscreen-button">全屏阅读</div>
            </a>
      </li>
      </>
    )
  }
  ReactDOM.render(<Notification/>,document.querySelector('#navbar-right'))
  function Content(){
    return(
      <>
        <iframe id="iframeBody" src={"./source/"+fileName+'.html'} width="100%" height='1000px' style={{verticalAlign:'bottom'}} frameborder="0"></iframe>
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
       return(<div className={"collapse ui-basic"+index}>
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"  onClick={()=>setFileName(item2.name)}> <a className="nav-link" href="">{item2.name}</a></li>
          </ul>
        </div>)
      }
    })
    return (
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="collapse" href={".ui-basic"+index} aria-expanded="false" aria-controls="ui-basic">
          <span className="menu-title">{name}</span>
          {item.sub.length>0?<i className="menu-arrow"></i>:''}
          <i className="mdi mdi-book-open-variant menu-icon"></i>
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




