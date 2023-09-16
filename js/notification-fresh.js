//通知
function Notification(){
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
    <li className="nav-item  d-none d-lg-block ">
        <a className="nav-link" onClick={()=>{setFileName='search';setFolderName='search'}}>
        <div className="mdi mdi-magnify">搜索信息</div>
        </a>
    </li>

    </>
)
}
ReactDOM.render(<Notification/>,document.querySelector('#navbar-right'))