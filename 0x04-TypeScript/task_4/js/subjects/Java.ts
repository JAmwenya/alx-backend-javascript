import { Subjects } from "./Subject";

export class Java extends Subjects.Subject {
  experienceTeachingJava?: number;

  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.experienceTeachingJava && this.experienceTeachingJava > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return "No available teacher";
  }
}
