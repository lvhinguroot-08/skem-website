/**
 * S.K ENGINEERING AND MANUFACTURING (SKEM)
 * Official Website JavaScript - Phase 2 Polish
 * Pure Vanilla JS, High Performance & Accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. STICKY HEADER & ACTIVE NAV SCROLLSPY
     -------------------------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  };

  const sectionTitles = {
    'home': 'S.K Engineering and Manufacturing | Engineering, Fabrication & Manufacturing in Mahesana',
    'about': 'About S.K Engineering and Manufacturing | Mahesana, Gujarat',
    'services': 'Engineering, Fabrication & Manufacturing Services | SKEM',
    'projects': 'Projects | S.K Engineering and Manufacturing',
    'work-in-action': 'Work in Action (Videos) | S.K Engineering and Manufacturing',
    'gallery': 'Engineering & Fabrication Work Gallery | SKEM',
    'why-skem': 'Why Choose SKEM | S.K Engineering and Manufacturing',
    'contact': 'Contact S.K Engineering and Manufacturing | Mahesana, Gujarat'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        // Dynamically update document title based on in-view section unless modal is active
        const modalActive = document.querySelector('.project-detail-modal.open, .quote-modal.open, .lightbox-modal.open');
        if (!modalActive && sectionTitles[id]) {
          document.title = sectionTitles[id];
        }
      }
    });
  }, observerOptions);

  sections.forEach((sec) => sectionObserver.observe(sec));

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  const openMobileNav = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    navToggle.setAttribute('aria-expanded', 'true');
  };

  const closeMobileNav = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    navToggle.setAttribute('aria-expanded', 'false');
  };

  if (navToggle) navToggle.addEventListener('click', openMobileNav);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileNav);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  /* --------------------------------------------------------------------------
     3. HERO VIDEO OPTIMIZATION & SAFE PLAYBACK
     -------------------------------------------------------------------------- */
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy or low data mode blocked playback
        // Graceful fallback: hero poster image displays seamlessly
        heroVideo.style.opacity = '0';
      });
    }
    heroVideo.addEventListener('error', () => {
      heroVideo.style.opacity = '0';
    });
  }

  /* --------------------------------------------------------------------------
     4. REAL PROJECTS DATA & MODAL DETAIL EXPERIENCE (PHASE 2)
     -------------------------------------------------------------------------- */
  const projectsData = {
    'bliss': {
      title: 'Bliss Waterpark',
      category: 'Structural Steel • Amusement Architecture',
      description: 'Engineering and structural fabrication work associated with the Bliss Waterpark project, presented through selected project visuals. The scope visibly encompasses multi-level steel launch tower platforms, vertical column clusters, and complex curved pipe support trusses engineered to hold spiral flumes and high visitor traffic at Gujarat\'s premier water resort.',
      images: [
        { src: 'assets/projects/bliss/3.webp', title: 'Multi-Level Slide Launch Tower', desc: 'Aerial perspective of structural steel launch platform and spiral flume framework.' },
        { src: 'assets/projects/bliss/2.webp', title: 'Helical Slide Radial Truss Framework', desc: 'Curved structural steel supports and pipe rings for helical water slides.' },
        { src: 'assets/projects/bliss/1.jpeg', title: 'Resort Site Assembly & Tower Erection', desc: 'Worksite panorama showing foundational columns and structural erection during assembly.' }
      ],
      video: null,
      highlights: [
        'Multi-deck high elevation structural steel towers',
        'Helical water slide support rings & radial pipe trusses',
        'Rigid column clustering for dynamic structural loads',
        'Weather-resistant outdoor structural finishing'
      ],
      whatsappText: 'Hello SK Engineering and Manufacturing, I would like to discuss the Bliss Waterpark project/work.'
    },
    'ongc': {
      title: 'ONGC',
      category: 'Energy Infrastructure • Piping & Flare Towers',
      description: 'Selected engineering, fabrication and industrial work associated with ONGC-related projects, presented through actual project visuals. Work visibly encompasses high-elevation lattice flare stack crane erection, elevated pipe bridge trestles, safety-yellow high-pressure process piping skids with automated control valves, and on-site workforce coordination.',
      images: [
        { src: 'assets/projects/ongc/14.jpeg', title: 'Lattice Flare Stack Tower & Pipeline Gantry', desc: 'Tall vertical flare stack tower with elevated pipeline bridge trestles.' },
        { src: 'assets/projects/ongc/4.jpeg', title: 'SKEM Field Workforce & Plant Skids', desc: 'Our technical workforce on-site at the process separation facility.' },
        { src: 'assets/projects/ongc/9.jpeg', title: 'High-Pressure Process Piping System', desc: 'Safety-yellow gas piping network with control valves, actuators, and gauges.' },
        { src: 'assets/projects/ongc/1.jpeg', title: 'Lattice Tower Vertical Assembly', desc: 'Multi-section steel lattice flare stack erected on concrete foundations.' },
        { src: 'assets/projects/ongc/3.jpeg', title: 'Pumping Skid & Motor Array', desc: 'Industrial fluid manifold array under overhead crane gantry shed.' },
        { src: 'assets/projects/ongc/7.jpeg', title: 'Instrumentation & Transmitter Installation', desc: 'Precision probe insertion into process piping line.' },
        { src: 'assets/projects/ongc/10.jpeg', title: 'Process Separation Facility', desc: 'Separation vessels, yellow piping headers, and electrical cabling drums during installation.' },
        { src: 'assets/projects/ongc/2.jpeg', title: 'Overhead Pipeline Trestle Bridge', desc: 'Steel structural trestle towers supporting process line.' }
      ],
      video: {
        src: 'assets/projects/ongc/WhatsApp%20Video%202026-10-04%20at%207.21.00%20PM.mp4',
        poster: 'assets/poster-video-erection.jpg',
        title: 'Flare Stack Crane Erection'
      },
      highlights: [
        'Crane-assisted high elevation lattice flare stack erection',
        'Elevated structural pipeline gantry trestles & pipe bridges',
        'High-pressure gas/fluid yellow piping networks with automated actuators',
        'On-site field assembly, alignment, and workforce coordination'
      ],
      whatsappText: 'Hello SK Engineering and Manufacturing, I would like to discuss the ONGC project/work.'
    },
    'structure': {
      title: 'Structural Fabrication',
      category: 'Heavy Steel • Workshop & Assembly Yard',
      description: 'Heavy structural steel fabrication and assembly carried out in our Mahesana facility and outdoor yard. Focuses on the precision cutting, joint beveling, heavy welding, and grinding of load-bearing building trusses, foundation columns, and industrial shed structures.',
      images: [
        { src: 'assets/projects/structure/1.jpeg', title: 'Structural Truss Grinding & Welding', desc: 'Fabricator finishing structural steel trusses inside the workshop with sparks.' },
        { src: 'assets/projects/structure/2.jpeg', title: 'Industrial Shed Structural Columns', desc: 'Heavy load-bearing columns and overhead crane runway support framing.' },
        { src: 'assets/projects/structure/3.jpeg', title: 'Outdoor Layout & Assembly Yard', desc: 'Heavy welding sets, piping spools, and fabrication lines in our Mahesana yard.' },
        { src: 'assets/projects/structure/4.jpeg', title: 'Facility Yard with Transport Rigs', desc: 'Wide perspective of SKEM facility yard with heavy mobile equipment.' }
      ],
      video: null,
      highlights: [
        'Heavy I-beam & channel column fabrication',
        'Full weld penetration, bevel preparation & joint grinding',
        'Indoor overhead crane-assisted material handling',
        'Spacious outdoor yard for trial assembly and pre-fitting'
      ],
      whatsappText: 'Hello SK Engineering and Manufacturing, I would like to discuss the Structural Fabrication work.'
    },
    'tank': {
      title: 'Industrial Tank Fabrication',
      category: 'Manufacturing • Mobile Process Units',
      description: 'Heavy fluid handling and mobile tank equipment manufacturing. Visibly incorporates a multi-axle truck chassis integration featuring a heavy-duty cylindrical pressure and liquid storage tank, high-pressure piping manifolds, access ladder, and integrated equipment toolboxes.',
      images: [
        { src: 'assets/projects/tank/1.jpeg', title: 'Truck-Mounted Industrial Process Tank', desc: 'Chassis-mounted cylindrical pressure tank unit with fluid manifold and toolboxes.' }
      ],
      video: null,
      highlights: [
        'Multi-axle commercial vehicle chassis integration',
        'Cylindrical heavy-gauge liquid pressure/storage tank fabrication',
        'External fluid transfer piping, valves & suction manifold',
        'Integrated safety access ladder, catwalk & storage toolboxes'
      ],
      whatsappText: 'Hello SK Engineering and Manufacturing, I would like to discuss the Industrial Tank Fabrication work.'
    },
    'bunkhouse': {
      title: 'Bunk House & Mobile Frac Tank',
      category: 'Manufacturing • 52 M³ Holding Units',
      description: 'Heavy industrial mobile unit and 52 M³ frac storage tank fabricated for oilfield service operations (B Vishal Oil & Energy Ltd). Features reinforced corrugated structural steel walls, integrated heavy-duty transport chassis, safety handrails, and high-volume fluid containment.',
      images: [
        { src: 'assets/projects/bunk%20house/1.jpeg', title: '52 M³ Mobile Frac Tank (B Vishal Oil & Energy)', desc: 'Heavy mobile storage tank with reinforced corrugated side walls and transport chassis.' }
      ],
      video: null,
      highlights: [
        '52 M³ high-capacity liquid storage containment',
        'Corrugated heavy steel plate construction for structural rigidity',
        'Heavy-duty mobile trailer chassis for worksite relocation',
        'Top inspection catwalk with perimeter safety handrails'
      ],
      whatsappText: 'Hello SK Engineering and Manufacturing, I would like to discuss the Bunk House & Mobile Frac Tank work.'
    }
  };

  const projectDetailModal = document.getElementById('projectDetailModal');
  const projectDetailClose = document.getElementById('projectDetailClose');
  const projectModalBackBtn = document.getElementById('projectModalBackBtn');
  const modalProjectTag = document.getElementById('modalProjectTag');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectDesc = document.getElementById('modalProjectDesc');
  const modalProjectGallery = document.getElementById('modalProjectGallery');
  const modalProjectVideo = document.getElementById('modalProjectVideo');
  const modalProjectHighlights = document.getElementById('modalProjectHighlights');
  const modalProjectWaBtn = document.getElementById('modalProjectWaBtn');
  const modalProjectQuoteBtn = document.getElementById('modalProjectQuoteBtn');

  const openProjectDetail = (projectId) => {
    const data = projectsData[projectId];
    if (!data || !projectDetailModal) return;

    const breadcrumbProjectName = document.getElementById('breadcrumbProjectName');
    if (breadcrumbProjectName) breadcrumbProjectName.textContent = data.title;
    document.title = `${data.title} | Projects | S.K Engineering and Manufacturing`;

    modalProjectTag.textContent = data.category;
    modalProjectTitle.textContent = data.title;
    modalProjectDesc.textContent = data.description;

    // Build Gallery Grid
    modalProjectGallery.innerHTML = '';
    data.images.forEach((imgObj) => {
      const thumb = document.createElement('div');
      thumb.className = 'project-detail-gallery-thumb';
      thumb.innerHTML = `
        <img src="${imgObj.src}" alt="${imgObj.title}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-caption-title">${imgObj.title}</div>
          <div class="gallery-caption-cat">${imgObj.desc}</div>
        </div>
      `;
      thumb.addEventListener('click', () => {
        // Open lightbox with this image
        openSingleLightbox(imgObj.src, imgObj.title, imgObj.desc, 'image');
      });
      modalProjectGallery.appendChild(thumb);
    });

    // Handle Video
    if (data.video) {
      modalProjectVideo.style.display = 'block';
      modalProjectVideo.innerHTML = `
        <div style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 12px; display:flex; align-items:center; gap:8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>Project Video: ${data.video.title}</span>
        </div>
        <video controls playsinline webkit-playsinline preload="metadata" poster="${data.video.poster}" style="width:100%; border-radius: var(--radius-sm); max-height:460px; background:#000;">
          <source src="${data.video.src}" type="video/mp4">
        </video>
      `;
    } else {
      modalProjectVideo.style.display = 'none';
      modalProjectVideo.innerHTML = '';
    }

    // Highlights
    modalProjectHighlights.innerHTML = '';
    data.highlights.forEach((hl) => {
      const li = document.createElement('li');
      li.className = 'service-list-item';
      li.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${hl}</span>
      `;
      modalProjectHighlights.appendChild(li);
    });

    // WhatsApp Action Button
    const waUrl = `https://wa.me/919510000730?text=${encodeURIComponent(data.whatsappText)}`;
    modalProjectWaBtn.href = waUrl;

    // Quote Modal Button
    modalProjectQuoteBtn.onclick = () => {
      closeProjectDetail();
      openQuoteModal(data.title);
    };

    projectDetailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    if (projectDetailModal) {
      // Pause any playing video inside modal
      const vid = projectDetailModal.querySelector('video');
      if (vid) vid.pause();
      projectDetailModal.classList.remove('open');
      document.body.style.overflow = '';
      document.title = sectionTitles['projects'] || 'Projects | S.K Engineering and Manufacturing';
    }
  };

  // Attach triggers to project cards
  document.querySelectorAll('.open-project-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const pid = trigger.getAttribute('data-project');
      openProjectDetail(pid);
    });
  });

  if (projectDetailClose) projectDetailClose.addEventListener('click', closeProjectDetail);
  if (projectModalBackBtn) projectModalBackBtn.addEventListener('click', closeProjectDetail);
  if (projectDetailModal) {
    projectDetailModal.addEventListener('click', (e) => {
      if (e.target === projectDetailModal) closeProjectDetail();
    });
  }

  /* --------------------------------------------------------------------------
     5. INTERACTIVE GALLERY & FILTERING
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category') || '';
        if (filterValue === 'all' || itemCategory.includes(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     6. LIGHTBOX COMPONENT
     -------------------------------------------------------------------------- */
  const lightbox = document.getElementById('lightboxModal');
  const lightboxMedia = document.getElementById('lightboxMedia');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  let activeGalleryItems = [];

  const updateActiveItems = () => {
    activeGalleryItems = Array.from(galleryItems).filter(
      (item) => item.style.display !== 'none'
    );
  };

  const showLightboxItem = (index) => {
    updateActiveItems();
    if (activeGalleryItems.length === 0) return;

    if (index < 0) index = activeGalleryItems.length - 1;
    if (index >= activeGalleryItems.length) index = 0;
    currentGalleryIndex = index;

    const item = activeGalleryItems[currentGalleryIndex];
    const type = item.getAttribute('data-type') || 'image';
    const src = item.getAttribute('data-src');
    const title = item.getAttribute('data-title') || 'SKEM Project Work';
    const desc = item.getAttribute('data-desc') || 'S.K Engineering and Manufacturing';

    lightboxMedia.innerHTML = '';

    if (type === 'video') {
      const vid = document.createElement('video');
      vid.src = src;
      vid.controls = true;
      vid.autoplay = true;
      vid.playsInline = true;
      vid.setAttribute('webkit-playsinline', 'true');
      vid.className = 'lightbox-video';
      lightboxMedia.appendChild(vid);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = title;
      img.className = 'lightbox-img';
      lightboxMedia.appendChild(img);
    }

    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
  };

  const openLightbox = (index) => {
    showLightboxItem(index);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const openSingleLightbox = (src, title, desc, type = 'image') => {
    lightboxMedia.innerHTML = '';
    if (type === 'video') {
      const vid = document.createElement('video');
      vid.src = src;
      vid.controls = true;
      vid.autoplay = true;
      vid.playsInline = true;
      vid.setAttribute('webkit-playsinline', 'true');
      vid.className = 'lightbox-video';
      lightboxMedia.appendChild(vid);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = title;
      img.className = 'lightbox-img';
      lightboxMedia.appendChild(img);
    }
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    lightboxPrev.style.display = 'none';
    lightboxNext.style.display = 'none';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    const vid = lightboxMedia.querySelector('video');
    if (vid) vid.pause();
    lightboxMedia.innerHTML = '';
    lightboxPrev.style.display = 'flex';
    lightboxNext.style.display = 'flex';
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      updateActiveItems();
      const idx = activeGalleryItems.indexOf(item);
      openLightbox(idx !== -1 ? idx : 0);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxItem(currentGalleryIndex - 1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxItem(currentGalleryIndex + 1);
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* --------------------------------------------------------------------------
     7. REQUEST A QUOTE / ENQUIRY MODAL
     -------------------------------------------------------------------------- */
  const quoteModal = document.getElementById('quoteModal');
  const quoteModalClose = document.getElementById('quoteModalClose');
  const quoteTriggers = document.querySelectorAll('.open-quote-modal');
  const modalServiceSelect = document.getElementById('modalService');

  const openQuoteModal = (servicePreset = '') => {
    if (modalServiceSelect && servicePreset) {
      modalServiceSelect.value = servicePreset;
    }
    if (quoteModal) {
      quoteModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeQuoteModal = () => {
    if (quoteModal) {
      quoteModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  quoteTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const preset = trigger.getAttribute('data-service') || '';
      openQuoteModal(preset);
    });
  });

  if (quoteModalClose) quoteModalClose.addEventListener('click', closeQuoteModal);
  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) closeQuoteModal();
    });
  }

  /* --------------------------------------------------------------------------
     8. FORM HANDLING & SECURE WHATSAPP CONTINUATION
     -------------------------------------------------------------------------- */
  const initForm = (formId, statusId) => {
    const form = document.getElementById(formId);
    const statusMsg = document.getElementById(statusId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check anti-spam honeypot
      const honeypot = form.querySelector('input[name="website_company_code"]');
      if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Bot submission blocked');
        return;
      }

      const nameInput = form.querySelector('[name="client_name"]');
      const phoneInput = form.querySelector('[name="client_phone"]');
      const companyInput = form.querySelector('[name="client_company"]');
      const serviceInput = form.querySelector('[name="service_type"]');
      const msgInput = form.querySelector('[name="project_details"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const company = companyInput ? companyInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value.trim() : '';
      const message = msgInput ? msgInput.value.trim() : '';

      if (!name || !phone) {
        if (statusMsg) {
          statusMsg.className = 'form-status-msg error';
          statusMsg.textContent = 'Please provide your name and contact phone number.';
          statusMsg.style.display = 'block';
        }
        return;
      }

      let waText = `Hello S.K Engineering and Manufacturing (SKEM),\n\n`;
      waText += `I have an engineering & fabrication requirement:\n`;
      waText += `• Name: ${name}\n`;
      if (company) waText += `• Company: ${company}\n`;
      waText += `• Phone: ${phone}\n`;
      if (service) waText += `• Requirement Type: ${service}\n`;
      if (message) waText += `• Details: ${message}\n`;
      waText += `\nPlease provide quotation and technical consultation.`;

      const encodedWaText = encodeURIComponent(waText);
      const waUrl = `https://wa.me/919510000730?text=${encodedWaText}`;

      if (statusMsg) {
        statusMsg.className = 'form-status-msg success';
        statusMsg.innerHTML = `
          <strong>Thank you, ${name}!</strong> Your requirement details have been prepared.<br>
          <div style="margin-top: 10px;">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="display:inline-flex;">
              Continue to WhatsApp for Instant Discussion &rarr;
            </a>
          </div>
        `;
        statusMsg.style.display = 'block';
      }

      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }, 600);
    });
  };

  initForm('homepageQuoteForm', 'quoteFormStatus');
  initForm('modalQuoteForm', 'modalQuoteFormStatus');

  /* --------------------------------------------------------------------------
     9. GLOBAL ESCAPE KEY & KEYBOARD LISTENER
     -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeProjectDetail();
      closeQuoteModal();
      closeMobileNav();
    } else if (lightbox && lightbox.classList.contains('open')) {
      if (e.key === 'ArrowLeft') showLightboxItem(currentGalleryIndex - 1);
      if (e.key === 'ArrowRight') showLightboxItem(currentGalleryIndex + 1);
    }
  });

  /* --------------------------------------------------------------------------
     10. INDUSTRIAL 3D TACTILE HOVER TILT (DESKTOP / MOUSE POINTER ONLY)
     -------------------------------------------------------------------------- */
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isFinePointer && !prefersReduced) {
    const tiltCards = document.querySelectorAll('.service-card, .project-card-featured');
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (((y - centerY) / centerY) * -4).toFixed(2);
        const rotateY = (((x - centerX) / centerX) * 4).toFixed(2);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. THIRD-PARTY / NETLIFY INJECTED BADGE CLEANUP
     -------------------------------------------------------------------------- */
  const scrubInjectedBadges = () => {
    try {
      const badges = document.querySelectorAll('[id*="netlify"], [class*="netlify"], div[data-netlify-deploy-id], .netlify-badge, #netlify-badge');
      badges.forEach((b) => {
        if (!b.closest('.mobile-sticky-bar')) {
          b.remove();
        }
      });
    } catch (_) {}
  };
  scrubInjectedBadges();
  setTimeout(scrubInjectedBadges, 800);
  setTimeout(scrubInjectedBadges, 2500);
});
