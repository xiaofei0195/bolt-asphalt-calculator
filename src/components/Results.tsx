import React from 'react';
import { Calculator, DollarSign, Weight, Package, Save, Share2 } from 'lucide-react';

interface ResultsProps {
  results: any;
  onSave: () => void;
  onExport: () => void;
}

export const Results: React.FC<ResultsProps> = ({ results, onSave, onExport }) => {
  if (!results || results.area === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <Calculator className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Enter dimensions above to see calculations</p>
      </div>
    );
  }

  const resultCards = [
    {
      icon: Package,
      title: 'Area',
      value: results.area.toFixed(1),
      unit: 'sq ft',
      color: 'blue'
    },
    {
      icon: Calculator,
      title: 'Volume',
      value: results.volume.toFixed(1),
      unit: 'cu ft',
      subtitle: `${results.volumeYards.toFixed(1)} cu yd`,
      color: 'green'
    },
    {
      icon: Weight,
      title: 'Weight',
      value: results.weight.toFixed(1),
      unit: 'tons',
      color: 'purple'
    },
    {
      icon: DollarSign,
      title: 'Estimated Cost',
      value: results.cost.toFixed(0),
      unit: 'USD',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
    green: 'bg-green-50 border-green-200 text-green-900',
    purple: 'bg-purple-50 border-purple-200 text-purple-900',
    orange: 'bg-orange-50 border-orange-200 text-orange-900'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Calculation Results</h3>
        <div className="flex space-x-2">
          <button
            onClick={onSave}
            className="flex items-center space-x-1 px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-sm"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button
            onClick={onExport}
            className="flex items-center space-x-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm"
          >
            <Share2 className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resultCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`p-4 rounded-lg border-2 ${colorClasses[card.color]}`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{card.title}</span>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">
                  {card.title === 'Estimated Cost' ? '$' : ''}{card.value}
                </div>
                <div className="text-sm opacity-75">
                  {card.title !== 'Estimated Cost' && card.unit}
                </div>
                {card.subtitle && (
                  <div className="text-xs opacity-60">{card.subtitle}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Summary</h4>
        <div className="text-sm text-gray-700 space-y-1">
          <p>• Total area to be paved: <strong>{results.area.toFixed(1)} sq ft</strong></p>
          <p>• Asphalt needed: <strong>{results.weight.toFixed(1)} tons</strong> ({results.volumeYards.toFixed(1)} cubic yards)</p>
          <p>• Estimated material cost: <strong>${results.cost.toFixed(0)}</strong></p>
          <p className="text-xs text-gray-500 mt-2">
            * Prices may vary by location and supplier. Consider adding 5-10% for waste.
          </p>
        </div>
      </div>
    </div>
  );
};