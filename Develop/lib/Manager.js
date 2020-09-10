// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Manager class extendes the class of Employee... adds officeNumber
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // built a constructor to store information on individual managers, using this blueprint

        //super calls Employee
        super(name, id, email);

        //this grabs the officeNumber
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // getRole() = Manager;
    getRole() {
        return "Manager";

   
    }
     
}
module.exports = Manager;