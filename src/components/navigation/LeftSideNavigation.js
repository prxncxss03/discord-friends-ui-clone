import { useState } from "react";
import pending from '../../images/pending.png';
import blocked from '../../images/blocked.png';
import online from '../../images/online.png';
import offline from '../../images/offline.png';
import message from '../../images/message.png';
import more from '../../images/more.png';
import { PersonsAttributes } from "../mainSideBar/PersonsAttributes";
import './tabs.css';
import { formatMuiErrorMessage } from "@mui/utils";



export const LeftSideNavigation = () => {
    const [searching, setSearching] = useState("")
    const [toggleTab, settoggleTab] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [count, setCount] = useState(PersonsAttributes.length);
    const handleToggle = (index) => {
        settoggleTab(index);
    }
    return (
        <div className="flex flex-col font-medium w-full">
            <div className="flex  shadow-defi  py-2 items-center">
                <FriendsText></FriendsText>
                <div className="bg-gray-600 w-1px py-3"></div>
                <div className="flex items-center ml-2">
                    <IndivGrayTabs classTab = {toggleTab === 1 ? "tabs-panel-active " : "tabs-panel-inactive " } onClicky={() => handleToggle(1)} btnText={'Online'}/>
                    <IndivGrayTabs classTab = {toggleTab === 2 ? "tabs-panel-active " : "tabs-panel-inactive" } onClicky={() => handleToggle(2)} btnText={'All'}/>
                    <IndivGrayTabs classTab = {toggleTab === 3 ? "tabs-panel-active " : "tabs-panel-inactive " } onClicky={() => handleToggle(3)} btnText={'Pending'}/>
                    <IndivGrayTabs classTab = {toggleTab === 4 ? "tabs-panel-active " : "tabs-panel-inactive " } onClicky={() => handleToggle(4)} btnText={'Blocked'}/>
                </div>
                <AddFriendTab></AddFriendTab>
            </div>
            
            <PanelTabs panelClass={toggleTab === 1 ? "panel-active" : "panel-inactive"} panelImage={online}
                panelText={"No one's around to play with Wumpus"} >

            </PanelTabs>
            <PanelTabs panelClass={toggleTab === 3 ? "panel-active" : "panel-inactive" } panelImage={pending}
             panelText={"There are no pending friend requests. Here's Wumpus for now."} >  
            </PanelTabs>
            <PanelTabs panelClass={toggleTab === 4 ? "panel-active" : "panel-inactive" } panelImage={blocked}
             panelText={"You can't unblock the Wumpus."} >
            </PanelTabs>
            
            {/* search bar */}
          <div className={toggleTab === 2 ? "panel-active-all relative mx-5 my-4" : "panel-inactive" }>

            <div className="absolute top-0 w-full ">
                <div className="mx-1 flex bg-gray-900 p-1 justify-center items-center rounded-sm w-full">
                    <input type="text" placeholder="Search" onChange={(event) => {setSearchTerm(event.target.value)
                    }} className="bg-gray-900  text-sm text-gray-400 outline-none
                    placeholder:text-xs font-bold placeholder:text-gray-350 py-1 px-2 w-full rounded-sm"/>
                    <span className="">
                        <svg className = {searchTerm.length !== 0 ? "hidden ease-in-out 800ms" : "flex ease-in-out 800ms"} aria-label="Search" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path fill="#B9BBBE" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"></path></svg>
                        <svg className={searchTerm.length !== 0 ? "flex ease-in-out 800ms" : "hidden ease-in-out 800ms "} aria-label="Clear" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="#B9BBBE" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
                    </span>
                </div>
                <span className="flex items-end h-full">
                    <p className="text-13px font-semibold mt-5 ml-2 mb-4">ALL FRIENDS - {count}</p>
                </span>
            </div>
            
            
           
            { PersonsAttributes.filter((value) => {
                
                if (searchTerm === ""){
                    
                    return value
                } else if (value.text.toLowerCase().includes(searchTerm.toLowerCase())){
                    
                    return value
                }
                
            }

            ).map((personI) => {
            
            return (
                <span key={personI.id} className="group rounded-md  flex items-center justify-center cursor-pointer hover:bg-gray-650  ease-in-out  w-full group " >
                    <span  className="flex justify-between  items-center py-3 w-97 border-t border-zinc-600 h-full" >
                        <div className='flex justify-center items-center'>
                            <div className="profile relative z-0">
                                <img src={personI.src} alt={personI.alt} className="avatar-wrapper w-8 h-8 flex justify-center rounded-full">
                    
                                </img>
                                <div className="offline-wrapper absolute top-5 left-5 bg-gray-800 rounded-lg w-4 h-4 flex justify-center items-center">
                                        <img className="w-10px h-10px" src={offline} alt="offline symbol" />
                                    </div>
                    
                            </div>
                            <div className="flex flex-col  justify-center ml-3">
                                <div><span className='group-hover:text-gray-400 text-white text-sm font-semibold'>{personI.text}</span><span className="group-hover:inline-flex user-num text-sm font-normal">{personI.number}</span></div>
                                <span className="text-sm font-normal">{personI.status}</span>
                            </div>
                        </div>
                    
                        <div className="">
                            <button className="bg-gray-800 group-hover:bg-gray-900 p-2 rounded-full mr-3">
                                <img className="w-5" src={message} alt="" />
                            </button>
                            <button className="bg-gray-800 group-hover:bg-gray-900 p-2 rounded-full">
                                <img className="w-5" src={more} alt="" />
                            </button>
                        </div>
                    
                    </span>
                    
                </span>
            )
            }
            )
            
            }
           
          </div>
        
        
        </div>
                   
    )
}

// Parts

// Friends Not Clickable
// Tabs Group
    // Indiv Gray Tabs
    // Add Friend Tab


const FriendsText = () => {
    return (
        <div className="flex  justify-center py-1 items-center px-4">
            <span>
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="#8E9297" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" fill="none"></path></g></svg>
            </span>
            <span className="text-white text-15px ml-2">Friends</span>
        </div>
    )
}

// Indiv Gray Tabs

const IndivGrayTabs = ({btnText,onClicky,classTab}) => {
    return (
        <button onClick={onClicky} className={classTab}>
            {btnText}
        </button>
    )
}

const AddFriendTab = () => {
    return (
        <button className="bg-green-500 flex items-center px-2 text-15px  text-white rounded-md">
            Add Friend
        </button>
    )
}

// Panel Tabs

const PanelTabs = ({panelText, panelImage, panelClass}) => {
    return (
        <div className={panelClass}>
            <span className="mb-12">
                <img src={panelImage} alt=""/>
            </span>
            <p>{panelText}</p>
        </div>
    )
}
// All Panel
// const AllTop = () => {
//     return (
//         <div className="w-full p-10px shadow-defi border-b-1 border-b-gray-900 shadow-def ">
//             <div className="w-full h-full ">
//                 <input type="text" placeholder="Find or start a conversation" className="bg-gray-900 text-sm text-gray-400 outline-none
//                 placeholder:text-xs font-bold placeholder:text-gray-350 py-1 px-2 w-full rounded-sm"/>
//             </div>
//         </div>
//     )
// }
