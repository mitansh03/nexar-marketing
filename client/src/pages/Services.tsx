import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Code2, ShoppingCart, LayoutTemplate, LineChart, Megaphone, Search } from "lucide-react";

const services = [
  {
    category: "Development",
    items: [
      {
        icon: Code2,
        title: "Custom Web Apps",
        desc: "Scalable, secure, and high-performance applications built with React & Node."
      },
      {
        icon: ShoppingCart,
        title: "E-Commerce",
        desc: "Shopify & Custom solutions that convert visitors into loyal customers."
      },
      {
        icon: LayoutTemplate,
        title: "Landing Pages",
        desc: "High-conversion landing pages designed for marketing campaigns."
      }
    ]
  },
  {
    category: "Marketing",
    items: [
      {
        icon: Search,
        title: "SEO Mastery",
        desc: "Dominate search rankings with technical SEO and content strategy."
      },
      {
        icon: Megaphone,
        title: "Performance Ads",
        desc: "Meta & Google Ads campaigns optimized for maximum ROAS."
      },
      {
        icon: LineChart,
        title: "Data Analytics",
        desc: "Deep insights and tracking to understand user behavior."
      }
    ]
  }
];

export default function Services() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-wider text-sm uppercase"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-4xl md:text-6xl font-bold text-slate-900"
          >
            Full-Spectrum <span className="text-gradient">Solutions</span>
          </motion.h1>
        </div>

        <div className="space-y-24">
          {services.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-slate-400 mb-8 border-b border-slate-200 pb-4">
                {section.category}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                    <div className="glass-card h-full p-8 rounded-3xl transition-transform duration-300 group-hover:-translate-y-1 bg-white/60">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-32 relative rounded-[3rem] overflow-hidden bg-slate-900 text-center py-24 px-4">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale?</h2>
            <p className="text-slate-300 mb-8 text-lg">Let's build something extraordinary together.</p>
            <a href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
