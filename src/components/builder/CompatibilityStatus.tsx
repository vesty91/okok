import React from 'react';
    import { AlertTriangle, CheckCircle2 } from 'lucide-react';

    interface CompatibilityStatusProps {
      isCompatible: boolean;
      issues: string[];
      totalWattage: number;
    }

    const CompatibilityStatus: React.FC<CompatibilityStatusProps> = ({ isCompatible, issues, totalWattage }) => {
      return (
        <>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Compatibility:</span>
            {isCompatible ? (
              <span className="text-green-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Compatible
              </span>
            ) : (
              <span className="text-amber-600 flex items-center gap-1">
                <AlertTriangle className="w-4 h-4" />
                Issues Found
              </span>
            )}
          </div>

          {!isCompatible && issues.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded p-2">
              <ul className="text-sm text-amber-700 list-disc list-inside">
                {issues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {!isCompatible && (
            <div className="text-sm text-gray-600 mt-2">
              Total Wattage: {totalWattage}W
            </div>
          )}
        </>
      );
    };

    export default CompatibilityStatus;
