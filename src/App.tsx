import React from 'react';
import { BookOpen, Trophy, Briefcase, GraduationCap, Languages, Heart, Coffee } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Header />

      <main className="max-w-[1440px] mx-auto px-6 py-12 space-y-24">
        <Hero />

        {/* Education */}
        <section>
          <SectionTitle icon={GraduationCap} title="Education" color="text-blue-600" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Bachelor of Engineering in Computer Science",
                institution: "Kongu Engineering College",
                period: "2021 - 2025",
                score: "CGPA: 8.33"
              },
              {
                title: "High School - HSC",
                institution: "Bharathi Vidya Bhavan Hr. Mat. School",
                period: "2019 - 2020",
                score: "Percentage: 95%"
              }
            ].map((edu, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{edu.title}</h3>
                  <p className="text-lg text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
                  <p className="mt-4 text-blue-600 font-medium">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionTitle icon={Briefcase} title="Projects" color="text-emerald-600" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "User Interface Deception",
                description: "Chrome extension to identify and flag dark patterns in websites using ML",
                tags: ["HTML", "CSS", "JavaScript", "Machine Learning"]
              },
              {
                title: "Book Library",
                description: "Full-stack MERN application for efficient book management",
                tags: ["MongoDB", "Express", "React", "Node.js"]
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-emerald-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionTitle icon={BookOpen} title="Technical Skills" color="text-purple-600" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: 'Languages',
                skills: ['Java', 'Python', 'C', 'JavaScript']
              },
              {
                category: 'Frameworks',
                skills: ['React', 'WordPress', 'Express']
              },
              {
                category: 'Cloud',
                skills: ['AWS S3', 'AWS EC2', 'Lambda']
              },
              {
                category: 'Others',
                skills: ['MongoDB', 'Machine Learning']
              }
            ].map((skillSet, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">{skillSet.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-purple-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <SectionTitle icon={Trophy} title="Achievements" color="text-amber-600" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Finalist at Dark Pattern Buster Hackathon'23",
                description: "IIT BHU - Led team in developing solutions for identifying deceptive UI patterns"
              },
              {
                title: "Finalist at Smart India Hackathon'23",
                description: "Developed CNN-based disease detection system for cash crops"
              }
            ].map((achievement, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex gap-4">
                  <Trophy className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages & Hobbies */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SectionTitle icon={Languages} title="Languages" color="text-indigo-600" />
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <ul className="space-y-4">
                  {['Tamil', 'English', 'Arabic'].map((lang) => (
                    <li key={lang} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      <span className="text-lg text-gray-700">{lang}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle icon={Heart} title="Hobbies" color="text-rose-600" />
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <ul className="space-y-4">
                  {[
                    { text: 'Blogging at a2zblg.com', icon: Coffee },
                    { text: 'Cricket', icon: Coffee },
                    { text: 'Culinary art', icon: Coffee }
                  ].map((hobby, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <hobby.icon className="w-5 h-5 text-rose-500" />
                      <span className="text-lg text-gray-700">{hobby.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-24 py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="text-center text-gray-500">© 2024 Mohammed Yunus M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;