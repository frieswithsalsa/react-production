import './styles/index.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage/UI';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/NavBar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};

export default App;
