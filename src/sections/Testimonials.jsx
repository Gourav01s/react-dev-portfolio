import { ChevronLeft, ChevronRight, Quote } from "lucide-react";


const Testimonials = () => {
  return (
    <section id="about" className="py-32 realtive overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10 ">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What people say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from
            <span className="font-serif italic font-normal text-white">
              {" "}
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* main testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary items-center justify-center">
                <Quote className="h-6 w-6 text-primary-foreground"/>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src=""
                  alt=""
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">{testimonials[0].author }</div>
                  <div className="text-sm text-muted-foreground">{testimonials[0].role }</div>
                </div>
              </div>
            </div>
          </div>

          {/* testimonial navigation */}
          <div>
            <button>
              <ChevronLeft/>
            </button>

            <div>
              {testimonials.map((_, idx) => (
                <button/>
              ))}
            </div>
            
            <button>
              <ChevronRight/>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials

