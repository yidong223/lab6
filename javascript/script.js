const item1 = {
    code: "ACIT 1620",
    name: "Fundamental Web Technologies"
};

const item2 = {
    code: "ORGB 1100",
    name: "Organizational Behaviour"
};

const item3 = {
    code: "ACIT 1515",
    name: "Scripting for IT"
};

const courseList = [item1, item2, item3];

do {
    var user_numbers = window.prompt('Enter a 4-digit number: ');
} while (isNaN(user_numbers) === true && user_numbers.length !== 4);

for(let course of courseList)
{
    while ((Object.values(course))[0].includes(user_numbers))
    {
        let cor_code = (Object.values(course))[0]
        let cor_name = (Object.values(course))[1]
        console.log(`Yes I am taking the course: ${cor_code} - ${cor_name}`);
        user_numbers = window.prompt('Enter a 4-digit number: ');
        if (!(Object.values(course))[0].includes(user_numbers)) {
          break;
        }
    }
}

var new_code = {
    code: user_numbers,
    name: null
};
courseList.push(new_code);
console.log('New course code entered and saved.');