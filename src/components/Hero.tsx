import React from 'react';
import { Code2, BookOpen, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            <br />& ML Enthusiast
          </h1>
          <p className="text-gray-300 text-lg">
            Computer Science student at Kongu Engineering College with a passion for building innovative solutions.
            CGPA: 8.33
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors">
              View Projects
            </a>
            <a href="#contact" className="border border-purple-600 hover:bg-purple-600/20 px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-purple-900/30 p-6 rounded-xl backdrop-blur-sm">
            <Code2 className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <p className="text-gray-300">Java, Python, React, AWS, MongoDB</p>
          </div>
          <div className="bg-pink-900/30 p-6 rounded-xl backdrop-blur-sm">
            <BookOpen className="w-8 h-8 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-300">B.E. Computer Science</p>
          </div>
          <div className="bg-purple-900/30 p-6 rounded-xl backdrop-blur-sm col-span-2">
            <Trophy className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
            <p className="text-gray-300">Finalist at Dark Pattern Buster Hackathon'23 & Smart India Hackathon'23</p>
          </div>
        </div>
      </div>
    </section>
  );
}