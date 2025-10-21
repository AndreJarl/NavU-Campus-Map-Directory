import React from 'react'
import enlab1 from "../assets/rooms/coe/CELAB01.jpg"
import enlab2 from "../assets/rooms/coe/CELAB02.jpg"

const buildingData = {
 'College of Engineering Building': {
  totalFloors: 3,
  rooms: {
    1: [
      { 
        code: "", 
        name: "Electrical Engineering Laboratory",
        description: "A specialized room equipped with electrical tools, testing instruments, and training panels where students conduct experiments and practical activities related to circuits, wiring, and power systems.",
        img:""
      },
      { 
        code: " ", 
        name: "Engineering Laboratory",
        description: "A workspace designed for hands-on experiments and projects across different engineering fields, equipped with tools, machines, and equipment for practical learning and testing.",
        img: ""
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
        name: " Electronic Laboratory",
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
        name: "Education Laboratory ",
        description: "A learning space designed for education students to practice teaching methods, classroom management, and lesson demonstrations.",
        img: " "
      },
      { 
        code: " ", 
        name: "Education Laboratory ",
        description: "A learning space designed for education students to practice teaching methods, classroom management, and lesson demonstrations.",
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
    'Graduate School Building': 4,
    'Bistro': 1,
    'University Canteen': {
totalFloors: 1,
rooms:{
  1:[
{
code:"",
name:"",
description: " ",
img:" "
}

  ]
}

    },
    'Stage': 1,
    'College of Technology/ COT Building': {
totalFloors: 2,
  rooms: {
    1: [
      { 
        code: "Room 26", 
        name: "Classroom",
        description: "A learning area where students attend lectures, participate in discussions, and work on academic activities guided by their teachers.",
        img:""
      },
      { 
        code: "Room 27", 
        name: "Automation Laboratory",
        description: "A specialized room equipped with controllers, sensors, and training kits where students learn and practice automation and control system applications. ",
        img: ""
      },
      { 
        code: "Room 34", 
        name: "Classroom",
        description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
        img:" "
      },
      { 
        code: "Room 35", 
        name: "Classroom",
        description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
        img: " "
      },
      { 
        
        code: "Room 36", 
        name: "Classroom",
        description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
        img: " "


      },
      {        
        code: "Room 37", 
        name: "Classroom",
        description: "A standard learning space with chairs, tables, and a board where teachers conduct lessons and students engage in discussions and activities.",
        img: " "


      },
      {
        code: " ", 
        name: "Sanitation Staff Office",
        description: "A workspace for the sanitation personnel where cleaning materials are stored and daily maintenance tasks are organized.",
        img: " "
         },
         {
         code:"Room 38",
          name: "Industrial Motor Control / Electrical Laboratory",
        description: "A training lab equipped with motors, control panels, and electrical tools where students learn about motor operations, wiring systems, and industrial control applications.",
        img: " "

         }, 
         {
          code:"Room 39",
          name: "Automation Laboratory 3 / Electronic Laboratory ",
        description: "A lab equipped with electronic components, circuit boards, and automation kits where students conduct experiments and projects related to electronics and control systems.",
        img: " "


         },
         {
          code:"Room 40",
          name: "Drafting Laboratory",
          description: "A classroom equipped with drawing tables, computers, and design tools where students create technical drawings and design plans for engineering and architectural projects.",
           img: " "

         },
         {
         code:"Room 41",
         name: "Motor Control / Electrical & Instrumentation Laboratory ",
        description: "A specialized lab with equipment for studying motor control systems, electrical wiring, and instrumentation used in monitoring and automation processes.",
        img: " "


         },
         {
        
        code: " ",
        name: "Computer Laboratory",
        description: " room equipped with computers and internet access where students learn programming, digital applications, and other computer-related skills. ",
        img: " "
        }, 
        {
          code:"Room 46",
          name: " ",
        description: " ",
        img: " "
         },
         {
         code:"",
         name: "Storage Room",
        description: "A designated area used to store school equipment, tools, and other materials in an organized and secure manner.",
        img: " "
                     
         },
         {
        code:"",
        name: "GAD Office",
        description: "The Office where programs and activities promoting equality, inclusivity, and student welfare are planned and managed.",
        img: " "


         },
         {
         code: "",
         name: "NSTP Office",
        description: "The National Service Training Program Office where activities and records related to NSTP components, such as CWTS and ROTC, are managed and coordinated. ",
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
name:"Stock Room",
description: "A room used for storing tools, materials, and equipment needed for classes, projects, or laboratory activities. ",
img:" "
},
{
code:"",
name:"Storage Room",
description: "A space designated for keeping school supplies, tools, and equipment organized and safely stored. ",
img:" "
},
{
code:"",
name:"Office",
description: "A workspace where staff and faculty handle administrative duties, paperwork, and student-related concerns. ",
img:" "
}, 
{
code:"",
name:"Office",
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
name:"Stock Room ",
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
name:"Stock Room ",
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
name:"Stock Room",
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
      totalFloors: 3, // Updated total floors
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
 }
};

export default buildingData