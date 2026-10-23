import t1 from '../assets/teacher1.png';
import t2 from '../assets/teacher2.png';
import t3 from '../assets/teacher3.png';
import t4 from '../assets/teacher4.png';
import t5 from '../assets/teacher5.png';
import t6 from '../assets/teacher6.png';
import t7 from '../assets/teacher7.png';
import t8 from '../assets/teacher8.png';

export const teachers = [
  { id: 1, name: 'Jassica Nephi', photo: t1, rating: 5, years: 5, subject: 'Math', school: 'Weston' },
  { id: 2, name: 'Henry, Arthur', photo: t2, rating: 5, years: 10, subject: 'English', school: 'Weston' },
  { id: 3, name: 'Flores, Juanita', photo: t3, rating: 5, years: 3, subject: 'Math', school: 'VinVi' },
  { id: 4, name: 'Nguyen, Shane', photo: t4, rating: 5, years: 4, subject: 'Math', school: 'Wing' },
  { id: 5, name: 'Courtney Henry', photo: t5, rating: 5, years: 5, subject: 'Math', school: 'Weston' },
  { id: 6, name: 'Leslie Alexander', photo: t6, rating: 5, years: 10, subject: 'English', school: 'Weston' },
  { id: 7, name: 'Jerome Bell', photo: t7, rating: 5, years: 3, subject: 'Math', school: 'VinVi' },
  { id: 8, name: 'Arlene McCoy', photo: t8, rating: 5, years: 4, subject: 'Math', school: 'Wing' },
];

export const defaultTeacherDetails = {
  totalCourses: 30,
  rating: 4.9,
  reviews: 153,
  graduated: 'Yes',
  languages: 'English, French',
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.',
  certification:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.',
};

import av1 from '../assets/jessica.png';
import av2 from '../assets/darlene.png';
import av3 from '../assets/diane.png';

export const reviews = [
  { id: 1, name: 'Jassica Andrew', avatar: av1, text: 'My child has improved a lot after finishing school. Thank you so much Edudu.' },
  { id: 2, name: 'Darlene Robertson', avatar: av2, text: 'My child knows how to achieve very good classes. English ability is also much better. The cost is very cheap, so you should register. Thank you very much Edudu.' },
  { id: 3, name: 'Dianne Russell', avatar: av3, text: 'My child has improved a lot after finishing school. Thank you so much Edudu.' },
  { id: 4, name: 'Cameron Willow', avatar: av1, text: 'The teachers are patient and the lessons are fun. Highly recommended!' },
  { id: 5, name: 'Esther Howard', avatar: av2, text: 'Flexible schedule and great results. My son loves the live classes.' },
];

import mathIcon from '../assets/math.png'
import litIcon from '../assets/literature.png'
import engIcon from '../assets/english.png'
import artIcon from '../assets/arts.png'

export const subjects = [
  { id: 1, name: 'Math', icon: mathIcon },
  { id: 2, name: 'Literature', icon: litIcon },
  { id: 3, name: 'English', icon: engIcon },
  { id: 4, name: 'Art', icon: artIcon },
];

export const outcomes = [
  'Master program knowledge at school',
  'The ability to criticize knowledge increases',
  'Respond confidently when encountering difficult situations',
];


import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/LinkedIn.png';

 export const socials = [
  { id: 1, name: 'Facebook', icon: facebook },
  { id: 2, name: 'Twitter', icon: twitter },
  { id: 3, name: 'LinkedIn', icon: linkedin },
];

export const columns = [
  {
    title: 'Courses',
    links: ['Classroom courses', 'Virtual classroom courses', 'E-learning courses', 'Video Courses', 'Offline Courses'],
  },
  {
    title: 'Community',
    links: ['Learners', 'Partners', 'Developers', 'Transactions', 'Blog', 'Teaching Center'],
  },
  {
    title: 'Quick links',
    links: ['Home', 'Professional Education', 'Courses', 'Admissions', 'Testimonial', 'Programs'],
  },
  {
    title: 'More',
    links: ['Press', 'Investors', 'Terms', 'Privacy', 'Help', 'Contact'],
  },
];


import audio from '../assets/audio.png';
import live from '../assets/live.png';
import recorded from '../assets/record.png';

export const tabs = [
  { id: 'audio', label: 'Audio Classes', icon: audio },
  { id: 'live', label: 'Live Classes', icon: live },
  { id: 'recorded', label: 'Recorded Class', icon: recorded },
];
