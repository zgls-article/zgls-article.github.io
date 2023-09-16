function Catogary(){
  let [fileName,setFileName] = React.useState('雪映專集介紹');
  let [folderName,setFolderName] = React.useState('雪映專集介紹');
  let [height,setHeight] = React.useState("1000px");
  // let fileName = '雪映專集介紹'
  function Content(){
    // let height = document.querySelector('#nav').clientHeight
    return(
      <>
        <iframe id="iframeBody" loading="lazy" onload={() => {
          // 根据内部网页高度自适应
                    const obj = ReactDOM.findDOMNode();
                    setHeight(obj.contentWindow.document.body.scrollHeight + 'px');
                  }}
                    src={"./source/"+folderName+'/'+fileName+'.html'} height={height} width="100%" style={{verticalAlign:'bottom'}}>
        <p>你的浏览器不支持 iframe。</p>
        </iframe>
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
            <li className="nav-item"  onClick={()=>{
              setFileName(item2.name);
              setFolderName(item.book);
            }
            }>
              <a className="nav-link">{item2.name}</a>
            </li>
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






