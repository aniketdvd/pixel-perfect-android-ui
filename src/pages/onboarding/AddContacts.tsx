import { useNavigate } from "react-router-dom";
import { Trash2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Contact {
  id: number;
  name: string;
  phone: string;
  relationship: string;
}

const ContactCard = ({ contact, onDelete }: { contact: Contact; onDelete: () => void }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <div>
        <h3 className="font-medium text-gray-900">{contact.name}</h3>
        <p className="text-sm text-gray-600">{contact.phone}</p>
        <p className="text-sm text-gray-500">{contact.relationship}</p>
      </div>
      <button
        onClick={onDelete}
        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

const AddContacts = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "John Smith", phone: "+1 (555) 123-4567", relationship: "Father" },
    { id: 2, name: "Mary Johnson", phone: "+1 (555) 987-6543", relationship: "Mother" },
    { id: 3, name: "David Wilson", phone: "+1 (555) 246-8135", relationship: "Brother" },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    relationship: ''
  });

  const handleAddContact = () => {
    if (formData.name && formData.phone && formData.relationship) {
      setContacts([...contacts, { id: Date.now(), ...formData }]);
      setFormData({ name: '', phone: '', relationship: '' });
    }
  };

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

      <div className="flex-1 px-4">
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-6">{t('onboarding.contacts.title')}</h1>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <input
              type="text"
              placeholder={t('onboarding.contacts.namePlaceholder')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder={t('onboarding.contacts.phonePlaceholder')}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder={t('onboarding.contacts.relationshipPlaceholder')}
              value={formData.relationship}
              onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
            />
          </div>
          <button
            onClick={handleAddContact}
            className="w-full bg-[#25D366] text-white font-medium py-4 rounded-2xl"
          >
            {t('onboarding.contacts.addButton')}
          </button>
        </div>

        {/* Saved Contacts */}
        <div>
          <h2 className="text-lg font-medium mb-2">{t('onboarding.contacts.savedTitle')}</h2>
          <div className="border border-[#E0E0E0] rounded-lg overflow-hidden">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={() => setContacts(contacts.filter(c => c.id !== contact.id))}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="px-4 py-8">
        <button
          onClick={() => navigate('/onboarding/allow-location')}
          className="w-full bg-[#25D366] text-white font-medium py-4 rounded-2xl"
        >
          {t('onboarding.contacts.button')}
        </button>
      </div>
    </div>
  );
};

export default AddContacts; 