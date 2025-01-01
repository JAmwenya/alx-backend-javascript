import { Subjects } from "./Subject";

export class Cpp extends Subjects.Subject {
  experienceTeachingC?: number;

  getRequirements(): string {
    return "Here is the list of requirements for C++";
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.experienceTeachingC && this.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return "No available teacher";
  }
}
