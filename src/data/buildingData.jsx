import React from 'react'


import enlab1 from "../assets/rooms/coe/CELAB01.webp"
import enlab2 from "../assets/rooms/coe/CELAB02.webp"

// COT grndflr IMAGES
import artMastersClub from "../assets/rooms/COT-GrndFlr/ArtMastersClub.webp"
import COTFemaleCr from "../assets/rooms/COT-GrndFlr/COTFemaleCR.webp"
import COTMaleCr from "../assets/rooms/COT-GrndFlr/COTMaleCR.webp"
import room26 from "../assets/rooms/COT-GrndFlr/Room26.webp"
import room27 from "../assets/rooms/COT-GrndFlr/Room27.webp"
import room34 from "../assets/rooms/COT-GrndFlr/Room34.webp"
import room35 from "../assets/rooms/COT-GrndFlr/Room35.webp"
import room36 from "../assets/rooms/COT-GrndFlr/Room36.webp"
import room37 from "../assets/rooms/COT-GrndFlr/Room37.webp"
import room38 from "../assets/rooms/COT-GrndFlr/Room38.webp"
import room39 from "../assets/rooms/COT-GrndFlr/Room39.webp"
import room40 from "../assets/rooms/COT-GrndFlr/Room40.webp"
import room41 from "../assets/rooms/COT-GrndFlr/Room41.webp"
import GADoffice from "../assets/rooms/COT-GrndFlr/GADOffice.webp"
import NSTPoffice from "../assets/rooms/COT-GrndFlr/NSTPOffice.webp"
import COTCompLab from "../assets/rooms/COT-GrndFlr/COTComlab.webp"




import sac from "../assets/rooms/Bldgs/SAC.jpg"
import studyarea from "../assets//rooms/Bldgs/BlueTables.jpg"
import laundryshop from "../assets/rooms/Bldgs/Laundry.jpg"
import floatingarea from "../assets/rooms/Bldgs/FloatingArea.jpg"
import HMLab from "../assets/rooms/Bldgs/HMKitchenLaboratory.jpg"
import PEhall from "../assets/rooms/Bldgs/PEHall.jpg"
import womensdorm from "../assets/rooms/Dormitories/Women'sDormitory.jpg"
import mensdorm from "../assets/rooms/Dormitories/MensDormitory.jpg"
import Fablab from "../assets/rooms/FABLAB/FABLAB.jpg"
import fitness from "../assets/rooms/Bldgs/FitnessGym.jpg"
import bistro from "../assets/rooms/bistro&canteen/Bistro.jpg"
import Canteen from "../assets/rooms/bistro&canteen/Canteen.jpg"

// EDUC IMAGES

import Edtechlab1 from "../assets/rooms/EducationLabs/EdTechLab1.jpg"
import Edtechlab2 from "../assets/rooms/EducationLabs/EdTechLab2.jpg"
import chemlab from "../assets/rooms/EducationLabs/ChemistryLab.jpg"
import room12 from "../assets/rooms/Educrooms/Room12.jpg" 



