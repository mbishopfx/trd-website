'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Code, 
  Zap, 
  Shield, 
  Database,
  Cpu,
  Monitor,
  Settings,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  BarChart3,
  Network,
  Search,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function TeamPlatformSoftwarePage() {
  const platformServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'Enterprise-level platform development tailored to your team\'s specific workflow requirements and business objectives.',
      features: [
        'Custom dashboard and analytics interfaces',
        'API integration and data synchronization',
        'Scalable architecture design',
        'Performance optimization and monitoring'
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration Tools',
      description: 'Advanced collaboration platforms that streamline team communication, project management, and productivity workflows.',
      features: [
        'Real-time collaboration interfaces',
        'Project tracking and milestone management',
        'Team performance analytics',
        'Integrated communication systems'
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Management Systems',
      description: 'Comprehensive data architecture solutions for collecting, processing, and analyzing business-critical information.',
      features: [
        'Custom database architecture',
        'Automated data processing pipelines',
        'Advanced reporting and visualization',
        'Data security and compliance protocols'
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation with comprehensive compliance management for regulated industries.',
      features: [
        'Multi-layer security architecture',
        'Compliance monitoring and reporting',
        'Access control and permissions management',
        'Security audit and penetration testing'
      ],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Integration Services',
      description: 'Seamless integration between existing systems and new platform technologies for unified workflows.',
      features: [
        'Third-party API integrations',
        'Legacy system modernization',
        'Data migration and synchronization',
        'Workflow automation setup'
      ],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Platform Monitoring',
      description: '24/7 system monitoring with proactive maintenance and performance optimization for maximum uptime.',
      features: [
        'Real-time performance monitoring',
        'Automated alert systems',
        'Preventive maintenance scheduling',
        'Performance optimization recommendations'
      ],
    }
  ];

  const technicalCapabilities = [
    { technology: 'Frontend Development', description: 'React, Next.js, TypeScript, Modern UI/UX frameworks' },
    { technology: 'Backend Architecture', description: 'Node.js, Python, Database optimization, API development' },
    { technology: 'Cloud Infrastructure', description: 'AWS, Azure, Google Cloud, Scalable deployment solutions' },
    { technology: 'DevOps & CI/CD', description: 'Automated testing, deployment pipelines, container orchestration' },
    { technology: 'Data Engineering', description: 'Real-time processing, ETL pipelines, Analytics platforms' },
    { technology: 'Security Implementation', description: 'Authentication, encryption, compliance, audit systems' }
  ];

  const successMetrics = [
    { title: 'Stability', description: 'Built with monitoring, observability, and maintenance workflows.', icon: <TrendingUp className="w-6 h-6" /> },
    { title: 'Custom Fit', description: 'Designed around your team, process, and tooling — not generic templates.', icon: <Code className="w-6 h-6" /> },
    { title: 'Support', description: 'Fast response for platform issues and ongoing improvements.', icon: <Clock className="w-6 h-6" /> },
    { title: 'Efficiency', description: 'Automation and streamlined workflows reduce admin work and bottlenecks.', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-20">
      {/* Navigation Breadcrumb */}
      <div className="bg-brand-light/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-brand-primary hover:text-brand-primary/80 flex items-center space-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-brand-dark/50">/</span>
            <span className="text-brand-dark">Team Platform Software Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Team Platform <span className="text-brand-accent">Software Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Custom software development and platform solutions designed to empower teams, streamline workflows, and accelerate business growth through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-brand-light transition-colors duration-300"
                >
                  <Target className="w-5 h-5" />
                  <span>Start Your Project</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/platform"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300"
                >
                  <Monitor className="w-5 h-5" />
                  <span>View Our Platform</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center text-white">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-lg font-semibold text-brand-dark mb-2">{metric.title}</div>
                <div className="text-brand-dark/70 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
              Comprehensive Platform Development Services
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto leading-relaxed">
              From initial concept to full deployment, we deliver custom software solutions that transform how your team operates and scales your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {platformServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-brand-dark/70 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-brand-dark/70">
                          <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-end">
                      <Link
                        href="/contact"
                        className="text-brand-primary hover:text-brand-primary/80 font-semibold text-sm"
                      >
                        Get Quote →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Advanced Technical Expertise
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 leading-relaxed">
                Our development team combines cutting-edge technologies with proven methodologies to deliver robust, scalable platforms that grow with your business.
              </p>
              
              <div className="space-y-4">
                {technicalCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-brand-light/20 transition-colors duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">{capability.technology}</h4>
                      <p className="text-brand-dark/70 text-sm">{capability.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">
                  Enterprise-Grade Solutions
                </h3>
                <p className="text-brand-dark/70">
                  Built for scale, security, and performance
                </p>
              </div>
              <ul className="space-y-4 text-brand-dark/80">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Monitoring and maintenance workflows designed for stability.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Security-first architecture with access control and auditability.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Scalable infrastructure patterns for growth and performance.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Support and iteration cycles to keep improving after launch.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Team's Capabilities?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your platform requirements and create a custom solution that revolutionizes how your team operates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-brand-light transition-colors duration-300"
                >
                  <Target className="w-5 h-5" />
                  <span>Start Your Project</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/platform"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>View Our Platform</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema Markup */}
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "Team Platform Software Services | Custom Development Solutions",
          description: "Custom software development and platform solutions designed to empower teams, streamline workflows, and accelerate business growth through innovative technology.",
          url: "https://truerankdigital.com/tech-services/team-platform-software",
          keywords: ["team platform software", "custom software development", "platform solutions", "team collaboration tools", "enterprise software", "business automation"],
          category: "Software Development",
          serviceType: "Custom Software Development"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Team Platform Software Services", url: "https://truerankdigital.com/tech-services/team-platform-software" }
        ]}
      />
    </div>
  );
}
