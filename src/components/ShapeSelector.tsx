import React from 'react';
import { Square, Circle, Triangle } from 'lucide-react';

interface ShapeSelectorProps {
  selectedShape: 'rectangle' | 'circle' | 'trapezoid';
  onShapeChange: (shape: 'rectangle' | 'circle' | 'trapezoid') => void;
}

export const ShapeSelector: React.FC<ShapeSelectorProps> = ({
  selectedShape,
  onShapeChange,
}) => {
  const shapes = [
    { id: 'rectangle' as const, label: 'Rectangle', icon: Square, description: 'Most common for driveways and parking lots' },
    { id: 'circle' as const, label: 'Circle', icon: Circle, description: 'Roundabouts and circular areas' },
    { id: 'trapezoid' as const, label: 'Trapezoid', icon: Triangle, description: 'Sloped or irregular areas' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Select Shape</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {shapes.map((shape) => {
          const Icon = shape.icon;
          return (
            <button
              key={shape.id}
              onClick={() => onShapeChange(shape.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedShape === shape.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon className={`w-6 h-6 ${
                  selectedShape === shape.id ? 'text-orange-500' : 'text-gray-400'
                }`} />
                <span className="font-medium text-gray-900">{shape.label}</span>
              </div>
              <p className="text-sm text-gray-600">{shape.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};