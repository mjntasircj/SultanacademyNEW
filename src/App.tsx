import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { TeachersPage } from './pages/TeachersPage';
import { CampusPage } from './pages/CampusPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { PaymentPage } from './pages/PaymentPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/courses') {
      return <CoursesPage />;
    }
    if (currentPath === '/teachers') {
      return <TeachersPage />;
    }
    if (currentPath === '/campus') {
      return <CampusPage />;
    }
    if (currentPath === '/events') {
      return <EventsPage />;
    }
    if (currentPath.startsWith('/events/')) {
      return <EventDetailPage />;
    }
    if (currentPath === '/payment') {
      return <PaymentPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Default fallback
    return <HomePage />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-rose-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
