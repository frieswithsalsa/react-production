import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button 
            theme={ThemeButton.CLEAR_INVERTED}
            className={cls.links}
            onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen ={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat harum nesciunt accusamus minima laborum excepturi perferendis, nobis necessitatibus soluta incidunt iste praesentium magnam eaque debitis beatae aspernatur velit illum?
            </Modal>
        </div>
    );
};
