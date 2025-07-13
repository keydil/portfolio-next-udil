"use client";
import { certificates } from "@/data/certificates";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Sertifikasi dan pencapaian yang telah saya raih dalam perjalanan
            belajar teknologi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <Award size={32} className="text-yellow-400" />
                  </div>
                </div>
                <CardTitle className="text-white text-lg">
                  {cert.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-blue-400 font-medium">{cert.issuer}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Calendar size={16} className="text-gray-400" />
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                </div>

                {cert.credentialId && (
                  <div>
                    <p className="text-gray-400 text-sm">Credential ID:</p>
                    <p className="text-white text-sm font-mono">
                      {cert.credentialId}
                    </p>
                  </div>
                )}

                {cert.credentialUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-500/20 hover:border-blue-500/40 text-blue-400 hover:text-blue-300"
                    onClick={() => window.open(cert.credentialUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Credential
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="text-yellow-400" size={20} />
                  Academic Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                    Frontend Intern (USB Team)
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-500/20 text-yellow-400"
                  >
                    2025
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                    Web Dev Competition – UNIDA
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-400"
                  >
                    2024
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                    Web Design Competition – Tel-U
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-400"
                  >
                    2024
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="text-purple-400" size={20} />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Full Stack Development</span>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-400"
                  >
                    Intermediate
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Game Development</span>
                  <Badge
                    variant="secondary"
                    className="bg-pink-500/20 text-pink-400"
                  >
                    Intermediate
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">IoT Systems</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-400"
                  >
                    Intermediate
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mobile Development</span>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-400"
                  >
                    Basic
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

export default Certificates;
