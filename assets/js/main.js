document.addEventListener('DOMContentLoaded', function() {

var myUpButton = document.querySelector('div.up');
var navbar = document.querySelector('.navbar');
var Logo = document.querySelector('.Logo');

window.onscroll = function() {
    window.scrollY > 40 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');
    window.scrollY > 40 ? navbar.style.backgroundColor = '#4a69bde6' : navbar.style.backgroundColor = '#4a69bd';
    window.scrollY > 40 ? Logo.style.width = '70%' : Logo.style.width = '100%';
    window.scrollY > 250 ? myUpButton.style.opacity = '1' : myUpButton.style.opacity = '0';
    window.scrollY > 250 ? myUpButton.style.transform = 'translateY(-20px)' : myUpButton.style.transform = 'translateY(0)';
};
window.scrollY > 40 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');
window.scrollY > 40 ? navbar.style.backgroundColor = '#4a69bde6' : navbar.style.backgroundColor = '#4a69bd';
window.scrollY > 250 ? myUpButton.style.opacity = '1' : myUpButton.style.opacity = '0';
window.scrollY > 40 ? Logo.style.width = '70%' : Logo.style.width = '100%';

myUpButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


// Count to plugin start
class Counter {
    constructor(element, options) {
      this.element = element;
      this.options = Object.assign({}, Counter.DEFAULTS, this.dataOptions(), options);
      this.init();
    }
  
    static DEFAULTS = {
      from: 0,
      to: 0,
      speed: 1000,
      refreshInterval: 100,
      decimals: 0,
      formatter: function(value, options) {
        return value.toFixed(options.decimals);
      },
      onUpdate: null,
      onComplete: null
    }
  
    init() {
      this.value = this.options.from;
      this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
      this.loopCount = 0;
      this.increment = (this.options.to - this.options.from) / this.loops;
    }
  
    dataOptions() {
      const data = {
        from: Number(this.element.dataset.from),
        to: Number(this.element.dataset.to),
        speed: Number(this.element.dataset.speed),
        refreshInterval: Number(this.element.dataset.refreshInterval),
        decimals: Number(this.element.dataset.decimals)
      };
  
      Object.keys(data).forEach(key => {
        if (data[key] === undefined) delete data[key];
      });
  
      return data;
    }
  
    update() {
      this.value += this.increment;
      this.loopCount++;
      this.render();
  
      if (typeof this.options.onUpdate === 'function') {
        this.options.onUpdate.call(this.element, this.value);
      }
  
      if (this.loopCount >= this.loops) {
        clearInterval(this.interval);
        this.value = this.options.to;
  
        if (typeof this.options.onComplete === 'function') {
          this.options.onComplete.call(this.element, this.value);
        }
      }
    }
  
    render() {
      const formattedValue = this.options.formatter.call(this.element, this.value, this.options);
      this.element.textContent = formattedValue;
    }
  
    restart() {
      this.stop();
      this.init();
      this.start();
    }
  
    start() {
      this.stop();
      this.render();
      this.interval = setInterval(() => this.update(), this.options.refreshInterval);
    }
  
    stop() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  
    toggle() {
      if (this.interval) {
        this.stop();
      } else {
        this.start();
      }
    }
  }
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = new Counter(entry.target);
        counter.start();
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-50px', threshold: 0.1 });
  
  document.querySelectorAll('[data-count-to]').forEach(element => observer.observe(element));
  
  // Count to plugin end
});