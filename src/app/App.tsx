import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ManageNews from "./pages/admin/ManageNews";
import ManageEvents from "./pages/admin/ManageEvents";
import ManageDocuments from "./pages/admin/ManageDocuments";
import ManageAnnouncements from "./pages/admin/ManageAnnouncements";
import ManageMessages from "./pages/admin/ManageMessages";
import DatabaseManager from "./pages/admin/DatabaseManager";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<NewsDetail />} />
            <Route path="documents" element={<Documents />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/news"
            element={
              <ProtectedRoute>
                <ManageNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/events"
            element={
              <ProtectedRoute>
                <ManageEvents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/documents"
            element={
              <ProtectedRoute>
                <ManageDocuments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/announcements"
            element={
              <ProtectedRoute>
                <ManageAnnouncements />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute>
                <ManageMessages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/database"
            element={
              <ProtectedRoute>
                <DatabaseManager />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Toaster position="top-right" richColors />
    </>
  );
}
