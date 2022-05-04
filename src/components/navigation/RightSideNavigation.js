export const RightSideNavigation = () => {
   return (
       <div>

           <h1>Right Side</h1>
           <ActiveNows></ActiveNows>
       </div>
   ) 
}

const ActiveNows = () => {
    return (
        <div className="text-white w-350px border-l h-full">
            <span>Active Now</span>
            <p>It's quiet for now...</p>
            <p>When a friend starts an activity-like playing a game or
                hanging out on voice-we'll show it here!
            </p>
        </div>
    )
}