import React from 'react'
import COE1stF from '../buildings/coe/COE1stF'
import COE2ndF from '../buildings/coe/COE2ndF'
import COE3rdF from '../buildings/coe/COE3rdF';
import NewAD1stf from '../buildings/new-admin/NewAD1stf';
import enlab1 from "../buildings/coe/rooms/CELAB01.jpg"
import enlab2 from "../buildings/coe/rooms/CELAB02.jpg"
const buildingData = {
 'College of Engineering Building': {
  totalFloors: 3,
  rooms: {
    1: [
      { 
        code: "EN-LAB1", 
        name: "Civil Engineering Lab 1",
        description: "A fully equipped laboratory with soil testing equipment, fluid mechanics apparatus, and material testing instruments, designed for hands-on learning.",
        img: enlab1
      },
      { 
        code: "EN-LAB2", 
        name: "Civil Engineering Lab 2",
        description: "Advanced engineering lab for specialized equipment and testing.",
        img: enlab2
      },
      { 
        code: "EN-101", 
        name: "Classroom 101",
        description: "Standard lecture classroom with multimedia support.",
        img: "/images/coe/en101.jpg"
      },
      { 
        code: "EN-102", 
        name: "Classroom 102",
        description: "Lecture room equipped with projector and air-conditioning.",
        img: "/images/coe/en102.jpg"
      }
    ],
    2: [
      { 
        code: "EN-201", 
        name: "Classroom 201",
        description: "A medium-sized classroom for engineering courses.",
        img: "/images/coe/en201.jpg"
      },
      { 
        code: "EN-202", 
        name: "Classroom 202",
        description: "Lecture hall suitable for larger classes.",
        img: "/images/coe/en202.jpg"
      },
      { 
        code: "EN-203", 
        name: "Physics Lab",
        description: "Equipped for experiments in mechanics, optics, and electricity.",
        img: "/images/coe/physics_lab.jpg"
      }
    ],
    3: [
      { 
        code: "EN-301", 
        name: "Classroom 301",
        description: "Spacious classroom for seminars and group activities.",
        img: "/images/coe/en301.jpg"
      },
      { 
        code: "EN-302", 
        name: "Electronics Laboratory",
        description: "Designed for electronics, circuits, and microprocessor experiments.",
        img: "/images/coe/electronics_lab.jpg"
      }
    ],
  },
  floorImages: {
    1: <COE1stF />,
    2: <COE2ndF />,
    3: <COE3rdF />
  }
},

    'CME/COE Building': {
       totalFloors: 4,
       rooms:{
        1: [
      { 
        code: "EN-LAB1", 
        name: "Civil Engineering Lab 1",
        description: "A fully equipped laboratory with soil testing equipment, fluid mechanics apparatus, and material testing instruments, designed for hands-on learning.",
        img: enlab1
      },
      { 
        code: "EN-LAB2", 
        name: "Civil Engineering Lab 2",
        description: "Advanced engineering lab for specialized equipment and testing.",
        img: enlab2
      },
      { 
        code: "EN-101", 
        name: "Classroom 101",
        description: "Standard lecture classroom with multimedia support.",
        img: "/images/coe/en101.jpg"
      },
      { 
        code: "EN-102", 
        name: "Classroom 102",
        description: "Lecture room equipped with projector and air-conditioning.",
        img: "/images/coe/en102.jpg"
      }
    ], 2: [
      { 
        code: "EN-201", 
        name: "Classroom 201",
        description: "A medium-sized classroom for engineering courses.",
        img: "/images/coe/en201.jpg"
      },
      { 
        code: "EN-202", 
        name: "Classroom 202",
        description: "Lecture hall suitable for larger classes.",
        img: "/images/coe/en202.jpg"
      },
      { 
        code: "EN-203", 
        name: "Physics Lab",
        description: "Equipped for experiments in mechanics, optics, and electricity.",
        img: "/images/coe/physics_lab.jpg"
      }
    ],
       }
    },
    'Education Building': 3,
    'Graduate School Building': 4,
    'Bistro': 1,
    'University Canteen': 1,
    'Stage': 1,
    'College of Technology/ COT Building': 2,
    'Old Admin Building': 2,
    'New Admin Building': {
      totalFloors: 3, // Updated total floors
      floorImages: {
        1: <NewAD1stf />,
      }
    },
    'Student Activity Center': 1,
    'Fitness Gym': 1,
    'Sewing Area': 1,
    'Fablab': 1,
    'Tennis Court': 1,
    'Kadasig Gym': 1,
    'Oval': 1,
    'Grandstand': 1,
    'Study Area': 1,
    'Existing Academic Science Building': 1,
    'Cultural Center': 1,
    'Floating Classroom': 1,
    'CTU Facility Centrum': 2,
    'HM Laboratory': 1,
    'Mens Dorm': 1,
    'Women Dorm': 2,
    'Furniture Workshop': 1,
    'Security Office': 1,
    'ERRC Building': 2,
};

export default buildingData