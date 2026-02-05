import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web App",
    metric: "+200% Efficiency",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // dashboard analytics UI
    size: "large"
  },
  {
    title: "Luxe Fashion",
    category: "E-Commerce",
    metric: "3.5x ROAS",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop", // fashion model shopping
    size: "tall"
  },
  {
    title: "HealthCore",
    category: "Branding & Web",
    metric: "50k+ Users",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop", // medical clean tech
    size: "normal"
  },
  {
    title: "Urban Architecture",
    category: "Portfolio Site",
    metric: "Award Winning",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop", // modern building
    size: "normal"
  },
  {
    title: "Crypto Exchange",
    category: "Web3",
    metric: "$10M Volume",
    image: "https://images.unsplash.com/photo-1621504450168-b8c437544378?w=800&h=1000&fit=crop", // crypto dark chart
    size: "tall"
  },
  {
    title: "Green Energy",
    category: "Corporate Site",
    metric: "40% Lead Gen",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", // corporate sustainability
    size: "large"
  }
];

export default function Portfolio() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Selected <span className="text-gradient">Works</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            A showcase of digital products that have transformed businesses and delighted users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2' : ''
              } ${project.size === 'tall' ? 'row-span-2' : ''}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex justify-between items-end">
                  <span className="text-white/80 font-medium">{project.metric}</span>
                  <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
