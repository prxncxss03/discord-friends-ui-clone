import { Sidebar } from './components/Sidebar';
import { MainSidebar } from './components/mainSideBar/MainSidebar';
import { Navigation } from './components/navigation/Navigation';


function App() {
  return (
    <div className="App font-radio font-bold flex w-full  bg-slate-400 justify-between">
      <MainSidebar></MainSidebar>
      <Navigation></Navigation>
      <Sidebar></Sidebar> 
    </div>
  );
}

export default App;
