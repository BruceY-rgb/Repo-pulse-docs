import { useState, useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { SearchDialog } from './components/SearchDialog';
import './App.css';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onSearchClick={() => setIsSearchOpen(true)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Layout */}
      <div className="flex pt-14">
        {/* Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Content Area */}
        <main 
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? 'ml-72' : 'ml-0'
          }`}
        >
          <Content activeSection={activeSection} />
        </main>
      </div>

      {/* Search Dialog */}
      <SearchDialog 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSectionChange={setActiveSection}
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
