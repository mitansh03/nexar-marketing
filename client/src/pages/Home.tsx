import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Zap, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-4 py-2 rounded-full bg-blue-100/50 text-blue-600 text-sm font-semibold tracking-wide border border-blue-200">
                DIGITAL EXCELLENCE
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-5xl md:text-7xl font-bold text-slate-900 leading-tight"
            >
              Mastering <br />
              <span className="text-gradient">Web & Marketing</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              We blend high-performance development with data-driven marketing strategies to scale your business beyond limits.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                  Start Project 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 transition-all">
                  View Work
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Abstract 3D Glass Composition */}
            <div className="relative w-full h-[600px]">
              {/* Main Card */}
              <div className="absolute top-10 right-10 w-[400px] h-[500px] glass-card rounded-[40px] z-20 p-8 flex flex-col justify-between border-t border-l border-white/40">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <Zap />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">High Impact<br/>Performance</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm text-slate-500 font-medium">
                    <span>Efficiency</span>
                    <span>85%</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Card Back */}
              <div className="absolute top-24 left-20 w-[300px] h-[400px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-[40px] z-10 shadow-2xl opacity-90 rotate-[-6deg]" />
              
              {/* Floating Element */}
              <div className="absolute bottom-20 left-0 glass-panel p-4 rounded-2xl flex items-center gap-4 z-30 animate-float">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">ROI Growth</p>
                  <p className="text-lg font-bold text-slate-900">+450%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm border-y border-white/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Client Retention", value: "99%", icon: Users },
            { label: "Projects Completed", value: "200+", icon: Globe },
            { label: "ROI Average", value: "5x", icon: BarChart3 },
            { label: "Team Experts", value: "24", icon: Zap },
          ].map((stat, i) => (
            <div key={i} className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <stat.icon size={24} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
