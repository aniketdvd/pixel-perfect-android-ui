import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

const LanguageOption = ({ 
  value, 
  label, 
  selected, 
  onChange 
}: { 
  value: string; 
  label: string; 
  selected: boolean; 
  onChange: (value: string) => void;
}) => (
  <button
    onClick={() => onChange(value)}
    className="w-full flex items-center justify-between p-4 rounded-lg border border-[#E0E0E0] hover:bg-gray-50"
  >
    <span className="text-gray-900">{label}</span>
    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected ? 'border-[#25D366]' : 'border-gray-300'}`}>
      {selected && <div className="w-3 h-3 rounded-full bg-[#25D366]" />}
    </div>
  </button>
);

const SelectLanguage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    const langCode = language === 'english' ? 'en' : language === 'hindi' ? 'hi' : 'pa';
    i18n.changeLanguage(langCode);
  };

  const handleContinue = () => {
    // Get the stored path and navigate accordingly
    const authPath = localStorage.getItem('authPath') || 'login';
    navigate(`/${authPath}`);
    // Clean up the stored path
    localStorage.removeItem('authPath');
  };

  const languages = [
    { value: 'english', label: 'English', code: 'en' },
    { value: 'hindi', label: 'हिंदी', code: 'hi' },
    { value: 'punjabi', label: 'ਪੰਜਾਬੀ', code: 'pa' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back Button Container */}
      <div className="flex items-center gap-1 p-4 self-stretch">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Header */}
      <div className="px-4 pt-8 pb-8">
        <h1 className="text-2xl font-semibold text-center">
          {t('onboarding.language.title')}
        </h1>
      </div>

      {/* Language Options */}
      <div className="flex-1 px-4 space-y-3">
        {languages.map((lang) => (
          <LanguageOption
            key={lang.value}
            value={lang.value}
            label={lang.label}
            selected={i18n.language === lang.code}
            onChange={handleLanguageChange}
          />
        ))}
      </div>

      {/* Continue Button */}
      <div className="p-4">
        <button
          onClick={handleContinue}
          className="w-full bg-[#25D366] text-white font-medium py-4 rounded-2xl"
        >
          {t('onboarding.language.button')}
        </button>
      </div>
    </div>
  );
};

export default SelectLanguage; 