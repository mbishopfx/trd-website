'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Award, Code, BarChart3, Search, Target, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  specialties: string[];
  icon: React.ReactNode;
  color: string;
  experience: string;
  email: string;
  phone?: string;
  linkedin?: string;
}

export default function FullTeamSection() {
  const leadership: TeamMember[] = [
    {
      name: "Jon J Korkowski",
      role: "CEO - Founder",
      department: "Leadership",
      bio: "Founder and CEO leading True Rank Digital's vision and strategy for digital marketing excellence.",
      specialties: ["Business Strategy", "Client Relations", "SEO Leadership"],
      icon: <Award className="w-8 h-8" />,
      color: "from-brand-primary to-brand-secondary",
      experience: "Leadership",
      email: "jon@truerankdigital.com",
      linkedin: "https://www.linkedin.com/in/jonjkorkowski/"
    },
    {
      name: "Jose Perdomo",
      role: "EVP of Sales & Client Success",
      department: "Leadership",
      bio: "Executive Vice President leading sales execution and client success for sustained growth.",
      specialties: ["Sales Leadership", "Client Success", "Revenue Growth"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-brand-accent to-purple-600",
      experience: "Leadership",
      email: "jose@truerankdigital.com",
      linkedin: "https://www.linkedin.com/in/jose-perdomo-2ab14a22a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Eric Malheiro",
      role: "EVP of Sales Operations & Performance",
      department: "Leadership",
      bio: "Executive Vice President focused on sales operations, performance management, and strategic partnerships.",
      specialties: ["Sales Operations", "Performance Management", "Strategic Partnerships", "Revenue Operations"],
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      experience: "Leadership",
      email: "eric@truerankdigital.com",
      phone: "18482056899"
    },
  ];

  const technicalTeam: TeamMember[] = [
    {
      name: "Jesse Mathews",
      role: "EVP of Business Development & Sale",
      department: "Business Development & Sales", 
      bio: "Executive Vice President driving business development strategy and pipeline growth.",
      specialties: ["Business Development", "Sales Strategy", "Operations Leadership"],
      icon: <Target className="w-8 h-8" />,
      color: "from-brand-secondary to-brand-accent",
      experience: "Executive Leadership",
      email: "jesse@truerankdigital.com",
      linkedin: "https://www.linkedin.com/in/jesse-mathews-b342641bb/"
    },
    {
      name: "Matt Bishop",
      role: "CTO (Chief Technology Officer)",
      department: "Technology",
      bio: "Chief Technology Officer responsible for architecture, development, and technical execution across client and internal platforms.",
      specialties: ["Technology Strategy", "Software Architecture", "Web Development"],
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      experience: "Technology Leadership",
      email: "bishop@truerankdigital.com",
      linkedin: "https://www.linkedin.com/in/matt-bishop-a17b2431b/"
    },
    {
      name: "Sean O'Niel",
      role: "SEO Specialist",
      department: "SEO Team",
      bio: "SEO specialist focused on optimization strategies and search engine performance.",
      specialties: ["SEO Optimization", "Search Strategy", "Performance Analysis"],
      icon: <Search className="w-8 h-8" />,
      color: "from-green-500 to-blue-500",
      experience: "SEO Expert",
      email: "sean@truerankdigital.com"
    }
  ];


  const TeamGrid = ({ title, members, delay = 0 }: { title: string, members: TeamMember[], delay?: number }) => (
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="text-3xl font-heading font-bold text-brand-dark mb-8 text-center"
      >
        {title}
      </motion.h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + delay }}
            viewport={{ once: true }}
            className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
          >
            {/* Header */}
            <div className="text-center mb-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {member.icon}
                </div>
              </div>
              <h4 className="text-xl font-heading font-bold text-brand-dark mb-1">{member.name}</h4>
              <p className="text-brand-primary font-semibold mb-2">{member.role}</p>
              <span className="inline-block px-3 py-1 bg-brand-light rounded-full text-brand-dark text-sm font-medium">
                {member.experience}
              </span>
            </div>

            {/* Bio */}
            <p className="text-brand-dark/70 text-sm leading-relaxed mb-4">
              {member.bio}
            </p>

            {/* Specialties */}
            <div className="mb-4">
              <h5 className="text-brand-dark font-semibold text-sm mb-2">Specialties</h5>
              <div className="flex flex-wrap gap-1">
                {member.specialties.map((specialty, i) => (
                  <span
                    key={i}
                    className="inline-block px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-brand-dark/10">
              <a 
                href={`mailto:${member.email}`}
                className="flex items-center space-x-2 text-brand-secondary hover:text-brand-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              {member.phone && (
                <a 
                  href={`tel:${member.phone}`}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-brand-accent text-white rounded-full hover:bg-brand-accent/90 transition-colors text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              )}
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-brand-secondary hover:text-brand-primary transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            Our Complete Team
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            Meet the True Rank Digital team. Each team member is committed to providing quality service and working toward your business success.
          </p>
        </motion.div>

        {/* Leadership Team */}
        <TeamGrid title="Leadership Team" members={leadership} delay={0.2} />

        {/* Technical Team */}
        <TeamGrid title="Team Members" members={technicalTeam} delay={0.4} />

      </div>
    </section>
  );
}
