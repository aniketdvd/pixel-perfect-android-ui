import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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

      {/* Logo */}
      <div className="flex justify-center mt-8">
        <h1 className="text-4xl font-extrabold">{t('onboarding.welcome.title')}</h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-6">{t('onboarding.login.title')}</h2>
        
        <div className="space-y-6">
          <div>
            <input
              type="tel"
              placeholder={t('onboarding.login.placeholder')}
              className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
              pattern="+91 [0-9]{10}"
              maxLength={10}
            />
            <div className="mt-2 text-sm text-gray-500">{t('onboarding.login.format')}</div>
          </div>

          <button
            onClick={() => navigate('/verify-otp')}
            className="w-full bg-[#25D366] text-white font-medium py-4 rounded-2xl"
          >
            {t('onboarding.login.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login; 