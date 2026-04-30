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
  MessageCircle,
  Clock,
  ArrowLeft
} from 'lucide-react';

type View = 'home' | 'order' | 'menu' | 'locations';

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
  const [currentView, setCurrentView] = useState<View>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    if (currentView === 'home') {
      const timer = setTimeout(() => setShowToast(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  const menuItems = [
    { 
      id: 1, 
      name: "Original Chicken Sandwich", 
      price: "$5.49", 
      desc: "A pressure-cooked chicken breast on a toasted buttered bun with dill pickle chips.", 
      image: "https://images.unsplash.com/photo-1606755962773-9e217a571f8b?auto=format&fit=crop&q=80&w=800",
      color: "bg-red-50" 
    },
    { 
      id: 2, 
      name: "Grilled Nuggets (8-count)", 
      price: "$6.29", 
      desc: "Bite-sized pieces of fresh chicken breast marinated and grilled for a tender, juicy taste.", 
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800", 
      color: "bg-green-50" 
    },
    { 
      id: 3, 
      name: "Waffle Potato Fries", 
      price: "$3.29", 
      desc: "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside.", 
      image: "https://images.unsplash.com/photo-1630384066272-11751df163fe?auto=format&fit=crop&q=80&w=800", 
      color: "bg-yellow-50" 
    },
    { 
      id: 4, 
      name: "Frosted Lemonade", 
      price: "$4.49", 
      desc: "A refreshing hand-spun treat that combines our signature Lemonade and Icedream® dessert.", 
      image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&q=80&w=800", 
      color: "bg-blue-50" 
    },
    { 
      id: 5, 
      name: "Grilled Chicken Cool Wrap", 
      price: "$8.99", 
      desc: "Sliced grilled chicken breast, fresh greens, and Monterey Jack and Cheddar cheeses.", 
      image: "https://images.unsplash.com/photo-1626700051175-656fc7cae0bb?auto=format&fit=crop&q=80&w=800", 
      color: "bg-orange-50" 
    },
    { 
      id: 6, 
      name: "Peach Milkshake", 
      price: "$4.89", 
      desc: "A seasonal favorite hand-spun with real peaches and topped with whipped cream.", 
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800", 
      color: "bg-pink-50" 
    },
  ];

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-cfa-red selection:text-white bg-white">
      {/* 1. STICKY NAVIGATION BAR */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span 
                onClick={() => navigateTo('home')}
                className="font-serif text-3xl font-bold text-cfa-red italic tracking-tighter cursor-pointer hover:opacity-80 transition-opacity"
              >
                Chick-fil-A
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10 items-center font-bold text-sm uppercase tracking-widest text-cfa-dark-red">
              <button 
                onClick={() => navigateTo('menu')} 
                className={`${currentView === 'menu' ? 'text-red-700 underline' : 'text-gray-600'} hover:text-cfa-red transition-colors cursor-pointer`}
              >
                Menu
              </button>
              <button 
                onClick={() => navigateTo('locations')} 
                className={`${currentView === 'locations' ? 'text-red-700 underline' : 'text-gray-600'} hover:text-cfa-red transition-colors cursor-pointer`}
              >
                Locations
              </button>
              <button className="text-gray-600 hover:text-cfa-red transition-colors cursor-pointer">Catering</button>
              
              <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
                <div className="relative cursor-pointer group" onClick={() => navigateTo('order')}>
                  <ShoppingCart size={22} className="text-gray-700 group-hover:text-cfa-red transition-colors" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-cfa-red text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                      {cart.length}
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => navigateTo('order')}
                  className="bg-cfa-red text-white px-8 py-3 rounded-full font-bold hover:bg-cfa-dark-red transition-all transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="relative cursor-pointer" onClick={() => navigateTo('order')}>
                <ShoppingCart size={24} className="text-gray-700" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-cfa-red text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cart.length}
                  </span>
                )}
              </div>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 focus:outline-none p-2 cursor-pointer"
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
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 top-20 bg-white z-[60] md:hidden p-8"
            >
              <div className="flex flex-col space-y-8 text-2xl font-bold">
                <button onClick={() => navigateTo('home')} className="text-left border-b border-gray-100 pb-4 cursor-pointer">Home</button>
                <button onClick={() => navigateTo('menu')} className="text-left border-b border-gray-100 pb-4 cursor-pointer">Menu</button>
                <button onClick={() => navigateTo('locations')} className="text-left border-b border-gray-100 pb-4 cursor-pointer">Locations</button>
                <button onClick={() => setIsMenuOpen(false)} className="text-left border-b border-gray-100 pb-4 cursor-pointer">Catering</button>
                
                <button 
                  onClick={() => navigateTo('order')}
                  className="w-full bg-cfa-red text-white py-5 rounded-2xl font-bold shadow-xl cursor-pointer"
                >
                  Start New Order
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* HERO SECTION */}
              <section className="relative h-[80vh] flex items-center overflow-hidden bg-white">
                <div className="absolute inset-0 flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 h-full bg-cfa-cream p-12 lg:p-24 flex items-center">
                    <div className="max-w-xl">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-cfa-red shadow-sm mb-8 border border-red-100">
                          <Clock size={16} className="mr-2" />
                          <span className="text-xs font-bold uppercase tracking-widest text-cfa-dark-red">Now Serving Breakfast</span>
                        </div>
                        
                        <h1 className="text-6xl md:text-8xl font-serif text-gray-900 font-bold leading-[0.9] mb-8">
                          Little things <br />
                          <span className="italic font-normal text-cfa-red">matter most.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-md">
                          Crafting fresh chicken sandwiches and waffle fries since 1946. Join us for a taste of genuine hospitality.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6">
                          <button 
                            onClick={() => navigateTo('order')}
                            className="bg-cfa-red text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-cfa-dark-red transition-all flex items-center justify-center group cursor-pointer"
                          >
                            Order Now
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </button>
                          <button 
                            onClick={() => navigateTo('menu')}
                            className="bg-white text-gray-900 border border-gray-200 px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all cursor-pointer"
                          >
                            View Menu
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
                    <motion.img 
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1920" 
                      alt="Chick-fil-A Original Sandwich"
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cfa-cream/40 to-transparent"></div>
                  </div>
                </div>
              </section>

              {/* FEATURED MENU SECTION */}
              <section id="menu-featured" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <ScrollReveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                      <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Handcrafted to <br/><span className="text-cfa-red italic">perfection.</span></h2>
                        <p className="text-lg text-gray-500">Every sandwich is made from whole breast meat chicken, hand-breaded and pressure cooked in 100% refined peanut oil.</p>
                      </div>
                      <button 
                        onClick={() => navigateTo('menu')}
                        className="mt-8 md:mt-0 text-cfa-red font-bold text-lg flex items-center hover:underline group cursor-pointer"
                      >
                        Explore Full Menu <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </ScrollReveal>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {menuItems.slice(0, 3).map((item) => (
                      <ScrollReveal key={item.id}>
                        <div className="group flex flex-col h-full">
                          <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-50 aspect-[4/5] mb-8">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-full px-4 py-2 font-bold text-gray-900 shadow-xl">
                              {item.price}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                          <p className="text-gray-500 mb-8 flex-grow leading-relaxed line-clamp-2">{item.desc}</p>
                          <button 
                            onClick={() => addToCart(item.id)}
                            className="bg-gray-50 text-gray-900 border border-gray-100 font-bold py-4 px-8 rounded-2xl hover:bg-cfa-red hover:text-white transition-all active:scale-[0.98] cursor-pointer"
                          >
                            Add to Order
                          </button>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </section>

              {/* VALUE PROPOSITION: EAT MOR CHIKIN */}
              <section className="py-24 bg-cfa-red text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                    <ScrollReveal>
                      <img 
                        src="https://images.unsplash.com/photo-1549466593-01869e061803?auto=format&fit=crop&q=80&w=1200" 
                        alt="Hospitality"
                        className="rounded-[3rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </ScrollReveal>
                    <ScrollReveal>
                      <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 italic">"It's My Pleasure."</h2>
                      <p className="text-2xl text-white/90 mb-10 leading-relaxed font-light">
                        We don't just serve food; we serve neighbors. Our commitment to hospitality is what makes every Chick-fil-A visit special.
                      </p>
                      <div className="grid grid-cols-2 gap-8 mb-12">
                        <div>
                          <div className="text-4xl font-serif font-bold mb-2">100%</div>
                          <div className="text-sm uppercase tracking-widest opacity-80">Whole Breast Meat</div>
                        </div>
                        <div>
                          <div className="text-4xl font-serif font-bold mb-2">Fresh</div>
                          <div className="text-sm uppercase tracking-widest opacity-80">Hand-breaded Daily</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => navigateTo('order')}
                        className="bg-white text-cfa-red px-12 py-5 rounded-full font-bold text-lg hover:bg-cfa-cream transition-all shadow-xl cursor-pointer"
                      >
                        Start Your Order
                      </button>
                    </ScrollReveal>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentView === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            >
              <div className="mb-20 text-center">
                <h1 className="text-6xl font-serif font-bold mb-6">Our Menu</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">From our classic sandwich to our seasonal treats, everything is made with the highest quality ingredients.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {menuItems.map((item) => (
                  <div key={item.id} className="group flex flex-col">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-50 mb-8 aspect-[4/5]">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <button 
                        onClick={() => addToCart(item.id)}
                        className="absolute bottom-6 right-6 bg-white text-cfa-red w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <ShoppingCart size={24} />
                      </button>
                    </div>
                    <div className="flex justify-between items-start mb-4 px-2">
                      <h3 className="text-2xl font-bold">{item.name}</h3>
                      <span className="text-xl font-serif font-bold text-cfa-red">{item.price}</span>
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3 px-2 flex-grow">{item.desc}</p>
                    <div className="flex items-center space-x-2 text-xs font-bold text-gray-400 uppercase tracking-widest px-2 pb-4">
                      <span>{Math.floor(Math.random() * 400 + 200)} Cal</span>
                      <span>•</span>
                      <div className="flex text-yellow-400">
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                      </div>
                    </div>
                    <button 
                      onClick={() => addToCart(item.id)}
                      className="w-full bg-cfa-red text-white py-4 rounded-2xl font-bold hover:bg-cfa-dark-red transition-all cursor-pointer"
                    >
                      Add to Order
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {currentView === 'order' && (
            <motion.div
              key="order"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            >
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Cart Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-12">
                    <button onClick={() => navigateTo('home')} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                      <ArrowLeft />
                    </button>
                    <h1 className="text-4xl font-serif font-bold">Your Order</h1>
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                      <div className="text-6xl mb-6">🥡</div>
                      <h2 className="text-2xl font-bold mb-4">Empty Tray?</h2>
                      <p className="text-gray-500 mb-8 max-w-sm mx-auto">Your cart is currently empty. Head over to our menu and pick something delicious!</p>
                      <button 
                        onClick={() => navigateTo('menu')}
                        className="bg-cfa-red text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-cfa-dark-red transition-all cursor-pointer"
                      >
                        Browse Menu
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cart.map((itemId, index) => {
                        const item = menuItems.find(m => m.id === itemId);
                        return (
                          <div key={index} className="flex items-center space-x-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <img 
                              src={item?.image} 
                              alt={item?.name}
                              className="w-24 h-24 rounded-2xl object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-1">
                              <h3 className="text-xl font-bold">{item?.name}</h3>
                              <p className="text-sm text-gray-500 mb-2">Original Recipe</p>
                              <div className="font-serif font-bold text-cfa-red">{item?.price}</div>
                            </div>
                            <button 
                              onClick={() => {
                                const newCart = [...cart];
                                newCart.splice(index, 1);
                                setCart(newCart);
                              }}
                              className="p-3 text-gray-300 hover:text-cfa-red transition-colors cursor-pointer"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        );
                      })}
                      
                      <button 
                        onClick={() => navigateTo('menu')}
                        className="w-full py-4 border-2 border-dashed border-gray-200 text-gray-400 font-bold rounded-3xl hover:border-cfa-red hover:text-cfa-red transition-all flex items-center justify-center cursor-pointer"
                      >
                        + Add More Items
                      </button>
                    </div>
                  )}
                </div>

                {/* Checkout Summary */}
                <div className="lg:w-96">
                  <div className="bg-gray-50 rounded-[3rem] p-10 top-32 sticky h-fit">
                    <h2 className="text-2xl font-serif font-bold mb-8">Summary</h2>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-gray-500">
                        <span>Items ({cart.length})</span>
                        <span>${(cart.reduce((acc, id) => acc + parseFloat(menuItems.find(m => m.id === id)?.price.replace('$', '') || '0'), 0)).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Delivery Fee</span>
                        <span className="text-green-600 font-bold">FREE</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Tax</span>
                        <span>$0.00</span>
                      </div>
                      <div className="pt-4 border-t border-gray-200 flex justify-between items-end">
                        <span className="font-bold text-lg">Total</span>
                        <span className="text-3xl font-serif font-bold text-cfa-red">
                          ${(cart.reduce((acc, id) => acc + parseFloat(menuItems.find(m => m.id === id)?.price.replace('$', '') || '0'), 0)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    
                    <button 
                      disabled={cart.length === 0}
                      className="w-full bg-cfa-red text-white py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-cfa-dark-red disabled:bg-gray-200 disabled:shadow-none transition-all flex items-center justify-center space-x-2 group cursor-pointer"
                    >
                      <span>Checkout Now</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'locations' && (
            <motion.div
              key="locations"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            >
               <div className="mb-20 text-center">
                <h1 className="text-6xl font-serif font-bold mb-6">Find a Table</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">Wherever life takes you, there's likely a Chick-fil-A just around the corner.</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 mb-20">
                <div className="flex-1 bg-cfa-cream rounded-[4rem] p-12 flex items-center justify-center shadow-inner h-[600px] border border-gray-100 relative group overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                    alt="Map mockup" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-cfa-red text-white flex items-center justify-center rounded-full shadow-2xl mx-auto mb-6 animate-pulse">
                      <MapPin size={40} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-6">Interactive Map</h3>
                    <button className="bg-white text-cfa-red px-10 py-4 rounded-full font-bold shadow-xl cursor-pointer">Use My Current Location</button>
                  </div>
                </div>

                <div className="lg:w-96 space-y-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-cfa-red/20 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold group-hover:text-cfa-red transition-colors">Market Street</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded">Open</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">456 Market Blvd, Downtown<br/>Atlanta, GA 30303</p>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center text-xs font-bold text-gray-400">
                           <Clock size={14} className="mr-2" />
                           <span>Closes at 10:00 PM</span>
                         </div>
                         <ArrowRight size={20} className="text-gray-200 group-hover:text-cfa-red transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-white text-gray-900 py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2 md:col-span-1">
              <span 
                onClick={() => navigateTo('home')}
                className="font-serif text-4xl font-bold text-cfa-red italic tracking-tighter mb-8 block cursor-pointer"
              >
                Chick-fil-A
              </span>
              <p className="text-gray-500 leading-relaxed mb-10 max-w-xs">
                From our kitchen to your table, we are committed to serving the best chicken and the best hospitality.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gray-50 rounded-2xl hover:bg-cfa-red hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="#" className="p-3 bg-gray-50 rounded-2xl hover:bg-cfa-red hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="#" className="p-3 bg-gray-50 rounded-2xl hover:bg-cfa-red hover:text-white transition-all"><Twitter size={20} /></a>
              </div>
            </div>
            
            {[
              { title: "Menu", links: ["Original Sandwich", "Classic Nuggets", "Waffle Fries", "Cool Wraps", "Milkshakes"] },
              { title: "Company", links: ["About Us", "Our History", "Team Members", "Shared Table", "Giving Back"] },
              { title: "Support", links: ["Contact Us", "Nutrition", "Sustainability", "Careers", "Gift Cards"] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-sm mb-10 uppercase tracking-[0.2em]">{col.title}</h4>
                <ul className="space-y-5 text-gray-500 font-medium">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="hover:text-cfa-red transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
            <p>© 2025 Chick-fil-A, Inc. All rights reserved.</p>
            <div className="flex space-x-8 mt-8 md:mt-0">
              <a href="#" className="hover:text-cfa-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cfa-red transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-cfa-red transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE ORDER CTA */}
      <AnimatePresence>
        {currentView !== 'order' && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="md:hidden fixed bottom-10 left-8 right-8 z-50"
          >
            <button 
              onClick={() => navigateTo('order')}
              className="w-full bg-cfa-red text-white py-5 rounded-[2rem] font-bold shadow-[0_20px_50px_rgba(229,25,55,0.4)] flex items-center justify-center space-x-3 active:scale-95 transition-transform cursor-pointer"
            >
              <ShoppingCart size={22} />
              <span>{cart.length > 0 ? `Complete Order (${cart.length})` : 'Start Ordering'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-32 md:bottom-12 right-8 z-[100] bg-[#1a1a1a] text-white shadow-2xl p-6 rounded-[2.5rem] flex items-center space-x-6 max-w-sm overflow-hidden"
          >
            <div className="bg-cfa-red w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full">
              <ShoppingCart size={24} />
            </div>
            <div className="flex-1 pr-6">
              <p className="font-bold text-lg leading-tight">Hungry?</p>
              <p className="text-gray-400 text-sm mt-1">Get local delivery with $0 fee for the next hour.</p>
              <button 
                onClick={() => navigateTo('order')}
                className="mt-4 text-cfa-red font-bold flex items-center text-sm group cursor-pointer"
              >
                Order Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </button>
            </div>
            <button onClick={() => setShowToast(false)} className="absolute top-6 right-6 text-gray-600 hover:text-white transition-colors cursor-pointer">
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
