import { LeftSideNavigation  } from "./LeftSideNavigation";
import { RightSideNavigation } from "./RightSideNavigation";


export const Navigation = () => {
    return (
        <div className="bg-gray-700 flex w-full h-full">

            <LeftSideNavigation></LeftSideNavigation>
            <RightSideNavigation></RightSideNavigation>
        </div>
    )
}






