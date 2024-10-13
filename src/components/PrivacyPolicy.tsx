import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <p>Last updated: March 15, 2024</p>
        <p>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Personal information we collect</h2>
        <p>
          When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">How we use your personal information</h2>
        <p>
          We use the information that we collect generally to fulfill any orders placed through the site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact us</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@example.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;