const buildingData = {
 'College of Engineering Building': {
  totalFloors: 3,
  rooms: {
    1: [
      { 
        code: "", 
        name: "Electrical Engineering Laboratory",
        description: "A specialized room equipped with electrical tools, testing instruments, and training panels where students conduct experiments and practical activities related to circuits, wiring, and power systems.",
        img:enlab1
      },
      { 
        code: " ", 
        name: "Engineering Laboratory",
        description: "A workspace designed for hands-on experiments and projects across different engineering fields, equipped with tools, machines, and equipment for practical learning and testing.",
        img: enlab2
      },
      { 
        code: " ", 
        name: "Computer Laboratory 1",
        description: "A room equipped with desktop computers and internet access where students practice programming, research, and other computer-related activities.",
        img:" "
      },
      { 
        code: " ", 
        name: "Computer Laboratory 2",
        description: " A well-equipped room with computers and internet access used for programming, research, and computer-based lessons.",
        img: " "
      },
      { 
        
        code: " ", 
        name: "Electronic Laboratory",
        description: " A well-equipped room with computers and internet access used for programming, research, and computer-based lessons.",
        img: " "


      },
      {        
        code: " ", 
        name: "CLassroom",
        description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
        img: " "


      },
      {
        code: " ", 
        name: "CLassroom",
        description: "A learning area where students attend lectures, participate in discussions, and work on academic activities guided by their teachers. ",
        img: " "
         }
    ],
    2: [
      { 
        code: " ", 
        name: " ",
        description: " ",
        img: " "
      },
      { 
        code: " ", 
        name: " ",
        description: " ",
        img: " "
      },
      { 
        code: " ", 
        name: " ",
        description: " ",
        img: " "
      }
    ],
    3: [
      { 
        code: " ", 
        name: " ",
        description: " ",
        img: " "
      },
      { 
        code: " ", 
        name: " ",
        description: " ",
        img: " "
      }
    ],
  }
},

  'CME/COE Building': {
      totalFloors: 4,
      rooms:{
      1: [
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    },
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    },
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    },
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    }
  ], 2: [
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    },
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    },
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    }
  ],
}
  },
  'Education Building': {
    totalFloors: 3,
rooms: {
  1: [
    { 
      code: " ", 
      name: "Education Laboratory 1",
      description: "A learning space designed for education students to practice teaching methods, classroom management, and lesson demonstrations.",
      img: " "
    },
    { 
      code: " ", 
      name: "Education Laboratory 2",
      description: "A learning space designed for education students to practice teaching methods, classroom management, and lesson demonstrations.",
      img: " "
    },
    { 
      code: " ", 
      name: "EDTECH Laboratory 1",
      description: "A simple learning space equipped with basic instructional tools such as a smart tv and standard tables. Designed for small classes, presentations, and educational activities that require minimal technology. Suitable for group work and general academic use. ",
      img: Edtechlab1
    },
    { 
      code: " ", 
      name: "EDTECH Laboratory 2",
      description: "A learning space with tables, chairs, and a smart tv for instructional use. Suitable for group discussions, presentations, and watching educational videos. Simple and functional, not heavily technology-focused. ",
      img: Edtechlab2
    },
    { 
      code: " ", 
      name: "General Chemistry Laboratory",
      description: "A laboratory designed for conducting chemistry experiments and practical lessons. Equipped with lab benches, sinks, basic glassware, and safety equipment. Suitable for hands-on learning in chemical concepts and experiments. ",
      img: chemlab
    },
    { 
      code: " ", 
      name: "Room 12 ",
      description: "A standard classroom with desks, chairs, and a whiteboard. Suitable for lectures, discussions, and small group activities. Simple, functional, and well-lit for academic use. ",
      img: room12
    },
  
  
  ],
  2: [
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: ""
    },
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    },
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    }
  ],
  3: [
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    },
    { 
      code: " ", 
      name: " ",
      description: " ",
      img: " "
    }
  ],
}
    
  },
  
  
  'Graduate School Building': {
    totalFloors: 4,
    rooms:{
  1:[
  {
    code:"",
    name:" ",
    description: " ",
    img: ""
    },
  {
    code:"",
    name:" ",
  description: " ",
  img: ""
  },
  {
  code:"",
    name:" ",
  description: " ",
  img: ""
  },
  {
  code:"",
  name:" ",
  description: " ",
  img: ""
  },
  {
    code:"",
    name:" ",
  description: " ",
  img: ""
  }
  ],
  2:[
    {
    code:"",
    name:" ",
    description: " ",
    img: ""

    },
    {
  code:"",
    name:" ",
  description: " ",
  img: ""
    },
    {
    code:"",
  name:" ",
  description: " ",
  img: ""
  },
    {
    code:"",
    name:" ",
    description: " ",
    img: ""
  }
  ],
  3:
  [
    {
      code:"",
      name:" ",
      description: " ",
      img: ""
},
    {
      code:"",
      name:" ",
      description: " ",
      img: ""
},
    {
code:"",
name:" ",
description: " ",
img: ""
    },
    {
code:"",
name:" ",
description: " ",
img: ""
    },
      {
  code:"",
  name:" ",
  description: " ",
  img: ""
  }
  ],
  4:[
  {
    code:"",
name:" ",
description: " ",
img: ""
},
  {
    code:"",
name:" ",
description: " ",
img: ""
  },
  {
    code:"",
name:" ",
description: " ",
img: ""
  },
  {
    code:"",
name:" ",
description: " ",
img: ""
}

],



    }
  },
  'Bistro': {
    totalFloors: 1,
    rooms:{
      1:[
        {
          code:"",
          name:"Bistro",
          description: "A small dining area on campus where students and staff can buy and enjoy meals, snacks, and beverages. ",
          img: bistro
    }
      ]
    }
  },
  'University Canteen': {
totalFloors: 1,
rooms:{
1:[
{
code:"",
name:"Canteen",
description: "A spacious dining area offering a variety of affordable meals and snacks. Includes seating for students and staff, clean food counters, hand-washing stations, and proper ventilation. Suitable for meals, breaks, and informal gatherings. ",
img: Canteen
}

]
}

  },
  

  'College of Technology/COT Building': {
    totalFloors: 2,
      rooms: {
        1: [
          { 
            code: "Room 26", 
            name: "Room 26",
            description: "A learning area where students attend lectures, participate in discussions, and work on academic activities guided by their teachers.",
            img: room26
          },
          { 
            code: "Room 27", 
            name: "Automation Laboratory",
            description: "A specialized room equipped with controllers, sensors, and training kits where students learn and practice automation and control system applications. ",
            img: room27
          },
          { 
            code: "Room 34", 
            name: "Room 34",
            description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
            img: room34
          },
          { 
            code: "Room 35", 
            name: "Room 35",
            description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
            img: room35
          },
          { 
            
            code: "Room 36", 
            name: "Room 36",
            description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
            img: room36


          },
          {        
            code: "Room 37", 
            name: "Room 37",
            description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
            img: room37


          },
          {
            code: " ", 
            name: "Sanitation Staff Office",
            description: "A workspace for the sanitation personnel where cleaning materials are stored and daily maintenance tasks are organized.",
            img:""
            },
            {
            code:"Room 38",
              name: "Industrial Motor Control / Electrical Laboratory",
            description: "A training lab equipped with motors, control panels, and electrical tools where students learn about motor operations, wiring systems, and industrial control applications.",
            img: room38

            }, 
            {
              code:"Room 39",
              name: "Automation Laboratory 3 / Electronic Laboratory ",
            description: "A lab equipped with electronic components, circuit boards, and automation kits where students conduct experiments and projects related to electronics and control systems.",
            img: room39


            },
            {
              code:"Room 40",
              name: "Drafting Laboratory",
              description: "A classroom equipped with drawing tables, computers, and design tools where students create technical drawings and design plans for engineering and architectural projects.",
              img: room40

            },
            {
            code:"Room 41",
            name: "Motor Control / Electrical & Instrumentation Laboratory ",
            description: "A specialized lab with equipment for studying motor control systems, electrical wiring, and instrumentation used in monitoring and automation processes.",
            img: room41


            },
            {
            
            code: " ",
            name: "COT Computer Laboratory",
            description: " room equipped with computers and internet access where students learn programming, digital applications, and other computer-related skills. ",
            img: COTCompLab
            }, 
            {
            
            code: " ",
            name: "ArtmasterClub",
            description: "A creative space designed for art-related activities and workshops. Equipped with tables, chairs, basic art materials, and display areas. Suitable for drawing, painting, group projects, and club meetings.",
            img: artMastersClub
            }, 
            {
              code:"Room 46",
              name: "Room 46",
            description: "A specialized workspace equipped with tools, materials, and equipment for hands-on Technical-Livelihood Education activities. ",
            img: ""
            },
            {
            code:"",
            name: "Storage Room",
            description: "A designated area used to store school equipment, tools, and other materials in an organized and secure manner.",
            img: ""
                        
            },
            {
            code:"",
            name: "GAD Office",
            description: "The Office where programs and activities promoting equality, inclusivity, and student welfare are planned and managed.",
            img: GADoffice


            },
          {
            code:"",
            name: "COTMaleCR",
            description: "A clean and accessible male comfort room located in the College of Technology area. Equipped with urinals, toilet cubicles, sinks, and proper ventilation. ",
            img: COTMaleCr
            },
            {
            code:"",
            name: "COTFemaleCR",
            description: "A clean and accessible female comfort room located in the College of Technology area. Equipped with urinals, toilet cubicles, sinks, and proper ventilation. ",
            img: COTFemaleCr
            },
            {
            code: "",
            name: "NSTP Office",
            description: "The National Service Training Program Office where activities and records related to NSTP components, such as CWTS and ROTC, are managed and coordinated. ",
            img: NSTPoffice
    }
    
        ],
        2: [
          { 
            code: " ", 
            name: " ",
            description: " ",
            img: " "
          },
          { 
            code: " ", 
            name: " ",
            description: " ",
            img: " "
          },
          { 
            code: " ", 
            name: " ",
            description: " ",
            img: " "
          },
          {       
            code: " ", 
            name: " ",
            description: " ",
            img: " "
          }, 
          {
          code: " ", 
            name: " ",
            description: " ",
            img: " "

          }, 
          {
            code: " ", 
            name: " ",
            description: " ",
            img: " "
            },
            {
            code: " ", 
            name: " ",
            description: " ",
            img: " "

            },
            {
            code: " ", 
            name: " ",
            description: " ",
            img: " "
            }

        ]
      }

  },
  'Old Admin Building': {
    totalFloors: 2,
    rooms:{
1:[
{
code:"",
name:"Records",
description: "The office where student files, academic documents, and other important school records are securely kept and managed. ",
img:" "
},
{
code:"",
name:"COT Faculty",
description: "A workspace for instructors under the College of Technology where they prepare lessons, meet students, and handle academic-related tasks. ",
img:" "
},
{
code:"",
name:"COT Office",
description: "The main office of the College of Technology where administrative tasks, student concerns, and faculty matters are managed. ",
img:" "
},
{
code:"",
name:"COT Stock Room 1",
description: "A room used for storing tools, materials, and equipment needed for classes, projects, or laboratory activities. ",
img:" "
},
{
code:"",
name:"Old Admin Storage Room ",
description: "A space designated for keeping school supplies, tools, and equipment organized and safely stored. ",
img:" "
},
{
code:"",
name:" COT Office 1",
description: "A workspace where staff and faculty handle administrative duties, paperwork, and student-related concerns. ",
img:" "
}, 
{
code:"",
name:"COT Office 2",
description: "A workspace where staff and faculty handle administrative duties, paperwork, and student-related concerns. ",
img: ""
},
{
code:"",
name:"COT Dean's Office ",
description: "The main office of the College of Technology Dean where administrative decisions, faculty coordination, and student consultations are conducted. ",
img: ""
},
{
code:"",
name:"COT Stock Room 2",
description: "A room used for storing tools, materials, and equipment needed for classes, projects, or laboratory activities. ",
img: ""
},
{
code:"",
name:"Supply Office",
description: "The area where school supplies, materials, and equipment are managed, issued, and recorded for campus use. ",
img: ""
},
{
code:"",
name:"Extension and Production Office",
description: "An office that manages community extension projects and school production activities, supporting both student learning and community development. ",
img: ""
},
{
code:"",
name:"COT Stock Room 3 ",
description: "A room used for storing tools, materials, and equipment needed for classes, projects, or laboratory activities. ",
img: ""
},
{
code:"",
name:"Production Office ",
description: "A workspace where school production activities are planned, organized, and managed to support academic and institutional projects. ",
img: ""
},
{
code:"",
name:"Production Area",
description: "A designated workspace where practical production tasks, projects, and hands-on activities are carried out using school equipment and materials. ",
img: ""
},
{
code:"",
name:"Stock Room 3",
description: "A room used for storing tools, materials, and equipment needed for classes, projects, or laboratory activities. ",
img: ""
}


],
2:
[
{
code:"",
name:"",
description: " ",
img:" "
}, 
{
code:"",
name:"",
description: " ",
img:" "
},
{
code:"",
name:"",
description: " ",
img:" "
},
{
code:"",
name:"",
description: " ",
img:" "
},
{
code:"",
name:"",
description: " ",
img:" "
},
{
code:"",
name:"",
description: " ",
img:" "
}

]


    }

  },
  'New Admin Building': {
    totalFloors: 3, rooms:{
  1:[
{
code:"",
name:"Accounting Office",
description: "The office responsible for managing the school’s financial transactions, including payments, fees, and other accounting records. ",
img: ""
},
{
code:"",
name:"MIS Office",
description: "The office that handles the school’s data management, computer systems, and network services. ",
img: ""
},
{
code:"",
name:"Registrar",
description: "The office that manages student records, enrollment, grades, and official school documents. ",
img: ""
}, 
{
code:"",
name:"Cashier",
description: "The office where students and staff process payments, fees, and other financial transactions. ",
img: ""
},
{
code:"",
name:"BAC Office",
description: "The office where procurement processes, bidding, and acquisition of school goods and services are managed. ",
img: ""
},
{
code:"",
name:"University Clinic",
description: "A healthcare facility on campus where students and staff receive medical attention, consultations, and basic health services. ",
img: ""
}, 
{
code:"",
name:"Power House",
description: "A facility that supplies and manages electricity for the school, ensuring a stable and continuous power supply for all campus operations. ",
img: ""
},
{
code:"",
name:" ",
description: " ",
img: ""
}, 
{
code:"",
name:" ",
description: " ",
img: ""
},
{
code:"",
name:" ",
description: " ",
img: ""
},
{
code:"",
name:" ",
description: " ",
img: ""
},

  ], 

2:[
{
code:"",
name:" ",
description: " ",
img: ""
},
{
code:"",
name:" ",
description: " ",
img: ""
}, 
{
code:"",
name:" ",
description: " ",
img: ""
}
],
3:[
{
code:"",
name:" ",
description: " ",
img: ""
}


],


    }
  },
  'Student Activity Center': {
    totalFloors: 1,
    rooms:{
      1:[
      {
        code:"SAC",
        name:"Student Activity Center ",
        description: "A space where students gather for events, meetings, recreational activities, and extracurricular programs. ",
        img: sac
      }

      ]
    }
  },
  'Fitness Gym': {
    totalFloors:1,
    rooms:{
      1:[
        {
    code:"",
    name:"Fitness Gym ",
    description: "A facility equipped with exercise machines and workout areas where students and staff can engage in physical fitness and training activities. ",
      img: fitness
        }
      ]
    }
  },
  'Sewing Area': {
    totalFloors:1,rooms:{
      1:[
        {
    code:"",
    name:"Sewing Area ",
    description: "A workspace equipped with sewing machines, fabrics, and tools where students practice garment making and textile projects. ",
      img: ""
        }
      ]
    }
  },
  'Fablab': {
    totalFloors:1,rooms:{
      1:[
        {
    code:"",
    name:"Fablab ",
    description: "A fabrication laboratory equipped with tools and machines like 3D printers, laser cutters, and CNC machines where students create prototypes and innovative projects.",
    img: Fablab
        }
      ]
    }
  },
  'Tennis Court': {
    totalFloors: 1, rooms:{
      1:[
        {
          code:"",
    name:"Tennis Court ",
    description: "An outdoor sports area with marked courts and nets where students and staff can play tennis and practice related skills. ",
    img: "" 
        }
      ]
    }
  },
  'Kadasig Gym': {
    totalFloors: 1, rooms:{
      1:[
        {
          code:"",
      name:"Kadasig Gym ",
      description: "A gymnasium where students participate in sports, physical education classes, and school events, equipped with courts and seating areas. ",
      img: ""
        }
      ]
    }
  },
  'Oval': {
    totalFloors:1, rooms:{
      1:[
        {
    code:"",
    name:"Oval ",
    description: "A large outdoor field within the CTU campus used for athletics, physical education classes, training, and university events. It commonly features a running track and a spacious central area for sports and recreational activities. ",
    img: ""

        }
      ]
    }
  },
  
  'Grandstand': {
    totalFloors:1, rooms:{
      1:[
        {
    code:"",
    name:"Grandstand ",
    description: "A seating structure near sports fields where students and spectators can watch athletic events and other outdoor activities. ",
    img: ""

        }
      ]
    }
  },
    'Study Area': {
      totalFloors:1, rooms:{
        1:[
          {
      code:"",
      name:"Study Area ",
      description: "A quiet space where students can read, research, and complete assignments individually or in small groups. ",
      img: ""
          }
        ]
      }
    },
  'Existing Academic Science Building': {
    totalFloors:1, rooms:{
      1:[
        {
  code:"",
    name:"Academic Science Building ",
    description: "A facility housing classrooms and laboratories where students conduct lessons and experiments in various science subjects. ",
    img: ""
        }
      ]
    }
  },
  'Cultural Center': {
    totalFloors:1,
    rooms:{
    1:[
    {
  code:"",
  name:"Cultural Center ",
    description: "A venue for promoting arts, traditions, and cultural activities, hosting performances, exhibits, and community events. ",
    img: ""
    }
    ]
    }
  },
  'Floating Classroom': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
  name:"Floating Classroom",
  description: "A unique learning space where students engage in lessons and activities. ",
  img: floatingarea
        }
      ]
    }
  },
  'CTU Facility Centrum': {
    totalFloors: 2,
    rooms:{
      1:[
        {
      code:"",
      name:"Centrum",
      description: "A central hub within the campus that houses various university facilities and services, designed to support student activities, academic functions, and administrative needs. ",
      img: ""
        }
      ],
      2:[
        {
    code:"",
    name:" ",
    description: " ",
    img: ""
        }
      ]
    }
  },
  'HM Laboratory': {
    totalFloors:1,
    rooms:{
      1:[
        {
        code:"",
        name:"HM Laboratory ",
        description: "A practical room where students learn and practice household management skills such as cooking, cleaning, and basic home organization. ",
        img: HMLab
}
      ]
    }
  },
  'Mens Dorm': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Men's Dorm ",
    description: "A residential building where male students live, providing beds, study areas, and basic amenities for daily living. ",
    img: mensdorm
        }
      ]
    }
  },
  'Womens Dorm': {
    totalFloors:2,
    rooms:{
      1:[
        {
    code:"",
    name:"Women's Dormitory",
    description: "A secure and comfortable residential facility for female students. Includes shared bedrooms, restrooms, common areas, and basic amenities. Provides a safe and supportive environment for study, rest, and daily living. ",
    img: womensdorm
        }
      ],
      2:[
        {
    code:"",
    name:" ",
    description: " ",
    img: ""
        }
      ]
    }
  },
  'Furniture Workshop': {
    totalFloors:1, 
    rooms:{
    1:[

{
code:"",
name:"Furniture Workshop ",
description: "A practical workspace equipped with woodworking tools and materials where students design, build, and finish furniture pieces. ",
img: ""
}

    ]
    }
  },
  'Security Office': {
    totalFloors: 1, 
    rooms:{
      1: [
        {
          code:"",
          name:"Security Office",
          description:"The area where campus security personnel monitor safety, assist students, and ensure the school’s rules and regulations are followed.",
          img: " "

      }

]

    }
  },
  'ERRC Building':{  
    totalFloors:1,
    rooms: {
  1: [
    { 
      code: " ", 
      name: "Storage Room ",
      description: "A space used to keep school equipment, supplies, and materials organized and safely stored.",
      img: " "
    },
    { 
      code: " ", 
      name: "",
      description: " ",
      img: " "
    }, 
          { 
      code: " ", 
      name: "Classrom 1",
      description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
      img: " "
    }, 
    { 
      code: " ", 
      name: "Classroom 2",
      description: "A learning area where students attend lectures, participate in discussions, and work on academic activities guided by their teachers.",
      img: " "
    }, 
    { 
      code: " ", 
      name: "Office",
      description: "A workspace where school staff and administrators handle records, documents, and other administrative tasks.",
      img: " "
    }, 
      { 
      code: " ", 
      name: "Conference Room",
      description: "A meeting area equipped with tables and chairs where staff, faculty, and students hold discussions, presentations, and meetings.",
      img: " "
    }, 


  
  ]
}
}, 
 'PE hall': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"PE Hall",
    description: "A large indoor space for physical education activities and sports. Equipped with open flooring, basic sports equipment, and seating for spectators. Suitable for exercise, training, and indoor sports events. ",
    img: PEhall
        }
      ]
    }
  },
