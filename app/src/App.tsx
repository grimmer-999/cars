import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {
  Phone, MapPin, Clock, Shield, MessageCircle, ChevronRight,
  Star, TrendingUp, Users, Award, Car, Search, Menu, X,
  ArrowRight, CheckCircle, ShieldCheck, BadgeCheck, Handshake,
  Instagram, Facebook, Globe
} from 'lucide-react';
import { cars, companyInfo, categories } from './data/cars';
import type { Car as CarType } from './data/cars';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────── Navigation ─────────────────────── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#2a2a3a]' : 'bg-transparent'
    }`}>
      <div className="section-padding py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c8a45c] to-[#8a7035] flex items-center justify-center">
            <Car className="w-6 h-6 text-[#0a0a0f]" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wider gold-text font-serif">KEEN AUTO</h1>
            <p className="text-[10px] tracking-[0.3em] text-[#8a8499] uppercase">Premium Motors</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'Inventory', 'Services', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm text-[#8a8499] hover:text-[#c8a45c] transition-colors duration-300 tracking-wide"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-2.5 bg-gradient-to-r from-[#c8a45c] to-[#a8894a] text-[#0a0a0f] text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#c8a45c]/20 transition-all duration-300"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#c8a45c]">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-[#2a2a3a] pb-6 pt-4 px-6 space-y-4">
          {['Home', 'Inventory', 'Services', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="block w-full text-left text-[#8a8499] hover:text-[#c8a45c] py-2 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────── Hero Section ─────────────────────── */
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      gsap.fromTo('.hero-title span',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo('.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );
      gsap.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1 }
      );
      // Stats animation
      gsap.fromTo('.stat-item',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', delay: 1.2,
          scrollTrigger: { trigger: statsRef.current, start: 'top 90%' }
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToInventory = () => {
    document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f] z-10" />
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c8a45c 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8a45c]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c8a45c]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 text-center section-padding max-w-6xl mx-auto pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a45c]/30 bg-[#c8a45c]/5 mb-8 hero-subtitle">
          <Star className="w-4 h-4 text-[#c8a45c]" />
          <span className="text-sm text-[#c8a45c] tracking-wide">Kenya&apos;s Trusted Auto Dealer</span>
          <Star className="w-4 h-4 text-[#c8a45c]" />
        </div>

        <h1 className="hero-title text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold font-serif leading-none mb-6">
          <span className="block">KEEN</span>
          <span className="block gold-text mt-2">AUTO WORKS</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#8a8499] max-w-2xl mx-auto mb-10 hero-subtitle leading-relaxed">
          Premium vehicles, unbeatable prices, and exceptional service across East Africa.
          Your dream car is just a call away.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToInventory}
            className="group px-8 py-4 bg-gradient-to-r from-[#c8a45c] to-[#a8894a] text-[#0a0a0f] font-bold rounded-full hover:shadow-2xl hover:shadow-[#c8a45c]/30 transition-all duration-500 flex items-center gap-2"
          >
            View Our Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={`tel:${companyInfo.phone}`}
            className="px-8 py-4 border border-[#c8a45c]/40 text-[#c8a45c] font-semibold rounded-full hover:bg-[#c8a45c]/10 transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Paul Kigen
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
          {[
            { value: '50+', label: 'Vehicles' },
            { value: '3', label: 'Branches' },
            { value: '24/7', label: 'Available' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="stat-item text-center p-4 rounded-2xl glass-card">
              <p className="text-3xl font-bold gold-text font-serif">{stat.value}</p>
              <p className="text-sm text-[#8a8499] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Car Card ─────────────────────── */
function CarCard({ car, index }: { car: CarType; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: index * 0.08,
          scrollTrigger: { trigger: cardRef.current, start: 'top 92%', toggleActions: 'play none none none' }
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, [index]);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `Ksh ${(price / 1000000).toFixed(2)}M`;
    }
    return `Ksh ${price.toLocaleString()}`;
  };

  return (
    <div ref={cardRef} className="group glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.images[0] || 'https://via.placeholder.com/600x400?text=Keen+Auto+Works'}
          alt={`${car.year} ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#c8a45c] text-[#0a0a0f] text-xs font-bold">
          {car.year}
        </div>
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0a0a0f]/80 backdrop-blur text-[#c8a45c] text-xs font-semibold border border-[#c8a45c]/30">
          {car.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#f5f0e8] font-serif group-hover:text-[#c8a45c] transition-colors">
          {car.name}
        </h3>
        <p className="text-[#c8a45c] text-xl font-bold mt-2">{formatPrice(car.price)}</p>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex items-center gap-2 text-xs text-[#8a8499]">
            <Car className="w-3.5 h-3.5 text-[#c8a45c]" />
            {car.engine}
          </div>
          <div className="flex items-center gap-2 text-xs text-[#8a8499]">
            <TrendingUp className="w-3.5 h-3.5 text-[#c8a45c]" />
            {car.mileage}
          </div>
          <div className="flex items-center gap-2 text-xs text-[#8a8499]">
            <Settings className="w-3.5 h-3.5 text-[#c8a45c]" />
            {car.transmission}
          </div>
          <div className="flex items-center gap-2 text-xs text-[#8a8499]">
            <CheckCircle className="w-3.5 h-3.5 text-[#c8a45c]" />
            {car.features.length} Features
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#2a2a3a] flex items-center justify-between">
          <span className="text-xs text-[#8a8499]">Negotiable</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm text-[#c8a45c] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
          >
            Inquire <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Need a Settings icon wrapper since I used it above but didn't import it
function Settings({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M12 1v4m0 14v4m4.22-17.22l-2.83 2.83M8.61 15.39l-2.83 2.83M23 12h-4M5 12H1m17.22 4.22l-2.83-2.83M8.61 8.61L5.78 5.78" />
    </svg>
  );
}

/* ─────────────────────── Inventory Section ─────────────────────── */
function Inventory() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredCars = cars.filter(car => {
    const matchesCategory = activeCategory === 'All' || car.category === activeCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.engine.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.inventory-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inventory" ref={sectionRef} className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8a45c]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-padding">
        {/* Header */}
        <div className="inventory-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a45c]/30 mb-6">
            <Car className="w-4 h-4 text-[#c8a45c]" />
            <span className="text-sm text-[#c8a45c] tracking-wider uppercase">Our Collection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4">
            Premium <span className="gold-text">Inventory</span>
          </h2>
          <p className="text-[#8a8499] max-w-2xl mx-auto">
            Browse our handpicked selection of quality vehicles. Every car is thoroughly inspected
            and comes with our satisfaction guarantee.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8a8499]" />
            <input
              type="text"
              placeholder="Search by name or engine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#111118] border border-[#2a2a3a] rounded-xl text-[#f5f0e8] placeholder:text-[#8a8499]/60 focus:outline-none focus:border-[#c8a45c]/50 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#c8a45c] text-[#0a0a0f]'
                    : 'bg-[#111118] text-[#8a8499] border border-[#2a2a3a] hover:border-[#c8a45c]/50 hover:text-[#c8a45c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-[#2a2a3a] mx-auto mb-4" />
            <p className="text-[#8a8499] text-lg">No vehicles found matching your criteria.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}
              className="mt-4 text-[#c8a45c] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────── Services Section ─────────────────────── */
function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    { icon: Car, title: 'Car Sales', desc: 'New & used vehicles from top brands worldwide' },
    { icon: Globe, title: 'Import Services', desc: 'We handle all import logistics and documentation' },
    { icon: TrendingUp, title: 'Financing', desc: 'Flexible payment plans tailored to your budget' },
    { icon: Handshake, title: 'Trade-Ins', desc: 'Exchange your current vehicle for a new one' },
    { icon: ShieldCheck, title: 'Inspection', desc: 'Thorough 100-point quality inspection' },
    { icon: BadgeCheck, title: 'Documentation', desc: 'Full registration and transfer assistance' },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c8a45c]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a45c]/30 mb-6">
            <Award className="w-4 h-4 text-[#c8a45c]" />
            <span className="text-sm text-[#c8a45c] tracking-wider uppercase">What We Offer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4">
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="text-[#8a8499] max-w-2xl mx-auto">
            Comprehensive automotive solutions to make your car buying experience seamless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card glass-card rounded-2xl p-8 text-center group hover:bg-[#c8a45c]/5 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#c8a45c]/20 to-[#c8a45c]/5 border border-[#c8a45c]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <s.icon className="w-8 h-8 text-[#c8a45c]" />
              </div>
              <h3 className="text-xl font-bold text-[#f5f0e8] font-serif mb-3">{s.title}</h3>
              <p className="text-[#8a8499] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── About / Trust Section ─────────────────────── */
function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content > *',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );
      gsap.fromTo('.about-image',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const trustPoints = [
    { icon: Shield, text: 'Full refund if not fully satisfied' },
    { icon: Clock, text: '24/7 availability for all inquiries' },
    { icon: MapPin, text: '3 locations across East Africa' },
    { icon: Users, text: 'Personalized service by Paul Kigen' },
    { icon: CheckCircle, text: 'Every vehicle inspected & certified' },
    { icon: MessageCircle, text: 'Open to price negotiations' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="about-content">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a45c]/30 mb-6">
              <Shield className="w-4 h-4 text-[#c8a45c]" />
              <span className="text-sm text-[#c8a45c] tracking-wider uppercase">Why Choose Us</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6 leading-tight">
              Trusted Across<br /><span className="gold-text">East Africa</span>
            </h2>

            <p className="text-[#8a8499] leading-relaxed mb-8">
              Keen Auto Works is more than a car dealership — we are your trusted automotive partner.
              Based in Nairobi with branches in Eldoret and Arusha, we bring quality vehicles and
              exceptional service to customers across the region.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#111118]/50">
                  <point.icon className="w-5 h-5 text-[#c8a45c] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#f5f0e8]/90">{point.text}</span>
                </div>
              ))}
            </div>

            {/* Branches */}
            <div className="p-6 rounded-2xl glass-card">
              <h4 className="text-lg font-bold text-[#f5f0e8] font-serif mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#c8a45c]" />
                Our Locations
              </h4>
              <div className="space-y-3">
                {companyInfo.branches.map((branch, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#8a8499]">
                    <div className="w-2 h-2 rounded-full bg-[#c8a45c]" />
                    {branch}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="about-image relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                alt="Luxury car showroom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl glass-card border border-[#c8a45c]/30">
              <p className="text-4xl font-bold gold-text font-serif">50+</p>
              <p className="text-sm text-[#8a8499]">Quality Vehicles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Contact Section ─────────────────────── */
function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c8a45c]/3 to-transparent pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a45c]/30 mb-6">
            <Phone className="w-4 h-4 text-[#c8a45c]" />
            <span className="text-sm text-[#c8a45c] tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4">
            Contact <span className="gold-text">Paul Kigen</span>
          </h2>
          <p className="text-[#8a8499] max-w-2xl mx-auto">
            Ready to find your dream car? Reach out any time — we are available 24/7 to discuss
            terms, answer questions, and help you drive away happy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="contact-content space-y-6">
            <div className="glass-card rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] font-serif mb-2">Paul Kigen</h3>
                <p className="text-[#c8a45c] font-medium">Manager, Keen Auto Works</p>
              </div>

              <div className="space-y-4">
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-4 p-4 rounded-xl bg-[#111118] hover:bg-[#c8a45c]/10 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#c8a45c]/10 flex items-center justify-center group-hover:bg-[#c8a45c]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#c8a45c]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a8499]">Call Anytime</p>
                    <p className="text-lg font-semibold text-[#f5f0e8]">{companyInfo.phone}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${companyInfo.phone.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#111118] hover:bg-[#25D366]/10 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a8499]">WhatsApp</p>
                    <p className="text-lg font-semibold text-[#f5f0e8]">Chat on WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111118]">
                  <div className="w-12 h-12 rounded-xl bg-[#c8a45c]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#c8a45c]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a8499]">Headquarters</p>
                    <p className="text-lg font-semibold text-[#f5f0e8]">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111118]">
                  <div className="w-12 h-12 rounded-xl bg-[#c8a45c]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#c8a45c]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a8499]">Availability</p>
                    <p className="text-lg font-semibold text-[#f5f0e8]">24/7 Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-sm text-[#8a8499] mb-4">Follow us on social media</p>
              <div className="flex items-center gap-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-xl bg-[#111118] flex items-center justify-center text-[#8a8499] hover:text-[#c8a45c] hover:bg-[#c8a45c]/10 transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-content">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-[#f5f0e8] font-serif mb-6">Send an Inquiry</h3>

              <div>
                <label className="block text-sm text-[#8a8499] mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111118] border border-[#2a2a3a] rounded-xl text-[#f5f0e8] focus:outline-none focus:border-[#c8a45c]/50 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-[#8a8499] mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111118] border border-[#2a2a3a] rounded-xl text-[#f5f0e8] focus:outline-none focus:border-[#c8a45c]/50 transition-colors"
                  placeholder="+254..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-[#8a8499] mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#111118] border border-[#2a2a3a] rounded-xl text-[#f5f0e8] focus:outline-none focus:border-[#c8a45c]/50 transition-colors resize-none"
                  placeholder="Tell us which car you are interested in..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#c8a45c] to-[#a8894a] text-[#0a0a0f] font-bold rounded-xl hover:shadow-lg hover:shadow-[#c8a45c]/20 transition-all duration-300"
              >
                {submitted ? 'Message Sent!' : 'Send Inquiry'}
              </button>

              <p className="text-xs text-center text-[#8a8499]">
                We will get back to you within 30 minutes. All prices are negotiable.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Footer ─────────────────────── */
function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2a2a3a] py-16">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c8a45c] to-[#8a7035] flex items-center justify-center">
                <Car className="w-6 h-6 text-[#0a0a0f]" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-wider gold-text font-serif">KEEN AUTO</h3>
              </div>
            </div>
            <p className="text-sm text-[#8a8499] leading-relaxed">
              Your trusted partner for premium vehicles across East Africa.
              Quality cars, transparent prices, exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#f5f0e8] uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'Inventory', 'Services', 'About', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block text-sm text-[#8a8499] hover:text-[#c8a45c] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-[#f5f0e8] uppercase tracking-wider mb-4">Services</h4>
            <div className="space-y-3">
              {companyInfo.services.slice(0, 5).map(service => (
                <p key={service} className="text-sm text-[#8a8499]">{service}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#f5f0e8] uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-sm text-[#8a8499]">Manager: {companyInfo.manager}</p>
              <a href={`tel:${companyInfo.phone}`} className="block text-sm text-[#c8a45c]">{companyInfo.phone}</a>
              <p className="text-sm text-[#8a8499]">{companyInfo.headquarters}</p>
              <p className="text-sm text-[#8a8499]">{companyInfo.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#2a2a3a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8a8499]">
            &copy; {new Date().getFullYear()} Keen Auto Works. All rights reserved.
          </p>
          <p className="text-xs text-[#8a8499]">
            Full refund policy available. Terms & conditions apply.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────── Main App ─────────────────────── */
function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after images load
    const images = document.querySelectorAll('img');
    let loaded = 0;
    images.forEach(img => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === images.length) {
            ScrollTrigger.refresh();
          }
        });
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f5f0e8]">
      <Navigation />
      <Hero />
      <Inventory />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
