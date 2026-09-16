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
    const clean = currentPath.replace(/\/+$/, '') || '/';

    if (clean === '/' || clean === '') {
      return <HomePage />;
    }
    if (clean === '/about' || clean.endsWith('/about')) {
      return <AboutPage />;
    }
    if (clean === '/courses' || clean.endsWith('/courses')) {
      return <CoursesPage />;
    }
    if (clean === '/teachers' || clean.endsWith('/teachers')) {
      return <TeachersPage />;
    }
    if (clean === '/campus' || clean.endsWith('/campus')) {
      return <CampusPage />;
    }
    if (clean === '/events' || clean.endsWith('/events')) {
      return <EventsPage />;
    }
    if (clean.includes('/events/')) {
      return <EventDetailPage />;
    }
    if (clean === '/payment' || clean.endsWith('/payment')) {
      return <PaymentPage />;
    }
    if (clean === '/contact' || clean.endsWith('/contact')) {
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
