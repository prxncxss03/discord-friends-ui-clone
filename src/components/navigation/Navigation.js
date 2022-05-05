import { LeftSideNavigation  } from "./LeftSideNavigation";
import { RightSideNavigation } from "./RightSideNavigation";


export const Navigation = () => {
    return (
        <div className="bg-gray-700 h-screen flex w-full ">

            <LeftSideNavigation></LeftSideNavigation>
            <RightSideNavigation></RightSideNavigation>
        </div>
    )
}






