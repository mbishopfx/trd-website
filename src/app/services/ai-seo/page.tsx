import type { Metadata } from 'next';
import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Enhanced SEO Services - True Rank Digital',
  description: 'Revolutionary AI-powered SEO optimization that adapts to search algorithm changes in real-time.',
  keywords: 'AI SEO, artificial intelligence SEO, machine learning optimization, semantic SEO',
};

export default function AISEOPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Brain className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-semibold text-sm">AI-Enhanced SEO</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            AI-Enhanced SEO Services
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
            Revolutionary AI-powered optimization technology that adapts to search algorithm changes in real-time for superior results.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6">
              <Brain className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Machine Learning</h3>
              <p className="text-brand-dark/70 text-sm">Advanced AI that learns and optimizes continuously</p>
            </div>
            <div className="glass-card p-6">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Semantic Analysis</h3>
              <p className="text-brand-dark/70 text-sm">Deep understanding of search intent</p>
            </div>
            <div className="glass-card p-6">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Real-Time Updates</h3>
              <p className="text-brand-dark/70 text-sm">Instant adaptation to algorithm changes</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Experience the Future of SEO
            </h2>
            <p className="text-brand-dark/70 mb-6">
              Learn more about our revolutionary AIO technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/learn-aio"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-colors duration-300"
              >
                <Brain className="w-5 h-5" />
                <span>Learn About AIO</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 glass-button border-purple-600 text-purple-600 font-semibold text-lg rounded-full hover:bg-purple-50 transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
