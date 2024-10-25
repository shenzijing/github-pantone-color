'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Menu, Palette } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useMenuStore } from '@/stores/menuStore';

interface HeaderProps {
    currentLang: string;
}

function HeaderComponent({ currentLang }: HeaderProps) {
    const { t } = useTranslation(currentLang);
    const { toggleMenu } = useMenuStore();

    const getLocalizedHref = (path: string) => {
        return currentLang === 'en' ? path : `/${currentLang}${path}`;
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href={getLocalizedHref('/')} className="flex items-center">
                        <Palette className="h-8 w-8 mr-2 text-blue-600" />
                        <span className="text-xl font-bold hidden sm:inline">{t('pantoneColorsChart')}</span>
                        <span className="text-xl font-bold sm:hidden">Pantone</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href={getLocalizedHref('/')} passHref>
                            <Button variant="ghost" className="text-lg">{t('home')}</Button>
                        </Link>
                        <Link href={getLocalizedHref('/blog')} passHref>
                            <Button variant="ghost" className="text-lg">{t('blog')}</Button>
                        </Link>
                        <LanguageSwitcher />
                    </div>

                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export const Header = memo(HeaderComponent);