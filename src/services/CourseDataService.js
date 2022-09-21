import http from "../http-common";
class CourseDataService {
  getAll() {
    return http.get("/course-t6");
  }
  get(id) {
    return http.get(`/course-t6/${id}`);
  }
  create(data) {
    return http.post("/courses-t6", data);
  }
  update(id, data) {
    return http.put(`/course-t6/${id}`, data);
  }
  delete(id) {
    return http.delete(`/course-t6/${id}`);
  }
  deleteAll() {
    return http.delete(`/course-t6/`);
  }
  findByName(name) {
    return http.get(`/course-t6?name=${name}`);
  }
}
export default new CourseDataService();