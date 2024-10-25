import { useTranslation } from '@/hooks/useTranslation';
import { i18n } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default function TermsOfServicePage({ params }: { params: { lang: string } }) {
  const { t } = useTranslation(params.lang);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('termsOfService')}</h1>
      <p className="mb-4">Last updated: Oct 13, 2024</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing and using this website (pantonecolors.net), you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Description of Service</h2>
      <p className="mb-4">Pantone Colors provides users with access to a rich collection of resources, including various communications tools, forums, and personalized content (the "Service"). The Service, including any updates, enhancements, new features, and/or the addition of any new Web properties, is subject to these Terms of Service.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Use License</h2>
      <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Pantone Colors' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>modify or copy the materials;</li>
        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
        <li>attempt to decompile or reverse engineer any software contained on Pantone Colors' website;</li>
        <li>remove any copyright or other proprietary notations from the materials; or</li>
        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Disclaimer</h2>
      <p className="mb-4">The materials on Pantone Colors' website are provided on an 'as is' basis. Pantone Colors makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      <p className="mb-4">Further, Pantone Colors does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Limitations</h2>
      <p className="mb-4">In no event shall Pantone Colors or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pantone Colors' website, even if Pantone Colors or a Pantone Colors authorized representative has been notified orally or in writing of the possibility of such damage.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Accuracy of Materials</h2>
      <p className="mb-4">The materials appearing on Pantone Colors' website could include technical, typographical, or photographic errors. Pantone Colors does not warrant that any of the materials on its website are accurate, complete or current. Pantone Colors may make changes to the materials contained on its website at any time without notice.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Links</h2>
      <p className="mb-4">Pantone Colors has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Pantone Colors of the site. Use of any such linked website is at the user's own risk.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Modifications</h2>
      <p className="mb-4">Pantone Colors may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Governing Law</h2>
      <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">10. Contact Information</h2>
      <p className="mb-4">If you have any questions about these Terms, please contact us at info@pantonecolors.net.</p>
    </div>
  );
}

// This ensures the page is statically generated
export const dynamic = 'force-static';