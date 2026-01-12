import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Facebook, Linkedin, Github, Plus, User, Mail, Shield, ChevronRight, Phone, Activity } from 'lucide-react';
const Doctors = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const colors = {
    deepGreen: '#064e3b', // Emerald-900
    forestGreen: '#065f46', // Emerald-800
    mintGreen: '#ecfdf5', // Emerald-50
    white: '#ffffff',
    border: '#d1d5db'
  };

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:3700/doctor/getUsers')
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
    // <div>
    //   <h2>Patients</h2>
    //   {patients.length === 0 ? (
    //     <p>No patients found</p>
    //   ) : (
    //     <ul>
    //       {patients.map((patient) => (
    //         <li key={patient._id}>
    //           <strong>{patient.firstName}</strong> - {patient.email}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
<div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: colors.white }}>
      
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 shadow-md flex justify-between items-center" style={{ backgroundColor: colors.deepGreen, color: colors.white }}>
        <div className="flex items-center gap-2">
          <Activity size={28} />
          <h1 className="text-xl font-bold tracking-tight uppercase">MainSpring Hospital</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto pt-40 p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Patient List (Logic from your original code) */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-6" style={{ color: colors.deepGreen }}>Patient Directory</h2>
          
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: colors.border }}>
            {loading ? (
              <div className="p-20 text-center text-gray-400">Loading records...</div>
            ) : patients.length === 0 ? (
              <div className="p-20 text-center flex flex-col items-center">
                <p className="text-lg font-medium text-gray-500 italic">No patients found</p>
                <div className="mt-4 w-12 h-1 rounded" style={{ backgroundColor: colors.deepGreen }}></div>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {patients.map((patient) => (
                  <li key={patient._id} className="p-6 flex justify-between items-center hover:bg-emerald-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.mintGreen, color: colors.deepGreen }}>
                        <User size={24} />
                      </div>
                      <div>
                        <strong className="text-lg block" style={{ color: colors.deepGreen }}>{patient.firstName}</strong>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Mail size={14} /> {patient.email}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Phone size={14} /> {patient.phoneNumber}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-emerald-700 transition" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Review Column */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: colors.deepGreen }}>Review</h2>
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b pb-2">
                  <span className="text-gray-600">Active Patients</span>
                  <span className="text-2xl font-bold" style={{ color: colors.deepGreen }}>{patients.length}</span>
                </div>
              </div>
              <button className="w-full mt-8 py-3 rounded-lg font-bold transition hover:bg-emerald-800 text-white" style={{ backgroundColor: colors.deepGreen }}>
                Export Review
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with LinkedIn, FB, GitHub */}
      <footer className="mt-12 py-12 border-t" style={{ backgroundColor: colors.mintGreen }}>
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-10 mb-6">
            <a href="#" className="hover:scale-110 transition" style={{ color: colors.deepGreen }}><Facebook size={24} /></a>
            <a href="#" className="hover:scale-110 transition" style={{ color: colors.deepGreen }}><Linkedin size={24} /></a>
            <a href="#" className="hover:scale-110 transition" style={{ color: colors.deepGreen }}><Github size={24} /></a>
          </div>
          <p className="text-sm font-semibold tracking-widest uppercase opacity-60" style={{ color: colors.deepGreen }}>
            &copy; 2026 MainSpring Hospital
          </p>
        </div>
      </footer>
    </div>
  )
};

export default Doctors;