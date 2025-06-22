import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Calculator } from './components/Calculator';
import { History } from './components/History';
import { Guide } from './components/Guide';
import { SEOContent } from './components/SEOContent';
import { Calculation } from './types/calculator';

function App() {
  const [currentView, setCurrentView] = useState('calculator');
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  // Load calculations from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('asphalt-calculations');
    if (saved) {
      try {
        setCalculations(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading saved calculations:', error);
      }
    }
  }, []);

  // Save calculations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('asphalt-calculations', JSON.stringify(calculations));
  }, [calculations]);

  const handleSaveCalculation = (calculation: Calculation) => {
    setCalculations(prev => [calculation, ...prev]);
  };

  const handleDeleteCalculation = (id: string) => {
    if (confirm('Are you sure you want to delete this calculation?')) {
      setCalculations(prev => prev.filter(calc => calc.id !== id));
    }
  };

  const handleLoadCalculation = (calculation: Calculation) => {
    // Switch to calculator view and the calculation data will be loaded there
    setCurrentView('calculator');
    // Note: In a real implementation, you'd pass the calculation data to the Calculator component
    // to pre-populate the form fields
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'calculator':
        return (
          <>
            <SEOContent />
            <Calculator onSaveCalculation={handleSaveCalculation} />
          </>
        );
      case 'history':
        return (
          <History
            calculations={calculations}
            onDeleteCalculation={handleDeleteCalculation}
            onLoadCalculation={handleLoadCalculation}
          />
        );
      case 'guide':
        return <Guide />;
      default:
        return (
          <>
            <SEOContent />
            <Calculator onSaveCalculation={handleSaveCalculation} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main>
        {renderCurrentView()}
      </main>
      
      {/* Footer with SEO-friendly content */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AsphaltCalc Pro</h3>
              <p className="text-slate-300 text-sm">
                Professional asphalt calculator for accurate volume, weight, and cost calculations. 
                Trusted by contractors and DIY enthusiasts nationwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Calculator Tools</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Driveway Calculator</a></li>
                <li><a href="#" className="hover:text-white">Parking Lot Calculator</a></li>
                <li><a href="#" className="hover:text-white">Road Paving Calculator</a></li>
                <li><a href="#" className="hover:text-white">Cost Estimator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Asphalt Guide</a></li>
                <li><a href="#" className="hover:text-white">Thickness Guidelines</a></li>
                <li><a href="#" className="hover:text-white">Cost Factors</a></li>
                <li><a href="#" className="hover:text-white">Installation Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Project Types</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Residential Driveways</a></li>
                <li><a href="#" className="hover:text-white">Commercial Parking</a></li>
                <li><a href="#" className="hover:text-white">Road Construction</a></li>
                <li><a href="#" className="hover:text-white">Repair Projects</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-300 mb-2">
              © 2025 AsphaltCalc Pro. Professional asphalt calculation tools for contractors and DIY projects.
            </p>
            <p className="text-sm text-slate-400">
              Always consult with local professionals for large commercial projects. 
              Calculations are estimates and actual requirements may vary based on local conditions.
            </p>
            <div className="mt-4 text-xs text-slate-500">
              <span>Keywords: asphalt calculator, driveway calculator, parking lot calculator, paving calculator, asphalt cost calculator, hot mix asphalt, construction calculator</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;