//courses.js
import math1 from '../assets/math1.png';
import math2 from '../assets/math2.png';
import math3 from '../assets/math3.png';
import math4 from '../assets/math4.png';
import lit1 from '../assets/lit1.png';
import lit2 from '../assets/lit2.png';
import lit3 from '../assets/lit3.png';
import lit4 from '../assets/lit4.png';

export const subjects = ['Math', 'Literature', 'English', 'Art'];

const description =
  'Course summarizing semester 1 knowledge for 3rd graders according to the program at school. The course includes 120 lessons, which students study for 3 months';

export const courses = [
  { id: 1, subject: 'Math', title: 'Math course for 3rd grade children', teacher: 'Anna Smith', description, price: 380, oldPrice: 500, students: 40, image: math1, createdAt: '2023-05-01' },
  { id: 2, subject: 'Math', title: 'Math course for 3rd grade children', teacher: 'John Doe', description, price: 380, oldPrice: 500, students: 40, image: math2, createdAt: '2023-04-20' },
  { id: 3, subject: 'Math', title: 'Math course for 3rd grade children', teacher: 'Mary Jane', description, price: 380, oldPrice: 500, students: 40, image: math3, createdAt: '2023-04-10' },
  { id: 4, subject: 'Math', title: 'Math course for 3rd grade children', teacher: 'Peter Parker', description, price: 380, oldPrice: 500, students: 40, image: math4, createdAt: '2023-03-30' },
  { id: 5, subject: 'Literature', title: 'Literature course for 3rd grade children', teacher: 'Anna Smith', description, price: 380, oldPrice: 500, students: 40, image: lit1, createdAt: '2023-05-02' },
  { id: 6, subject: 'Literature', title: 'Literature course for 3rd grade children', teacher: 'John Doe', description, price: 380, oldPrice: 500, students: 40, image: lit2, createdAt: '2023-04-22' },
  { id: 7, subject: 'Literature', title: 'Literature course for 3rd grade children', teacher: 'Mary Jane', description, price: 380, oldPrice: 500, students: 40, image: lit3, createdAt: '2023-04-12' },
  { id: 8, subject: 'Literature', title: 'Literature course for 3rd grade children', teacher: 'Peter Parker', description, price: 380, oldPrice: 500, students: 40, image: lit4, createdAt: '2023-03-28' },
];


