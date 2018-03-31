function sum(a, b) {
  return a + b;
}
function buildAgeMessage(age) {
  return "we are " + age + " years old.";
}
var mentorAge = 30;
var studentAge = 25;
var combineAge = sum(mentorAge, studentAge);

console.log(buildAgeMessage(combineAge));
