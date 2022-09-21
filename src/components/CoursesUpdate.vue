<template>
  <div v-if="currentCourse" class="edit-form">
    <h4>Course</h4>
    <form>
      <div class="form-group">
        <label for="dept">Department</label>
        <input type="text" class="form-control" id="dept"
          v-model="currentCourse.dept"
        />
      </div>
      <div class="form-group">
        <label for="courseNumber">Course Number</label>
        <input type="text" class="form-control" id="courseNumber"
          v-model="currentCourse.courseNumber"
        />
      </div>
      <div class="form-group">
        <label for="hours">Hours</label>
        <input type="text" class="form-control" id="hours"
          v-model="currentCourse.houre"
        />
      </div>
      <div class="form-group">
        <label for="level">Level</label>
        <input type="text" class="form-control" id="level"
          v-model="currentCourse.level"
        />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentCourse.name"
        />
      </div>
    </form>

    <button type="submit" class="badge badge-success"
      @click="updateCourse"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import CourseDataService from "../services/CourseDataService";

export default {
  name: "course",
  data() {
    return {
      currentCourse: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      CourseDataService.get(id)
        .then(response => {
          this.currentCourse = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    // updatePublished(status) {
    //   var data = {
    //     id: this.currentCourse.id,
    //     title: this.currentCourse.title,
    //     description: this.currentCourse.description,
    //     published: status
    //   };

    //   TutorialDataService.update(this.currentCourse.id, data)
    //     .then(response => {
    //       this.currentCourse.published = status;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    updateCourse() {
      CourseDataService.update(this.currentCourse.id, this.currentCourse)
        .then(response => {
          console.log(response.data);
          this.message = 'The course was updated successfully!';
          this.$router.push({ name: "courses" });
        })
        .catch(e => {
          console.log(e);
        });
    },

    // deleteTutorial() {
    //   TutorialDataService.delete(this.currentCourse.id)
    //     .then(response => {
    //       console.log(response.data);
    //       this.$router.push({ name: "tutorials" });
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>