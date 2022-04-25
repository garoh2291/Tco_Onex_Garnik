import './App.css';
import SmartServicesSection from './components/smart_services_section';
import { UseHelper } from './components/use_helper';

function App() {
  return (
    <div className="wrapper">
      <UseHelper />
      <SmartServicesSection />
    </div>
  );
}

export default App;
