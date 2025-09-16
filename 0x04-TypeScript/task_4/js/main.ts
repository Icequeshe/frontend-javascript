import { Subjects } from './subjects/Cpp';
import { Subjects as SubjectsJava } from './subjects/Java';
import { Subjects as SubjectsReact } from './subjects/React';

// Create constants for each subject
["const cpp = new Cpp()"]
["const java = new Java()"]
["const react = new React()"]

// Create a Teacher object with experienceTeachingC = 10
const["cTeacher: Teacher"]
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
