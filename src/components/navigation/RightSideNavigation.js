import { Tooltipp } from "../Tooltipp";
import { SidebarShow } from "../../helper/Context";
import { useContext } from "react";

export const RightSideNavigation = () => {
    const {sidebarStatus, setSidebarStatus} = useContext(SidebarShow);
   return (
       <div className={sidebarStatus === true ? "flex-col hidden h-screen sm:flex bg-gray-700" : "flex flex-col h-screen"}>

            <div className="flex justify-end py-3 px-2  shadow-defi">
                <Tooltipp tooltipTitle={'New Group DM'} tooltipPlacement={'bottom'} tooltipChild={
                    <span className="right-icon hidden sm:block">
                        <svg  x="0" y="0"  aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="#B9BBBE" fillRule="evenodd"  d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"></path></svg>
                    </span>
                }></Tooltipp>
                <div className="bg-gray-600 w-1px py-3 mx-2 hidden sm:block"></div>
                <Tooltipp tooltipTitle={'Inbox'} tooltipPlacement={'bottom'} tooltipChild={
                    <span className="right-icon">
                        <svg  x="0" y="0" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="#B9BBBE"></path></svg>
                    </span>
                }></Tooltipp>
                <Tooltipp tooltipTitle={'Help'} tooltipPlacement={'bottom'} tooltipChild={
                    <span className="right-icon hidden lg:block">
                        <svg  x="0" y="0"  aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="#B9BBBE" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path></svg>
                    </span>
                }></Tooltipp>
                
                
            </div>
           <ActiveNows></ActiveNows>
       </div>
   ) 
}



const ActiveNows = () => {
    return (
        <div className="text-white w-350px border-l border-l-gray-600 h-full py-5 px-4 hidden xl:block">
            <span className=" text-xl ">Active Now</span>

            <div className="text-center px-3 mt-8">
                <p>It's quiet for now...</p>
                <p className="text-13px font-normal text-gray-420">When a friend starts an activity-like playing a game or
                    hanging out on voice-we'll show it here!
                </p>
            </div>
        </div>
    )
}