<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
     <div class="form-group">
          <label for="name">Name</label>
          <input
            class="form-control"
            id="name"
            required
            v-model="course.name"
            name="name"
          />

        </div>
          <label for="dept">Dept</label>
          <input
            type="text"
            class="form-control"
            id="dept"
            required
            v-model="course.dept"
            name="dept"

          />

        </div>
         <div class="form-group">
          <label for="houre">Hours</label>
          <input
            class="form-control"
            id="houre"
            required

            v-model="course.hours"

            name="houre"

          />

        </div>

         <div class="form-group">

          <label for="level">Level</label>

          <input

            class="form-control"

            id="level"

            required

            v-model="course.level"

            name="hours"

          />

        </div>

        <div class="form-group">

          <label for="courseNumber">Course Number</label>

          <input

            class="form-control"

            id="courseNumber"

            required

            v-model="course.courseNumber"

            name="courseNumber"

          />
      </div>

      <button @click="saveCourse" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCourse">Add</button>
    </div>
  </div>
</template>

<script>
import CourseDataService from "../services/CourseDataService";

export default {
  name: "add-course",
  data() {
    return {
      course: {
                 id: null,

          dept: "",

          courseNumber: "",

          houre: "",

          level: "",

          name: "",

          description:""
      },
      submitted: false
    };
  },
  methods: {
    saveCourse() {
      var data = {
        title: this.course.title,
        description: this.course.description
      };

      CourseDataService.create(data)
        .then(response => {
          this.course.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newCourse() {
      this.submitted = false;
      this.course = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
