import { LeftSideNavigation  } from "./LeftSideNavigation";
import { RightSideNavigation } from "./RightSideNavigation";

export const Navigation = () => {
    return (
        <div className="bg-gray-700 flex ">
            <LeftSideNavigation></LeftSideNavigation>
            <RightSideNavigation></RightSideNavigation>
        </div>
    )
}






