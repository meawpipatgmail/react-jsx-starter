import React from 'react';
import { ButtonCounter } from './components/ButtonCounter';
import './style.css';

export const App = () => {
  return (
    <div class="p-2">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ButtonCounter name="Some Title" />
    </div>
  );
};
