import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onUpdate = false;
  title = 'Sami Kerboute';
  courses = [
    { id: 1, title: "Laravel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.", active: true, is_favoris: false, price: 199, date: new Date(), votes: { like: 10, disLike: 0} },
    { id: 2, title: "Angular", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.", active: true, is_favoris: false, price: 142, date: new Date(), votes: { like: 0, disLike: 5} },
    { id: 3, title: "Symfony", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.", active: false, is_favoris: false, price: 22.3, date: new Date(), votes: { like: 3, disLike: 4} },
    { id: 4, title: "Vuejs", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet.", active: true, is_favoris: false, price: 99, date: new Date(), votes: { like: 0, disLike: 0} }
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
      disLike: 0
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
        disLike: 0
      }
    };
  }

  editCourse(course){
    this.onUpdate = true;
    this.currentCourse = course;
  }

  removeCourse(course) {
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
        Swal(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
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
