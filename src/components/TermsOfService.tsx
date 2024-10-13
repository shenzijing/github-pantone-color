import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-4">
        <p>Last updated: March 15, 2024</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Terms</h2>
        <p>
          By accessing this website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Disclaimer</h2>
        <p>
          The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Limitations</h2>
        <p>
          In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of [Your Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;