import React, { useState, useEffect } from 'react';
import { ShapeSelector } from './ShapeSelector';
import { DimensionInputs } from './DimensionInputs';
import { AdvancedSettings } from './AdvancedSettings';
import { Results } from './Results';
import { calculateArea, calculateVolume, calculateWeight, calculateCost, convertUnits } from '../utils/calculations';
import { Calculation } from '../types/calculator';

interface CalculatorProps {
  onSaveCalculation: (calculation: Calculation) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onSaveCalculation }) => {
  const [shape, setShape] = useState<'rectangle' | 'circle' | 'trapezoid'>('rectangle');
  const [projectType, setProjectType] = useState('driveway');
  const [dimensions, setDimensions] = useState({
    length: 0,
    width: 0,
    radius: 0,
    topWidth: 0,
    bottomWidth: 0,
    thickness: 3
  });
  const [units, setUnits] = useState({
    dimension: 'feet',
    thickness: 'inches'
  });
  const [settings, setSettings] = useState({
    density: 145,
    pricePerTon: 80,
    compactionFactor: 1.25
  });
  const [results, setResults] = useState({
    area: 0,
    volume: 0,
    volumeYards: 0,
    weight: 0,
    cost: 0
  });

  useEffect(() => {
    calculateResults();
  }, [shape, dimensions, units, settings]);

  const calculateResults = () => {
    // Convert thickness to feet
    let thicknessFeet = dimensions.thickness;
    if (units.thickness === 'inches') {
      thicknessFeet = convertUnits.inchesToFeet(dimensions.thickness);
    } else if (units.thickness === 'cm') {
      thicknessFeet = convertUnits.cmToFeet(dimensions.thickness);
    }

    // Convert dimensions to feet if needed
    let convertedDimensions = { ...dimensions };
    if (units.dimension === 'meters') {
      convertedDimensions = {
        ...dimensions,
        length: convertUnits.metersToFeet(dimensions.length),
        width: convertUnits.metersToFeet(dimensions.width),
        radius: convertUnits.metersToFeet(dimensions.radius),
        topWidth: convertUnits.metersToFeet(dimensions.topWidth),
        bottomWidth: convertUnits.metersToFeet(dimensions.bottomWidth),
      };
    }

    const area = calculateArea(shape, convertedDimensions);
    const volume = calculateVolume(area, thicknessFeet, settings.compactionFactor);
    const volumeYards = convertUnits.cubicFeetToYards(volume);
    const weight = calculateWeight(volume, settings.density);
    const cost = calculateCost(weight, settings.pricePerTon);

    setResults({
      area,
      volume,
      volumeYards,
      weight,
      cost
    });
  };

  const handleDimensionChange = (field: string, value: number) => {
    setDimensions(prev => ({ ...prev, [field]: value }));
  };

  const handleUnitChange = (field: string, value: string) => {
    setUnits(prev => ({ ...prev, [field]: value }));
  };

  const handleSettingChange = (field: string, value: number) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const calculation: Calculation = {
      id: Date.now().toString(),
      name: `${projectType} - ${shape} - ${new Date().toLocaleDateString()}`,
      date: new Date().toISOString(),
      shape,
      projectType: projectType as any,
      dimensions,
      units: units as any,
      results,
      settings
    };
    onSaveCalculation(calculation);
    alert('Calculation saved successfully!');
  };

  const handleExport = () => {
    const exportData = {
      project: `${projectType} - ${shape}`,
      date: new Date().toLocaleDateString(),
      dimensions,
      units,
      results,
      settings
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `asphalt-calculation-${Date.now()}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Asphalt Calculator</h2>
        <p className="text-lg text-gray-600">
          Calculate the exact amount of asphalt needed for your driveway, parking lot, or road project
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Get instant volume, weight, and cost estimates for your paving project
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <ShapeSelector
              selectedShape={shape}
              onShapeChange={setShape}
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <DimensionInputs
              shape={shape}
              dimensions={dimensions}
              units={units}
              onDimensionChange={handleDimensionChange}
              onUnitChange={handleUnitChange}
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <AdvancedSettings
              settings={settings}
              onSettingChange={handleSettingChange}
              projectType={projectType}
              onProjectTypeChange={setProjectType}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
            <Results
              results={results}
              onSave={handleSave}
              onExport={handleExport}
            />
          </div>
        </div>
      </div>

      {/* SEO-friendly FAQ section */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              How do I calculate asphalt needed for my driveway?
            </h4>
            <p className="text-gray-600">
              To calculate asphalt for your driveway, measure the length, width, and desired thickness. 
              Use our calculator above to input these dimensions and get instant volume, weight, and cost estimates. 
              For a typical residential driveway, 2-3 inches of thickness is recommended.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              What is the typical thickness for asphalt driveways?
            </h4>
            <p className="text-gray-600">
              Residential driveways typically require 2-3 inches of asphalt thickness for standard passenger vehicles. 
              Commercial driveways handling delivery trucks need 3-4 inches, while parking lots require 4-6 inches 
              for high-traffic areas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              How much does asphalt cost per ton?
            </h4>
            <p className="text-gray-600">
              Asphalt costs typically range from $40-120 per ton depending on the type and location. 
              Standard hot mix asphalt averages $60-80 per ton in most US markets. Our calculator uses 
              current market rates to provide accurate cost estimates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};