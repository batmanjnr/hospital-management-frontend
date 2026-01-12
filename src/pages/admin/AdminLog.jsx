import React,{useState} from "react";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    axios
      .post("http://localhost:3700/admin/signin", userData)
      .then((res) => {
        console.log("response", res.data);
        toast.success("Login Successful");
        setTimeout(() => navigate("/doctordash"), 1300);
      })
      .catch((err) => {
        console.log("error", err.response ? err.response : err);
        toast.error("Incorrect Password/ Email !");
      });
  };
  return (
    <div className="bg-[#F8F7F3] py-20 px-6 min-h-[80vh] font-sans flex items-center justify-center slide-up">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-stone-200 overflow-hidden">
        <div className="bg-[#064E3B] p-8 text-center text-white">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Lock size={32} className="text-emerald-400" />
          </div>
          <h2 className="text-2xl font-serif font-bold">Admin Portal</h2>
          <p className="text-emerald-100/60 text-xs mt-2 uppercase tracking-widest font-bold">
            Secure Professional Access
          </p>
        </div>

        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 block">
                Staff ID / Email
              </label>
              <div className="relative">
                <input
                  required
                  type="text"
                  placeholder="EMP-000000"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-emerald-900/10 outline-none transition-all"
                  name="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
               />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 block">
                Password
              </label>
              <div className="relative">
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                name="password"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-emerald-900/10 outline-none transition-all"
                onChange={(e)=>{setPassword(e.target.value)}}
               />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                className="text-emerald-700 font-bold hover:underline"
              >
                Forgot Access?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold hover:bg-[#0d6d53] shadow-lg transition-all active:scale-[0.98]"
            >
              Authorized Login
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-stone-100 text-center">
            <p className="text-stone-400 text-[10px] leading-relaxed">
              ACCESS RESTRICTED TO AUTHORIZED PERSONNEL ONLY. <br />
              Unauthorized access attempts are monitored and logged.
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLog;
