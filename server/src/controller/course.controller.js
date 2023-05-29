const { CourseService } = require('../service/course.service');
const { SuccessType } = require('../exceptions/exceptions.type');

class CourseController {
  courseService = new CourseService();

  getCourses = (req, res, next) => {
    try {
      res.status(200).send(this.courseService.getCourses());
    } catch (error) {
      next(error);
    }
  };

  getCourseById = (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).send(this.courseService.getCourseById(id));
    } catch (error) {
      next(error);
    }
  };

  createCourse = (req, res, next) => {
    try {
      const course = req.body;
      this.courseService.createCourse(course)
      res.status(200).send(SuccessType.COURSE_CREATE_SUCCESS);
    } catch (error) {
      next(error);
    }
  };

  updateCourse = (req, res, next) => {
    try {
      const { id } = req.params;
      const course = req.body;
      this.courseService.updateCourse(id, course)
      res.status(200).send(SuccessType.COURSE_UPDATE_SUCCESS);
    } catch (error) {
      next(error);
    }
  };

  deleteCourse = (req, res, next) => {
    try {
      const { id } = req.params;
      this.courseService.deleteCourse(id)
      res.status(200).send(SuccessType.COURSE_DELETE_SUCCESS);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CourseController;
