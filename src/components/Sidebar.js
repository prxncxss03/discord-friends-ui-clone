import { BsPlus} from 'react-icons/bs';
import {  FaDiscord, FaCompass } from 'react-icons/fa';
import { MdOutlineFileDownload } from "react-icons/md";
import arch from '../images/arch.png';
import dog from '../images/dog.jpeg';
import perl from '../images/perl.png';
import spanish from '../images/spanishFlag.png';


export const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen bg-gray-900 m-0
        flex flex-col text-white shadow-lg  w-sicon">

            <SidebarHome icon={<FaDiscord size="30"/>} text={'Home'} />
            <hr className='sidebar-hr'/>
            <SidebarIcon icon={
                <SidebarImg src={dog} alt={"Brown Dog"} classN={"sidebar-full-img"}></SidebarImg>
            } text={'Dog Lovers'}/>
            <SidebarIcon icon={
                <SidebarImg src={arch} alt={"Arch Logo"} classN={"w-7 h-7"}></SidebarImg>
            } text={'Arch Linux Community 😎 '}/>
            <SidebarIcon icon={
                <SidebarImg src={perl} alt={"Camel"} classN={"sidebar-full-img"}></SidebarImg>
            } text={'Perl Fanatics'}/>
            <SidebarIcon icon={
                <SidebarImg src={spanish} alt={"Spanish Flag"} classN={"sidebar-full-img"}></SidebarImg>
            } text={'Aprender Español 🇪🇸'}/>
            <SidebarIcon icon={<BsPlus size="32" />} text={'Add a Server'}/>
            <SidebarIcon icon={<FaCompass size="20" />} text={'Explore Public Servers'}/>
            <hr className='sidebar-hr'/>
            <SidebarIcon icon={<MdOutlineFileDownload size="27" />} text={'Download Apps'} />
           
        </div>
    )
}

function SidebarIcon ({icon, text}) {
    return (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    )

}

const SidebarHome = ({icon, text}) => {
    return (
        <div className="sidebar-home group">
        {icon}
        <span className="sidebar-tooltip group-hover:flex">
            {text}
        </span>
    </div>
    )
}
const SidebarImg = ({classN, src, alt}) => {
    return (
        <img  className={classN} src={src} alt={alt} />
    )
    
}
