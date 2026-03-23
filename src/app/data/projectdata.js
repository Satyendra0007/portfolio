import notemanager from "@/app/img/notemanager.png"
import idg from "@/app/img/idg.png"
import hl from "@/app/img/hl.png"
import chatup from "@/app/img/chatup.png"
import hotel from "@/app/img/hotel.png"
import bcg from "@/app/img/bcg.png"

const data = [
  {
    url: hotel,
    name: "Hotel Booking",
    desc: "A full-stack hotel booking platform built using the MERN stack. Includes secure login, room bookings, payments, OTP verification, and admin controls.",
    gitLink: "https://github.com/Satyendra0007/hotel.git",
    link: "https://hotel-eight-vert.vercel.app/",
    stack: ["MERN", "Payments", "Dashboard"],
    status: "Production Ready",
  },
  {
    url: chatup,
    name: "Chatup",
    desc: "A fast and modern MERN-based chat app with secure login, one-to-one and group chats, real-time messaging via Socket.io, and a built-in AI assistant.",
    gitLink: "https://github.com/Satyendra0007/chatup.git",
    link: "https://chatup-s.vercel.app/",
    stack: ["MERN", "Socket.io", "AI Chat"],
    status: "Real-Time App",
  },
  {
    url: bcg,
    name: "Bright Citrine Global",
    desc: "A full-stack MERN web application featuring a modern, premium UI, secure authentication, an admin panel for content management, and a smooth, user-focused experience.",
    gitLink: "https://github.com/Satyendra0007/bright-citrine-global.git",
    link: "https://bright-citrine-global.vercel.app/",
    stack: ["MERN", "Admin Panel", "Premium UI"],
    status: "Client Experience",
  },
  {
    url: hl,
    name: "Happy Living",
    desc: "A MERN hostel booking application with separate user and admin panels. Users can browse and book rooms online, while admins can manage users, messages, rooms, and received payments.",
    gitLink: "https://github.com/Satyendra0007/happyliving.git",
    link: "https://happyliving.vercel.app/",
    stack: ["MERN", "Bookings", "Admin Panel"],
    status: "Full Platform",
  },
  {
    url: idg,
    name: "Id Generator",
    desc: "A MERN application where users can create an account, generate their ID card, and download it in PNG format.",
    gitLink: "https://github.com/Satyendra0007/idgenerator.git",
    link: "https://idgenerator.vercel.app/",
    stack: ["MERN", "Image Export", "Utility"],
    status: "Tooling App",
  },
  {
    url: notemanager,
    name: "Note Manager",
    desc: "A MERN note-taking application with authentication where users can create an account and save, edit, and delete notes.",
    gitLink: "https://github.com/Satyendra0007/notemanager.git",
    link: "https://notemanager-s.vercel.app/",
    stack: ["MERN", "CRUD", "Authentication"],
    status: "Core Product",
  },
]

export default data;
