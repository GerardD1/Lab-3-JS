let submissions = [
    {name: "Jane", score: 95, date: 2020-01-24, passed: true},
    {name: "Joe", score: 77, date: 2018-05-14, passed: true},
    {name: "Jack", score: 59, date: 2019-07-05, passed: false},
    {name: "Jill", score: 88, date: 2020-04-22, passed: true}
];
function addSubmission(array, newName, newScore, newDate) {
    const newObject = {name: newName, score: newScore, date: newDate};
    if (newScore >= 60) {
        newObject.passed = true;
        console.log("true")
    } else {
        newObject.passed = false;
    }
    array.push(newObject);
}

addSubmission(submissions, "James", 45, "2020-05-12")
console.log(submissions)

function deleteSubmissionByIndex(array, index) {
    array.splice(index);
}

deleteSubmissionByIndex(submissions, 4)

function deleteSubmissionByName(array, name) {
    array.splice(name);
}
deleteSubmissionByName(submissions, "Jack")

function editSubmission(array, index, score) {

}

function findSubmissionByName(array, name) {
    array.find(name);
}

function findAverageScore(array) {

}

function filterPassing(array) {

}

function filter90AndAbove(array) {
    
}