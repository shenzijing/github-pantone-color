'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

interface FooterProps {
    currentLang: string;
}

function FooterComponent({ currentLang }: FooterProps) {
    const { t } = useTranslation(currentLang);

    const getLocalizedHref = (path: string) => {
        return currentLang === 'en' ? path : `/${currentLang}${path}`;
    };

    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold mb-2">{t('aboutUs')}</h3>
                    <p className="text-sm">{t('aboutUsContent')}</p>
                </div>
                <div>
                    <h3 className="font-bold mb-2">{t('quickLinks')}</h3>
                    <ul className="text-sm space-y-1">
                        <li><Link href={getLocalizedHref('/blog')}>{t('blog')}</Link></li>
                        <li><Link href={getLocalizedHref('/privacy-policy')}>{t('privacyPolicy')}</Link></li>
                        <li><Link href={getLocalizedHref('/terms-of-service')}>{t('termsOfService')}</Link></li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-200 py-2 text-center text-sm">
                <p>{t('copyright')}</p>
                <p>{t('contactUs')}: <a href="mailto:info@pantonecolors.net" className="text-blue-600 hover:underline">info@pantonecolors.net</a></p>
            </div>
        </footer>
    );
}

export const Footer = memo(FooterComponent);