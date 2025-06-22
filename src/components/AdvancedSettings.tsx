import React from 'react';
import { Settings, Info } from 'lucide-react';
import { asphaltTypes } from '../data/asphaltTypes';

interface AdvancedSettingsProps {
  settings: any;
  onSettingChange: (field: string, value: number) => void;
  projectType: string;
  onProjectTypeChange: (type: string) => void;
}

export const AdvancedSettings: React.FC<AdvancedSettingsProps> = ({
  settings,
  onSettingChange,
  projectType,
  onProjectTypeChange,
}) => {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-semibold text-gray-900">Project Settings</h3>
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-orange-600 hover:text-orange-700 font-medium"
        >
          {showAdvanced ? 'Hide Advanced' : 'Show Advanced'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <select
            value={projectType}
            onChange={(e) => onProjectTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="driveway">Residential Driveway</option>
            <option value="parking">Parking Lot</option>
            <option value="road">Road/Highway</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price per Ton ($)
          </label>
          <input
            type="number"
            value={settings.pricePerTon || ''}
            onChange={(e) => onSettingChange('pricePerTon', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter price per ton"
          />
          <p className="text-xs text-gray-500 mt-1">
            Typical range: $40-120 per ton (varies by location)
          </p>
        </div>
      </div>

      {showAdvanced && (
        <div className="border-t pt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Asphalt Type
              </label>
              <select
                value={settings.density}
                onChange={(e) => onSettingChange('density', parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {asphaltTypes.map((type) => (
                  <option key={type.name} value={type.density}>
                    {type.name} ({type.density} lbs/ft³)
                  </option>
                ))}
              </select>
              <div className="mt-2 text-xs text-gray-600">
                {asphaltTypes.find(t => t.density === settings.density)?.description}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-1">
                  <span>Compaction Factor</span>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
              </label>
              <input
                type="number"
                step="0.05"
                min="1"
                max="2"
                value={settings.compactionFactor || ''}
                onChange={(e) => onSettingChange('compactionFactor', parseFloat(e.target.value) || 1.25)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                1.25 typical (accounts for loose material settling)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};