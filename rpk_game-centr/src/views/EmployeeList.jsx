import { useState } from 'react';
import EmployeeAPI from '../service';

function EmployeeList({ onAdd }) {
  const [employees, setEmployees] = useState(EmployeeAPI.all());

  const handleDelete = (id) => {
    // TODO: раскомментировать, когда нужно реальное удаление
    // EmployeeAPI.delete(id);
    // setEmployees(EmployeeAPI.all());
    console.log('Delete clicked for id =', id);
  };

  return (
    <div className="view">
      <header className="view-header">
        <h1>Сотрудники</h1>
        <button type="button" className="btn primary" onClick={onAdd}>
          + Добавить
        </button>
      </header>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Должность</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.job}</td>
              <td>
                <button
                  type="button"
                  className="btn danger"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {employees.length === 0 && (
            <tr>
              <td colSpan={4} className="empty">
                Пусто
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;