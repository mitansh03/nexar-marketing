import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Target, Rocket } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We don't just follow trends; we set them with cutting-edge tech stacks."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every pixel and every line of code is crafted with absolute attention to detail."
  },
  {
    icon: Award,
    title: "Results Driven",
    description: "Our success is measured solely by the growth and ROI we deliver to you."
  },
  {
    icon: CheckCircle2,
    title: "Scalability",
    description: "Solutions built to grow with your business, from startup to enterprise."
  }
];

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            We are <span className="text-gradient">Nexar</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            A team of visionary developers and strategic marketers obsessed with digital perfection.
            Based in Pune, India, serving the world.
          </motion.p>
        </div>

        {/* Timeline / Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
             {/* scenic mountain landscape abstract representation */}
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg] border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Our Team"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-2xl max-w-xs animate-float-delayed">
              <p className="font-bold text-4xl text-blue-600 mb-1">2020</p>
              <p className="text-slate-600 text-sm">Founded with a vision to merge code & creativity.</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
            <div className="space-y-6 border-l-2 border-blue-100 pl-8 relative">
              {[
                { year: "2020", title: "The Beginning", desc: "Started as a duo of dev & design enthusiasts." },
                { year: "2021", title: "Rapid Expansion", desc: "Grew to a team of 10, handling international clients." },
                { year: "2023", title: "Full Service", desc: "Launched dedicated performance marketing division." },
                { year: "2024", title: "Nexar 2.0", desc: "Rebranding and expanding into enterprise solutions." },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2 block">{item.year}</span>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:bg-white/40 transition-all duration-300 hover:-translate-y-2 border-t border-white/60"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <v.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
