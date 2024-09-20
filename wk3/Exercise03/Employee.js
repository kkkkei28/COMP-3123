//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", salary:9000}
];

const getAllEmployees = () => {
    return employees;
};

const getEmployeeById= (id) => {
    return employees.find(emp => emp.id === id); 
};


module.exports = {
    getAllEmployees,
    getEmployeeById
};
