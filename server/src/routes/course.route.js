const { Router } = require('express');
const CourseController = require('../controller/course.controller');

class CourseRoute {
  path = '/course';

  router = Router();
  courseRoute = new CourseController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}`, this.courseRoute.getCourses);
    this.router.get(`${this.path}/:id`, this.courseRoute.getCourseById);
    this.router.post(`${this.path}`, this.courseRoute.createCourse);
    this.router.put(`${this.path}/:id`, this.courseRoute.updateCourse);
    this.router.delete(`${this.path}/:id`, this.courseRoute.deleteCourse);
  }
}

module.exports = CourseRoute;
