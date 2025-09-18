import { type NewTaskData } from "./task/task.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
 private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Setup and Facilitate Angular Project Meetings',
      summary:
        'Setup and coordinate all angular project meetings with Scrum Master and Project Engineer',
      dueDate: '2025-02-24',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build First Angular Prototype',
      summary: 'Build a first prototype of the online client management application website',
      dueDate: '2025-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare Angular Project Issue Template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2025-06-15',
    },
    {
      id: 't4',
      userId: 'u5',
      title: 'Test Angular Project',
      summary:
        'Run unit test on all angular components to verify website is functioning properly',
      dueDate: '2025-08-31',
    },
    {
      id: 't5',
      userId: 'u6',
      title: 'Troubleshoot and Correct Angular Programming Errors',
      summary:
        'Correct and troubleshoot angular programming errors as they arise',
      dueDate: '2025-09-30',
    },
    {
      id: 't6',
      userId: 'u2',
      title: 'Integrate Images into the Angular Project',
      summary:
        'Collect and integrate images into the angular website from online and offline resources',
      dueDate: '2025-07-17',
    },
    {
      id: 't7',
      userId: 'u4',
      title: 'Add Model and Service Typescript to Angular Project',
      summary:
        'Generate the model and service typescript for the angular project and integrate into the website components',
      dueDate: '2025-10-19',
    },
    {
      id: 't8',
      userId: 'u2',
      title: 'Add Angular User Inputs',
      summary:'Add user input text fields and text area into the angular website',
      dueDate: '2025-08-13',
    },
    {
      id: 't9',
      userId: 'u12',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-04-25',
    },
    {
      id: 't10',
      userId: 'u12',
      title: 'Graduate from the Caltech Coding Bootcamp Program',
      summary:
        'Attend all or most the live virtual class sessions and complete all course-end projects with honors',
      dueDate: '2025-09-04',
    },
    {
      id: 't11',
      userId: 'u7',
      title: 'Add Animation to the Angular Project',
      summary:'Add animation programming to all angular icons and pages on the angular webpage',
      dueDate: '2025-07-15',
    },
    {
      id: 't12',
      userId: 'u8',
      title: 'Integrate the MySQL Database to the Angular Project',
      summary:'integrate the MySQL relational database schemas, tables, colomns into the angular backend components',
      dueDate: '2025-06-29',
    },
    {
      id: 't13',
      userId: 'u9',
      title: 'Build the Oracle Java Backend for the Angular Project',
      summary: 'Program the Java backend stack to include a server and JDBC connection for the MySQL database',
      dueDate: '2025-09-02',
    },
    {
      id: 't14',
      userId: 'u10',
      title: 'Add the CSS Styling to all Angular Webpages',
      summary:
        'Build and program the CSS styling to include coloring and positioning of all angular objects on the angular webpage',
      dueDate: '2025-05-29',
    },
    {
      id: 't15',
      userId: 'u11',
      title: 'Add Special Effects Rendering to the Angular Project',
      summary:
        'Program special effects rendering of all angular webpages when transitioning from webpage to webpage',
      dueDate: '2025-10-27',
    },
    {
      id: 't16',
      userId: 'u6',
      title: 'Build Artificial Intelligence (AI) into the Angular Project',
      summary: 'Program artificial intelligence (AI) into the angular website for all user input fields',
      dueDate: '2025-07-21',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('task');

    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
     localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
