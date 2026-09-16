import { useState } from 'react';
import EmployeeList from './views/EmployeeList';
import EmployeeForm from './views/EmployeeForm';
import './App.css';

function App() {
  const [view, setView] = useState('list');

  return (
    <div className="app">
      <nav className="nav">
        <button
          type="button"
          className={view === 'list' ? 'active' : ''}
          onClick={() => setView('list')}
        >
          Список
        </button>
        <button
          type="button"
          className={view === 'form' ? 'active' : ''}
          onClick={() => setView('form')}
        >
          Добавить
        </button>
      </nav>

      {view === 'list' ? (
        <EmployeeList onAdd={() => setView('form')} />
      ) : (
        <EmployeeForm onSave={() => setView('list')} onCancel={() => setView('list')} />
      )}
    </div>
  );
}

export default App;