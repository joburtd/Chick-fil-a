import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  MapPin, 
  ShoppingCart, 
  Star, 
  ArrowRight, 
  Check, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter, 
  Search,
  MessageCircle
} from 'lucide-react';

const ScrollReveal = ({ children }: { children: ReactNode; key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { id: 1, name: "Original Chicken Sandwich", price: "$5.49", desc: "A pressure-cooked chicken breast on a toasted buttered bun.", emoji: "🐔", color: "bg-red-50" },
    { id: 2, name: "Grilled Nuggets (8-count)", price: "$6.29", desc: "Bite-sized pieces of fresh chicken marinated in a special blend.", emoji: "🥗", color: "bg-green-50" },
    { id: 3, name: "Waffle Potato Fries (Medium)", price: "$3.29", desc: "Crispy, golden waffle-cut fries seasoned to perfection.", emoji: "🍟", color: "bg-yellow-50" },
    { id: 4, name: "Frosted Lemonade (Medium)", price: "$4.49", desc: "A refreshing blend of Chick-fil-A lemonade and Icedream.", emoji: "🥤", color: "bg-blue-50" },
    { id: 5, name: "Grilled Chicken Cool Wrap", price: "$8.99", desc: "Sliced grilled chicken, fresh greens, wrapped in flaxseed flatbread.", emoji: "🌯", color: "bg-orange-50" },
    { id: 6, name: "Peach Milkshake (Medium)", price: "$4.89", desc: "Hand-spun milkshake made with real peaches and Icedream.", emoji: "🍑", color: "bg-pink-50" },
  ];

  return (
    <div className="min-h-screen selection:bg-cfa-red selection:text-white">
      {/* 1. STICKY NAVIGATION BAR */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold text-cfa-red italic tracking-tighter cursor-pointer">
                Chick-fil-A
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <a href="#menu" className="text-gray-700 hover:text-cfa-red transition-colors">Menu</a>
              <a href="#locations" className="text-gray-700 hover:text-cfa-red transition-colors">Locations</a>
              <a href="#catering" className="text-gray-700 hover:text-cfa-red transition-colors">Catering</a>
              <a href="#rewards" className="text-gray-700 hover:text-cfa-red transition-colors">Rewards</a>
              <button className="bg-cfa-red text-white px-6 py-2.5 rounded-full font-bold hover:bg-cfa-dark-red transition-all transform hover:scale-105 active:scale-95 shadow-md">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-700 py-2">Menu</a>
                <a href="#locations" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-700 py-2">Locations</a>
                <a href="#catering" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-700 py-2">Catering</a>
                <a href="#rewards" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-700 py-2">Rewards</a>
                <button className="w-full bg-cfa-red text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                  Order Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* 2. HERO SECTION */}
        <section className="relative h-[85vh] flex items-center overflow-hidden hero-gradient rounded-b-[2rem] lg:rounded-b-[4rem] shadow-lg">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="md:w-2/3 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 text-[#1a1a1a] backdrop-blur shadow-md mb-6 border border-white/30">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 dot-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Now Delivering Near You</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6 drop-shadow-sm">
                  Fresh. Handcrafted. <br />
                  <span className="italic font-normal">Made with Care.</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-md font-medium">
                  Hot chicken sandwiches, waffle fries, and more — crafted fresh every day.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="pulse-button bg-white text-cfa-red px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center group overflow-hidden relative">
                    <span className="relative z-10 font-bold">Order Now</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                  <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                    View Menu
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Floating Chicken Emoji */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute right-20 top-1/4 text-9xl select-none opacity-20 pointer-events-none"
          >
            🐔
          </motion.div>
        </section>

        {/* 3. SOCIAL PROOF BAR */}
        <div className="bg-[#1a1a1a] overflow-hidden py-2 border-y border-gray-800">
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center space-x-16 px-8 text-white/80 font-bold uppercase tracking-wider text-[10px]">
                <span>Over 2,800 locations</span>
                <span>4.7★ Average Rating</span>
                <span>Closed Sundays — So Our Team Can Rest</span>
                <span>America's #1 Chicken Sandwich</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FEATURED MENU SECTION */}
        <section id="menu" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl mb-4">Fan Favorites</h2>
                <div className="w-24 h-1 bg-cfa-red mx-auto"></div>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {menuItems.map((item) => (
                <ScrollReveal key={item.id}>
                  <div className="group border border-gray-100 rounded-[2rem] p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                    <div className={`${item.color} h-48 rounded-2xl flex items-center justify-center mb-6 text-6xl group-hover:scale-105 transition-transform duration-500`}>
                      {item.emoji}
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                      <div className="text-2xl font-serif text-cfa-red font-bold pt-2">{item.price}</div>
                      <button className="w-full mt-4 bg-gray-100 group-hover:bg-cfa-red group-hover:text-white text-gray-800 font-bold py-3 px-6 rounded-xl transition-all active:scale-105">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. VALUE PROPOSITION */}
        <section className="py-20 bg-cfa-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🤝", title: "Genuine Hospitality", text: "Our team members are trained to care, not just serve." },
                { icon: "🌱", title: "Quality You Can Taste", text: "We use whole, fresh ingredients — no artificial preservatives." },
                { icon: "🎁", title: "Rewards That Give Back", text: "Earn points on every order with Chick-fil-A One." }
              ].map((val, idx) => (
                <ScrollReveal key={idx}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-cfa-red">
                    <div className="text-5xl mb-4">{val.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{val.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CHICK-FIL-A ONE REWARDS */}
        <section id="rewards" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <h2 className="text-4xl md:text-5xl mb-6">Join Chick-fil-A One™</h2>
                  <p className="text-xl text-gray-600 mb-8 font-light italic">"Earn points. Redeem rewards. Get free food."</p>
                  <div className="space-y-4 mb-10">
                    {[
                      "Free food on your birthday",
                      "Early access to new menu items",
                      "Personalized rewards just for you",
                      "Member-only offers every month"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="bg-red-50 text-cfa-red rounded-full p-1">
                          <Check size={18} />
                        </div>
                        <span className="text-lg font-medium text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-cfa-red text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-cfa-red/20 transition-all">
                    Sign Up Free
                  </button>
                </ScrollReveal>
              </div>
              
              <div className="lg:w-1/2 w-full max-w-sm lg:max-w-none">
                <ScrollReveal>
                  <div className="relative">
                    <div className="absolute -inset-10 bg-cfa-red/5 rounded-full blur-3xl opacity-50"></div>
                    <div className="relative rewards-card-gradient w-full aspect-[1.6/1] rounded-[2rem] p-8 text-white shadow-2xl overflow-hidden border border-white/20">
                      <div className="flex justify-between items-start mb-12">
                        <div className="font-serif text-2xl font-bold tracking-tighter">Chick-fil-A One</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Red Member</div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex space-x-1">
                          {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="white" className="text-white" />)}
                        </div>
                        <div className="text-4xl font-serif font-bold">12,450 pts</div>
                        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                          <div className="bg-white h-full w-3/4"></div>
                        </div>
                        <div className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Next reward: Grilled Sandwich (1,000 pts to go)</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CATERING SECTION */}
        <section id="catering" className="py-24 bg-cfa-dark-red text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl mb-6">Feed Your Next Event</h2>
              <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto">From office lunches to weddings — Chick-fil-A Catering has you covered.</p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Team Tray", serves: "Serves 10–12", desc: "Nuggets, sauces, and waffle fries. Perfect for small team huddles." },
                { title: "Party Pack", serves: "Serves 20–25", desc: "Full spread including sandwiches, salads, and fresh lemonade." },
                { title: "Premium Event", serves: "Custom quote", desc: "White-glove delivery, table setup, and dedicated team members." }
              ].map((c, i) => (
                <ScrollReveal key={i}>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-left hover:bg-white/15 transition-all">
                    <h3 className="text-2xl font-serif font-bold mb-1">{c.title}</h3>
                    <div className="text-cfa-red font-bold mb-4 bg-white px-3 py-1 rounded-full inline-block text-sm">{c.serves}</div>
                    <p className="text-white/70 mb-6">{c.desc}</p>
                    <button className="text-white border border-white py-2 px-6 rounded-lg font-bold hover:bg-white hover:text-cfa-dark-red transition-all w-full">
                      Learn More
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal>
              <button className="mt-16 border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-cfa-dark-red transition-all">
                Request a Catering Quote
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* 8. LOCATIONS SECTION */}
        <section id="locations" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <ScrollReveal>
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl mb-4">Find a Chick-fil-A Near You</h2>
                  <p className="text-gray-500">Fast, fresh, and friendly service is just a click away.</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="relative w-full md:w-96 group">
                  <input 
                    type="text" 
                    placeholder="Enter zip code..." 
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cfa-red transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cfa-red transition-colors" />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-cfa-red text-white p-2.5 rounded-full hover:bg-cfa-dark-red transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </ScrollReveal>
            </div>

            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl mb-12 flex items-center space-x-4">
              <div className="bg-white p-3 rounded-full text-orange-500">
                <MapPin />
              </div>
              <p className="text-orange-900 font-medium">Note: We're closed on Sundays so our team can rest and enjoy time with their families.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <ScrollReveal key={i}>
                  <div className="border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold mb-4">Downtown Market Square</h3>
                    <div className="space-y-3 mb-6 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>123 Peach Street, Suite 400</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>Mon-Sat: 6:30 AM - 10:00 PM</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={16} />
                        <span>(555) 123-4567</span>
                      </div>
                    </div>
                    <button className="text-cfa-red font-bold flex items-center hover:underline">
                      Get Directions <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9. TESTIMONIALS SECTION */}
        <section className="py-24 bg-cfa-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl mb-16">What Our Customers Say</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Jordan M., Atlanta GA", text: "Hands down the best chicken sandwich in the country. The service makes it even better." },
                { name: "Sarah K., Dallas TX", text: "My kids ask for Chick-fil-A every week. It's the only fast food I actually feel good about." },
                { name: "Marcus T., Charlotte NC", text: "The waffle fries are criminally underrated. And they always say 'my pleasure' — I love it." }
              ].map((rev, i) => (
                <ScrollReveal key={i}>
                  <div className="bg-white p-10 rounded-3xl shadow-sm relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md text-cfa-red">
                      <MessageCircle fill="currentColor" />
                    </div>
                    <div className="flex justify-center space-x-1 text-yellow-400 mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                    </div>
                    <p className="text-lg italic text-gray-700 leading-relaxed mb-6">"{rev.text}"</p>
                    <div className="font-bold text-gray-900">— {rev.name}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10. APP DOWNLOAD SECTION */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
                <ScrollReveal>
                  {/* CSS Phone Mockup */}
                  <div className="w-64 h-[500px] phone-mockup-outer shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-xl z-10"></div>
                    <div className="p-4 pt-12 text-white h-full bg-gradient-to-b from-cfa-red to-orange-600">
                      <div className="space-y-4">
                        <div className="h-4 w-12 bg-white/20 rounded-full"></div>
                        <div className="h-32 w-full bg-white/10 rounded-2xl flex items-center justify-center text-5xl">🐔</div>
                        <div className="space-y-2">
                          <div className="h-4 w-3/4 bg-white/30 rounded-full"></div>
                          <div className="h-4 w-1/2 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-4">
                          {[1,2,3,4].map(i => <div key={i} className="h-16 bg-white/10 rounded-xl"></div>)}
                        </div>
                        <div className="h-12 w-full bg-white text-cfa-red rounded-xl mt-4 flex items-center justify-center font-bold shadow-lg">Checkout</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <div className="lg:w-1/2 order-1 lg:order-2">
                <ScrollReveal>
                  <h2 className="text-4xl md:text-6xl mb-6">Order Faster. <br /><span className="text-cfa-red">Earn More.</span></h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">Download the Chick-fil-A app and skip the line. Personalized rewards and lightning-fast checkout await.</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-black text-white px-8 py-3 rounded-xl flex items-center space-x-3 hover:scale-105 transition-transform">
                      <div className="text-3xl"></div>
                      <div className="text-left">
                        <div className="text-[10px] uppercase opacity-70">Download on the</div>
                        <div className="text-lg font-bold">App Store</div>
                      </div>
                    </button>
                    <button className="bg-black text-white px-8 py-3 rounded-xl flex items-center space-x-3 hover:scale-105 transition-transform">
                      <div className="text-2xl">▶</div>
                      <div className="text-left">
                        <div className="text-[10px] uppercase opacity-70">Get it on</div>
                        <div className="text-lg font-bold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="bg-[#1a1a1a] text-white py-16 border-t-4 border-cfa-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-cfa-red">About</h4>
              <ul className="space-y-4 text-gray-400 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team Members</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shared Table</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Giving Back</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-cfa-red">Menu</h4>
              <ul className="space-y-4 text-gray-400 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Breakfast</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lunch/Dinner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beverages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Treats</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-cfa-red">Company</h4>
              <ul className="space-y-4 text-gray-400 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nutrition</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-cfa-red">Connect</h4>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-cfa-red transition-all"><Facebook size={18} /></a>
                <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-cfa-red transition-all"><Instagram size={18} /></a>
                <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-cfa-red transition-all"><Twitter size={18} /></a>
              </div>
              <p className="text-[10px] text-gray-500 leading-relaxed italic font-serif">"Eat Mor Chikin"</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            <p>© 2025 Chick-fil-A, Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE ORDER CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <button className="w-full bg-cfa-red text-white py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center space-x-2 active:scale-95 transition-transform">
          <ShoppingCart size={20} />
          <span>Order Now</span>
        </button>
      </div>

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed top-24 right-6 z-[60] bg-white border border-gray-100 shadow-2xl p-4 rounded-2xl flex items-center space-x-4 max-w-xs overflow-hidden"
          >
            <div className="bg-cfa-red text-white p-2 rounded-full">
              <Star size={16} fill="white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900 leading-tight">🔥 3 people just ordered near you</p>
              <p className="text-xs text-gray-500 mt-1">Get it while it's hot!</p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-gray-600 p-1">
              <X size={16} />
            </button>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: "linear" }}
              onAnimationComplete={() => setShowToast(false)}
              className="absolute bottom-0 left-0 right-0 h-1 bg-cfa-red origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