//  'Study Area': {
//     totalFloors: 1,
//     rooms:{
//       1:[
//         {
//      code:"Blue Tables",
//     name:"Study Area",
//     description: "A quiet space designed for individual or group studying. Equipped with tables, chairs, and good lighting. Ideal for reading, research, and focused academic work.  ",
//     img: studyarea
//         }
//       ]
//     }
//   },
  'Laundry Shop': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Laundry Shop",
    description: "A facility for washing and drying clothes. Equipped with washing machines, drying racks, and workstations. Provides convenient laundry services for students and staff.  ",
    img: laundryshop
        }
      ]
    }
  },
   'Carpentry Shop': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Carpentry Shop",
    description: "A designated workshop where students develop woodworking skills and complete hands-on projects using tools, equipment, and carpentry techniques. ",
    img:""
        }
      ]
    }
  },
  'Sports & Athletics Office ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Sports & Athletics Office ",
    description: "The office responsible for managing the school’s sports programs, athletic events, team coordination, and student-athlete support services. ",
    img:""
        }
      ]
    }
  },
 ' Socio-Cultural Office ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Socio-Cultural Office ",
    description: "The office that plans and manages cultural, social, and community-building activities on campus, supporting student organizations and promoting cultural awareness and engagement. ",
    img:""
        }
      ]
    }
  },
