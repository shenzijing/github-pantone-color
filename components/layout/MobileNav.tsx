'use client';

import { memo, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { X } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';
import { useMenuStore } from '@/stores/menuStore';

interface MobileNavProps {
    currentLang: string;
}

function MobileNavComponent({ currentLang }: MobileNavProps) {
    const pathname = usePathname();
    const { t } = useTranslation(currentLang);
    const { isOpen, closeMenu } = useMenuStore();

    useEffect(() => {
        closeMenu();
    }, [pathname, closeMenu]);

    const getLocalizedHref = (path: string) => {
        return currentLang === 'en' ? path : `/${currentLang}${path}`;
    };

    return (
        <div
            className={cn(
                "md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform",
                {
                    "translate-x-0": isOpen,
                    "translate-x-full": !isOpen
                }
            )}
        >
            <div className="flex justify-end p-4">
                <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    aria-label="Close menu"
                >
                    <X className="h-6 w-6" />
                </button>
            </div>

            <div className="flex flex-col space-y-4 p-4">
                <Link href={getLocalizedHref('/')} passHref>
                    <Button variant="ghost" className="w-full justify-start text-lg">{t('home')}</Button>
                </Link>
                <Link href={getLocalizedHref('/blog')} passHref>
                    <Button variant="ghost" className="w-full justify-start text-lg">{t('blog')}</Button>
                </Link>
                <div className="py-2">
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
}

export default memo(MobileNavComponent);