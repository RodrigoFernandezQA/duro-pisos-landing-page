/**
 * Template Name: UpConstruction - v1.3.0
 * Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-construction-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  // CORRECCIÓN: Se envuelve window.scrollTo en una función anónima.
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener("click", function () {
      // Esto es ahora una función
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /**
   * Initiate glightbox
   */
  // Agregada verificación de typeof para evitar error si GLightbox no carga
  if (typeof GLightbox !== "undefined") {
    const glightbox = GLightbox({
      selector: ".glightbox",
    });
  }

  /**
   * Porfolio isotope and filter
   */
  // COMENTADO: Este bloque causaba errores en main.js:46.
  // Si necesitas los filtros de portafolio/proyectos, verifica que Isotope.js esté cargado en tu HTML.
  /*
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    if (typeof Isotope !== 'undefined') {
        let portfolioFilter = portfolionIsotope.getAttribute(
          "data-portfolio-filter"
        )
          ? portfolionIsotope.getAttribute("data-portfolio-filter")
          : "*";
        let portfolioLayout = portfolionIsotope.getAttribute(
          "data-portfolio-layout"
        )
          ? portfolionIsotope.getAttribute("data-portfolio-layout")
          : "masonry";
        let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
          ? portfolionIsotope.getAttribute("data-portfolio-sort")
          : "original-order";

        window.addEventListener("load", () => {
          let portfolioIsotope = new Isotope(
            document.querySelector(".portfolio-container"),
            {
              itemSelector: ".portfolio-item",
              layoutMode: portfolioLayout,
              filter: portfolioFilter,
              sortBy: portfolioSort,
            }
          );

          let menuFilters = document.querySelectorAll(
            ".portfolio-isotope .portfolio-flters li"
          );
          menuFilters.forEach(function (el) {
            el.addEventListener(
              "click",
              function () {
                document
                  .querySelector(
                    ".portfolio-isotope .portfolio-flters .filter-active"
                  )
                  .classList.remove("filter-active");
                this.classList.add("filter-active");
                portfolioIsotope.arrange({
                  filter: this.getAttribute("data-filter"),
                });
                if (typeof aos_init === "function") {
                  aos_init();
                }
              },
              false
            );
          });
        });
    } else {
        console.warn("Isotope library not found. Portfolio filter functionality may not work.");
    }
  }
  */

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  // COMENTADO: Este bloque causaba errores relacionados con carruseles si no están bien configurados o se usan Swiper.
  // Si necesitas sliders con Swiper, verifica que swiper-bundle.min.js esté cargado en tu HTML.
  /*
  if (typeof Swiper !== 'undefined') {
    new Swiper(".slides-1", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /**
     * Init swiper slider with 2 slides at once in desktop view
     */
  /*
    new Swiper(".slides-2", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  } else {
      console.warn("Swiper library not found. Slider functionality may not work.");
  }
  */

  /**
   * Initiate pURE cOUNTER
   */
  // Agregada verificación de typeof para evitar error si PureCounter no carga
  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    // Agregada verificación de typeof para evitar error si AOS no carga
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "slide",
        once: true,
        mirror: false,
      });
    }
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  // --- TU CÓDIGO PERSONALIZADO: COPIAR AL PORTAPAPELES ---
  /**
   * Function to handle copy to clipboard functionality
   */
  const copyButtons = document.querySelectorAll(".copy-button");

  copyButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      const targetId = this.dataset.copyTarget;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = targetElement.textContent.trim();

        tempTextArea.style.position = "fixed";
        tempTextArea.style.top = 0;
        tempTextArea.style.left = 0;
        tempTextArea.style.opacity = 0;
        document.body.appendChild(tempTextArea);

        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);

        const originalIcon = this.querySelector("i");
        if (originalIcon) {
          originalIcon.classList.remove("bi-clipboard");
          originalIcon.classList.add("bi-check-lg");
          setTimeout(() => {
            originalIcon.classList.remove("bi-check-lg");
            originalIcon.classList.add("bi-clipboard");
          }, 1500);
        }
      }
    });
  });
}); // CIERRE DEL addEventListener "DOMContentLoaded" PRINCIPAL
