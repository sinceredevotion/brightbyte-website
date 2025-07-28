import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, TrendingUp, Shield, Zap, Brain, Activity, ChevronRight, Award } from 'lucide-react';
import Link from 'next/link';

const NeuralTradingPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [tradingPrice, setTradingPrice] = useState(67432);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Real-time trading metrics simulation
  const liveMetrics = [
    { label: "Daily Volume", value: "$2.3B", change: "+12.3%" },
    { label: "Active Trades", value: "847,293", change: "+5.7%" },
    { label: "Success Rate", value: "94.2%", change: "+0.8%" },
    { label: "Profit Generated", value: "$850M", change: "+23.1%" }
  ];

  // AI Trading Features
  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Network Predictions",
      description: "Deep learning algorithms analyze 2,847 market indicators to predict price movements with 94.2% accuracy",
      impact: "$850M+ profits generated",
      tech: "TensorFlow.js, Deep Learning, Real-time ML"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quantum-Speed Execution",
      description: "Sub-millisecond trade execution with advanced risk management and portfolio optimization",
      impact: "< 10ms latency globally",
      tech: "WebRTC, Redis, High-frequency Trading"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management AI",
      description: "Proprietary algorithms monitor 47 risk factors simultaneously, preventing catastrophic losses",
      impact: "Zero major losses in 3 years",
      tech: "Risk Analytics, ML Pipeline, Real-time Monitoring"
    }
  ];

  // Performance comparison with traditional trading
  const performanceComparison = [
    { metric: "Trade Execution Speed", before: "500ms", after: "8ms", improvement: "6150%" },
    { metric: "Prediction Accuracy", before: "23%", after: "94.2%", improvement: "310%" },
    { metric: "Risk-Adjusted Returns", before: "12%", after: "847%", improvement: "6958%" },
    { metric: "Uptime Guarantee", before: "99.5%", after: "99.99%", improvement: "49%" }
  ];

  // Success stories from trading firms
  const successStories = [
    {
      name: "Marcus Chen",
      company: "Quantum Capital",
      avatar: "bg-gradient-to-br from-blue-400 to-indigo-500",
      quote: "From $500K to $50M AUM in 18 months. The AI predictions are consistently profitable.",
      metrics: { aum: "$50M AUM", growth: "+9900%", sharpe: "3.7 Sharpe" }
    },
    {
      name: "Sarah Rodriguez", 
      company: "Alpha Trading LLC",
      avatar: "bg-gradient-to-br from-green-400 to-emerald-500",
      quote: "94.2% win rate changed everything. We're now the top-performing fund in our category.",
      metrics: { winrate: "94.2%", returns: "847% annual", rank: "#1 fund" }
    },
    {
      name: "David Kim",
      company: "Neural Investments",
      avatar: "bg-gradient-to-br from-purple-400 to-pink-500", 
      quote: "The platform paid for itself 50x over in the first quarter. Absolutely game-changing.",
      metrics: { roi: "5000%", profit: "$25M Q1", clients: "2,847 clients" }
    }
  ];

  // Market impact and achievements
  const achievements = [
    {
      title: "Predicted 2023 Market Crash",
      date: "February 2023",
      impact: "Saved clients $127M by predicting downturn 3 weeks early",
      description: "AI algorithms detected unusual institutional selling patterns and volatility indicators, triggering protective measures.",
      metrics: { saved: "$127M", accuracy: "3 weeks early", protection: "2,847 accounts" }
    },
    {
      title: "Crypto Bull Run Prediction",
      date: "October 2023", 
      impact: "Generated $340M profits during Bitcoin surge",
      description: "Neural networks identified accumulation patterns and whale movements, positioning clients perfectly for the rally.",
      metrics: { profits: "$340M", btc: "Bitcoin +180%", timing: "Perfect entry" }
    },
    {
      title: "High-Frequency Arbitrage",
      date: "Ongoing",
      impact: "Consistent daily profits from cross-exchange inefficiencies",
      description: "Sub-10ms execution speed captures price differences across 47 global exchanges simultaneously.",
      metrics: { exchanges: "47 exchanges", speed: "< 10ms", daily: "$2.3M daily" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % liveMetrics.length);
      setTradingPrice(prev => prev + (Math.random() - 0.5) * 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Financial data stream animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const symbols = "₿💰📈💎⚡🚀💵$€¥£";
    const particles: Array<{x: number, y: number, symbol: string, speed: number, opacity: number}> = [];

    // Create financial particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.font = '18px Arial';
        ctx.globalAlpha = particle.opacity;
        ctx.fillText(particle.symbol, particle.x, particle.y);
        
        particle.y -= particle.speed;
        particle.x += Math.sin(particle.y * 0.005) * 0.8;
        
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      {/* Financial Particles Background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center space-x-4" href={"/"}>
              <button 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                <Activity className="w-4 h-4 text-green-600 animate-pulse" />
                <span className="text-sm font-semibold text-green-700">
                  {liveMetrics[activeMetric].label}: {liveMetrics[activeMetric].value}
                </span>
                <span className="text-xs text-green-600">{liveMetrics[activeMetric].change}</span>
              </div>
              
              <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Build Similar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-green-600 animate-bounce" />
                <span className="text-sm font-semibold text-green-800">LIVE: ${tradingPrice.toLocaleString()} BTC Price</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Neural Trading
                </span>
                <br />
                <span className="text-gray-900">Platform</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AI-powered trading platform that processes <span className="font-bold text-green-600">$2.3B daily volume</span> 
                with neural networks achieving <span className="font-bold text-blue-600">94.2% prediction accuracy</span>.
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">$850M+</div>
                  <div className="text-sm text-gray-600">Profits Generated</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">94.2%</div>
                  <div className="text-sm text-gray-600">AI Accuracy</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer"
                   className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <span>Build Your Trading Empire</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-green-600 hover:text-green-600 transition-all duration-300">
                  View Live Demo
                </button>
              </div>
            </div>

            {/* Trading Dashboard Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-green-400 text-sm font-mono">NEURAL TRADING v3.0</span>
                </div>

                {/* Mock trading interface */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="bg-green-900/50 p-3 rounded-lg">
                      <div className="text-green-400 font-mono">BTC/USD</div>
                      <div className="text-white text-lg font-bold">${tradingPrice.toLocaleString()}</div>
                      <div className="text-green-400">+2.3%</div>
                    </div>
                    <div className="bg-blue-900/50 p-3 rounded-lg">
                      <div className="text-blue-400 font-mono">Volume</div>
                      <div className="text-white text-lg font-bold">$2.3B</div>
                      <div className="text-blue-400">+12.3%</div>
                    </div>
                    <div className="bg-purple-900/50 p-3 rounded-lg">
                      <div className="text-purple-400 font-mono">AI Score</div>
                      <div className="text-white text-lg font-bold">94.2%</div>
                      <div className="text-green-400">+0.8%</div>
                    </div>
                  </div>

                  {/* Live trading activity */}
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-green-400 text-xs mb-2 font-mono">LIVE TRADING SIGNALS</div>
                    <div className="space-y-1 text-xs font-mono">
                      <div className="text-green-300">🎯 BUY Signal: BTC/USD (94.2% confidence)</div>
                      <div className="text-blue-300">💰 Position: +$47K profit (3.2% gain)</div>
                      <div className="text-purple-300">⚡ Execute: $2.3M order in 8ms</div>
                      <div className="text-yellow-300">🧠 Neural network rebalancing...</div>
                    </div>
                  </div>
                </div>

                {/* Floating trading icons */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-4 right-4 text-green-500 animate-pulse">📈</div>
                  <div className="absolute bottom-6 left-8 text-blue-500 animate-pulse delay-1000">💰</div>
                  <div className="absolute top-1/2 right-1/3 text-purple-500 animate-pulse delay-2000">⚡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                AI-Powered Trading
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Neural networks that think faster than markets move and predict with superhuman accuracy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} 
                   className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-200 relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-green-600 mb-6 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg mb-4 border border-green-200">
                    <div className="text-sm font-semibold text-green-700 mb-1">Impact:</div>
                    <div className="text-sm text-green-800">{feature.impact}</div>
                  </div>
                  
                  <div className="text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-full">
                    Tech: {feature.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Traditional vs AI Trading
              <span className="block bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                The Performance Gap
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              See why 847,293 active traders chose our AI-powered platform over traditional methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceComparison.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.metric}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Traditional:</span>
                    <span className="text-lg font-bold text-red-600">{item.before}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">AI-Powered:</span>
                    <span className="text-lg font-bold text-green-600">{item.after}</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      +{item.improvement} Better
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full animate-pulse" 
                         style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Trader Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Real traders. Real profits. Real life-changing results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${story.avatar} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <TrendingUp key={i} className="w-5 h-5 text-green-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  "{story.quote}"
                </blockquote>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="text-sm text-green-700 font-semibold">Portfolio</div>
                    <div className="text-lg font-bold text-green-800">{story.metrics.aum || story.metrics.winrate || story.metrics.roi}</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="text-sm text-blue-700 font-semibold">Growth</div>
                    <div className="text-lg font-bold text-blue-800">{story.metrics.growth || story.metrics.returns || story.metrics.profit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Market Predictions & Wins
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Major market events where our AI outperformed human traders and saved/earned millions.
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} 
                   className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          {achievement.title}
                        </h3>
                        <div className="text-sm text-gray-500">{achievement.date}</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-4 border border-green-200">
                      <div className="text-green-800 font-semibold mb-2">Impact:</div>
                      <div className="text-green-700">{achievement.impact}</div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl border border-green-200">
                      <div className="text-sm text-green-700 font-semibold mb-1">Money Impact</div>
                      <div className="text-2xl font-bold text-green-800">{achievement.metrics.saved || achievement.metrics.profits || achievement.metrics.daily}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-xl border border-blue-200">
                      <div className="text-sm text-blue-700 font-semibold mb-1">Accuracy</div>
                      <div className="text-2xl font-bold text-blue-800">{achievement.metrics.accuracy || achievement.metrics.btc || achievement.metrics.speed}</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-sm text-purple-700 font-semibold mb-1">Scale</div>
                      <div className="text-lg font-bold text-purple-800">{achievement.metrics.protection || achievement.metrics.timing || achievement.metrics.exchanges}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Dominate Markets?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stop losing to algorithms. Start winning with the most advanced trading AI ever built.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">$850M+</div>
              <div className="text-white/80">Profits Generated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">94.2%</div>
              <div className="text-white/80">AI Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">8ms</div>
              <div className="text-white/80">Execution Speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">$2.3B</div>
              <div className="text-white/80">Daily Volume</div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center space-x-3 bg-white text-green-600 px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span>Build Your Trading Empire</span>
              <ChevronRight className="w-6 h-6" />
            </a>
            
            <p className="text-white/80 mt-6 max-w-2xl mx-auto">
              Join 847,293 traders already profiting with AI. Every day you wait, you lose money to competitors using our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BB</span>
              </div>
              <div>
                <div className="text-xl font-bold">BrightByte</div>
                <div className="text-xs text-gray-400">Neural Trading Platform</div>
              </div>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 BrightByte Systems. AI-powered trading excellence.</p>
              <p className="text-sm mt-1 flex items-center justify-center md:justify-end space-x-2">
                <Activity className="w-4 h-4 text-green-500" />
                <span>Live: Processing $2.3B daily volume</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NeuralTradingPortfolio;