' Mechanical Engineering Lab 1': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:" Mechanical Engineering Lab 1 ",
    description: "A laboratory equipped for foundational mechanical engineering experiments and hands-on activities, where students explore basic principles in mechanics, materials, and machine operations. ",
    img:""
        }
      ]
    }
  },
' Mechanical Engineering Lab 2': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:" Mechanical Engineering Lab 2 ",
    description: "An advanced laboratory for mechanical engineering students, equipped for experiments and practical work in areas such as thermodynamics, fluid mechanics, and machine design. ",
    img:""
        }
      ]
    }
  },
  'Maintenance Office ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"The office responsible for managing and coordinating the upkeep, repair, and maintenance of campus buildings, facilities, and equipment. ",
    description: " ",
    img:""
        }
      ]
    }
  },
   'Faculty CR near Tennis Court ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Faculty CR",
    description: "A designated comfort room reserved for faculty members, providing private and convenient restroom facilities within the campus. ",
    img:""
        }
      ]
    }
  },
'Electrical Shop ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Electrical Shop ",
    description: "A workshop where students learn and practice electrical wiring, circuits, and related hands-on skills, using tools and equipment for training in electrical systems and maintenance.",
    img:""
        }
      ]
    }
  },
'Sanitation Staff Office ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Sanitation Staff Office ",
    description: "The office where the sanitation team coordinates cleaning, waste management, and hygiene maintenance across the campus to ensure a safe and clean environment.",
    img:""
        }
      ]
    }
  },
'Canteen Mens CR ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Canteen Mens CR ",
    description: "A restroom facility designated for male users located near or within the school canteen, providing convenient access for students and staff. ",
    img:""
        }
      ]
    }
  },
  'Canteen Womens CR ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:"Canteen Womens CR ",
    description: "A restroom facility designated for female users located near or within the school canteen, offering convenient access for students and staff. ",
    img:""
        }
      ]
    }
  },
 ' ': {
    totalFloors: 1,
    rooms:{
      1:[
        {
  code:"",
    name:" ",
    description: " ",
    img:""
        }
      ]
    }
  },
};

export default buildingData