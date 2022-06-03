import { Sidebar } from './components/Sidebar';
import { MainSidebar } from './components/mainSideBar/MainSidebar';
import { Navigation } from './components/navigation/Navigation';
import {SidebarShow} from './helper/Context';
import { useState } from 'react';


function App() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  return (
    <SidebarShow.Provider value={{sidebarStatus, setSidebarStatus}}>
      <div className="App select-none font-radio font-bold flex w-full h-screen  bg-gray-900 justify-between">
      
        <MainSidebar></MainSidebar>
        <Navigation></Navigation>
      
      <Sidebar></Sidebar> 
      </div>
      </SidebarShow.Provider>
  );
}

export default App;
