import React from 'react';
import LifecycleLogger from './components/LifecycleLogger';
import RegistrationForm from './components/RegistrationForm';
import { ThemeProvider } from './components/ThemeContext';
import withLogging from './components/withLogging';
import NameList from './components/NameList';

const App: React.FC = () => {
  const names = ['Alice', 'Bob', 'Charlie'];

  // Example usage of HOC
  const LoggedRegistrationForm = withLogging(RegistrationForm);

  return (
    <ThemeProvider>
      <h1>Name List</h1>
      <NameList names={names} />
      <h1>Lifecycle Logger</h1>
      <LifecycleLogger />
      <h1>Registration Form</h1>
      <LoggedRegistrationForm />
    </ThemeProvider>
  );
};

export default App;
