
export const Header: React.FC = () => {
    return (
        <>
        <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
            <div className="navbar-brand header-logo">
                <a href="index.html" className="b-brand">
                    <div className="b-bg">
                        <i className="feather icon-trending-up"></i>
                    </div>
                    <span className="b-title">Datta Able</span>
                </a>
                <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
            </div>
            <div className="navbar-content scroll-div">
                <ul className="nav pcoded-inner-navbar">
                    <li className="nav-item pcoded-menu-caption">
                        <label>Navigation</label>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                        <a href="index.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                    </li>
                    <li className="nav-item pcoded-menu-caption">
                        <label>UI Element</label>
                    </li>
                    <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                        <a href="javascript:" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Components</span></a>
                        <ul className="pcoded-submenu">
                            <li className=""><a href="bc_button.html" className="">Button</a></li>
                            <li className=""><a href="bc_badges.html" className="">Badges</a></li>
                            <li className=""><a href="bc_breadcrumb-pagination.html" className="">Breadcrumb & paggination</a></li>
                            <li className=""><a href="bc_collapse.html" className="">Collapse</a></li>
                            <li className=""><a href="bc_tabs.html" className="">Tabs & pills</a></li>
                            <li className=""><a href="bc_typography.html" className="">Typography</a></li>


                            <li className=""><a href="icon-feather.html" className="">Feather<span className="pcoded-badge label label-danger">NEW</span></a></li>
                        </ul>
                    </li>
                    <li className="nav-item pcoded-menu-caption">
                        <label>Forms & table</label>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                        <a href="form_elements.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Form elements</span></a>
                    </li>
                    <li data-username="Table bootstrap datatable footable" className="nav-item">
                        <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">Table</span></a>
                    </li>
                    <li className="nav-item pcoded-menu-caption">
                        <label>Chart & Maps</label>
                    </li>
                    <li data-username="Charts Morris" className="nav-item"><a href="chart-morris.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span><span className="pcoded-mtext">Chart</span></a></li>
                    <li data-username="Maps Google" className="nav-item"><a href="map-google.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-map"></i></span><span className="pcoded-mtext">Maps</span></a></li>
                    <li className="nav-item pcoded-menu-caption">
                        <label>Pages</label>
                    </li>
                    <li data-username="Authentication Sign up Sign in reset password Change password Personal information profile settings map form subscribe" className="nav-item pcoded-hasmenu">
                        <a href="javascript:" className="nav-link "><span className="pcoded-micon"><i className="feather icon-lock"></i></span><span className="pcoded-mtext">Authentication</span></a>
                        <ul className="pcoded-submenu">
                            <li className=""><a href="auth-signup.html" className="" target="_blank">Sign up</a></li>
                            <li className=""><a href="auth-signin.html" className="" target="_blank">Sign in</a></li>
                        </ul>
                    </li>
                    <li data-username="Sample Page" className="nav-item"><a href="sample-page.html" className="nav-link"><span className="pcoded-micon"><i className="feather icon-sidebar"></i></span><span className="pcoded-mtext">Sample page</span></a></li>
                    <li data-username="Disabled Menu" className="nav-item disabled"><a href="javascript:" className="nav-link"><span className="pcoded-micon"><i className="feather icon-power"></i></span><span className="pcoded-mtext">Disabled menu</span></a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header className="navbar pcoded-header navbar-expand-lg navbar-light px-0">
        <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
            <a href="index.html" className="b-brand">
                   <div className="b-bg">
                       <i className="feather icon-trending-up"></i>
                   </div>
                   <span className="b-title">Datta Able</span>
               </a>
        </div>
        <a className="mobile-menu" id="mobile-header" href="javascript:">
            <i className="feather icon-more-horizontal"></i>
        </a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li><a href="javascript:" className="full-screen" ><i className="feather icon-maximize"></i></a></li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="javascript:">Action</a></li>
                        <li><a className="dropdown-item" href="javascript:">Another action</a></li>
                        <li><a className="dropdown-item" href="javascript:">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="main-search">
                        <div className="input-group">
                            <input type="text" id="m-search" className="form-control" placeholder="Search . . ."/>
                            <a href="javascript:" className="input-group-append search-close">
                                <i className="feather icon-x input-group-text"></i>
                            </a>
                            <span className="input-group-append search-btn btn btn-primary">
                                <i className="feather icon-search input-group-text"></i>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li>
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown"><i className="icon feather icon-bell"></i></a>
                        <div className="dropdown-menu dropdown-menu-right notification">
                            <div className="noti-head">
                                <h6 className="d-inline-block m-b-0">Notifications</h6>
                                <div className="float-right">
                                    <a href="javascript:" className="m-r-10">mark as read</a>
                                    <a href="javascript:">clear all</a>
                                </div>
                            </div>
                            <ul className="noti-body">
                                <li className="n-title">
                                    <p className="m-b-0">NEW</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>New ticket Added</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="n-title">
                                    <p className="m-b-0">EARLIER</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>Prchace New Theme and make payment</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>currently login</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="noti-footer">
                                <a href="javascript:">show all</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown drp-user">
                        <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="icon feather icon-settings"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-notification">
                            <div className="pro-head">
                                <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image"/>
                                <span>John Doe</span>
                                <a href="auth-signin.html" className="dud-logout" title="Logout">
                                    <i className="feather icon-log-out"></i>
                                </a>
                            </div>
                            <ul className="pro-body">
                                <li><a href="javascript:" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li>
                                <li><a href="javascript:" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
                                <li><a href="message.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</a></li>
                                <li><a href="auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </header>
    </>
    )
}