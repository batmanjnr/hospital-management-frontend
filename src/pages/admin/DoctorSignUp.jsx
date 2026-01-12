import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Github, UserPlusIcon, Mail, Lock, User, ArrowLeft } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const DoctorSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = { name,  email, password  };
    axios.post('https://hospital-management-backend-r8f0.onrender.com/doctor/reg', userData)
    .then((res)=>{
         console.log('response', res.data);
         alert('signed up')
         toast.success("Login Successful");
         setTimeout(() => navigate('/doctorsignup'), 1300);
         
       })
       .catch((err)=>{
         console.log("error",err.response ? err.response:err);
        toast.error("Incorrect Password/ Email !");
         
       })
  };
  return (
   <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navbar Minimal */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/admindash" className="flex items-center space-x-2 text-emerald-900 hover:text-emerald-700 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-bold tracking-tight">Back to Dashboard</span>
          </Link>
        </div>
      </nav>

      {/* Main Form Section */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
          <div className="bg-emerald-900 p-8 text-center">
            <div className="inline-flex bg-emerald-800 p-4 rounded-full mb-4">
              <UserPlusIcon size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Doctor Registration</h2>
            <p className="text-emerald-200 text-sm mt-1">Create a new practitioner account</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Name Input */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-emerald-900 uppercase tracking-widest">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700" size={18} />
                <input 
                  type="text" 
                  required
                  placeholder="Dr. John Doe"
                  className="w-full pl-10 pr-4 py-3 border-2 border-emerald-50 rounded-xl focus:border-emerald-800 focus:outline-none transition-all"
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-emerald-900 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="doctor@medical.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-emerald-50 rounded-xl focus:border-emerald-800 focus:outline-none transition-all"
                   name='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-emerald-900 uppercase tracking-widest">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border-2 border-emerald-50 rounded-xl focus:border-emerald-800 focus:outline-none transition-all"
                   name='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-950 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Sign Up Practitioner
            </button>
          </form>
        </div>
      </main>

      {/* Footer (Consistent with Dashboard) */}
      <footer className="bg-emerald-950 py-10 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex justify-center space-x-10 mb-6">
            <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors"><Github size={24} /></a>
          </div>
          <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; 2026 Admin Portal • Secure Registration
          </p>
        </div>
      </footer>
       <ToastContainer />
    </div>
  )
}

export default DoctorSignUp