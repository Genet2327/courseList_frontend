<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name"
          v-model="name"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Courses List</h4>
      <table class="list-group"  >
        <tr>
          <th>Course Number</th>
          <th>Course Name</th>
        </tr>
        <tr  class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(course, index) in courses"
          :key="index"
          @click="setActiveCourse(course, index)">
        <td>{{ course.courseNumber }} </td>
          <td>{{ course.name }} </td>
         
      </tr>
      </table>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllCourses">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentCourse">
        <h4>Course</h4>
        <div>
          <label><strong>Dept:</strong></label> {{ currentCourse.dept }}
        </div>
        <div>
          <label><strong>Houre:</strong></label> {{ currentCourse.houre }}
        </div>
        <div>
          <label><strong>Level:</strong></label> {{ currentCourse.level }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentCourse.name }}
        </div>
         <div>
          <label><strong>course number:</strong></label> {{ currentCourse.courseNumber }}
        </div>
        
        <a 
          :href="'/update/' + currentCourse.id"
        >
       <button  >Update</button>
        </a>
        <a 
          :href="'/delete/' + currentCourse.id"
        >
       <button  >Delete</button>
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Course...</p>
      </div>
    </div>
  </div>
</template>
<script>
import CourseDataService from "../services/CourseDataService";
export default {
  name: "courses-list",
  data() {
    return {
      courses: [],
      currentCourse: null,
      currentIndex: -1,
      dept: "",
      courseNumber: "",
      houre: "",
      name: "",
      description: ""

    };
  },
  methods: {
    retrieveCourses() {
      CourseDataService.getAll()
        .then(response => {
          this.courses = response.data;
          console.log("list of course" + response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCourses();
      this.currentCourse = null;
      this.currentIndex = -1;
    },
    setActiveCourse(course, index) {
      this.currentCourse = course;
      this.currentIndex = index;
    },
    removeAllCourses() {
      CourseDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchName() {
      CourseDataService.findByName(this.name)
        .then(response => {
          this.courses = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveCourses();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
table, th, td {
  border:0px solid black;
  border-collapse: collapse;
}
</style>