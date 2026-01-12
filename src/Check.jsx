import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Stethoscope, 
  Clock, 
  MapPin, 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  User, 
  Calendar, 
  Activity,
  Facebook,
  Linkedin,
  Github,
  Menu,
  X,
  Award,
  Users
} from 'lucide-react';

// --- Vanilla CSS for non-Tailwind fallbacks and Animations ---
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

  :root {
    --primary-emerald: #064E3B;
    --primary-light: #0d6d53;
    --secondary-stone: #F8F7F3;
  }

  html { scroll-behavior: smooth; }

  .fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .slide-up {
    animation: slideUp 0.8s ease-out forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .font-serif { font-family: 'Playfair Display', serif; }
  .font-sans { font-family: 'Inter', sans-serif; }

  .leader-card:hover .leader-overlay {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Check = () => {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-[#F8F7F3]/90 backdrop-blur-md border-b border-stone-200 px-6 py-4 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>
          <div className="bg-[#064E3B] p-2 rounded-lg mr-2 shadow-lg">
            <Activity className="text-white h-6 w-6" />
          </div>
          <span className="text-2xl font-bold text-[#064E3B] tracking-tight">
            Mainspring<span className="text-emerald-700 font-light">Hospital</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => setPage('home')} 
            className={`text-sm font-semibold transition-colors ${page === 'home' ? 'text-[#064E3B]' : 'text-stone-500 hover:text-[#064E3B]'}`}
          >
            Home
          </button>
          <button className="text-sm font-semibold text-stone-500 hover:text-[#064E3B] transition-colors">Specialties</button>
          <button className="text-sm font-semibold text-stone-500 hover:text-[#064E3B] transition-colors">Research</button>
          <button 
            onClick={() => setPage('appointment')} 
            className="bg-[#064E3B] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#0d6d53] shadow-md active:scale-95 transition-all"
          >
            Book Appointment
          </button>
        </div>

        <button className="md:hidden text-[#064E3B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F8F7F3] border-b border-stone-200 p-6 space-y-4 fade-in">
          <button onClick={() => { setPage('home'); setIsMenuOpen(false); }} className="block w-full text-left font-bold text-stone-600">Home</button>
          <button onClick={() => { setPage('appointment'); setIsMenuOpen(false); }} className="block w-full text-left font-bold text-[#064E3B]">Book Appointment</button>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section className="bg-[#F8F7F3] py-16 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 fade-in">
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest rounded-full mb-6">
            Elite Medical Standards
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#064E3B] mb-6 leading-[1.1]">
            Advanced Care for <br />
            <span className="text-emerald-700 italic">Life's Mainspring.</span>
          </h1>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg font-sans">
            Mainspring Hospital integrates world-class expertise with compassionate clinical care, ensuring every patient journey is defined by precision and dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setPage('appointment')}
              className="bg-[#064E3B] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0d6d53] transition-all flex items-center justify-center shadow-lg active:scale-95"
            >
              Consult a Specialist <ChevronRight className="ml-2" size={20} />
            </button>
            <div className="flex items-center gap-3 px-4 py-2 border border-stone-200 rounded-xl bg-white/50">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="doctor" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-stone-500">100+ Specialists</span>
            </div>
          </div>
        </div>

        {/* Hero Image - Visible on Desktop only (lg:block) */}
        <div className="hidden lg:block lg:w-2/5 relative fade-in">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
              alt="Mainspring Medical Center" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#064E3B]/80 to-transparent">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck size={20} className="text-emerald-400" />
                <span className="text-sm font-bold">MainSpring Hospital</span>
              </div>
            </div>
          </div>
          {/* Decorative background shape */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );

  const Leadership = () => (
    <section className="py-24 px-6 bg-white slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#064E3B] mb-4">Our Distinguished Leadership</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto rounded-full"></div>
          <p className="text-stone-500 mt-6 max-w-2xl mx-auto">Led by visionaries in medicine and healthcare management, our team ensures Mainspring remains at the forefront of clinical excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Dr. Ajala Peace",
              role: "Medical Director",
              specialty: "MD, PhD - Health Systems",
              img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
            },
            {
              name: "Dr. Elena Rodriguez",
              role: "Chief Specialist",
              specialty: "Cardiovascular Surgery",
              img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400"
            },
            {
               name: "Dr. Ajala Promise",
              role: "Medical Director",
              specialty: "MD, PhD - Health Systems",
              img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
            }
          ].map((leader, i) => (
            <div key={i} className="leader-card group relative bg-stone-50 rounded-[2rem] overflow-hidden border border-stone-100 transition-all hover:shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 text-center bg-white">
                <h3 className="text-xl font-bold text-[#064E3B]">{leader.name}</h3>
                <p className="text-emerald-700 font-semibold text-sm mb-1">{leader.role}</p>
                <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">{leader.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const AppointmentView = () => (
    <div className="bg-stone-100 py-16 px-6 min-h-screen font-sans slide-up">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="bg-[#064E3B] md:w-1/3 p-10 text-stone-50 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Visit Us</h2>
            <p className="text-emerald-100/70 text-sm mb-8">Professional coordination for your health journey starts here.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-800/50 p-2 rounded-lg"><Phone size={18}/></div>
                <span className="text-sm font-medium">+234 9072606277</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-800/50 p-2 rounded-lg"><Clock size={18}/></div>
                <span className="text-sm font-medium">Open 24/7</span>
              </div>
            </div>
          </div>
          <div className="mt-12 text-xs flex items-center text-emerald-400">
            <ShieldCheck size={16} className="mr-2"/> MainSpring Compliant Secure Form
          </div>
        </div>

        <div className="p-10 md:w-2/3">
          {submitted ? (
            <div className="text-center py-20 fade-in">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={40} />
              </div>
              <h2 className="text-2xl font-bold text-[#064E3B]">Registration Confirmed</h2>
              <p className="text-stone-500 mt-2 mb-8">Our concierge will contact you shortly.</p>
              <button onClick={() => { setPage('home'); setSubmitted(false); }} className="text-[#064E3B] font-bold border-b-2 border-[#064E3B] pb-1">Back to Overview</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 block">Patient Name</label>
                  <input required type="text" placeholder="Full Name" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-900/10 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 block">Email Address</label>
                  <input required type="email" placeholder="email@domain.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-900/10 outline-none" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 block">Department</label>
                <select className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none">
                  <option>Cardiovascular Surgery</option>
                  <option>Neuroscience</option>
                  <option>Oncology</option>
                  <option>Modern Pediatrics</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 block">Message</label>
                <textarea rows="3" placeholder="Symptoms..." className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold hover:bg-[#0d6d53] shadow-lg transition-all active:scale-[0.98]">
                Request Scheduled Visit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{styles}</style>
      <script src="https://cdn.tailwindcss.com"></script>
      
      <Navbar />
      
      <main>
        {page === 'home' ? (
          <div>
            <Hero />
            
            {/* Core Services Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto slide-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Emergency Care', icon: Activity, text: 'Trauma response and acute care available round-the-clock.' },
                  { title: 'Diagnostic Imaging', icon: Stethoscope, text: 'Advanced MRI, CT, and molecular imaging technologies.' },
                  { title: 'Precision Surgery', icon: Heart, text: 'Minimally invasive and robotic-assisted surgical excellence.' }
                ].map((s, i) => (
                  <div key={i} className="p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:shadow-xl transition-all cursor-default">
                    <div className="bg-[#064E3B] text-white p-3 rounded-xl w-fit mb-6">
                      <s.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#064E3B] mb-3">{s.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* New Leadership Section */}
            <Leadership />

            {/* Trust Section */}
            <section className="bg-[#F8F7F3] py-24 px-6">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                   <h2 className="text-4xl font-serif font-bold text-[#064E3B] mb-6">Built on Foundation of Trust</h2>
                   <p className="text-stone-600 mb-8 leading-relaxed">We believe that every medical success starts with a strong partnership between doctor and patient. Our facility is designed to foster transparency and comfort at every step of your recovery.</p>
                   <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                         <Award className="text-emerald-700" size={24}/>
                         <span className="font-bold text-sm text-[#064E3B]">ISO Certified</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <Users className="text-emerald-700" size={24}/>
                         <span className="font-bold text-sm text-[#064E3B]">Patient Choice '25</span>
                      </div>
                   </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-full max-w-sm aspect-square bg-emerald-900 rounded-[3rem] p-1 shadow-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" 
                      alt="Laboratory" 
                      className="w-full h-full object-cover rounded-[2.8rem]"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <AppointmentView />
        )}
      </main>

      <footer className="bg-[#064E3B] text-stone-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-emerald-900 pb-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white font-bold text-xl mb-4">
               <Activity className="mr-2" size={20}/> Mainspring
            </div>
            <p className="text-xs leading-relaxed">Defining the next generation of healthcare through research and empathy.</p>
            <div className="flex gap-4 mt-6">
              <Facebook size={18} className="hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={18} className="hover:text-white cursor-pointer transition-colors" />
              <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Services</h4>
            <ul className="text-xs space-y-2">
              <li className="hover:text-white cursor-pointer transition-colors">Neurology</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cardiology</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pediatrics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Contact</h4>
            <ul className="text-xs space-y-2">
              <li>  Ogbomoso High School Ogbomoso</li>
              <li>support@mainspring.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-[10px] uppercase tracking-widest text-emerald-800">
          &copy; 2026 Mainspring Hospital Systems. Precision in Practice.
        </div>
      </footer>
    </div>
  );
};

export default Check;