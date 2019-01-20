import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onUpdate = false;
  title = 'Sami Kerboute';
  courses = [
    { id: 1, title: "Laravel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.", active: true, is_favoris: false, price: 199, date: new Date(), votes: { like: 10, dislike: 0} },
    { id: 2, title: "Angular", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.", active: true, is_favoris: false, price: 142, date: new Date(), votes: { like: 0, dislike: 5} },
    { id: 3, title: "Symfony", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.", active: false, is_favoris: false, price: 22.3, date: new Date(), votes: { like: 3, dislike: 4} },
    { id: 4, title: "Vuejs", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.", active: true, is_favoris: false, price: 99, date: new Date(), votes: { like: 0, dislike: 0} }
  ];
  

  currentCourse = {
    id: 0,
    title: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.",
    active: false,
    is_favoris: false,
    price: 0,
    date: new Date(),
    votes: {
      like: 0,
      dislike: 0
    }
  };

  addCourse() {
    this.courses.unshift(this.currentCourse);
    this.currentCourse = {
      id: 0,
      title: "",
      description: "",
      active: false,
      is_favoris: false,
      price: 0,
      date: new Date(),
      votes: {
        like: 0,
        dislike: 0
      }
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
  toggleFavoris(course){
    course.is_favoris = !course.is_favoris;
  }

  updateVote(course, child){
    if (child.status){
      course.votes.like = child.value;
    }
    else {
      course.votes.disLike = child.value;
    }
  }


}
