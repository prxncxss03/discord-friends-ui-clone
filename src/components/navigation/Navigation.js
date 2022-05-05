import { LeftSideNavigation  } from "./LeftSideNavigation";
import { RightSideNavigation } from "./RightSideNavigation";


export const Navigation = () => {
    return (
        <div className="bg-gray-700 py-3 flex w-full shadow-defi">
            <LeftSideNavigation></LeftSideNavigation>
            <RightSideNavigation></RightSideNavigation>
        </div>
    )
}






