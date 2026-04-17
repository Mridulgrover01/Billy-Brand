const products = {
  "floor-cleaner": {
    name: "Super Shine Floor & Bathroom Cleaner",
    category: "Cleaning Products",
    image: "images/Floor-Cleaner-Large.jpg",
    description: "A premium floor and bathroom cleaning solution formulated for fast dirt removal, fresh fragrance, and everyday hygiene across household surfaces.",
    benefits: ["Helps remove daily dirt and grime", "Designed for shining floors and bathroom surfaces", "Fresh fragrance for a clean home feel", "Suitable for routine household cleaning"],
    usage: "Dilute in water as needed, mop floors or wipe bathroom surfaces, then allow the area to dry naturally.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Super%20Shine%20Floor%20%26%20Bathroom%20Cleaner"
  },
  "toilet-cleaner": {
    name: "Super Shine Ultra Toilet Bowl Cleaner",
    category: "Cleaning Products",
    image: "images/Toilet-Cleaner-Large.jpg",
    description: "A strong toilet cleaning formula developed to tackle stubborn stains while supporting a cleaner and fresher washroom environment.",
    benefits: ["Targets tough bowl stains", "Supports cleaner toilet surfaces", "Easy to apply around the bowl edge", "Built for regular hygiene maintenance"],
    usage: "Apply directly inside the toilet bowl, leave for a few minutes, scrub gently and flush thoroughly.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Super%20Shine%20Ultra%20Toilet%20Bowl%20Cleaner"
  },
  "glass-cleaner": {
    name: "Purex Glass & Household Cleaner Spray",
    category: "Cleaning Products",
    image: "images/Glass-Cleaner-Large.jpg",
    description: "A quick-clean spray crafted for glass and household surfaces, helping maintain shine and reduce visible marks.",
    benefits: ["Useful for glass and smooth surfaces", "Quick spray application", "Supports streak-free shine with proper wiping", "Convenient household format"],
    usage: "Spray evenly on the target surface and wipe with a soft dry cloth or microfiber cloth.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Purex%20Glass%20%26%20Household%20Cleaner"
  },
  "dishwash-liquid": {
    name: "Purex Dishwash Gel Lemon Power",
    category: "Cleaning Products",
    image: "images/Dishwash-Liquid.jpg",
    description: "A concentrated dishwash liquid designed for kitchen cleaning performance with a fresh lemon-centric presentation.",
    benefits: ["Helps cut through greasy utensils", "Liquid and gel presentation options", "Kitchen-friendly everyday use", "Fresh citrus-led cleaning experience"],
    usage: "Use a small amount on a scrubber or dilute in water for utensil washing as per preference.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Purex%20Dishwash%20Gel"
  },
  "phenyl": {
    name: "Purex Daily Mop Phenyl Concentrate",
    category: "Cleaning Products",
    image: "images/Phenyl-Concentrate.jpg",
    description: "A concentrated phenyl cleaner for daily mopping applications, made for household floor hygiene and fresh-smelling spaces.",
    benefits: ["Concentrated floor-cleaning format", "Useful for regular mopping", "Supports odor control in daily cleaning", "Convenient bottle for measured use"],
    usage: "Mix the recommended amount in water and use for routine floor mopping.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Purex%20Daily%20Mop%20Phenyl"
  },
  "rang-kaat": {
    name: "Rang Kaat Stain Remover",
    category: "Cleaning Products",
    image: "images/Rangkaat.jpg",
    description: "A powerful stain remover solution designed to eliminate tough color stains and restore fabric brightness.",
    benefits: ["Made for tough color stain removal", "Supports brighter-looking fabric appearance", "Useful for targeted stain treatment", "Compact format for household convenience"],
    usage: "Apply carefully on the stained area as directed, allow brief action time, then wash the fabric thoroughly.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Rang%20Kaat%20Stain%20Remover"
  },
  "amla-powder": {
    name: "Amla Powder",
    category: "Ayurvedic & Hair Care",
    image: "images/Amla-Powder.jpg",
    description: "A traditional natural care product positioned for hair nourishment and long, silky hair rituals.",
    benefits: ["Part of the Amla natural care range", "Popular in traditional hair care routines", "Easy powder format for mixing", "Supports premium herbal positioning"],
    usage: "Mix with water or preferred herbal ingredients to create a paste and apply as part of a hair care routine.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Amla%20Powder"
  },
  "shikakai-powder": {
    name: "Shikakai Powder",
    category: "Ayurvedic & Hair Care",
    image: "images/Reetha-Pack.jpg",
    description: "A herbal powder range item crafted for traditional hair cleansing and nourishment rituals.",
    benefits: ["Traditional herbal care positioning", "Useful in routine hair nourishment blends", "Powder format for custom preparation", "Premium natural-care shelf appeal"],
    usage: "Prepare a smooth paste with water and use as part of a traditional hair cleansing routine.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Shikakai%20Powder"
  },
  "reetha-powder": {
    name: "Reetha Powder",
    category: "Ayurvedic & Hair Care",
    image: "images/Reetha-Powder.jpg",
    description: "A natural hair care powder designed for traditional herbal cleansing and beauty routines.",
    benefits: ["Useful in herbal hair care blends", "Natural-care product positioning", "Powder format for easy preparation", "Aligned with ayurvedic wellness range"],
    usage: "Mix into a paste and apply according to your preferred herbal hair care method.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Reetha%20Powder"
  },
  "multani-mitti": {
    name: "Multani Mitti",
    category: "Ayurvedic & Hair Care",
    image: "images/Multani-Mitti.jpg",
    description: "A classic natural beauty care product presented for oil-control, deep-cleansing, and fresh skin routines.",
    benefits: ["Popular for traditional skin care use", "Useful in face pack routines", "Natural beauty segment fit", "Premium herbal presentation"],
    usage: "Mix with water or rose water to form a paste and apply externally as part of a skincare routine.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Multani%20Mitti"
  },
  "triphala-powder": {
    name: "Triphala Powder",
    category: "Ayurvedic & Hair Care",
    image: "images/Triphala-Powder.jpg",
    description: "An ayurvedic wellness powder positioned around traditional herbal use and everyday natural-care appeal.",
    benefits: ["Ancient herbal wellness positioning", "Premium natural product presence", "Convenient powder format", "Part of the ayurvedic portfolio"],
    usage: "Use according to pack guidance and your preferred traditional wellness routine.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Triphala%20Powder"
  },
  "tea-masala": {
    name: "Tea Masala",
    category: "Food & Spices",
    image: "images/Tea-Masala.jpg",
    description: "A fragrant chai spice blend created to add rich aroma and strong taste to everyday tea preparation.",
    benefits: ["Enhances tea aroma", "Adds masala character to chai", "Suitable for home kitchens", "Compact easy-store pack"],
    usage: "Add a small amount while boiling tea to enrich taste and aroma.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Tea%20Masala"
  },
  "fruit-chaat-masala": {
    name: "Fruit Chaat Masala",
    category: "Food & Spices",
    image: "images/Fruit-Chaat-Masala.jpg",
    description: "A lively seasoning blend designed to enhance salads, fruits, and snacks with a chatpata taste profile.",
    benefits: ["Adds tangy seasoning to fruits and snacks", "Multipurpose snack enhancer", "Kitchen-friendly bottle format", "Distinctive FMCG shelf identity"],
    usage: "Sprinkle over fruits, salads, and snacks just before serving.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Fruit%20Chaat%20Masala"
  },
  "black-salt": {
    name: "Black Salt",
    category: "Food & Spices",
    image: "images/Black-Salt.jpg",
    description: "A flavorful household seasoning staple with a strong culinary identity for chaats, fruits, and daily use.",
    benefits: ["Useful in chaat and snack preparations", "Distinct household seasoning presence", "Convenient pouch format", "Strong brand visibility on shelf"],
    usage: "Use in small quantities to season fruits, chaats, or selected home recipes.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Black%20Salt"
  },
  "sendha-namak": {
    name: "Sendha Namak",
    category: "Food & Spices",
    image: "images/Sendha-Namak.jpg",
    description: "A rock salt product positioned as a pure and natural kitchen essential within the brand’s food range.",
    benefits: ["Rock salt style product offering", "Suitable for food seasoning use", "Strong pouch packaging presence", "Part of the food and spices line"],
    usage: "Use in cooking or seasoning according to taste and recipe requirements.",
    whatsapp: "https://wa.me/+919815714574?text=I%20want%20to%20order%20Sendha%20Namak"
  }
};

