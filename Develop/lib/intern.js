// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Intern class extends the class of Employee...just adds the school.
class Intern extends Employee {
    //constructor that provides the blueprint for creating more Interns(objects) and holds their info.
    constructor(name, id, email, school) {
        // super is calling the employee.js so you dont have to this.name/id/school
        super(name,id, email);

        //getSchool() = school;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    //getRole() = Intern;
    getRole() {
        return "Intern"
    }
}
module.exports = Intern