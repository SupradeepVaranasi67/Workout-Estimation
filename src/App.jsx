import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EquipmentSelection from './components/EquipmentSelection';
import MuscleSelection from './components/MuscleSelection';
import WorkoutBuilder from './components/WorkoutBuilder';
import WorkoutExecution from './components/WorkoutExecution';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<EquipmentSelection />} />
          <Route path="/muscles" element={<MuscleSelection />} />
          <Route path="/workout-builder" element={<WorkoutBuilder />} />
          <Route path="/workout-execution" element={<WorkoutExecution />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;