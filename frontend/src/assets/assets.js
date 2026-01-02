import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. DESHANI TENNAKOON",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Deshani Tennakoon is a compassionate and dedicated medical practitioner who is committed to providing quality healthcare services to patients. She focuses on accurate diagnosis, patient education, and effective treatment plans while maintaining a friendly and professional approach. Her priority is to ensure patient comfort, safety, and long-term well-being through ethical and evidence-based medical care.",
    fees: 2500,
    address: {
      line1: "Nawaloka Hospital PLC",
      line2:
        "No. 23, Deshamanya H. K. Dharmadasa Mawatha,Colombo 02, Sri Lanka.",
    },
  },
  {
    _id: "doc2",
    name: "Prof. A. K. PROBHODANA RANAWEERA",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3+ Years of Clinical Experience",
    about:
      "Prof. A. K. Probodhana Ranaweera is a dedicated Obstetrician and Gynaecologist with a strong commitment to delivering comprehensive women’s healthcare. He focuses on preventive medicine, early diagnosis, and effective treatment strategies to ensure the best possible outcomes for patients. His patient-centered approach emphasizes safety, care, and professional excellence throughout all stages of women’s health.",
    fees: 3000,
    address: {
      line1: "Asiri Surgical Hospital",
      line2: "Kirimandala Mw - Colombo 05",
    },
  },
  {
    _id: "doc3",
    name: "Dr (Ms.) AMITHA NELUMDENIYA;",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Amitha Nelumdeniya is a dedicated and compassionate medical practitioner committed to delivering quality healthcare services. She focuses on accurate diagnosis, patient education, and effective treatment plans while maintaining a professional and caring approach. Her practice emphasizes preventive healthcare and patient well-being.",
    fees: 3500,
    address: {
      line1: "Lanka Hospitals ",
      line2: "Colombo 05",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Chamara Perera",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Experienced in treating neurological disorders including migraines, epilepsy, and stroke rehabilitation.",
    fees: 5000,
    address: {
      line1: "12/4 Kynsey Road",
      line2: "Colombo 08, Sri Lanka",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Nadeeka Wijesinghe",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Provides comprehensive general health checkups, chronic disease management, and preventive care.",
    fees: 2500,
    address: {
      line1: "45 Ward Place",
      line2: "Colombo 07, Sri Lanka",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Machintha Paranayapa",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Provides women’s health care including pregnancy care, routine gynecological exams, and family planning.",
    fees: 4500,
    address: {
      line1: "T.B jayah Mawatha",
      line2: " Colombo 10, Sri Lanka",
    },
  },

  {
    _id: "doc15",
    name: "Dr. Nayana Perera",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 3000,
    address: {
      line1: "No. 59, Colombo",
      line2: "Sri Lanka",
     

    },
  },
];