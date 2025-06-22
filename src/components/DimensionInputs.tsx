import React from 'react';
import { Ruler } from 'lucide-react';

interface DimensionInputsProps {
  shape: 'rectangle' | 'circle' | 'trapezoid';
  dimensions: any;
  units: any;
  onDimensionChange: (field: string, value: number) => void;
  onUnitChange: (field: string, value: string) => void;
}

export const DimensionInputs: React.FC<DimensionInputsProps> = ({
  shape,
  dimensions,
  units,
  onDimensionChange,
  onUnitChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Ruler className="w-5 h-5 text-orange-500" />
        <h3 className="text-lg font-semibold text-gray-900">Dimensions</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shape === 'rectangle' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={dimensions.length || ''}
                  onChange={(e) => onDimensionChange('length', parseFloat(e.target.value) || 0)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter length"
                />
                <select
                  value={units.dimension}
                  onChange={(e) => onUnitChange('dimension', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="feet">ft</option>
                  <option value="meters">m</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Width
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={dimensions.width || ''}
                  onChange={(e) => onDimensionChange('width', parseFloat(e.target.value) || 0)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter width"
                />
                <select
                  value={units.dimension}
                  onChange={(e) => onUnitChange('dimension', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="feet">ft</option>
                  <option value="meters">m</option>
                </select>
              </div>
            </div>
          </>
        )}

        {shape === 'circle' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Radius
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={dimensions.radius || ''}
                onChange={(e) => onDimensionChange('radius', parseFloat(e.target.value) || 0)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter radius"
              />
              <select
                value={units.dimension}
                onChange={(e) => onUnitChange('dimension', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="feet">ft</option>
                <option value="meters">m</option>
              </select>
            </div>
          </div>
        )}

        {shape === 'trapezoid' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Top Width
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={dimensions.topWidth || ''}
                  onChange={(e) => onDimensionChange('topWidth', parseFloat(e.target.value) || 0)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter top width"
                />
                <select
                  value={units.dimension}
                  onChange={(e) => onUnitChange('dimension', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="feet">ft</option>
                  <option value="meters">m</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bottom Width
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={dimensions.bottomWidth || ''}
                  onChange={(e) => onDimensionChange('bottomWidth', parseFloat(e.target.value) || 0)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter bottom width"
                />
                <select
                  value={units.dimension}
                  onChange={(e) => onUnitChange('dimension', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="feet">ft</option>
                  <option value="meters">m</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={dimensions.length || ''}
                  onChange={(e) => onDimensionChange('length', parseFloat(e.target.value) || 0)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter length"
                />
                <select
                  value={units.dimension}
                  onChange={(e) => onUnitChange('dimension', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="feet">ft</option>
                  <option value="meters">m</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Thickness
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={dimensions.thickness || ''}
              onChange={(e) => onDimensionChange('thickness', parseFloat(e.target.value) || 0)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter thickness"
            />
            <select
              value={units.thickness}
              onChange={(e) => onUnitChange('thickness', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="inches">in</option>
              <option value="feet">ft</option>
              <option value="cm">cm</option>
            </select>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Typical thickness: 2-4 inches for residential, 4-6 inches for commercial
          </p>
        </div>
      </div>
    </div>
  );
};