import React from 'react';
import { BookOpen, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';

export const Guide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Asphalt Calculator Guide</h2>
        <p className="text-lg text-gray-600">
          Everything you need to know for accurate asphalt calculations
        </p>
      </div>

      <div className="space-y-8">
        {/* Quick Start */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-semibold text-gray-900">Quick Start Guide</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-orange-600">1</span>
              </div>
              <h4 className="font-medium mb-2">Select Shape</h4>
              <p className="text-sm text-gray-600">Choose the shape that matches your project area</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-orange-600">2</span>
              </div>
              <h4 className="font-medium mb-2">Enter Dimensions</h4>
              <p className="text-sm text-gray-600">Input length, width, and thickness measurements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-orange-600">3</span>
              </div>
              <h4 className="font-medium mb-2">Get Results</h4>
              <p className="text-sm text-gray-600">View volume, weight, and cost calculations</p>
            </div>
          </div>
        </section>

        {/* Thickness Guidelines */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-semibold text-gray-900">Thickness Guidelines</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-medium">Project Type</th>
                  <th className="text-left py-3 font-medium">Recommended Thickness</th>
                  <th className="text-left py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b">
                  <td className="py-3">Residential Driveway</td>
                  <td className="py-3">2-3 inches</td>
                  <td className="py-3">Light traffic, standard cars</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Commercial Driveway</td>
                  <td className="py-3">3-4 inches</td>
                  <td className="py-3">Heavy vehicles, delivery trucks</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Parking Lot</td>
                  <td className="py-3">4-6 inches</td>
                  <td className="py-3">High traffic, frequent use</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Road/Highway</td>
                  <td className="py-3">6-8 inches</td>
                  <td className="py-3">Heavy traffic, commercial vehicles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-semibold text-gray-900">Cost Factors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Material Costs (per ton)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Standard Hot Mix: $40-80</li>
                <li>• Dense Graded Mix: $60-100</li>
                <li>• Stone Matrix Asphalt: $80-120</li>
                <li>• Recycled Asphalt: $30-60</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Additional Costs</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Delivery: $50-150</li>
                <li>• Base preparation: $2-5/sq ft</li>
                <li>• Labor: $3-7/sq ft</li>
                <li>• Sealing: $0.20-0.40/sq ft</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Important Tips */}
        <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-amber-900">Important Tips</h3>
          </div>
          <ul className="text-amber-800 space-y-2">
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Always order 5-10% extra material to account for waste and compaction</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Check local building codes for minimum thickness requirements</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Consider base preparation - poor base leads to premature failure</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Prices vary significantly by location and season</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold">•</span>
              <span>Hot mix asphalt should be applied at proper temperature (275-300°F)</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};