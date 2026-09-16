const EmployeeAPI = {
  employees: [
    { id: 1, name: "Ben Blocker", job: "Teacher" },
    { id: 2, name: "Dave Defender", job: "Student" },
    { id: 3, name: "Sam Sweeper", job: "Teacher" },
    { id: 4, name: "Matt Midfielder", job: "Student" },
    { id: 5, name: "William Winger", job: "Student" },
    { id: 6, name: "Fillipe Forward", job: "Rector" },
  ],
  all: function () {
    return this.employees;
  },
  get: function (id) {
    return this.employees.find((p) => p.id === id);
  },
  delete: function (id) {
    this.employees = this.employees.filter((p) => p.id !== id);
    return true;
  },
  add: function (employee) {
    if (!employee.id) {
      const maxId = this.employees.reduce(
        (prev, current) => (prev.id > current.id ? prev : current),
        { id: 0 }
      ).id;
      employee = { ...employee, id: maxId + 1 };
    }
    this.employees = [...this.employees, employee];
    return employee;
  },
  update: function (employee) {
    const index = this.employees.findIndex((p) => p.id === employee.id);
    if (index !== -1) this.employees[index] = employee;
    return employee;
  },
};

export default EmployeeAPI;