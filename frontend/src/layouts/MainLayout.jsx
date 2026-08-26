import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <header>
        <h1>Sistema Colegio Metodista</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
