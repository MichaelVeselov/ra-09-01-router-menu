import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { DriftPage } from './pages/DriftPage';
import { ForzaPage } from './pages/ForzaPage';
import { TimeAttackPage } from './pages/TimeattackPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='drift' element={<DriftPage />} />
          <Route path='timeattack' element={<TimeAttackPage />} />
          <Route path='forza' element={<ForzaPage />} />
          <Route
            path='forza-karting'
            element={<Navigate to='/forza' replace />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
