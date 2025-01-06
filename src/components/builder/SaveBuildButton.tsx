import React from 'react';
import { Save } from 'lucide-react';

interface SaveBuildButtonProps {
  canSave: boolean;
  onSave: () => void;
}

const SaveBuildButton: React.FC<SaveBuildButtonProps> = ({ canSave, onSave }) => {
  return (
    <button
      onClick={onSave}
      disabled={!canSave}
      className={`
        w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg
        transition-all font-medium
        ${canSave
          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }
      `}
    >
      <Save className="w-4 h-4" />
      Save Configuration
    </button>
  );
};

export default SaveBuildButton;
