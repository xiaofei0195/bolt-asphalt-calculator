import React from 'react';
import { Calculator, Menu } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Calculator className="w-8 h-8 text-orange-400" />
            <div>
              <h1 className="text-xl font-bold">AsphaltCalc Pro</h1>
              <p className="text-sm text-slate-300">Professional Asphalt Calculator</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onViewChange('calculator')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'calculator'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              Calculator
            </button>
            <button
              onClick={() => onViewChange('history')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'history'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              History
            </button>
            <button
              onClick={() => onViewChange('guide')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'guide'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              Guide
            </button>
          </nav>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};