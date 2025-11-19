
import coefront1 from "../assets/bldFronts/COEFront.jpg"
import ceasfront1 from "../assets/bldFronts/CEASFront.jpg"
import cemfront1 from "../assets/bldFronts/CMEFront.jpg"
import adminfront from"../assets/bldFronts/AdminFront.jpg"
import cotfront from "../assets/bldFronts/COTFront.jpg"
import womendorm from "../assets/rooms/Dormitories/Women'sDormitory.jpg"
import canteen from "../assets/rooms/bistro&canteen/Canteen.jpg"
import bistro from  "../assets/rooms/bistro&canteen/bistro.jpg"
import stage from "../assets/rooms/Bldgs/OldStage.jpg"
import sac from "../assets/rooms/Bldgs/SAC.jpg"
import fitness from "../assets/rooms/Bldgs/FitnessGym.jpg"


const cardData = {
    'College of Engineering Building': {
        totalFloors: 3,
        img: coefront1
    },
     'CME/COE Building': {
       totalFloors: 4,
       img:cemfront1,
    },
    'Education Building': {
       totalFloors: 3,
       img: ceasfront1,
    },
    'Graduate School Building': 4,
    'Bistro': {
          totalFloors: 1,
        img: bistro
    },
    'University Canteen': {
         totalFloors: 1,
        img: canteen
    },
    'Stage': {
          totalFloors:1,
        img: stage
    },
    'College of Technology/COT Building': {
        totalFloors:3,
        img:cotfront
    },
    'Old Admin Building': 2,
    'New Admin Building': {
        totalFloors: 3,
        img: adminfront
    },
    'Student Activity Center': {
            totalFloors: 1,
        img: sac
    },
    'Fitness Gym': {
          totalFloors: 1,
        img: fitness
    },
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
    'Women Dorm': {
         totalFloors: 2,
        img: womendorm
    },
    'Furniture Workshop': 1,
    'Security Office': 1,
    'ERRC Building': 2,
};

export default cardData;