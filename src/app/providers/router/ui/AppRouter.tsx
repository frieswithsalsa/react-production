import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; // Добавьте импорт для Routes и Route
import { routeConfig } from 'shared/config/routeConfig.ts/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
