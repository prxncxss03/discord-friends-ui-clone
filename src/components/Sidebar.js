import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 bg-gray-900 m-0
        flex flex-col text-white shadow-lg">

            <SidebarIcon icon={<FaFire size="30"/>} text={'Fire 🔥'} />
            <SidebarIcon icon={<FaPoo size="20"/>} text={'Poop 💩'}/>
            <SidebarIcon icon={<BsPlus size="28" />} text={'Add 📇'}/>
            <SidebarIcon icon={<BsFillLightningFill size="22" />} text={'Storm ⚡️'} />
           
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
