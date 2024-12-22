import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { MatrixPage } from './pages/MatrixPage';
import { Documentation } from './pages/Documentation';
import { About } from './pages/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matrix" element={<MatrixPage />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
