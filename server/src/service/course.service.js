const { ExceptionType } = require('../exceptions/exceptions.type');
const HttpException = require('../exceptions/HttpException');
const { readFileSync, writeFileSync } = require('fs')
const uuid = require('uuid');

class CourseService {
  path = './storage/storage.json'

  getCourses() {
    const storage = JSON.parse(readFileSync(this.path));
    console.log(storage);
    if (!storage.length) throw new HttpException(404, ExceptionType.DB_COURSES_NOT_FOUND);
    return storage;
  }

  getCourseById(id) {
    const storage = JSON.parse(readFileSync(this.path));
    const found = storage.find(el => el.id === id) ?? null;
    if (!found) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);
    return found
  }

  createCourse(course) {
    const storage = JSON.parse(readFileSync(this.path));
    storage.push({ id: uuid.v1(), ...course });
    writeFileSync(this.path, JSON.stringify(storage));
  }

  updateCourse(id, course) {
    const storage = JSON.parse(readFileSync(this.path));

    const foundIndex = storage.findIndex(el => el.id === id) ?? null;
    if (foundIndex === -1) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

    storage[foundIndex] = { id, ...course }
    writeFileSync(this.path, JSON.stringify(storage));
  }

  deleteCourse(id) {
    const storage = JSON.parse(readFileSync(this.path));

    const filtered = storage.filter(el => el.id !== id);
    if (storage.length === filtered.length) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

    writeFileSync(this.path, JSON.stringify(filtered));
  }
}

module.exports = { CourseService };
