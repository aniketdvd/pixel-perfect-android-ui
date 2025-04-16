import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const OTPInput = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const inputRefs = Array(6).fill(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs[index - 1]?.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    if (newValue.match(/^[0-9]$/)) {
      const newOTP = value.split('');
      newOTP[index] = newValue;
      onChange(newOTP.join(''));
      if (index < 5) inputRefs[index + 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array(6).fill(0).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(ref) => inputRefs[index] = ref}
          className="w-12 h-12 text-center text-xl font-semibold rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
        />
      ))}
    </div>
  );
};

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState('');
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
        <h2 className="text-2xl font-semibold mb-2">{t('onboarding.verifyOTP.title')}</h2>
        <p className="text-gray-600 mb-8">{t('onboarding.verifyOTP.message')}</p>
        
        <div className="space-y-6">
          <OTPInput value={otp} onChange={setOTP} />

          <div className="text-center">
            <button className="text-[#25D366] font-medium">
              {t('onboarding.verifyOTP.resend')}
            </button>
          </div>

          <button
            onClick={() => navigate('/allow-location')}
            className="w-full bg-[#25D366] text-white font-medium py-4 rounded-2xl"
          >
            {t('onboarding.verifyOTP.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP; 