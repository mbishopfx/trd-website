'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, Code, Brain, BarChart3, Search, Globe, Target, Users, Zap, Shield } from 'lucide-react';

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
}

export default function FullTeamSection() {
  const leadership: TeamMember[] = [
    {
      name: "Jon J Korkowski",
      role: "CEO & Founder",
      department: "Leadership",
      bio: "Founder and CEO leading True Rank Digital's vision and strategy for digital marketing excellence.",
      specialties: ["Business Strategy", "Client Relations", "SEO Leadership"],
      icon: <Award className="w-8 h-8" />,
      color: "from-brand-primary to-brand-secondary",
      experience: "Leadership",
      email: "jon@truerankdigital.com"
    },
    {
      name: "Jesse Mathews",
      role: "President",
      department: "Leadership", 
      bio: "President overseeing operations and ensuring quality service delivery for all clients.",
      specialties: ["Operations", "Team Leadership", "Quality Management"],
      icon: <Target className="w-8 h-8" />,
      color: "from-brand-secondary to-brand-accent",
      experience: "Leadership",
      email: "jesse@truerankdigital.com"
    },
    {
      name: "Jose Perdomo",
      role: "Executive Vice President",
      department: "Leadership",
      bio: "Executive Vice President focused on strategic growth and business development.",
      specialties: ["Strategic Planning", "Business Development", "Market Expansion"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-brand-accent to-purple-600",
      experience: "Leadership",
      email: "jose@truerankdigital.com"
    }
  ];

  const technicalTeam: TeamMember[] = [
    {
      name: "Matt Bishop",
      role: "Tech Developer",
      department: "Development",
      bio: "Technical developer handling website development and technical implementation for client projects.",
      specialties: ["Web Development", "Technical Implementation", "Website Optimization"],
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      experience: "Developer",
      email: "bishop@truerankdigital.com"
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
    },
    {
      name: "Sebastian Vargas",
      role: "SEO Specialist",
      department: "SEO Team",
      bio: "SEO specialist working on search optimization and digital marketing campaigns.",
      specialties: ["SEO Optimization", "Digital Marketing", "Search Analysis"],
      icon: <Search className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      experience: "SEO Expert",
      email: "sebastian@truerankdigital.com"
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
            <div className="flex items-center space-x-3 pt-4 border-t border-brand-dark/10">
              <a 
                href={`mailto:${member.email}`}
                className="flex items-center space-x-2 text-brand-secondary hover:text-brand-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
              <button className="flex items-center space-x-2 text-brand-secondary hover:text-brand-primary transition-colors text-sm">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>
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
