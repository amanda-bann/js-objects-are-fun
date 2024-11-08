const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};

learning.topic = "JS";
learning.learningGoals = ["Build JS Programs", "Understand JS Syntax", "JS APIs", "JS Libraries"];
learning.category = "Front End Development";
learning.topicImportance = "High";

// console.log(learning);

learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);

console.log(learning);