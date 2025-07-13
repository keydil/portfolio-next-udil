"use client";
import { skills } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, Gamepad2, Cpu, Monitor, ChevronRight } from "lucide-react";

const About = () => {
  const getSkillIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return Code;
      case "Backend":
        return Monitor;
      case "Other":
        return Cpu;
      default:
        return Code;
    }
  };

  const frontendSkills = skills.filter(
    (skill) => skill.category === "Frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "Backend");
  const otherSkills = skills.filter((skill) => skill.category === "Other");

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Kiri - Ilustrasi / Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/images/fadhil.jpg"
              alt="Fadhil Firdaus Adha"
              className="w-full max-w-sm rounded-xl shadow-lg brightness-90 contrast-105"
            />
          </motion.div>

          {/* Kanan - Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-100 text-base leading-relaxed">
              Saya adalah mahasiswa aktif D3 Teknik Informatika semester 4 yang
              memiliki minat dalam
              <strong> Web Development</strong>,{" "}
              <strong>Game Development</strong>, dan <strong>IoT</strong>. Saya
              terbiasa bekerja secara mandiri maupun dalam tim, serta antusias
              dalam mempelajari teknologi baru.
              <br />
              <br />
              Di sisi frontend, saya menggunakan <strong>Next.js</strong> &{" "}
              <strong>TypeScript</strong>, sedangkan di sisi backend saya
              familiar dengan <strong>Laravel</strong> dan{" "}
              <strong>Express.js</strong>. Saya juga memiliki pengalaman dalam
              pengembangan game menggunakan <strong>Unity</strong> dan
              perancangan sistem <strong>IoT berbasis ESP32</strong>.
              <br />
              <br />
              Dengan semangat belajar yang tinggi, saya terus berupaya
              menciptakan solusi digital yang inovatif, efisien, dan relevan
              dengan kebutuhan saat ini.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="space-y-8">
              {/* Frontend Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-400">
                  Frontend Development
                </h4>
                <div className="space-y-4">
                  {frontendSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Code size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-400">
                  Backend Development
                </h4>
                <div className="space-y-4">
                  {backendSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <Monitor size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">
                  Other Technologies
                </h4>
                <div className="space-y-4">
                  {otherSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        {skill.name.includes("Unity") ? (
                          <Gamepad2 size={20} />
                        ) : (
                          <Cpu size={20} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current Focus & Education */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Current Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight size={14} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Web Development
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Next.js, React, TypeScript, Tailwind CSS
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight size={14} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Game Development
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Unity, C#, 2D & 3D Game Design
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight size={14} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      IoT Development
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Arduino, ESP32, Sensor Integration
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white">
                      D3 Teknik Informatika
                    </h4>
                    <p className="text-blue-400">
                      Universitas Sangga Buana YPKP
                    </p>
                    <p className="text-gray-400 text-sm">
                      2023 - 2025 (Semester 4)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-400"
                  >
                    Web Development
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-400"
                  >
                    Game Development
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-400"
                  >
                    IoT Systems
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-500/20 text-yellow-400"
                  >
                    UI/UX Design
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-pink-500/20 text-pink-400"
                  >
                    Mobile Development
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
