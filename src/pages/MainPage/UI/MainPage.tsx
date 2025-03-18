import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/input/input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('')

    const onChange = (val:string) => {
        setValue(val)
    }

    return (
        <div>
            {t('Главная страница')}
            <Input 
            placeholder={'type text'}
            value={value} 
            onChange={onChange}/>
        </div>
    );
};

export default MainPage;
