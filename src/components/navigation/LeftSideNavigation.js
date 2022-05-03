export const LeftSideNavigation = () => {
    return (
        <div className="flex font-medium items-center">
            <FriendsText></FriendsText>
            <TabsGroup/>
            <AddFriendTab></AddFriendTab>
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
        <div className="flex border-r px-2">
            <span>
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="#8E9297" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" fill="none"></path></g></svg>
            </span>
            <span className="text-white ml-2">Friends</span>
        </div>
    )
}

const TabsGroup = () => {
    return (
        <div >
            <IndivGrayTabs btnText={'Online'}/>
            <IndivGrayTabs btnText={'All'}/>
            <IndivGrayTabs btnText={'Pending'}/>
            <IndivGrayTabs btnText={'Blocked'}/>
        </div>
    )
}

// Indiv Gray Tabs

const IndivGrayTabs = ({btnText}) => {
    return (
        <button className="text-white mx-2">
            {btnText}
        </button>
    )
}

const AddFriendTab = () => {
    return (
        <button className="bg-green-400 p-2 text-xs font-semibold text-white rounded-md">
            Add Friend
        </button>
    )
}