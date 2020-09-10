// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee');

// Engineer class extends Employee class,  no need to grab name/id/title again.adds github link.
class Engineer extends Employee {
    constructor (name, id, email, github) {
    //built a constructor that provided the layout/info for a new Engineer
    super(name, id, email);
    // getGithub();
    this.github = github;
}

getGithub() {
    return this.github;
}

// getRole() = Engineer;
getRole() {
    return "Engineer"
}
}

module.exports = Engineer

