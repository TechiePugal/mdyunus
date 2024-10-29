import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Mohammed Yunus M
        </h1>
        <nav className="flex gap-4">
          <a href="https://github.com/yunus1204" className="text-white hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/md-yunus" className="text-white hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:yunusmohammedyunusm@gmail.com" className="text-white hover:text-purple-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#resume" className="text-white hover:text-purple-400 transition-colors">
            <FileText className="w-6 h-6" />
          </a>
        </nav>
      </div>
    </header>
  );
}