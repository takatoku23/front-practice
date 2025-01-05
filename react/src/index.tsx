import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => <h1>Hello, TypeScript and React!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
