import axios from 'axios';

const COURSE_API_URL = 'http://localhost:8080';
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors`;

class CourseDataService {
    retrieveAllCourses(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/${name}/courses`);
    }
}

export default new CourseDataService();