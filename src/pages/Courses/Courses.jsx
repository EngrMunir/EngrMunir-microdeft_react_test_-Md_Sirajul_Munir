import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Courses.css'; // Link to the CSS file

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          'https://react-interview.crd4lc.easypanel.host/api/course',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data.data);
        setCourses(response.data.data.data);
      } catch (error) {
        console.error('Error fetching courses:', error.response?.data || error.message);
        alert('Failed to fetch courses. Please try again.');
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <div className="courses-container">
      <h2 className="courses-title">Available Courses</h2>
      <div className="cards-wrapper">
        {courses.length ? (
          courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="instructor-name">Instructor: {course.instructor_name}</p>
            </div>
          ))
        ) : (
          <p className="no-courses">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
