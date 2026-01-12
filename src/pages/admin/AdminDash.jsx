import React ,{useState, useEffect}from 'react'
import { Facebook, Linkedin, Github, Users, UserPlus, LayoutDashboard, UserCheck, UserPlusIcon } from 'lucide-react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const AdminDash = () => {
     const [doctor, setDoctors] = useState([]);
      const [patient, setPatients] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
    
   
     useEffect(() => {
       // Fetch data when the component mounts
       axios.get('https://hospital-management-backend-r8f0.onrender.com/admin/getUsers')
         .then((response) => {
           setDoctors(response.data); // Update state with the actual data
           setLoading(false);
         })
         .catch((err) => {
           setError("Failed to fetch patients");
           setLoading(false);
         });
     }, []); 
      useEffect(() => {
       // Fetch data when the component mounts
       axios.get('https://hospital-management-backend-r8f0.onrender.com/admin/getPatient')
         .then((response) => {
           setPatients(response.data); // Update state with the actual data
           setLoading(false);
         })
         .catch((err) => {
           setError("Failed to fetch patients");
           setLoading(false);
         });
     }, []); // Empty array means "run once on load"
   
     if (loading) return <p>Loading ...</p>;
     if (error) return <p>{error}</p>;
  return (
   <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Main Content */}
     <nav className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 text-emerald-900">
            <LayoutDashboard size={28} />
            <span className="text-xl font-bold tracking-tight">Admin Dashboard</span>
          </div>
          
          <div className="flex space-x-4">
           <Link 
              to="/checkUser" 
              className="flex items-center space-x-2 px-4 py-2 border-2 border-emerald-800 text-emerald-800 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <UserCheck size={18} />
              <span>Check Users</span>
            </Link>
            <Link 
              to="/doctorsignup" 
              className="flex items-center space-x-2 px-4 py-2 border-2 border-emerald-800 text-emerald-800 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <UserCheck size={18} />
              <span>Sign Up Doctors</span>
            </Link>
          </div>
        </div>
      </nav>
        {/* Stats Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-emerald-800 text-white p-6 rounded-xl shadow-lg flex items-center justify-between">
            <div>
              <p className="text-emerald-100 uppercase tracking-wider text-sm font-semibold">Total Doctors</p>
              <h2 className="text-4xl font-bold">{doctor.length}</h2>
            </div>
            <Users size={48} className="opacity-20" />
          </div>

          <div className="bg-white border-2 border-emerald-800 p-6 rounded-xl shadow-md flex items-center justify-between">
            <div>
              <p className="text-emerald-800 uppercase tracking-wider text-sm font-semibold">Total Patients</p>
              <h2 className="text-4xl font-bold text-emerald-900">{patient.length}</h2>
            </div>
            <UserPlus size={48} className="text-emerald-800 opacity-20" />
          </div>
        </div>

        {/* Doctors Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-emerald-900 p-4">
            <h3 className="text-white font-semibold">Physician Directory</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50 text-emerald-900">
                <th className="p-4 font-bold border-b">Doctor Name</th>
                <th className="p-4 font-bold border-b">Specialization</th>
                <th className="p-4 font-bold border-b">Email</th>
                <th className="p-4 font-bold border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {doctor.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-b text-gray-700 font-medium">{doctor.name}</td>
                  <td className="p-4 border-b text-gray-600">{doctor.email}</td>
                  <td className="p-4 border-b text-gray-600">{doctor.phoneNumber}</td>
                  <td className="p-4 border-b">
                    <span className='px-3 py-1 rounded-full text-xs font-bold  bg-emerald-100 text-emerald-700 '>
                        Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    

      {/* Footer with requested logos */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="text-emerald-900 hover:text-emerald-600 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-emerald-900 hover:text-emerald-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-emerald-900 hover:text-emerald-600 transition-colors">
            <Github size={24} />
          </a>
        </div>
        <p className="text-center text-gray-500 text-sm">
          &copy; 2026 Healthcare Admin Portal. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default AdminDash