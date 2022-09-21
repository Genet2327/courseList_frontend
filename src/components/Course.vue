<template>
  <div v-if="currentUpdate" class="edit-form">   
    <h4>Update</h4>
    <form>

        <div class="form-group">
        <label for="dept">dept</label>
        <input type="text" class="form-control" id="dept"
          v-model="currentdept.dept"
        />
        </div>
      <div class="form-group">
        <label for="update">courseNumber</label>
        <input type="text" class="form-control" id="update"
          v-model="currentUpdate.update"
        />
      </div>
      <div class="form-group">
        <label for="houres">Houres</label>
        <input type="text" class="form-control" id="houres"
          v-model="currentHoures.houres"
        />
      </div>

    <div class="form-group">
        <label for="level">Level</label>
        <input type="text" class="form-control" id="level"
          v-model="currentLevel.level"
        />
      </div>

       <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentName.name"
        />
      </div>

             <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentDescription.description"
        />
      </div>

      <!-- <div class="form-group">
        <label><strong>level:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div> -->
    </form>

    <!-- <button class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    > -->
      <!-- Publish
    </button> -->

    <button class="badge badge-danger mr-2"
      @click="deleteCourses"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateCourses"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Courses...</p>
  </div>
</template>

<script>
import CourseDataService from "../services/CourseDataService";

export default {
  name: "courses",
  data() {
    return {
      currentCourses: null,
      message: ''
    };
  },
  methods: {
    getCourses(id) {
     CourseDataService.get(id)
        .then(response => {
          this.currentCourses = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        dept: this.currentCourses.dept,
        courseNumber: this.currentCourses.courseNumber,
        houres: this.currenthoures.description,
        level: this.currentlevel.level,
        name: this.currentName.name,
      };

      CourseDataService.update(this.currentCourse.id, data)
        .then(response => {
          this.currentCourse.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateCourse() {
      CourseDataService.update(this.currentCourse.id, this.currentCourse)
        .then(response => {
          console.log(response.data);
          this.message = 'The course was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteCourse() {
      CourseDataService.delete(this.currentCourse.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "course" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCourse(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>