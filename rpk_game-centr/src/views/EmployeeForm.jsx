import { useState } from 'react';
import EmployeeAPI from '../service';

function EmployeeForm({ onSave, onCancel }) {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !job.trim()) return;
    const created = EmployeeAPI.add({ name: name.trim(), job: job.trim() });
    onSave?.(created);
  };

  return (
    <div className="view">
      <h1>Новый сотрудник</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Имя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Например, Иван Иванов"
          />
        </label>
        <label>
          Должность
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Например, Teacher"
          />
        </label>
        <div className="form-actions">
          <button type="button" className="btn" onClick={onCancel}>
            Отмена
          </button>
          <button type="submit" className="btn primary">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;