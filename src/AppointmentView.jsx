import React from 'react'
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

  // Form States
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("Others"); 
  const [issue, setIssue] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleSubmit1 = (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { firstName, phoneNumber, department, issue };

    axios.post("https://hospital-management-backend-r8f0.onrender.com/patient/appointment", userData)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setPage('home');
          navigate("/");
        }, 1300);
      })
      .catch((err) => {
        console.error("error", err);
        setLoading(false);
      });
  };

  const AppointmentView = () => (
    <div className="bg-stone-100 py-16 px-6 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="bg-[#064E3B] md:w-1/3 p-10 text-stone-50 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Appointment</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-800/50 p-2 rounded-lg"><Phone size={18}/></div>
                <span className="text-sm font-medium">+234 9072606277</span>
              </div>
            </div>
          </div>
          <div className="mt-12 text-xs flex items-center text-emerald-400">
            <ShieldCheck size={16} className="mr-2"/> MainSpring Secure
          </div>
        </div>

        <div className="p-10 md:w-2/3">
          <form onSubmit={handleSubmit1} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase text-stone-400 mb-2 block">Patient Name</label>
                <input 
                  required 
                  type="text" 
                  value={firstName} // LIKING VALUE
                  placeholder="Full Name" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-900/10" 
                  onChange={(e) => setFirstName(e.target.value)} 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-stone-400 mb-2 block">Phone Number</label>
                <input 
                  required 
                  type="text" 
                  value={phoneNumber} // LIKING VALUE
                  placeholder="080..." 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-900/10" 
                  onChange={(e) => setPhoneNumber(e.target.value)} 
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase text-stone-400 mb-2 block">Department</label>
              <select 
                required 
                value={department} // LIKING VALUE
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none" 
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="Others">Others</option>
                <option value="Cardiovascular Surgery">Cardiovascular Surgery</option>
                <option value="Neuroscience">Neuroscience</option>
                <option value="Oncology">Oncology</option>
                <option value="Modern Pediatrics">Modern Pediatrics</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase text-stone-400 mb-2 block">Message</label>
              <textarea 
                required 
                rows="3" 
                value={issue} // LIKING VALUE
                placeholder="Symptoms..." 
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none resize-none" 
                onChange={(e) => setIssue(e.target.value)}
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading} 
              className={`w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0d6d53] shadow-lg active:scale-[0.98]'}`}
            >
              {loading && <Loader2 className="animate-spin" size={20} />}
              {loading ? "Processing..." : "Request Scheduled Visit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

 


export default AppointmentView;