import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';
import Reveal from '../components/Reveal';

const BLOG_POSTS = [
  {
    id: 1,
    title: "How AI Will Change the Way Homes Are Built in the Next 5 Years",
    excerpt: "From automated quality checks to predictive maintenance, discover how artificial intelligence is moving from factories to construction sites.",
    author: "Swetang Gajjar",
    date: "Oct 12, 2023",
    category: "Technology",
    image: IMAGES.BLOG_1
  },
  {
    id: 2,
    title: "Vastu Mistakes People Make When Buying an Apartment",
    excerpt: "Buying a flat? Watch out for these common orientation errors that can affect energy flow, and learn simple remedies to fix them.",
    author: "Ar. Vidhi Gajjar",
    date: "Nov 05, 2023",
    category: "Vastu",
    image: IMAGES.BLOG_2
  },
  {
    id: 3,
    title: "What RERA Compliance Means for Your Building",
    excerpt: "An Architect's view on why RERA is more than just paperwork—it's your guarantee of quality, timeliness, and transparency.",
    author: "Ar. Vidhi Gajjar",
    date: "Dec 15, 2023",
    category: "Architecture",
    image: IMAGES.BLOG_3
  },
  {
    id: 4,
    title: "From Factory to Site: Industrial AI for Construction",
    excerpt: "How we use computer vision models trained on assembly lines to ensure your brickwork and plastering meets the highest standards.",
    author: "Swetang Gajjar",
    date: "Jan 20, 2024",
    category: "AI & Quality",
    image: IMAGES.BLOG_4
  },
  {
    id: 5,
    title: "Interiors That Age Well: Timeless Ideas for Indian Homes",
    excerpt: "Trends fade, but style remains. Here are design principles for creating spaces that look fresh even a decade later.",
    author: "Ar. Vidhi Gajjar",
    date: "Feb 10, 2024",
    category: "Interiors",
    image: IMAGES.BLOG_5
  }
];

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        if (scrolled < 1000) {
          heroRef.current.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          <div 
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform" 
          >
             <img 
               src={IMAGES.BLOG_1} 
               alt="Blog Background" 
               className="w-full h-full object-cover opacity-40 animate-hero-zoom"
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/40" />
          
          {/* Smoother Bottom Fade to Next Section (Slate-50) - Extended Height */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <Reveal>
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Insights & Updates</h1>
             <p className="text-lg text-slate-300 max-w-2xl mx-auto">
               Thoughts on architecture, Vastu Shastra, and the future of construction technology.
             </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group h-full">
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 leading-snug hover:text-secondary transition-colors">
                    <button onClick={() => {}} className="text-left bg-transparent border-0 p-0 cursor-pointer hover:text-secondary">{post.title}</button>
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button onClick={() => {}} className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors text-sm mt-auto bg-transparent border-0 p-0 cursor-pointer group/btn">
                    Read Article <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;