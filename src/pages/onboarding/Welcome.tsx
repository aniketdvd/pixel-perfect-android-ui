import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStart = (isLogin: boolean) => {
    // Store the intended path (login or signup) to redirect after language selection
    localStorage.setItem('authPath', isLogin ? 'login' : 'signup');
    navigate('/select-language');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-4">
      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold mb-4">{t('onboarding.welcome.title')}</h1>
        <p className="text-gray-600 text-center">{t('onboarding.welcome.subtitle')}</p>
      </div>

      {/* Bottom Buttons */}
      <div className="pb-8 space-y-3">
        <button
          onClick={() => handleStart(true)}
          className="w-full bg-[#25D366] text-white font-medium py-4 rounded-2xl"
        >
          {t('onboarding.welcome.login')}
        </button>
        <button
          onClick={() => handleStart(false)}
          className="w-full border border-gray-200 text-gray-900 font-medium py-4 rounded-2xl"
        >
          {t('onboarding.welcome.signup')}
        </button>
      </div>
    </div>
  );
};

export default Welcome; 