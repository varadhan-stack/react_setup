import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Projects from "./pages/projects.jsx";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Notfound from "./pages/404";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

// function HomePages() {
//   return <div>About Page</div>;
// }

// function AboutPage() {
//   return <div>About Page</div>;
// }

// function ContactPage() {
//   return <div>Contact Page</div>;
// }

export default App;