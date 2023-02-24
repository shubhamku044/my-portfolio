import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home, Blog, Contact } from './pages';

function App() {
  return (
    <div className="px-4 py-4">
      <Router>
        <Header />
        <main className="max-w-3xl px-4 sm:px-10 mx-auto mt-24 mb-16 min-h-[90vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
