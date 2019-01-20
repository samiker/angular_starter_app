import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onUpdate = false;
  title = 'Sami Kerboute';
  // courses = ['laravel', 'symfony', 'donet', 'windev', 'jee'];
  courses = [
    { id: 1, title: "Laravel", active: true },
    { id: 2, title: "Angular", active: true },
    { id: 3, title: "Symfony", active: false },
    { id: 4, title: "Vuejs", active: true }
  ];
  currentCourse = {
    id: 0,
    title: "",
    active: false
  };

  addCourse() {
    this.courses.unshift(this.currentCourse);
    this.currentCourse = {
      id: 0,
      title: "",
      active: false
    };
  }

  editCourse(course){
    this.onUpdate = true;
    this.currentCourse = course;
  }

  removeCourse(course) {
    let r = confirm("Vous etes sur ?");
    if (r == true) {
      let index = this.courses.indexOf(course);
      this.courses.splice(index, 1);
    }
  }

  updateCourse(course){
    this.onUpdate = false;
  }

  togglePower(course){
    course.active = !course.active;
  }

}
