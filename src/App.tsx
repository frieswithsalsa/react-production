import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import { useContext, useState } from 'react';
import { lazy, Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { ThemeContext, Theme } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const bool = true;

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
