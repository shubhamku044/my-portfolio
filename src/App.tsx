import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Blog, Contact } from './pages';

function App() {
  return (
    <div className="px-8 py-4">
      <Router>
        <Header />
        <main className="mt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
