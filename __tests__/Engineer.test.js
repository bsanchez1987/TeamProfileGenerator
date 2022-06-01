const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "bsanchez1987";
    const employeeInstance = new Engineer("Brandon", 2, "brandonsanchez@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "bsanchez1987";
    const employeeInstance = new Engineer("Brandon", 2, "brandonsanchez@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Brandon", 2, "brandonsanchez@gmail.com", "bsanchez1987");
    expect(employeeInstance.getRole()).toBe(returnValue);
});