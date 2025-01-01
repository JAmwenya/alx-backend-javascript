import { Subjects } from "./Subject";

export class React extends Subjects.Subject {
  experienceTeachingReact?: number;

  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.experienceTeachingReact && this.experienceTeachingReact > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return "No available teacher";
  }
}
