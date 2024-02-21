type Role = 'dev' | 'bossman';

type Employee = { name: string; role: Role; projects?: string[] };

const arjun: Employee = {
  name: 'arjun',
  role: 'dev',
  projects: ['payee balances'],
};

const tom: Employee = { name: 'tom', role: 'bossman' };

function promoteEmployee(employee: Employee, newRole: Role) {
  employee.role = newRole;
}

// promoteEmployee(arjun, 'bossman');
// promoteEmployee(arjun, 'sales');
