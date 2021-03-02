class Employee
{
  constructor(employee_number, name, position, salary) {
    this.employee_number = employee_number; // UNIQUE across all employees
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class Company
{
  constructor() {
    // by convention array should store employee objects
    // technically no way to enforce
    this.employees = [];
    
  }
  

  
  getNextEmployeeID() {
    return Math.floor(Math.random() * 10000)
  }

  addEmployee(employee_number, name, position, salary) {
    // must check if employee_if has been used
    // let existing = this.employees.find(function(e){

    // })

    let e = new Employee(employee_number, name, position, salary)
    this.employees.push(e)
    
    
  };

  deleteEmployee(employee_numer) {

  };

  updateEmployee(employee_number, newName, newPosition, newSalary) {
    
  };
  
  findEmployeeByName(name) {
    let target = null;
    for (let e of this.employees) {
        if (e.name == name){
            target = e;
        }
    }
    return target;
  };

  findEmployeeByEmployeeNumber(employee_number) {
    
  }
}

let apple = new Company();

let employeenNum = apple.getNextEmployeeID()
apple.addEmployee(employeenNum, "Steve", "CEO", 50000)
apple.addEmployee(apple.getNextEmployeeID(), "Liam", "COO", 45555)
console.log(apple)


