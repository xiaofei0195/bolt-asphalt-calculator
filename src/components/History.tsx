import React from 'react';
import { Clock, Download, Trash2, Calculator } from 'lucide-react';
import { Calculation } from '../types/calculator';

interface HistoryProps {
  calculations: Calculation[];
  onDeleteCalculation: (id: string) => void;
  onLoadCalculation: (calculation: Calculation) => void;
}

export const History: React.FC<HistoryProps> = ({
  calculations,
  onDeleteCalculation,
  onLoadCalculation
}) => {
  if (calculations.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculation History</h2>
          <div className="bg-gray-50 rounded-lg p-12">
            <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No saved calculations yet</p>
            <p className="text-gray-500">Start calculating to see your history here</p>
          </div>
        </div>
      </div>
    );
  }

  const exportCalculation = (calculation: Calculation) => {
    const dataStr = JSON.stringify(calculation, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${calculation.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculation History</h2>
        <p className="text-lg text-gray-600">
          {calculations.length} saved calculation{calculations.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculations.map((calc) => (
          <div key={calc.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {calc.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(calc.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-1">
                  <button
                    onClick={() => exportCalculation(calc)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                    title="Export"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDeleteCalculation(calc.id)}
                    className="p-1 text-gray-400 hover:text-red-600"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shape:</span>
                  <span className="font-medium capitalize">{calc.shape}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Area:</span>
                  <span className="font-medium">{calc.results.area.toFixed(1)} sq ft</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-medium">{calc.results.weight.toFixed(1)} tons</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cost:</span>
                  <span className="font-medium text-orange-600">${calc.results.cost.toFixed(0)}</span>
                </div>
              </div>

              <button
                onClick={() => onLoadCalculation(calc)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                <Calculator className="w-4 h-4" />
                <span>Load Calculation</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};