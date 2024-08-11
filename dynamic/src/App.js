import DynamicNav from './Components/DynamicNav';
import './App.css';
import MainDynamicContent from './Components/MainDynamicContent'
import DynamicExperience from './Components/DynamicExperience';
import DynamicCard from './Components/DynamicCard';
import DynamicExperienceDescription from './Components/DynamicExperienceDescription';
import Test from './Components/Test';

function App() {
  return (
    <div className="App px-16">
        <DynamicNav/>
        <MainDynamicContent/>
        <DynamicExperience/>
        <DynamicCard/>
        
        <DynamicExperienceDescription/>
        {/* <Test/> */}
    </div>
  );
}

export default App;
