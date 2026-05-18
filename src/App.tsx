import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { GamePreview } from './pages/GamePreview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<GamePreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;