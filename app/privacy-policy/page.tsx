import { useTranslation } from '@/hooks/useTranslation';
import { i18n } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default function PrivacyPolicyPage({ params }: { params: { lang: string } }) {
  const { t } = useTranslation(params.lang);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('privacyPolicy')}</h1>
      <p className="mb-4">Last updated: Oct 13, 2024</p>

      <p className="mb-4">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
      <p className="mb-4">When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and information about how you interact with the site.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Personal Information</h2>
      <p className="mb-4">We use the information that we collect generally to:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>Fulfill any orders placed through the site</li>
        <li>Communicate with you</li>
        <li>Screen our orders for potential risk or fraud</li>
        <li>Provide you with information or advertising relating to our products or services</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Sharing Your Personal Information</h2>
      <p className="mb-4">We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the site.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Your Rights</h2>
      <p className="mb-4">If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Data Retention</h2>
      <p className="mb-4">When you place an order through the site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on this page.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
      <p className="mb-4">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@pantonecolors.net.</p>
    </div>
  );
}

// This ensures the page is statically generated
export const dynamic = 'force-static';