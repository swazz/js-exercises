// Start by creating a variables `numberOfStudents` and `numberOfMentors`
function sum(myfirstnumber, mysecondnumber) {
  return myfirstnumber + mysecondnumber;
}

var numberOfStudents = 15;
var numberOfMentors = 8;
var total = sum(numberOfStudents, numberOfMentors);
var studentsPercentage = numberOfStudents / total * 100;
var mentorsPercentage = numberOfMentors / total * 100;
console.log(studentsPercentage);
console.log(mentorsPercentage);