document.body.classList.add('page-fade');


// ===== MOBILE MENU =====
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}


// ===== SCROLL REVEAL =====
document.querySelectorAll('.reveal').forEach(el => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  io.observe(el);
});


// ===== PAGE TRANSITION =====
document.querySelectorAll('a[href$=".html"], a[href^="product-detail.html"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    if (!href || href.startsWith('#') || link.target === '_blank') return;

    e.preventDefault();

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;
      inset:0;
      background:#fff;
      z-index:9999;
      opacity:0;
      transition:opacity .3s ease;
    `;

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});


// ===== PRODUCT FILTER =====
const filterButtons = document.querySelectorAll('[data-filter]');
const productItems = document.querySelectorAll('[data-category]');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    productItems.forEach(item => {
      item.classList.toggle(
        'hidden',
        !(filter === 'all' || item.dataset.category === filter)
      );
    });
  });
});


// ===== PRODUCT DETAIL =====
const detailRoot = document.querySelector('[data-product-detail]');

if (detailRoot) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('product') || 'floor-cleaner';

  const product = products[slug] || products['floor-cleaner'];

  detailRoot.querySelector('[data-detail-name]').textContent = product.name;
  detailRoot.querySelector('[data-detail-category]').textContent = product.category;
  detailRoot.querySelector('[data-detail-description]').textContent = product.description;
  detailRoot.querySelector('[data-detail-usage]').textContent = product.usage;
  detailRoot.querySelector('[data-detail-image]').src = product.image;
  detailRoot.querySelector('[data-detail-image]').alt = product.name;
  detailRoot.querySelector('[data-order-link]').href = product.whatsapp;

  const benefits = detailRoot.querySelector('[data-detail-benefits]');
  benefits.innerHTML = product.benefits.map(item => `<li>${item}</li>`).join('');
}


// ===== CONTACT FORM (FIXED BACKEND) =====
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const res = await fetch("https://billy-backend-v4ti.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("Form Submitted ✅");
        form.reset();
      } else {
        alert("Server Error ❌");
      }

    } catch (error) {
      console.log(error);
      alert("Connection Error ❌");
    }
  });
}


// ===== WELCOME POPUP =====
window.addEventListener("load", () => {
  const popup = document.getElementById("welcome-popup");

  if (!popup) return;

  setTimeout(() => {
    popup.classList.add("open");
  }, 300);

  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
});