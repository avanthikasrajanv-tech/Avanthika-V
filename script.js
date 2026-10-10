/**
 * AVANTHIKA CREATIVE — DIGITAL MARKETING PORTFOLIO
 * Author: AVANTHIKA V (Digital Marketer & Creative Content Strategist)
 * Description: Interactive behavior, form validation, project modal handling,
 *              dynamic year, and smooth navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Dynamic Copyright Year
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Navbar Scroll Styling
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('mainNavbar');
  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Auto-Collapse on Link Click
  // --------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.nav-menu .nav-link, .nav-cta-wrapper a');
  const navbarCollapse = document.getElementById('navbarContent');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Back-to-Top Floating Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. Connect Service Inquire Buttons to Contact Dropdown
  // --------------------------------------------------------------------------
  const serviceButtons = document.querySelectorAll('.select-service-btn');
  const userServiceSelect = document.getElementById('userService');

  serviceButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service-name');
      if (userServiceSelect && serviceName) {
        // Find matching option in select
        for (let i = 0; i < userServiceSelect.options.length; i++) {
          if (userServiceSelect.options[i].value === serviceName) {
            userServiceSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Smooth scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Briefly highlight dropdown to guide user
        if (userServiceSelect) {
          setTimeout(() => {
            userServiceSelect.focus();
            userServiceSelect.classList.add('border-cyan');
            setTimeout(() => {
              userServiceSelect.classList.remove('border-cyan');
            }, 1800);
          }, 600);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. Portfolio Project Modal Data Population
  // --------------------------------------------------------------------------
  const projectModalElement = document.getElementById('projectModal');
  const viewProjectButtons = document.querySelectorAll('.view-project-btn');

  if (projectModalElement && viewProjectButtons.length > 0) {
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('projectModalLabel');
    const modalImage = document.getElementById('modalImage');
    const modalObjective = document.getElementById('modalObjective');
    const modalDescription = document.getElementById('modalDescription');
    const modalTools = document.getElementById('modalTools');
    const modalDeliverables = document.getElementById('modalDeliverables');

    const projectModal = new bootstrap.Modal(projectModalElement);

    viewProjectButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title') || 'Project Overview';
        const category = btn.getAttribute('data-category') || 'Marketing Strategy';
        const image = btn.getAttribute('data-image') || 'assets/images/project-seo.jpg';
        const objective = btn.getAttribute('data-objective') || '';
        const description = btn.getAttribute('data-description') || '';
        const tools = btn.getAttribute('data-tools') || '';
        const deliverables = btn.getAttribute('data-deliverables') || '';

        if (modalCategory) modalCategory.textContent = category;
        if (modalTitle) modalTitle.textContent = title;
        if (modalImage) {
          modalImage.src = image;
          modalImage.alt = `${title} preview illustration`;
        }
        if (modalObjective) modalObjective.textContent = objective;
        if (modalDescription) modalDescription.textContent = description;
        if (modalTools) modalTools.textContent = tools;
        if (modalDeliverables) modalDeliverables.textContent = deliverables;

        projectModal.show();
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Interactive Contact Form Validation & Submission
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const submitBtn = document.getElementById('submitFormBtn');

  if (contactForm) {
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const serviceInput = document.getElementById('userService');
    const messageInput = document.getElementById('userMessage');

    // Email regex validator
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
    };

    // Helper: set field error state
    const setFieldError = (input, errorElementId, message) => {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      const errEl = document.getElementById(errorElementId);
      if (errEl) errEl.textContent = message;
    };

    // Helper: set field valid state
    const setFieldValid = (input) => {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    };

    // Real-time input listeners to clear errors as user types
    [nameInput, emailInput, serviceInput, messageInput].forEach((input) => {
      if (!input) return;
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
        }
      });
      input.addEventListener('change', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
        }
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      let hasErrors = false;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setFieldError(nameInput, 'userNameError', 'Please enter your full name (at least 2 characters).');
        hasErrors = true;
      } else {
        setFieldValid(nameInput);
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        setFieldError(emailInput, 'userEmailError', 'Please provide your email address.');
        hasErrors = true;
      } else if (!isValidEmail(emailInput.value)) {
        setFieldError(emailInput, 'userEmailError', 'Please enter a valid email address (e.g. name@domain.com).');
        hasErrors = true;
      } else {
        setFieldValid(emailInput);
      }

      // Validate Service
      if (!serviceInput.value) {
        setFieldError(serviceInput, 'userServiceError', 'Please select a service from the dropdown.');
        hasErrors = true;
      } else {
        setFieldValid(serviceInput);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
        setFieldError(messageInput, 'userMessageError', 'Please enter a short message describing your requirements.');
        hasErrors = true;
      } else {
        setFieldValid(messageInput);
      }

      // If validation failed, display alert banner
      if (hasErrors) {
        if (formAlert) {
          formAlert.className = 'alert alert-danger mb-4';
          formAlert.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-2"></i>Please fill in all required fields correctly before submitting.';
          formAlert.classList.remove('d-none');
        }
        return;
      }

      // If form is valid: Provide UI feedback
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending Message...';
      }

      // Simulate sending inquiry (frontend demonstration)
      setTimeout(() => {
        if (formAlert) {
          formAlert.className = 'alert alert-success mb-4';
          formAlert.innerHTML = `
            <div class="d-flex align-items-center">
              <i class="fa-solid fa-circle-check fs-4 me-3 text-success"></i>
              <div>
                <strong>Thank you, ${nameInput.value.trim()}!</strong>
                <p class="mb-0 small">Your inquiry regarding <em>${serviceInput.value}</em> has been recorded. Avanthika will get in touch with you shortly.</p>
              </div>
            </div>
          `;
          formAlert.classList.remove('d-none');
        }

        // Reset form and UI states
        contactForm.reset();
        [nameInput, emailInput, serviceInput, messageInput].forEach((input) => {
          if (input) input.classList.remove('is-valid');
        });

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Message Sent Successfully</span> <i class="fa-solid fa-check ms-2"></i>';
          setTimeout(() => {
            submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-regular fa-paper-plane ms-2"></i>';
          }, 3500);
        }
      }, 900);
    });
  }

  // --------------------------------------------------------------------------
  // 8. Console Brand Greeting
  // --------------------------------------------------------------------------
  console.log(
    '%c AVANTHIKA CREATIVE %c Digital Marketing & Creative Content Strategist %c',
    'background:#8b5cf6; color:#ffffff; font-weight:bold; padding:4px 8px; border-radius:4px 0 0 4px;',
    'background:#06b6d4; color:#0b0f19; font-weight:bold; padding:4px 8px; border-radius:0 4px 4px 0;',
    'background:transparent;'
  );
});
