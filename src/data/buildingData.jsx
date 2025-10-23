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
            name:"Bistro ",
           description: "A small dining area on campus where students and staff can buy and enjoy meals, snacks, and beverages. ",
           img: ""
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
name:"",
description: " ",
img:" "
}

  ]
}

    },
    'Stage': 1,

    'College of Technology/COT Building': {
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
              name: "COT Computer Laboratory",
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
          img: ""
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
       img: ""
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
      img: ""
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
       totalFloors:  1
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
    img: ""
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
          img: ""
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
     img: ""
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
 }
};

export default buildingData