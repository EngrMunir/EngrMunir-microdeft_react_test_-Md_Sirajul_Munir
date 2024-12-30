import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddCourse = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const token = localStorage.getItem("authToken");
    
        const courseData = {
          title: data.title,
          description: data.description,
          badge_text: data.badge_text,
          badge_color: data.badge_color,
          instructor_name: data.instructor_name,
        };

        try {
          const response = await axios.post(
            "https://react-interview.crd4lc.easypanel.host/api/course",
            courseData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
    
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Course Added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        } catch (error) {
          
          alert("Failed to add course. Please try again.");
        }
    };
    
    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-6 text-center">Add New Course</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Course Title"
                        {...register("title", { required: true })}
                        className="border w-full py-2 px-4 mb-4"
                    />
                    {errors.title && <span className="text-red-500">Title is required</span>}
                    <br />
                    <textarea
                        placeholder="Course Description"
                        {...register("description", { required: true })}
                        className="border w-full py-2 px-4 mb-4"
                    />
                    {errors.description && <span className="text-red-500">Description is required</span>}
                    <br />
                    <input
                        type="text"
                        placeholder="Badge Text (e.g., Featured)"
                        {...register("badge_text", { required: true })}
                        className="border w-full py-2 px-4 mb-4"
                    />
                    {errors.badge_text && <span className="text-red-500">Badge text is required</span>}
                    <br />
                    <input
                        type="text"
                        placeholder="Badge Color (e.g., red, yellow, blue)"
                        {...register("badge_color", { required: true })}
                        className="border w-full py-2 px-4 mb-4"
                    />
                    {errors.badge_color && <span className="text-red-500">Badge color is required</span>}
                    <br />

                    <input
                        type="text"
                        placeholder="Instructor Name"
                        {...register("instructor_name", { required: true })}
                        className="border w-full py-2 px-4 mb-4"
                    />
                    {errors.instructor_name && <span className="text-red-500">Instructor name is required</span>}
                    <br />

                    <input
                        className="btn btn-secondary w-full mb-4"
                        type="submit"
                        value="Add Course"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddCourse;
