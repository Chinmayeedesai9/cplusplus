// App.jsx or routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import References from "./pages/References";
import Articles from "./pages/Articles";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReferenceDetail from "./pages/ReferenceDetail";
import DiscussionDetail from "./pages/DiscussionDetail";
import ArticleDetail from "./pages/ArticleDetail";
import TopicArticles from "./pages/TopicArticles"; // Create this later
import TutorialDetail from "./pages/TutorialDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/:title" element={<TutorialDetail />} />
        <Route path="/references" element={<References />} />
        <Route path="/reference/:slug" element={<ReferenceDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/articles/topic/:topic" element={<TopicArticles />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:topicSlug" element={<DiscussionDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
