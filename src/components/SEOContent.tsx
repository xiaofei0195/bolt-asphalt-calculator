import React from 'react';
import { Calculator, TrendingUp, Shield, Clock } from 'lucide-react';

export const SEOContent: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with SEO Content */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Asphalt Calculator
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto">
            Calculate exact asphalt volume, weight, and costs for driveways, parking lots, and roads. 
            Free professional tool trusted by contractors and DIY enthusiasts across the United States.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-orange-600 px-4 py-2 rounded-full">✓ Instant Calculations</span>
            <span className="bg-orange-600 px-4 py-2 rounded-full">✓ Multiple Shapes</span>
            <span className="bg-orange-600 px-4 py-2 rounded-full">✓ Cost Estimation</span>
            <span className="bg-orange-600 px-4 py-2 rounded-full">✓ Mobile Friendly</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Asphalt Calculator?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our professional-grade calculator provides accurate results for all your paving projects, 
              from small residential driveways to large commercial parking lots.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precise Calculations</h3>
              <p className="text-gray-600">
                Advanced algorithms ensure accurate volume, weight, and cost calculations for any project size.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
              <p className="text-gray-600">
                Real-time cost calculations help you budget accurately and avoid material waste or shortages.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Grade</h3>
              <p className="text-gray-600">
                Trusted by contractors and engineers for commercial projects requiring precise material estimates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">
                Instant results eliminate manual calculations and reduce project planning time significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Guide to Asphalt Calculation
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              How to Calculate Asphalt for Your Project
            </h3>
            <p className="text-gray-700 mb-6">
              Calculating the right amount of asphalt for your paving project is crucial for both cost control and project success. 
              Our professional asphalt calculator simplifies this process by providing instant, accurate calculations for volume, 
              weight, and material costs based on your specific project dimensions.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Asphalt Thickness Guidelines by Project Type
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Residential Driveways:</strong> 2-3 inches thick for standard passenger vehicles</li>
                <li><strong>Commercial Driveways:</strong> 3-4 inches thick for delivery trucks and heavy vehicles</li>
                <li><strong>Parking Lots:</strong> 4-6 inches thick for high-traffic commercial areas</li>
                <li><strong>Roads and Highways:</strong> 6-8 inches thick for heavy commercial traffic</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Understanding Asphalt Density and Weight Calculations
            </h3>
            <p className="text-gray-700 mb-6">
              Standard hot mix asphalt typically weighs 145 pounds per cubic foot, but this can vary based on the specific 
              mix design and aggregate composition. Our calculator accounts for different asphalt types including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Standard Hot Mix Asphalt (145 lbs/ft³)</li>
              <li>Dense Graded Mix (150 lbs/ft³)</li>
              <li>Stone Matrix Asphalt (148 lbs/ft³)</li>
              <li>Recycled Asphalt Pavement (140 lbs/ft³)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Asphalt Cost Factors and Pricing
            </h3>
            <p className="text-gray-700 mb-6">
              Asphalt pricing varies significantly across the United States, typically ranging from $40-120 per ton 
              depending on location, quality, and market conditions. Additional costs to consider include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Material delivery charges ($50-150)</li>
              <li>Base preparation ($2-5 per square foot)</li>
              <li>Labor costs ($3-7 per square foot)</li>
              <li>Sealing and finishing ($0.20-0.40 per square foot)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tips for Accurate Asphalt Estimation
            </h3>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <ul className="space-y-2 text-orange-900">
                <li>• Always order 5-10% extra material to account for waste and compaction</li>
                <li>• Measure your area carefully and double-check all dimensions</li>
                <li>• Consider the compaction factor (typically 1.25) for loose material</li>
                <li>• Check local building codes for minimum thickness requirements</li>
                <li>• Get quotes from multiple suppliers for the best pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};