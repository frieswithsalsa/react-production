import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';

interface SidebarItemProps {
    item: SidebarItemType;  // Changed from optional to required
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, {[cls.collapsed]: collapsed})}
        >
            <item.icon className={cls.icon} />  {/* Changed to uppercase Icon */}
            {!collapsed && (
                <span className={cls.link}>
                    {t(item.text)}
                </span>
            )}
        </AppLink>
    );
});