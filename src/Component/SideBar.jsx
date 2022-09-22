import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faWrench, faGaugeHigh, faUsers, faP, faChartArea, faTable, faPager } from '@fortawesome/free-solid-svg-icons'
function SideBar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <br /><br />
            {/* <!-- Sidebar - Brand --> */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">TEACHER & STUDENT MANAGEMENT</div>
            </a>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider my-1" />
            

            <br />
            <li class="nav-item active">
                <Link class="nav-link" to="/Teachers">
                    <FontAwesomeIcon icon={faUsers} />
                    <span> Teachers</span></Link>
            </li>

            <hr class="sidebar-divider" />

            <li class="nav-item active">
                <Link class="nav-link" to="/students">
                <FontAwesomeIcon icon={faUsers} />
                    <span> Students</span></Link>
            </li>

            <hr class="sidebar-divider" />

            <li class="nav-item active">
                <Link class="nav-link" to="/ats">
                <FontAwesomeIcon icon={faUsers} />
                    <span> Assign Teacher to Students</span></Link>
            </li>

            <hr class="sidebar-divider" />

            <li class="nav-item active">
                <Link class="nav-link" to="/act">
                <FontAwesomeIcon icon={faUsers} />
                    <span> Assign or Change Teacher</span></Link>
            </li>

        </ul>
    )
}

export default SideBar;