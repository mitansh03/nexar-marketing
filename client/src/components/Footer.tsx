import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-lg border-t border-white/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <span className="text-2xl font-bold tracking-tighter cursor-pointer text-slate-900">
                NEXAR<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed">
              Crafting digital experiences that merge performance marketing with cutting-edge development.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Web Development</li>
              <li>Performance Marketing</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <Link href="/about"><li className="hover:text-blue-500 cursor-pointer">About Us</li></Link>
              <Link href="/portfolio"><li className="hover:text-blue-500 cursor-pointer">Portfolio</li></Link>
              <Link href="/contact"><li className="hover:text-blue-500 cursor-pointer">Careers</li></Link>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-blue-500 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-blue-500 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-pink-500 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-slate-900 transition-colors"><Github size={18} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Nexar Digital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
