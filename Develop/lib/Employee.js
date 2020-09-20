// TODO: Write code to define and export the Employee class
class Employee{
    //builing a constructor that is a blueprint for creating a new employee using information.

    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("expected parameter 'name' to be a non-empty string");
        }

        this.name = name; 
        this.id = id;
        this.email = email;
    }
    // Get Info
    getName() {
        // console.log(`Employee Name: ${this.name}`);
        return this.name;
    };

    getId() {
        // console.log(`Employee ID: ${this.id}`);
        return this.id;
    }

    getEmail() {
        //console.log(`Empoyee Email: ${this.email}`);
        return this.email;
    }

    getRole() {
        // will return what this object functionality is-- the string:'employee'
        // console.log(`Employee Role: ${this.getRole}`);
        return "Employee"
    }

}
module.exports = Employee;
