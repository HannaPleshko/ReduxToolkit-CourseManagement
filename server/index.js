const App = require('./src/app');
const CourseRoute = require('./src/routes/course.route');

const app = new App([new CourseRoute()]);

app.listen();
