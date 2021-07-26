(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    require("mo-js");
    
    var AnimateIcon = function (el, _options) {
        var options = _options || {};
        this.el = el;
        this.icon = this.el.querySelector(".anim-icon");
        this.tween = options.tween;
        this.set();
    };
    
    AnimateIcon.prototype.start = function () {
        this.timeline.start();
    };
    
    AnimateIcon.prototype.set = function () {
        this.timeline = new mojs.Timeline();
    
        var tweens = this.tweens[this.tween]({ el: this.el, icon: this.icon });
        for (var i = 0; i < tweens.length; i++) {
            this.timeline.add(tweens[i]);
        }
    };
    
    AnimateIcon.prototype.tweens = {
        circle_1: function (_options) {
            var options = _options || {},
                burst,
                transit,
                tween,
                el = options.el,
                icon = options.icon;
    
            // burst animation
            burst = new mojs.Burst({
                parent: el,
                duration: 1700,
                shape: 'circle',
                fill: '#fff',
                x: '50%',
                y: '50%',
                opacity: 0.6,
                childOptions: { radius: { 15: 0 } },
                radius: { 30: 90 },
                count: 6,
                isRunLess: true,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            });
    
            // ring animation
            transit = new mojs.Transit({
                parent: el,
                duration: 700,
                type: 'circle',
                radius: { 0: 60 },
                fill: 'transparent',
                stroke: '#fff',
                strokeWidth: { 20: 0 },
                opacity: 0.6,
                x: '50%',
                y: '50%',
                isRunLess: true,
                easing: mojs.easing.sin.out
            });
    
            // icon scale animation
            tween = new mojs.Tween({
                duration: 1200,
                onUpdate: function (progress) {
                    if (progress > 0.3) {
                        var elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
                        icon.style.WebkitTransform = icon.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                    } else {
                        icon.style.WebkitTransform = icon.style.transform = 'scale3d(0,0,1)';
                    }
                }
            });
    
            return [burst, transit, tween];
        },
        circle_2: function (_options) {
            var options = _options || {},
                burst,
                transit,
                tween,
                el = options.el,
                icon = options.icon;
    
            // burst animation
            burst = new mojs.Burst({
                parent: el,
                duration: 1500,
                delay: 300,
                shape: 'circle',
                // fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
                fill: "#fff",
                x: '50%',
                y: '50%',
                opacity: 0.6,
                radius: { 40: 90 },
                count: 6,
                isRunLess: true,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            });
    
            // ring animation
            transit = new mojs.Transit({
                parent: el,
                duration: 750,
                type: 'circle',
                radius: { 0: 50 },
                fill: 'transparent',
                stroke: '#fff',
                strokeWidth: { 35: 0 },
                opacity: 0.6,
                x: '50%',
                y: '50%',
                isRunLess: true,
                easing: mojs.easing.bezier(0, 1, 0.5, 1)
            });
    
            // icon scale animation
            tween = new mojs.Tween({
                duration: 1100,
                onUpdate: function (progress) {
                    if (progress > 0.3) {
                        var elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
                        icon.style.WebkitTransform = icon.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                    } else {
                        icon.style.WebkitTransform = icon.style.transform = 'scale3d(0,0,1)';
                    }
                }
            });
    
            return [burst, transit, tween];
        },
        circle_3: function (_options) {
            var options = _options || {},
                burst,
                transit,
                tween,
                el = options.el,
                icon = options.icon,
                scaleCur = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
    
            // burst animation
            burst = new mojs.Burst({
                parent: el,
                duration: 1700,
                shape: 'circle',
                fill: '#fff',
                x: '50%',
                y: '50%',
                childOptions: {
                    radius: { 12: 0 },
                    type: 'line',
                    // stroke: '#988ADE',
                    stroke: '#fff',
                    strokeWidth: 2
                },
                radius: { 40: 110 },
                count: 20,
                isRunLess: true,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            });
    
            // ring animation
            transit = new mojs.Transit({
                parent: el,
                duration: 800,
                type: 'circle',
                radius: { 10: 60 },
                fill: 'transparent',
                // stroke: '#988ADE',
                stroke: '#fff',
                strokeWidth: { 30: 0 },
                x: '50%',
                y: '50%',
                isRunLess: true,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            });
    
            // icon scale animation
            tween = new mojs.Tween({
                duration: 800,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                onUpdate: function (progress) {
                    var scaleProgress = scaleCur(progress);
                    icon.style.WebkitTransform = icon.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
                }
            });
    
            return [burst, transit, tween];
        }
    
    };
    
    module.exports = AnimateIcon;
    
    },{"mo-js":13}],2:[function(require,module,exports){
    var $ = require('jquery');
    
    $(function () {
    
        var WIDTH = window.innerWidth,
            HEIGHT = window.innerHeight;
    
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 3000);
        var renderer = new THREE.WebGLRenderer();
    
        renderer.setSize(WIDTH, HEIGHT);
        $(".hero-area-field").append(renderer.domElement);
    
        // camera
        camera.position.z = 500;
    
        // particle
        var count = 700,
            particles = new THREE.Geometry(),
            x,
            y,
            z;
    
        var textureLoader = new THREE.TextureLoader();
        var particleMaterial = new THREE.PointCloudMaterial({
            color: 0xffffff,
            map: THREE.ImageUtils.loadTexture("assets/dist/img/particle-2.png"),
            transparent: true,
            size: 20
        });
    
        for (var i = 0; i < count; i++) {
    
            x = Math.random() * 1000 - 500;
            y = Math.random() * 1000 - 500;
            z = Math.random() * 1000 - 500;
    
            particle = new THREE.Vector3(x, y, z);
            particle.velocity = new THREE.Vector3(0, -Math.random(), 0);
    
            particles.vertices.push(particle);
        }
    
        // create the Point
        var points = new THREE.PointCloud(particles, particleMaterial);
        points.sortParticles = true;
    
        scene.add(points);
    
        function particleRender() {
    
            requestAnimationFrame(particleRender);
    
            // points.rotation.x += 0.001;
            points.rotation.y += 0.001;
            points.rotation.z += 0.001;
    
            var _count = count;
            while (_count--) {
    
                var _particle = particles.vertices[_count];
    
                if (_particle.y < -400) {
                    _particle.y = 400;
                    _particle.velocity.y = -Math.random();
                }
    
                if (_particle.x > 400) {
                    _particle.x = -400;
                    _particle.velocity.x = Math.random();
                }
    
                _particle.velocity.y -= Math.random() * 0.001;
                _particle.velocity.x += Math.random() * 0.001;
    
                // if (Math.abs(_particle.x) > 1000) {
                //     _particle.velocity.x = Math.abs(_particle.velocity.x) + (Math.random() / 5 - 0.1);
                //     if (_particle.x > 1000) _particle.velocity.x *= -1;
                // }
    
                // if (Math.abs(_particle.y) > 1000) {
                //     _particle.velocity.y = Math.abs(_particle.velocity.y) + (Math.random() / 5 - 0.1);
                //     if (_particle.y > 1000) _particle.velocity.y *= -1;
                // }
    
                _particle.add(_particle.velocity);
            }
    
            points.geometry.__dirtyVertices = true;
            renderer.render(scene, camera);
        }
        particleRender();
    });
    
    },{"jquery":5}],3:[function(require,module,exports){
    (function (global){
    /*----------------------------
        Modules
    ----------------------------*/
    var $ = global.jQuery = require("jquery"),
        _ = require("underscore");
    
    require("lightslider");
    require("jquery-color");
    var AnimateIcon = require("./animate_icon.js");
    
    /*----------------------------
        Global Variables
    ----------------------------*/
    (function () {
    
      Manakuro = {};
    
      /*-- Options --*/
      // Slider
      Manakuro.slideCurrent = 0;
      Manakuro.slider_max = 7;
    
      // Device
      Manakuro.devices = {
        "1px": "mobile",
        "2px": "tablet",
        "3px": "desktop",
        "4px": "desktop_l",
        "5px": "desktop_xl"
      };
    
      // Works Section
      Manakuro.works = {
        modal_img_slider: "",
        is_closing: false
      };
    })();
    
    Manakuro.Utilities = {
    
      getTranslate: function (obj) {
    
        var result = {};
    
        var transformMatrix = obj.css("-webkit-transform") || obj.css("-moz-transform") || obj.css("-ms-transform") || obj.css("-o-transform") || obj.css("transform");
    
        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
    
        result.x = matrix[12] || matrix[4]; //translate x
        result.y = matrix[13] || matrix[5]; //translate y
    
        return result;
      }
    
    };
    
    /*----------------------------
        Load
    ----------------------------*/
    $(function () {
      /*----------------------------
          Slider
      ----------------------------*/
      Manakuro.slideInit = function () {
        Manakuro.slideList = $(".js-slider");
        Manakuro.slideItems = $(".js-slider").find(".js-slide-li");
        Manakuro.slideItemsCount = $(".js-slider").find(".js-slide-li").length;
    
        // Make images centered
        $(".cell-img").each(function () {
          // $(this).css({
          //   "left": -($(this).width() / 2) + "px"
          // });
          $(this).parent(".icon-btn").css({
            "width": $(this).width(),
            "height": $(this).height(),
            "left": -($(this).width() / 2) + "px"
          });
        });
    
        Manakuro.sliderIcon = [];
        $(".icon-btn").each(function () {
    
          var item = $(this).get(0),
              tween = $(this).data("icon_anim"),
              animate = new AnimateIcon(item, { tween: tween });
    
          Manakuro.sliderIcon.push(animate);
          $(this).bind("touchstart click", function (e) {
    
            if ($(this).attr("href") === "#") {
              e.preventDefault();
              e.stopPropagation();
            }
    
            animate.start();
          });
        });
    
        $(".js-slider-arrow").click(function (e) {
          Manakuro.clickArrow(e);
        });
    
        Manakuro.slide();
      };
    
      Manakuro.slide = function (_options) {
        var options = _options || {},
            sliderList,
            displayedList = [],
            translateX,
            transitionTime,
            sliderMax = Manakuro.slider_max,
            dividedBy,
            currentIndex,
            currentSlide,
            startPointIndex,
            endPointIndex,
            sliderItemsLength = Manakuro.slideItemsCount - 1,
            count,
            gap;
    
        // (100 / max - 1) * max
        dividedBy = sliderMax - 1;
    
        // Make sure of index of starting point
        currentIndex = Manakuro.slideCurrent;
        gap = dividedBy / 2;
        startPointIndex = currentIndex - gap;
        if (startPointIndex < 0) startPointIndex = sliderItemsLength + startPointIndex + 1;
    
        var sliderId = startPointIndex;
        var nextToLastIndex;
        var nextToLastIndexTranslate;
        var sliderIds = [];
        for (var i = 0; i < sliderMax; i++) {
    
          // Loop through slider id
          if (i > 0) sliderId += 1;
          if (sliderId > sliderItemsLength) sliderId = 0;
    
          // Set translate X
          translateX = 100 / dividedBy * i + "%";
    
          // Set translate duration
          transitionTime = 2 / dividedBy * (i + 1) + "s";
    
          sliderIds.push({
            "id": sliderId,
            "translateX": translateX,
            "transitionTime": transitionTime
          });
    
          // when a list disappear into the right section
          // reset transition time
          if (i === sliderMax - 1) {
    
            nextToLastIndex = sliderId + 1;
            if (nextToLastIndex > sliderItemsLength) {
              nextToLastIndex = 0;
            }
    
            nextToLastIndex = Manakuro.slideList.find(".js-slide-li[data-slide-li=" + nextToLastIndex + "]");
            nextToLastIndexTranslate = Manakuro.Utilities.getTranslate(nextToLastIndex);
            if (nextToLastIndexTranslate.x === "0") {
              transitionTime = "0s";
            }
          }
    
          // when a list disappear into the left section
          // reset transition time
          if (i === 0) {
    
            nextToLastIndex = sliderId - 1;
            if (nextToLastIndex < 0) {
              nextToLastIndex = sliderItemsLength;
            }
    
            nextToLastIndex = Manakuro.slideList.find(".js-slide-li[data-slide-li=" + nextToLastIndex + "]");
            nextToLastIndexTranslate = Manakuro.Utilities.getTranslate(nextToLastIndex);
            if (nextToLastIndexTranslate.x !== "0") {
              transitionTime = "0s";
            }
          }
    
          sliderList = Manakuro.slideList.find(".js-slide-li[data-slide-li=" + sliderId + "]");
          sliderList.css({
            "transform": "translate(" + translateX + ", 0)",
            "transition-duration": transitionTime
          }).on("transitionend webkitTransitionEnd", function () {
            $(this).css({
              "transition-duration": "0s"
            });
          });
        }
    
        // Set caption
        currentSlide = Manakuro.slideList.find(".js-slide-li[data-slide-li=" + currentIndex + "]");
        $(".slider-caption").html("I LOVE <span>" + currentSlide.data("slide-cap") + "</span>");
    
        // Icon animation start
        Manakuro.sliderIcon[currentIndex].start();
      };
    
      Manakuro.clickArrow = function (e) {
        var arrow = $(e.target).data("arrow");
    
        if (arrow === "next") {
          if (Manakuro.slideCurrent === 0) {
            Manakuro.slideCurrent = Manakuro.slideItemsCount - 1;
          } else {
            Manakuro.slideCurrent--;
          }
        } else {
          if (Manakuro.slideCurrent === Manakuro.slideItemsCount - 1) {
            Manakuro.slideCurrent = 0;
          } else {
            Manakuro.slideCurrent++;
          }
        }
        Manakuro.slide({ arrow: arrow });
      };
    
      /*----------------------------
          SKILLS
      ----------------------------*/
      Manakuro.setSkillBar = function () {
        $(".js-skill-bar").each(function () {
    
          var self = this,
              percentage = $(this).data("percentage"),
              parent = $(this).parent();
    
          $({ Counter: 0 }).animate({ Counter: percentage }, {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              var num = Math.floor(now);
              $(self).css("width", num + "%");
              parent.find(".skill-bar-num").text(num);
            }
          });
        });
      };
    
      /*----------------------------
          WORKS
      ----------------------------*/
      Manakuro.closeModal = function () {
        var reset,
            isReset = false;
    
        // Return if modal is closing
        if (Manakuro.works.is_closing) return;
        Manakuro.works.is_closing = true;
    
        $('html, body').removeClass('modal-open');
        Manakuro.works.$modal.removeClass("modal-open");
    
        // when CSS transition is completed
        // the function is called            
        Manakuro.works.$modal.on("transitionend webkitTransitionEnd", function () {
          var modal = Manakuro.works.$modal;
    
          // Refresh the html of slider images of modal
          if (!isReset) {
            setTimeout(function () {
              modal.find(".modal-item").removeClass("show");
    
              var targetList = modal.find(".modal-item[data-work-list-id=" + Manakuro.works.target_id + "]");
              targetList.find(".js-modal-slider-wrapper").html(Manakuro.works.modal_img_slider);
    
              Manakuro.works.is_closing = false;
              Manakuro.works.target_id = "";
              Manakuro.works.modal_img_slider = "";
            }, 300);
            isReset = true;
          }
        });
      };
    
      // SVG loader
      Manakuro.svgLoader = function () {
        var snap = Snap(".loader-overlay svg"),
            path = snap.select("path"),
            step = $(".loader-overlay").data("step");
    
        path.animate({ "path": step }, 400, mina.linear, function () {
          $(".loader-container").addClass('load-animate');
        });
      };
    
      // Scroll animation
      Manakuro.scrollAnimation = function (_options) {
        var options = _options || {},
            lists = options.lists || ".scroll-list",
            $window = $(window),
            windowHight = $window.height(),
            topWindow = $window.scrollTop();
    
        $(lists).each(function () {
          var targetPosition = $(this).offset().top,
              animation = $(this).data("animation"),
              animation_delay = $(this).data("animation_delay") || "";
    
          if (topWindow > targetPosition - windowHight + 200) {
            if (typeof Manakuro[animation] === "function") {
              Manakuro[animation]();
              $(this).removeClass('scroll-list');
            } else {
              $(this).addClass(animation).css({
                "visibility": "visible",
                "animation-delay": animation_delay
              });
            }
          }
        });
      };
    
      Manakuro.changeBgColor = function (args) {
        var scrollPos = $(window).scrollTop(),
            $el = args.el || $('.main-bg'),
            beginColor = args.begin_color,
            endColor = args.end_color,
            beginPos = args.begin_pos,
            endPos = args.end_pos,
            percentScrolled,
            newRed,
            newGreen,
            newBlue,
            newAlpha,
            newColor;
    
        if (args.force) {
          $el.animate({ backgroundColor: args.color_obj.toRgbaString() }, 0);
          return;
        }
    
        // percent of background colour according to postion of scrolling
        percentScrolled = (scrollPos - beginPos) / (endPos - beginPos);
    
        // generate new background color
        newRed = beginColor.red() + (endColor.red() - beginColor.red()) * percentScrolled;
        newGreen = beginColor.green() + (endColor.green() - beginColor.green()) * percentScrolled;
        newBlue = beginColor.blue() + (endColor.blue() - beginColor.blue()) * percentScrolled;
        newAlpha = beginColor.alpha() + (endColor.alpha() - beginColor.alpha()) * percentScrolled;
        newColor = new $.Color(newRed, newGreen, newBlue, newAlpha);
    
        // console.log( newColor.red(), newColor.green(), newColor.blue());
        // console.log(scrollPos, beginPos, endPos, percentScrolled);
        $el.animate({ backgroundColor: newColor }, 0);
      };
    
      Manakuro.scrollHandler = function (e, _opt) {
        var opt = _opt || {},
            topWindow = $(window).scrollTop(),
            $pageHeader = $(".page-header"),
            sections = Manakuro.sections,
            commonFunc,
            beginChangePos,
            portion = 0.5;
    
        // console.log(topWindow, sections);
    
        // run a scroll animation
        Manakuro.scrollAnimation();
    
        // common function
        commonFunc = function () {
          section = Manakuro.current_section.name;
          $pageHeader.find(".menu-item." + section).addClass('menu-item-current');
        };
    
        // reset an effect of each section
        $pageHeader.removeClass('page-header-darker page-header-lighter').find(".menu-item").removeClass('menu-item-current');
        $('.js-social-hover').removeClass('social-sec-darker');
    
        // Home
        if (topWindow < sections.about.top) {
          Manakuro.current_section = sections.home;
          commonFunc();
    
          // change background color
          beginChangePos = 0 + (sections.about.top - 0) * portion;
          if (topWindow > beginChangePos) {
            Manakuro.changeBgColor({
              el: $('.main-bg, .slider-blur'),
              begin_color: sections.home.color_obj,
              end_color: sections.about.color_obj,
              begin_pos: beginChangePos,
              end_pos: sections.about.top
            });
          }
    
          // About
        } else if (topWindow >= sections.about.top && topWindow < sections.skills.top) {
            Manakuro.current_section = sections.about;
            commonFunc();
    
            // change background color
            beginChangePos = sections.about.top + (sections.skills.top - sections.about.top) * portion;
            if (topWindow > beginChangePos) {
              Manakuro.changeBgColor({
                el: $('.main-bg, .slider-blur'),
                begin_color: sections.about.color_obj,
                end_color: sections.skills.color_obj,
                begin_pos: beginChangePos,
                end_pos: sections.skills.top
              });
            }
    
            $pageHeader.addClass('page-header-lighter');
    
            // Skills
          } else if (topWindow >= sections.skills.top && topWindow < sections.works.top) {
              Manakuro.current_section = sections.skills;
              commonFunc();
    
              // change background color
              beginChangePos = sections.skills.top + (sections.works.top - sections.skills.top) * portion;
              if (topWindow > beginChangePos) {
                Manakuro.changeBgColor({
                  el: sections.$targetEl,
                  begin_color: sections.skills.color_obj,
                  end_color: sections.works.color_obj,
                  begin_pos: beginChangePos,
                  end_pos: sections.works.top
                });
              }
              $pageHeader.addClass('page-header-lighter');
              // $('.js-social-hover').addClass('social-sec-darker');
    
              // Works
            } else if (topWindow >= sections.works.top && topWindow < sections.contact.top) {
                Manakuro.current_section = sections.works;
                commonFunc();
    
                // change background colour
                beginChangePos = sections.works.top + (sections.contact.top - sections.works.top) * portion;
                if (topWindow > beginChangePos) {
                  Manakuro.changeBgColor({
                    el: sections.$targetEl,
                    begin_color: sections.works.color_obj,
                    end_color: sections.contact.color_obj,
                    begin_pos: beginChangePos,
                    end_pos: sections.contact.top
                  });
                }
    
                // change nav colour
                $pageHeader.addClass('page-header-darker');
                $('.js-social-hover').addClass('social-sec-darker');
    
                // Contact
              } else if (topWindow >= sections.contact.top) {
                  Manakuro.current_section = sections.contact;
                  commonFunc();
                  // $pageHeader.addClass('page-header-darker');
                  // $('.js-social-hover').addClass('social-sec-darker');
                }
    
        // run callback function if needed
        if (typeof opt.callback === 'function') {
          opt.callback();
        }
      };
    
      /*----------------------------
          Initialize
      ----------------------------*/
      (function () {
        /* Pre loading event */
        setTimeout(function () {
          var loaderContainer = $(".loader-container");
          loaderContainer.addClass('loading');
    
          // setTimeout(function(){
          //     loaderContainer.addClass('load-animate');
          // }, 1000);
    
          setTimeout(function () {
    
            // Load svg animation
            Manakuro.svgLoader();
          }, 1500);
        }, 500);
    
        /* Set a global variable to a curernt device */
        Manakuro.current_device = Manakuro.devices[$(".check-device").css("width")];
    
        /* Slider Event */
        Manakuro.slideInit();
        var arrow = $(".js-slider-arrow").eq(1);
        Manakuro.setInterval = setInterval(function () {
          arrow.click();
        }, 6000);
    
        /* Navigation scroll event */
        Manakuro.sections = {};
        var $pageHeader = $(".page-header");
    
        $(".js-section").each(function () {
          var top = $(this).offset().top,
              section = $(this).data("section"),
              bgColor = $(this).data('bg-color');
    
          Manakuro.sections[section] = {};
          Manakuro.sections[section].name = section;
          Manakuro.sections[section].top = Math.floor(top - $pageHeader.height());
          Manakuro.sections[section].color_obj = $.Color(bgColor);
    
          if (section === 'home' || section === 'about') {
            Manakuro.sections[section].$targetEl = $('.main-bg, .slider-blur');
          } else {
            Manakuro.sections[section].$targetEl = $('.main-bg');
          }
        });
    
        /* Scrolling Event */
        // bind a scrolling event
        $(window).bind('scroll', Manakuro.scrollHandler);
        $(window).trigger('scroll');
    
        Manakuro.changeBgColor({
          el: Manakuro.current_section.$targetEl,
          force: true,
          color_obj: Manakuro.current_section.color_obj
        });
    
        // bind a click event for nav menu
        $pageHeader.find('.menu-link').click(function (e) {
          e.preventDefault();
    
          var section = Manakuro.sections[$(this).attr("href")],
              scrollTop = section.top;
    
          // move to the section
          $("html, body").animate({
            scrollTop: scrollTop
          }, {
            duration: 1000,
            start: function () {
              $(window).off("scroll", Manakuro.scrollHandler);
            },
            complete: function () {
              // $(window).on("scroll", Manakuro.scrollHandler);
              $(window).bind('scroll', Manakuro.scrollHandler);
              $(window).scroll();
    
              Manakuro.changeBgColor({
                el: section.$targetEl,
                force: true,
                color_obj: section.color_obj
              });
            }
          });
        });
    
        /* Works Modal Event */
        Manakuro.works.$modal = $(".modal");
        $(".work-list").on("click", function () {
          // prevent body from scrolling
          $('html, body').addClass('modal-open');
    
          // remove an event handler of CSS transitionEnd
          Manakuro.works.$modal.off("transitionend webkitTransitionEnd");
    
          var workListId = $(this).data("work-list-id"),
              targetList = Manakuro.works.$modal.find(".modal-item[data-work-list-id=" + workListId + "]");
    
          targetList.addClass("show").end().addClass("modal-open");
    
          Manakuro.works.target_id = workListId;
          Manakuro.works.modal_img_slider = targetList.find(".js-modal-slider-wrapper").html();
    
          // Everytime the modal window is opened
          // lightSlider creates new slider.
          // because the height of window can be changed when address bar hides on iOS/Android device.
          targetList.find(".modal-slider").lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            thumbItem: 9,
            slideMargin: 10,
            enableDrag: true,
            addClass: "light-slider-opened",
            currentPagerPosition: 'left'
          });
        });
    
        // Close modal window
        $(".modal-nav-list-close").on("click", Manakuro.closeModal);
        //Manakuro.works.$modal.on("click", Manakuro.closeModal);
    
        // Prevent modal window from closing when clicked
        $(".modal-item").on("click", function (e) {
          e.stopPropagation();
        });
    
        // Social link
        $('.js-social-hover').hover(function () {
          $(this).addClass('active');
        }, function () {
          $(this).removeClass('active');
        });
      })();
    });
    
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    
    },{"./animate_icon.js":1,"jquery":5,"jquery-color":4,"lightslider":6,"underscore":34}],4:[function(require,module,exports){
    /*
     * jQuery Color Animations v@VERSION
     * http://jquery.org/
     *
     * Copyright 2011 John Resig
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://jquery.org/license
     *
     * Date: @DATE
     */
    (function( jQuery, undefined ) {
        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),
    
            // plusequals test for += 100 -= 100
            rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
            // a set of RE's that can match strings and generate color tuples.
            stringParsers = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function( execResult ) {
                        return [
                            execResult[ 1 ],
                            execResult[ 2 ],
                            execResult[ 3 ],
                            execResult[ 4 ]
                        ];
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function( execResult ) {
                        return [
                            2.55 * execResult[1],
                            2.55 * execResult[2],
                            2.55 * execResult[3],
                            execResult[ 4 ]
                        ];
                    }
                }, {
                    re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
                    parse: function( execResult ) {
                        return [
                            parseInt( execResult[ 1 ], 16 ),
                            parseInt( execResult[ 2 ], 16 ),
                            parseInt( execResult[ 3 ], 16 )
                        ];
                    }
                }, {
                    re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
                    parse: function( execResult ) {
                        return [
                            parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
                            parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
                            parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
                        ];
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function( execResult ) {
                        return [
                            execResult[1],
                            execResult[2] / 100,
                            execResult[3] / 100,
                            execResult[4]
                        ];
                    }
                }],
    
            // jQuery.Color( )
            color = jQuery.Color = function( color, green, blue, alpha ) {
                return new jQuery.Color.fn.parse( color, green, blue, alpha );
            },
            spaces = {
                rgba: {
                    cache: "_rgba",
                    props: {
                        red: {
                            idx: 0,
                            type: "byte",
                            empty: true
                        },
                        green: {
                            idx: 1,
                            type: "byte",
                            empty: true
                        },
                        blue: {
                            idx: 2,
                            type: "byte",
                            empty: true
                        },
                        alpha: {
                            idx: 3,
                            type: "percent",
                            def: 1
                        }
                    }
                },
                hsla: {
                    cache: "_hsla",
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees",
                            empty: true
                        },
                        saturation: {
                            idx: 1,
                            type: "percent",
                            empty: true
                        },
                        lightness: {
                            idx: 2,
                            type: "percent",
                            empty: true
                        }
                    }
                }
            },
            propTypes = {
                "byte": {
                    floor: true,
                    min: 0,
                    max: 255
                },
                "percent": {
                    min: 0,
                    max: 1
                },
                "degrees": {
                    mod: 360,
                    floor: true
                }
            },
            rgbaspace = spaces.rgba.props,
            support = color.support = {},
    
            // colors = jQuery.Color.names
            colors,
    
            // local aliases of functions called often
            each = jQuery.each;
    
        spaces.hsla.props.alpha = rgbaspace.alpha;
    
        function clamp( value, prop, alwaysAllowEmpty ) {
            var type = propTypes[ prop.type ] || {},
                allowEmpty = prop.empty || alwaysAllowEmpty;
    
            if ( allowEmpty && value == null ) {
                return null;
            }
            if ( prop.def && value == null ) {
                return prop.def;
            }
            if ( type.floor ) {
                value = ~~value;
            } else {
                value = parseFloat( value );
            }
            if ( value == null || isNaN( value ) ) {
                return prop.def;
            }
            if ( type.mod ) {
                value = value % type.mod;
                // -10 -> 350
                return value < 0 ? type.mod + value : value;
            }
    
            // for now all property types without mod have min and max
            return type.min > value ? type.min : type.max < value ? type.max : value;
        }
    
        function stringParse( string ) {
            var inst = color(),
                rgba = inst._rgba = [];
    
            string = string.toLowerCase();
    
            each( stringParsers, function( i, parser ) {
                var match = parser.re.exec( string ),
                    values = match && parser.parse( match ),
                    parsed,
                    spaceName = parser.space || "rgba",
                    cache = spaces[ spaceName ].cache;
    
    
                if ( values ) {
                    parsed = inst[ spaceName ]( values );
    
                    // if this was an rgba parse the assignment might happen twice
                    // oh well....
                    inst[ cache ] = parsed[ cache ];
                    rgba = inst._rgba = parsed._rgba;
    
                    // exit each( stringParsers ) here because we matched
                    return false;
                }
            });
    
            // Found a stringParser that handled it
            if ( rgba.length !== 0 ) {
    
                // if this came from a parsed string, force "transparent" when alpha is 0
                // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
                if ( Math.max.apply( Math, rgba ) === 0 ) {
                    jQuery.extend( rgba, colors.transparent );
                }
                return inst;
            }
    
            // named colors / default - filter back through parse function
            if ( string = colors[ string ] ) {
                return string;
            }
        }
    
        color.fn = color.prototype = {
            constructor: color,
            parse: function( red, green, blue, alpha ) {
                if ( red === undefined ) {
                    this._rgba = [ null, null, null, null ];
                    return this;
                }
                if ( red instanceof jQuery || red.nodeType ) {
                    red = red instanceof jQuery ? red.css( green ) : jQuery( red ).css( green );
                    green = undefined;
                }
    
                var inst = this,
                    type = jQuery.type( red ),
                    rgba = this._rgba = [],
                    source;
    
                // more than 1 argument specified - assume ( red, green, blue, alpha )
                if ( green !== undefined ) {
                    red = [ red, green, blue, alpha ];
                    type = "array";
                }
    
                if ( type === "string" ) {
                    return this.parse( stringParse( red ) || colors._default );
                }
    
                if ( type === "array" ) {
                    each( rgbaspace, function( key, prop ) {
                        rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
                    });
                    return this;
                }
    
                if ( type === "object" ) {
                    if ( red instanceof color ) {
                        each( spaces, function( spaceName, space ) {
                            if ( red[ space.cache ] ) {
                                inst[ space.cache ] = red[ space.cache ].slice();
                            }
                        });
                    } else {
                        each( spaces, function( spaceName, space ) {
                            each( space.props, function( key, prop ) {
                                var cache = space.cache;
    
                                // if the cache doesn't exist, and we know how to convert
                                if ( !inst[ cache ] && space.to ) {
    
                                    // if the value was null, we don't need to copy it
                                    // if the key was alpha, we don't need to copy it either
                                    if ( red[ key ] == null || key === "alpha") {
                                        return;
                                    }
                                    inst[ cache ] = space.to( inst._rgba );
                                }
    
                                // this is the only case where we allow nulls for ALL properties.
                                // call clamp with alwaysAllowEmpty
                                inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
                            });
                        });
                    }
                    return this;
                }
            },
            is: function( compare ) {
                var is = color( compare ),
                    same = true,
                    myself = this;
    
                each( spaces, function( _, space ) {
                    var isCache = is[ space.cache ],
                        localCache;
                    if (isCache) {
                        localCache = myself[ space.cache ] || space.to && space.to( myself._rgba ) || [];
                        each( space.props, function( _, prop ) {
                            if ( isCache[ prop.idx ] != null ) {
                                same = ( isCache[ prop.idx ] == localCache[ prop.idx ] );
                                return same;
                            }
                        });
                    }
                    return same;
                });
                return same;
            },
            _space: function() {
                var used = [],
                    inst = this;
                each( spaces, function( spaceName, space ) {
                    if ( inst[ space.cache ] ) {
                        used.push( spaceName );
                    }
                });
                return used.pop();
            },
            transition: function( other, distance ) {
                var end = color( other ),
                    spaceName = end._space(),
                    space = spaces[ spaceName ],
                    start = this[ space.cache ] || space.to( this._rgba ),
                    result = start.slice();
    
                end = end[ space.cache ];
                each( space.props, function( key, prop ) {
                    var index = prop.idx,
                        startValue = start[ index ],
                        endValue = end[ index ],
                        type = propTypes[ prop.type ] || {};
    
                    // if null, don't override start value
                    if ( endValue === null ) {
                        return;
                    }
                    // if null - use end
                    if ( startValue === null ) {
                        result[ index ] = endValue;
                    } else {
                        if ( type.mod ) {
                            if ( endValue - startValue > type.mod / 2 ) {
                                startValue += type.mod;
                            } else if ( startValue - endValue > type.mod / 2 ) {
                                startValue -= type.mod;
                            }
                        }
                        result[ prop.idx ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
                    }
                });
                return this[ spaceName ]( result );
            },
            blend: function( opaque ) {
                // if we are already opaque - return ourself
                if ( this._rgba[ 3 ] === 1 ) {
                    return this;
                }
    
                var rgb = this._rgba.slice(),
                    a = rgb.pop(),
                    blend = color( opaque )._rgba;
    
                return color( jQuery.map( rgb, function( v, i ) {
                    return ( 1 - a ) * blend[ i ] + a * v;
                }));
            },
            toRgbaString: function() {
                var prefix = "rgba(",
                    rgba = jQuery.map( this._rgba, function( v, i ) {
                        return v == null ? ( i > 2 ? 1 : 0 ) : v;
                    });
    
                if ( rgba[ 3 ] === 1 ) {
                    rgba.pop();
                    prefix = "rgb(";
                }
    
                return prefix + rgba.join(",") + ")";
            },
            toHslaString: function() {
                var prefix = "hsla(",
                    hsla = jQuery.map( this.hsla(), function( v, i ) {
                        if ( v == null ) {
                            v = i > 2 ? 1 : 0;
                        }
    
                        // catch 1 and 2
                        if ( i && i < 3 ) {
                            v = Math.round( v * 100 ) + "%";
                        }
                        return v;
                    });
    
                if ( hsla[ 3 ] == 1 ) {
                    hsla.pop();
                    prefix = "hsl(";
                }
                return prefix + hsla.join(",") + ")";
            },
            toHexString: function( includeAlpha ) {
                var rgba = this._rgba.slice(),
                    alpha = rgba.pop();
    
                if ( includeAlpha ) {
                    rgba.push( ~~( alpha * 255 ) );
                }
    
                return "#" + jQuery.map( rgba, function( v, i ) {
    
                    // default to 0 when nulls exist
                    v = ( v || 0 ).toString( 16 );
                    return v.length == 1 ? "0" + v : v;
                }).join("");
            },
            toString: function() {
                return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
            }
        };
        color.fn.parse.prototype = color.fn;
    
        // hsla conversions adapted from:
        // http://www.google.com/codesearch/p#OAMlx_jo-ck/src/third_party/WebKit/Source/WebCore/inspector/front-end/Color.js&d=7&l=193
    
        function hue2rgb( p, q, h ) {
            h = ( h + 1 ) % 1;
            if ( h * 6 < 1 ) {
                return p + (q - p) * 6 * h;
            }
            if ( h * 2 < 1) {
                return q;
            }
            if ( h * 3 < 2 ) {
                return p + (q - p) * ((2/3) - h) * 6;
            }
            return p;
        }
    
        spaces.hsla.to = function ( rgba ) {
            if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
                return [ null, null, null, rgba[ 3 ] ];
            }
            var r = rgba[ 0 ] / 255,
                g = rgba[ 1 ] / 255,
                b = rgba[ 2 ] / 255,
                a = rgba[ 3 ],
                max = Math.max( r, g, b ),
                min = Math.min( r, g, b ),
                diff = max - min,
                add = max + min,
                l = add * 0.5,
                h, s;
    
            if ( min === max ) {
                h = 0;
            } else if ( r === max ) {
                h = ( 60 * ( g - b ) / diff ) + 360;
            } else if ( g === max ) {
                h = ( 60 * ( b - r ) / diff ) + 120;
            } else {
                h = ( 60 * ( r - g ) / diff ) + 240;
            }
    
            if ( l === 0 || l === 1 ) {
                s = l;
            } else if ( l <= 0.5 ) {
                s = diff / add;
            } else {
                s = diff / ( 2 - add );
            }
            return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
        };
    
        spaces.hsla.from = function ( hsla ) {
            if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
                return [ null, null, null, hsla[ 3 ] ];
            }
            var h = hsla[ 0 ] / 360,
                s = hsla[ 1 ],
                l = hsla[ 2 ],
                a = hsla[ 3 ],
                q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
                p = 2 * l - q,
                r, g, b;
    
            return [
                Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
                Math.round( hue2rgb( p, q, h ) * 255 ),
                Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
                a
            ];
        };
    
    
        each( spaces, function( spaceName, space ) {
            var props = space.props,
                cache = space.cache,
                to = space.to,
                from = space.from;
    
            // makes rgba() and hsla()
            color.fn[ spaceName ] = function( value ) {
    
                // generate a cache for this space if it doesn't exist
                if ( to && !this[ cache ] ) {
                    this[ cache ] = to( this._rgba );
                }
                if ( value === undefined ) {
                    return this[ cache ].slice();
                }
    
                var type = jQuery.type( value ),
                    arr = ( type === "array" || type === "object" ) ? value : arguments,
                    local = this[ cache ].slice(),
                    ret;
    
                each( props, function( key, prop ) {
                    var val = arr[ type === "object" ? key : prop.idx ];
                    if ( val == null ) {
                        val = local[ prop.idx ];
                    }
                    local[ prop.idx ] = clamp( val, prop );
                });
    
                if ( from ) {
                    ret = color( from( local ) );
                    ret[ cache ] = local;
                    return ret;
                } else {
                    return color( local );
                }
            };
    
            // makes red() green() blue() alpha() hue() saturation() lightness()
            each( props, function( key, prop ) {
                // alpha is included in more than one space
                if ( color.fn[ key ] ) {
                    return;
                }
                color.fn[ key ] = function( value ) {
                    var vtype = jQuery.type( value ),
                        fn = ( key === 'alpha' ? ( this._hsla ? 'hsla' : 'rgba' ) : spaceName ),
                        local = this[ fn ](),
                        cur = local[ prop.idx ],
                        match;
    
                    if ( vtype === "undefined" ) {
                        return cur;
                    }
    
                    if ( vtype === "function" ) {
                        value = value.call( this, cur );
                        vtype = jQuery.type( value );
                    }
                    if ( value == null && prop.empty ) {
                        return this;
                    }
                    if ( vtype === "string" ) {
                        match = rplusequals.exec( value );
                        if ( match ) {
                            value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
                        }
                    }
                    local[ prop.idx ] = value;
                    return this[ fn ]( local );
                };
            });
        });
    
        // add .fx.step functions
        each( stepHooks, function( i, hook ) {
            jQuery.cssHooks[ hook ] = {
                set: function( elem, value ) {
                    var parsed;
    
                    if ( jQuery.type( value ) !== 'string' || ( parsed = stringParse( value ) ) )
                    {
                        value = color( parsed || value );
                        if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
                            var backgroundColor,
                                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                            do {
                                backgroundColor = jQuery.curCSS( curElem, "backgroundColor" );
                            } while (
                                ( backgroundColor === "" || backgroundColor === "transparent" ) &&
                                ( curElem = curElem.parentNode ) &&
                                curElem.style
                            );
    
                            value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
                                backgroundColor :
                                "_default" );
                        }
    
                        value = value.toRgbaString();
                    }
                    elem.style[ hook ] = value;
                }
            };
            jQuery.fx.step[ hook ] = function( fx ) {
                if ( !fx.colorInit ) {
                    fx.start = color( fx.elem, hook );
                    fx.end = color( fx.end );
                    fx.colorInit = true;
                }
                jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
            };
        });
    
        // detect rgba support
        jQuery(function() {
            var div = document.createElement( "div" ),
                div_style = div.style;
    
            div_style.cssText = "background-color:rgba(1,1,1,.5)";
            support.rgba = div_style.backgroundColor.indexOf( "rgba" ) > -1;
        });
    
        // Some named colors to work with
        // From Interface by Stefan Petre
        // http://interface.eyecon.ro/
        colors = jQuery.Color.names = {
            aqua: "#00ffff",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            black: "#000000",
            blue: "#0000ff",
            brown: "#a52a2a",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgrey: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkviolet: "#9400d3",
            fuchsia: "#ff00ff",
            gold: "#ffd700",
            green: "#008000",
            indigo: "#4b0082",
            khaki: "#f0e68c",
            lightblue: "#add8e6",
            lightcyan: "#e0ffff",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            magenta: "#ff00ff",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            orange: "#ffa500",
            pink: "#ffc0cb",
            purple: "#800080",
            violet: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    })(jQuery);
    
    },{}],5:[function(require,module,exports){
    /*eslint-disable no-unused-vars*/
    /*!
     * jQuery JavaScript Library v3.1.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2016-07-07T21:44Z
     */
    ( function( global, factory ) {
    
        "use strict";
    
        if ( typeof module === "object" && typeof module.exports === "object" ) {
    
            // For CommonJS and CommonJS-like environments where a proper `window`
            // is present, execute the factory and get jQuery.
            // For environments that do not have a `window` with a `document`
            // (such as Node.js), expose a factory as module.exports.
            // This accentuates the need for the creation of a real `window`.
            // e.g. var jQuery = require("jquery")(window);
            // See ticket #14549 for more info.
            module.exports = global.document ?
                factory( global, true ) :
                function( w ) {
                    if ( !w.document ) {
                        throw new Error( "jQuery requires a window with a document" );
                    }
                    return factory( w );
                };
        } else {
            factory( global );
        }
    
    // Pass this if window is not defined yet
    } )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    
    var arr = [];
    
    var document = window.document;
    
    var getProto = Object.getPrototypeOf;
    
    var slice = arr.slice;
    
    var concat = arr.concat;
    
    var push = arr.push;
    
    var indexOf = arr.indexOf;
    
    var class2type = {};
    
    var toString = class2type.toString;
    
    var hasOwn = class2type.hasOwnProperty;
    
    var fnToString = hasOwn.toString;
    
    var ObjectFunctionString = fnToString.call( Object );
    
    var support = {};
    
    
    
        function DOMEval( code, doc ) {
            doc = doc || document;
    
            var script = doc.createElement( "script" );
    
            script.text = code;
            doc.head.appendChild( script ).parentNode.removeChild( script );
        }
    /* global Symbol */
    // Defining this global in .eslintrc would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    
    
    
    var
        version = "3.1.0",
    
        // Define a local copy of jQuery
        jQuery = function( selector, context ) {
    
            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init( selector, context );
        },
    
        // Support: Android <=4.0 only
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    
        // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g,
    
        // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function( all, letter ) {
            return letter.toUpperCase();
        };
    
    jQuery.fn = jQuery.prototype = {
    
        // The current version of jQuery being used
        jquery: version,
    
        constructor: jQuery,
    
        // The default length of a jQuery object is 0
        length: 0,
    
        toArray: function() {
            return slice.call( this );
        },
    
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function( num ) {
            return num != null ?
    
                // Return just the one element from the set
                ( num < 0 ? this[ num + this.length ] : this[ num ] ) :
    
                // Return all the elements in a clean array
                slice.call( this );
        },
    
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function( elems ) {
    
            // Build a new jQuery matched element set
            var ret = jQuery.merge( this.constructor(), elems );
    
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
    
            // Return the newly-formed element set
            return ret;
        },
    
        // Execute a callback for every element in the matched set.
        each: function( callback ) {
            return jQuery.each( this, callback );
        },
    
        map: function( callback ) {
            return this.pushStack( jQuery.map( this, function( elem, i ) {
                return callback.call( elem, i, elem );
            } ) );
        },
    
        slice: function() {
            return this.pushStack( slice.apply( this, arguments ) );
        },
    
        first: function() {
            return this.eq( 0 );
        },
    
        last: function() {
            return this.eq( -1 );
        },
    
        eq: function( i ) {
            var len = this.length,
                j = +i + ( i < 0 ? len : 0 );
            return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
        },
    
        end: function() {
            return this.prevObject || this.constructor();
        },
    
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[ 0 ] || {},
            i = 1,
            length = arguments.length,
            deep = false;
    
        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;
    
            // Skip the boolean and the target
            target = arguments[ i ] || {};
            i++;
        }
    
        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
            target = {};
        }
    
        // Extend jQuery itself if only one argument is passed
        if ( i === length ) {
            target = this;
            i--;
        }
    
        for ( ; i < length; i++ ) {
    
            // Only deal with non-null/undefined values
            if ( ( options = arguments[ i ] ) != null ) {
    
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];
    
                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }
    
                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                        ( copyIsArray = jQuery.isArray( copy ) ) ) ) {
    
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray( src ) ? src : [];
    
                        } else {
                            clone = src && jQuery.isPlainObject( src ) ? src : {};
                        }
    
                        // Never move original objects, clone them
                        target[ name ] = jQuery.extend( deep, clone, copy );
    
                    // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }
    
        // Return the modified object
        return target;
    };
    
    jQuery.extend( {
    
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
    
        // Assume jQuery is ready without the ready module
        isReady: true,
    
        error: function( msg ) {
            throw new Error( msg );
        },
    
        noop: function() {},
    
        isFunction: function( obj ) {
            return jQuery.type( obj ) === "function";
        },
    
        isArray: Array.isArray,
    
        isWindow: function( obj ) {
            return obj != null && obj === obj.window;
        },
    
        isNumeric: function( obj ) {
    
            // As of jQuery 3.0, isNumeric is limited to
            // strings and numbers (primitives or objects)
            // that can be coerced to finite numbers (gh-2662)
            var type = jQuery.type( obj );
            return ( type === "number" || type === "string" ) &&
    
                // parseFloat NaNs numeric-cast false positives ("")
                // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
                // subtraction forces infinities to NaN
                !isNaN( obj - parseFloat( obj ) );
        },
    
        isPlainObject: function( obj ) {
            var proto, Ctor;
    
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if ( !obj || toString.call( obj ) !== "[object Object]" ) {
                return false;
            }
    
            proto = getProto( obj );
    
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if ( !proto ) {
                return true;
            }
    
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
            return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
        },
    
        isEmptyObject: function( obj ) {
    
            /* eslint-disable no-unused-vars */
            // See https://github.com/eslint/eslint/issues/6125
            var name;
    
            for ( name in obj ) {
                return false;
            }
            return true;
        },
    
        type: function( obj ) {
            if ( obj == null ) {
                return obj + "";
            }
    
            // Support: Android <=2.3 only (functionish RegExp)
            return typeof obj === "object" || typeof obj === "function" ?
                class2type[ toString.call( obj ) ] || "object" :
                typeof obj;
        },
    
        // Evaluates a script in a global context
        globalEval: function( code ) {
            DOMEval( code );
        },
    
        // Convert dashed to camelCase; used by the css and data modules
        // Support: IE <=9 - 11, Edge 12 - 13
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function( string ) {
            return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
        },
    
        nodeName: function( elem, name ) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
    
        each: function( obj, callback ) {
            var length, i = 0;
    
            if ( isArrayLike( obj ) ) {
                length = obj.length;
                for ( ; i < length; i++ ) {
                    if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                        break;
                    }
                }
            } else {
                for ( i in obj ) {
                    if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                        break;
                    }
                }
            }
    
            return obj;
        },
    
        // Support: Android <=4.0 only
        trim: function( text ) {
            return text == null ?
                "" :
                ( text + "" ).replace( rtrim, "" );
        },
    
        // results is for internal usage only
        makeArray: function( arr, results ) {
            var ret = results || [];
    
            if ( arr != null ) {
                if ( isArrayLike( Object( arr ) ) ) {
                    jQuery.merge( ret,
                        typeof arr === "string" ?
                        [ arr ] : arr
                    );
                } else {
                    push.call( ret, arr );
                }
            }
    
            return ret;
        },
    
        inArray: function( elem, arr, i ) {
            return arr == null ? -1 : indexOf.call( arr, elem, i );
        },
    
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function( first, second ) {
            var len = +second.length,
                j = 0,
                i = first.length;
    
            for ( ; j < len; j++ ) {
                first[ i++ ] = second[ j ];
            }
    
            first.length = i;
    
            return first;
        },
    
        grep: function( elems, callback, invert ) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;
    
            // Go through the array, only saving the items
            // that pass the validator function
            for ( ; i < length; i++ ) {
                callbackInverse = !callback( elems[ i ], i );
                if ( callbackInverse !== callbackExpect ) {
                    matches.push( elems[ i ] );
                }
            }
    
            return matches;
        },
    
        // arg is for internal usage only
        map: function( elems, callback, arg ) {
            var length, value,
                i = 0,
                ret = [];
    
            // Go through the array, translating each of the items to their new values
            if ( isArrayLike( elems ) ) {
                length = elems.length;
                for ( ; i < length; i++ ) {
                    value = callback( elems[ i ], i, arg );
    
                    if ( value != null ) {
                        ret.push( value );
                    }
                }
    
            // Go through every key on the object,
            } else {
                for ( i in elems ) {
                    value = callback( elems[ i ], i, arg );
    
                    if ( value != null ) {
                        ret.push( value );
                    }
                }
            }
    
            // Flatten any nested arrays
            return concat.apply( [], ret );
        },
    
        // A global GUID counter for objects
        guid: 1,
    
        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function( fn, context ) {
            var tmp, args, proxy;
    
            if ( typeof context === "string" ) {
                tmp = fn[ context ];
                context = fn;
                fn = tmp;
            }
    
            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if ( !jQuery.isFunction( fn ) ) {
                return undefined;
            }
    
            // Simulated bind
            args = slice.call( arguments, 2 );
            proxy = function() {
                return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
            };
    
            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    
            return proxy;
        },
    
        now: Date.now,
    
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    } );
    
    if ( typeof Symbol === "function" ) {
        jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
    }
    
    // Populate the class2type map
    jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
    function( i, name ) {
        class2type[ "[object " + name + "]" ] = name.toLowerCase();
    } );
    
    function isArrayLike( obj ) {
    
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = jQuery.type( obj );
    
        if ( type === "function" || jQuery.isWindow( obj ) ) {
            return false;
        }
    
        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    }
    var Sizzle =
    /*!
     * Sizzle CSS Selector Engine v2.3.0
     * https://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-01-04
     */
    (function( window ) {
    
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
    
        // Local document vars
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
    
        // Instance-specific data
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function( a, b ) {
            if ( a === b ) {
                hasDuplicate = true;
            }
            return 0;
        },
    
        // Instance methods
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf = function( list, elem ) {
            var i = 0,
                len = list.length;
            for ( ; i < len; i++ ) {
                if ( list[i] === elem ) {
                    return i;
                }
            }
            return -1;
        },
    
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    
        // Regular expressions
    
        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]",
    
        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
    
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
            // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace +
            // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
            "*\\]",
    
        pseudos = ":(" + identifier + ")(?:\\((" +
            // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
            // 1. quoted (capture 3; capture 4 or capture 5)
            "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
            // 2. simple (capture 6)
            "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
            // 3. anything else (capture 2)
            ".*" +
            ")\\)|)",
    
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp( whitespace + "+", "g" ),
        rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
    
        rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
        rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
    
        rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
    
        rpseudo = new RegExp( pseudos ),
        ridentifier = new RegExp( "^" + identifier + "$" ),
    
        matchExpr = {
            "ID": new RegExp( "^#(" + identifier + ")" ),
            "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
            "TAG": new RegExp( "^(" + identifier + "|[*])" ),
            "ATTR": new RegExp( "^" + attributes ),
            "PSEUDO": new RegExp( "^" + pseudos ),
            "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
            "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
        },
    
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
    
        rnative = /^[^{]+\{\s*\[native \w/,
    
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    
        rsibling = /[+~]/,
    
        // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
        funescape = function( _, escaped, escapedWhitespace ) {
            var high = "0x" + escaped - 0x10000;
            // NaN means non-codepoint
            // Support: Firefox<24
            // Workaround erroneous numeric interpretation of +"0x"
            return high !== high || escapedWhitespace ?
                escaped :
                high < 0 ?
                    // BMP codepoint
                    String.fromCharCode( high + 0x10000 ) :
                    // Supplemental Plane codepoint (surrogate pair)
                    String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
        },
    
        // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
        fcssescape = function( ch, asCodePoint ) {
            if ( asCodePoint ) {
    
                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if ( ch === "\0" ) {
                    return "\uFFFD";
                }
    
                // Control characters and (dependent upon position) numbers get escaped as code points
                return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
            }
    
            // Other potentially-special ASCII characters get backslash-escaped
            return "\\" + ch;
        },
    
        // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function() {
            setDocument();
        },
    
        disabledAncestor = addCombinator(
            function( elem ) {
                return elem.disabled === true;
            },
            { dir: "parentNode", next: "legend" }
        );
    
    // Optimize for push.apply( _, NodeList )
    try {
        push.apply(
            (arr = slice.call( preferredDoc.childNodes )),
            preferredDoc.childNodes
        );
        // Support: Android<4.0
        // Detect silently failing push.apply
        arr[ preferredDoc.childNodes.length ].nodeType;
    } catch ( e ) {
        push = { apply: arr.length ?
    
            // Leverage slice if possible
            function( target, els ) {
                push_native.apply( target, slice.call(els) );
            } :
    
            // Support: IE<9
            // Otherwise append directly
            function( target, els ) {
                var j = target.length,
                    i = 0;
                // Can't trust NodeList.length
                while ( (target[j++] = els[i++]) ) {}
                target.length = j - 1;
            }
        };
    }
    
    function Sizzle( selector, context, results, seed ) {
        var m, i, elem, nid, match, groups, newSelector,
            newContext = context && context.ownerDocument,
    
            // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
    
        results = results || [];
    
        // Return early from calls with invalid selector or context
        if ( typeof selector !== "string" || !selector ||
            nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
    
            return results;
        }
    
        // Try to shortcut find operations (as opposed to filters) in HTML documents
        if ( !seed ) {
    
            if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
                setDocument( context );
            }
            context = context || document;
    
            if ( documentIsHTML ) {
    
                // If the selector is sufficiently simple, try using a "get*By*" DOM method
                // (excepting DocumentFragment context, where the methods don't exist)
                if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
    
                    // ID selector
                    if ( (m = match[1]) ) {
    
                        // Document context
                        if ( nodeType === 9 ) {
                            if ( (elem = context.getElementById( m )) ) {
    
                                // Support: IE, Opera, Webkit
                                // TODO: identify versions
                                // getElementById can match elements by name instead of ID
                                if ( elem.id === m ) {
                                    results.push( elem );
                                    return results;
                                }
                            } else {
                                return results;
                            }
    
                        // Element context
                        } else {
    
                            // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if ( newContext && (elem = newContext.getElementById( m )) &&
                                contains( context, elem ) &&
                                elem.id === m ) {
    
                                results.push( elem );
                                return results;
                            }
                        }
    
                    // Type selector
                    } else if ( match[2] ) {
                        push.apply( results, context.getElementsByTagName( selector ) );
                        return results;
    
                    // Class selector
                    } else if ( (m = match[3]) && support.getElementsByClassName &&
                        context.getElementsByClassName ) {
    
                        push.apply( results, context.getElementsByClassName( m ) );
                        return results;
                    }
                }
    
                // Take advantage of querySelectorAll
                if ( support.qsa &&
                    !compilerCache[ selector + " " ] &&
                    (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
    
                    if ( nodeType !== 1 ) {
                        newContext = context;
                        newSelector = selector;
    
                    // qSA looks outside Element context, which is not what we want
                    // Thanks to Andrew Dupont for this workaround technique
                    // Support: IE <=8
                    // Exclude object elements
                    } else if ( context.nodeName.toLowerCase() !== "object" ) {
    
                        // Capture the context ID, setting it first if necessary
                        if ( (nid = context.getAttribute( "id" )) ) {
                            nid = nid.replace( rcssescape, fcssescape );
                        } else {
                            context.setAttribute( "id", (nid = expando) );
                        }
    
                        // Prefix every selector in the list
                        groups = tokenize( selector );
                        i = groups.length;
                        while ( i-- ) {
                            groups[i] = "#" + nid + " " + toSelector( groups[i] );
                        }
                        newSelector = groups.join( "," );
    
                        // Expand context for sibling selectors
                        newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
                            context;
                    }
    
                    if ( newSelector ) {
                        try {
                            push.apply( results,
                                newContext.querySelectorAll( newSelector )
                            );
                            return results;
                        } catch ( qsaError ) {
                        } finally {
                            if ( nid === expando ) {
                                context.removeAttribute( "id" );
                            }
                        }
                    }
                }
            }
        }
    
        // All others
        return select( selector.replace( rtrim, "$1" ), context, results, seed );
    }
    
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */
    function createCache() {
        var keys = [];
    
        function cache( key, value ) {
            // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
            if ( keys.push( key + " " ) > Expr.cacheLength ) {
                // Only keep the most recent entries
                delete cache[ keys.shift() ];
            }
            return (cache[ key + " " ] = value);
        }
        return cache;
    }
    
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */
    function markFunction( fn ) {
        fn[ expando ] = true;
        return fn;
    }
    
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */
    function assert( fn ) {
        var el = document.createElement("fieldset");
    
        try {
            return !!fn( el );
        } catch (e) {
            return false;
        } finally {
            // Remove from its parent by default
            if ( el.parentNode ) {
                el.parentNode.removeChild( el );
            }
            // release memory in IE
            el = null;
        }
    }
    
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */
    function addHandle( attrs, handler ) {
        var arr = attrs.split("|"),
            i = arr.length;
    
        while ( i-- ) {
            Expr.attrHandle[ arr[i] ] = handler;
        }
    }
    
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */
    function siblingCheck( a, b ) {
        var cur = b && a,
            diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                a.sourceIndex - b.sourceIndex;
    
        // Use IE sourceIndex if available on both nodes
        if ( diff ) {
            return diff;
        }
    
        // Check if b follows a
        if ( cur ) {
            while ( (cur = cur.nextSibling) ) {
                if ( cur === b ) {
                    return -1;
                }
            }
        }
    
        return a ? 1 : -1;
    }
    
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */
    function createInputPseudo( type ) {
        return function( elem ) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
        };
    }
    
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */
    function createButtonPseudo( type ) {
        return function( elem ) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
        };
    }
    
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */
    function createDisabledPseudo( disabled ) {
        // Known :disabled false positives:
        // IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
        // not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
        return function( elem ) {
    
            // Check form elements and option elements for explicit disabling
            return "label" in elem && elem.disabled === disabled ||
                "form" in elem && elem.disabled === disabled ||
    
                // Check non-disabled form elements for fieldset[disabled] ancestors
                "form" in elem && elem.disabled === false && (
                    // Support: IE6-11+
                    // Ancestry is covered for us
                    elem.isDisabled === disabled ||
    
                    // Otherwise, assume any non-<option> under fieldset[disabled] is disabled
                    /* jshint -W018 */
                    elem.isDisabled !== !disabled &&
                        ("label" in elem || !disabledAncestor( elem )) !== disabled
                );
        };
    }
    
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */
    function createPositionalPseudo( fn ) {
        return markFunction(function( argument ) {
            argument = +argument;
            return markFunction(function( seed, matches ) {
                var j,
                    matchIndexes = fn( [], seed.length, argument ),
                    i = matchIndexes.length;
    
                // Match elements found at the specified indexes
                while ( i-- ) {
                    if ( seed[ (j = matchIndexes[i]) ] ) {
                        seed[j] = !(matches[j] = seed[j]);
                    }
                }
            });
        });
    }
    
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */
    function testContext( context ) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    
    // Expose support vars for convenience
    support = Sizzle.support = {};
    
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */
    isXML = Sizzle.isXML = function( elem ) {
        // documentElement is verified for cases where it doesn't yet exist
        // (such as loading iframes in IE - #4833)
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */
    setDocument = Sizzle.setDocument = function( node ) {
        var hasCompare, subWindow,
            doc = node ? node.ownerDocument || node : preferredDoc;
    
        // Return early if doc is invalid or already selected
        if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
            return document;
        }
    
        // Update global variables
        document = doc;
        docElem = document.documentElement;
        documentIsHTML = !isXML( document );
    
        // Support: IE 9-11, Edge
        // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
        if ( preferredDoc !== document &&
            (subWindow = document.defaultView) && subWindow.top !== subWindow ) {
    
            // Support: IE 11, Edge
            if ( subWindow.addEventListener ) {
                subWindow.addEventListener( "unload", unloadHandler, false );
    
            // Support: IE 9 - 10 only
            } else if ( subWindow.attachEvent ) {
                subWindow.attachEvent( "onunload", unloadHandler );
            }
        }
    
        /* Attributes
        ---------------------------------------------------------------------- */
    
        // Support: IE<8
        // Verify that getAttribute really returns attributes and not properties
        // (excepting IE8 booleans)
        support.attributes = assert(function( el ) {
            el.className = "i";
            return !el.getAttribute("className");
        });
    
        /* getElement(s)By*
        ---------------------------------------------------------------------- */
    
        // Check if getElementsByTagName("*") returns only elements
        support.getElementsByTagName = assert(function( el ) {
            el.appendChild( document.createComment("") );
            return !el.getElementsByTagName("*").length;
        });
    
        // Support: IE<9
        support.getElementsByClassName = rnative.test( document.getElementsByClassName );
    
        // Support: IE<10
        // Check if getElementById returns elements by name
        // The broken getElementById methods don't pick up programmatically-set names,
        // so use a roundabout getElementsByName test
        support.getById = assert(function( el ) {
            docElem.appendChild( el ).id = expando;
            return !document.getElementsByName || !document.getElementsByName( expando ).length;
        });
    
        // ID find and filter
        if ( support.getById ) {
            Expr.find["ID"] = function( id, context ) {
                if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                    var m = context.getElementById( id );
                    return m ? [ m ] : [];
                }
            };
            Expr.filter["ID"] = function( id ) {
                var attrId = id.replace( runescape, funescape );
                return function( elem ) {
                    return elem.getAttribute("id") === attrId;
                };
            };
        } else {
            // Support: IE6/7
            // getElementById is not reliable as a find shortcut
            delete Expr.find["ID"];
    
            Expr.filter["ID"] =  function( id ) {
                var attrId = id.replace( runescape, funescape );
                return function( elem ) {
                    var node = typeof elem.getAttributeNode !== "undefined" &&
                        elem.getAttributeNode("id");
                    return node && node.value === attrId;
                };
            };
        }
    
        // Tag
        Expr.find["TAG"] = support.getElementsByTagName ?
            function( tag, context ) {
                if ( typeof context.getElementsByTagName !== "undefined" ) {
                    return context.getElementsByTagName( tag );
    
                // DocumentFragment nodes don't have gEBTN
                } else if ( support.qsa ) {
                    return context.querySelectorAll( tag );
                }
            } :
    
            function( tag, context ) {
                var elem,
                    tmp = [],
                    i = 0,
                    // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                    results = context.getElementsByTagName( tag );
    
                // Filter out possible comments
                if ( tag === "*" ) {
                    while ( (elem = results[i++]) ) {
                        if ( elem.nodeType === 1 ) {
                            tmp.push( elem );
                        }
                    }
    
                    return tmp;
                }
                return results;
            };
    
        // Class
        Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
            if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
                return context.getElementsByClassName( className );
            }
        };
    
        /* QSA/matchesSelector
        ---------------------------------------------------------------------- */
    
        // QSA and matchesSelector support
    
        // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
        rbuggyMatches = [];
    
        // qSa(:focus) reports false when true (Chrome 21)
        // We allow this because of a bug in IE8/9 that throws an error
        // whenever `document.activeElement` is accessed on an iframe
        // So, we allow :focus to pass through QSA all the time to avoid the IE error
        // See https://bugs.jquery.com/ticket/13378
        rbuggyQSA = [];
    
        if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert(function( el ) {
                // Select is set to empty string on purpose
                // This is to test IE's treatment of not explicitly
                // setting a boolean content attribute,
                // since its presence should be enough
                // https://bugs.jquery.com/ticket/12359
                docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
                    "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                    "<option selected=''></option></select>";
    
                // Support: IE8, Opera 11-12.16
                // Nothing should be selected when empty strings follow ^= or $= or *=
                // The test attribute must be unknown in Opera but "safe" for WinRT
                // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                if ( el.querySelectorAll("[msallowcapture^='']").length ) {
                    rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
                }
    
                // Support: IE8
                // Boolean attributes and "value" are not treated correctly
                if ( !el.querySelectorAll("[selected]").length ) {
                    rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
                }
    
                // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
                    rbuggyQSA.push("~=");
                }
    
                // Webkit/Opera - :checked should return selected option elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                // IE8 throws error here and will not see later tests
                if ( !el.querySelectorAll(":checked").length ) {
                    rbuggyQSA.push(":checked");
                }
    
                // Support: Safari 8+, iOS 8+
                // https://bugs.webkit.org/show_bug.cgi?id=136851
                // In-page `selector#id sibling-combinator selector` fails
                if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
                    rbuggyQSA.push(".#.+[+~]");
                }
            });
    
            assert(function( el ) {
                el.innerHTML = "<a href='' disabled='disabled'></a>" +
                    "<select disabled='disabled'><option/></select>";
    
                // Support: Windows 8 Native Apps
                // The type and name attributes are restricted during .innerHTML assignment
                var input = document.createElement("input");
                input.setAttribute( "type", "hidden" );
                el.appendChild( input ).setAttribute( "name", "D" );
    
                // Support: IE8
                // Enforce case-sensitivity of name attribute
                if ( el.querySelectorAll("[name=d]").length ) {
                    rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
                }
    
                // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                // IE8 throws error here and will not see later tests
                if ( el.querySelectorAll(":enabled").length !== 2 ) {
                    rbuggyQSA.push( ":enabled", ":disabled" );
                }
    
                // Support: IE9-11+
                // IE's :disabled selector does not pick up the children of disabled fieldsets
                docElem.appendChild( el ).disabled = true;
                if ( el.querySelectorAll(":disabled").length !== 2 ) {
                    rbuggyQSA.push( ":enabled", ":disabled" );
                }
    
                // Opera 10-11 does not throw on post-comma invalid pseudos
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
            });
        }
    
        if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
            docElem.webkitMatchesSelector ||
            docElem.mozMatchesSelector ||
            docElem.oMatchesSelector ||
            docElem.msMatchesSelector) )) ) {
    
            assert(function( el ) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                support.disconnectedMatch = matches.call( el, "*" );
    
                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches.call( el, "[s!='']:x" );
                rbuggyMatches.push( "!=", pseudos );
            });
        }
    
        rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
        rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
    
        /* Contains
        ---------------------------------------------------------------------- */
        hasCompare = rnative.test( docElem.compareDocumentPosition );
    
        // Element contains another
        // Purposefully self-exclusive
        // As in, an element does not contain itself
        contains = hasCompare || rnative.test( docElem.contains ) ?
            function( a, b ) {
                var adown = a.nodeType === 9 ? a.documentElement : a,
                    bup = b && b.parentNode;
                return a === bup || !!( bup && bup.nodeType === 1 && (
                    adown.contains ?
                        adown.contains( bup ) :
                        a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
                ));
            } :
            function( a, b ) {
                if ( b ) {
                    while ( (b = b.parentNode) ) {
                        if ( b === a ) {
                            return true;
                        }
                    }
                }
                return false;
            };
    
        /* Sorting
        ---------------------------------------------------------------------- */
    
        // Document order sorting
        sortOrder = hasCompare ?
        function( a, b ) {
    
            // Flag for duplicate removal
            if ( a === b ) {
                hasDuplicate = true;
                return 0;
            }
    
            // Sort on method existence if only one input has compareDocumentPosition
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if ( compare ) {
                return compare;
            }
    
            // Calculate position if both inputs belong to the same document
            compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
                a.compareDocumentPosition( b ) :
    
                // Otherwise we know they are disconnected
                1;
    
            // Disconnected nodes
            if ( compare & 1 ||
                (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
    
                // Choose the first element that is related to our preferred document
                if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
                    return -1;
                }
                if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
                    return 1;
                }
    
                // Maintain original order
                return sortInput ?
                    ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                    0;
            }
    
            return compare & 4 ? -1 : 1;
        } :
        function( a, b ) {
            // Exit early if the nodes are identical
            if ( a === b ) {
                hasDuplicate = true;
                return 0;
            }
    
            var cur,
                i = 0,
                aup = a.parentNode,
                bup = b.parentNode,
                ap = [ a ],
                bp = [ b ];
    
            // Parentless nodes are either documents or disconnected
            if ( !aup || !bup ) {
                return a === document ? -1 :
                    b === document ? 1 :
                    aup ? -1 :
                    bup ? 1 :
                    sortInput ?
                    ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                    0;
    
            // If the nodes are siblings, we can do a quick check
            } else if ( aup === bup ) {
                return siblingCheck( a, b );
            }
    
            // Otherwise we need full lists of their ancestors for comparison
            cur = a;
            while ( (cur = cur.parentNode) ) {
                ap.unshift( cur );
            }
            cur = b;
            while ( (cur = cur.parentNode) ) {
                bp.unshift( cur );
            }
    
            // Walk down the tree looking for a discrepancy
            while ( ap[i] === bp[i] ) {
                i++;
            }
    
            return i ?
                // Do a sibling check if the nodes have a common ancestor
                siblingCheck( ap[i], bp[i] ) :
    
                // Otherwise nodes in our document sort first
                ap[i] === preferredDoc ? -1 :
                bp[i] === preferredDoc ? 1 :
                0;
        };
    
        return document;
    };
    
    Sizzle.matches = function( expr, elements ) {
        return Sizzle( expr, null, null, elements );
    };
    
    Sizzle.matchesSelector = function( elem, expr ) {
        // Set document vars if needed
        if ( ( elem.ownerDocument || elem ) !== document ) {
            setDocument( elem );
        }
    
        // Make sure that attribute selectors are quoted
        expr = expr.replace( rattributeQuotes, "='$1']" );
    
        if ( support.matchesSelector && documentIsHTML &&
            !compilerCache[ expr + " " ] &&
            ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
            ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
    
            try {
                var ret = matches.call( elem, expr );
    
                // IE 9's matchesSelector returns false on disconnected nodes
                if ( ret || support.disconnectedMatch ||
                        // As well, disconnected nodes are said to be in a document
                        // fragment in IE 9
                        elem.document && elem.document.nodeType !== 11 ) {
                    return ret;
                }
            } catch (e) {}
        }
    
        return Sizzle( expr, document, null, [ elem ] ).length > 0;
    };
    
    Sizzle.contains = function( context, elem ) {
        // Set document vars if needed
        if ( ( context.ownerDocument || context ) !== document ) {
            setDocument( context );
        }
        return contains( context, elem );
    };
    
    Sizzle.attr = function( elem, name ) {
        // Set document vars if needed
        if ( ( elem.ownerDocument || elem ) !== document ) {
            setDocument( elem );
        }
    
        var fn = Expr.attrHandle[ name.toLowerCase() ],
            // Don't get fooled by Object.prototype properties (jQuery #13807)
            val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
                fn( elem, name, !documentIsHTML ) :
                undefined;
    
        return val !== undefined ?
            val :
            support.attributes || !documentIsHTML ?
                elem.getAttribute( name ) :
                (val = elem.getAttributeNode(name)) && val.specified ?
                    val.value :
                    null;
    };
    
    Sizzle.escape = function( sel ) {
        return (sel + "").replace( rcssescape, fcssescape );
    };
    
    Sizzle.error = function( msg ) {
        throw new Error( "Syntax error, unrecognized expression: " + msg );
    };
    
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */
    Sizzle.uniqueSort = function( results ) {
        var elem,
            duplicates = [],
            j = 0,
            i = 0;
    
        // Unless we *know* we can detect duplicates, assume their presence
        hasDuplicate = !support.detectDuplicates;
        sortInput = !support.sortStable && results.slice( 0 );
        results.sort( sortOrder );
    
        if ( hasDuplicate ) {
            while ( (elem = results[i++]) ) {
                if ( elem === results[ i ] ) {
                    j = duplicates.push( i );
                }
            }
            while ( j-- ) {
                results.splice( duplicates[ j ], 1 );
            }
        }
    
        // Clear input after sorting to release objects
        // See https://github.com/jquery/sizzle/pull/225
        sortInput = null;
    
        return results;
    };
    
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */
    getText = Sizzle.getText = function( elem ) {
        var node,
            ret = "",
            i = 0,
            nodeType = elem.nodeType;
    
        if ( !nodeType ) {
            // If no nodeType, this is expected to be an array
            while ( (node = elem[i++]) ) {
                // Do not traverse comment nodes
                ret += getText( node );
            }
        } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
            // Use textContent for elements
            // innerText usage removed for consistency of new lines (jQuery #11153)
            if ( typeof elem.textContent === "string" ) {
                return elem.textContent;
            } else {
                // Traverse its children
                for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                    ret += getText( elem );
                }
            }
        } else if ( nodeType === 3 || nodeType === 4 ) {
            return elem.nodeValue;
        }
        // Do not include comment or processing instruction nodes
    
        return ret;
    };
    
    Expr = Sizzle.selectors = {
    
        // Can be adjusted by the user
        cacheLength: 50,
    
        createPseudo: markFunction,
    
        match: matchExpr,
    
        attrHandle: {},
    
        find: {},
    
        relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
        },
    
        preFilter: {
            "ATTR": function( match ) {
                match[1] = match[1].replace( runescape, funescape );
    
                // Move the given value to match[3] whether quoted or unquoted
                match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
    
                if ( match[2] === "~=" ) {
                    match[3] = " " + match[3] + " ";
                }
    
                return match.slice( 0, 4 );
            },
    
            "CHILD": function( match ) {
                /* matches from matchExpr["CHILD"]
                    1 type (only|nth|...)
                    2 what (child|of-type)
                    3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                    4 xn-component of xn+y argument ([+-]?\d*n|)
                    5 sign of xn-component
                    6 x of xn-component
                    7 sign of y-component
                    8 y of y-component
                */
                match[1] = match[1].toLowerCase();
    
                if ( match[1].slice( 0, 3 ) === "nth" ) {
                    // nth-* requires argument
                    if ( !match[3] ) {
                        Sizzle.error( match[0] );
                    }
    
                    // numeric x and y parameters for Expr.filter.CHILD
                    // remember that false/true cast respectively to 0/1
                    match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
                    match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
    
                // other types prohibit arguments
                } else if ( match[3] ) {
                    Sizzle.error( match[0] );
                }
    
                return match;
            },
    
            "PSEUDO": function( match ) {
                var excess,
                    unquoted = !match[6] && match[2];
    
                if ( matchExpr["CHILD"].test( match[0] ) ) {
                    return null;
                }
    
                // Accept quoted arguments as-is
                if ( match[3] ) {
                    match[2] = match[4] || match[5] || "";
    
                // Strip excess characters from unquoted arguments
                } else if ( unquoted && rpseudo.test( unquoted ) &&
                    // Get excess from tokenize (recursively)
                    (excess = tokenize( unquoted, true )) &&
                    // advance to the next closing parenthesis
                    (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
    
                    // excess is a negative index
                    match[0] = match[0].slice( 0, excess );
                    match[2] = unquoted.slice( 0, excess );
                }
    
                // Return only captures needed by the pseudo filter method (type and argument)
                return match.slice( 0, 3 );
            }
        },
    
        filter: {
    
            "TAG": function( nodeNameSelector ) {
                var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
                return nodeNameSelector === "*" ?
                    function() { return true; } :
                    function( elem ) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
            },
    
            "CLASS": function( className ) {
                var pattern = classCache[ className + " " ];
    
                return pattern ||
                    (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
                    classCache( className, function( elem ) {
                        return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
                    });
            },
    
            "ATTR": function( name, operator, check ) {
                return function( elem ) {
                    var result = Sizzle.attr( elem, name );
    
                    if ( result == null ) {
                        return operator === "!=";
                    }
                    if ( !operator ) {
                        return true;
                    }
    
                    result += "";
    
                    return operator === "=" ? result === check :
                        operator === "!=" ? result !== check :
                        operator === "^=" ? check && result.indexOf( check ) === 0 :
                        operator === "*=" ? check && result.indexOf( check ) > -1 :
                        operator === "$=" ? check && result.slice( -check.length ) === check :
                        operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
                        operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
                        false;
                };
            },
    
            "CHILD": function( type, what, argument, first, last ) {
                var simple = type.slice( 0, 3 ) !== "nth",
                    forward = type.slice( -4 ) !== "last",
                    ofType = what === "of-type";
    
                return first === 1 && last === 0 ?
    
                    // Shortcut for :nth-*(n)
                    function( elem ) {
                        return !!elem.parentNode;
                    } :
    
                    function( elem, context, xml ) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start,
                            dir = simple !== forward ? "nextSibling" : "previousSibling",
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType,
                            diff = false;
    
                        if ( parent ) {
    
                            // :(first|last|only)-(child|of-type)
                            if ( simple ) {
                                while ( dir ) {
                                    node = elem;
                                    while ( (node = node[ dir ]) ) {
                                        if ( ofType ?
                                            node.nodeName.toLowerCase() === name :
                                            node.nodeType === 1 ) {
    
                                            return false;
                                        }
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
    
                            start = [ forward ? parent.firstChild : parent.lastChild ];
    
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if ( forward && useCache ) {
    
                                // Seek `elem` from a previously-cached index
    
                                // ...in a gzip-friendly way
                                node = parent;
                                outerCache = node[ expando ] || (node[ expando ] = {});
    
                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[ node.uniqueID ] ||
                                    (outerCache[ node.uniqueID ] = {});
    
                                cache = uniqueCache[ type ] || [];
                                nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                diff = nodeIndex && cache[ 2 ];
                                node = nodeIndex && parent.childNodes[ nodeIndex ];
    
                                while ( (node = ++nodeIndex && node && node[ dir ] ||
    
                                    // Fallback to seeking `elem` from the start
                                    (diff = nodeIndex = 0) || start.pop()) ) {
    
                                    // When found, cache indexes on `parent` and break
                                    if ( node.nodeType === 1 && ++diff && node === elem ) {
                                        uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
    
                            } else {
                                // Use previously-cached element index if available
                                if ( useCache ) {
                                    // ...in a gzip-friendly way
                                    node = elem;
                                    outerCache = node[ expando ] || (node[ expando ] = {});
    
                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[ node.uniqueID ] ||
                                        (outerCache[ node.uniqueID ] = {});
    
                                    cache = uniqueCache[ type ] || [];
                                    nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                    diff = nodeIndex;
                                }
    
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if ( diff === false ) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while ( (node = ++nodeIndex && node && node[ dir ] ||
                                        (diff = nodeIndex = 0) || start.pop()) ) {
    
                                        if ( ( ofType ?
                                            node.nodeName.toLowerCase() === name :
                                            node.nodeType === 1 ) &&
                                            ++diff ) {
    
                                            // Cache the index of each encountered element
                                            if ( useCache ) {
                                                outerCache = node[ expando ] || (node[ expando ] = {});
    
                                                // Support: IE <9 only
                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                uniqueCache = outerCache[ node.uniqueID ] ||
                                                    (outerCache[ node.uniqueID ] = {});
    
                                                uniqueCache[ type ] = [ dirruns, diff ];
                                            }
    
                                            if ( node === elem ) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
    
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || ( diff % first === 0 && diff / first >= 0 );
                        }
                    };
            },
    
            "PSEUDO": function( pseudo, argument ) {
                // pseudo-class names are case-insensitive
                // http://www.w3.org/TR/selectors/#pseudo-classes
                // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                // Remember that setFilters inherits from pseudos
                var args,
                    fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                        Sizzle.error( "unsupported pseudo: " + pseudo );
    
                // The user may use createPseudo to indicate that
                // arguments are needed to create the filter function
                // just as Sizzle does
                if ( fn[ expando ] ) {
                    return fn( argument );
                }
    
                // But maintain support for old signatures
                if ( fn.length > 1 ) {
                    args = [ pseudo, pseudo, "", argument ];
                    return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                        markFunction(function( seed, matches ) {
                            var idx,
                                matched = fn( seed, argument ),
                                i = matched.length;
                            while ( i-- ) {
                                idx = indexOf( seed, matched[i] );
                                seed[ idx ] = !( matches[ idx ] = matched[i] );
                            }
                        }) :
                        function( elem ) {
                            return fn( elem, 0, args );
                        };
                }
    
                return fn;
            }
        },
    
        pseudos: {
            // Potentially complex pseudos
            "not": markFunction(function( selector ) {
                // Trim the selector passed to compile
                // to avoid treating leading and trailing
                // spaces as combinators
                var input = [],
                    results = [],
                    matcher = compile( selector.replace( rtrim, "$1" ) );
    
                return matcher[ expando ] ?
                    markFunction(function( seed, matches, context, xml ) {
                        var elem,
                            unmatched = matcher( seed, null, xml, [] ),
                            i = seed.length;
    
                        // Match elements unmatched by `matcher`
                        while ( i-- ) {
                            if ( (elem = unmatched[i]) ) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) :
                    function( elem, context, xml ) {
                        input[0] = elem;
                        matcher( input, null, xml, results );
                        // Don't keep the element (issue #299)
                        input[0] = null;
                        return !results.pop();
                    };
            }),
    
            "has": markFunction(function( selector ) {
                return function( elem ) {
                    return Sizzle( selector, elem ).length > 0;
                };
            }),
    
            "contains": markFunction(function( text ) {
                text = text.replace( runescape, funescape );
                return function( elem ) {
                    return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
                };
            }),
    
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // http://www.w3.org/TR/selectors/#lang-pseudo
            "lang": markFunction( function( lang ) {
                // lang value must be a valid identifier
                if ( !ridentifier.test(lang || "") ) {
                    Sizzle.error( "unsupported lang: " + lang );
                }
                lang = lang.replace( runescape, funescape ).toLowerCase();
                return function( elem ) {
                    var elemLang;
                    do {
                        if ( (elemLang = documentIsHTML ?
                            elem.lang :
                            elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
    
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                        }
                    } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
                    return false;
                };
            }),
    
            // Miscellaneous
            "target": function( elem ) {
                var hash = window.location && window.location.hash;
                return hash && hash.slice( 1 ) === elem.id;
            },
    
            "root": function( elem ) {
                return elem === docElem;
            },
    
            "focus": function( elem ) {
                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
    
            // Boolean properties
            "enabled": createDisabledPseudo( false ),
            "disabled": createDisabledPseudo( true ),
    
            "checked": function( elem ) {
                // In CSS3, :checked should return both checked and selected elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                var nodeName = elem.nodeName.toLowerCase();
                return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
            },
    
            "selected": function( elem ) {
                // Accessing this property makes selected-by-default
                // options in Safari work properly
                if ( elem.parentNode ) {
                    elem.parentNode.selectedIndex;
                }
    
                return elem.selected === true;
            },
    
            // Contents
            "empty": function( elem ) {
                // http://www.w3.org/TR/selectors/#empty-pseudo
                // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                //   but not by others (comment: 8; processing instruction: 7; etc.)
                // nodeType < 6 works because attributes (2) do not appear as children
                for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                    if ( elem.nodeType < 6 ) {
                        return false;
                    }
                }
                return true;
            },
    
            "parent": function( elem ) {
                return !Expr.pseudos["empty"]( elem );
            },
    
            // Element/input types
            "header": function( elem ) {
                return rheader.test( elem.nodeName );
            },
    
            "input": function( elem ) {
                return rinputs.test( elem.nodeName );
            },
    
            "button": function( elem ) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
            },
    
            "text": function( elem ) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" &&
                    elem.type === "text" &&
    
                    // Support: IE<8
                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                    ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
            },
    
            // Position-in-collection
            "first": createPositionalPseudo(function() {
                return [ 0 ];
            }),
    
            "last": createPositionalPseudo(function( matchIndexes, length ) {
                return [ length - 1 ];
            }),
    
            "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
                return [ argument < 0 ? argument + length : argument ];
            }),
    
            "even": createPositionalPseudo(function( matchIndexes, length ) {
                var i = 0;
                for ( ; i < length; i += 2 ) {
                    matchIndexes.push( i );
                }
                return matchIndexes;
            }),
    
            "odd": createPositionalPseudo(function( matchIndexes, length ) {
                var i = 1;
                for ( ; i < length; i += 2 ) {
                    matchIndexes.push( i );
                }
                return matchIndexes;
            }),
    
            "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                var i = argument < 0 ? argument + length : argument;
                for ( ; --i >= 0; ) {
                    matchIndexes.push( i );
                }
                return matchIndexes;
            }),
    
            "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                var i = argument < 0 ? argument + length : argument;
                for ( ; ++i < length; ) {
                    matchIndexes.push( i );
                }
                return matchIndexes;
            })
        }
    };
    
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    
    // Add button/input type pseudos
    for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
        Expr.pseudos[ i ] = createInputPseudo( i );
    }
    for ( i in { submit: true, reset: true } ) {
        Expr.pseudos[ i ] = createButtonPseudo( i );
    }
    
    // Easy API for creating new setFilters
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    
    tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
        var matched, match, tokens, type,
            soFar, groups, preFilters,
            cached = tokenCache[ selector + " " ];
    
        if ( cached ) {
            return parseOnly ? 0 : cached.slice( 0 );
        }
    
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
    
        while ( soFar ) {
    
            // Comma and first run
            if ( !matched || (match = rcomma.exec( soFar )) ) {
                if ( match ) {
                    // Don't consume trailing commas as valid
                    soFar = soFar.slice( match[0].length ) || soFar;
                }
                groups.push( (tokens = []) );
            }
    
            matched = false;
    
            // Combinators
            if ( (match = rcombinators.exec( soFar )) ) {
                matched = match.shift();
                tokens.push({
                    value: matched,
                    // Cast descendant combinators to space
                    type: match[0].replace( rtrim, " " )
                });
                soFar = soFar.slice( matched.length );
            }
    
            // Filters
            for ( type in Expr.filter ) {
                if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
                    (match = preFilters[ type ]( match ))) ) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice( matched.length );
                }
            }
    
            if ( !matched ) {
                break;
            }
        }
    
        // Return the length of the invalid excess
        // if we're just parsing
        // Otherwise, throw an error or return tokens
        return parseOnly ?
            soFar.length :
            soFar ?
                Sizzle.error( selector ) :
                // Cache the tokens
                tokenCache( selector, groups ).slice( 0 );
    };
    
    function toSelector( tokens ) {
        var i = 0,
            len = tokens.length,
            selector = "";
        for ( ; i < len; i++ ) {
            selector += tokens[i].value;
        }
        return selector;
    }
    
    function addCombinator( matcher, combinator, base ) {
        var dir = combinator.dir,
            skip = combinator.next,
            key = skip || dir,
            checkNonElements = base && key === "parentNode",
            doneName = done++;
    
        return combinator.first ?
            // Check against closest ancestor/preceding element
            function( elem, context, xml ) {
                while ( (elem = elem[ dir ]) ) {
                    if ( elem.nodeType === 1 || checkNonElements ) {
                        return matcher( elem, context, xml );
                    }
                }
            } :
    
            // Check against all ancestor/preceding elements
            function( elem, context, xml ) {
                var oldCache, uniqueCache, outerCache,
                    newCache = [ dirruns, doneName ];
    
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if ( xml ) {
                    while ( (elem = elem[ dir ]) ) {
                        if ( elem.nodeType === 1 || checkNonElements ) {
                            if ( matcher( elem, context, xml ) ) {
                                return true;
                            }
                        }
                    }
                } else {
                    while ( (elem = elem[ dir ]) ) {
                        if ( elem.nodeType === 1 || checkNonElements ) {
                            outerCache = elem[ expando ] || (elem[ expando ] = {});
    
                            // Support: IE <9 only
                            // Defend against cloned attroperties (jQuery gh-1709)
                            uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
    
                            if ( skip && skip === elem.nodeName.toLowerCase() ) {
                                elem = elem[ dir ] || elem;
                            } else if ( (oldCache = uniqueCache[ key ]) &&
                                oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
    
                                // Assign to newCache so results back-propagate to previous elements
                                return (newCache[ 2 ] = oldCache[ 2 ]);
                            } else {
                                // Reuse newcache so results back-propagate to previous elements
                                uniqueCache[ key ] = newCache;
    
                                // A match means we're done; a fail means we have to keep checking
                                if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
    }
    
    function elementMatcher( matchers ) {
        return matchers.length > 1 ?
            function( elem, context, xml ) {
                var i = matchers.length;
                while ( i-- ) {
                    if ( !matchers[i]( elem, context, xml ) ) {
                        return false;
                    }
                }
                return true;
            } :
            matchers[0];
    }
    
    function multipleContexts( selector, contexts, results ) {
        var i = 0,
            len = contexts.length;
        for ( ; i < len; i++ ) {
            Sizzle( selector, contexts[i], results );
        }
        return results;
    }
    
    function condense( unmatched, map, filter, context, xml ) {
        var elem,
            newUnmatched = [],
            i = 0,
            len = unmatched.length,
            mapped = map != null;
    
        for ( ; i < len; i++ ) {
            if ( (elem = unmatched[i]) ) {
                if ( !filter || filter( elem, context, xml ) ) {
                    newUnmatched.push( elem );
                    if ( mapped ) {
                        map.push( i );
                    }
                }
            }
        }
    
        return newUnmatched;
    }
    
    function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
        if ( postFilter && !postFilter[ expando ] ) {
            postFilter = setMatcher( postFilter );
        }
        if ( postFinder && !postFinder[ expando ] ) {
            postFinder = setMatcher( postFinder, postSelector );
        }
        return markFunction(function( seed, results, context, xml ) {
            var temp, i, elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,
    
                // Get initial elements from seed or context
                elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
    
                // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && ( seed || !selector ) ?
                    condense( elems, preMap, preFilter, context, xml ) :
                    elems,
    
                matcherOut = matcher ?
                    // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                    postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
    
                        // ...intermediate processing is necessary
                        [] :
    
                        // ...otherwise use results directly
                        results :
                    matcherIn;
    
            // Find primary matches
            if ( matcher ) {
                matcher( matcherIn, matcherOut, context, xml );
            }
    
            // Apply postFilter
            if ( postFilter ) {
                temp = condense( matcherOut, postMap );
                postFilter( temp, [], context, xml );
    
                // Un-match failing elements by moving them back to matcherIn
                i = temp.length;
                while ( i-- ) {
                    if ( (elem = temp[i]) ) {
                        matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
                    }
                }
            }
    
            if ( seed ) {
                if ( postFinder || preFilter ) {
                    if ( postFinder ) {
                        // Get the final matcherOut by condensing this intermediate into postFinder contexts
                        temp = [];
                        i = matcherOut.length;
                        while ( i-- ) {
                            if ( (elem = matcherOut[i]) ) {
                                // Restore matcherIn since elem is not yet a final match
                                temp.push( (matcherIn[i] = elem) );
                            }
                        }
                        postFinder( null, (matcherOut = []), temp, xml );
                    }
    
                    // Move matched elements from seed to results to keep them synchronized
                    i = matcherOut.length;
                    while ( i-- ) {
                        if ( (elem = matcherOut[i]) &&
                            (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
    
                            seed[temp] = !(results[temp] = elem);
                        }
                    }
                }
    
            // Add elements to results, through postFinder if defined
            } else {
                matcherOut = condense(
                    matcherOut === results ?
                        matcherOut.splice( preexisting, matcherOut.length ) :
                        matcherOut
                );
                if ( postFinder ) {
                    postFinder( null, results, matcherOut, xml );
                } else {
                    push.apply( results, matcherOut );
                }
            }
        });
    }
    
    function matcherFromTokens( tokens ) {
        var checkContext, matcher, j,
            len = tokens.length,
            leadingRelative = Expr.relative[ tokens[0].type ],
            implicitRelative = leadingRelative || Expr.relative[" "],
            i = leadingRelative ? 1 : 0,
    
            // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator( function( elem ) {
                return elem === checkContext;
            }, implicitRelative, true ),
            matchAnyContext = addCombinator( function( elem ) {
                return indexOf( checkContext, elem ) > -1;
            }, implicitRelative, true ),
            matchers = [ function( elem, context, xml ) {
                var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                    (checkContext = context).nodeType ?
                        matchContext( elem, context, xml ) :
                        matchAnyContext( elem, context, xml ) );
                // Avoid hanging onto element (issue #299)
                checkContext = null;
                return ret;
            } ];
    
        for ( ; i < len; i++ ) {
            if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
                matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
            } else {
                matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
    
                // Return special upon seeing a positional matcher
                if ( matcher[ expando ] ) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for ( ; j < len; j++ ) {
                        if ( Expr.relative[ tokens[j].type ] ) {
                            break;
                        }
                    }
                    return setMatcher(
                        i > 1 && elementMatcher( matchers ),
                        i > 1 && toSelector(
                            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                            tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
                        ).replace( rtrim, "$1" ),
                        matcher,
                        i < j && matcherFromTokens( tokens.slice( i, j ) ),
                        j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
                        j < len && toSelector( tokens )
                    );
                }
                matchers.push( matcher );
            }
        }
    
        return elementMatcher( matchers );
    }
    
    function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
        var bySet = setMatchers.length > 0,
            byElement = elementMatchers.length > 0,
            superMatcher = function( seed, context, xml, results, outermost ) {
                var elem, j, matcher,
                    matchedCount = 0,
                    i = "0",
                    unmatched = seed && [],
                    setMatched = [],
                    contextBackup = outermostContext,
                    // We must always have either seed elements or outermost context
                    elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
                    // Use integer dirruns iff this is the outermost matcher
                    dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                    len = elems.length;
    
                if ( outermost ) {
                    outermostContext = context === document || context || outermost;
                }
    
                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
                    if ( byElement && elem ) {
                        j = 0;
                        if ( !context && elem.ownerDocument !== document ) {
                            setDocument( elem );
                            xml = !documentIsHTML;
                        }
                        while ( (matcher = elementMatchers[j++]) ) {
                            if ( matcher( elem, context || document, xml) ) {
                                results.push( elem );
                                break;
                            }
                        }
                        if ( outermost ) {
                            dirruns = dirrunsUnique;
                        }
                    }
    
                    // Track unmatched elements for set filters
                    if ( bySet ) {
                        // They will have gone through all possible matchers
                        if ( (elem = !matcher && elem) ) {
                            matchedCount--;
                        }
    
                        // Lengthen the array for every element, matched or not
                        if ( seed ) {
                            unmatched.push( elem );
                        }
                    }
                }
    
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;
    
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if ( bySet && i !== matchedCount ) {
                    j = 0;
                    while ( (matcher = setMatchers[j++]) ) {
                        matcher( unmatched, setMatched, context, xml );
                    }
    
                    if ( seed ) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if ( matchedCount > 0 ) {
                            while ( i-- ) {
                                if ( !(unmatched[i] || setMatched[i]) ) {
                                    setMatched[i] = pop.call( results );
                                }
                            }
                        }
    
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense( setMatched );
                    }
    
                    // Add matches to results
                    push.apply( results, setMatched );
    
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if ( outermost && !seed && setMatched.length > 0 &&
                        ( matchedCount + setMatchers.length ) > 1 ) {
    
                        Sizzle.uniqueSort( results );
                    }
                }
    
                // Override manipulation of globals by nested matchers
                if ( outermost ) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
    
                return unmatched;
            };
    
        return bySet ?
            markFunction( superMatcher ) :
            superMatcher;
    }
    
    compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
        var i,
            setMatchers = [],
            elementMatchers = [],
            cached = compilerCache[ selector + " " ];
    
        if ( !cached ) {
            // Generate a function of recursive functions that can be used to check each element
            if ( !match ) {
                match = tokenize( selector );
            }
            i = match.length;
            while ( i-- ) {
                cached = matcherFromTokens( match[i] );
                if ( cached[ expando ] ) {
                    setMatchers.push( cached );
                } else {
                    elementMatchers.push( cached );
                }
            }
    
            // Cache the compiled function
            cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
    
            // Save selector and tokenization
            cached.selector = selector;
        }
        return cached;
    };
    
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */
    select = Sizzle.select = function( selector, context, results, seed ) {
        var i, tokens, token, type, find,
            compiled = typeof selector === "function" && selector,
            match = !seed && tokenize( (selector = compiled.selector || selector) );
    
        results = results || [];
    
        // Try to minimize operations if there is only one selector in the list and no seed
        // (the latter of which guarantees us context)
        if ( match.length === 1 ) {
    
            // Reduce context if the leading compound selector is an ID
            tokens = match[0] = match[0].slice( 0 );
            if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                    support.getById && context.nodeType === 9 && documentIsHTML &&
                    Expr.relative[ tokens[1].type ] ) {
    
                context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
                if ( !context ) {
                    return results;
    
                // Precompiled matchers will still verify ancestry, so step up a level
                } else if ( compiled ) {
                    context = context.parentNode;
                }
    
                selector = selector.slice( tokens.shift().value.length );
            }
    
            // Fetch a seed set for right-to-left matching
            i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
            while ( i-- ) {
                token = tokens[i];
    
                // Abort if we hit a combinator
                if ( Expr.relative[ (type = token.type) ] ) {
                    break;
                }
                if ( (find = Expr.find[ type ]) ) {
                    // Search, expanding context for leading sibling combinators
                    if ( (seed = find(
                        token.matches[0].replace( runescape, funescape ),
                        rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
                    )) ) {
    
                        // If seed is empty or no tokens remain, we can return early
                        tokens.splice( i, 1 );
                        selector = seed.length && toSelector( tokens );
                        if ( !selector ) {
                            push.apply( results, seed );
                            return results;
                        }
    
                        break;
                    }
                }
            }
        }
    
        // Compile and execute a filtering function if one is not provided
        // Provide `match` to avoid retokenization if we modified the selector above
        ( compiled || compile( selector, match ) )(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
        );
        return results;
    };
    
    // One-time assignments
    
    // Sort stability
    support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
    
    // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function
    support.detectDuplicates = !!hasDuplicate;
    
    // Initialize against the default document
    setDocument();
    
    // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*
    support.sortDetached = assert(function( el ) {
        // Should return 1, but returns 4 (following)
        return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
    });
    
    // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if ( !assert(function( el ) {
        el.innerHTML = "<a href='#'></a>";
        return el.firstChild.getAttribute("href") === "#" ;
    }) ) {
        addHandle( "type|href|height|width", function( elem, name, isXML ) {
            if ( !isXML ) {
                return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
            }
        });
    }
    
    // Support: IE<9
    // Use defaultValue in place of getAttribute("value")
    if ( !support.attributes || !assert(function( el ) {
        el.innerHTML = "<input/>";
        el.firstChild.setAttribute( "value", "" );
        return el.firstChild.getAttribute( "value" ) === "";
    }) ) {
        addHandle( "value", function( elem, name, isXML ) {
            if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
                return elem.defaultValue;
            }
        });
    }
    
    // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies
    if ( !assert(function( el ) {
        return el.getAttribute("disabled") == null;
    }) ) {
        addHandle( booleans, function( elem, name, isXML ) {
            var val;
            if ( !isXML ) {
                return elem[ name ] === true ? name.toLowerCase() :
                        (val = elem.getAttributeNode( name )) && val.specified ?
                        val.value :
                    null;
            }
        });
    }
    
    return Sizzle;
    
    })( window );
    
    
    
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    
    // Deprecated
    jQuery.expr[ ":" ] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    
    
    
    
    var dir = function( elem, dir, until ) {
        var matched = [],
            truncate = until !== undefined;
    
        while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
            if ( elem.nodeType === 1 ) {
                if ( truncate && jQuery( elem ).is( until ) ) {
                    break;
                }
                matched.push( elem );
            }
        }
        return matched;
    };
    
    
    var siblings = function( n, elem ) {
        var matched = [];
    
        for ( ; n; n = n.nextSibling ) {
            if ( n.nodeType === 1 && n !== elem ) {
                matched.push( n );
            }
        }
    
        return matched;
    };
    
    
    var rneedsContext = jQuery.expr.match.needsContext;
    
    var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
    
    
    
    var risSimple = /^.[^:#\[\.,]*$/;
    
    // Implement the identical functionality for filter and not
    function winnow( elements, qualifier, not ) {
        if ( jQuery.isFunction( qualifier ) ) {
            return jQuery.grep( elements, function( elem, i ) {
                return !!qualifier.call( elem, i, elem ) !== not;
            } );
    
        }
    
        if ( qualifier.nodeType ) {
            return jQuery.grep( elements, function( elem ) {
                return ( elem === qualifier ) !== not;
            } );
    
        }
    
        if ( typeof qualifier === "string" ) {
            if ( risSimple.test( qualifier ) ) {
                return jQuery.filter( qualifier, elements, not );
            }
    
            qualifier = jQuery.filter( qualifier, elements );
        }
    
        return jQuery.grep( elements, function( elem ) {
            return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
        } );
    }
    
    jQuery.filter = function( expr, elems, not ) {
        var elem = elems[ 0 ];
    
        if ( not ) {
            expr = ":not(" + expr + ")";
        }
    
        return elems.length === 1 && elem.nodeType === 1 ?
            jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
            jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
                return elem.nodeType === 1;
            } ) );
    };
    
    jQuery.fn.extend( {
        find: function( selector ) {
            var i, ret,
                len = this.length,
                self = this;
    
            if ( typeof selector !== "string" ) {
                return this.pushStack( jQuery( selector ).filter( function() {
                    for ( i = 0; i < len; i++ ) {
                        if ( jQuery.contains( self[ i ], this ) ) {
                            return true;
                        }
                    }
                } ) );
            }
    
            ret = this.pushStack( [] );
    
            for ( i = 0; i < len; i++ ) {
                jQuery.find( selector, self[ i ], ret );
            }
    
            return len > 1 ? jQuery.uniqueSort( ret ) : ret;
        },
        filter: function( selector ) {
            return this.pushStack( winnow( this, selector || [], false ) );
        },
        not: function( selector ) {
            return this.pushStack( winnow( this, selector || [], true ) );
        },
        is: function( selector ) {
            return !!winnow(
                this,
    
                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test( selector ) ?
                    jQuery( selector ) :
                    selector || [],
                false
            ).length;
        }
    } );
    
    
    // Initialize a jQuery object
    
    
    // A central reference to the root jQuery(document)
    var rootjQuery,
    
        // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        // Shortcut simple #id case for speed
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    
        init = jQuery.fn.init = function( selector, context, root ) {
            var match, elem;
    
            // HANDLE: $(""), $(null), $(undefined), $(false)
            if ( !selector ) {
                return this;
            }
    
            // Method init() accepts an alternate rootjQuery
            // so migrate can support jQuery.sub (gh-2101)
            root = root || rootjQuery;
    
            // Handle HTML strings
            if ( typeof selector === "string" ) {
                if ( selector[ 0 ] === "<" &&
                    selector[ selector.length - 1 ] === ">" &&
                    selector.length >= 3 ) {
    
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [ null, selector, null ];
    
                } else {
                    match = rquickExpr.exec( selector );
                }
    
                // Match html or make sure no context is specified for #id
                if ( match && ( match[ 1 ] || !context ) ) {
    
                    // HANDLE: $(html) -> $(array)
                    if ( match[ 1 ] ) {
                        context = context instanceof jQuery ? context[ 0 ] : context;
    
                        // Option to run scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge( this, jQuery.parseHTML(
                            match[ 1 ],
                            context && context.nodeType ? context.ownerDocument || context : document,
                            true
                        ) );
    
                        // HANDLE: $(html, props)
                        if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
                            for ( match in context ) {
    
                                // Properties of context are called as methods if possible
                                if ( jQuery.isFunction( this[ match ] ) ) {
                                    this[ match ]( context[ match ] );
    
                                // ...and otherwise set as attributes
                                } else {
                                    this.attr( match, context[ match ] );
                                }
                            }
                        }
    
                        return this;
    
                    // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById( match[ 2 ] );
    
                        if ( elem ) {
    
                            // Inject the element directly into the jQuery object
                            this[ 0 ] = elem;
                            this.length = 1;
                        }
                        return this;
                    }
    
                // HANDLE: $(expr, $(...))
                } else if ( !context || context.jquery ) {
                    return ( context || root ).find( selector );
    
                // HANDLE: $(expr, context)
                // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor( context ).find( selector );
                }
    
            // HANDLE: $(DOMElement)
            } else if ( selector.nodeType ) {
                this[ 0 ] = selector;
                this.length = 1;
                return this;
    
            // HANDLE: $(function)
            // Shortcut for document ready
            } else if ( jQuery.isFunction( selector ) ) {
                return root.ready !== undefined ?
                    root.ready( selector ) :
    
                    // Execute immediately if ready is not present
                    selector( jQuery );
            }
    
            return jQuery.makeArray( selector, this );
        };
    
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    
    // Initialize central reference
    rootjQuery = jQuery( document );
    
    
    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    
        // Methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    
    jQuery.fn.extend( {
        has: function( target ) {
            var targets = jQuery( target, this ),
                l = targets.length;
    
            return this.filter( function() {
                var i = 0;
                for ( ; i < l; i++ ) {
                    if ( jQuery.contains( this, targets[ i ] ) ) {
                        return true;
                    }
                }
            } );
        },
    
        closest: function( selectors, context ) {
            var cur,
                i = 0,
                l = this.length,
                matched = [],
                targets = typeof selectors !== "string" && jQuery( selectors );
    
            // Positional selectors never match, since there's no _selection_ context
            if ( !rneedsContext.test( selectors ) ) {
                for ( ; i < l; i++ ) {
                    for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
    
                        // Always skip document fragments
                        if ( cur.nodeType < 11 && ( targets ?
                            targets.index( cur ) > -1 :
    
                            // Don't pass non-elements to Sizzle
                            cur.nodeType === 1 &&
                                jQuery.find.matchesSelector( cur, selectors ) ) ) {
    
                            matched.push( cur );
                            break;
                        }
                    }
                }
            }
    
            return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
        },
    
        // Determine the position of an element within the set
        index: function( elem ) {
    
            // No argument, return index in parent
            if ( !elem ) {
                return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
            }
    
            // Index in selector
            if ( typeof elem === "string" ) {
                return indexOf.call( jQuery( elem ), this[ 0 ] );
            }
    
            // Locate the position of the desired element
            return indexOf.call( this,
    
                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[ 0 ] : elem
            );
        },
    
        add: function( selector, context ) {
            return this.pushStack(
                jQuery.uniqueSort(
                    jQuery.merge( this.get(), jQuery( selector, context ) )
                )
            );
        },
    
        addBack: function( selector ) {
            return this.add( selector == null ?
                this.prevObject : this.prevObject.filter( selector )
            );
        }
    } );
    
    function sibling( cur, dir ) {
        while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
        return cur;
    }
    
    jQuery.each( {
        parent: function( elem ) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function( elem ) {
            return dir( elem, "parentNode" );
        },
        parentsUntil: function( elem, i, until ) {
            return dir( elem, "parentNode", until );
        },
        next: function( elem ) {
            return sibling( elem, "nextSibling" );
        },
        prev: function( elem ) {
            return sibling( elem, "previousSibling" );
        },
        nextAll: function( elem ) {
            return dir( elem, "nextSibling" );
        },
        prevAll: function( elem ) {
            return dir( elem, "previousSibling" );
        },
        nextUntil: function( elem, i, until ) {
            return dir( elem, "nextSibling", until );
        },
        prevUntil: function( elem, i, until ) {
            return dir( elem, "previousSibling", until );
        },
        siblings: function( elem ) {
            return siblings( ( elem.parentNode || {} ).firstChild, elem );
        },
        children: function( elem ) {
            return siblings( elem.firstChild );
        },
        contents: function( elem ) {
            return elem.contentDocument || jQuery.merge( [], elem.childNodes );
        }
    }, function( name, fn ) {
        jQuery.fn[ name ] = function( until, selector ) {
            var matched = jQuery.map( this, fn, until );
    
            if ( name.slice( -5 ) !== "Until" ) {
                selector = until;
            }
    
            if ( selector && typeof selector === "string" ) {
                matched = jQuery.filter( selector, matched );
            }
    
            if ( this.length > 1 ) {
    
                // Remove duplicates
                if ( !guaranteedUnique[ name ] ) {
                    jQuery.uniqueSort( matched );
                }
    
                // Reverse order for parents* and prev-derivatives
                if ( rparentsprev.test( name ) ) {
                    matched.reverse();
                }
            }
    
            return this.pushStack( matched );
        };
    } );
    var rnotwhite = ( /\S+/g );
    
    
    
    // Convert String-formatted options into Object-formatted ones
    function createOptions( options ) {
        var object = {};
        jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
            object[ flag ] = true;
        } );
        return object;
    }
    
    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function( options ) {
    
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
            createOptions( options ) :
            jQuery.extend( {}, options );
    
        var // Flag to know if list is currently firing
            firing,
    
            // Last fire value for non-forgettable lists
            memory,
    
            // Flag to know if list was already fired
            fired,
    
            // Flag to prevent firing
            locked,
    
            // Actual callback list
            list = [],
    
            // Queue of execution data for repeatable lists
            queue = [],
    
            // Index of currently firing callback (modified by add/remove as needed)
            firingIndex = -1,
    
            // Fire callbacks
            fire = function() {
    
                // Enforce single-firing
                locked = options.once;
    
                // Execute callbacks for all pending executions,
                // respecting firingIndex overrides and runtime changes
                fired = firing = true;
                for ( ; queue.length; firingIndex = -1 ) {
                    memory = queue.shift();
                    while ( ++firingIndex < list.length ) {
    
                        // Run callback and check for early termination
                        if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
                            options.stopOnFalse ) {
    
                            // Jump to end and forget the data so .add doesn't re-fire
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }
    
                // Forget the data if we're done with it
                if ( !options.memory ) {
                    memory = false;
                }
    
                firing = false;
    
                // Clean up if we're done firing for good
                if ( locked ) {
    
                    // Keep an empty list if we have data for future add calls
                    if ( memory ) {
                        list = [];
    
                    // Otherwise, this object is spent
                    } else {
                        list = "";
                    }
                }
            },
    
            // Actual Callbacks object
            self = {
    
                // Add a callback or a collection of callbacks to the list
                add: function() {
                    if ( list ) {
    
                        // If we have memory from a past run, we should fire after adding
                        if ( memory && !firing ) {
                            firingIndex = list.length - 1;
                            queue.push( memory );
                        }
    
                        ( function add( args ) {
                            jQuery.each( args, function( _, arg ) {
                                if ( jQuery.isFunction( arg ) ) {
                                    if ( !options.unique || !self.has( arg ) ) {
                                        list.push( arg );
                                    }
                                } else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
    
                                    // Inspect recursively
                                    add( arg );
                                }
                            } );
                        } )( arguments );
    
                        if ( memory && !firing ) {
                            fire();
                        }
                    }
                    return this;
                },
    
                // Remove a callback from the list
                remove: function() {
                    jQuery.each( arguments, function( _, arg ) {
                        var index;
                        while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                            list.splice( index, 1 );
    
                            // Handle firing indexes
                            if ( index <= firingIndex ) {
                                firingIndex--;
                            }
                        }
                    } );
                    return this;
                },
    
                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function( fn ) {
                    return fn ?
                        jQuery.inArray( fn, list ) > -1 :
                        list.length > 0;
                },
    
                // Remove all callbacks from the list
                empty: function() {
                    if ( list ) {
                        list = [];
                    }
                    return this;
                },
    
                // Disable .fire and .add
                // Abort any current/pending executions
                // Clear all callbacks and values
                disable: function() {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function() {
                    return !list;
                },
    
                // Disable .fire
                // Also disable .add unless we have memory (since it would have no effect)
                // Abort any pending executions
                lock: function() {
                    locked = queue = [];
                    if ( !memory && !firing ) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function() {
                    return !!locked;
                },
    
                // Call all callbacks with the given context and arguments
                fireWith: function( context, args ) {
                    if ( !locked ) {
                        args = args || [];
                        args = [ context, args.slice ? args.slice() : args ];
                        queue.push( args );
                        if ( !firing ) {
                            fire();
                        }
                    }
                    return this;
                },
    
                // Call all the callbacks with the given arguments
                fire: function() {
                    self.fireWith( this, arguments );
                    return this;
                },
    
                // To know if the callbacks have already been called at least once
                fired: function() {
                    return !!fired;
                }
            };
    
        return self;
    };
    
    
    function Identity( v ) {
        return v;
    }
    function Thrower( ex ) {
        throw ex;
    }
    
    function adoptValue( value, resolve, reject ) {
        var method;
    
        try {
    
            // Check for promise aspect first to privilege synchronous behavior
            if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
                method.call( value ).done( resolve ).fail( reject );
    
            // Other thenables
            } else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
                method.call( value, resolve, reject );
    
            // Other non-thenables
            } else {
    
                // Support: Android 4.0 only
                // Strict mode functions invoked without .call/.apply get global-object context
                resolve.call( undefined, value );
            }
    
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch ( value ) {
    
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.call( undefined, value );
        }
    }
    
    jQuery.extend( {
    
        Deferred: function( func ) {
            var tuples = [
    
                    // action, add listener, callbacks,
                    // ... .then handlers, argument index, [final state]
                    [ "notify", "progress", jQuery.Callbacks( "memory" ),
                        jQuery.Callbacks( "memory" ), 2 ],
                    [ "resolve", "done", jQuery.Callbacks( "once memory" ),
                        jQuery.Callbacks( "once memory" ), 0, "resolved" ],
                    [ "reject", "fail", jQuery.Callbacks( "once memory" ),
                        jQuery.Callbacks( "once memory" ), 1, "rejected" ]
                ],
                state = "pending",
                promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done( arguments ).fail( arguments );
                        return this;
                    },
                    "catch": function( fn ) {
                        return promise.then( null, fn );
                    },
    
                    // Keep pipe for back-compat
                    pipe: function( /* fnDone, fnFail, fnProgress */ ) {
                        var fns = arguments;
    
                        return jQuery.Deferred( function( newDefer ) {
                            jQuery.each( tuples, function( i, tuple ) {
    
                                // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                                var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
    
                                // deferred.progress(function() { bind to newDefer or newDefer.notify })
                                // deferred.done(function() { bind to newDefer or newDefer.resolve })
                                // deferred.fail(function() { bind to newDefer or newDefer.reject })
                                deferred[ tuple[ 1 ] ]( function() {
                                    var returned = fn && fn.apply( this, arguments );
                                    if ( returned && jQuery.isFunction( returned.promise ) ) {
                                        returned.promise()
                                            .progress( newDefer.notify )
                                            .done( newDefer.resolve )
                                            .fail( newDefer.reject );
                                    } else {
                                        newDefer[ tuple[ 0 ] + "With" ](
                                            this,
                                            fn ? [ returned ] : arguments
                                        );
                                    }
                                } );
                            } );
                            fns = null;
                        } ).promise();
                    },
                    then: function( onFulfilled, onRejected, onProgress ) {
                        var maxDepth = 0;
                        function resolve( depth, deferred, handler, special ) {
                            return function() {
                                var that = this,
                                    args = arguments,
                                    mightThrow = function() {
                                        var returned, then;
    
                                        // Support: Promises/A+ section 2.3.3.3.3
                                        // https://promisesaplus.com/#point-59
                                        // Ignore double-resolution attempts
                                        if ( depth < maxDepth ) {
                                            return;
                                        }
    
                                        returned = handler.apply( that, args );
    
                                        // Support: Promises/A+ section 2.3.1
                                        // https://promisesaplus.com/#point-48
                                        if ( returned === deferred.promise() ) {
                                            throw new TypeError( "Thenable self-resolution" );
                                        }
    
                                        // Support: Promises/A+ sections 2.3.3.1, 3.5
                                        // https://promisesaplus.com/#point-54
                                        // https://promisesaplus.com/#point-75
                                        // Retrieve `then` only once
                                        then = returned &&
    
                                            // Support: Promises/A+ section 2.3.4
                                            // https://promisesaplus.com/#point-64
                                            // Only check objects and functions for thenability
                                            ( typeof returned === "object" ||
                                                typeof returned === "function" ) &&
                                            returned.then;
    
                                        // Handle a returned thenable
                                        if ( jQuery.isFunction( then ) ) {
    
                                            // Special processors (notify) just wait for resolution
                                            if ( special ) {
                                                then.call(
                                                    returned,
                                                    resolve( maxDepth, deferred, Identity, special ),
                                                    resolve( maxDepth, deferred, Thrower, special )
                                                );
    
                                            // Normal processors (resolve) also hook into progress
                                            } else {
    
                                                // ...and disregard older resolution values
                                                maxDepth++;
    
                                                then.call(
                                                    returned,
                                                    resolve( maxDepth, deferred, Identity, special ),
                                                    resolve( maxDepth, deferred, Thrower, special ),
                                                    resolve( maxDepth, deferred, Identity,
                                                        deferred.notifyWith )
                                                );
                                            }
    
                                        // Handle all other returned values
                                        } else {
    
                                            // Only substitute handlers pass on context
                                            // and multiple values (non-spec behavior)
                                            if ( handler !== Identity ) {
                                                that = undefined;
                                                args = [ returned ];
                                            }
    
                                            // Process the value(s)
                                            // Default process is resolve
                                            ( special || deferred.resolveWith )( that, args );
                                        }
                                    },
    
                                    // Only normal processors (resolve) catch and reject exceptions
                                    process = special ?
                                        mightThrow :
                                        function() {
                                            try {
                                                mightThrow();
                                            } catch ( e ) {
    
                                                if ( jQuery.Deferred.exceptionHook ) {
                                                    jQuery.Deferred.exceptionHook( e,
                                                        process.stackTrace );
                                                }
    
                                                // Support: Promises/A+ section 2.3.3.3.4.1
                                                // https://promisesaplus.com/#point-61
                                                // Ignore post-resolution exceptions
                                                if ( depth + 1 >= maxDepth ) {
    
                                                    // Only substitute handlers pass on context
                                                    // and multiple values (non-spec behavior)
                                                    if ( handler !== Thrower ) {
                                                        that = undefined;
                                                        args = [ e ];
                                                    }
    
                                                    deferred.rejectWith( that, args );
                                                }
                                            }
                                        };
    
                                // Support: Promises/A+ section 2.3.3.3.1
                                // https://promisesaplus.com/#point-57
                                // Re-resolve promises immediately to dodge false rejection from
                                // subsequent errors
                                if ( depth ) {
                                    process();
                                } else {
    
                                    // Call an optional hook to record the stack, in case of exception
                                    // since it's otherwise lost when execution goes async
                                    if ( jQuery.Deferred.getStackHook ) {
                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                    }
                                    window.setTimeout( process );
                                }
                            };
                        }
    
                        return jQuery.Deferred( function( newDefer ) {
    
                            // progress_handlers.add( ... )
                            tuples[ 0 ][ 3 ].add(
                                resolve(
                                    0,
                                    newDefer,
                                    jQuery.isFunction( onProgress ) ?
                                        onProgress :
                                        Identity,
                                    newDefer.notifyWith
                                )
                            );
    
                            // fulfilled_handlers.add( ... )
                            tuples[ 1 ][ 3 ].add(
                                resolve(
                                    0,
                                    newDefer,
                                    jQuery.isFunction( onFulfilled ) ?
                                        onFulfilled :
                                        Identity
                                )
                            );
    
                            // rejected_handlers.add( ... )
                            tuples[ 2 ][ 3 ].add(
                                resolve(
                                    0,
                                    newDefer,
                                    jQuery.isFunction( onRejected ) ?
                                        onRejected :
                                        Thrower
                                )
                            );
                        } ).promise();
                    },
    
                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function( obj ) {
                        return obj != null ? jQuery.extend( obj, promise ) : promise;
                    }
                },
                deferred = {};
    
            // Add list-specific methods
            jQuery.each( tuples, function( i, tuple ) {
                var list = tuple[ 2 ],
                    stateString = tuple[ 5 ];
    
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[ tuple[ 1 ] ] = list.add;
    
                // Handle state
                if ( stateString ) {
                    list.add(
                        function() {
    
                            // state = "resolved" (i.e., fulfilled)
                            // state = "rejected"
                            state = stateString;
                        },
    
                        // rejected_callbacks.disable
                        // fulfilled_callbacks.disable
                        tuples[ 3 - i ][ 2 ].disable,
    
                        // progress_callbacks.lock
                        tuples[ 0 ][ 2 ].lock
                    );
                }
    
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add( tuple[ 3 ].fire );
    
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[ tuple[ 0 ] ] = function() {
                    deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
                    return this;
                };
    
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
            } );
    
            // Make the deferred a promise
            promise.promise( deferred );
    
            // Call given func if any
            if ( func ) {
                func.call( deferred, deferred );
            }
    
            // All done!
            return deferred;
        },
    
        // Deferred helper
        when: function( singleValue ) {
            var
    
                // count of uncompleted subordinates
                remaining = arguments.length,
    
                // count of unprocessed arguments
                i = remaining,
    
                // subordinate fulfillment data
                resolveContexts = Array( i ),
                resolveValues = slice.call( arguments ),
    
                // the master Deferred
                master = jQuery.Deferred(),
    
                // subordinate callback factory
                updateFunc = function( i ) {
                    return function( value ) {
                        resolveContexts[ i ] = this;
                        resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
                        if ( !( --remaining ) ) {
                            master.resolveWith( resolveContexts, resolveValues );
                        }
                    };
                };
    
            // Single- and empty arguments are adopted like Promise.resolve
            if ( remaining <= 1 ) {
                adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
    
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if ( master.state() === "pending" ||
                    jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
    
                    return master.then();
                }
            }
    
            // Multiple arguments are aggregated like Promise.all array elements
            while ( i-- ) {
                adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
            }
    
            return master.promise();
        }
    } );
    
    
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    
    jQuery.Deferred.exceptionHook = function( error, stack ) {
    
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
            window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
        }
    };
    
    
    
    
    jQuery.readyException = function( error ) {
        window.setTimeout( function() {
            throw error;
        } );
    };
    
    
    
    
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    
    jQuery.fn.ready = function( fn ) {
    
        readyList
            .then( fn )
    
            // Wrap jQuery.readyException in a function so that the lookup
            // happens at the time of error handling instead of callback
            // registration.
            .catch( function( error ) {
                jQuery.readyException( error );
            } );
    
        return this;
    };
    
    jQuery.extend( {
    
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
    
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
    
        // Hold (or release) the ready event
        holdReady: function( hold ) {
            if ( hold ) {
                jQuery.readyWait++;
            } else {
                jQuery.ready( true );
            }
        },
    
        // Handle when the DOM is ready
        ready: function( wait ) {
    
            // Abort if there are pending holds or we're already ready
            if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
                return;
            }
    
            // Remember that the DOM is ready
            jQuery.isReady = true;
    
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if ( wait !== true && --jQuery.readyWait > 0 ) {
                return;
            }
    
            // If there are functions bound, to execute
            readyList.resolveWith( document, [ jQuery ] );
        }
    } );
    
    jQuery.ready.then = readyList.then;
    
    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener( "DOMContentLoaded", completed );
        window.removeEventListener( "load", completed );
        jQuery.ready();
    }
    
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if ( document.readyState === "complete" ||
        ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
    
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout( jQuery.ready );
    
    } else {
    
        // Use the handy event callback
        document.addEventListener( "DOMContentLoaded", completed );
    
        // A fallback to window.onload, that will always work
        window.addEventListener( "load", completed );
    }
    
    
    
    
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
        var i = 0,
            len = elems.length,
            bulk = key == null;
    
        // Sets many values
        if ( jQuery.type( key ) === "object" ) {
            chainable = true;
            for ( i in key ) {
                access( elems, fn, i, key[ i ], true, emptyGet, raw );
            }
    
        // Sets one value
        } else if ( value !== undefined ) {
            chainable = true;
    
            if ( !jQuery.isFunction( value ) ) {
                raw = true;
            }
    
            if ( bulk ) {
    
                // Bulk operations run against the entire set
                if ( raw ) {
                    fn.call( elems, value );
                    fn = null;
    
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function( elem, key, value ) {
                        return bulk.call( jQuery( elem ), value );
                    };
                }
            }
    
            if ( fn ) {
                for ( ; i < len; i++ ) {
                    fn(
                        elems[ i ], key, raw ?
                        value :
                        value.call( elems[ i ], i, fn( elems[ i ], key ) )
                    );
                }
            }
        }
    
        return chainable ?
            elems :
    
            // Gets
            bulk ?
                fn.call( elems ) :
                len ? fn( elems[ 0 ], key ) : emptyGet;
    };
    var acceptData = function( owner ) {
    
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
    };
    
    
    
    
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    
    Data.uid = 1;
    
    Data.prototype = {
    
        cache: function( owner ) {
    
            // Check if the owner object already has a cache
            var value = owner[ this.expando ];
    
            // If not, create one
            if ( !value ) {
                value = {};
    
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if ( acceptData( owner ) ) {
    
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if ( owner.nodeType ) {
                        owner[ this.expando ] = value;
    
                    // Otherwise secure it in a non-enumerable property
                    // configurable must be true to allow the property to be
                    // deleted when data is removed
                    } else {
                        Object.defineProperty( owner, this.expando, {
                            value: value,
                            configurable: true
                        } );
                    }
                }
            }
    
            return value;
        },
        set: function( owner, data, value ) {
            var prop,
                cache = this.cache( owner );
    
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if ( typeof data === "string" ) {
                cache[ jQuery.camelCase( data ) ] = value;
    
            // Handle: [ owner, { properties } ] args
            } else {
    
                // Copy the properties one-by-one to the cache object
                for ( prop in data ) {
                    cache[ jQuery.camelCase( prop ) ] = data[ prop ];
                }
            }
            return cache;
        },
        get: function( owner, key ) {
            return key === undefined ?
                this.cache( owner ) :
    
                // Always use camelCase key (gh-2257)
                owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
        },
        access: function( owner, key, value ) {
    
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if ( key === undefined ||
                    ( ( key && typeof key === "string" ) && value === undefined ) ) {
    
                return this.get( owner, key );
            }
    
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set( owner, key, value );
    
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function( owner, key ) {
            var i,
                cache = owner[ this.expando ];
    
            if ( cache === undefined ) {
                return;
            }
    
            if ( key !== undefined ) {
    
                // Support array or space separated string of keys
                if ( jQuery.isArray( key ) ) {
    
                    // If key is an array of keys...
                    // We always set camelCase keys, so remove that.
                    key = key.map( jQuery.camelCase );
                } else {
                    key = jQuery.camelCase( key );
    
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ?
                        [ key ] :
                        ( key.match( rnotwhite ) || [] );
                }
    
                i = key.length;
    
                while ( i-- ) {
                    delete cache[ key[ i ] ];
                }
            }
    
            // Remove the expando if there's no more data
            if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
    
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if ( owner.nodeType ) {
                    owner[ this.expando ] = undefined;
                } else {
                    delete owner[ this.expando ];
                }
            }
        },
        hasData: function( owner ) {
            var cache = owner[ this.expando ];
            return cache !== undefined && !jQuery.isEmptyObject( cache );
        }
    };
    var dataPriv = new Data();
    
    var dataUser = new Data();
    
    
    
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;
    
    function dataAttr( elem, key, data ) {
        var name;
    
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if ( data === undefined && elem.nodeType === 1 ) {
            name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
            data = elem.getAttribute( name );
    
            if ( typeof data === "string" ) {
                try {
                    data = data === "true" ? true :
                        data === "false" ? false :
                        data === "null" ? null :
    
                        // Only convert to a number if it doesn't change the string
                        +data + "" === data ? +data :
                        rbrace.test( data ) ? JSON.parse( data ) :
                        data;
                } catch ( e ) {}
    
                // Make sure we set the data so it isn't changed later
                dataUser.set( elem, key, data );
            } else {
                data = undefined;
            }
        }
        return data;
    }
    
    jQuery.extend( {
        hasData: function( elem ) {
            return dataUser.hasData( elem ) || dataPriv.hasData( elem );
        },
    
        data: function( elem, name, data ) {
            return dataUser.access( elem, name, data );
        },
    
        removeData: function( elem, name ) {
            dataUser.remove( elem, name );
        },
    
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function( elem, name, data ) {
            return dataPriv.access( elem, name, data );
        },
    
        _removeData: function( elem, name ) {
            dataPriv.remove( elem, name );
        }
    } );
    
    jQuery.fn.extend( {
        data: function( key, value ) {
            var i, name, data,
                elem = this[ 0 ],
                attrs = elem && elem.attributes;
    
            // Gets all values
            if ( key === undefined ) {
                if ( this.length ) {
                    data = dataUser.get( elem );
    
                    if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
                        i = attrs.length;
                        while ( i-- ) {
    
                            // Support: IE 11 only
                            // The attrs elements can be null (#14894)
                            if ( attrs[ i ] ) {
                                name = attrs[ i ].name;
                                if ( name.indexOf( "data-" ) === 0 ) {
                                    name = jQuery.camelCase( name.slice( 5 ) );
                                    dataAttr( elem, name, data[ name ] );
                                }
                            }
                        }
                        dataPriv.set( elem, "hasDataAttrs", true );
                    }
                }
    
                return data;
            }
    
            // Sets multiple values
            if ( typeof key === "object" ) {
                return this.each( function() {
                    dataUser.set( this, key );
                } );
            }
    
            return access( this, function( value ) {
                var data;
    
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if ( elem && value === undefined ) {
    
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get( elem, key );
                    if ( data !== undefined ) {
                        return data;
                    }
    
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr( elem, key );
                    if ( data !== undefined ) {
                        return data;
                    }
    
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
    
                // Set the data...
                this.each( function() {
    
                    // We always store the camelCased key
                    dataUser.set( this, key, value );
                } );
            }, null, value, arguments.length > 1, null, true );
        },
    
        removeData: function( key ) {
            return this.each( function() {
                dataUser.remove( this, key );
            } );
        }
    } );
    
    
    jQuery.extend( {
        queue: function( elem, type, data ) {
            var queue;
    
            if ( elem ) {
                type = ( type || "fx" ) + "queue";
                queue = dataPriv.get( elem, type );
    
                // Speed up dequeue by getting out quickly if this is just a lookup
                if ( data ) {
                    if ( !queue || jQuery.isArray( data ) ) {
                        queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
                    } else {
                        queue.push( data );
                    }
                }
                return queue || [];
            }
        },
    
        dequeue: function( elem, type ) {
            type = type || "fx";
    
            var queue = jQuery.queue( elem, type ),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks( elem, type ),
                next = function() {
                    jQuery.dequeue( elem, type );
                };
    
            // If the fx queue is dequeued, always remove the progress sentinel
            if ( fn === "inprogress" ) {
                fn = queue.shift();
                startLength--;
            }
    
            if ( fn ) {
    
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if ( type === "fx" ) {
                    queue.unshift( "inprogress" );
                }
    
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call( elem, next, hooks );
            }
    
            if ( !startLength && hooks ) {
                hooks.empty.fire();
            }
        },
    
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function( elem, type ) {
            var key = type + "queueHooks";
            return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
                empty: jQuery.Callbacks( "once memory" ).add( function() {
                    dataPriv.remove( elem, [ type + "queue", key ] );
                } )
            } );
        }
    } );
    
    jQuery.fn.extend( {
        queue: function( type, data ) {
            var setter = 2;
    
            if ( typeof type !== "string" ) {
                data = type;
                type = "fx";
                setter--;
            }
    
            if ( arguments.length < setter ) {
                return jQuery.queue( this[ 0 ], type );
            }
    
            return data === undefined ?
                this :
                this.each( function() {
                    var queue = jQuery.queue( this, type, data );
    
                    // Ensure a hooks for this queue
                    jQuery._queueHooks( this, type );
    
                    if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
                        jQuery.dequeue( this, type );
                    }
                } );
        },
        dequeue: function( type ) {
            return this.each( function() {
                jQuery.dequeue( this, type );
            } );
        },
        clearQueue: function( type ) {
            return this.queue( type || "fx", [] );
        },
    
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function( type, obj ) {
            var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    if ( !( --count ) ) {
                        defer.resolveWith( elements, [ elements ] );
                    }
                };
    
            if ( typeof type !== "string" ) {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
    
            while ( i-- ) {
                tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
                if ( tmp && tmp.empty ) {
                    count++;
                    tmp.empty.add( resolve );
                }
            }
            resolve();
            return defer.promise( obj );
        }
    } );
    var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
    
    var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
    
    
    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
    
    var isHiddenWithinTree = function( elem, el ) {
    
            // isHiddenWithinTree might be called from jQuery#filter function;
            // in that case, element will be second argument
            elem = el || elem;
    
            // Inline style trumps all
            return elem.style.display === "none" ||
                elem.style.display === "" &&
    
                // Otherwise, check computed style
                // Support: Firefox <=43 - 45
                // Disconnected elements can have computed display: none, so first confirm that elem is
                // in the document.
                jQuery.contains( elem.ownerDocument, elem ) &&
    
                jQuery.css( elem, "display" ) === "none";
        };
    
    var swap = function( elem, options, callback, args ) {
        var ret, name,
            old = {};
    
        // Remember the old values, and insert the new ones
        for ( name in options ) {
            old[ name ] = elem.style[ name ];
            elem.style[ name ] = options[ name ];
        }
    
        ret = callback.apply( elem, args || [] );
    
        // Revert the old values
        for ( name in options ) {
            elem.style[ name ] = old[ name ];
        }
    
        return ret;
    };
    
    
    
    
    function adjustCSS( elem, prop, valueParts, tween ) {
        var adjusted,
            scale = 1,
            maxIterations = 20,
            currentValue = tween ?
                function() {
                    return tween.cur();
                } :
                function() {
                    return jQuery.css( elem, prop, "" );
                },
            initial = currentValue(),
            unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
    
            // Starting value computation is required for potential unit mismatches
            initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
                rcssNum.exec( jQuery.css( elem, prop ) );
    
        if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
    
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[ 3 ];
    
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
    
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
    
            do {
    
                // If previous iteration zeroed out, double until we get *something*.
                // Use string for doubling so we don't accidentally see scale as unchanged below
                scale = scale || ".5";
    
                // Adjust and apply
                initialInUnit = initialInUnit / scale;
                jQuery.style( elem, prop, initialInUnit + unit );
    
            // Update scale, tolerating zero or NaN from tween.cur()
            // Break the loop if scale is unchanged or perfect, or if we've just had enough.
            } while (
                scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
            );
        }
    
        if ( valueParts ) {
            initialInUnit = +initialInUnit || +initial || 0;
    
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[ 1 ] ?
                initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
                +valueParts[ 2 ];
            if ( tween ) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    
    
    var defaultDisplayMap = {};
    
    function getDefaultDisplay( elem ) {
        var temp,
            doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[ nodeName ];
    
        if ( display ) {
            return display;
        }
    
        temp = doc.body.appendChild( doc.createElement( nodeName ) ),
        display = jQuery.css( temp, "display" );
    
        temp.parentNode.removeChild( temp );
    
        if ( display === "none" ) {
            display = "block";
        }
        defaultDisplayMap[ nodeName ] = display;
    
        return display;
    }
    
    function showHide( elements, show ) {
        var display, elem,
            values = [],
            index = 0,
            length = elements.length;
    
        // Determine new display value for elements that need to change
        for ( ; index < length; index++ ) {
            elem = elements[ index ];
            if ( !elem.style ) {
                continue;
            }
    
            display = elem.style.display;
            if ( show ) {
    
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if ( display === "none" ) {
                    values[ index ] = dataPriv.get( elem, "display" ) || null;
                    if ( !values[ index ] ) {
                        elem.style.display = "";
                    }
                }
                if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
                    values[ index ] = getDefaultDisplay( elem );
                }
            } else {
                if ( display !== "none" ) {
                    values[ index ] = "none";
    
                    // Remember what we're overwriting
                    dataPriv.set( elem, "display", display );
                }
            }
        }
    
        // Set the display of the elements in a second loop to avoid constant reflow
        for ( index = 0; index < length; index++ ) {
            if ( values[ index ] != null ) {
                elements[ index ].style.display = values[ index ];
            }
        }
    
        return elements;
    }
    
    jQuery.fn.extend( {
        show: function() {
            return showHide( this, true );
        },
        hide: function() {
            return showHide( this );
        },
        toggle: function( state ) {
            if ( typeof state === "boolean" ) {
                return state ? this.show() : this.hide();
            }
    
            return this.each( function() {
                if ( isHiddenWithinTree( this ) ) {
                    jQuery( this ).show();
                } else {
                    jQuery( this ).hide();
                }
            } );
        }
    } );
    var rcheckableType = ( /^(?:checkbox|radio)$/i );
    
    var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
    
    var rscriptType = ( /^$|\/(?:java|ecma)script/i );
    
    
    
    // We have to close these tags to support XHTML (#13200)
    var wrapMap = {
    
        // Support: IE <=9 only
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
    
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    
        _default: [ 0, "", "" ]
    };
    
    // Support: IE <=9 only
    wrapMap.optgroup = wrapMap.option;
    
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    
    
    function getAll( context, tag ) {
    
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret = typeof context.getElementsByTagName !== "undefined" ?
                context.getElementsByTagName( tag || "*" ) :
                typeof context.querySelectorAll !== "undefined" ?
                    context.querySelectorAll( tag || "*" ) :
                [];
    
        return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
            jQuery.merge( [ context ], ret ) :
            ret;
    }
    
    
    // Mark scripts as having already been evaluated
    function setGlobalEval( elems, refElements ) {
        var i = 0,
            l = elems.length;
    
        for ( ; i < l; i++ ) {
            dataPriv.set(
                elems[ i ],
                "globalEval",
                !refElements || dataPriv.get( refElements[ i ], "globalEval" )
            );
        }
    }
    
    
    var rhtml = /<|&#?\w+;/;
    
    function buildFragment( elems, context, scripts, selection, ignored ) {
        var elem, tmp, tag, wrap, contains, j,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;
    
        for ( ; i < l; i++ ) {
            elem = elems[ i ];
    
            if ( elem || elem === 0 ) {
    
                // Add nodes directly
                if ( jQuery.type( elem ) === "object" ) {
    
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
    
                // Convert non-html into a text node
                } else if ( !rhtml.test( elem ) ) {
                    nodes.push( context.createTextNode( elem ) );
    
                // Convert html into DOM nodes
                } else {
                    tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
    
                    // Deserialize a standard representation
                    tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
                    wrap = wrapMap[ tag ] || wrapMap._default;
                    tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
    
                    // Descend through wrappers to the right content
                    j = wrap[ 0 ];
                    while ( j-- ) {
                        tmp = tmp.lastChild;
                    }
    
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge( nodes, tmp.childNodes );
    
                    // Remember the top-level container
                    tmp = fragment.firstChild;
    
                    // Ensure the created nodes are orphaned (#12392)
                    tmp.textContent = "";
                }
            }
        }
    
        // Remove wrapper from fragment
        fragment.textContent = "";
    
        i = 0;
        while ( ( elem = nodes[ i++ ] ) ) {
    
            // Skip elements already in the context collection (trac-4087)
            if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
                if ( ignored ) {
                    ignored.push( elem );
                }
                continue;
            }
    
            contains = jQuery.contains( elem.ownerDocument, elem );
    
            // Append to fragment
            tmp = getAll( fragment.appendChild( elem ), "script" );
    
            // Preserve script evaluation history
            if ( contains ) {
                setGlobalEval( tmp );
            }
    
            // Capture executables
            if ( scripts ) {
                j = 0;
                while ( ( elem = tmp[ j++ ] ) ) {
                    if ( rscriptType.test( elem.type || "" ) ) {
                        scripts.push( elem );
                    }
                }
            }
        }
    
        return fragment;
    }
    
    
    ( function() {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild( document.createElement( "div" ) ),
            input = document.createElement( "input" );
    
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute( "type", "radio" );
        input.setAttribute( "checked", "checked" );
        input.setAttribute( "name", "t" );
    
        div.appendChild( input );
    
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
    
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
    } )();
    var documentElement = document.documentElement;
    
    
    
    var
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    
    function returnTrue() {
        return true;
    }
    
    function returnFalse() {
        return false;
    }
    
    // Support: IE <=9 only
    // See #13393 for more info
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch ( err ) { }
    }
    
    function on( elem, types, selector, data, fn, one ) {
        var origFn, type;
    
        // Types can be a map of types/handlers
        if ( typeof types === "object" ) {
    
            // ( types-Object, selector, data )
            if ( typeof selector !== "string" ) {
    
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for ( type in types ) {
                on( elem, type, selector, data, types[ type ], one );
            }
            return elem;
        }
    
        if ( data == null && fn == null ) {
    
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if ( fn == null ) {
            if ( typeof selector === "string" ) {
    
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
    
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if ( fn === false ) {
            fn = returnFalse;
        } else if ( !fn ) {
            return elem;
        }
    
        if ( one === 1 ) {
            origFn = fn;
            fn = function( event ) {
    
                // Can use an empty set, since event contains the info
                jQuery().off( event );
                return origFn.apply( this, arguments );
            };
    
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
        }
        return elem.each( function() {
            jQuery.event.add( this, types, fn, data, selector );
        } );
    }
    
    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */
    jQuery.event = {
    
        global: {},
    
        add: function( elem, types, handler, data, selector ) {
    
            var handleObjIn, eventHandle, tmp,
                events, t, handleObj,
                special, handlers, type, namespaces, origType,
                elemData = dataPriv.get( elem );
    
            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if ( !elemData ) {
                return;
            }
    
            // Caller can pass in an object of custom data in lieu of the handler
            if ( handler.handler ) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
    
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if ( selector ) {
                jQuery.find.matchesSelector( documentElement, selector );
            }
    
            // Make sure that the handler has a unique ID, used to find/remove it later
            if ( !handler.guid ) {
                handler.guid = jQuery.guid++;
            }
    
            // Init the element's event structure and main handler, if this is the first
            if ( !( events = elemData.events ) ) {
                events = elemData.events = {};
            }
            if ( !( eventHandle = elemData.handle ) ) {
                eventHandle = elemData.handle = function( e ) {
    
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                        jQuery.event.dispatch.apply( elem, arguments ) : undefined;
                };
            }
    
            // Handle multiple events separated by a space
            types = ( types || "" ).match( rnotwhite ) || [ "" ];
            t = types.length;
            while ( t-- ) {
                tmp = rtypenamespace.exec( types[ t ] ) || [];
                type = origType = tmp[ 1 ];
                namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
    
                // There *must* be a type, no attaching namespace-only handlers
                if ( !type ) {
                    continue;
                }
    
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[ type ] || {};
    
                // If selector defined, determine special event api type, otherwise given type
                type = ( selector ? special.delegateType : special.bindType ) || type;
    
                // Update special based on newly reset type
                special = jQuery.event.special[ type ] || {};
    
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend( {
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                    namespace: namespaces.join( "." )
                }, handleObjIn );
    
                // Init the event handler queue if we're the first
                if ( !( handlers = events[ type ] ) ) {
                    handlers = events[ type ] = [];
                    handlers.delegateCount = 0;
    
                    // Only use addEventListener if the special events handler returns false
                    if ( !special.setup ||
                        special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
    
                        if ( elem.addEventListener ) {
                            elem.addEventListener( type, eventHandle );
                        }
                    }
                }
    
                if ( special.add ) {
                    special.add.call( elem, handleObj );
    
                    if ( !handleObj.handler.guid ) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
    
                // Add to the element's handler list, delegates in front
                if ( selector ) {
                    handlers.splice( handlers.delegateCount++, 0, handleObj );
                } else {
                    handlers.push( handleObj );
                }
    
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[ type ] = true;
            }
    
        },
    
        // Detach an event or set of events from an element
        remove: function( elem, types, handler, selector, mappedTypes ) {
    
            var j, origCount, tmp,
                events, t, handleObj,
                special, handlers, type, namespaces, origType,
                elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
    
            if ( !elemData || !( events = elemData.events ) ) {
                return;
            }
    
            // Once for each type.namespace in types; type may be omitted
            types = ( types || "" ).match( rnotwhite ) || [ "" ];
            t = types.length;
            while ( t-- ) {
                tmp = rtypenamespace.exec( types[ t ] ) || [];
                type = origType = tmp[ 1 ];
                namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
    
                // Unbind all events (on this namespace, if provided) for the element
                if ( !type ) {
                    for ( type in events ) {
                        jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                    }
                    continue;
                }
    
                special = jQuery.event.special[ type ] || {};
                type = ( selector ? special.delegateType : special.bindType ) || type;
                handlers = events[ type ] || [];
                tmp = tmp[ 2 ] &&
                    new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
    
                // Remove matching events
                origCount = j = handlers.length;
                while ( j-- ) {
                    handleObj = handlers[ j ];
    
                    if ( ( mappedTypes || origType === handleObj.origType ) &&
                        ( !handler || handler.guid === handleObj.guid ) &&
                        ( !tmp || tmp.test( handleObj.namespace ) ) &&
                        ( !selector || selector === handleObj.selector ||
                            selector === "**" && handleObj.selector ) ) {
                        handlers.splice( j, 1 );
    
                        if ( handleObj.selector ) {
                            handlers.delegateCount--;
                        }
                        if ( special.remove ) {
                            special.remove.call( elem, handleObj );
                        }
                    }
                }
    
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if ( origCount && !handlers.length ) {
                    if ( !special.teardown ||
                        special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
    
                        jQuery.removeEvent( elem, type, elemData.handle );
                    }
    
                    delete events[ type ];
                }
            }
    
            // Remove data and the expando if it's no longer used
            if ( jQuery.isEmptyObject( events ) ) {
                dataPriv.remove( elem, "handle events" );
            }
        },
    
        dispatch: function( nativeEvent ) {
    
            // Make a writable jQuery.Event from the native event object
            var event = jQuery.event.fix( nativeEvent );
    
            var i, j, ret, matched, handleObj, handlerQueue,
                args = new Array( arguments.length ),
                handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
                special = jQuery.event.special[ event.type ] || {};
    
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[ 0 ] = event;
    
            for ( i = 1; i < arguments.length; i++ ) {
                args[ i ] = arguments[ i ];
            }
    
            event.delegateTarget = this;
    
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
                return;
            }
    
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call( this, event, handlers );
    
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
                event.currentTarget = matched.elem;
    
                j = 0;
                while ( ( handleObj = matched.handlers[ j++ ] ) &&
                    !event.isImmediatePropagationStopped() ) {
    
                    // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                    // a subset or equal to those in the bound event (both can have no namespace).
                    if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
    
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
    
                        ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
                            handleObj.handler ).apply( matched.elem, args );
    
                        if ( ret !== undefined ) {
                            if ( ( event.result = ret ) === false ) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
    
            // Call the postDispatch hook for the mapped type
            if ( special.postDispatch ) {
                special.postDispatch.call( this, event );
            }
    
            return event.result;
        },
    
        handlers: function( event, handlers ) {
            var i, matches, sel, handleObj,
                handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;
    
            // Support: IE <=9
            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            //
            // Support: Firefox <=42
            // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
            if ( delegateCount && cur.nodeType &&
                ( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
    
                for ( ; cur !== this; cur = cur.parentNode || this ) {
    
                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
                        matches = [];
                        for ( i = 0; i < delegateCount; i++ ) {
                            handleObj = handlers[ i ];
    
                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";
    
                            if ( matches[ sel ] === undefined ) {
                                matches[ sel ] = handleObj.needsContext ?
                                    jQuery( sel, this ).index( cur ) > -1 :
                                    jQuery.find( sel, this, null, [ cur ] ).length;
                            }
                            if ( matches[ sel ] ) {
                                matches.push( handleObj );
                            }
                        }
                        if ( matches.length ) {
                            handlerQueue.push( { elem: cur, handlers: matches } );
                        }
                    }
                }
            }
    
            // Add the remaining (directly-bound) handlers
            if ( delegateCount < handlers.length ) {
                handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
            }
    
            return handlerQueue;
        },
    
        addProp: function( name, hook ) {
            Object.defineProperty( jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
    
                get: jQuery.isFunction( hook ) ?
                    function() {
                        if ( this.originalEvent ) {
                                return hook( this.originalEvent );
                        }
                    } :
                    function() {
                        if ( this.originalEvent ) {
                                return this.originalEvent[ name ];
                        }
                    },
    
                set: function( value ) {
                    Object.defineProperty( this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    } );
                }
            } );
        },
    
        fix: function( originalEvent ) {
            return originalEvent[ jQuery.expando ] ?
                originalEvent :
                new jQuery.Event( originalEvent );
        },
    
        special: {
            load: {
    
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: {
    
                // Fire native event if possible so blur/focus sequence is correct
                trigger: function() {
                    if ( this !== safeActiveElement() && this.focus ) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if ( this === safeActiveElement() && this.blur ) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
    
                // For checkbox, fire native event so checked state will be right
                trigger: function() {
                    if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
                        this.click();
                        return false;
                    }
                },
    
                // For cross-browser consistency, don't fire native .click() on links
                _default: function( event ) {
                    return jQuery.nodeName( event.target, "a" );
                }
            },
    
            beforeunload: {
                postDispatch: function( event ) {
    
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if ( event.result !== undefined && event.originalEvent ) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        }
    };
    
    jQuery.removeEvent = function( elem, type, handle ) {
    
        // This "if" is needed for plain objects
        if ( elem.removeEventListener ) {
            elem.removeEventListener( type, handle );
        }
    };
    
    jQuery.Event = function( src, props ) {
    
        // Allow instantiation without the 'new' keyword
        if ( !( this instanceof jQuery.Event ) ) {
            return new jQuery.Event( src, props );
        }
    
        // Event object
        if ( src && src.type ) {
            this.originalEvent = src;
            this.type = src.type;
    
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented ||
                    src.defaultPrevented === undefined &&
    
                    // Support: Android <=2.3 only
                    src.returnValue === false ?
                returnTrue :
                returnFalse;
    
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (#504, #13143)
            this.target = ( src.target && src.target.nodeType === 3 ) ?
                src.target.parentNode :
                src.target;
    
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
    
        // Event type
        } else {
            this.type = src;
        }
    
        // Put explicitly provided properties onto the event object
        if ( props ) {
            jQuery.extend( this, props );
        }
    
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();
    
        // Mark it as fixed
        this[ jQuery.expando ] = true;
    };
    
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
    
        preventDefault: function() {
            var e = this.originalEvent;
    
            this.isDefaultPrevented = returnTrue;
    
            if ( e && !this.isSimulated ) {
                e.preventDefault();
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
    
            this.isPropagationStopped = returnTrue;
    
            if ( e && !this.isSimulated ) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
    
            this.isImmediatePropagationStopped = returnTrue;
    
            if ( e && !this.isSimulated ) {
                e.stopImmediatePropagation();
            }
    
            this.stopPropagation();
        }
    };
    
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each( {
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
    
        which: function( event ) {
            var button = event.button;
    
            // Add which for key events
            if ( event.which == null && rkeyEvent.test( event.type ) ) {
                return event.charCode != null ? event.charCode : event.keyCode;
            }
    
            // Add which for click: 1 === left; 2 === middle; 3 === right
            if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
                return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
            }
    
            return event.which;
        }
    }, jQuery.event.addProp );
    
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each( {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function( orig, fix ) {
        jQuery.event.special[ orig ] = {
            delegateType: fix,
            bindType: fix,
    
            handle: function( event ) {
                var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;
    
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply( this, arguments );
                    event.type = fix;
                }
                return ret;
            }
        };
    } );
    
    jQuery.fn.extend( {
    
        on: function( types, selector, data, fn ) {
            return on( this, types, selector, data, fn );
        },
        one: function( types, selector, data, fn ) {
            return on( this, types, selector, data, fn, 1 );
        },
        off: function( types, selector, fn ) {
            var handleObj, type;
            if ( types && types.preventDefault && types.handleObj ) {
    
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery( types.delegateTarget ).off(
                    handleObj.namespace ?
                        handleObj.origType + "." + handleObj.namespace :
                        handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                );
                return this;
            }
            if ( typeof types === "object" ) {
    
                // ( types-object [, selector] )
                for ( type in types ) {
                    this.off( type, selector, types[ type ] );
                }
                return this;
            }
            if ( selector === false || typeof selector === "function" ) {
    
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if ( fn === false ) {
                fn = returnFalse;
            }
            return this.each( function() {
                jQuery.event.remove( this, types, fn, selector );
            } );
        }
    } );
    
    
    var
    
        /* eslint-disable max-len */
    
        // See https://github.com/eslint/eslint/issues/3229
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    
        /* eslint-enable */
    
        // Support: IE <=10 - 11, Edge 12 - 13
        // In IE/Edge using regex groups here causes severe slowdowns.
        // See https://connect.microsoft.com/IE/feedback/details/1736512/
        rnoInnerhtml = /<script|<style|<link/i,
    
        // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    
    function manipulationTarget( elem, content ) {
        if ( jQuery.nodeName( elem, "table" ) &&
            jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
    
            return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
        }
    
        return elem;
    }
    
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript( elem ) {
        elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
        return elem;
    }
    function restoreScript( elem ) {
        var match = rscriptTypeMasked.exec( elem.type );
    
        if ( match ) {
            elem.type = match[ 1 ];
        } else {
            elem.removeAttribute( "type" );
        }
    
        return elem;
    }
    
    function cloneCopyEvent( src, dest ) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
    
        if ( dest.nodeType !== 1 ) {
            return;
        }
    
        // 1. Copy private data: events, handlers, etc.
        if ( dataPriv.hasData( src ) ) {
            pdataOld = dataPriv.access( src );
            pdataCur = dataPriv.set( dest, pdataOld );
            events = pdataOld.events;
    
            if ( events ) {
                delete pdataCur.handle;
                pdataCur.events = {};
    
                for ( type in events ) {
                    for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                        jQuery.event.add( dest, type, events[ type ][ i ] );
                    }
                }
            }
        }
    
        // 2. Copy user data
        if ( dataUser.hasData( src ) ) {
            udataOld = dataUser.access( src );
            udataCur = jQuery.extend( {}, udataOld );
    
            dataUser.set( dest, udataCur );
        }
    }
    
    // Fix IE bugs, see support tests
    function fixInput( src, dest ) {
        var nodeName = dest.nodeName.toLowerCase();
    
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
            dest.checked = src.checked;
    
        // Fails to return the selected option to the default selected state when cloning options
        } else if ( nodeName === "input" || nodeName === "textarea" ) {
            dest.defaultValue = src.defaultValue;
        }
    }
    
    function domManip( collection, args, callback, ignored ) {
    
        // Flatten any nested arrays
        args = concat.apply( [], args );
    
        var fragment, first, scripts, hasScripts, node, doc,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[ 0 ],
            isFunction = jQuery.isFunction( value );
    
        // We can't cloneNode fragments that contain checked, in WebKit
        if ( isFunction ||
                ( l > 1 && typeof value === "string" &&
                    !support.checkClone && rchecked.test( value ) ) ) {
            return collection.each( function( index ) {
                var self = collection.eq( index );
                if ( isFunction ) {
                    args[ 0 ] = value.call( this, index, self.html() );
                }
                domManip( self, args, callback, ignored );
            } );
        }
    
        if ( l ) {
            fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
            first = fragment.firstChild;
    
            if ( fragment.childNodes.length === 1 ) {
                fragment = first;
            }
    
            // Require either new content or an interest in ignored elements to invoke the callback
            if ( first || ignored ) {
                scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
                hasScripts = scripts.length;
    
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for ( ; i < l; i++ ) {
                    node = fragment;
    
                    if ( i !== iNoClone ) {
                        node = jQuery.clone( node, true, true );
    
                        // Keep references to cloned scripts for later restoration
                        if ( hasScripts ) {
    
                            // Support: Android <=4.0 only, PhantomJS 1 only
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge( scripts, getAll( node, "script" ) );
                        }
                    }
    
                    callback.call( collection[ i ], node, i );
                }
    
                if ( hasScripts ) {
                    doc = scripts[ scripts.length - 1 ].ownerDocument;
    
                    // Reenable scripts
                    jQuery.map( scripts, restoreScript );
    
                    // Evaluate executable scripts on first document insertion
                    for ( i = 0; i < hasScripts; i++ ) {
                        node = scripts[ i ];
                        if ( rscriptType.test( node.type || "" ) &&
                            !dataPriv.access( node, "globalEval" ) &&
                            jQuery.contains( doc, node ) ) {
    
                            if ( node.src ) {
    
                                // Optional AJAX dependency, but won't run scripts if not present
                                if ( jQuery._evalUrl ) {
                                    jQuery._evalUrl( node.src );
                                }
                            } else {
                                DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
                            }
                        }
                    }
                }
            }
        }
    
        return collection;
    }
    
    function remove( elem, selector, keepData ) {
        var node,
            nodes = selector ? jQuery.filter( selector, elem ) : elem,
            i = 0;
    
        for ( ; ( node = nodes[ i ] ) != null; i++ ) {
            if ( !keepData && node.nodeType === 1 ) {
                jQuery.cleanData( getAll( node ) );
            }
    
            if ( node.parentNode ) {
                if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
                    setGlobalEval( getAll( node, "script" ) );
                }
                node.parentNode.removeChild( node );
            }
        }
    
        return elem;
    }
    
    jQuery.extend( {
        htmlPrefilter: function( html ) {
            return html.replace( rxhtmlTag, "<$1></$2>" );
        },
    
        clone: function( elem, dataAndEvents, deepDataAndEvents ) {
            var i, l, srcElements, destElements,
                clone = elem.cloneNode( true ),
                inPage = jQuery.contains( elem.ownerDocument, elem );
    
            // Fix IE cloning issues
            if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
                    !jQuery.isXMLDoc( elem ) ) {
    
                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll( clone );
                srcElements = getAll( elem );
    
                for ( i = 0, l = srcElements.length; i < l; i++ ) {
                    fixInput( srcElements[ i ], destElements[ i ] );
                }
            }
    
            // Copy the events from the original to the clone
            if ( dataAndEvents ) {
                if ( deepDataAndEvents ) {
                    srcElements = srcElements || getAll( elem );
                    destElements = destElements || getAll( clone );
    
                    for ( i = 0, l = srcElements.length; i < l; i++ ) {
                        cloneCopyEvent( srcElements[ i ], destElements[ i ] );
                    }
                } else {
                    cloneCopyEvent( elem, clone );
                }
            }
    
            // Preserve script evaluation history
            destElements = getAll( clone, "script" );
            if ( destElements.length > 0 ) {
                setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
            }
    
            // Return the cloned set
            return clone;
        },
    
        cleanData: function( elems ) {
            var data, elem, type,
                special = jQuery.event.special,
                i = 0;
    
            for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
                if ( acceptData( elem ) ) {
                    if ( ( data = elem[ dataPriv.expando ] ) ) {
                        if ( data.events ) {
                            for ( type in data.events ) {
                                if ( special[ type ] ) {
                                    jQuery.event.remove( elem, type );
    
                                // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent( elem, type, data.handle );
                                }
                            }
                        }
    
                        // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[ dataPriv.expando ] = undefined;
                    }
                    if ( elem[ dataUser.expando ] ) {
    
                        // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[ dataUser.expando ] = undefined;
                    }
                }
            }
        }
    } );
    
    jQuery.fn.extend( {
        detach: function( selector ) {
            return remove( this, selector, true );
        },
    
        remove: function( selector ) {
            return remove( this, selector );
        },
    
        text: function( value ) {
            return access( this, function( value ) {
                return value === undefined ?
                    jQuery.text( this ) :
                    this.empty().each( function() {
                        if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                            this.textContent = value;
                        }
                    } );
            }, null, value, arguments.length );
        },
    
        append: function() {
            return domManip( this, arguments, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                    var target = manipulationTarget( this, elem );
                    target.appendChild( elem );
                }
            } );
        },
    
        prepend: function() {
            return domManip( this, arguments, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                    var target = manipulationTarget( this, elem );
                    target.insertBefore( elem, target.firstChild );
                }
            } );
        },
    
        before: function() {
            return domManip( this, arguments, function( elem ) {
                if ( this.parentNode ) {
                    this.parentNode.insertBefore( elem, this );
                }
            } );
        },
    
        after: function() {
            return domManip( this, arguments, function( elem ) {
                if ( this.parentNode ) {
                    this.parentNode.insertBefore( elem, this.nextSibling );
                }
            } );
        },
    
        empty: function() {
            var elem,
                i = 0;
    
            for ( ; ( elem = this[ i ] ) != null; i++ ) {
                if ( elem.nodeType === 1 ) {
    
                    // Prevent memory leaks
                    jQuery.cleanData( getAll( elem, false ) );
    
                    // Remove any remaining nodes
                    elem.textContent = "";
                }
            }
    
            return this;
        },
    
        clone: function( dataAndEvents, deepDataAndEvents ) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
    
            return this.map( function() {
                return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
            } );
        },
    
        html: function( value ) {
            return access( this, function( value ) {
                var elem = this[ 0 ] || {},
                    i = 0,
                    l = this.length;
    
                if ( value === undefined && elem.nodeType === 1 ) {
                    return elem.innerHTML;
                }
    
                // See if we can take a shortcut and just use innerHTML
                if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                    !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
    
                    value = jQuery.htmlPrefilter( value );
    
                    try {
                        for ( ; i < l; i++ ) {
                            elem = this[ i ] || {};
    
                            // Remove element nodes and prevent memory leaks
                            if ( elem.nodeType === 1 ) {
                                jQuery.cleanData( getAll( elem, false ) );
                                elem.innerHTML = value;
                            }
                        }
    
                        elem = 0;
    
                    // If using innerHTML throws an exception, use the fallback method
                    } catch ( e ) {}
                }
    
                if ( elem ) {
                    this.empty().append( value );
                }
            }, null, value, arguments.length );
        },
    
        replaceWith: function() {
            var ignored = [];
    
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip( this, arguments, function( elem ) {
                var parent = this.parentNode;
    
                if ( jQuery.inArray( this, ignored ) < 0 ) {
                    jQuery.cleanData( getAll( this ) );
                    if ( parent ) {
                        parent.replaceChild( elem, this );
                    }
                }
    
            // Force callback invocation
            }, ignored );
        }
    } );
    
    jQuery.each( {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function( name, original ) {
        jQuery.fn[ name ] = function( selector ) {
            var elems,
                ret = [],
                insert = jQuery( selector ),
                last = insert.length - 1,
                i = 0;
    
            for ( ; i <= last; i++ ) {
                elems = i === last ? this : this.clone( true );
                jQuery( insert[ i ] )[ original ]( elems );
    
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply( ret, elems.get() );
            }
    
            return this.pushStack( ret );
        };
    } );
    var rmargin = ( /^margin/ );
    
    var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
    
    var getStyles = function( elem ) {
    
            // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            var view = elem.ownerDocument.defaultView;
    
            if ( !view || !view.opener ) {
                view = window;
            }
    
            return view.getComputedStyle( elem );
        };
    
    
    
    ( function() {
    
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
    
            // This is a singleton, we need to execute it only once
            if ( !div ) {
                return;
            }
    
            div.style.cssText =
                "box-sizing:border-box;" +
                "position:relative;display:block;" +
                "margin:auto;border:1px;padding:1px;" +
                "top:1%;width:50%";
            div.innerHTML = "";
            documentElement.appendChild( container );
    
            var divStyle = window.getComputedStyle( div );
            pixelPositionVal = divStyle.top !== "1%";
    
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = divStyle.marginLeft === "2px";
            boxSizingReliableVal = divStyle.width === "4px";
    
            // Support: Android 4.0 - 4.3 only
            // Some styles come back with percentage values, even though they shouldn't
            div.style.marginRight = "50%";
            pixelMarginRightVal = divStyle.marginRight === "4px";
    
            documentElement.removeChild( container );
    
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
    
        var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
            container = document.createElement( "div" ),
            div = document.createElement( "div" );
    
        // Finish early in limited (non-browser) environments
        if ( !div.style ) {
            return;
        }
    
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode( true ).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
    
        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
            "padding:0;margin-top:1px;position:absolute";
        container.appendChild( div );
    
        jQuery.extend( support, {
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelMarginRight: function() {
                computeStyleTests();
                return pixelMarginRightVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            }
        } );
    } )();
    
    
    function curCSS( elem, name, computed ) {
        var width, minWidth, maxWidth, ret,
            style = elem.style;
    
        computed = computed || getStyles( elem );
    
        // Support: IE <=9 only
        // getPropertyValue is only needed for .css('filter') (#12537)
        if ( computed ) {
            ret = computed.getPropertyValue( name ) || computed[ name ];
    
            if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
                ret = jQuery.style( elem, name );
            }
    
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
    
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
    
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
    
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
    
        return ret !== undefined ?
    
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + "" :
            ret;
    }
    
    
    function addGetHookIf( conditionFn, hookFn ) {
    
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if ( conditionFn() ) {
    
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
    
                // Hook needed; redefine it so that the support test is not executed again.
                return ( this.get = hookFn ).apply( this, arguments );
            }
        };
    }
    
    
    var
    
        // Swappable if display is none or starts with table
        // except "table", "table-cell", or "table-caption"
        // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },
    
        cssPrefixes = [ "Webkit", "Moz", "ms" ],
        emptyStyle = document.createElement( "div" ).style;
    
    // Return a css property mapped to a potentially vendor prefixed property
    function vendorPropName( name ) {
    
        // Shortcut for names that are not vendor prefixed
        if ( name in emptyStyle ) {
            return name;
        }
    
        // Check for vendor prefixed names
        var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
            i = cssPrefixes.length;
    
        while ( i-- ) {
            name = cssPrefixes[ i ] + capName;
            if ( name in emptyStyle ) {
                return name;
            }
        }
    }
    
    function setPositiveNumber( elem, value, subtract ) {
    
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec( value );
        return matches ?
    
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
            value;
    }
    
    function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
        var i = extra === ( isBorderBox ? "border" : "content" ) ?
    
            // If we already have the right measurement, avoid augmentation
            4 :
    
            // Otherwise initialize for horizontal or vertical properties
            name === "width" ? 1 : 0,
    
            val = 0;
    
        for ( ; i < 4; i += 2 ) {
    
            // Both box models exclude margin, so add it if we want it
            if ( extra === "margin" ) {
                val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
            }
    
            if ( isBorderBox ) {
    
                // border-box includes padding, so remove it if we want content
                if ( extra === "content" ) {
                    val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
                }
    
                // At this point, extra isn't border nor margin, so remove border
                if ( extra !== "margin" ) {
                    val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                }
            } else {
    
                // At this point, extra isn't content, so add padding
                val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
    
                // At this point, extra isn't content nor padding, so add border
                if ( extra !== "padding" ) {
                    val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                }
            }
        }
    
        return val;
    }
    
    function getWidthOrHeight( elem, name, extra ) {
    
        // Start with offset property, which is equivalent to the border-box value
        var val,
            valueIsBorderBox = true,
            styles = getStyles( elem ),
            isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
    
        // Support: IE <=11 only
        // Running getBoundingClientRect on a disconnected node
        // in IE throws an error.
        if ( elem.getClientRects().length ) {
            val = elem.getBoundingClientRect()[ name ];
        }
    
        // Some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if ( val <= 0 || val == null ) {
    
            // Fall back to computed then uncomputed css if necessary
            val = curCSS( elem, name, styles );
            if ( val < 0 || val == null ) {
                val = elem.style[ name ];
            }
    
            // Computed unit is not pixels. Stop here and return.
            if ( rnumnonpx.test( val ) ) {
                return val;
            }
    
            // Check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            valueIsBorderBox = isBorderBox &&
                ( support.boxSizingReliable() || val === elem.style[ name ] );
    
            // Normalize "", auto, and prepare for extra
            val = parseFloat( val ) || 0;
        }
    
        // Use the active box-sizing model to add/subtract irrelevant styles
        return ( val +
            augmentWidthOrHeight(
                elem,
                name,
                extra || ( isBorderBox ? "border" : "content" ),
                valueIsBorderBox,
                styles
            )
        ) + "px";
    }
    
    jQuery.extend( {
    
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function( elem, computed ) {
                    if ( computed ) {
    
                        // We should always get a number back from opacity
                        var ret = curCSS( elem, "opacity" );
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
    
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },
    
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            "float": "cssFloat"
        },
    
        // Get and set the style property on a DOM Node
        style: function( elem, name, value, extra ) {
    
            // Don't set styles on text and comment nodes
            if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
                return;
            }
    
            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = jQuery.camelCase( name ),
                style = elem.style;
    
            name = jQuery.cssProps[ origName ] ||
                ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
    
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
    
            // Check if we're setting a value
            if ( value !== undefined ) {
                type = typeof value;
    
                // Convert "+=" or "-=" to relative numbers (#7345)
                if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
                    value = adjustCSS( elem, name, ret );
    
                    // Fixes bug #9237
                    type = "number";
                }
    
                // Make sure that null and NaN values aren't set (#7116)
                if ( value == null || value !== value ) {
                    return;
                }
    
                // If a number was passed in, add the unit (except for certain CSS properties)
                if ( type === "number" ) {
                    value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
                }
    
                // background-* props affect original clone's values
                if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
                    style[ name ] = "inherit";
                }
    
                // If a hook was provided, use that value, otherwise just set the specified value
                if ( !hooks || !( "set" in hooks ) ||
                    ( value = hooks.set( elem, value, extra ) ) !== undefined ) {
    
                    style[ name ] = value;
                }
    
            } else {
    
                // If a hook was provided get the non-computed value from there
                if ( hooks && "get" in hooks &&
                    ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
    
                    return ret;
                }
    
                // Otherwise just get the value from the style object
                return style[ name ];
            }
        },
    
        css: function( elem, name, extra, styles ) {
            var val, num, hooks,
                origName = jQuery.camelCase( name );
    
            // Make sure that we're working with the right name
            name = jQuery.cssProps[ origName ] ||
                ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
    
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
    
            // If a hook was provided get the computed value from there
            if ( hooks && "get" in hooks ) {
                val = hooks.get( elem, true, extra );
            }
    
            // Otherwise, if a way to get the computed value exists, use that
            if ( val === undefined ) {
                val = curCSS( elem, name, styles );
            }
    
            // Convert "normal" to computed value
            if ( val === "normal" && name in cssNormalTransform ) {
                val = cssNormalTransform[ name ];
            }
    
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if ( extra === "" || extra ) {
                num = parseFloat( val );
                return extra === true || isFinite( num ) ? num || 0 : val;
            }
            return val;
        }
    } );
    
    jQuery.each( [ "height", "width" ], function( i, name ) {
        jQuery.cssHooks[ name ] = {
            get: function( elem, computed, extra ) {
                if ( computed ) {
    
                    // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
    
                        // Support: Safari 8+
                        // Table columns in Safari have non-zero offsetWidth & zero
                        // getBoundingClientRect().width unless display is changed.
                        // Support: IE <=11 only
                        // Running getBoundingClientRect on a disconnected node
                        // in IE throws an error.
                        ( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
                            swap( elem, cssShow, function() {
                                return getWidthOrHeight( elem, name, extra );
                            } ) :
                            getWidthOrHeight( elem, name, extra );
                }
            },
    
            set: function( elem, value, extra ) {
                var matches,
                    styles = extra && getStyles( elem ),
                    subtract = extra && augmentWidthOrHeight(
                        elem,
                        name,
                        extra,
                        jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
                        styles
                    );
    
                // Convert to pixels if value adjustment is needed
                if ( subtract && ( matches = rcssNum.exec( value ) ) &&
                    ( matches[ 3 ] || "px" ) !== "px" ) {
    
                    elem.style[ name ] = value;
                    value = jQuery.css( elem, name );
                }
    
                return setPositiveNumber( elem, value, subtract );
            }
        };
    } );
    
    jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
        function( elem, computed ) {
            if ( computed ) {
                return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
                    elem.getBoundingClientRect().left -
                        swap( elem, { marginLeft: 0 }, function() {
                            return elem.getBoundingClientRect().left;
                        } )
                    ) + "px";
            }
        }
    );
    
    // These hooks are used by animate to expand properties
    jQuery.each( {
        margin: "",
        padding: "",
        border: "Width"
    }, function( prefix, suffix ) {
        jQuery.cssHooks[ prefix + suffix ] = {
            expand: function( value ) {
                var i = 0,
                    expanded = {},
    
                    // Assumes a single number if not a string
                    parts = typeof value === "string" ? value.split( " " ) : [ value ];
    
                for ( ; i < 4; i++ ) {
                    expanded[ prefix + cssExpand[ i ] + suffix ] =
                        parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
                }
    
                return expanded;
            }
        };
    
        if ( !rmargin.test( prefix ) ) {
            jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
        }
    } );
    
    jQuery.fn.extend( {
        css: function( name, value ) {
            return access( this, function( elem, name, value ) {
                var styles, len,
                    map = {},
                    i = 0;
    
                if ( jQuery.isArray( name ) ) {
                    styles = getStyles( elem );
                    len = name.length;
    
                    for ( ; i < len; i++ ) {
                        map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                    }
    
                    return map;
                }
    
                return value !== undefined ?
                    jQuery.style( elem, name, value ) :
                    jQuery.css( elem, name );
            }, name, value, arguments.length > 1 );
        }
    } );
    
    
    function Tween( elem, options, prop, end, easing ) {
        return new Tween.prototype.init( elem, options, prop, end, easing );
    }
    jQuery.Tween = Tween;
    
    Tween.prototype = {
        constructor: Tween,
        init: function( elem, options, prop, end, easing, unit ) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
        },
        cur: function() {
            var hooks = Tween.propHooks[ this.prop ];
    
            return hooks && hooks.get ?
                hooks.get( this ) :
                Tween.propHooks._default.get( this );
        },
        run: function( percent ) {
            var eased,
                hooks = Tween.propHooks[ this.prop ];
    
            if ( this.options.duration ) {
                this.pos = eased = jQuery.easing[ this.easing ](
                    percent, this.options.duration * percent, 0, 1, this.options.duration
                );
            } else {
                this.pos = eased = percent;
            }
            this.now = ( this.end - this.start ) * eased + this.start;
    
            if ( this.options.step ) {
                this.options.step.call( this.elem, this.now, this );
            }
    
            if ( hooks && hooks.set ) {
                hooks.set( this );
            } else {
                Tween.propHooks._default.set( this );
            }
            return this;
        }
    };
    
    Tween.prototype.init.prototype = Tween.prototype;
    
    Tween.propHooks = {
        _default: {
            get: function( tween ) {
                var result;
    
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if ( tween.elem.nodeType !== 1 ||
                    tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
                    return tween.elem[ tween.prop ];
                }
    
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css( tween.elem, tween.prop, "" );
    
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function( tween ) {
    
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if ( jQuery.fx.step[ tween.prop ] ) {
                    jQuery.fx.step[ tween.prop ]( tween );
                } else if ( tween.elem.nodeType === 1 &&
                    ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
                        jQuery.cssHooks[ tween.prop ] ) ) {
                    jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
                } else {
                    tween.elem[ tween.prop ] = tween.now;
                }
            }
        }
    };
    
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function( tween ) {
            if ( tween.elem.nodeType && tween.elem.parentNode ) {
                tween.elem[ tween.prop ] = tween.now;
            }
        }
    };
    
    jQuery.easing = {
        linear: function( p ) {
            return p;
        },
        swing: function( p ) {
            return 0.5 - Math.cos( p * Math.PI ) / 2;
        },
        _default: "swing"
    };
    
    jQuery.fx = Tween.prototype.init;
    
    // Back compat <1.8 extension point
    jQuery.fx.step = {};
    
    
    
    
    var
        fxNow, timerId,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;
    
    function raf() {
        if ( timerId ) {
            window.requestAnimationFrame( raf );
            jQuery.fx.tick();
        }
    }
    
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window.setTimeout( function() {
            fxNow = undefined;
        } );
        return ( fxNow = jQuery.now() );
    }
    
    // Generate parameters to create a standard animation
    function genFx( type, includeWidth ) {
        var which,
            i = 0,
            attrs = { height: type };
    
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for ( ; i < 4; i += 2 - includeWidth ) {
            which = cssExpand[ i ];
            attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
        }
    
        if ( includeWidth ) {
            attrs.opacity = attrs.width = type;
        }
    
        return attrs;
    }
    
    function createTween( value, prop, animation ) {
        var tween,
            collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
            index = 0,
            length = collection.length;
        for ( ; index < length; index++ ) {
            if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
    
                // We're done with this property
                return tween;
            }
        }
    }
    
    function defaultPrefilter( elem, props, opts ) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
            isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree( elem ),
            dataShow = dataPriv.get( elem, "fxshow" );
    
        // Queue-skipping animations hijack the fx hooks
        if ( !opts.queue ) {
            hooks = jQuery._queueHooks( elem, "fx" );
            if ( hooks.unqueued == null ) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if ( !hooks.unqueued ) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
    
            anim.always( function() {
    
                // Ensure the complete handler is called before this completes
                anim.always( function() {
                    hooks.unqueued--;
                    if ( !jQuery.queue( elem, "fx" ).length ) {
                        hooks.empty.fire();
                    }
                } );
            } );
        }
    
        // Detect show/hide animations
        for ( prop in props ) {
            value = props[ prop ];
            if ( rfxtypes.test( value ) ) {
                delete props[ prop ];
                toggle = toggle || value === "toggle";
                if ( value === ( hidden ? "hide" : "show" ) ) {
    
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
                        hidden = true;
    
                    // Ignore all other no-op show/hide data
                    } else {
                        continue;
                    }
                }
                orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
            }
        }
    
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject( props );
        if ( !propTween && jQuery.isEmptyObject( orig ) ) {
            return;
        }
    
        // Restrict "overflow" and "display" styles during box animations
        if ( isBox && elem.nodeType === 1 ) {
    
            // Support: IE <=9 - 11, Edge 12 - 13
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
    
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if ( restoreDisplay == null ) {
                restoreDisplay = dataPriv.get( elem, "display" );
            }
            display = jQuery.css( elem, "display" );
            if ( display === "none" ) {
                if ( restoreDisplay ) {
                    display = restoreDisplay;
                } else {
    
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide( [ elem ], true );
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css( elem, "display" );
                    showHide( [ elem ] );
                }
            }
    
            // Animate inline elements as inline-block
            if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
                if ( jQuery.css( elem, "float" ) === "none" ) {
    
                    // Restore the original display value at the end of pure show/hide animations
                    if ( !propTween ) {
                        anim.done( function() {
                            style.display = restoreDisplay;
                        } );
                        if ( restoreDisplay == null ) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
    
        if ( opts.overflow ) {
            style.overflow = "hidden";
            anim.always( function() {
                style.overflow = opts.overflow[ 0 ];
                style.overflowX = opts.overflow[ 1 ];
                style.overflowY = opts.overflow[ 2 ];
            } );
        }
    
        // Implement show/hide animations
        propTween = false;
        for ( prop in orig ) {
    
            // General show/hide setup for this element animation
            if ( !propTween ) {
                if ( dataShow ) {
                    if ( "hidden" in dataShow ) {
                        hidden = dataShow.hidden;
                    }
                } else {
                    dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
                }
    
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if ( toggle ) {
                    dataShow.hidden = !hidden;
                }
    
                // Show elements before animating them
                if ( hidden ) {
                    showHide( [ elem ], true );
                }
    
                /* eslint-disable no-loop-func */
    
                anim.done( function() {
    
                /* eslint-enable no-loop-func */
    
                    // The final step of a "hide" animation is actually hiding the element
                    if ( !hidden ) {
                        showHide( [ elem ] );
                    }
                    dataPriv.remove( elem, "fxshow" );
                    for ( prop in orig ) {
                        jQuery.style( elem, prop, orig[ prop ] );
                    }
                } );
            }
    
            // Per-property setup
            propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
            if ( !( prop in dataShow ) ) {
                dataShow[ prop ] = propTween.start;
                if ( hidden ) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    
    function propFilter( props, specialEasing ) {
        var index, name, easing, value, hooks;
    
        // camelCase, specialEasing and expand cssHook pass
        for ( index in props ) {
            name = jQuery.camelCase( index );
            easing = specialEasing[ name ];
            value = props[ index ];
            if ( jQuery.isArray( value ) ) {
                easing = value[ 1 ];
                value = props[ index ] = value[ 0 ];
            }
    
            if ( index !== name ) {
                props[ name ] = value;
                delete props[ index ];
            }
    
            hooks = jQuery.cssHooks[ name ];
            if ( hooks && "expand" in hooks ) {
                value = hooks.expand( value );
                delete props[ name ];
    
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for ( index in value ) {
                    if ( !( index in props ) ) {
                        props[ index ] = value[ index ];
                        specialEasing[ index ] = easing;
                    }
                }
            } else {
                specialEasing[ name ] = easing;
            }
        }
    }
    
    function Animation( elem, properties, options ) {
        var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always( function() {
    
                // Don't match elem in the :animated selector
                delete tick.elem;
            } ),
            tick = function() {
                if ( stopped ) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
    
                    // Support: Android 2.3 only
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;
    
                for ( ; index < length; index++ ) {
                    animation.tweens[ index ].run( percent );
                }
    
                deferred.notifyWith( elem, [ animation, percent, remaining ] );
    
                if ( percent < 1 && length ) {
                    return remaining;
                } else {
                    deferred.resolveWith( elem, [ animation ] );
                    return false;
                }
            },
            animation = deferred.promise( {
                elem: elem,
                props: jQuery.extend( {}, properties ),
                opts: jQuery.extend( true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options ),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function( prop, end ) {
                    var tween = jQuery.Tween( elem, animation.opts, prop, end,
                            animation.opts.specialEasing[ prop ] || animation.opts.easing );
                    animation.tweens.push( tween );
                    return tween;
                },
                stop: function( gotoEnd ) {
                    var index = 0,
    
                        // If we are going to the end, we want to run all the tweens
                        // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if ( stopped ) {
                        return this;
                    }
                    stopped = true;
                    for ( ; index < length; index++ ) {
                        animation.tweens[ index ].run( 1 );
                    }
    
                    // Resolve when we played the last frame; otherwise, reject
                    if ( gotoEnd ) {
                        deferred.notifyWith( elem, [ animation, 1, 0 ] );
                        deferred.resolveWith( elem, [ animation, gotoEnd ] );
                    } else {
                        deferred.rejectWith( elem, [ animation, gotoEnd ] );
                    }
                    return this;
                }
            } ),
            props = animation.props;
    
        propFilter( props, animation.opts.specialEasing );
    
        for ( ; index < length; index++ ) {
            result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
            if ( result ) {
                if ( jQuery.isFunction( result.stop ) ) {
                    jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
                        jQuery.proxy( result.stop, result );
                }
                return result;
            }
        }
    
        jQuery.map( props, createTween, animation );
    
        if ( jQuery.isFunction( animation.opts.start ) ) {
            animation.opts.start.call( elem, animation );
        }
    
        jQuery.fx.timer(
            jQuery.extend( tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            } )
        );
    
        // attach callbacks from options
        return animation.progress( animation.opts.progress )
            .done( animation.opts.done, animation.opts.complete )
            .fail( animation.opts.fail )
            .always( animation.opts.always );
    }
    
    jQuery.Animation = jQuery.extend( Animation, {
    
        tweeners: {
            "*": [ function( prop, value ) {
                var tween = this.createTween( prop, value );
                adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
                return tween;
            } ]
        },
    
        tweener: function( props, callback ) {
            if ( jQuery.isFunction( props ) ) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.match( rnotwhite );
            }
    
            var prop,
                index = 0,
                length = props.length;
    
            for ( ; index < length; index++ ) {
                prop = props[ index ];
                Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
                Animation.tweeners[ prop ].unshift( callback );
            }
        },
    
        prefilters: [ defaultPrefilter ],
    
        prefilter: function( callback, prepend ) {
            if ( prepend ) {
                Animation.prefilters.unshift( callback );
            } else {
                Animation.prefilters.push( callback );
            }
        }
    } );
    
    jQuery.speed = function( speed, easing, fn ) {
        var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
            complete: fn || !fn && easing ||
                jQuery.isFunction( speed ) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
        };
    
        // Go to the end state if fx are off or if document is hidden
        if ( jQuery.fx.off || document.hidden ) {
            opt.duration = 0;
    
        } else {
            opt.duration = typeof opt.duration === "number" ?
                opt.duration : opt.duration in jQuery.fx.speeds ?
                    jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
        }
    
        // Normalize opt.queue - true/undefined/null -> "fx"
        if ( opt.queue == null || opt.queue === true ) {
            opt.queue = "fx";
        }
    
        // Queueing
        opt.old = opt.complete;
    
        opt.complete = function() {
            if ( jQuery.isFunction( opt.old ) ) {
                opt.old.call( this );
            }
    
            if ( opt.queue ) {
                jQuery.dequeue( this, opt.queue );
            }
        };
    
        return opt;
    };
    
    jQuery.fn.extend( {
        fadeTo: function( speed, to, easing, callback ) {
    
            // Show any hidden elements after setting opacity to 0
            return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
    
                // Animate to the value specified
                .end().animate( { opacity: to }, speed, easing, callback );
        },
        animate: function( prop, speed, easing, callback ) {
            var empty = jQuery.isEmptyObject( prop ),
                optall = jQuery.speed( speed, easing, callback ),
                doAnimation = function() {
    
                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation( this, jQuery.extend( {}, prop ), optall );
    
                    // Empty animations, or finishing resolves immediately
                    if ( empty || dataPriv.get( this, "finish" ) ) {
                        anim.stop( true );
                    }
                };
                doAnimation.finish = doAnimation;
    
            return empty || optall.queue === false ?
                this.each( doAnimation ) :
                this.queue( optall.queue, doAnimation );
        },
        stop: function( type, clearQueue, gotoEnd ) {
            var stopQueue = function( hooks ) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop( gotoEnd );
            };
    
            if ( typeof type !== "string" ) {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if ( clearQueue && type !== false ) {
                this.queue( type || "fx", [] );
            }
    
            return this.each( function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = dataPriv.get( this );
    
                if ( index ) {
                    if ( data[ index ] && data[ index ].stop ) {
                        stopQueue( data[ index ] );
                    }
                } else {
                    for ( index in data ) {
                        if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                            stopQueue( data[ index ] );
                        }
                    }
                }
    
                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this &&
                        ( type == null || timers[ index ].queue === type ) ) {
    
                        timers[ index ].anim.stop( gotoEnd );
                        dequeue = false;
                        timers.splice( index, 1 );
                    }
                }
    
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if ( dequeue || !gotoEnd ) {
                    jQuery.dequeue( this, type );
                }
            } );
        },
        finish: function( type ) {
            if ( type !== false ) {
                type = type || "fx";
            }
            return this.each( function() {
                var index,
                    data = dataPriv.get( this ),
                    queue = data[ type + "queue" ],
                    hooks = data[ type + "queueHooks" ],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;
    
                // Enable finishing flag on private data
                data.finish = true;
    
                // Empty the queue first
                jQuery.queue( this, type, [] );
    
                if ( hooks && hooks.stop ) {
                    hooks.stop.call( this, true );
                }
    
                // Look for any active animations, and finish them
                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
                        timers[ index ].anim.stop( true );
                        timers.splice( index, 1 );
                    }
                }
    
                // Look for any animations in the old queue and finish them
                for ( index = 0; index < length; index++ ) {
                    if ( queue[ index ] && queue[ index ].finish ) {
                        queue[ index ].finish.call( this );
                    }
                }
    
                // Turn off finishing flag
                delete data.finish;
            } );
        }
    } );
    
    jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
        var cssFn = jQuery.fn[ name ];
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return speed == null || typeof speed === "boolean" ?
                cssFn.apply( this, arguments ) :
                this.animate( genFx( name, true ), speed, easing, callback );
        };
    } );
    
    // Generate shortcuts for custom animations
    jQuery.each( {
        slideDown: genFx( "show" ),
        slideUp: genFx( "hide" ),
        slideToggle: genFx( "toggle" ),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function( name, props ) {
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return this.animate( props, speed, easing, callback );
        };
    } );
    
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer,
            i = 0,
            timers = jQuery.timers;
    
        fxNow = jQuery.now();
    
        for ( ; i < timers.length; i++ ) {
            timer = timers[ i ];
    
            // Checks the timer has not already been removed
            if ( !timer() && timers[ i ] === timer ) {
                timers.splice( i--, 1 );
            }
        }
    
        if ( !timers.length ) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    
    jQuery.fx.timer = function( timer ) {
        jQuery.timers.push( timer );
        if ( timer() ) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };
    
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if ( !timerId ) {
            timerId = window.requestAnimationFrame ?
                window.requestAnimationFrame( raf ) :
                window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
        }
    };
    
    jQuery.fx.stop = function() {
        if ( window.cancelAnimationFrame ) {
            window.cancelAnimationFrame( timerId );
        } else {
            window.clearInterval( timerId );
        }
    
        timerId = null;
    };
    
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
    
        // Default speed
        _default: 400
    };
    
    
    // Based off of the plugin by Clint Helfers, with permission.
    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function( time, type ) {
        time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
        type = type || "fx";
    
        return this.queue( type, function( next, hooks ) {
            var timeout = window.setTimeout( next, time );
            hooks.stop = function() {
                window.clearTimeout( timeout );
            };
        } );
    };
    
    
    ( function() {
        var input = document.createElement( "input" ),
            select = document.createElement( "select" ),
            opt = select.appendChild( document.createElement( "option" ) );
    
        input.type = "checkbox";
    
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";
    
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;
    
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement( "input" );
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    } )();
    
    
    var boolHook,
        attrHandle = jQuery.expr.attrHandle;
    
    jQuery.fn.extend( {
        attr: function( name, value ) {
            return access( this, jQuery.attr, name, value, arguments.length > 1 );
        },
    
        removeAttr: function( name ) {
            return this.each( function() {
                jQuery.removeAttr( this, name );
            } );
        }
    } );
    
    jQuery.extend( {
        attr: function( elem, name, value ) {
            var ret, hooks,
                nType = elem.nodeType;
    
            // Don't get/set attributes on text, comment and attribute nodes
            if ( nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }
    
            // Fallback to prop when attributes are not supported
            if ( typeof elem.getAttribute === "undefined" ) {
                return jQuery.prop( elem, name, value );
            }
    
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
                hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
                    ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
            }
    
            if ( value !== undefined ) {
                if ( value === null ) {
                    jQuery.removeAttr( elem, name );
                    return;
                }
    
                if ( hooks && "set" in hooks &&
                    ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                    return ret;
                }
    
                elem.setAttribute( name, value + "" );
                return value;
            }
    
            if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
                return ret;
            }
    
            ret = jQuery.find.attr( elem, name );
    
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
    
        attrHooks: {
            type: {
                set: function( elem, value ) {
                    if ( !support.radioValue && value === "radio" &&
                        jQuery.nodeName( elem, "input" ) ) {
                        var val = elem.value;
                        elem.setAttribute( "type", value );
                        if ( val ) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
    
        removeAttr: function( elem, value ) {
            var name,
                i = 0,
                attrNames = value && value.match( rnotwhite );
    
            if ( attrNames && elem.nodeType === 1 ) {
                while ( ( name = attrNames[ i++ ] ) ) {
                    elem.removeAttribute( name );
                }
            }
        }
    } );
    
    // Hooks for boolean attributes
    boolHook = {
        set: function( elem, value, name ) {
            if ( value === false ) {
    
                // Remove boolean attributes when set to false
                jQuery.removeAttr( elem, name );
            } else {
                elem.setAttribute( name, name );
            }
            return name;
        }
    };
    
    jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
        var getter = attrHandle[ name ] || jQuery.find.attr;
    
        attrHandle[ name ] = function( elem, name, isXML ) {
            var ret, handle,
                lowercaseName = name.toLowerCase();
    
            if ( !isXML ) {
    
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[ lowercaseName ];
                attrHandle[ lowercaseName ] = ret;
                ret = getter( elem, name, isXML ) != null ?
                    lowercaseName :
                    null;
                attrHandle[ lowercaseName ] = handle;
            }
            return ret;
        };
    } );
    
    
    
    
    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;
    
    jQuery.fn.extend( {
        prop: function( name, value ) {
            return access( this, jQuery.prop, name, value, arguments.length > 1 );
        },
    
        removeProp: function( name ) {
            return this.each( function() {
                delete this[ jQuery.propFix[ name ] || name ];
            } );
        }
    } );
    
    jQuery.extend( {
        prop: function( elem, name, value ) {
            var ret, hooks,
                nType = elem.nodeType;
    
            // Don't get/set properties on text, comment and attribute nodes
            if ( nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }
    
            if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
    
                // Fix name and attach hooks
                name = jQuery.propFix[ name ] || name;
                hooks = jQuery.propHooks[ name ];
            }
    
            if ( value !== undefined ) {
                if ( hooks && "set" in hooks &&
                    ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                    return ret;
                }
    
                return ( elem[ name ] = value );
            }
    
            if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
                return ret;
            }
    
            return elem[ name ];
        },
    
        propHooks: {
            tabIndex: {
                get: function( elem ) {
    
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr( elem, "tabindex" );
    
                    return tabindex ?
                        parseInt( tabindex, 10 ) :
                        rfocusable.test( elem.nodeName ) ||
                            rclickable.test( elem.nodeName ) && elem.href ?
                                0 :
                                -1;
                }
            }
        },
    
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    } );
    
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    if ( !support.optSelected ) {
        jQuery.propHooks.selected = {
            get: function( elem ) {
                var parent = elem.parentNode;
                if ( parent && parent.parentNode ) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            },
            set: function( elem ) {
                var parent = elem.parentNode;
                if ( parent ) {
                    parent.selectedIndex;
    
                    if ( parent.parentNode ) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    
    jQuery.each( [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[ this.toLowerCase() ] = this;
    } );
    
    
    
    
    var rclass = /[\t\r\n\f]/g;
    
    function getClass( elem ) {
        return elem.getAttribute && elem.getAttribute( "class" ) || "";
    }
    
    jQuery.fn.extend( {
        addClass: function( value ) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;
    
            if ( jQuery.isFunction( value ) ) {
                return this.each( function( j ) {
                    jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
                } );
            }
    
            if ( typeof value === "string" && value ) {
                classes = value.match( rnotwhite ) || [];
    
                while ( ( elem = this[ i++ ] ) ) {
                    curValue = getClass( elem );
                    cur = elem.nodeType === 1 &&
                        ( " " + curValue + " " ).replace( rclass, " " );
    
                    if ( cur ) {
                        j = 0;
                        while ( ( clazz = classes[ j++ ] ) ) {
                            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                                cur += clazz + " ";
                            }
                        }
    
                        // Only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim( cur );
                        if ( curValue !== finalValue ) {
                            elem.setAttribute( "class", finalValue );
                        }
                    }
                }
            }
    
            return this;
        },
    
        removeClass: function( value ) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;
    
            if ( jQuery.isFunction( value ) ) {
                return this.each( function( j ) {
                    jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
                } );
            }
    
            if ( !arguments.length ) {
                return this.attr( "class", "" );
            }
    
            if ( typeof value === "string" && value ) {
                classes = value.match( rnotwhite ) || [];
    
                while ( ( elem = this[ i++ ] ) ) {
                    curValue = getClass( elem );
    
                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 &&
                        ( " " + curValue + " " ).replace( rclass, " " );
    
                    if ( cur ) {
                        j = 0;
                        while ( ( clazz = classes[ j++ ] ) ) {
    
                            // Remove *all* instances
                            while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
                                cur = cur.replace( " " + clazz + " ", " " );
                            }
                        }
    
                        // Only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim( cur );
                        if ( curValue !== finalValue ) {
                            elem.setAttribute( "class", finalValue );
                        }
                    }
                }
            }
    
            return this;
        },
    
        toggleClass: function( value, stateVal ) {
            var type = typeof value;
    
            if ( typeof stateVal === "boolean" && type === "string" ) {
                return stateVal ? this.addClass( value ) : this.removeClass( value );
            }
    
            if ( jQuery.isFunction( value ) ) {
                return this.each( function( i ) {
                    jQuery( this ).toggleClass(
                        value.call( this, i, getClass( this ), stateVal ),
                        stateVal
                    );
                } );
            }
    
            return this.each( function() {
                var className, i, self, classNames;
    
                if ( type === "string" ) {
    
                    // Toggle individual class names
                    i = 0;
                    self = jQuery( this );
                    classNames = value.match( rnotwhite ) || [];
    
                    while ( ( className = classNames[ i++ ] ) ) {
    
                        // Check each className given, space separated list
                        if ( self.hasClass( className ) ) {
                            self.removeClass( className );
                        } else {
                            self.addClass( className );
                        }
                    }
    
                // Toggle whole class name
                } else if ( value === undefined || type === "boolean" ) {
                    className = getClass( this );
                    if ( className ) {
    
                        // Store className if set
                        dataPriv.set( this, "__className__", className );
                    }
    
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if ( this.setAttribute ) {
                        this.setAttribute( "class",
                            className || value === false ?
                            "" :
                            dataPriv.get( this, "__className__" ) || ""
                        );
                    }
                }
            } );
        },
    
        hasClass: function( selector ) {
            var className, elem,
                i = 0;
    
            className = " " + selector + " ";
            while ( ( elem = this[ i++ ] ) ) {
                if ( elem.nodeType === 1 &&
                    ( " " + getClass( elem ) + " " ).replace( rclass, " " )
                        .indexOf( className ) > -1
                ) {
                    return true;
                }
            }
    
            return false;
        }
    } );
    
    
    
    
    var rreturn = /\r/g,
        rspaces = /[\x20\t\r\n\f]+/g;
    
    jQuery.fn.extend( {
        val: function( value ) {
            var hooks, ret, isFunction,
                elem = this[ 0 ];
    
            if ( !arguments.length ) {
                if ( elem ) {
                    hooks = jQuery.valHooks[ elem.type ] ||
                        jQuery.valHooks[ elem.nodeName.toLowerCase() ];
    
                    if ( hooks &&
                        "get" in hooks &&
                        ( ret = hooks.get( elem, "value" ) ) !== undefined
                    ) {
                        return ret;
                    }
    
                    ret = elem.value;
    
                    return typeof ret === "string" ?
    
                        // Handle most common string cases
                        ret.replace( rreturn, "" ) :
    
                        // Handle cases where value is null/undef or number
                        ret == null ? "" : ret;
                }
    
                return;
            }
    
            isFunction = jQuery.isFunction( value );
    
            return this.each( function( i ) {
                var val;
    
                if ( this.nodeType !== 1 ) {
                    return;
                }
    
                if ( isFunction ) {
                    val = value.call( this, i, jQuery( this ).val() );
                } else {
                    val = value;
                }
    
                // Treat null/undefined as ""; convert numbers to string
                if ( val == null ) {
                    val = "";
    
                } else if ( typeof val === "number" ) {
                    val += "";
    
                } else if ( jQuery.isArray( val ) ) {
                    val = jQuery.map( val, function( value ) {
                        return value == null ? "" : value + "";
                    } );
                }
    
                hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
    
                // If set returns undefined, fall back to normal setting
                if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
                    this.value = val;
                }
            } );
        }
    } );
    
    jQuery.extend( {
        valHooks: {
            option: {
                get: function( elem ) {
    
                    var val = jQuery.find.attr( elem, "value" );
                    return val != null ?
                        val :
    
                        // Support: IE <=10 - 11 only
                        // option.text throws exceptions (#14686, #14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
                }
            },
            select: {
                get: function( elem ) {
                    var value, option,
                        options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one",
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ?
                            max :
                            one ? index : 0;
    
                    // Loop through all the selected options
                    for ( ; i < max; i++ ) {
                        option = options[ i ];
    
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (#2551)
                        if ( ( option.selected || i === index ) &&
    
                                // Don't return options that are disabled or in a disabled optgroup
                                !option.disabled &&
                                ( !option.parentNode.disabled ||
                                    !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
    
                            // Get the specific value for the option
                            value = jQuery( option ).val();
    
                            // We don't need an array for one selects
                            if ( one ) {
                                return value;
                            }
    
                            // Multi-Selects return an array
                            values.push( value );
                        }
                    }
    
                    return values;
                },
    
                set: function( elem, value ) {
                    var optionSet, option,
                        options = elem.options,
                        values = jQuery.makeArray( value ),
                        i = options.length;
    
                    while ( i-- ) {
                        option = options[ i ];
    
                        /* eslint-disable no-cond-assign */
    
                        if ( option.selected =
                            jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
                        ) {
                            optionSet = true;
                        }
    
                        /* eslint-enable no-cond-assign */
                    }
    
                    // Force browsers to behave consistently when non-matching value is set
                    if ( !optionSet ) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    } );
    
    // Radios and checkboxes getter/setter
    jQuery.each( [ "radio", "checkbox" ], function() {
        jQuery.valHooks[ this ] = {
            set: function( elem, value ) {
                if ( jQuery.isArray( value ) ) {
                    return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
                }
            }
        };
        if ( !support.checkOn ) {
            jQuery.valHooks[ this ].get = function( elem ) {
                return elem.getAttribute( "value" ) === null ? "on" : elem.value;
            };
        }
    } );
    
    
    
    
    // Return jQuery for attributes-only inclusion
    
    
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    
    jQuery.extend( jQuery.event, {
    
        trigger: function( event, data, elem, onlyHandlers ) {
    
            var i, cur, tmp, bubbleType, ontype, handle, special,
                eventPath = [ elem || document ],
                type = hasOwn.call( event, "type" ) ? event.type : event,
                namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
    
            cur = tmp = elem = elem || document;
    
            // Don't do events on text and comment nodes
            if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
                return;
            }
    
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
                return;
            }
    
            if ( type.indexOf( "." ) > -1 ) {
    
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split( "." );
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf( ":" ) < 0 && "on" + type;
    
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[ jQuery.expando ] ?
                event :
                new jQuery.Event( type, typeof event === "object" && event );
    
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join( "." );
            event.rnamespace = event.namespace ?
                new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
                null;
    
            // Clean up the event in case it is being reused
            event.result = undefined;
            if ( !event.target ) {
                event.target = elem;
            }
    
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ?
                [ event ] :
                jQuery.makeArray( data, [ event ] );
    
            // Allow special events to draw outside the lines
            special = jQuery.event.special[ type ] || {};
            if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
                return;
            }
    
            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
    
                bubbleType = special.delegateType || type;
                if ( !rfocusMorph.test( bubbleType + type ) ) {
                    cur = cur.parentNode;
                }
                for ( ; cur; cur = cur.parentNode ) {
                    eventPath.push( cur );
                    tmp = cur;
                }
    
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if ( tmp === ( elem.ownerDocument || document ) ) {
                    eventPath.push( tmp.defaultView || tmp.parentWindow || window );
                }
            }
    
            // Fire handlers on the event path
            i = 0;
            while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
    
                event.type = i > 1 ?
                    bubbleType :
                    special.bindType || type;
    
                // jQuery handler
                handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
                    dataPriv.get( cur, "handle" );
                if ( handle ) {
                    handle.apply( cur, data );
                }
    
                // Native handler
                handle = ontype && cur[ ontype ];
                if ( handle && handle.apply && acceptData( cur ) ) {
                    event.result = handle.apply( cur, data );
                    if ( event.result === false ) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;
    
            // If nobody prevented the default action, do it now
            if ( !onlyHandlers && !event.isDefaultPrevented() ) {
    
                if ( ( !special._default ||
                    special._default.apply( eventPath.pop(), data ) === false ) &&
                    acceptData( elem ) ) {
    
                    // Call a native DOM method on the target with the same name as the event.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
    
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ ontype ];
    
                        if ( tmp ) {
                            elem[ ontype ] = null;
                        }
    
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        elem[ type ]();
                        jQuery.event.triggered = undefined;
    
                        if ( tmp ) {
                            elem[ ontype ] = tmp;
                        }
                    }
                }
            }
    
            return event.result;
        },
    
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function( type, elem, event ) {
            var e = jQuery.extend(
                new jQuery.Event(),
                event,
                {
                    type: type,
                    isSimulated: true
                }
            );
    
            jQuery.event.trigger( e, null, elem );
        }
    
    } );
    
    jQuery.fn.extend( {
    
        trigger: function( type, data ) {
            return this.each( function() {
                jQuery.event.trigger( type, data, this );
            } );
        },
        triggerHandler: function( type, data ) {
            var elem = this[ 0 ];
            if ( elem ) {
                return jQuery.event.trigger( type, data, elem, true );
            }
        }
    } );
    
    
    jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup contextmenu" ).split( " " ),
        function( i, name ) {
    
        // Handle event binding
        jQuery.fn[ name ] = function( data, fn ) {
            return arguments.length > 0 ?
                this.on( name, null, data, fn ) :
                this.trigger( name );
        };
    } );
    
    jQuery.fn.extend( {
        hover: function( fnOver, fnOut ) {
            return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
        }
    } );
    
    
    
    
    support.focusin = "onfocusin" in window;
    
    
    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if ( !support.focusin ) {
        jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
    
            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function( event ) {
                jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
            };
    
            jQuery.event.special[ fix ] = {
                setup: function() {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access( doc, fix );
    
                    if ( !attaches ) {
                        doc.addEventListener( orig, handler, true );
                    }
                    dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
                },
                teardown: function() {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access( doc, fix ) - 1;
    
                    if ( !attaches ) {
                        doc.removeEventListener( orig, handler, true );
                        dataPriv.remove( doc, fix );
    
                    } else {
                        dataPriv.access( doc, fix, attaches );
                    }
                }
            };
        } );
    }
    var location = window.location;
    
    var nonce = jQuery.now();
    
    var rquery = ( /\?/ );
    
    
    
    // Cross-browser xml parsing
    jQuery.parseXML = function( data ) {
        var xml;
        if ( !data || typeof data !== "string" ) {
            return null;
        }
    
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
        } catch ( e ) {
            xml = undefined;
        }
    
        if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
            jQuery.error( "Invalid XML: " + data );
        }
        return xml;
    };
    
    
    var
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;
    
    function buildParams( prefix, obj, traditional, add ) {
        var name;
    
        if ( jQuery.isArray( obj ) ) {
    
            // Serialize array item.
            jQuery.each( obj, function( i, v ) {
                if ( traditional || rbracket.test( prefix ) ) {
    
                    // Treat each array item as a scalar.
                    add( prefix, v );
    
                } else {
    
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(
                        prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
                        v,
                        traditional,
                        add
                    );
                }
            } );
    
        } else if ( !traditional && jQuery.type( obj ) === "object" ) {
    
            // Serialize object item.
            for ( name in obj ) {
                buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
            }
    
        } else {
    
            // Serialize scalar item.
            add( prefix, obj );
        }
    }
    
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function( a, traditional ) {
        var prefix,
            s = [],
            add = function( key, valueOrFunction ) {
    
                // If value is a function, invoke it and use its return value
                var value = jQuery.isFunction( valueOrFunction ) ?
                    valueOrFunction() :
                    valueOrFunction;
    
                s[ s.length ] = encodeURIComponent( key ) + "=" +
                    encodeURIComponent( value == null ? "" : value );
            };
    
        // If an array was passed in, assume that it is an array of form elements.
        if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
    
            // Serialize the form elements
            jQuery.each( a, function() {
                add( this.name, this.value );
            } );
    
        } else {
    
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for ( prefix in a ) {
                buildParams( prefix, a[ prefix ], traditional, add );
            }
        }
    
        // Return the resulting serialization
        return s.join( "&" );
    };
    
    jQuery.fn.extend( {
        serialize: function() {
            return jQuery.param( this.serializeArray() );
        },
        serializeArray: function() {
            return this.map( function() {
    
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop( this, "elements" );
                return elements ? jQuery.makeArray( elements ) : this;
            } )
            .filter( function() {
                var type = this.type;
    
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery( this ).is( ":disabled" ) &&
                    rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                    ( this.checked || !rcheckableType.test( type ) );
            } )
            .map( function( i, elem ) {
                var val = jQuery( this ).val();
    
                return val == null ?
                    null :
                    jQuery.isArray( val ) ?
                        jQuery.map( val, function( val ) {
                            return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                        } ) :
                        { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
            } ).get();
        }
    } );
    
    
    var
        r20 = /%20/g,
        rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
    
        // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
    
        /* Prefilters
         * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
         * 2) These are called:
         *    - BEFORE asking for a transport
         *    - AFTER param serialization (s.data is a string if s.processData is true)
         * 3) key is the dataType
         * 4) the catchall symbol "*" can be used
         * 5) execution will start with transport dataType and THEN continue down to "*" if needed
         */
        prefilters = {},
    
        /* Transports bindings
         * 1) key is the dataType
         * 2) the catchall symbol "*" can be used
         * 3) selection will start with transport dataType and THEN go to "*" if needed
         */
        transports = {},
    
        // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat( "*" ),
    
        // Anchor tag for parsing the document origin
        originAnchor = document.createElement( "a" );
        originAnchor.href = location.href;
    
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports( structure ) {
    
        // dataTypeExpression is optional and defaults to "*"
        return function( dataTypeExpression, func ) {
    
            if ( typeof dataTypeExpression !== "string" ) {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
    
            var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
    
            if ( jQuery.isFunction( func ) ) {
    
                // For each dataType in the dataTypeExpression
                while ( ( dataType = dataTypes[ i++ ] ) ) {
    
                    // Prepend if requested
                    if ( dataType[ 0 ] === "+" ) {
                        dataType = dataType.slice( 1 ) || "*";
                        ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
    
                    // Otherwise append
                    } else {
                        ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
                    }
                }
            }
        };
    }
    
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
    
        var inspected = {},
            seekingTransport = ( structure === transports );
    
        function inspect( dataType ) {
            var selected;
            inspected[ dataType ] = true;
            jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
                var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
                if ( typeof dataTypeOrTransport === "string" &&
                    !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
    
                    options.dataTypes.unshift( dataTypeOrTransport );
                    inspect( dataTypeOrTransport );
                    return false;
                } else if ( seekingTransport ) {
                    return !( selected = dataTypeOrTransport );
                }
            } );
            return selected;
        }
    
        return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
    }
    
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend( target, src ) {
        var key, deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};
    
        for ( key in src ) {
            if ( src[ key ] !== undefined ) {
                ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
            }
        }
        if ( deep ) {
            jQuery.extend( true, target, deep );
        }
    
        return target;
    }
    
    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses( s, jqXHR, responses ) {
    
        var ct, type, finalDataType, firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes;
    
        // Remove auto dataType and get content-type in the process
        while ( dataTypes[ 0 ] === "*" ) {
            dataTypes.shift();
            if ( ct === undefined ) {
                ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
            }
        }
    
        // Check if we're dealing with a known content-type
        if ( ct ) {
            for ( type in contents ) {
                if ( contents[ type ] && contents[ type ].test( ct ) ) {
                    dataTypes.unshift( type );
                    break;
                }
            }
        }
    
        // Check to see if we have a response for the expected dataType
        if ( dataTypes[ 0 ] in responses ) {
            finalDataType = dataTypes[ 0 ];
        } else {
    
            // Try convertible dataTypes
            for ( type in responses ) {
                if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
                    finalDataType = type;
                    break;
                }
                if ( !firstDataType ) {
                    firstDataType = type;
                }
            }
    
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
    
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if ( finalDataType ) {
            if ( finalDataType !== dataTypes[ 0 ] ) {
                dataTypes.unshift( finalDataType );
            }
            return responses[ finalDataType ];
        }
    }
    
    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */
    function ajaxConvert( s, response, jqXHR, isSuccess ) {
        var conv2, current, conv, tmp, prev,
            converters = {},
    
            // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice();
    
        // Create converters map with lowercased keys
        if ( dataTypes[ 1 ] ) {
            for ( conv in s.converters ) {
                converters[ conv.toLowerCase() ] = s.converters[ conv ];
            }
        }
    
        current = dataTypes.shift();
    
        // Convert to each sequential dataType
        while ( current ) {
    
            if ( s.responseFields[ current ] ) {
                jqXHR[ s.responseFields[ current ] ] = response;
            }
    
            // Apply the dataFilter if provided
            if ( !prev && isSuccess && s.dataFilter ) {
                response = s.dataFilter( response, s.dataType );
            }
    
            prev = current;
            current = dataTypes.shift();
    
            if ( current ) {
    
                // There's only work to do if current dataType is non-auto
                if ( current === "*" ) {
    
                    current = prev;
    
                // Convert response if prev dataType is non-auto and differs from current
                } else if ( prev !== "*" && prev !== current ) {
    
                    // Seek a direct converter
                    conv = converters[ prev + " " + current ] || converters[ "* " + current ];
    
                    // If none found, seek a pair
                    if ( !conv ) {
                        for ( conv2 in converters ) {
    
                            // If conv2 outputs current
                            tmp = conv2.split( " " );
                            if ( tmp[ 1 ] === current ) {
    
                                // If prev can be converted to accepted input
                                conv = converters[ prev + " " + tmp[ 0 ] ] ||
                                    converters[ "* " + tmp[ 0 ] ];
                                if ( conv ) {
    
                                    // Condense equivalence converters
                                    if ( conv === true ) {
                                        conv = converters[ conv2 ];
    
                                    // Otherwise, insert the intermediate dataType
                                    } else if ( converters[ conv2 ] !== true ) {
                                        current = tmp[ 0 ];
                                        dataTypes.unshift( tmp[ 1 ] );
                                    }
                                    break;
                                }
                            }
                        }
                    }
    
                    // Apply converter (if not an equivalence)
                    if ( conv !== true ) {
    
                        // Unless errors are allowed to bubble, catch and return them
                        if ( conv && s.throws ) {
                            response = conv( response );
                        } else {
                            try {
                                response = conv( response );
                            } catch ( e ) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
    
        return { state: "success", data: response };
    }
    
    jQuery.extend( {
    
        // Counter for holding the number of active queries
        active: 0,
    
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
    
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test( location.protocol ),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
    
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
    
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
    
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
    
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
    
                // Convert anything to text
                "* text": String,
    
                // Text to html (true = no transformation)
                "text html": true,
    
                // Evaluate text as a json expression
                "text json": JSON.parse,
    
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
    
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
    
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function( target, settings ) {
            return settings ?
    
                // Building a settings object
                ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
    
                // Extending ajaxSettings
                ajaxExtend( jQuery.ajaxSettings, target );
        },
    
        ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
        ajaxTransport: addToPrefiltersOrTransports( transports ),
    
        // Main method
        ajax: function( url, options ) {
    
            // If url is an object, simulate pre-1.5 signature
            if ( typeof url === "object" ) {
                options = url;
                url = undefined;
            }
    
            // Force options to be an object
            options = options || {};
    
            var transport,
    
                // URL without anti-cache param
                cacheURL,
    
                // Response headers
                responseHeadersString,
                responseHeaders,
    
                // timeout handle
                timeoutTimer,
    
                // Url cleanup var
                urlAnchor,
    
                // Request state (becomes false upon send and true upon completion)
                completed,
    
                // To know if global events are to be dispatched
                fireGlobals,
    
                // Loop variable
                i,
    
                // uncached part of the url
                uncached,
    
                // Create the final options object
                s = jQuery.ajaxSetup( {}, options ),
    
                // Callbacks context
                callbackContext = s.context || s,
    
                // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context &&
                    ( callbackContext.nodeType || callbackContext.jquery ) ?
                        jQuery( callbackContext ) :
                        jQuery.event,
    
                // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks( "once memory" ),
    
                // Status-dependent callbacks
                statusCode = s.statusCode || {},
    
                // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},
    
                // Default abort message
                strAbort = "canceled",
    
                // Fake xhr
                jqXHR = {
                    readyState: 0,
    
                    // Builds headers hashtable if needed
                    getResponseHeader: function( key ) {
                        var match;
                        if ( completed ) {
                            if ( !responseHeaders ) {
                                responseHeaders = {};
                                while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                                    responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
                                }
                            }
                            match = responseHeaders[ key.toLowerCase() ];
                        }
                        return match == null ? null : match;
                    },
    
                    // Raw string
                    getAllResponseHeaders: function() {
                        return completed ? responseHeadersString : null;
                    },
    
                    // Caches the header
                    setRequestHeader: function( name, value ) {
                        if ( completed == null ) {
                            name = requestHeadersNames[ name.toLowerCase() ] =
                                requestHeadersNames[ name.toLowerCase() ] || name;
                            requestHeaders[ name ] = value;
                        }
                        return this;
                    },
    
                    // Overrides response content-type header
                    overrideMimeType: function( type ) {
                        if ( completed == null ) {
                            s.mimeType = type;
                        }
                        return this;
                    },
    
                    // Status-dependent callbacks
                    statusCode: function( map ) {
                        var code;
                        if ( map ) {
                            if ( completed ) {
    
                                // Execute the appropriate callbacks
                                jqXHR.always( map[ jqXHR.status ] );
                            } else {
    
                                // Lazy-add the new callbacks in a way that preserves old ones
                                for ( code in map ) {
                                    statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                                }
                            }
                        }
                        return this;
                    },
    
                    // Cancel the request
                    abort: function( statusText ) {
                        var finalText = statusText || strAbort;
                        if ( transport ) {
                            transport.abort( finalText );
                        }
                        done( 0, finalText );
                        return this;
                    }
                };
    
            // Attach deferreds
            deferred.promise( jqXHR );
    
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ( ( url || s.url || location.href ) + "" )
                .replace( rprotocol, location.protocol + "//" );
    
            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;
    
            // Extract dataTypes list
            s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
    
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if ( s.crossDomain == null ) {
                urlAnchor = document.createElement( "a" );
    
                // Support: IE <=8 - 11, Edge 12 - 13
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
    
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                        urlAnchor.protocol + "//" + urlAnchor.host;
                } catch ( e ) {
    
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
    
            // Convert data if not already a string
            if ( s.data && s.processData && typeof s.data !== "string" ) {
                s.data = jQuery.param( s.data, s.traditional );
            }
    
            // Apply prefilters
            inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
    
            // If request was aborted inside a prefilter, stop there
            if ( completed ) {
                return jqXHR;
            }
    
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;
    
            // Watch for a new set of requests
            if ( fireGlobals && jQuery.active++ === 0 ) {
                jQuery.event.trigger( "ajaxStart" );
            }
    
            // Uppercase the type
            s.type = s.type.toUpperCase();
    
            // Determine if request has content
            s.hasContent = !rnoContent.test( s.type );
    
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace( rhash, "" );
    
            // More options handling for requests with no content
            if ( !s.hasContent ) {
    
                // Remember the hash so we can put it back
                uncached = s.url.slice( cacheURL.length );
    
                // If data is available, append data to url
                if ( s.data ) {
                    cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
    
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
    
                // Add anti-cache in uncached url if needed
                if ( s.cache === false ) {
                    cacheURL = cacheURL.replace( rts, "" );
                    uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
                }
    
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
    
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if ( s.data && s.processData &&
                ( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
                s.data = s.data.replace( r20, "+" );
            }
    
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if ( s.ifModified ) {
                if ( jQuery.lastModified[ cacheURL ] ) {
                    jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
                }
                if ( jQuery.etag[ cacheURL ] ) {
                    jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
                }
            }
    
            // Set the correct header, if data is being sent
            if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
                jqXHR.setRequestHeader( "Content-Type", s.contentType );
            }
    
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
                    s.accepts[ s.dataTypes[ 0 ] ] +
                        ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                    s.accepts[ "*" ]
            );
    
            // Check for headers option
            for ( i in s.headers ) {
                jqXHR.setRequestHeader( i, s.headers[ i ] );
            }
    
            // Allow custom headers/mimetypes and early abort
            if ( s.beforeSend &&
                ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
    
                // Abort if not done already and return
                return jqXHR.abort();
            }
    
            // Aborting is no longer a cancellation
            strAbort = "abort";
    
            // Install callbacks on deferreds
            completeDeferred.add( s.complete );
            jqXHR.done( s.success );
            jqXHR.fail( s.error );
    
            // Get transport
            transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
    
            // If no transport, we auto-abort
            if ( !transport ) {
                done( -1, "No Transport" );
            } else {
                jqXHR.readyState = 1;
    
                // Send global event
                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                }
    
                // If request was aborted inside ajaxSend, stop there
                if ( completed ) {
                    return jqXHR;
                }
    
                // Timeout
                if ( s.async && s.timeout > 0 ) {
                    timeoutTimer = window.setTimeout( function() {
                        jqXHR.abort( "timeout" );
                    }, s.timeout );
                }
    
                try {
                    completed = false;
                    transport.send( requestHeaders, done );
                } catch ( e ) {
    
                    // Rethrow post-completion exceptions
                    if ( completed ) {
                        throw e;
                    }
    
                    // Propagate others as results
                    done( -1, e );
                }
            }
    
            // Callback for when everything is done
            function done( status, nativeStatusText, responses, headers ) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;
    
                // Ignore repeat invocations
                if ( completed ) {
                    return;
                }
    
                completed = true;
    
                // Clear timeout if it exists
                if ( timeoutTimer ) {
                    window.clearTimeout( timeoutTimer );
                }
    
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
    
                // Cache response headers
                responseHeadersString = headers || "";
    
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
    
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
    
                // Get response data
                if ( responses ) {
                    response = ajaxHandleResponses( s, jqXHR, responses );
                }
    
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert( s, response, jqXHR, isSuccess );
    
                // If successful, handle type chaining
                if ( isSuccess ) {
    
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if ( s.ifModified ) {
                        modified = jqXHR.getResponseHeader( "Last-Modified" );
                        if ( modified ) {
                            jQuery.lastModified[ cacheURL ] = modified;
                        }
                        modified = jqXHR.getResponseHeader( "etag" );
                        if ( modified ) {
                            jQuery.etag[ cacheURL ] = modified;
                        }
                    }
    
                    // if no content
                    if ( status === 204 || s.type === "HEAD" ) {
                        statusText = "nocontent";
    
                    // if not modified
                    } else if ( status === 304 ) {
                        statusText = "notmodified";
    
                    // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
    
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if ( status || !statusText ) {
                        statusText = "error";
                        if ( status < 0 ) {
                            status = 0;
                        }
                    }
                }
    
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = ( nativeStatusText || statusText ) + "";
    
                // Success/Error
                if ( isSuccess ) {
                    deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                } else {
                    deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                }
    
                // Status-dependent callbacks
                jqXHR.statusCode( statusCode );
                statusCode = undefined;
    
                if ( fireGlobals ) {
                    globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
                        [ jqXHR, s, isSuccess ? success : error ] );
                }
    
                // Complete
                completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
    
                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
    
                    // Handle the global AJAX counter
                    if ( !( --jQuery.active ) ) {
                        jQuery.event.trigger( "ajaxStop" );
                    }
                }
            }
    
            return jqXHR;
        },
    
        getJSON: function( url, data, callback ) {
            return jQuery.get( url, data, callback, "json" );
        },
    
        getScript: function( url, callback ) {
            return jQuery.get( url, undefined, callback, "script" );
        }
    } );
    
    jQuery.each( [ "get", "post" ], function( i, method ) {
        jQuery[ method ] = function( url, data, callback, type ) {
    
            // Shift arguments if data argument was omitted
            if ( jQuery.isFunction( data ) ) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
    
            // The url can be an options object (which then must have .url)
            return jQuery.ajax( jQuery.extend( {
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject( url ) && url ) );
        };
    } );
    
    
    jQuery._evalUrl = function( url ) {
        return jQuery.ajax( {
            url: url,
    
            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        } );
    };
    
    
    jQuery.fn.extend( {
        wrapAll: function( html ) {
            var wrap;
    
            if ( this[ 0 ] ) {
                if ( jQuery.isFunction( html ) ) {
                    html = html.call( this[ 0 ] );
                }
    
                // The elements to wrap the target around
                wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
    
                if ( this[ 0 ].parentNode ) {
                    wrap.insertBefore( this[ 0 ] );
                }
    
                wrap.map( function() {
                    var elem = this;
    
                    while ( elem.firstElementChild ) {
                        elem = elem.firstElementChild;
                    }
    
                    return elem;
                } ).append( this );
            }
    
            return this;
        },
    
        wrapInner: function( html ) {
            if ( jQuery.isFunction( html ) ) {
                return this.each( function( i ) {
                    jQuery( this ).wrapInner( html.call( this, i ) );
                } );
            }
    
            return this.each( function() {
                var self = jQuery( this ),
                    contents = self.contents();
    
                if ( contents.length ) {
                    contents.wrapAll( html );
    
                } else {
                    self.append( html );
                }
            } );
        },
    
        wrap: function( html ) {
            var isFunction = jQuery.isFunction( html );
    
            return this.each( function( i ) {
                jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
            } );
        },
    
        unwrap: function( selector ) {
            this.parent( selector ).not( "body" ).each( function() {
                jQuery( this ).replaceWith( this.childNodes );
            } );
            return this;
        }
    } );
    
    
    jQuery.expr.pseudos.hidden = function( elem ) {
        return !jQuery.expr.pseudos.visible( elem );
    };
    jQuery.expr.pseudos.visible = function( elem ) {
        return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
    };
    
    
    
    
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest();
        } catch ( e ) {}
    };
    
    var xhrSuccessStatus = {
    
            // File protocol always yields status code 0, assume 200
            0: 200,
    
            // Support: IE <=9 only
            // #1450: sometimes IE returns 1223 when it should be 204
            1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();
    
    support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
    support.ajax = xhrSupported = !!xhrSupported;
    
    jQuery.ajaxTransport( function( options ) {
        var callback, errorCallback;
    
        // Cross domain only allowed if supported through XMLHttpRequest
        if ( support.cors || xhrSupported && !options.crossDomain ) {
            return {
                send: function( headers, complete ) {
                    var i,
                        xhr = options.xhr();
    
                    xhr.open(
                        options.type,
                        options.url,
                        options.async,
                        options.username,
                        options.password
                    );
    
                    // Apply custom fields if provided
                    if ( options.xhrFields ) {
                        for ( i in options.xhrFields ) {
                            xhr[ i ] = options.xhrFields[ i ];
                        }
                    }
    
                    // Override mime type if needed
                    if ( options.mimeType && xhr.overrideMimeType ) {
                        xhr.overrideMimeType( options.mimeType );
                    }
    
                    // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
                        headers[ "X-Requested-With" ] = "XMLHttpRequest";
                    }
    
                    // Set headers
                    for ( i in headers ) {
                        xhr.setRequestHeader( i, headers[ i ] );
                    }
    
                    // Callback
                    callback = function( type ) {
                        return function() {
                            if ( callback ) {
                                callback = errorCallback = xhr.onload =
                                    xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
    
                                if ( type === "abort" ) {
                                    xhr.abort();
                                } else if ( type === "error" ) {
    
                                    // Support: IE <=9 only
                                    // On a manual native abort, IE9 throws
                                    // errors on any property access that is not readyState
                                    if ( typeof xhr.status !== "number" ) {
                                        complete( 0, "error" );
                                    } else {
                                        complete(
    
                                            // File: protocol always yields status 0; see #8605, #14207
                                            xhr.status,
                                            xhr.statusText
                                        );
                                    }
                                } else {
                                    complete(
                                        xhrSuccessStatus[ xhr.status ] || xhr.status,
                                        xhr.statusText,
    
                                        // Support: IE <=9 only
                                        // IE9 has no XHR2 but throws on binary (trac-11426)
                                        // For XHR2 non-text, let the caller handle it (gh-2498)
                                        ( xhr.responseType || "text" ) !== "text"  ||
                                        typeof xhr.responseText !== "string" ?
                                            { binary: xhr.response } :
                                            { text: xhr.responseText },
                                        xhr.getAllResponseHeaders()
                                    );
                                }
                            }
                        };
                    };
    
                    // Listen to events
                    xhr.onload = callback();
                    errorCallback = xhr.onerror = callback( "error" );
    
                    // Support: IE 9 only
                    // Use onreadystatechange to replace onabort
                    // to handle uncaught aborts
                    if ( xhr.onabort !== undefined ) {
                        xhr.onabort = errorCallback;
                    } else {
                        xhr.onreadystatechange = function() {
    
                            // Check readyState before timeout as it changes
                            if ( xhr.readyState === 4 ) {
    
                                // Allow onerror to be called first,
                                // but that will not handle a native abort
                                // Also, save errorCallback to a variable
                                // as xhr.onerror cannot be accessed
                                window.setTimeout( function() {
                                    if ( callback ) {
                                        errorCallback();
                                    }
                                } );
                            }
                        };
                    }
    
                    // Create the abort callback
                    callback = callback( "abort" );
    
                    try {
    
                        // Do send the request (this may raise an exception)
                        xhr.send( options.hasContent && options.data || null );
                    } catch ( e ) {
    
                        // #14683: Only rethrow if this hasn't been notified as an error yet
                        if ( callback ) {
                            throw e;
                        }
                    }
                },
    
                abort: function() {
                    if ( callback ) {
                        callback();
                    }
                }
            };
        }
    } );
    
    
    
    
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter( function( s ) {
        if ( s.crossDomain ) {
            s.contents.script = false;
        }
    } );
    
    // Install script dataType
    jQuery.ajaxSetup( {
        accepts: {
            script: "text/javascript, application/javascript, " +
                "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function( text ) {
                jQuery.globalEval( text );
                return text;
            }
        }
    } );
    
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter( "script", function( s ) {
        if ( s.cache === undefined ) {
            s.cache = false;
        }
        if ( s.crossDomain ) {
            s.type = "GET";
        }
    } );
    
    // Bind script tag hack transport
    jQuery.ajaxTransport( "script", function( s ) {
    
        // This transport only deals with cross domain requests
        if ( s.crossDomain ) {
            var script, callback;
            return {
                send: function( _, complete ) {
                    script = jQuery( "<script>" ).prop( {
                        charset: s.scriptCharset,
                        src: s.url
                    } ).on(
                        "load error",
                        callback = function( evt ) {
                            script.remove();
                            callback = null;
                            if ( evt ) {
                                complete( evt.type === "error" ? 404 : 200, evt.type );
                            }
                        }
                    );
    
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild( script[ 0 ] );
                },
                abort: function() {
                    if ( callback ) {
                        callback();
                    }
                }
            };
        }
    } );
    
    
    
    
    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;
    
    // Default jsonp settings
    jQuery.ajaxSetup( {
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
            this[ callback ] = true;
            return callback;
        }
    } );
    
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
    
        var callbackName, overwritten, responseContainer,
            jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
                "url" :
                typeof s.data === "string" &&
                    ( s.contentType || "" )
                        .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
                    rjsonp.test( s.data ) && "data"
            );
    
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
    
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
                s.jsonpCallback() :
                s.jsonpCallback;
    
            // Insert callback into url or form data
            if ( jsonProp ) {
                s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
            } else if ( s.jsonp !== false ) {
                s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
            }
    
            // Use data converter to retrieve json after script execution
            s.converters[ "script json" ] = function() {
                if ( !responseContainer ) {
                    jQuery.error( callbackName + " was not called" );
                }
                return responseContainer[ 0 ];
            };
    
            // Force json dataType
            s.dataTypes[ 0 ] = "json";
    
            // Install callback
            overwritten = window[ callbackName ];
            window[ callbackName ] = function() {
                responseContainer = arguments;
            };
    
            // Clean-up function (fires after converters)
            jqXHR.always( function() {
    
                // If previous value didn't exist - remove it
                if ( overwritten === undefined ) {
                    jQuery( window ).removeProp( callbackName );
    
                // Otherwise restore preexisting value
                } else {
                    window[ callbackName ] = overwritten;
                }
    
                // Save back as free
                if ( s[ callbackName ] ) {
    
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
    
                    // Save the callback name for future use
                    oldCallbacks.push( callbackName );
                }
    
                // Call if it was a function and we have a response
                if ( responseContainer && jQuery.isFunction( overwritten ) ) {
                    overwritten( responseContainer[ 0 ] );
                }
    
                responseContainer = overwritten = undefined;
            } );
    
            // Delegate to script
            return "script";
        }
    } );
    
    
    
    
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = ( function() {
        var body = document.implementation.createHTMLDocument( "" ).body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    } )();
    
    
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function( data, context, keepScripts ) {
        if ( typeof data !== "string" ) {
            return [];
        }
        if ( typeof context === "boolean" ) {
            keepScripts = context;
            context = false;
        }
    
        var base, parsed, scripts;
    
        if ( !context ) {
    
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if ( support.createHTMLDocument ) {
                context = document.implementation.createHTMLDocument( "" );
    
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement( "base" );
                base.href = document.location.href;
                context.head.appendChild( base );
            } else {
                context = document;
            }
        }
    
        parsed = rsingleTag.exec( data );
        scripts = !keepScripts && [];
    
        // Single tag
        if ( parsed ) {
            return [ context.createElement( parsed[ 1 ] ) ];
        }
    
        parsed = buildFragment( [ data ], context, scripts );
    
        if ( scripts && scripts.length ) {
            jQuery( scripts ).remove();
        }
    
        return jQuery.merge( [], parsed.childNodes );
    };
    
    
    /**
     * Load a url into a page
     */
    jQuery.fn.load = function( url, params, callback ) {
        var selector, type, response,
            self = this,
            off = url.indexOf( " " );
    
        if ( off > -1 ) {
            selector = jQuery.trim( url.slice( off ) );
            url = url.slice( 0, off );
        }
    
        // If it's a function
        if ( jQuery.isFunction( params ) ) {
    
            // We assume that it's the callback
            callback = params;
            params = undefined;
    
        // Otherwise, build a param string
        } else if ( params && typeof params === "object" ) {
            type = "POST";
        }
    
        // If we have elements to modify, make the request
        if ( self.length > 0 ) {
            jQuery.ajax( {
                url: url,
    
                // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: type || "GET",
                dataType: "html",
                data: params
            } ).done( function( responseText ) {
    
                // Save response for use in complete callback
                response = arguments;
    
                self.html( selector ?
    
                    // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
    
                    // Otherwise use the full result
                    responseText );
    
            // If the request succeeds, this function gets "data", "status", "jqXHR"
            // but they are ignored because response was set above.
            // If it fails, this function gets "jqXHR", "status", "error"
            } ).always( callback && function( jqXHR, status ) {
                self.each( function() {
                    callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
                } );
            } );
        }
    
        return this;
    };
    
    
    
    
    // Attach a bunch of functions for handling common AJAX events
    jQuery.each( [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function( i, type ) {
        jQuery.fn[ type ] = function( fn ) {
            return this.on( type, fn );
        };
    } );
    
    
    
    
    jQuery.expr.pseudos.animated = function( elem ) {
        return jQuery.grep( jQuery.timers, function( fn ) {
            return elem === fn.elem;
        } ).length;
    };
    
    
    
    
    /**
     * Gets a window from an element
     */
    function getWindow( elem ) {
        return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    
    jQuery.offset = {
        setOffset: function( elem, options, i ) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                position = jQuery.css( elem, "position" ),
                curElem = jQuery( elem ),
                props = {};
    
            // Set position first, in-case top/left are set even on static elem
            if ( position === "static" ) {
                elem.style.position = "relative";
            }
    
            curOffset = curElem.offset();
            curCSSTop = jQuery.css( elem, "top" );
            curCSSLeft = jQuery.css( elem, "left" );
            calculatePosition = ( position === "absolute" || position === "fixed" ) &&
                ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
    
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if ( calculatePosition ) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
    
            } else {
                curTop = parseFloat( curCSSTop ) || 0;
                curLeft = parseFloat( curCSSLeft ) || 0;
            }
    
            if ( jQuery.isFunction( options ) ) {
    
                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
            }
    
            if ( options.top != null ) {
                props.top = ( options.top - curOffset.top ) + curTop;
            }
            if ( options.left != null ) {
                props.left = ( options.left - curOffset.left ) + curLeft;
            }
    
            if ( "using" in options ) {
                options.using.call( elem, props );
    
            } else {
                curElem.css( props );
            }
        }
    };
    
    jQuery.fn.extend( {
        offset: function( options ) {
    
            // Preserve chaining for setter
            if ( arguments.length ) {
                return options === undefined ?
                    this :
                    this.each( function( i ) {
                        jQuery.offset.setOffset( this, options, i );
                    } );
            }
    
            var docElem, win, rect, doc,
                elem = this[ 0 ];
    
            if ( !elem ) {
                return;
            }
    
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if ( !elem.getClientRects().length ) {
                return { top: 0, left: 0 };
            }
    
            rect = elem.getBoundingClientRect();
    
            // Make sure element is not hidden (display: none)
            if ( rect.width || rect.height ) {
                doc = elem.ownerDocument;
                win = getWindow( doc );
                docElem = doc.documentElement;
    
                return {
                    top: rect.top + win.pageYOffset - docElem.clientTop,
                    left: rect.left + win.pageXOffset - docElem.clientLeft
                };
            }
    
            // Return zeros for disconnected and hidden elements (gh-2310)
            return rect;
        },
    
        position: function() {
            if ( !this[ 0 ] ) {
                return;
            }
    
            var offsetParent, offset,
                elem = this[ 0 ],
                parentOffset = { top: 0, left: 0 };
    
            // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
            // because it is its only offset parent
            if ( jQuery.css( elem, "position" ) === "fixed" ) {
    
                // Assume getBoundingClientRect is there when computed position is fixed
                offset = elem.getBoundingClientRect();
    
            } else {
    
                // Get *real* offsetParent
                offsetParent = this.offsetParent();
    
                // Get correct offsets
                offset = this.offset();
                if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
                    parentOffset = offsetParent.offset();
                }
    
                // Add offsetParent borders
                parentOffset = {
                    top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
                    left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
                };
            }
    
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
                left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
            };
        },
    
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map( function() {
                var offsetParent = this.offsetParent;
    
                while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
                    offsetParent = offsetParent.offsetParent;
                }
    
                return offsetParent || documentElement;
            } );
        }
    } );
    
    // Create scrollLeft and scrollTop methods
    jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
        var top = "pageYOffset" === prop;
    
        jQuery.fn[ method ] = function( val ) {
            return access( this, function( elem, method, val ) {
                var win = getWindow( elem );
    
                if ( val === undefined ) {
                    return win ? win[ prop ] : elem[ method ];
                }
    
                if ( win ) {
                    win.scrollTo(
                        !top ? val : win.pageXOffset,
                        top ? val : win.pageYOffset
                    );
    
                } else {
                    elem[ method ] = val;
                }
            }, method, val, arguments.length );
        };
    } );
    
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each( [ "top", "left" ], function( i, prop ) {
        jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
            function( elem, computed ) {
                if ( computed ) {
                    computed = curCSS( elem, prop );
    
                    // If curCSS returns percentage, fallback to offset
                    return rnumnonpx.test( computed ) ?
                        jQuery( elem ).position()[ prop ] + "px" :
                        computed;
                }
            }
        );
    } );
    
    
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
        jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
            function( defaultExtra, funcName ) {
    
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[ funcName ] = function( margin, value ) {
                var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                    extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
    
                return access( this, function( elem, type, value ) {
                    var doc;
    
                    if ( jQuery.isWindow( elem ) ) {
    
                        // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                        return funcName.indexOf( "outer" ) === 0 ?
                            elem[ "inner" + name ] :
                            elem.document.documentElement[ "client" + name ];
                    }
    
                    // Get document width or height
                    if ( elem.nodeType === 9 ) {
                        doc = elem.documentElement;
    
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(
                            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                            elem.body[ "offset" + name ], doc[ "offset" + name ],
                            doc[ "client" + name ]
                        );
                    }
    
                    return value === undefined ?
    
                        // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css( elem, type, extra ) :
    
                        // Set width or height on the element
                        jQuery.style( elem, type, value, extra );
                }, type, chainable ? margin : undefined, chainable );
            };
        } );
    } );
    
    
    jQuery.fn.extend( {
    
        bind: function( types, data, fn ) {
            return this.on( types, null, data, fn );
        },
        unbind: function( types, fn ) {
            return this.off( types, null, fn );
        },
    
        delegate: function( selector, types, data, fn ) {
            return this.on( types, selector, data, fn );
        },
        undelegate: function( selector, types, fn ) {
    
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ?
                this.off( selector, "**" ) :
                this.off( types, selector || "**", fn );
        }
    } );
    
    jQuery.parseJSON = JSON.parse;
    
    
    
    
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    
    if ( typeof define === "function" && define.amd ) {
        define( "jquery", [], function() {
            return jQuery;
        } );
    }
    
    
    
    
    
    var
    
        // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,
    
        // Map over the $ in case of overwrite
        _$ = window.$;
    
    jQuery.noConflict = function( deep ) {
        if ( window.$ === jQuery ) {
            window.$ = _$;
        }
    
        if ( deep && window.jQuery === jQuery ) {
            window.jQuery = _jQuery;
        }
    
        return jQuery;
    };
    
    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if ( !noGlobal ) {
        window.jQuery = window.$ = jQuery;
    }
    
    
    return jQuery;
    } );
    
    },{}],6:[function(require,module,exports){
    /*! lightslider - v1.1.5 - 2015-10-31
    * https://github.com/sachinchoolur/lightslider
    * Copyright (c) 2015 Sachin N; Licensed MIT */
    (function ($, undefined) {
        'use strict';
        var defaults = {
            item: 3,
            autoWidth: false,
            slideMove: 1,
            slideMargin: 10,
            addClass: '',
            mode: 'slide',
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
            easing: 'linear', //'for jquery animation',//
            speed: 400, //ms'
            auto: false,
            pauseOnHover: false,
            loop: false,
            slideEndAnimation: true,
            pause: 2000,
            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            rtl: false,
            adaptiveHeight: false,
            vertical: false,
            verticalHeight: 500,
            vThumbWidth: 100,
            thumbItem: 10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
            enableTouch: true,
            enableDrag: true,
            freeMove: true,
            swipeThreshold: 40,
            responsive: [],
            /* jshint ignore:start */
            onBeforeStart: function ($el) {},
            onSliderLoad: function ($el) {},
            onBeforeSlide: function ($el, scene) {},
            onAfterSlide: function ($el, scene) {},
            onBeforeNextSlide: function ($el, scene) {},
            onBeforePrevSlide: function ($el, scene) {}
            /* jshint ignore:end */
        };
        $.fn.lightSlider = function (options) {
            if (this.length === 0) {
                return this;
            }
    
            if (this.length > 1) {
                this.each(function () {
                    $(this).lightSlider(options);
                });
                return this;
            }
    
            var plugin = {},
                settings = $.extend(true, {}, defaults, options),
                settingsTemp = {},
                $el = this;
            plugin.$el = this;
    
            if (settings.mode === 'fade') {
                settings.vertical = false;
            }
            var $children = $el.children(),
                windowW = $(window).width(),
                breakpoint = null,
                resposiveObj = null,
                length = 0,
                w = 0,
                on = false,
                elSize = 0,
                $slide = '',
                scene = 0,
                property = (settings.vertical === true) ? 'height' : 'width',
                gutter = (settings.vertical === true) ? 'margin-bottom' : 'margin-right',
                slideValue = 0,
                pagerWidth = 0,
                slideWidth = 0,
                thumbWidth = 0,
                interval = null,
                isTouch = ('ontouchstart' in document.documentElement);
            var refresh = {};
    
            refresh.chbreakpoint = function () {
                windowW = $(window).width();
                if (settings.responsive.length) {
                    var item;
                    if (settings.autoWidth === false) {
                        item = settings.item;
                    }
                    if (windowW < settings.responsive[0].breakpoint) {
                        for (var i = 0; i < settings.responsive.length; i++) {
                            if (windowW < settings.responsive[i].breakpoint) {
                                breakpoint = settings.responsive[i].breakpoint;
                                resposiveObj = settings.responsive[i];
                            }
                        }
                    }
                    if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
                        for (var j in resposiveObj.settings) {
                            if (resposiveObj.settings.hasOwnProperty(j)) {
                                if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
                                    settingsTemp[j] = settings[j];
                                }
                                settings[j] = resposiveObj.settings[j];
                            }
                        }
                    }
                    if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                        for (var k in settingsTemp) {
                            if (settingsTemp.hasOwnProperty(k)) {
                                settings[k] = settingsTemp[k];
                            }
                        }
                    }
                    if (settings.autoWidth === false) {
                        if (slideValue > 0 && slideWidth > 0) {
                            if (item !== settings.item) {
                                scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
                            }
                        }
                    }
                }
            };
    
            refresh.calSW = function () {
                if (settings.autoWidth === false) {
                    slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
                }
            };
    
            refresh.calWidth = function (cln) {
                var ln = cln === true ? $slide.find('.lslide').length : $children.length;
                if (settings.autoWidth === false) {
                    w = ln * (slideWidth + settings.slideMargin);
                } else {
                    w = 0;
                    for (var i = 0; i < ln; i++) {
                        w += (parseInt($children.eq(i).width()) + settings.slideMargin);
                    }
                }
                return w;
            };
            plugin = {
                doCss: function () {
                    var support = function () {
                        var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                        var root = document.documentElement;
                        for (var i = 0; i < transition.length; i++) {
                            if (transition[i] in root.style) {
                                return true;
                            }
                        }
                    };
                    if (settings.useCSS && support()) {
                        return true;
                    }
                    return false;
                },
                keyPress: function () {
                    if (settings.keyPress) {
                        $(document).on('keyup.lightslider', function (e) {
                            if (!$(':focus').is('input, textarea')) {
                                if (e.preventDefault) {
                                    e.preventDefault();
                                } else {
                                    e.returnValue = false;
                                }
                                if (e.keyCode === 37) {
                                    $el.goToPrevSlide();
                                } else if (e.keyCode === 39) {
                                    $el.goToNextSlide();
                                }
                            }
                        });
                    }
                },
                controls: function () {
                    if (settings.controls) {
                        $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                        if (!settings.autoWidth) {
                            if (length <= settings.item) {
                                $slide.find('.lSAction').hide();
                            }
                        } else {
                            if (refresh.calWidth(false) < elSize) {
                                $slide.find('.lSAction').hide();
                            }
                        }
                        $slide.find('.lSAction a').on('click', function (e) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            if ($(this).attr('class') === 'lSPrev') {
                                $el.goToPrevSlide();
                            } else {
                                $el.goToNextSlide();
                            }
                            return false;
                        });
                    }
                },
                initialStyle: function () {
                    var $this = this;
                    if (settings.mode === 'fade') {
                        settings.autoWidth = false;
                        settings.slideEndAnimation = false;
                    }
                    if (settings.auto) {
                        settings.slideEndAnimation = false;
                    }
                    if (settings.autoWidth) {
                        settings.slideMove = 1;
                        settings.item = 1;
                    }
                    if (settings.loop) {
                        settings.slideMove = 1;
                        settings.freeMove = false;
                    }
                    settings.onBeforeStart.call(this, $el);
                    refresh.chbreakpoint();
                    $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
                    $slide = $el.parent('.lSSlideWrapper');
                    if (settings.rtl === true) {
                        $slide.parent().addClass('lSrtl');
                    }
                    if (settings.vertical) {
                        $slide.parent().addClass('vertical');
                        elSize = settings.verticalHeight;
                        $slide.css('height', elSize + 'px');
                    } else {
                        elSize = $el.outerWidth();
                    }
                    $children.addClass('lslide');
                    if (settings.loop === true && settings.mode === 'slide') {
                        refresh.calSW();
                        refresh.clone = function () {
                            if (refresh.calWidth(true) > elSize) {
                                /**/
                                var tWr = 0,
                                    tI = 0;
                                for (var k = 0; k < $children.length; k++) {
                                    tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                    tI++;
                                    if (tWr >= (elSize + settings.slideMargin)) {
                                        break;
                                    }
                                }
                                var tItem = settings.autoWidth === true ? tI : settings.item;
    
                                /**/
                                if (tItem < $el.find('.clone.left').length) {
                                    for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                        $children.eq(i).remove();
                                    }
                                }
                                if (tItem < $el.find('.clone.right').length) {
                                    for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                        scene--;
                                        $children.eq(j).remove();
                                    }
                                }
                                /**/
                                for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                                    $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                    scene++;
                                }
                                for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
                                    $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                                }
                                $children = $el.children();
                            } else {
                                if ($children.hasClass('clone')) {
                                    $el.find('.clone').remove();
                                    $this.move($el, 0);
                                }
                            }
                        };
                        refresh.clone();
                    }
                    refresh.sSW = function () {
                        length = $children.length;
                        if (settings.rtl === true && settings.vertical === false) {
                            gutter = 'margin-left';
                        }
                        if (settings.autoWidth === false) {
                            $children.css(property, slideWidth + 'px');
                        }
                        $children.css(gutter, settings.slideMargin + 'px');
                        w = refresh.calWidth(false);
                        $el.css(property, w + 'px');
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (on === false) {
                                scene = $el.find('.clone.left').length;
                            }
                        }
                    };
                    refresh.calL = function () {
                        $children = $el.children();
                        length = $children.length;
                    };
                    if (this.doCss()) {
                        $slide.addClass('usingCss');
                    }
                    refresh.calL();
                    if (settings.mode === 'slide') {
                        refresh.calSW();
                        refresh.sSW();
                        if (settings.loop === true) {
                            slideValue = $this.slideValue();
                            this.move($el, slideValue);
                        }
                        if (settings.vertical === false) {
                            this.setHeight($el, false);
                        }
    
                    } else {
                        this.setHeight($el, true);
                        $el.addClass('lSFade');
                        if (!this.doCss()) {
                            $children.fadeOut(0);
                            $children.eq(scene).fadeIn(0);
                        }
                    }
                    if (settings.loop === true && settings.mode === 'slide') {
                        $children.eq(scene).addClass('active');
                    } else {
                        $children.first().addClass('active');
                    }
                },
                pager: function () {
                    var $this = this;
                    refresh.createPager = function () {
                        thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                        var $children = $slide.find('.lslide');
                        var length = $slide.find('.lslide').length;
                        var i = 0,
                            pagers = '',
                            v = 0;
                        for (i = 0; i < length; i++) {
                            if (settings.mode === 'slide') {
                                // calculate scene * slide value
                                if (!settings.autoWidth) {
                                    v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
                                } else {
                                    v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
                                }
                            }
                            var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                            if (settings.gallery === true) {
                                pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
                            } else {
                                pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                            }
                            if (settings.mode === 'slide') {
                                if ((v) >= w - elSize - settings.slideMargin) {
                                    i = i + 1;
                                    var minPgr = 2;
                                    if (settings.autoWidth) {
                                        pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                        minPgr = 1;
                                    }
                                    if (i < minPgr) {
                                        pagers = null;
                                        $slide.parent().addClass('noPager');
                                    } else {
                                        $slide.parent().removeClass('noPager');
                                    }
                                    break;
                                }
                            }
                        }
                        var $cSouter = $slide.parent();
                        $cSouter.find('.lSPager').html(pagers); 
                        if (settings.gallery === true) {
                            if (settings.vertical === true) {
                                // set Gallery thumbnail width
                                $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                            }
                            pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                            $cSouter.find('.lSPager').css({
                                property: pagerWidth + 'px',
                                'transition-duration': settings.speed + 'ms'
                            });
                            if (settings.vertical === true) {
                                $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
                            }
                            $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
                        }
                        var $pager = $cSouter.find('.lSPager').find('li');
                        $pager.first().addClass('active');
                        $pager.on('click', function () {
                            if (settings.loop === true && settings.mode === 'slide') {
                                scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
                            } else {
                                scene = $pager.index(this);
                            }
                            $el.mode(false);
                            if (settings.gallery === true) {
                                $this.slideThumb();
                            }
                            return false;
                        });
                    };
                    if (settings.pager) {
                        var cl = 'lSpg';
                        if (settings.gallery) {
                            cl = 'lSGallery';
                        }
                        $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                        var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
                        $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                        refresh.createPager();
                    }
    
                    setTimeout(function () {
                        refresh.init();
                    }, 0);
                },
                setHeight: function (ob, fade) {
                    var obj = null,
                        $this = this;
                    if (settings.loop) {
                        obj = ob.children('.lslide ').first();
                    } else {
                        obj = ob.children().first();
                    }
                    var setCss = function () {
                        var tH = obj.outerHeight(),
                            tP = 0,
                            tHT = tH;
                        if (fade) {
                            tH = 0;
                            tP = ((tHT) * 100) / elSize;
                        }
                        ob.css({
                            'height': tH + 'px',
                            'padding-bottom': tP + '%'
                        });
                    };
                    setCss();
                    if (obj.find('img').length) {
                        if ( obj.find('img')[0].complete) {
                            setCss();
                            if (!interval) {
                                $this.auto();
                            }   
                        }else{
                            obj.find('img').load(function () {
                                setTimeout(function () {
                                    setCss();
                                    if (!interval) {
                                        $this.auto();
                                    }
                                }, 100);
                            });
                        }
                    }else{
                        if (!interval) {
                            $this.auto();
                        }
                    }
                },
                active: function (ob, t) {
                    if (this.doCss() && settings.mode === 'fade') {
                        $slide.addClass('on');
                    }
                    var sc = 0;
                    if (scene * settings.slideMove < length) {
                        ob.removeClass('active');
                        if (!this.doCss() && settings.mode === 'fade' && t === false) {
                            ob.fadeOut(settings.speed);
                        }
                        if (t === true) {
                            sc = scene;
                        } else {
                            sc = scene * settings.slideMove;
                        }
                        //t === true ? sc = scene : sc = scene * settings.slideMove;
                        var l, nl;
                        if (t === true) {
                            l = ob.length;
                            nl = l - 1;
                            if (sc + 1 >= l) {
                                sc = nl;
                            }
                        }
                        if (settings.loop === true && settings.mode === 'slide') {
                            //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
                            if (t === true) {
                                sc = scene - $el.find('.clone.left').length;
                            } else {
                                sc = scene * settings.slideMove;
                            }
                            if (t === true) {
                                l = ob.length;
                                nl = l - 1;
                                if (sc + 1 === l) {
                                    sc = nl;
                                } else if (sc + 1 > l) {
                                    sc = 0;
                                }
                            }
                        }
    
                        if (!this.doCss() && settings.mode === 'fade' && t === false) {
                            ob.eq(sc).fadeIn(settings.speed);
                        }
                        ob.eq(sc).addClass('active');
                    } else {
                        ob.removeClass('active');
                        ob.eq(ob.length - 1).addClass('active');
                        if (!this.doCss() && settings.mode === 'fade' && t === false) {
                            ob.fadeOut(settings.speed);
                            ob.eq(sc).fadeIn(settings.speed);
                        }
                    }
                },
                move: function (ob, v) {
                    if (settings.rtl === true) {
                        v = -v;
                    }
                    if (this.doCss()) {
                        if (settings.vertical === true) {
                            ob.css({
                                'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
                                '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                            });
                        } else {
                            ob.css({
                                'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                                '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                            });
                        }
                    } else {
                        if (settings.vertical === true) {
                            ob.css('position', 'relative').animate({
                                top: -v + 'px'
                            }, settings.speed, settings.easing);
                        } else {
                            ob.css('position', 'relative').animate({
                                left: -v + 'px'
                            }, settings.speed, settings.easing);
                        }
                    }
                    var $thumb = $slide.parent().find('.lSPager').find('li');
                    this.active($thumb, true);
                },
                fade: function () {
                    this.active($children, false);
                    var $thumb = $slide.parent().find('.lSPager').find('li');
                    this.active($thumb, true);
                },
                slide: function () {
                    var $this = this;
                    refresh.calSlide = function () {
                        if (w > elSize) {
                            slideValue = $this.slideValue();
                            $this.active($children, false);
                            if ((slideValue) > w - elSize - settings.slideMargin) {
                                slideValue = w - elSize - settings.slideMargin;
                            } else if (slideValue < 0) {
                                slideValue = 0;
                            }
                            $this.move($el, slideValue);
                            if (settings.loop === true && settings.mode === 'slide') {
                                if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
                                    $this.resetSlide($el.find('.clone.left').length);
                                }
                                if (scene === 0) {
                                    $this.resetSlide($slide.find('.lslide').length);
                                }
                            }
                        }
                    };
                    refresh.calSlide();
                },
                resetSlide: function (s) {
                    var $this = this;
                    $slide.find('.lSAction a').addClass('disabled');
                    setTimeout(function () {
                        scene = s;
                        $slide.css('transition-duration', '0ms');
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        plugin.move($el, slideValue);
                        setTimeout(function () {
                            $slide.css('transition-duration', settings.speed + 'ms');
                            $slide.find('.lSAction a').removeClass('disabled');
                        }, 50);
                    }, settings.speed + 100);
                },
                slideValue: function () {
                    var _sV = 0;
                    if (settings.autoWidth === false) {
                        _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
                    } else {
                        _sV = 0;
                        for (var i = 0; i < scene; i++) {
                            _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
                        }
                    }
                    return _sV;
                },
                slideThumb: function () {
                    var position;
                    switch (settings.currentPagerPosition) {
                    case 'left':
                        position = 0;
                        break;
                    case 'middle':
                        position = (elSize / 2) - (thumbWidth / 2);
                        break;
                    case 'right':
                        position = elSize - thumbWidth;
                    }
                    var sc = scene - $el.find('.clone.left').length;
                    var $pager = $slide.parent().find('.lSPager');
                    if (settings.mode === 'slide' && settings.loop === true) {
                        if (sc >= $pager.children().length) {
                            sc = 0;
                        } else if (sc < 0) {
                            sc = $pager.children().length;
                        }
                    }
                    var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
                    if ((thumbSlide + elSize) > pagerWidth) {
                        thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                    }
                    if (thumbSlide < 0) {
                        thumbSlide = 0;
                    }
                    this.move($pager, thumbSlide);
                },
                auto: function () {
                    if (settings.auto) {
                        clearInterval(interval);
                        interval = setInterval(function () {
                            $el.goToNextSlide();
                        }, settings.pause);
                    }
                },
                pauseOnHover: function(){
                    var $this = this;
                    if (settings.auto && settings.pauseOnHover) {
                        $slide.on('mouseenter', function(){
                            $(this).addClass('ls-hover');
                            $el.pause();
                            settings.auto = true;
                        });
                        $slide.on('mouseleave',function(){
                            $(this).removeClass('ls-hover');
                            if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
                                $this.auto();
                            }
                        });
                    }
                },
                touchMove: function (endCoords, startCoords) {
                    $slide.css('transition-duration', '0ms');
                    if (settings.mode === 'slide') {
                        var distance = endCoords - startCoords;
                        var swipeVal = slideValue - distance;
                        if ((swipeVal) >= w - elSize - settings.slideMargin) {
                            if (settings.freeMove === false) {
                                swipeVal = w - elSize - settings.slideMargin;
                            } else {
                                var swipeValT = w - elSize - settings.slideMargin;
                                swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);
    
                            }
                        } else if (swipeVal < 0) {
                            if (settings.freeMove === false) {
                                swipeVal = 0;
                            } else {
                                swipeVal = swipeVal / 5;
                            }
                        }
                        this.move($el, swipeVal);
                    }
                },
    
                touchEnd: function (distance) {
                    $slide.css('transition-duration', settings.speed + 'ms');
                    if (settings.mode === 'slide') {
                        var mxVal = false;
                        var _next = true;
                        slideValue = slideValue - distance;
                        if ((slideValue) > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin;
                            if (settings.autoWidth === false) {
                                mxVal = true;
                            }
                        } else if (slideValue < 0) {
                            slideValue = 0;
                        }
                        var gC = function (next) {
                            var ad = 0;
                            if (!mxVal) {
                                if (next) {
                                    ad = 1;
                                }
                            }
                            if (!settings.autoWidth) {
                                var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                                scene = parseInt(num) + ad;
                                if (slideValue >= (w - elSize - settings.slideMargin)) {
                                    if (num % 1 !== 0) {
                                        scene++;
                                    }
                                }
                            } else {
                                var tW = 0;
                                for (var i = 0; i < $children.length; i++) {
                                    tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                    scene = i + ad;
                                    if (tW >= slideValue) {
                                        break;
                                    }
                                }
                            }
                        };
                        if (distance >= settings.swipeThreshold) {
                            gC(false);
                            _next = false;
                        } else if (distance <= -settings.swipeThreshold) {
                            gC(true);
                            _next = false;
                        }
                        $el.mode(_next);
                        this.slideThumb();
                    } else {
                        if (distance >= settings.swipeThreshold) {
                            $el.goToPrevSlide();
                        } else if (distance <= -settings.swipeThreshold) {
                            $el.goToNextSlide();
                        }
                    }
                },
    
    
    
                enableDrag: function () {
                    var $this = this;
                    if (!isTouch) {
                        var startCoords = 0,
                            endCoords = 0,
                            isDraging = false;
                        $slide.find('.lightSlider').addClass('lsGrab');
                        $slide.on('mousedown', function (e) {
                            if (w < elSize) {
                                if (w !== 0) {
                                    return false;
                                }
                            }
                            if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                                startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                                isDraging = true;
                                if (e.preventDefault) {
                                    e.preventDefault();
                                } else {
                                    e.returnValue = false;
                                }
                                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                                $slide.scrollLeft += 1;
                                $slide.scrollLeft -= 1;
                                // *
                                $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                                clearInterval(interval);
                            }
                        });
                        $(window).on('mousemove', function (e) {
                            if (isDraging) {
                                endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                                $this.touchMove(endCoords, startCoords);
                            }
                        });
                        $(window).on('mouseup', function (e) {
                            if (isDraging) {
                                $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                                isDraging = false;
                                endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                                var distance = endCoords - startCoords;
                                if (Math.abs(distance) >= settings.swipeThreshold) {
                                    $(window).on('click.ls', function (e) {
                                        if (e.preventDefault) {
                                            e.preventDefault();
                                        } else {
                                            e.returnValue = false;
                                        }
                                        e.stopImmediatePropagation();
                                        e.stopPropagation();
                                        $(window).off('click.ls');
                                    });
                                }
    
                                $this.touchEnd(distance);
    
                            }
                        });
                    }
                },
    
    
    
    
                enableTouch: function () {
                    var $this = this;
                    if (isTouch) {
                        var startCoords = {},
                            endCoords = {};
                        $slide.on('touchstart', function (e) {
                            endCoords = e.originalEvent.targetTouches[0];
                            startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                            startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                            clearInterval(interval);
                        });
                        $slide.on('touchmove', function (e) {
                            if (w < elSize) {
                                if (w !== 0) {
                                    return false;
                                }
                            }
                            var orig = e.originalEvent;
                            endCoords = orig.targetTouches[0];
                            var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
                            var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                            if (settings.vertical === true) {
                                if ((yMovement * 3) > xMovement) {
                                    e.preventDefault();
                                }
                                $this.touchMove(endCoords.pageY, startCoords.pageY);
                            } else {
                                if ((xMovement * 3) > yMovement) {
                                    e.preventDefault();
                                }
                                $this.touchMove(endCoords.pageX, startCoords.pageX);
                            }
    
                        });
                        $slide.on('touchend', function () {
                            if (w < elSize) {
                                if (w !== 0) {
                                    return false;
                                }
                            }
                            var distance;
                            if (settings.vertical === true) {
                                distance = endCoords.pageY - startCoords.pageY;
                            } else {
                                distance = endCoords.pageX - startCoords.pageX;
                            }
                            $this.touchEnd(distance);
                        });
                    }
                },
                build: function () {
                    var $this = this;
                    $this.initialStyle();
                    if (this.doCss()) {
    
                        if (settings.enableTouch === true) {
                            $this.enableTouch();
                        }
                        if (settings.enableDrag === true) {
                            $this.enableDrag();
                        }
                    }
    
                    $(window).on('focus', function(){
                        $this.auto();
                    });
                    
                    $(window).on('blur', function(){
                        clearInterval(interval);
                    });
    
                    $this.pager();
                    $this.pauseOnHover();
                    $this.controls();
                    $this.keyPress();
                }
            };
            plugin.build();
            refresh.init = function () {
                refresh.chbreakpoint();
                if (settings.vertical === true) {
                    if (settings.item > 1) {
                        elSize = settings.verticalHeight;
                    } else {
                        elSize = $children.outerHeight();
                    }
                    $slide.css('height', elSize + 'px');
                } else {
                    elSize = $slide.outerWidth();
                }
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.clone();
                }
                refresh.calL();
                if (settings.mode === 'slide') {
                    $el.removeClass('lSSlide');
                }
                if (settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.sSW();
                }
                setTimeout(function () {
                    if (settings.mode === 'slide') {
                        $el.addClass('lSSlide');
                    }
                }, 1000);
                if (settings.pager) {
                    refresh.createPager();
                }
                if (settings.adaptiveHeight === true && settings.vertical === false) {
                    $el.css('height', $children.eq(scene).outerHeight(true));
                }
                if (settings.adaptiveHeight === false) {
                    if (settings.mode === 'slide') {
                        if (settings.vertical === false) {
                            plugin.setHeight($el, false);
                        }else{
                            plugin.auto();
                        }
                    } else {
                        plugin.setHeight($el, true);
                    }
                }
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
                if (settings.mode === 'slide') {
                    plugin.slide();
                }
                if (settings.autoWidth === false) {
                    if ($children.length <= settings.item) {
                        $slide.find('.lSAction').hide();
                    } else {
                        $slide.find('.lSAction').show();
                    }
                } else {
                    if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
                        $slide.find('.lSAction').hide();
                    } else {
                        $slide.find('.lSAction').show();
                    }
                }
            };
            $el.goToPrevSlide = function () {
                if (scene > 0) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    scene--;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else {
                    if (settings.loop === true) {
                        settings.onBeforePrevSlide.call(this, $el, scene);
                        if (settings.mode === 'fade') {
                            var l = (length - 1);
                            scene = parseInt(l / settings.slideMove);
                        }
                        $el.mode(false);
                        if (settings.gallery === true) {
                            plugin.slideThumb();
                        }
                    } else if (settings.slideEndAnimation === true) {
                        $el.addClass('leftEnd');
                        setTimeout(function () {
                            $el.removeClass('leftEnd');
                        }, 400);
                    }
                }
            };
            $el.goToNextSlide = function () {
                var nextI = true;
                if (settings.mode === 'slide') {
                    var _slideValue = plugin.slideValue();
                    nextI = _slideValue < w - elSize - settings.slideMargin;
                }
                if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene++;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else {
                    if (settings.loop === true) {
                        settings.onBeforeNextSlide.call(this, $el, scene);
                        scene = 0;
                        $el.mode(false);
                        if (settings.gallery === true) {
                            plugin.slideThumb();
                        }
                    } else if (settings.slideEndAnimation === true) {
                        $el.addClass('rightEnd');
                        setTimeout(function () {
                            $el.removeClass('rightEnd');
                        }, 400);
                    }
                }
            };
            $el.mode = function (_touch) {
                if (settings.adaptiveHeight === true && settings.vertical === false) {
                    $el.css('height', $children.eq(scene).outerHeight(true));
                }
                if (on === false) {
                    if (settings.mode === 'slide') {
                        if (plugin.doCss()) {
                            $el.addClass('lSSlide');
                            if (settings.speed !== '') {
                                $slide.css('transition-duration', settings.speed + 'ms');
                            }
                            if (settings.cssEasing !== '') {
                                $slide.css('transition-timing-function', settings.cssEasing);
                            }
                        }
                    } else {
                        if (plugin.doCss()) {
                            if (settings.speed !== '') {
                                $el.css('transition-duration', settings.speed + 'ms');
                            }
                            if (settings.cssEasing !== '') {
                                $el.css('transition-timing-function', settings.cssEasing);
                            }
                        }
                    }
                }
                if (!_touch) {
                    settings.onBeforeSlide.call(this, $el, scene);
                }
                if (settings.mode === 'slide') {
                    plugin.slide();
                } else {
                    plugin.fade();
                }
                if (!$slide.hasClass('ls-hover')) {
                    plugin.auto();
                }
                setTimeout(function () {
                    if (!_touch) {
                        settings.onAfterSlide.call(this, $el, scene);
                    }
                }, settings.speed);
                on = true;
            };
            $el.play = function () {
                $el.goToNextSlide();
                settings.auto = true;
                plugin.auto();
            };
            $el.pause = function () {
                settings.auto = false;
                clearInterval(interval);
            };
            $el.refresh = function () {
                refresh.init();
            };
            $el.getCurrentSlideCount = function () {
                var sc = scene;
                if (settings.loop) {
                    var ln = $slide.find('.lslide').length,
                        cl = $el.find('.clone.left').length;
                    if (scene <= cl - 1) {
                        sc = ln + (scene - cl);
                    } else if (scene >= (ln + cl)) {
                        sc = scene - ln - cl;
                    } else {
                        sc = scene - cl;
                    }
                }
                return sc + 1;
            }; 
            $el.getTotalSlideCount = function () {
                return $slide.find('.lslide').length;
            };
            $el.goToSlide = function (s) {
                if (settings.loop) {
                    scene = (s + $el.find('.clone.left').length - 1);
                } else {
                    scene = s;
                }
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            };
            $el.destroy = function () {
                if ($el.lightSlider) {
                    $el.goToPrevSlide = function(){};
                    $el.goToNextSlide = function(){};
                    $el.mode = function(){};
                    $el.play = function(){};
                    $el.pause = function(){};
                    $el.refresh = function(){};
                    $el.getCurrentSlideCount = function(){};
                    $el.getTotalSlideCount = function(){};
                    $el.goToSlide = function(){}; 
                    $el.lightSlider = null;
                    refresh = {
                        init : function(){}
                    };
                    $el.parent().parent().find('.lSAction, .lSPager').remove();
                    $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
                    $el.children().removeAttr('style');
                    $children.removeClass('lslide active');
                    $el.find('.clone').remove();
                    $children = null;
                    interval = null;
                    on = false;
                    scene = 0;
                }
    
            };
            setTimeout(function () {
                settings.onSliderLoad.call(this, $el);
            }, 10);
            $(window).on('resize orientationchange', function (e) {
                setTimeout(function () {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                    refresh.init();
                }, 200);
            });
            return this;
        };
    }(jQuery));
    },{}],7:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Burst, Swirl, Transit, bitsMap, h,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      bitsMap = require('./shapes/bitsMap');
    
      Transit = require('./transit');
    
      Swirl = require('./swirl');
    
      h = require('./h');
    
      Burst = (function(_super) {
        __extends(Burst, _super);
    
        function Burst() {
          return Burst.__super__.constructor.apply(this, arguments);
        }
    
        Burst.prototype.skipProps = {
          childOptions: 1
        };
    
        Burst.prototype.defaults = {
          count: 5,
          degree: 360,
          opacity: 1,
          randomAngle: 0,
          randomRadius: 0,
          x: 100,
          y: 100,
          shiftX: 0,
          shiftY: 0,
          easing: 'Linear.None',
          radius: {
            25: 75
          },
          radiusX: void 0,
          radiusY: void 0,
          angle: 0,
          size: null,
          sizeGap: 0,
          duration: 600,
          delay: 0,
          onStart: null,
          onComplete: null,
          onCompleteChain: null,
          onUpdate: null,
          isResetAngles: false
        };
    
        Burst.prototype.childDefaults = {
          radius: {
            7: 0
          },
          radiusX: void 0,
          radiusY: void 0,
          angle: 0,
          opacity: 1,
          onStart: null,
          onComplete: null,
          onUpdate: null,
          points: 3,
          duration: 500,
          delay: 0,
          repeat: 0,
          yoyo: false,
          easing: 'Linear.None',
          type: 'circle',
          fill: 'deeppink',
          fillOpacity: 1,
          isSwirl: false,
          swirlSize: 10,
          swirlFrequency: 3,
          stroke: 'transparent',
          strokeWidth: 0,
          strokeOpacity: 1,
          strokeDasharray: '',
          strokeDashoffset: '',
          strokeLinecap: null
        };
    
        Burst.prototype.optionsIntersection = {
          radius: 1,
          radiusX: 1,
          radiusY: 1,
          angle: 1,
          opacity: 1,
          onStart: 1,
          onComplete: 1,
          onUpdate: 1
        };
    
        Burst.prototype.run = function(o) {
          var i, key, keys, len, option, tr, _base, _i, _len, _ref, _ref1;
          if ((o != null) && Object.keys(o).length) {
            if (o.count || ((_ref = o.childOptions) != null ? _ref.count : void 0)) {
              this.h.warn('Sorry, count can not be changed on run');
            }
            this.extendDefaults(o);
            keys = Object.keys(o.childOptions || {});
            if ((_base = this.o).childOptions == null) {
              _base.childOptions = {};
            }
            for (i = _i = 0, _len = keys.length; _i < _len; i = ++_i) {
              key = keys[i];
              this.o.childOptions[key] = o.childOptions[key];
            }
            len = this.transits.length;
            while (len--) {
              option = this.getOption(len);
              if ((((_ref1 = o.childOptions) != null ? _ref1.angle : void 0) == null) && (o.angleShift == null)) {
                option.angle = this.transits[len].o.angle;
              } else if (!o.isResetAngles) {
                option.angle = this.getBitAngle(option.angle, len);
              }
              this.transits[len].tuneNewOption(option, true);
            }
            this.timeline.recalcDuration();
          }
          if (this.props.randomAngle || this.props.randomRadius) {
            len = this.transits.length;
            while (len--) {
              tr = this.transits[len];
              this.props.randomAngle && tr.setProp({
                angleShift: this.generateRandomAngle()
              });
              this.props.randomRadius && tr.setProp({
                radiusScale: this.generateRandomRadius()
              });
            }
          }
          return this.startTween();
        };
    
        Burst.prototype.createBit = function() {
          var i, option, _i, _ref, _results;
          this.transits = [];
          _results = [];
          for (i = _i = 0, _ref = this.props.count; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            option = this.getOption(i);
            option.ctx = this.ctx;
            option.index = i;
            option.isDrawLess = option.isRunLess = option.isTweenLess = true;
            this.props.randomAngle && (option.angleShift = this.generateRandomAngle());
            this.props.randomRadius && (option.radiusScale = this.generateRandomRadius());
            _results.push(this.transits.push(new Swirl(option)));
          }
          return _results;
        };
    
        Burst.prototype.addBitOptions = function() {
          var aShift, i, pointEnd, pointStart, points, step, transit, _i, _len, _ref, _results;
          points = this.props.count;
          this.degreeCnt = this.props.degree % 360 === 0 ? points : points - 1 || 1;
          step = this.props.degree / this.degreeCnt;
          _ref = this.transits;
          _results = [];
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            transit = _ref[i];
            aShift = transit.props.angleShift || 0;
            pointStart = this.getSidePoint('start', i * step + aShift);
            pointEnd = this.getSidePoint('end', i * step + aShift);
            transit.o.x = this.getDeltaFromPoints('x', pointStart, pointEnd);
            transit.o.y = this.getDeltaFromPoints('y', pointStart, pointEnd);
            if (!this.props.isResetAngles) {
              transit.o.angle = this.getBitAngle(transit.o.angle, i);
            }
            _results.push(transit.extendDefaults());
          }
          return _results;
        };
    
        Burst.prototype.getBitAngle = function(angle, i) {
          var angleAddition, angleShift, curAngleShift, degCnt, delta, end, keys, newEnd, newStart, points, start, step;
          points = this.props.count;
          degCnt = this.props.degree % 360 === 0 ? points : points - 1 || 1;
          step = this.props.degree / degCnt;
          angleAddition = i * step + 90;
          angleShift = this.transits[i].props.angleShift || 0;
          angle = typeof angle !== 'object' ? angle + angleAddition + angleShift : (keys = Object.keys(angle), start = keys[0], end = angle[start], curAngleShift = angleAddition + angleShift, newStart = parseFloat(start) + curAngleShift, newEnd = parseFloat(end) + curAngleShift, delta = {}, delta[newStart] = newEnd, delta);
          return angle;
        };
    
        Burst.prototype.getSidePoint = function(side, angle) {
          var pointStart, sideRadius;
          sideRadius = this.getSideRadius(side);
          return pointStart = this.h.getRadialPoint({
            radius: sideRadius.radius,
            radiusX: sideRadius.radiusX,
            radiusY: sideRadius.radiusY,
            angle: angle,
            center: {
              x: this.props.center,
              y: this.props.center
            }
          });
        };
    
        Burst.prototype.getSideRadius = function(side) {
          return {
            radius: this.getRadiusByKey('radius', side),
            radiusX: this.getRadiusByKey('radiusX', side),
            radiusY: this.getRadiusByKey('radiusY', side)
          };
        };
    
        Burst.prototype.getRadiusByKey = function(key, side) {
          if (this.deltas[key] != null) {
            return this.deltas[key][side];
          } else if (this.props[key] != null) {
            return this.props[key];
          }
        };
    
        Burst.prototype.getDeltaFromPoints = function(key, pointStart, pointEnd) {
          var delta;
          delta = {};
          if (pointStart[key] === pointEnd[key]) {
            return delta = pointStart[key];
          } else {
            delta[pointStart[key]] = pointEnd[key];
            return delta;
          }
        };
    
        Burst.prototype.draw = function(progress) {
          return this.drawEl();
        };
    
        Burst.prototype.isNeedsTransform = function() {
          return this.isPropChanged('shiftX') || this.isPropChanged('shiftY') || this.isPropChanged('angle');
        };
    
        Burst.prototype.fillTransform = function() {
          return "rotate(" + this.props.angle + "deg) translate(" + this.props.shiftX + ", " + this.props.shiftY + ")";
        };
    
        Burst.prototype.createTween = function() {
          var i, _results;
          Burst.__super__.createTween.apply(this, arguments);
          i = this.transits.length;
          _results = [];
          while (i--) {
            _results.push(this.timeline.add(this.transits[i].tween));
          }
          return _results;
        };
    
        Burst.prototype.calcSize = function() {
          var i, largestSize, radius, transit, _i, _len, _ref;
          largestSize = -1;
          _ref = this.transits;
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            transit = _ref[i];
            transit.calcSize();
            if (largestSize < transit.props.size) {
              largestSize = transit.props.size;
            }
          }
          radius = this.calcMaxRadius();
          this.props.size = largestSize + 2 * radius;
          this.props.size += 2 * this.props.sizeGap;
          this.props.center = this.props.size / 2;
          return this.addBitOptions();
        };
    
        Burst.prototype.getOption = function(i) {
          var key, keys, len, option;
          option = {};
          keys = Object.keys(this.childDefaults);
          len = keys.length;
          while (len--) {
            key = keys[len];
            option[key] = this.getPropByMod({
              key: key,
              i: i,
              from: this.o.childOptions
            });
            if (this.optionsIntersection[key]) {
              if (option[key] == null) {
                option[key] = this.getPropByMod({
                  key: key,
                  i: i,
                  from: this.childDefaults
                });
              }
              continue;
            }
            if (option[key] == null) {
              option[key] = this.getPropByMod({
                key: key,
                i: i,
                from: this.o
              });
            }
            if (option[key] == null) {
              option[key] = this.getPropByMod({
                key: key,
                i: i,
                from: this.childDefaults
              });
            }
          }
          return option;
        };
    
        Burst.prototype.getPropByMod = function(o) {
          var prop, _ref;
          prop = (_ref = o.from || this.o.childOptions) != null ? _ref[o.key] : void 0;
          if (this.h.isArray(prop)) {
            return prop[o.i % prop.length];
          } else {
            return prop;
          }
        };
    
        Burst.prototype.generateRandomAngle = function(i) {
          var randdomness, randomness;
          randomness = parseFloat(this.props.randomAngle);
          randdomness = randomness > 1 ? 1 : randomness < 0 ? 0 : void 0;
          return this.h.rand(0, randomness ? randomness * 360 : 180);
        };
    
        Burst.prototype.generateRandomRadius = function(i) {
          var randdomness, randomness, start;
          randomness = parseFloat(this.props.randomRadius);
          randdomness = randomness > 1 ? 1 : randomness < 0 ? 0 : void 0;
          start = randomness ? (1 - randomness) * 100 : (1 - .5) * 100;
          return this.h.rand(start, 100) / 100;
        };
    
        Burst.prototype.then = function(o) {
          this.h.error("Burst's \"then\" method is under consideration, you can vote for it in github repo issues");
          return this;
        };
    
        return Burst;
    
      })(Transit);
    
      module.exports = Burst;
    
    }).call(this);
    
    },{"./h":12,"./shapes/bitsMap":18,"./swirl":28,"./transit":29}],8:[function(require,module,exports){
    (function (global){
    (function() {
      var BezierEasing, bezierEasing, h,
        __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
    
      h = require('../h');
    
    
      /**
       * Copyright (c) 2014 Gaëtan Renaudeau http://goo.gl/El3k7u
       * Adopted from https://github.com/gre/bezier-easing
       */
    
      BezierEasing = (function() {
        function BezierEasing(o) {
          this.vars();
          return this.generate;
        }
    
        BezierEasing.prototype.vars = function() {
          return this.generate = h.bind(this.generate, this);
        };
    
        BezierEasing.prototype.generate = function(mX1, mY1, mX2, mY2) {
          var A, B, C, NEWTON_ITERATIONS, NEWTON_MIN_SLOPE, SUBDIVISION_MAX_ITERATIONS, SUBDIVISION_PRECISION, arg, binarySubdivide, calcBezier, calcSampleValues, f, float32ArraySupported, getSlope, getTForX, i, kSampleStepSize, kSplineTableSize, mSampleValues, newtonRaphsonIterate, precompute, str, _i, _precomputed;
          if (arguments.length < 4) {
            return this.error('Bezier function expects 4 arguments');
          }
          for (i = _i = 0; _i < 4; i = ++_i) {
            arg = arguments[i];
            if (typeof arg !== "number" || isNaN(arg) || !isFinite(arg)) {
              return this.error('Bezier function expects 4 arguments');
            }
          }
          if (mX1 < 0 || mX1 > 1 || mX2 < 0 || mX2 > 1) {
            return this.error('Bezier x values should be > 0 and < 1');
          }
          NEWTON_ITERATIONS = 4;
          NEWTON_MIN_SLOPE = 0.001;
          SUBDIVISION_PRECISION = 0.0000001;
          SUBDIVISION_MAX_ITERATIONS = 10;
          kSplineTableSize = 11;
          kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
          float32ArraySupported = __indexOf.call(global, 'Float32Array') >= 0;
          A = function(aA1, aA2) {
            return 1.0 - 3.0 * aA2 + 3.0 * aA1;
          };
          B = function(aA1, aA2) {
            return 3.0 * aA2 - 6.0 * aA1;
          };
          C = function(aA1) {
            return 3.0 * aA1;
          };
          calcBezier = function(aT, aA1, aA2) {
            return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
          };
          getSlope = function(aT, aA1, aA2) {
            return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
          };
          newtonRaphsonIterate = function(aX, aGuessT) {
            var currentSlope, currentX;
            i = 0;
            while (i < NEWTON_ITERATIONS) {
              currentSlope = getSlope(aGuessT, mX1, mX2);
    
              /* istanbul ignore if */
              if (currentSlope === 0.0) {
                return aGuessT;
              }
              currentX = calcBezier(aGuessT, mX1, mX2) - aX;
              aGuessT -= currentX / currentSlope;
              ++i;
            }
            return aGuessT;
          };
          calcSampleValues = function() {
            i = 0;
            while (i < kSplineTableSize) {
              mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
              ++i;
            }
          };
    
          /* istanbul ignore next */
          binarySubdivide = function(aX, aA, aB) {
            var currentT, currentX, isBig;
            currentX = void 0;
            currentT = void 0;
            i = 0;
            while (true) {
              currentT = aA + (aB - aA) / 2.0;
              currentX = calcBezier(currentT, mX1, mX2) - aX;
              if (currentX > 0.0) {
                aB = currentT;
              } else {
                aA = currentT;
              }
              isBig = Math.abs(currentX) > SUBDIVISION_PRECISION;
              if (!(isBig && ++i < SUBDIVISION_MAX_ITERATIONS)) {
                break;
              }
            }
            return currentT;
          };
          getTForX = function(aX) {
            var currentSample, delta, dist, guessForT, initialSlope, intervalStart, lastSample;
            intervalStart = 0.0;
            currentSample = 1;
            lastSample = kSplineTableSize - 1;
            while (currentSample !== lastSample && mSampleValues[currentSample] <= aX) {
              intervalStart += kSampleStepSize;
              ++currentSample;
            }
            --currentSample;
            delta = mSampleValues[currentSample + 1] - mSampleValues[currentSample];
            dist = (aX - mSampleValues[currentSample]) / delta;
            guessForT = intervalStart + dist * kSampleStepSize;
            initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
              return newtonRaphsonIterate(aX, guessForT);
            } else {
    
              /* istanbul ignore next */
              if (initialSlope === 0.0) {
                return guessForT;
              } else {
                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
              }
            }
          };
          precompute = function() {
            var _precomputed;
            _precomputed = true;
            if (mX1 !== mY1 || mX2 !== mY2) {
              return calcSampleValues();
            }
          };
          mSampleValues = !float32ArraySupported ? new Array(kSplineTableSize) : new Float32Array(kSplineTableSize);
          _precomputed = false;
          f = function(aX) {
            if (!_precomputed) {
              precompute();
            }
            if (mX1 === mY1 && mX2 === mY2) {
              return aX;
            }
            if (aX === 0) {
              return 0;
            }
            if (aX === 1) {
              return 1;
            }
            return calcBezier(getTForX(aX), mY1, mY2);
          };
          str = "bezier(" + [mX1, mY1, mX2, mY2] + ")";
          f.toStr = function() {
            return str;
          };
          return f;
        };
    
        BezierEasing.prototype.error = function(msg) {
          return h.error(msg);
        };
    
        return BezierEasing;
    
      })();
    
      bezierEasing = new BezierEasing;
    
      module.exports = bezierEasing;
    
    }).call(this);
    
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    
    },{"../h":12}],9:[function(require,module,exports){
    (function() {
      var Easing, PathEasing, bezier, easing, h, mix;
    
      bezier = require('./bezier-easing');
    
      PathEasing = require('./path-easing');
    
      mix = require('./mix');
    
      h = require('../h');
    
      Easing = (function() {
        function Easing() {}
    
        Easing.prototype.bezier = bezier;
    
        Easing.prototype.PathEasing = PathEasing;
    
        Easing.prototype.path = (new PathEasing('creator')).create;
    
        Easing.prototype.inverse = function(p) {
          return 1 - p;
        };
    
        Easing.prototype.linear = {
          none: function(k) {
            return k;
          }
        };
    
        Easing.prototype.ease = {
          "in": bezier.apply(Easing, [0.42, 0, 1, 1]),
          out: bezier.apply(Easing, [0, 0, 0.58, 1]),
          inout: bezier.apply(Easing, [0.42, 0, 0.58, 1])
        };
    
        Easing.prototype.quad = {
          "in": function(k) {
            return k * k;
          },
          out: function(k) {
            return k * (2 - k);
          },
          inout: function(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k;
            }
            return -0.5 * (--k * (k - 2) - 1);
          }
        };
    
        Easing.prototype.cubic = {
          "in": function(k) {
            return k * k * k;
          },
          out: function(k) {
            return --k * k * k + 1;
          },
          inout: function(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k + 2);
          }
        };
    
        Easing.prototype.quart = {
          "in": function(k) {
            return k * k * k * k;
          },
          out: function(k) {
            return 1 - (--k * k * k * k);
          },
          inout: function(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k;
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
          }
        };
    
        Easing.prototype.quint = {
          "in": function(k) {
            return k * k * k * k * k;
          },
          out: function(k) {
            return --k * k * k * k * k + 1;
          },
          inout: function(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
          }
        };
    
        Easing.prototype.sin = {
          "in": function(k) {
            return 1 - Math.cos(k * Math.PI / 2);
          },
          out: function(k) {
            return Math.sin(k * Math.PI / 2);
          },
          inout: function(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
          }
        };
    
        Easing.prototype.expo = {
          "in": function(k) {
            if (k === 0) {
              return 0;
            } else {
              return Math.pow(1024, k - 1);
            }
          },
          out: function(k) {
            if (k === 1) {
              return 1;
            } else {
              return 1 - Math.pow(2, -10 * k);
            }
          },
          inout: function(k) {
            if (k === 0) {
              return 0;
            }
            if (k === 1) {
              return 1;
            }
            if ((k *= 2) < 1) {
              return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
          }
        };
    
        Easing.prototype.circ = {
          "in": function(k) {
            return 1 - Math.sqrt(1 - k * k);
          },
          out: function(k) {
            return Math.sqrt(1 - (--k * k));
          },
          inout: function(k) {
            if ((k *= 2) < 1) {
              return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
          }
        };
    
        Easing.prototype.back = {
          "in": function(k) {
            var s;
            s = 1.70158;
            return k * k * ((s + 1) * k - s);
          },
          out: function(k) {
            var s;
            s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
          },
          inout: function(k) {
            var s;
            s = 1.70158 * 1.525;
            if ((k *= 2) < 1) {
              return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
          }
        };
    
        Easing.prototype.elastic = {
          "in": function(k) {
            var a, p, s;
            s = void 0;
            p = 0.4;
            if (k === 0) {
              return 0;
            }
            if (k === 1) {
              return 1;
            }
            a = 1;
            s = p / 4;
            return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
          },
          out: function(k) {
            var a, p, s;
            s = void 0;
            p = 0.4;
            if (k === 0) {
              return 0;
            }
            if (k === 1) {
              return 1;
            }
            a = 1;
            s = p / 4;
            return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
          },
          inout: function(k) {
            var a, p, s;
            s = void 0;
            p = 0.4;
            if (k === 0) {
              return 0;
            }
            if (k === 1) {
              return 1;
            }
            a = 1;
            s = p / 4;
            if ((k *= 2) < 1) {
              return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
            }
            return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
          }
        };
    
        Easing.prototype.bounce = {
          "in": function(k) {
            return 1 - easing.bounce.out(1 - k);
          },
          out: function(k) {
            if (k < (1 / 2.75)) {
              return 7.5625 * k * k;
            } else if (k < (2 / 2.75)) {
              return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
            } else if (k < (2.5 / 2.75)) {
              return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
            } else {
              return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
            }
          },
          inout: function(k) {
            if (k < 0.5) {
              return easing.bounce["in"](k * 2) * 0.5;
            }
            return easing.bounce.out(k * 2 - 1) * 0.5 + 0.5;
          }
        };
    
        Easing.prototype.parseEasing = function(easing) {
          var easingParent, type;
          type = typeof easing;
          if (type === 'string') {
            if (easing.charAt(0).toLowerCase() === 'm') {
              return this.path(easing);
            } else {
              easing = this._splitEasing(easing);
              easingParent = this[easing[0]];
              if (!easingParent) {
                h.error("Easing with name \"" + easing[0] + "\" was not found, fallback to \"linear.none\" instead");
                return this['linear']['none'];
              }
              return easingParent[easing[1]];
            }
          }
          if (h.isArray(easing)) {
            return this.bezier.apply(this, easing);
          }
          if ('function') {
            return easing;
          }
        };
    
        Easing.prototype._splitEasing = function(string) {
          var firstPart, secondPart, split;
          if (typeof string === 'function') {
            return string;
          }
          if (typeof string === 'string' && string.length) {
            split = string.split('.');
            firstPart = split[0].toLowerCase() || 'linear';
            secondPart = split[1].toLowerCase() || 'none';
            return [firstPart, secondPart];
          } else {
            return ['linear', 'none'];
          }
        };
    
        return Easing;
    
      })();
    
      easing = new Easing;
    
      easing.mix = mix(easing);
    
      module.exports = easing;
    
    }).call(this);
    
    },{"../h":12,"./bezier-easing":8,"./mix":10,"./path-easing":11}],10:[function(require,module,exports){
    (function() {
      var create, easing, getNearest, mix, parseIfEasing, sort,
        __slice = [].slice;
    
      easing = null;
    
      parseIfEasing = function(item) {
        if (typeof item.value === 'number') {
          return item.value;
        } else {
          return easing.parseEasing(item.value);
        }
      };
    
      sort = function(a, b) {
        var returnValue;
        a.value = parseIfEasing(a);
        b.value = parseIfEasing(b);
        returnValue = 0;
        a.to < b.to && (returnValue = -1);
        a.to > b.to && (returnValue = 1);
        return returnValue;
      };
    
      getNearest = function(array, progress) {
        var i, index, value, _i, _len;
        index = 0;
        for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
          value = array[i];
          index = i;
          if (value.to > progress) {
            break;
          }
        }
        return index;
      };
    
      mix = function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (args.length > 1) {
          args = args.sort(sort);
        } else {
          args[0].value = parseIfEasing(args[0]);
        }
        return function(progress) {
          var index, value;
          index = getNearest(args, progress);
          if (index !== -1) {
            value = args[index].value;
            if (index === args.length - 1 && progress > args[index].to) {
              return 1;
            }
            if (typeof value === 'function') {
              return value(progress);
            } else {
              return value;
            }
          }
        };
      };
    
      create = function(e) {
        easing = e;
        return mix;
      };
    
      module.exports = create;
    
    }).call(this);
    
    },{}],11:[function(require,module,exports){
    (function() {
      var PathEasing, h;
    
      h = require('../h');
    
      PathEasing = (function() {
        PathEasing.prototype._vars = function() {
          this._precompute = h.clamp(this.o.precompute || 1450, 100, 10000);
          this._step = 1 / this._precompute;
          this._rect = this.o.rect || 100;
          this._approximateMax = this.o.approximateMax || 5;
          this._eps = this.o.eps || 0.001;
          return this._boundsPrevProgress = -1;
        };
    
        function PathEasing(path, o) {
          this.o = o != null ? o : {};
          if (path === 'creator') {
            return;
          }
          this.path = h.parsePath(path);
          if (this.path == null) {
            return h.error('Error while parsing the path');
          }
          this._vars();
          this.path.setAttribute('d', this._normalizePath(this.path.getAttribute('d')));
          this.pathLength = this.path.getTotalLength();
          this.sample = h.bind(this.sample, this);
          this._hardSample = h.bind(this._hardSample, this);
          this._preSample();
          this;
        }
    
        PathEasing.prototype._preSample = function() {
          var i, length, point, progress, _i, _ref, _results;
          this._samples = [];
          _results = [];
          for (i = _i = 0, _ref = this._precompute; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
            progress = i * this._step;
            length = this.pathLength * progress;
            point = this.path.getPointAtLength(length);
            _results.push(this._samples[i] = {
              point: point,
              length: length,
              progress: progress
            });
          }
          return _results;
        };
    
        PathEasing.prototype._findBounds = function(array, p) {
          var buffer, direction, end, i, len, loopEnd, pointP, pointX, start, value, _i, _ref;
          if (p === this._boundsPrevProgress) {
            return this._prevBounds;
          }
          if (this._boundsStartIndex == null) {
            this._boundsStartIndex = 0;
          }
          len = array.length;
          if (this._boundsPrevProgress > p) {
            loopEnd = 0;
            direction = 'reverse';
          } else {
            loopEnd = len;
            direction = 'forward';
          }
          if (direction === 'forward') {
            start = array[0];
            end = array[array.length - 1];
          } else {
            start = array[array.length - 1];
            end = array[0];
          }
          for (i = _i = _ref = this._boundsStartIndex; _ref <= loopEnd ? _i < loopEnd : _i > loopEnd; i = _ref <= loopEnd ? ++_i : --_i) {
            value = array[i];
            pointX = value.point.x / this._rect;
            pointP = p;
            if (direction === 'reverse') {
              buffer = pointX;
              pointX = pointP;
              pointP = buffer;
            }
            if (pointX < pointP) {
              start = value;
              this._boundsStartIndex = i;
            } else {
              end = value;
              break;
            }
          }
          this._boundsPrevProgress = p;
          return this._prevBounds = {
            start: start,
            end: end
          };
        };
    
        PathEasing.prototype.sample = function(p) {
          var bounds, res;
          p = h.clamp(p, 0, 1);
          bounds = this._findBounds(this._samples, p);
          res = this._checkIfBoundsCloseEnough(p, bounds);
          if (res != null) {
            return res;
          }
          return this._findApproximate(p, bounds.start, bounds.end);
        };
    
        PathEasing.prototype._checkIfBoundsCloseEnough = function(p, bounds) {
          var point, y;
          point = void 0;
          y = this._checkIfPointCloseEnough(p, bounds.start.point);
          if (y != null) {
            return y;
          }
          return this._checkIfPointCloseEnough(p, bounds.end.point);
        };
    
        PathEasing.prototype._checkIfPointCloseEnough = function(p, point) {
          if (h.closeEnough(p, point.x / this._rect, this._eps)) {
            return this._resolveY(point);
          }
        };
    
        PathEasing.prototype._approximate = function(start, end, p) {
          var deltaP, percentP;
          deltaP = end.point.x - start.point.x;
          percentP = (p - (start.point.x / this._rect)) / (deltaP / this._rect);
          return start.length + percentP * (end.length - start.length);
        };
    
        PathEasing.prototype._findApproximate = function(p, start, end, approximateMax) {
          var approximation, args, newPoint, point, x;
          if (approximateMax == null) {
            approximateMax = this._approximateMax;
          }
          approximation = this._approximate(start, end, p);
          point = this.path.getPointAtLength(approximation);
          x = point.x / this._rect;
          if (h.closeEnough(p, x, this._eps)) {
            return this._resolveY(point);
          } else {
            if (--approximateMax < 1) {
              return this._resolveY(point);
            }
            newPoint = {
              point: point,
              length: approximation
            };
            args = p < x ? [p, start, newPoint, approximateMax] : [p, newPoint, end, approximateMax];
            return this._findApproximate.apply(this, args);
          }
        };
    
        PathEasing.prototype._resolveY = function(point) {
          return 1 - (point.y / this._rect);
        };
    
        PathEasing.prototype._normalizePath = function(path) {
          var commands, endIndex, normalizedPath, points, startIndex, svgCommandsRegexp;
          svgCommandsRegexp = /[M|L|H|V|C|S|Q|T|A]/gim;
          points = path.split(svgCommandsRegexp);
          points.shift();
          commands = path.match(svgCommandsRegexp);
          startIndex = 0;
          points[startIndex] = this._normalizeSegment(points[startIndex]);
          endIndex = points.length - 1;
          points[endIndex] = this._normalizeSegment(points[endIndex], this._rect || 100);
          return normalizedPath = this._joinNormalizedPath(commands, points);
        };
    
        PathEasing.prototype._joinNormalizedPath = function(commands, points) {
          var command, i, normalizedPath, space, _i, _len;
          normalizedPath = '';
          for (i = _i = 0, _len = commands.length; _i < _len; i = ++_i) {
            command = commands[i];
            space = i === 0 ? '' : ' ';
            normalizedPath += "" + space + command + (points[i].trim());
          }
          return normalizedPath;
        };
    
        PathEasing.prototype._normalizeSegment = function(segment, value) {
          var i, lastPoint, nRgx, pairs, parsedX, point, space, x, _i, _len;
          if (value == null) {
            value = 0;
          }
          segment = segment.trim();
          nRgx = /(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim;
          pairs = this._getSegmentPairs(segment.match(nRgx));
          lastPoint = pairs[pairs.length - 1];
          x = lastPoint[0];
          parsedX = Number(x);
          if (parsedX !== value) {
            segment = '';
            lastPoint[0] = value;
            for (i = _i = 0, _len = pairs.length; _i < _len; i = ++_i) {
              point = pairs[i];
              space = i === 0 ? '' : ' ';
              segment += "" + space + point[0] + "," + point[1];
            }
          }
          return segment;
        };
    
        PathEasing.prototype._getSegmentPairs = function(array) {
          var i, newArray, pair, value, _i, _len;
          if (array.length % 2 !== 0) {
            h.error('Failed to parse the path - segment pairs are not even.', array);
          }
          newArray = [];
          for (i = _i = 0, _len = array.length; _i < _len; i = _i += 2) {
            value = array[i];
            pair = [array[i], array[i + 1]];
            newArray.push(pair);
          }
          return newArray;
        };
    
        PathEasing.prototype.create = function(path, o) {
          var handler;
          handler = new PathEasing(path, o);
          handler.sample.path = handler.path;
          return handler.sample;
        };
    
        return PathEasing;
    
      })();
    
      module.exports = PathEasing;
    
    }).call(this);
    
    },{"../h":12}],12:[function(require,module,exports){
    (function() {
      var Helpers, h;
    
      Helpers = (function() {
        Helpers.prototype.NS = 'http://www.w3.org/2000/svg';
    
        Helpers.prototype.logBadgeCss = 'background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;';
    
        Helpers.prototype.shortColors = {
          transparent: 'rgba(0,0,0,0)',
          none: 'rgba(0,0,0,0)',
          aqua: 'rgb(0,255,255)',
          black: 'rgb(0,0,0)',
          blue: 'rgb(0,0,255)',
          fuchsia: 'rgb(255,0,255)',
          gray: 'rgb(128,128,128)',
          green: 'rgb(0,128,0)',
          lime: 'rgb(0,255,0)',
          maroon: 'rgb(128,0,0)',
          navy: 'rgb(0,0,128)',
          olive: 'rgb(128,128,0)',
          purple: 'rgb(128,0,128)',
          red: 'rgb(255,0,0)',
          silver: 'rgb(192,192,192)',
          teal: 'rgb(0,128,128)',
          white: 'rgb(255,255,255)',
          yellow: 'rgb(255,255,0)',
          orange: 'rgb(255,128,0)'
        };
    
        Helpers.prototype.chainOptionMap = {
          duration: 1,
          delay: 1,
          repeat: 1,
          easing: 1,
          yoyo: 1,
          onStart: 1,
          onComplete: 1,
          onCompleteChain: 1,
          onUpdate: 1,
          points: 1
        };
    
        Helpers.prototype.callbacksMap = {
          onStart: 1,
          onComplete: 1,
          onCompleteChain: 1,
          onUpdate: 1
        };
    
        Helpers.prototype.tweenOptionMap = {
          duration: 1,
          delay: 1,
          repeat: 1,
          easing: 1,
          yoyo: 1
        };
    
        Helpers.prototype.posPropsMap = {
          x: 1,
          y: 1,
          shiftX: 1,
          shiftY: 1,
          burstX: 1,
          burstY: 1,
          burstShiftX: 1,
          burstShiftY: 1
        };
    
        Helpers.prototype.strokeDashPropsMap = {
          strokeDasharray: 1,
          strokeDashoffset: 1
        };
    
        Helpers.prototype.RAD_TO_DEG = 180 / Math.PI;
    
        function Helpers() {
          this.vars();
        }
    
        Helpers.prototype.vars = function() {
          var ua;
          this.prefix = this.getPrefix();
          this.getRemBase();
          this.isFF = this.prefix.lowercase === 'moz';
          this.isIE = this.prefix.lowercase === 'ms';
          ua = navigator.userAgent;
          this.isOldOpera = ua.match(/presto/gim);
          this.isSafari = ua.indexOf('Safari') > -1;
          this.isChrome = ua.indexOf('Chrome') > -1;
          this.isOpera = ua.toLowerCase().indexOf("op") > -1;
          this.isChrome && this.isSafari && (this.isSafari = false);
          (ua.match(/PhantomJS/gim)) && (this.isSafari = false);
          this.isChrome && this.isOpera && (this.isChrome = false);
          this.is3d = this.checkIf3d();
          this.uniqIDs = -1;
          this.div = document.createElement('div');
          return document.body.appendChild(this.div);
        };
    
        Helpers.prototype.cloneObj = function(obj, exclude) {
          var i, key, keys, newObj;
          keys = Object.keys(obj);
          newObj = {};
          i = keys.length;
          while (i--) {
            key = keys[i];
            if (exclude != null) {
              if (!exclude[key]) {
                newObj[key] = obj[key];
              }
            } else {
              newObj[key] = obj[key];
            }
          }
          return newObj;
        };
    
        Helpers.prototype.extend = function(objTo, objFrom) {
          var key, value;
          for (key in objFrom) {
            value = objFrom[key];
            if (objTo[key] == null) {
              objTo[key] = objFrom[key];
            }
          }
          return objTo;
        };
    
        Helpers.prototype.getRemBase = function() {
          var html, style;
          html = document.querySelector('html');
          style = getComputedStyle(html);
          return this.remBase = parseFloat(style.fontSize);
        };
    
        Helpers.prototype.clamp = function(value, min, max) {
          if (value < min) {
            return min;
          } else if (value > max) {
            return max;
          } else {
            return value;
          }
        };
    
        Helpers.prototype.setPrefixedStyle = function(el, name, value, isIt) {
          if (name.match(/transform/gim)) {
            el.style["" + name] = value;
            return el.style["" + this.prefix.css + name] = value;
          } else {
            return el.style[name] = value;
          }
        };
    
        Helpers.prototype.style = function(el, name, value) {
          var key, keys, len, _results;
          if (typeof name === 'object') {
            keys = Object.keys(name);
            len = keys.length;
            _results = [];
            while (len--) {
              key = keys[len];
              value = name[key];
              _results.push(this.setPrefixedStyle(el, key, value));
            }
            return _results;
          } else {
            return this.setPrefixedStyle(el, name, value);
          }
        };
    
        Helpers.prototype.prepareForLog = function(args) {
          args = Array.prototype.slice.apply(args);
          args.unshift('::');
          args.unshift(this.logBadgeCss);
          args.unshift('%cmo·js%c');
          return args;
        };
    
        Helpers.prototype.log = function() {
          if (mojs.isDebug === false) {
            return;
          }
          return console.log.apply(console, this.prepareForLog(arguments));
        };
    
        Helpers.prototype.warn = function() {
          if (mojs.isDebug === false) {
            return;
          }
          return console.warn.apply(console, this.prepareForLog(arguments));
        };
    
        Helpers.prototype.error = function() {
          if (mojs.isDebug === false) {
            return;
          }
          return console.error.apply(console, this.prepareForLog(arguments));
        };
    
        Helpers.prototype.parseUnit = function(value) {
          var amount, isStrict, regex, returnVal, unit, _ref;
          if (typeof value === 'number') {
            return returnVal = {
              unit: 'px',
              isStrict: false,
              value: value,
              string: "" + value + "px"
            };
          } else if (typeof value === 'string') {
            regex = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin/gim;
            unit = (_ref = value.match(regex)) != null ? _ref[0] : void 0;
            isStrict = true;
            if (!unit) {
              unit = 'px';
              isStrict = false;
            }
            amount = parseFloat(value);
            return returnVal = {
              unit: unit,
              isStrict: isStrict,
              value: amount,
              string: "" + amount + unit
            };
          }
          return value;
        };
    
        Helpers.prototype.bind = function(func, context) {
          var bindArgs, wrapper;
          wrapper = function() {
            var args, unshiftArgs;
            args = Array.prototype.slice.call(arguments);
            unshiftArgs = bindArgs.concat(args);
            return func.apply(context, unshiftArgs);
          };
          bindArgs = Array.prototype.slice.call(arguments, 2);
          return wrapper;
        };
    
        Helpers.prototype.getRadialPoint = function(o) {
          var point, radAngle, radiusX, radiusY;
          if (o == null) {
            o = {};
          }
          if ((o.radius == null) || (o.angle == null) || (o.center == null)) {
            return;
          }
          radAngle = (o.angle - 90) * (Math.PI / 180);
          radiusX = o.radiusX != null ? o.radiusX : o.radius;
          radiusY = o.radiusY != null ? o.radiusY : o.radius;
          return point = {
            x: o.center.x + (Math.cos(radAngle) * radiusX),
            y: o.center.y + (Math.sin(radAngle) * radiusY)
          };
        };
    
        Helpers.prototype.getPrefix = function() {
          var dom, pre, styles, v;
          styles = window.getComputedStyle(document.documentElement, "");
          v = Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/);
          pre = (v || (styles.OLink === "" && ["", "o"]))[1];
          dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
          return {
            dom: dom,
            lowercase: pre,
            css: "-" + pre + "-",
            js: pre[0].toUpperCase() + pre.substr(1)
          };
        };
    
        Helpers.prototype.strToArr = function(string) {
          var arr;
          arr = [];
          if (typeof string === 'number' && !isNaN(string)) {
            arr.push(this.parseUnit(string));
            return arr;
          }
          string.trim().split(/\s+/gim).forEach((function(_this) {
            return function(str) {
              return arr.push(_this.parseUnit(_this.parseIfRand(str)));
            };
          })(this));
          return arr;
        };
    
        Helpers.prototype.calcArrDelta = function(arr1, arr2) {
          var delta, i, num, _i, _len;
          delta = [];
          for (i = _i = 0, _len = arr1.length; _i < _len; i = ++_i) {
            num = arr1[i];
            delta[i] = this.parseUnit("" + (arr2[i].value - arr1[i].value) + arr2[i].unit);
          }
          return delta;
        };
    
        Helpers.prototype.isArray = function(variable) {
          return variable instanceof Array;
        };
    
        Helpers.prototype.normDashArrays = function(arr1, arr2) {
          var arr1Len, arr2Len, currItem, i, lenDiff, startI, _i, _j;
          arr1Len = arr1.length;
          arr2Len = arr2.length;
          if (arr1Len > arr2Len) {
            lenDiff = arr1Len - arr2Len;
            startI = arr2.length;
            for (i = _i = 0; 0 <= lenDiff ? _i < lenDiff : _i > lenDiff; i = 0 <= lenDiff ? ++_i : --_i) {
              currItem = i + startI;
              arr2.push(this.parseUnit("0" + arr1[currItem].unit));
            }
          } else if (arr2Len > arr1Len) {
            lenDiff = arr2Len - arr1Len;
            startI = arr1.length;
            for (i = _j = 0; 0 <= lenDiff ? _j < lenDiff : _j > lenDiff; i = 0 <= lenDiff ? ++_j : --_j) {
              currItem = i + startI;
              arr1.push(this.parseUnit("0" + arr2[currItem].unit));
            }
          }
          return [arr1, arr2];
        };
    
        Helpers.prototype.makeColorObj = function(color) {
          var alpha, b, colorObj, g, isRgb, r, regexString1, regexString2, result, rgbColor;
          if (color[0] === '#') {
            result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
            colorObj = {};
            if (result) {
              r = result[1].length === 2 ? result[1] : result[1] + result[1];
              g = result[2].length === 2 ? result[2] : result[2] + result[2];
              b = result[3].length === 2 ? result[3] : result[3] + result[3];
              colorObj = {
                r: parseInt(r, 16),
                g: parseInt(g, 16),
                b: parseInt(b, 16),
                a: 1
              };
            }
          }
          if (color[0] !== '#') {
            isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
            if (isRgb) {
              rgbColor = color;
            }
            if (!isRgb) {
              rgbColor = !this.shortColors[color] ? (this.div.style.color = color, this.computedStyle(this.div).color) : this.shortColors[color];
            }
            regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),';
            regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$';
            result = new RegExp(regexString1 + regexString2, 'gi').exec(rgbColor);
            colorObj = {};
            alpha = parseFloat(result[4] || 1);
            if (result) {
              colorObj = {
                r: parseInt(result[1], 10),
                g: parseInt(result[2], 10),
                b: parseInt(result[3], 10),
                a: (alpha != null) && !isNaN(alpha) ? alpha : 1
              };
            }
          }
          return colorObj;
        };
    
        Helpers.prototype.computedStyle = function(el) {
          return getComputedStyle(el);
        };
    
        Helpers.prototype.capitalize = function(str) {
          if (typeof str !== 'string') {
            throw Error('String expected - nothing to capitalize');
          }
          return str.charAt(0).toUpperCase() + str.substring(1);
        };
    
        Helpers.prototype.parseRand = function(string) {
          var rand, randArr, units;
          randArr = string.split(/rand\(|\,|\)/);
          units = this.parseUnit(randArr[2]);
          rand = this.rand(parseFloat(randArr[1]), parseFloat(randArr[2]));
          if (units.unit && randArr[2].match(units.unit)) {
            return rand + units.unit;
          } else {
            return rand;
          }
        };
    
        Helpers.prototype.parseStagger = function(string, index) {
          var base, number, splittedValue, unit, unitValue, value;
          value = string.split(/stagger\(|\)$/)[1].toLowerCase();
          splittedValue = value.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim);
          value = splittedValue.length > 3 ? (base = this.parseUnit(this.parseIfRand(splittedValue[1])), splittedValue[3]) : (base = this.parseUnit(0), splittedValue[1]);
          value = this.parseIfRand(value);
          unitValue = this.parseUnit(value);
          number = index * unitValue.value + base.value;
          unit = base.isStrict ? base.unit : unitValue.isStrict ? unitValue.unit : '';
          if (unit) {
            return "" + number + unit;
          } else {
            return number;
          }
        };
    
        Helpers.prototype.parseIfStagger = function(value, i) {
          if (!(typeof value === 'string' && value.match(/stagger/g))) {
            return value;
          } else {
            return this.parseStagger(value, i);
          }
        };
    
        Helpers.prototype.parseIfRand = function(str) {
          if (typeof str === 'string' && str.match(/rand\(/)) {
            return this.parseRand(str);
          } else {
            return str;
          }
        };
    
        Helpers.prototype.parseDelta = function(key, value) {
          var delta, end, endArr, endColorObj, i, start, startArr, startColorObj, _i, _len;
          start = Object.keys(value)[0];
          end = value[start];
          delta = {
            start: start
          };
          if (isNaN(parseFloat(start)) && !start.match(/rand\(/)) {
            if (key === 'strokeLinecap') {
              this.warn("Sorry, stroke-linecap property is not animatable yet, using the start(" + start + ") value instead", value);
              return delta;
            }
            startColorObj = this.makeColorObj(start);
            endColorObj = this.makeColorObj(end);
            delta = {
              start: startColorObj,
              end: endColorObj,
              type: 'color',
              delta: {
                r: endColorObj.r - startColorObj.r,
                g: endColorObj.g - startColorObj.g,
                b: endColorObj.b - startColorObj.b,
                a: endColorObj.a - startColorObj.a
              }
            };
          } else if (key === 'strokeDasharray' || key === 'strokeDashoffset') {
            startArr = this.strToArr(start);
            endArr = this.strToArr(end);
            this.normDashArrays(startArr, endArr);
            for (i = _i = 0, _len = startArr.length; _i < _len; i = ++_i) {
              start = startArr[i];
              end = endArr[i];
              this.mergeUnits(start, end, key);
            }
            delta = {
              start: startArr,
              end: endArr,
              delta: this.calcArrDelta(startArr, endArr),
              type: 'array'
            };
          } else {
            if (!this.chainOptionMap[key]) {
              if (this.posPropsMap[key]) {
                end = this.parseUnit(this.parseIfRand(end));
                start = this.parseUnit(this.parseIfRand(start));
                this.mergeUnits(start, end, key);
                delta = {
                  start: start,
                  end: end,
                  delta: end.value - start.value,
                  type: 'unit'
                };
              } else {
                end = parseFloat(this.parseIfRand(end));
                start = parseFloat(this.parseIfRand(start));
                delta = {
                  start: start,
                  end: end,
                  delta: end - start,
                  type: 'number'
                };
              }
            }
          }
          return delta;
        };
    
        Helpers.prototype.mergeUnits = function(start, end, key) {
          if (!end.isStrict && start.isStrict) {
            end.unit = start.unit;
            return end.string = "" + end.value + end.unit;
          } else if (end.isStrict && !start.isStrict) {
            start.unit = end.unit;
            return start.string = "" + start.value + start.unit;
          } else if (end.isStrict && start.isStrict) {
            if (end.unit !== start.unit) {
              start.unit = end.unit;
              start.string = "" + start.value + start.unit;
              return this.warn("Two different units were specified on \"" + key + "\" delta property, mo · js will fallback to end \"" + end.unit + "\" unit ");
            }
          }
        };
    
        Helpers.prototype.rand = function(min, max) {
          return (Math.random() * (max - min)) + min;
        };
    
        Helpers.prototype.isDOM = function(o) {
          var isNode;
          if (o == null) {
            return false;
          }
          isNode = typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
          return typeof o === 'object' && isNode;
        };
    
        Helpers.prototype.getChildElements = function(element) {
          var childNodes, children, i;
          childNodes = element.childNodes;
          children = [];
          i = childNodes.length;
          while (i--) {
            if (childNodes[i].nodeType === 1) {
              children.unshift(childNodes[i]);
            }
          }
          return children;
        };
    
        Helpers.prototype.delta = function(start, end) {
          var isType1, isType2, obj, type1, type2;
          type1 = typeof start;
          type2 = typeof end;
          isType1 = type1 === 'string' || type1 === 'number' && !isNaN(start);
          isType2 = type2 === 'string' || type2 === 'number' && !isNaN(end);
          if (!isType1 || !isType2) {
            this.error("delta method expects Strings or Numbers at input but got - " + start + ", " + end);
            return;
          }
          obj = {};
          obj[start] = end;
          return obj;
        };
    
        Helpers.prototype.getUniqID = function() {
          return ++this.uniqIDs;
        };
    
        Helpers.prototype.parsePath = function(path) {
          var domPath;
          if (typeof path === 'string') {
            if (path.charAt(0).toLowerCase() === 'm') {
              domPath = document.createElementNS(this.NS, 'path');
              domPath.setAttributeNS(null, 'd', path);
              return domPath;
            } else {
              return document.querySelector(path);
            }
          }
          if (path.style) {
            return path;
          }
        };
    
        Helpers.prototype.closeEnough = function(num1, num2, eps) {
          return Math.abs(num1 - num2) < eps;
        };
    
        Helpers.prototype.checkIf3d = function() {
          var div, prefixed, style, tr;
          div = document.createElement('div');
          this.style(div, 'transform', 'translateZ(0)');
          style = div.style;
          prefixed = "" + this.prefix.css + "transform";
          tr = style[prefixed] != null ? style[prefixed] : style.transform;
          return tr !== '';
        };
    
        return Helpers;
    
      })();
    
      h = new Helpers;
    
      module.exports = h;
    
    }).call(this);
    
    },{}],13:[function(require,module,exports){
    (function() {
      window.mojs = {
        revision: '0.147.4',
        isDebug: true,
        helpers: require('./h'),
        Bit: require('./shapes/bit'),
        bitsMap: require('./shapes/bitsMap'),
        Circle: require('./shapes/circle'),
        Cross: require('./shapes/cross'),
        Line: require('./shapes/line'),
        Rect: require('./shapes/rect'),
        Polygon: require('./shapes/polygon'),
        Equal: require('./shapes/equal'),
        Zigzag: require('./shapes/zigzag'),
        Burst: require('./burst'),
        Transit: require('./transit'),
        Swirl: require('./swirl'),
        Stagger: require('./stagger'),
        Spriter: require('./spriter'),
        MotionPath: require('./motion-path'),
        Tween: require('./tween/tween'),
        Timeline: require('./tween/timeline'),
        tweener: require('./tween/tweener'),
        easing: require('./easing/easing')
      };
    
      mojs.h = mojs.helpers;
    
      mojs.delta = mojs.h.delta;
    
    
      /* istanbul ignore next */
    
      if ((typeof define === "function") && define.amd) {
        define("mojs", [], function() {
          return mojs;
        });
      }
    
    
      /* istanbul ignore next */
    
      if ((typeof module === "object") && (typeof module.exports === "object")) {
        module.exports = mojs;
      }
    
    }).call(this);
    
    },{"./burst":7,"./easing/easing":9,"./h":12,"./motion-path":14,"./shapes/bit":17,"./shapes/bitsMap":18,"./shapes/circle":19,"./shapes/cross":20,"./shapes/equal":21,"./shapes/line":22,"./shapes/polygon":23,"./shapes/rect":24,"./shapes/zigzag":25,"./spriter":26,"./stagger":27,"./swirl":28,"./transit":29,"./tween/timeline":30,"./tween/tween":31,"./tween/tweener":32}],14:[function(require,module,exports){
    (function() {
      var MotionPath, Timeline, Tween, h, resize,
        __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
    
      h = require('./h');
    
      resize = require('./vendor/resize');
    
      Tween = require('./tween/tween');
    
      Timeline = require('./tween/timeline');
    
      MotionPath = (function() {
        MotionPath.prototype.defaults = {
          path: null,
          curvature: {
            x: '75%',
            y: '50%'
          },
          isCompositeLayer: true,
          delay: 0,
          duration: 1000,
          easing: null,
          repeat: 0,
          yoyo: false,
          offsetX: 0,
          offsetY: 0,
          angleOffset: null,
          pathStart: 0,
          pathEnd: 1,
          motionBlur: 0,
          transformOrigin: null,
          isAngle: false,
          isReverse: false,
          isRunLess: false,
          isPresetPosition: true,
          onStart: null,
          onComplete: null,
          onUpdate: null
        };
    
        function MotionPath(o) {
          this.o = o != null ? o : {};
          this.calcHeight = __bind(this.calcHeight, this);
          if (this.vars()) {
            return;
          }
          this.createTween();
          this;
        }
    
        MotionPath.prototype.vars = function() {
          this.getScaler = h.bind(this.getScaler, this);
          this.resize = resize;
          this.props = h.cloneObj(this.defaults);
          this.extendOptions(this.o);
          this.isMotionBlurReset = h.isSafari || h.isIE;
          this.isMotionBlurReset && (this.props.motionBlur = 0);
          this.history = [h.cloneObj(this.props)];
          return this.postVars();
        };
    
        MotionPath.prototype.curveToPath = function(o) {
          var angle, curvature, curvatureX, curvatureY, curvePoint, curveXPoint, dX, dY, endPoint, path, percent, radius, start;
          path = document.createElementNS(h.NS, 'path');
          start = o.start;
          endPoint = {
            x: start.x + o.shift.x,
            y: start.x + o.shift.y
          };
          curvature = o.curvature;
          dX = o.shift.x;
          dY = o.shift.y;
          radius = Math.sqrt(dX * dX + dY * dY);
          percent = radius / 100;
          angle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
          if (o.shift.x < 0) {
            angle = angle + 180;
          }
          curvatureX = h.parseUnit(curvature.x);
          curvatureX = curvatureX.unit === '%' ? curvatureX.value * percent : curvatureX.value;
          curveXPoint = h.getRadialPoint({
            center: {
              x: start.x,
              y: start.y
            },
            radius: curvatureX,
            angle: angle
          });
          curvatureY = h.parseUnit(curvature.y);
          curvatureY = curvatureY.unit === '%' ? curvatureY.value * percent : curvatureY.value;
          curvePoint = h.getRadialPoint({
            center: {
              x: curveXPoint.x,
              y: curveXPoint.y
            },
            radius: curvatureY,
            angle: angle + 90
          });
          path.setAttribute('d', "M" + start.x + "," + start.y + " Q" + curvePoint.x + "," + curvePoint.y + " " + endPoint.x + "," + endPoint.y);
          return path;
        };
    
        MotionPath.prototype.postVars = function() {
          this.props.pathStart = h.clamp(this.props.pathStart, 0, 1);
          this.props.pathEnd = h.clamp(this.props.pathEnd, this.props.pathStart, 1);
          this.angle = 0;
          this.speedX = 0;
          this.speedY = 0;
          this.blurX = 0;
          this.blurY = 0;
          this.prevCoords = {};
          this.blurAmount = 20;
          this.props.motionBlur = h.clamp(this.props.motionBlur, 0, 1);
          this.onUpdate = this.props.onUpdate;
          if (!this.o.el) {
            h.error('Missed "el" option. It could be a selector, DOMNode or another module.');
            return true;
          }
          this.el = this.parseEl(this.props.el);
          this.props.motionBlur > 0 && this.createFilter();
          this.path = this.getPath();
          if (!this.path.getAttribute('d')) {
            h.error('Path has no coordinates to work with, aborting');
            return true;
          }
          this.len = this.path.getTotalLength();
          this.slicedLen = this.len * (this.props.pathEnd - this.props.pathStart);
          this.startLen = this.props.pathStart * this.len;
          this.fill = this.props.fill;
          if (this.fill != null) {
            this.container = this.parseEl(this.props.fill.container);
            this.fillRule = this.props.fill.fillRule || 'all';
            this.getScaler();
            if (this.container != null) {
              this.removeEvent(this.container, 'onresize', this.getScaler);
              return this.addEvent(this.container, 'onresize', this.getScaler);
            }
          }
        };
    
        MotionPath.prototype.addEvent = function(el, type, handler) {
          return el.addEventListener(type, handler, false);
        };
    
        MotionPath.prototype.removeEvent = function(el, type, handler) {
          return el.removeEventListener(type, handler, false);
        };
    
        MotionPath.prototype.createFilter = function() {
          var div, svg;
          div = document.createElement('div');
          this.filterID = "filter-" + (h.getUniqID());
          div.innerHTML = "<svg id=\"svg-" + this.filterID + "\"\n    style=\"visibility:hidden; width:0px; height:0px\">\n  <filter id=\"" + this.filterID + "\" y=\"-20\" x=\"-20\" width=\"40\" height=\"40\">\n    <feOffset\n      id=\"blur-offset\" in=\"SourceGraphic\"\n      dx=\"0\" dy=\"0\" result=\"offset2\"></feOffset>\n    <feGaussianblur\n      id=\"blur\" in=\"offset2\"\n      stdDeviation=\"0,0\" result=\"blur2\"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n      <feMergeNode in=\"blur2\"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>";
          svg = div.querySelector("#svg-" + this.filterID);
          this.filter = svg.querySelector('#blur');
          this.filterOffset = svg.querySelector('#blur-offset');
          document.body.insertBefore(svg, document.body.firstChild);
          this.el.style['filter'] = "url(#" + this.filterID + ")";
          return this.el.style["" + h.prefix.css + "filter"] = "url(#" + this.filterID + ")";
        };
    
        MotionPath.prototype.parseEl = function(el) {
          if (typeof el === 'string') {
            return document.querySelector(el);
          }
          if (el instanceof HTMLElement) {
            return el;
          }
          if (el.setProp != null) {
            this.isModule = true;
            return el;
          }
        };
    
        MotionPath.prototype.getPath = function() {
          var path;
          path = h.parsePath(this.props.path);
          if (path) {
            return path;
          }
          if (this.props.path.x || this.props.path.y) {
            return this.curveToPath({
              start: {
                x: 0,
                y: 0
              },
              shift: {
                x: this.props.path.x || 0,
                y: this.props.path.y || 0
              },
              curvature: {
                x: this.props.curvature.x || this.defaults.curvature.x,
                y: this.props.curvature.y || this.defaults.curvature.y
              }
            });
          }
        };
    
        MotionPath.prototype.getScaler = function() {
          var end, size, start;
          this.cSize = {
            width: this.container.offsetWidth || 0,
            height: this.container.offsetHeight || 0
          };
          start = this.path.getPointAtLength(0);
          end = this.path.getPointAtLength(this.len);
          size = {};
          this.scaler = {};
          size.width = end.x >= start.x ? end.x - start.x : start.x - end.x;
          size.height = end.y >= start.y ? end.y - start.y : start.y - end.y;
          switch (this.fillRule) {
            case 'all':
              this.calcWidth(size);
              return this.calcHeight(size);
            case 'width':
              this.calcWidth(size);
              return this.scaler.y = this.scaler.x;
            case 'height':
              this.calcHeight(size);
              return this.scaler.x = this.scaler.y;
          }
        };
    
        MotionPath.prototype.calcWidth = function(size) {
          this.scaler.x = this.cSize.width / size.width;
          return !isFinite(this.scaler.x) && (this.scaler.x = 1);
        };
    
        MotionPath.prototype.calcHeight = function(size) {
          this.scaler.y = this.cSize.height / size.height;
          return !isFinite(this.scaler.y) && (this.scaler.y = 1);
        };
    
        MotionPath.prototype.run = function(o) {
          var fistItem, key, value;
          if (o) {
            fistItem = this.history[0];
            for (key in o) {
              value = o[key];
              if (h.callbacksMap[key] || h.tweenOptionMap[key]) {
                h.warn("the property \"" + key + "\" property can not be overridden on run yet");
                delete o[key];
              } else {
                this.history[0][key] = value;
              }
            }
            this.tuneOptions(o);
          }
          return this.startTween();
        };
    
        MotionPath.prototype.createTween = function() {
          this.tween = new Tween({
            duration: this.props.duration,
            delay: this.props.delay,
            yoyo: this.props.yoyo,
            repeat: this.props.repeat,
            easing: this.props.easing,
            onStart: (function(_this) {
              return function() {
                var _ref;
                return (_ref = _this.props.onStart) != null ? _ref.apply(_this) : void 0;
              };
            })(this),
            onComplete: (function(_this) {
              return function() {
                var _ref;
                _this.props.motionBlur && _this.setBlur({
                  blur: {
                    x: 0,
                    y: 0
                  },
                  offset: {
                    x: 0,
                    y: 0
                  }
                });
                return (_ref = _this.props.onComplete) != null ? _ref.apply(_this) : void 0;
              };
            })(this),
            onUpdate: (function(_this) {
              return function(p) {
                return _this.setProgress(p);
              };
            })(this),
            onFirstUpdateBackward: (function(_this) {
              return function() {
                return _this.history.length > 1 && _this.tuneOptions(_this.history[0]);
              };
            })(this)
          });
          this.timeline = new Timeline;
          this.timeline.add(this.tween);
          !this.props.isRunLess && this.startTween();
          return this.props.isPresetPosition && this.setProgress(0, true);
        };
    
        MotionPath.prototype.startTween = function() {
          return setTimeout(((function(_this) {
            return function() {
              var _ref;
              return (_ref = _this.timeline) != null ? _ref.start() : void 0;
            };
          })(this)), 1);
        };
    
        MotionPath.prototype.setProgress = function(p, isInit) {
          var len, point, x, y;
          len = this.startLen + (!this.props.isReverse ? p * this.slicedLen : (1 - p) * this.slicedLen);
          point = this.path.getPointAtLength(len);
          x = point.x + this.props.offsetX;
          y = point.y + this.props.offsetY;
          this._getCurrentAngle(point, len, p);
          this._setTransformOrigin(p);
          this._setTransform(x, y, p, isInit);
          return this.props.motionBlur && this.makeMotionBlur(x, y);
        };
    
        MotionPath.prototype.setElPosition = function(x, y, p) {
          var composite, isComposite, rotate, transform;
          rotate = this.angle !== 0 ? "rotate(" + this.angle + "deg)" : '';
          isComposite = this.props.isCompositeLayer && h.is3d;
          composite = isComposite ? 'translateZ(0)' : '';
          transform = "translate(" + x + "px," + y + "px) " + rotate + " " + composite;
          return h.setPrefixedStyle(this.el, 'transform', transform);
        };
    
        MotionPath.prototype.setModulePosition = function(x, y) {
          this.el.setProp({
            shiftX: "" + x + "px",
            shiftY: "" + y + "px",
            angle: this.angle
          });
          return this.el.draw();
        };
    
        MotionPath.prototype._getCurrentAngle = function(point, len, p) {
          var atan, isTransformFunOrigin, prevPoint, x1, x2;
          isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
          if (this.props.isAngle || (this.props.angleOffset != null) || isTransformFunOrigin) {
            prevPoint = this.path.getPointAtLength(len - 1);
            x1 = point.y - prevPoint.y;
            x2 = point.x - prevPoint.x;
            atan = Math.atan(x1 / x2);
            !isFinite(atan) && (atan = 0);
            this.angle = atan * h.RAD_TO_DEG;
            if ((typeof this.props.angleOffset) !== 'function') {
              return this.angle += this.props.angleOffset || 0;
            } else {
              return this.angle = this.props.angleOffset.call(this, this.angle, p);
            }
          } else {
            return this.angle = 0;
          }
        };
    
        MotionPath.prototype._setTransform = function(x, y, p, isInit) {
          var transform;
          if (this.scaler) {
            x *= this.scaler.x;
            y *= this.scaler.y;
          }
          transform = null;
          if (!isInit) {
            transform = typeof this.onUpdate === "function" ? this.onUpdate(p, {
              x: x,
              y: y,
              angle: this.angle
            }) : void 0;
          }
          if (this.isModule) {
            return this.setModulePosition(x, y);
          } else {
            if (typeof transform !== 'string') {
              return this.setElPosition(x, y, p);
            } else {
              return h.setPrefixedStyle(this.el, 'transform', transform);
            }
          }
        };
    
        MotionPath.prototype._setTransformOrigin = function(p) {
          var isTransformFunOrigin, tOrigin;
          if (this.props.transformOrigin) {
            isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
            tOrigin = !isTransformFunOrigin ? this.props.transformOrigin : this.props.transformOrigin(this.angle, p);
            return h.setPrefixedStyle(this.el, 'transform-origin', tOrigin);
          }
        };
    
        MotionPath.prototype.makeMotionBlur = function(x, y) {
          var absoluteAngle, coords, dX, dY, signX, signY, tailAngle;
          tailAngle = 0;
          signX = 1;
          signY = 1;
          if ((this.prevCoords.x == null) || (this.prevCoords.y == null)) {
            this.speedX = 0;
            this.speedY = 0;
          } else {
            dX = x - this.prevCoords.x;
            dY = y - this.prevCoords.y;
            if (dX > 0) {
              signX = -1;
            }
            if (signX < 0) {
              signY = -1;
            }
            this.speedX = Math.abs(dX);
            this.speedY = Math.abs(dY);
            tailAngle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
          }
          absoluteAngle = tailAngle - this.angle;
          coords = this.angToCoords(absoluteAngle);
          this.blurX = h.clamp((this.speedX / 16) * this.props.motionBlur, 0, 1);
          this.blurY = h.clamp((this.speedY / 16) * this.props.motionBlur, 0, 1);
          this.setBlur({
            blur: {
              x: 3 * this.blurX * this.blurAmount * Math.abs(coords.x),
              y: 3 * this.blurY * this.blurAmount * Math.abs(coords.y)
            },
            offset: {
              x: 3 * signX * this.blurX * coords.x * this.blurAmount,
              y: 3 * signY * this.blurY * coords.y * this.blurAmount
            }
          });
          this.prevCoords.x = x;
          return this.prevCoords.y = y;
        };
    
        MotionPath.prototype.setBlur = function(o) {
          if (!this.isMotionBlurReset) {
            this.filter.setAttribute('stdDeviation', "" + o.blur.x + "," + o.blur.y);
            this.filterOffset.setAttribute('dx', o.offset.x);
            return this.filterOffset.setAttribute('dy', o.offset.y);
          }
        };
    
        MotionPath.prototype.extendDefaults = function(o) {
          var key, value, _results;
          _results = [];
          for (key in o) {
            value = o[key];
            _results.push(this[key] = value);
          }
          return _results;
        };
    
        MotionPath.prototype.extendOptions = function(o) {
          var key, value, _results;
          _results = [];
          for (key in o) {
            value = o[key];
            _results.push(this.props[key] = value);
          }
          return _results;
        };
    
        MotionPath.prototype.then = function(o) {
          var it, key, opts, prevOptions, value;
          prevOptions = this.history[this.history.length - 1];
          opts = {};
          for (key in prevOptions) {
            value = prevOptions[key];
            if (!h.callbacksMap[key] && !h.tweenOptionMap[key] || key === 'duration') {
              if (o[key] == null) {
                o[key] = value;
              }
            } else {
              if (o[key] == null) {
                o[key] = void 0;
              }
            }
            if (h.tweenOptionMap[key]) {
              opts[key] = key !== 'duration' ? o[key] : o[key] != null ? o[key] : prevOptions[key];
            }
          }
          this.history.push(o);
          it = this;
          opts.onUpdate = (function(_this) {
            return function(p) {
              return _this.setProgress(p);
            };
          })(this);
          opts.onStart = (function(_this) {
            return function() {
              var _ref;
              return (_ref = _this.props.onStart) != null ? _ref.apply(_this) : void 0;
            };
          })(this);
          opts.onComplete = (function(_this) {
            return function() {
              var _ref;
              return (_ref = _this.props.onComplete) != null ? _ref.apply(_this) : void 0;
            };
          })(this);
          opts.onFirstUpdate = function() {
            return it.tuneOptions(it.history[this.index]);
          };
          opts.isChained = !o.delay;
          this.timeline.append(new Tween(opts));
          return this;
        };
    
        MotionPath.prototype.tuneOptions = function(o) {
          this.extendOptions(o);
          return this.postVars();
        };
    
        MotionPath.prototype.angToCoords = function(angle) {
          var radAngle, x, y;
          angle = angle % 360;
          radAngle = ((angle - 90) * Math.PI) / 180;
          x = Math.cos(radAngle);
          y = Math.sin(radAngle);
          x = x < 0 ? Math.max(x, -0.7) : Math.min(x, .7);
          y = y < 0 ? Math.max(y, -0.7) : Math.min(y, .7);
          return {
            x: x * 1.428571429,
            y: y * 1.428571429
          };
        };
    
        return MotionPath;
    
      })();
    
      module.exports = MotionPath;
    
    }).call(this);
    
    },{"./h":12,"./tween/timeline":30,"./tween/tween":31,"./vendor/resize":33}],15:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      (function(root) {
        var offset, _ref, _ref1;
        if (root.performance == null) {
          root.performance = {};
        }
        Date.now = Date.now || function() {
          return (new Date).getTime();
        };
        if (root.performance.now == null) {
          offset = ((_ref = root.performance) != null ? (_ref1 = _ref.timing) != null ? _ref1.navigationStart : void 0 : void 0) ? performance.timing.navigationStart : Date.now();
          return root.performance.now = function() {
            return Date.now() - offset;
          };
        }
      })(window);
    
    }).call(this);
    
    },{}],16:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      (function() {
        'use strict';
        var cancel, i, isOldBrowser, lastTime, vendors, vp, w;
        vendors = ['webkit', 'moz'];
        i = 0;
        w = window;
        while (i < vendors.length && !w.requestAnimationFrame) {
          vp = vendors[i];
          w.requestAnimationFrame = w[vp + 'RequestAnimationFrame'];
          cancel = w[vp + 'CancelAnimationFrame'];
          w.cancelAnimationFrame = cancel || w[vp + 'CancelRequestAnimationFrame'];
          ++i;
        }
        isOldBrowser = !w.requestAnimationFrame || !w.cancelAnimationFrame;
        if (/iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent) || isOldBrowser) {
          lastTime = 0;
          w.requestAnimationFrame = function(callback) {
            var nextTime, now;
            now = Date.now();
            nextTime = Math.max(lastTime + 16, now);
            return setTimeout((function() {
              callback(lastTime = nextTime);
            }), nextTime - now);
          };
          w.cancelAnimationFrame = clearTimeout;
        }
      })();
    
    }).call(this);
    
    },{}],17:[function(require,module,exports){
    (function() {
      var Bit, h;
    
      h = require('../h');
    
      Bit = (function() {
        Bit.prototype.ns = 'http://www.w3.org/2000/svg';
    
        Bit.prototype.type = 'line';
    
        Bit.prototype.ratio = 1;
    
        Bit.prototype.defaults = {
          radius: 50,
          radiusX: void 0,
          radiusY: void 0,
          points: 3,
          x: 0,
          y: 0,
          angle: 0,
          'stroke': 'hotpink',
          'stroke-width': 2,
          'stroke-opacity': 1,
          'fill': 'transparent',
          'fill-opacity': 1,
          'stroke-dasharray': '',
          'stroke-dashoffset': '',
          'stroke-linecap': ''
        };
    
        function Bit(o) {
          this.o = o != null ? o : {};
          this.init();
          this;
        }
    
        Bit.prototype.init = function() {
          this.vars();
          this.render();
          return this;
        };
    
        Bit.prototype.vars = function() {
          if (this.o.ctx && this.o.ctx.tagName === 'svg') {
            this.ctx = this.o.ctx;
          } else if (!this.o.el) {
            h.error('You should pass a real context(ctx) to the bit');
          }
          this.state = {};
          this.drawMapLength = this.drawMap.length;
          this.extendDefaults();
          return this.calcTransform();
        };
    
        Bit.prototype.calcTransform = function() {
          var rotate;
          rotate = "rotate(" + this.props.angle + ", " + this.props.x + ", " + this.props.y + ")";
          return this.props.transform = "" + rotate;
        };
    
        Bit.prototype.extendDefaults = function() {
          var key, value, _ref, _results;
          if (this.props == null) {
            this.props = {};
          }
          _ref = this.defaults;
          _results = [];
          for (key in _ref) {
            value = _ref[key];
            _results.push(this.props[key] = this.o[key] != null ? this.o[key] : value);
          }
          return _results;
        };
    
        Bit.prototype.setAttr = function(attr, value) {
          var el, key, keys, len, val, _results;
          if (typeof attr === 'object') {
            keys = Object.keys(attr);
            len = keys.length;
            el = value || this.el;
            _results = [];
            while (len--) {
              key = keys[len];
              val = attr[key];
              _results.push(el.setAttribute(key, val));
            }
            return _results;
          } else {
            return this.el.setAttribute(attr, value);
          }
        };
    
        Bit.prototype.setProp = function(attr, value) {
          var key, val, _results;
          if (typeof attr === 'object') {
            _results = [];
            for (key in attr) {
              val = attr[key];
              _results.push(this.props[key] = val);
            }
            return _results;
          } else {
            return this.props[attr] = value;
          }
        };
    
        Bit.prototype.render = function() {
          this.isRendered = true;
          if (this.o.el != null) {
            this.el = this.o.el;
            return this.isForeign = true;
          } else {
            this.el = document.createElementNS(this.ns, this.type || 'line');
            !this.o.isDrawLess && this.draw();
            return this.ctx.appendChild(this.el);
          }
        };
    
        Bit.prototype.drawMap = ['stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray', 'fill', 'stroke-dashoffset', 'stroke-linecap', 'fill-opacity', 'transform'];
    
        Bit.prototype.draw = function() {
          var len, name;
          this.props.length = this.getLength();
          len = this.drawMapLength;
          while (len--) {
            name = this.drawMap[len];
            switch (name) {
              case 'stroke-dasharray':
              case 'stroke-dashoffset':
                this.castStrokeDash(name);
            }
            this.setAttrsIfChanged(name, this.props[name]);
          }
          return this.state.radius = this.props.radius;
        };
    
        Bit.prototype.castStrokeDash = function(name) {
          var cast, dash, i, stroke, _i, _len, _ref;
          if (h.isArray(this.props[name])) {
            stroke = '';
            _ref = this.props[name];
            for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
              dash = _ref[i];
              cast = dash.unit === '%' ? this.castPercent(dash.value) : dash.value;
              stroke += "" + cast + " ";
            }
            this.props[name] = stroke === '0 ' ? stroke = '' : stroke;
            return this.props[name] = stroke;
          }
          if (typeof this.props[name] === 'object') {
            stroke = this.props[name].unit === '%' ? this.castPercent(this.props[name].value) : this.props[name].value;
            return this.props[name] = stroke === 0 ? stroke = '' : stroke;
          }
        };
    
        Bit.prototype.castPercent = function(percent) {
          return percent * (this.props.length / 100);
        };
    
        Bit.prototype.setAttrsIfChanged = function(name, value) {
          var key, keys, len, _results;
          if (typeof name === 'object') {
            keys = Object.keys(name);
            len = keys.length;
            _results = [];
            while (len--) {
              key = keys[len];
              value = name[key];
              _results.push(this.setAttrIfChanged(key, value));
            }
            return _results;
          } else {
            if (value == null) {
              value = this.props[name];
            }
            return this.setAttrIfChanged(name, value);
          }
        };
    
        Bit.prototype.setAttrIfChanged = function(name, value) {
          if (this.isChanged(name, value)) {
            this.el.setAttribute(name, value);
            return this.state[name] = value;
          }
        };
    
        Bit.prototype.isChanged = function(name, value) {
          if (value == null) {
            value = this.props[name];
          }
          return this.state[name] !== value;
        };
    
        Bit.prototype.getLength = function() {
          var _ref;
          if ((((_ref = this.el) != null ? _ref.getTotalLength : void 0) != null) && this.el.getAttribute('d')) {
            return this.el.getTotalLength();
          } else {
            return 2 * (this.props.radiusX != null ? this.props.radiusX : this.props.radius);
          }
        };
    
        return Bit;
    
      })();
    
      module.exports = Bit;
    
    }).call(this);
    
    },{"../h":12}],18:[function(require,module,exports){
    (function() {
      var Bit, BitsMap, Circle, Cross, Equal, Line, Polygon, Rect, Zigzag, h;
    
      Bit = require('./bit');
    
      Circle = require('./circle');
    
      Line = require('./line');
    
      Zigzag = require('./zigzag');
    
      Rect = require('./rect');
    
      Polygon = require('./polygon');
    
      Cross = require('./cross');
    
      Equal = require('./equal');
    
      h = require('../h');
    
      BitsMap = (function() {
        function BitsMap() {}
    
        BitsMap.prototype.h = h;
    
        BitsMap.prototype.map = {
          bit: Bit,
          circle: Circle,
          line: Line,
          zigzag: Zigzag,
          rect: Rect,
          polygon: Polygon,
          cross: Cross,
          equal: Equal
        };
    
        BitsMap.prototype.getBit = function(name) {
          return this.map[name] || this.h.error("no \"" + name + "\" shape available yet, please choose from this list:", this.map);
        };
    
        return BitsMap;
    
      })();
    
      module.exports = new BitsMap;
    
    }).call(this);
    
    },{"../h":12,"./bit":17,"./circle":19,"./cross":20,"./equal":21,"./line":22,"./polygon":23,"./rect":24,"./zigzag":25}],19:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Bit, Circle,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      Bit = require('./bit');
    
      Circle = (function(_super) {
        __extends(Circle, _super);
    
        function Circle() {
          return Circle.__super__.constructor.apply(this, arguments);
        }
    
        Circle.prototype.type = 'ellipse';
    
        Circle.prototype.draw = function() {
          var rx, ry;
          rx = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          ry = this.props.radiusY != null ? this.props.radiusY : this.props.radius;
          this.setAttrsIfChanged({
            rx: rx,
            ry: ry,
            cx: this.props.x,
            cy: this.props.y
          });
          return Circle.__super__.draw.apply(this, arguments);
        };
    
        Circle.prototype.getLength = function() {
          var radiusX, radiusY;
          radiusX = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          radiusY = this.props.radiusY != null ? this.props.radiusY : this.props.radius;
          return 2 * Math.PI * Math.sqrt((Math.pow(radiusX, 2) + Math.pow(radiusY, 2)) / 2);
        };
    
        return Circle;
    
      })(Bit);
    
      module.exports = Circle;
    
    }).call(this);
    
    },{"./bit":17}],20:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Bit, Cross,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      Bit = require('./bit');
    
      Cross = (function(_super) {
        __extends(Cross, _super);
    
        function Cross() {
          return Cross.__super__.constructor.apply(this, arguments);
        }
    
        Cross.prototype.type = 'path';
    
        Cross.prototype.draw = function() {
          var d, line1, line2, radiusX, radiusY, x1, x2, y1, y2;
          Cross.__super__.draw.apply(this, arguments);
          radiusX = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          radiusY = this.props.radiusY != null ? this.props.radiusY : this.props.radius;
          x1 = this.props.x - radiusX;
          x2 = this.props.x + radiusX;
          line1 = "M" + x1 + "," + this.props.y + " L" + x2 + "," + this.props.y;
          y1 = this.props.y - radiusY;
          y2 = this.props.y + radiusY;
          line2 = "M" + this.props.x + "," + y1 + " L" + this.props.x + "," + y2;
          d = "" + line1 + " " + line2;
          return this.setAttr({
            d: d
          });
        };
    
        Cross.prototype.getLength = function() {
          var radiusX, radiusY;
          radiusX = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          radiusY = this.props.radiusY != null ? this.props.radiusY : this.props.radius;
          return 2 * (radiusX + radiusY);
        };
    
        return Cross;
    
      })(Bit);
    
      module.exports = Cross;
    
    }).call(this);
    
    },{"./bit":17}],21:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Bit, Equal,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      Bit = require('./bit');
    
      Equal = (function(_super) {
        __extends(Equal, _super);
    
        function Equal() {
          return Equal.__super__.constructor.apply(this, arguments);
        }
    
        Equal.prototype.type = 'path';
    
        Equal.prototype.ratio = 1.43;
    
        Equal.prototype.draw = function() {
          var d, i, radiusX, radiusY, x1, x2, y, yStart, yStep, _i, _ref;
          Equal.__super__.draw.apply(this, arguments);
          if (!this.props.points) {
            return;
          }
          radiusX = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          radiusY = this.props.radiusY != null ? this.props.radiusY : this.props.radius;
          x1 = this.props.x - radiusX;
          x2 = this.props.x + radiusX;
          d = '';
          yStep = 2 * radiusY / (this.props.points - 1);
          yStart = this.props.y - radiusY;
          for (i = _i = 0, _ref = this.props.points; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            y = "" + (i * yStep + yStart);
            d += "M" + x1 + ", " + y + " L" + x2 + ", " + y + " ";
          }
          return this.setAttr({
            d: d
          });
        };
    
        Equal.prototype.getLength = function() {
          return 2 * (this.props.radiusX != null ? this.props.radiusX : this.props.radius);
        };
    
        return Equal;
    
      })(Bit);
    
      module.exports = Equal;
    
    }).call(this);
    
    },{"./bit":17}],22:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Bit, Line,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      Bit = require('./bit');
    
      Line = (function(_super) {
        __extends(Line, _super);
    
        function Line() {
          return Line.__super__.constructor.apply(this, arguments);
        }
    
        Line.prototype.draw = function() {
          var radiusX;
          radiusX = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          this.setAttrsIfChanged({
            x1: this.props.x - radiusX,
            x2: this.props.x + radiusX,
            y1: this.props.y,
            y2: this.props.y
          });
          return Line.__super__.draw.apply(this, arguments);
        };
    
        return Line;
    
      })(Bit);
    
      module.exports = Line;
    
    }).call(this);
    
    },{"./bit":17}],23:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Bit, Polygon, h,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      Bit = require('./bit');
    
      h = require('../h');
    
      Polygon = (function(_super) {
        __extends(Polygon, _super);
    
        function Polygon() {
          return Polygon.__super__.constructor.apply(this, arguments);
        }
    
        Polygon.prototype.type = 'path';
    
        Polygon.prototype.draw = function() {
          this.drawShape();
          return Polygon.__super__.draw.apply(this, arguments);
        };
    
        Polygon.prototype.drawShape = function() {
          var char, d, i, point, step, _i, _j, _len, _ref, _ref1;
          step = 360 / this.props.points;
          this.radialPoints = [];
          for (i = _i = 0, _ref = this.props.points; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            this.radialPoints.push(h.getRadialPoint({
              radius: this.props.radius,
              radiusX: this.props.radiusX,
              radiusY: this.props.radiusY,
              angle: i * step,
              center: {
                x: this.props.x,
                y: this.props.y
              }
            }));
          }
          d = '';
          _ref1 = this.radialPoints;
          for (i = _j = 0, _len = _ref1.length; _j < _len; i = ++_j) {
            point = _ref1[i];
            char = i === 0 ? 'M' : 'L';
            d += "" + char + (point.x.toFixed(4)) + "," + (point.y.toFixed(4)) + " ";
          }
          return this.setAttr({
            d: d += 'z'
          });
        };
    
        Polygon.prototype.getLength = function() {
          return this.el.getTotalLength();
        };
    
        return Polygon;
    
      })(Bit);
    
      module.exports = Polygon;
    
    }).call(this);
    
    },{"../h":12,"./bit":17}],24:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Bit, Rect,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      Bit = require('./bit');
    
      Rect = (function(_super) {
        __extends(Rect, _super);
    
        function Rect() {
          return Rect.__super__.constructor.apply(this, arguments);
        }
    
        Rect.prototype.type = 'rect';
    
        Rect.prototype.ratio = 1.43;
    
        Rect.prototype.draw = function() {
          var radiusX, radiusY;
          Rect.__super__.draw.apply(this, arguments);
          radiusX = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          radiusY = this.props.radiusY != null ? this.props.radiusY : this.props.radius;
          return this.setAttrsIfChanged({
            width: 2 * radiusX,
            height: 2 * radiusY,
            x: this.props.x - radiusX,
            y: this.props.y - radiusY
          });
        };
    
        Rect.prototype.getLength = function() {
          var radiusX, radiusY;
          radiusX = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          radiusY = this.props.radiusY != null ? this.props.radiusY : this.props.radius;
          return 2 * radiusX + 2 * radiusY;
        };
    
        return Rect;
    
      })(Bit);
    
      module.exports = Rect;
    
    }).call(this);
    
    },{"./bit":17}],25:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Bit, Zigzag,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      Bit = require('./bit');
    
      Zigzag = (function(_super) {
        __extends(Zigzag, _super);
    
        function Zigzag() {
          return Zigzag.__super__.constructor.apply(this, arguments);
        }
    
        Zigzag.prototype.type = 'path';
    
        Zigzag.prototype.ratio = 1.43;
    
        Zigzag.prototype.draw = function() {
          var char, i, iX, iX2, iY, iY2, points, radiusX, radiusY, stepX, stepY, strokeWidth, xStart, yStart, _i, _ref;
          if (!this.props.points) {
            return;
          }
          radiusX = this.props.radiusX != null ? this.props.radiusX : this.props.radius;
          radiusY = this.props.radiusY != null ? this.props.radiusY : this.props.radius;
          points = '';
          stepX = 2 * radiusX / this.props.points;
          stepY = 2 * radiusY / this.props.points;
          strokeWidth = this.props['stroke-width'];
          xStart = this.props.x - radiusX;
          yStart = this.props.y - radiusY;
          for (i = _i = _ref = this.props.points; _ref <= 0 ? _i < 0 : _i > 0; i = _ref <= 0 ? ++_i : --_i) {
            iX = xStart + i * stepX + strokeWidth;
            iY = yStart + i * stepY + strokeWidth;
            iX2 = xStart + (i - 1) * stepX + strokeWidth;
            iY2 = yStart + (i - 1) * stepY + strokeWidth;
            char = i === this.props.points ? 'M' : 'L';
            points += "" + char + iX + "," + iY + " l0, -" + stepY + " l-" + stepX + ", 0";
          }
          this.setAttr({
            d: points
          });
          return Zigzag.__super__.draw.apply(this, arguments);
        };
    
        return Zigzag;
    
      })(Bit);
    
      module.exports = Zigzag;
    
    }).call(this);
    
    },{"./bit":17}],26:[function(require,module,exports){
    (function() {
      var Spriter, Timeline, Tween, h;
    
      h = require('./h');
    
      Tween = require('./tween/tween');
    
      Timeline = require('./tween/timeline');
    
      Spriter = (function() {
        Spriter.prototype._defaults = {
          duration: 500,
          delay: 0,
          easing: 'linear.none',
          repeat: 0,
          yoyo: false,
          isRunLess: false,
          isShowEnd: false,
          onStart: null,
          onUpdate: null,
          onComplete: null
        };
    
        function Spriter(o) {
          this.o = o != null ? o : {};
          if (this.o.el == null) {
            return h.error('No "el" option specified, aborting');
          }
          this._vars();
          this._extendDefaults();
          this._parseFrames();
          if (this._frames.length <= 2) {
            h.warn("Spriter: only " + this._frames.length + " frames found");
          }
          if (this._frames.length < 1) {
            h.error("Spriter: there is no frames to animate, aborting");
          }
          this._createTween();
          this;
        }
    
        Spriter.prototype._vars = function() {
          this._props = h.cloneObj(this.o);
          this.el = this.o.el;
          return this._frames = [];
        };
    
        Spriter.prototype.run = function(o) {
          return this._timeline.start();
        };
    
        Spriter.prototype._extendDefaults = function() {
          return h.extend(this._props, this._defaults);
        };
    
        Spriter.prototype._parseFrames = function() {
          var frame, i, _i, _len, _ref;
          this._frames = Array.prototype.slice.call(this.el.children, 0);
          _ref = this._frames;
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            frame = _ref[i];
            frame.style.opacity = 0;
          }
          return this._frameStep = 1 / this._frames.length;
        };
    
        Spriter.prototype._createTween = function() {
          this._tween = new Tween({
            duration: this._props.duration,
            delay: this._props.delay,
            yoyo: this._props.yoyo,
            repeat: this._props.repeat,
            easing: this._props.easing,
            onStart: (function(_this) {
              return function() {
                var _base;
                return typeof (_base = _this._props).onStart === "function" ? _base.onStart() : void 0;
              };
            })(this),
            onComplete: (function(_this) {
              return function() {
                var _base;
                return typeof (_base = _this._props).onComplete === "function" ? _base.onComplete() : void 0;
              };
            })(this),
            onUpdate: (function(_this) {
              return function(p) {
                return _this._setProgress(p);
              };
            })(this)
          });
          this._timeline = new Timeline;
          this._timeline.add(this._tween);
          return !this._props.isRunLess && this._startTween();
        };
    
        Spriter.prototype._startTween = function() {
          return setTimeout(((function(_this) {
            return function() {
              return _this._timeline.start();
            };
          })(this)), 1);
        };
    
        Spriter.prototype._setProgress = function(p) {
          var currentNum, proc, _base, _ref, _ref1;
          proc = Math.floor(p / this._frameStep);
          if (this._prevFrame !== this._frames[proc]) {
            if ((_ref = this._prevFrame) != null) {
              _ref.style.opacity = 0;
            }
            currentNum = p === 1 && this._props.isShowEnd ? proc - 1 : proc;
            if ((_ref1 = this._frames[currentNum]) != null) {
              _ref1.style.opacity = 1;
            }
            this._prevFrame = this._frames[proc];
          }
          return typeof (_base = this._props).onUpdate === "function" ? _base.onUpdate(p) : void 0;
        };
    
        return Spriter;
    
      })();
    
      module.exports = Spriter;
    
    }).call(this);
    
    },{"./h":12,"./tween/timeline":30,"./tween/tween":31}],27:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Stagger, StaggerWrapper, Timeline, h;
    
      h = require('./h');
    
      Timeline = require('./tween/timeline');
    
      Stagger = (function() {
        function Stagger(options, Module) {
          this.init(options, Module);
        }
    
        Stagger.prototype._getOptionByMod = function(name, i, store) {
          var props, value;
          props = store[name];
          if (props + '' === '[object NodeList]') {
            props = Array.prototype.slice.call(props, 0);
          }
          if (props + '' === '[object HTMLCollection]') {
            props = Array.prototype.slice.call(props, 0);
          }
          value = h.isArray(props) ? props[i % props.length] : props;
          return h.parseIfStagger(value, i);
        };
    
        Stagger.prototype._getOptionByIndex = function(i, store) {
          var key, options, value;
          options = {};
          for (key in store) {
            value = store[key];
            options[key] = this._getOptionByMod(key, i, store);
          }
          return options;
        };
    
        Stagger.prototype._getChildQuantity = function(name, store) {
          var ary, quantifier;
          if (typeof name === 'number') {
            return name;
          }
          quantifier = store[name];
          if (h.isArray(quantifier)) {
            return quantifier.length;
          } else if (quantifier + '' === '[object NodeList]') {
            return quantifier.length;
          } else if (quantifier + '' === '[object HTMLCollection]') {
            ary = Array.prototype.slice.call(quantifier, 0);
            return ary.length;
          } else if (quantifier instanceof HTMLElement) {
            return 1;
          } else if (typeof quantifier === 'string') {
            return 1;
          }
        };
    
        Stagger.prototype._createTimeline = function(options) {
          if (options == null) {
            options = {};
          }
          return this.timeline = new Timeline({
            onStart: options.onStaggerStart,
            onUpdate: options.onStaggerUpdate,
            onComplete: options.onStaggerComplete,
            onReverseComplete: options.onStaggerReverseComplete,
            delay: options.moduleDelay
          });
        };
    
        Stagger.prototype.init = function(options, Module) {
          var count, i, module, option, _i;
          count = this._getChildQuantity(options.quantifier || 'el', options);
          this._createTimeline(options);
          this.childModules = [];
          for (i = _i = 0; 0 <= count ? _i < count : _i > count; i = 0 <= count ? ++_i : --_i) {
            option = this._getOptionByIndex(i, options);
            option.isRunLess = true;
            module = new Module(option);
            this.childModules.push(module);
            this.timeline.add(module);
          }
          return this;
        };
    
        Stagger.prototype.run = function() {
          return this.timeline.start();
        };
    
        return Stagger;
    
      })();
    
      StaggerWrapper = (function() {
        function StaggerWrapper(Module) {
          var M;
          M = Module;
          return function(options) {
            return new Stagger(options, M);
          };
        }
    
        return StaggerWrapper;
    
      })();
    
      module.exports = StaggerWrapper;
    
    }).call(this);
    
    },{"./h":12,"./tween/timeline":30}],28:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Swirl, Transit,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      Transit = require('./transit');
    
      Swirl = (function(_super) {
        __extends(Swirl, _super);
    
        function Swirl() {
          return Swirl.__super__.constructor.apply(this, arguments);
        }
    
        Swirl.prototype.skipPropsDelta = {
          x: 1,
          y: 1
        };
    
        Swirl.prototype.vars = function() {
          Swirl.__super__.vars.apply(this, arguments);
          return !this.o.isSwirlLess && this.generateSwirl();
        };
    
        Swirl.prototype.extendDefaults = function() {
          var angle, x, y, _base;
          Swirl.__super__.extendDefaults.apply(this, arguments);
          x = this.getPosValue('x');
          y = this.getPosValue('y');
          angle = 90 + Math.atan((y.delta / x.delta) || 0) * (180 / Math.PI);
          if (x.delta < 0) {
            angle += 180;
          }
          this.positionDelta = {
            radius: Math.sqrt(x.delta * x.delta + y.delta * y.delta),
            angle: angle,
            x: x,
            y: y
          };
          if ((_base = this.o).radiusScale == null) {
            _base.radiusScale = 1;
          }
          this.props.angleShift = this.h.parseIfRand(this.o.angleShift || 0);
          return this.props.radiusScale = this.h.parseIfRand(this.o.radiusScale);
        };
    
        Swirl.prototype.getPosValue = function(name) {
          var optVal, val;
          optVal = this.o[name];
          if (optVal && typeof optVal === 'object') {
            val = this.h.parseDelta(name, optVal);
            return {
              start: val.start.value,
              end: val.end.value,
              delta: val.delta,
              units: val.end.unit
            };
          } else {
            val = parseFloat(optVal || this.defaults[name]);
            return {
              start: val,
              end: val,
              delta: 0,
              units: 'px'
            };
          }
        };
    
        Swirl.prototype.setProgress = function(progress) {
          var angle, point, x, y;
          angle = this.positionDelta.angle;
          if (this.o.isSwirl) {
            angle += this.getSwirl(progress);
          }
          point = this.h.getRadialPoint({
            angle: angle,
            radius: this.positionDelta.radius * progress * this.props.radiusScale,
            center: {
              x: this.positionDelta.x.start,
              y: this.positionDelta.y.start
            }
          });
          x = point.x.toFixed(4);
          y = point.y.toFixed(4);
          this.props.x = this.o.ctx ? x : x + this.positionDelta.x.units;
          this.props.y = this.o.ctx ? y : y + this.positionDelta.y.units;
          return Swirl.__super__.setProgress.apply(this, arguments);
        };
    
        Swirl.prototype.generateSwirl = function() {
          var _base, _base1;
          this.props.signRand = Math.round(this.h.rand(0, 1)) ? -1 : 1;
          if ((_base = this.o).swirlSize == null) {
            _base.swirlSize = 10;
          }
          if ((_base1 = this.o).swirlFrequency == null) {
            _base1.swirlFrequency = 3;
          }
          this.props.swirlSize = this.h.parseIfRand(this.o.swirlSize);
          return this.props.swirlFrequency = this.h.parseIfRand(this.o.swirlFrequency);
        };
    
        Swirl.prototype.getSwirl = function(progress) {
          return this.props.signRand * this.props.swirlSize * Math.sin(this.props.swirlFrequency * progress);
        };
    
        return Swirl;
    
      })(Transit);
    
      module.exports = Swirl;
    
    }).call(this);
    
    },{"./transit":29}],29:[function(require,module,exports){
    
    /* istanbul ignore next */
    
    (function() {
      var Timeline, Transit, Tween, bitsMap, h,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    
      h = require('./h');
    
      bitsMap = require('./shapes/bitsMap');
    
      Tween = require('./tween/tween');
    
      Timeline = require('./tween/timeline');
    
      Transit = (function(_super) {
        __extends(Transit, _super);
    
        function Transit() {
          return Transit.__super__.constructor.apply(this, arguments);
        }
    
        Transit.prototype.progress = 0;
    
        Transit.prototype.defaults = {
          strokeWidth: 2,
          strokeOpacity: 1,
          strokeDasharray: 0,
          strokeDashoffset: 0,
          stroke: 'transparent',
          fill: 'deeppink',
          fillOpacity: 'transparent',
          strokeLinecap: '',
          points: 3,
          x: 0,
          y: 0,
          shiftX: 0,
          shiftY: 0,
          opacity: 1,
          radius: {
            0: 50
          },
          radiusX: void 0,
          radiusY: void 0,
          angle: 0,
          size: null,
          sizeGap: 0,
          onStart: null,
          onComplete: null,
          onUpdate: null,
          duration: 500,
          delay: 0,
          repeat: 0,
          yoyo: false,
          easing: 'Linear.None'
        };
    
        Transit.prototype.vars = function() {
          var o;
          if (this.h == null) {
            this.h = h;
          }
          if (this.lastSet == null) {
            this.lastSet = {};
          }
          this.index = this.o.index || 0;
          if (this.runCount == null) {
            this.runCount = 0;
          }
          this.extendDefaults();
          o = this.h.cloneObj(this.o);
          this.h.extend(o, this.defaults);
          this.history = [o];
          this.isForeign = !!this.o.ctx;
          this.isForeignBit = !!this.o.bit;
          return this.timelines = [];
        };
    
        Transit.prototype.render = function() {
          if (!this.isRendered) {
            if (!this.isForeign && !this.isForeignBit) {
              this.ctx = document.createElementNS(this.ns, 'svg');
              this.ctx.style.position = 'absolute';
              this.ctx.style.width = '100%';
              this.ctx.style.height = '100%';
              this.createBit();
              this.calcSize();
              this.el = document.createElement('div');
              this.el.appendChild(this.ctx);
              (this.o.parent || document.body).appendChild(this.el);
            } else {
              this.ctx = this.o.ctx;
              this.createBit();
              this.calcSize();
            }
            this.isRendered = true;
          }
          this.setElStyles();
          this.setProgress(0, true);
          this.createTween();
          return this;
        };
    
        Transit.prototype.setElStyles = function() {
          var marginSize, size, _ref;
          if (!this.isForeign) {
            size = "" + this.props.size + "px";
            marginSize = "" + (-this.props.size / 2) + "px";
            this.el.style.position = 'absolute';
            this.el.style.top = this.props.y;
            this.el.style.left = this.props.x;
            this.el.style.width = size;
            this.el.style.height = size;
            this.el.style['margin-left'] = marginSize;
            this.el.style['margin-top'] = marginSize;
            this.el.style['marginLeft'] = marginSize;
            this.el.style['marginTop'] = marginSize;
          }
          if ((_ref = this.el) != null) {
            _ref.style.opacity = this.props.opacity;
          }
          if (this.o.isShowInit) {
            return this.show();
          } else {
            return this.hide();
          }
        };
    
        Transit.prototype.show = function() {
          if (this.isShown || (this.el == null)) {
            return;
          }
          this.el.style.display = 'block';
          return this.isShown = true;
        };
    
        Transit.prototype.hide = function() {
          if ((this.isShown === false) || (this.el == null)) {
            return;
          }
          this.el.style.display = 'none';
          return this.isShown = false;
        };
    
        Transit.prototype.draw = function() {
          this.bit.setProp({
            x: this.origin.x,
            y: this.origin.y,
            stroke: this.props.stroke,
            'stroke-width': this.props.strokeWidth,
            'stroke-opacity': this.props.strokeOpacity,
            'stroke-dasharray': this.props.strokeDasharray,
            'stroke-dashoffset': this.props.strokeDashoffset,
            'stroke-linecap': this.props.strokeLinecap,
            fill: this.props.fill,
            'fill-opacity': this.props.fillOpacity,
            radius: this.props.radius,
            radiusX: this.props.radiusX,
            radiusY: this.props.radiusY,
            points: this.props.points,
            transform: this.calcTransform()
          });
          this.bit.draw();
          return this.drawEl();
        };
    
        Transit.prototype.drawEl = function() {
          if (this.el == null) {
            return true;
          }
          this.isPropChanged('opacity') && (this.el.style.opacity = this.props.opacity);
          if (!this.isForeign) {
            this.isPropChanged('x') && (this.el.style.left = this.props.x);
            this.isPropChanged('y') && (this.el.style.top = this.props.y);
            if (this.isNeedsTransform()) {
              return this.h.setPrefixedStyle(this.el, 'transform', this.fillTransform());
            }
          }
        };
    
        Transit.prototype.fillTransform = function() {
          return "translate(" + this.props.shiftX + ", " + this.props.shiftY + ")";
        };
    
        Transit.prototype.isNeedsTransform = function() {
          var isX, isY;
          isX = this.isPropChanged('shiftX');
          isY = this.isPropChanged('shiftY');
          return isX || isY;
        };
    
        Transit.prototype.isPropChanged = function(name) {
          var _base;
          if ((_base = this.lastSet)[name] == null) {
            _base[name] = {};
          }
          if (this.lastSet[name].value !== this.props[name]) {
            this.lastSet[name].value = this.props[name];
            return true;
          } else {
            return false;
          }
        };
    
        Transit.prototype.calcTransform = function() {
          return this.props.transform = "rotate(" + this.props.angle + "," + this.origin.x + "," + this.origin.y + ")";
        };
    
        Transit.prototype.calcSize = function() {
          var dStroke, radius, stroke, _base;
          if (this.o.size) {
            return;
          }
          radius = this.calcMaxRadius();
          dStroke = this.deltas['strokeWidth'];
          stroke = dStroke != null ? Math.max(Math.abs(dStroke.start), Math.abs(dStroke.end)) : this.props.strokeWidth;
          this.props.size = 2 * radius + 2 * stroke;
          switch (typeof (_base = this.props.easing).toLowerCase === "function" ? _base.toLowerCase() : void 0) {
            case 'elastic.out':
            case 'elastic.inout':
              this.props.size *= 1.25;
              break;
            case 'back.out':
            case 'back.inout':
              this.props.size *= 1.1;
          }
          this.props.size *= this.bit.ratio;
          this.props.size += 2 * this.props.sizeGap;
          return this.props.center = this.props.size / 2;
        };
    
        Transit.prototype.calcMaxRadius = function() {
          var selfSize, selfSizeX, selfSizeY;
          selfSize = this.getRadiusSize({
            key: 'radius'
          });
          selfSizeX = this.getRadiusSize({
            key: 'radiusX',
            fallback: selfSize
          });
          selfSizeY = this.getRadiusSize({
            key: 'radiusY',
            fallback: selfSize
          });
          return Math.max(selfSizeX, selfSizeY);
        };
    
        Transit.prototype.getRadiusSize = function(o) {
          if (this.deltas[o.key] != null) {
            return Math.max(Math.abs(this.deltas[o.key].end), Math.abs(this.deltas[o.key].start));
          } else if (this.props[o.key] != null) {
            return parseFloat(this.props[o.key]);
          } else {
            return o.fallback || 0;
          }
        };
    
        Transit.prototype.createBit = function() {
          var bitClass;
          bitClass = bitsMap.getBit(this.o.type || this.type);
          this.bit = new bitClass({
            ctx: this.ctx,
            el: this.o.bit,
            isDrawLess: true
          });
          if (this.isForeign || this.isForeignBit) {
            return this.el = this.bit.el;
          }
        };
    
        Transit.prototype.setProgress = function(progress, isShow) {
          if (!isShow) {
            this.show();
            if (typeof this.onUpdate === "function") {
              this.onUpdate(progress);
            }
          }
          this.progress = progress < 0 || !progress ? 0 : progress > 1 ? 1 : progress;
          this.calcCurrentProps(progress);
          this.calcOrigin();
          this.draw(progress);
          return this;
        };
    
        Transit.prototype.calcCurrentProps = function(progress) {
          var a, b, dash, g, i, item, key, keys, len, r, stroke, units, value, _results;
          keys = Object.keys(this.deltas);
          len = keys.length;
          _results = [];
          while (len--) {
            key = keys[len];
            value = this.deltas[key];
            _results.push(this.props[key] = (function() {
              var _i, _len, _ref;
              switch (value.type) {
                case 'array':
                  stroke = [];
                  _ref = value.delta;
                  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                    item = _ref[i];
                    dash = value.start[i].value + item.value * this.progress;
                    stroke.push({
                      value: dash,
                      unit: item.unit
                    });
                  }
                  return stroke;
                case 'number':
                  return value.start + value.delta * progress;
                case 'unit':
                  units = value.end.unit;
                  return "" + (value.start.value + value.delta * progress) + units;
                case 'color':
                  r = parseInt(value.start.r + value.delta.r * progress, 10);
                  g = parseInt(value.start.g + value.delta.g * progress, 10);
                  b = parseInt(value.start.b + value.delta.b * progress, 10);
                  a = parseInt(value.start.a + value.delta.a * progress, 10);
                  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
              }
            }).call(this));
          }
          return _results;
        };
    
        Transit.prototype.calcOrigin = function() {
          return this.origin = this.o.ctx ? {
            x: parseFloat(this.props.x),
            y: parseFloat(this.props.y)
          } : {
            x: this.props.center,
            y: this.props.center
          };
        };
    
        Transit.prototype.extendDefaults = function(o) {
          var array, defaultsValue, fromObject, i, key, keys, len, optionsValue, property, unit, value, _i, _len, _ref;
          if (this.props == null) {
            this.props = {};
          }
          fromObject = o || this.defaults;
          (o == null) && (this.deltas = {});
          keys = Object.keys(fromObject);
          len = keys.length;
          while (len--) {
            key = keys[len];
            defaultsValue = fromObject[key];
            if ((_ref = this.skipProps) != null ? _ref[key] : void 0) {
              continue;
            }
            if (o) {
              this.o[key] = defaultsValue;
              optionsValue = defaultsValue;
              delete this.deltas[key];
            } else {
              optionsValue = this.o[key] != null ? this.o[key] : defaultsValue;
            }
            if (!this.isDelta(optionsValue)) {
              if (typeof optionsValue === 'string') {
                if (optionsValue.match(/stagger/)) {
                  optionsValue = this.h.parseStagger(optionsValue, this.index);
                }
              }
              if (typeof optionsValue === 'string') {
                if (optionsValue.match(/rand/)) {
                  optionsValue = this.h.parseRand(optionsValue);
                }
              }
              this.props[key] = optionsValue;
              if (key === 'radius') {
                if (this.o.radiusX == null) {
                  this.props.radiusX = optionsValue;
                }
                if (this.o.radiusY == null) {
                  this.props.radiusY = optionsValue;
                }
              }
              if (this.h.posPropsMap[key]) {
                this.props[key] = this.h.parseUnit(this.props[key]).string;
              }
              if (this.h.strokeDashPropsMap[key]) {
                property = this.props[key];
                value = [];
                switch (typeof property) {
                  case 'number':
                    value.push(this.h.parseUnit(property));
                    break;
                  case 'string':
                    array = this.props[key].split(' ');
                    for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
                      unit = array[i];
                      value.push(this.h.parseUnit(unit));
                    }
                }
                this.props[key] = value;
              }
              continue;
            }
            this.isSkipDelta || this.getDelta(key, optionsValue);
          }
          return this.onUpdate = this.props.onUpdate;
        };
    
        Transit.prototype.isDelta = function(optionsValue) {
          var isObject;
          isObject = (optionsValue != null) && (typeof optionsValue === 'object');
          isObject = isObject && !optionsValue.unit;
          return !(!isObject || this.h.isArray(optionsValue) || h.isDOM(optionsValue));
        };
    
        Transit.prototype.getDelta = function(key, optionsValue) {
          var delta, _ref;
          if ((key === 'x' || key === 'y') && !this.o.ctx) {
            this.h.warn('Consider to animate shiftX/shiftY properties instead of x/y, as it would be much more performant', optionsValue);
          }
          if ((_ref = this.skipPropsDelta) != null ? _ref[key] : void 0) {
            return;
          }
          delta = this.h.parseDelta(key, optionsValue, this.defaults[key]);
          if (delta.type != null) {
            this.deltas[key] = delta;
          }
          return this.props[key] = delta.start;
        };
    
        Transit.prototype.mergeThenOptions = function(start, end) {
          var endValue, i, isFunction, key, keys, o, startKey, startKeys, value;
          o = {};
          for (key in start) {
            value = start[key];
            if (!this.h.tweenOptionMap[key] && !this.h.callbacksMap[key] || key === 'duration') {
              o[key] = value;
            } else {
              o[key] = key === 'easing' ? '' : void 0;
            }
          }
          keys = Object.keys(end);
          i = keys.length;
          while (i--) {
            key = keys[i];
            endValue = end[key];
            isFunction = typeof endValue === 'function';
            if (this.h.tweenOptionMap[key] || typeof endValue === 'object' || isFunction) {
              o[key] = endValue != null ? endValue : start[key];
              continue;
            }
            startKey = start[key];
            if (startKey == null) {
              startKey = this.defaults[key];
            }
            if ((key === 'radiusX' || key === 'radiusY') && (startKey == null)) {
              startKey = start.radius;
            }
            if (typeof startKey === 'object' && (startKey != null)) {
              startKeys = Object.keys(startKey);
              startKey = startKey[startKeys[0]];
            }
            if (endValue != null) {
              o[key] = {};
              o[key][startKey] = endValue;
            }
          }
          return o;
        };
    
        Transit.prototype.then = function(o) {
          var i, it, keys, len, merged, opts;
          if ((o == null) || !Object.keys(o)) {
            return;
          }
          merged = this.mergeThenOptions(this.history[this.history.length - 1], o);
          this.history.push(merged);
          keys = Object.keys(this.h.tweenOptionMap);
          i = keys.length;
          opts = {};
          while (i--) {
            opts[keys[i]] = merged[keys[i]];
          }
          it = this;
          len = it.history.length;
          (function(_this) {
            return (function(len) {
              opts.onUpdate = function(p) {
                return _this.setProgress(p);
              };
              opts.onStart = function() {
                var _ref;
                return (_ref = _this.props.onStart) != null ? _ref.apply(_this) : void 0;
              };
              opts.onComplete = function() {
                var _ref;
                return (_ref = _this.props.onComplete) != null ? _ref.apply(_this) : void 0;
              };
              opts.onFirstUpdate = function() {
                return it.tuneOptions(it.history[this.index]);
              };
              opts.isChained = !o.delay;
              return _this.timeline.append(new Tween(opts));
            });
          })(this)(len);
          return this;
        };
    
        Transit.prototype.tuneOptions = function(o) {
          this.extendDefaults(o);
          this.calcSize();
          return this.setElStyles();
        };
    
        Transit.prototype.createTween = function() {
          var it;
          it = this;
          this.createTimeline();
          this.timeline = new Timeline({
            onComplete: (function(_this) {
              return function() {
                var _ref;
                !_this.o.isShowEnd && _this.hide();
                return (_ref = _this.props.onComplete) != null ? _ref.apply(_this) : void 0;
              };
            })(this)
          });
          this.timeline.add(this.tween);
          return !this.o.isRunLess && this.startTween();
        };
    
        Transit.prototype.createTimeline = function() {
          return this.tween = new Tween({
            duration: this.props.duration,
            delay: this.props.delay,
            repeat: this.props.repeat,
            yoyo: this.props.yoyo,
            easing: this.props.easing,
            onUpdate: (function(_this) {
              return function(p) {
                return _this.setProgress(p);
              };
            })(this),
            onStart: (function(_this) {
              return function() {
                var _ref;
                _this.show();
                return (_ref = _this.props.onStart) != null ? _ref.apply(_this) : void 0;
              };
            })(this),
            onFirstUpdateBackward: (function(_this) {
              return function() {
                return _this.history.length > 1 && _this.tuneOptions(_this.history[0]);
              };
            })(this),
            onReverseComplete: (function(_this) {
              return function() {
                var _ref;
                !_this.o.isShowInit && _this.hide();
                return (_ref = _this.props.onReverseComplete) != null ? _ref.apply(_this) : void 0;
              };
            })(this)
          });
        };
    
        Transit.prototype.run = function(o) {
          var key, keys, len;
          this.runCount++;
          if (o && Object.keys(o).length) {
            if (this.history.length > 1) {
              keys = Object.keys(o);
              len = keys.length;
              while (len--) {
                key = keys[len];
                if (h.callbacksMap[key] || h.tweenOptionMap[key]) {
                  h.warn("the property \"" + key + "\" property can not be overridden on run with \"then\" chain yet");
                  delete o[key];
                }
              }
            }
            this.transformHistory(o);
            this.tuneNewOption(o);
            o = this.h.cloneObj(this.o);
            this.h.extend(o, this.defaults);
            this.history[0] = o;
            !this.o.isDrawLess && this.setProgress(0, true);
          } else {
            this.tuneNewOption(this.history[0]);
          }
          return this.startTween();
        };
    
        Transit.prototype.transformHistory = function(o) {
          var historyLen, i, j, key, keys, len, optionRecord, value, value2, valueKeys, valueKeys2, _results;
          keys = Object.keys(o);
          i = -1;
          len = keys.length;
          historyLen = this.history.length;
          _results = [];
          while (++i < len) {
            key = keys[i];
            j = 0;
            _results.push((function() {
              var _results1;
              _results1 = [];
              while (++j < historyLen) {
                optionRecord = this.history[j][key];
                if (typeof optionRecord === 'object') {
                  valueKeys = Object.keys(optionRecord);
                  value = optionRecord[valueKeys[0]];
                  delete this.history[j][key][valueKeys[0]];
                  if (typeof o[key] === 'object') {
                    valueKeys2 = Object.keys(o[key]);
                    value2 = o[key][valueKeys2[0]];
                    this.history[j][key][value2] = value;
                  } else {
                    this.history[j][key][o[key]] = value;
                  }
                  break;
                } else {
                  _results1.push(this.history[j][key] = o[key]);
                }
              }
              return _results1;
            }).call(this));
          }
          return _results;
        };
    
        Transit.prototype.tuneNewOption = function(o, isForeign) {
          if ((o != null) && (o.type != null) && o.type !== (this.o.type || this.type)) {
            this.h.warn('Sorry, type can not be changed on run');
            delete o.type;
          }
          if ((o != null) && Object.keys(o).length) {
            this.extendDefaults(o);
            this.resetTimeline();
            !isForeign && this.timeline.recalcDuration();
            this.calcSize();
            return !isForeign && this.setElStyles();
          }
        };
    
        Transit.prototype.startTween = function() {
          return setTimeout(((function(_this) {
            return function() {
              var _ref;
              return (_ref = _this.timeline) != null ? _ref.start() : void 0;
            };
          })(this)), 1);
        };
    
        Transit.prototype.resetTimeline = function() {
          var i, key, timelineOptions, _i, _len, _ref;
          timelineOptions = {};
          _ref = Object.keys(this.h.tweenOptionMap);
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            key = _ref[i];
            timelineOptions[key] = this.props[key];
          }
          timelineOptions.onStart = this.props.onStart;
          timelineOptions.onComplete = this.props.onComplete;
          return this.tween.setProp(timelineOptions);
        };
    
        Transit.prototype.getBitLength = function() {
          this.props.bitLength = this.bit.getLength();
          return this.props.bitLength;
        };
    
        return Transit;
    
      })(bitsMap.map.bit);
    
      module.exports = Transit;
    
    }).call(this);
    
    },{"./h":12,"./shapes/bitsMap":18,"./tween/timeline":30,"./tween/tween":31}],30:[function(require,module,exports){
    (function() {
      var Timeline, h, t,
        __slice = [].slice;
    
      h = require('../h');
    
      t = require('./tweener');
    
      Timeline = (function() {
        Timeline.prototype.state = 'stop';
    
        Timeline.prototype.defaults = {
          repeat: 0,
          delay: 0
        };
    
        function Timeline(o) {
          this.o = o != null ? o : {};
          this.vars();
          this._extendDefaults();
          this;
        }
    
        Timeline.prototype.vars = function() {
          this.timelines = [];
          this.props = {
            time: 0,
            repeatTime: 0,
            shiftedRepeatTime: 0
          };
          this.loop = h.bind(this.loop, this);
          return this.onUpdate = this.o.onUpdate;
        };
    
        Timeline.prototype.add = function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          this.pushTimelineArray(args);
          return this;
        };
    
        Timeline.prototype.pushTimelineArray = function(array) {
          var i, tm, _i, _len, _results;
          _results = [];
          for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
            tm = array[i];
            if (h.isArray(tm)) {
              _results.push(this.pushTimelineArray(tm));
            } else {
              _results.push(this.pushTimeline(tm));
            }
          }
          return _results;
        };
    
        Timeline.prototype._extendDefaults = function() {
          var key, value, _ref, _results;
          _ref = this.defaults;
          _results = [];
          for (key in _ref) {
            value = _ref[key];
            _results.push(this.props[key] = this.o[key] != null ? this.o[key] : value);
          }
          return _results;
        };
    
        Timeline.prototype.setProp = function(props) {
          var key, value;
          for (key in props) {
            value = props[key];
            this.props[key] = value;
          }
          return this.recalcDuration();
        };
    
        Timeline.prototype.pushTimeline = function(timeline, shift) {
          if (timeline.timeline instanceof Timeline) {
            timeline = timeline.timeline;
          }
          (shift != null) && timeline.setProp({
            'shiftTime': shift
          });
          this.timelines.push(timeline);
          return this._recalcTimelineDuration(timeline);
        };
    
        Timeline.prototype.remove = function(timeline) {
          var index;
          index = this.timelines.indexOf(timeline);
          if (index !== -1) {
            return this.timelines.splice(index, 1);
          }
        };
    
        Timeline.prototype.append = function() {
          var i, timeline, tm, _i, _len;
          timeline = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          for (i = _i = 0, _len = timeline.length; _i < _len; i = ++_i) {
            tm = timeline[i];
            if (h.isArray(tm)) {
              this._appendTimelineArray(tm);
            } else {
              this.appendTimeline(tm, this.timelines.length);
            }
          }
          return this;
        };
    
        Timeline.prototype._appendTimelineArray = function(timelineArray) {
          var i, len, time, _results;
          i = timelineArray.length;
          time = this.props.repeatTime - this.props.delay;
          len = this.timelines.length;
          _results = [];
          while (i--) {
            _results.push(this.appendTimeline(timelineArray[i], len, time));
          }
          return _results;
        };
    
        Timeline.prototype.appendTimeline = function(timeline, index, time) {
          var shift;
          shift = (time != null ? time : this.props.time);
          shift += timeline.props.shiftTime || 0;
          timeline.index = index;
          return this.pushTimeline(timeline, shift);
        };
    
        Timeline.prototype.recalcDuration = function() {
          var len, _results;
          len = this.timelines.length;
          this.props.time = 0;
          this.props.repeatTime = 0;
          this.props.shiftedRepeatTime = 0;
          _results = [];
          while (len--) {
            _results.push(this._recalcTimelineDuration(this.timelines[len]));
          }
          return _results;
        };
    
        Timeline.prototype._recalcTimelineDuration = function(timeline) {
          var timelineTime;
          timelineTime = timeline.props.repeatTime + (timeline.props.shiftTime || 0);
          this.props.time = Math.max(timelineTime, this.props.time);
          this.props.repeatTime = (this.props.time + this.props.delay) * (this.props.repeat + 1);
          this.props.shiftedRepeatTime = this.props.repeatTime + (this.props.shiftTime || 0);
          return this.props.shiftedRepeatTime -= this.props.delay;
        };
    
        Timeline.prototype.update = function(time, isGrow) {
          if (time > this.props.endTime) {
            time = this.props.endTime;
          }
          if (time === this.props.endTime && this.isCompleted) {
            return true;
          }
          this._updateTimelines(time, isGrow);
          return this._checkCallbacks(time);
        };
    
        Timeline.prototype._updateTimelines = function(time, isGrow) {
          var elapsed, i, len, startPoint, timeToTimelines;
          startPoint = this.props.startTime - this.props.delay;
          elapsed = (time - startPoint) % (this.props.delay + this.props.time);
          timeToTimelines = time === this.props.endTime ? this.props.endTime : startPoint + elapsed >= this.props.startTime ? time >= this.props.endTime ? this.props.endTime : startPoint + elapsed : time > this.props.startTime + this.props.time ? this.props.startTime + this.props.time : null;
          if (timeToTimelines != null) {
            i = -1;
            len = this.timelines.length - 1;
            while (i++ < len) {
              if (isGrow == null) {
                isGrow = time > (this._previousUpdateTime || 0);
              }
              this.timelines[i].update(timeToTimelines, isGrow);
            }
          }
          return this._previousUpdateTime = time;
        };
    
        Timeline.prototype._checkCallbacks = function(time) {
          var _ref, _ref1, _ref2;
          if (this.prevTime === time) {
            return;
          }
          if (!this.prevTime || this.isCompleted && !this.isStarted) {
            if ((_ref = this.o.onStart) != null) {
              _ref.apply(this);
            }
            this.isStarted = true;
            this.isCompleted = false;
          }
          if (time >= this.props.startTime && time < this.props.endTime) {
            if (typeof this.onUpdate === "function") {
              this.onUpdate((time - this.props.startTime) / this.props.repeatTime);
            }
          }
          if (this.prevTime > time && time <= this.props.startTime) {
            if ((_ref1 = this.o.onReverseComplete) != null) {
              _ref1.apply(this);
            }
          }
          this.prevTime = time;
          if (time === this.props.endTime && !this.isCompleted) {
            if (typeof this.onUpdate === "function") {
              this.onUpdate(1);
            }
            if ((_ref2 = this.o.onComplete) != null) {
              _ref2.apply(this);
            }
            this.isCompleted = true;
            this.isStarted = false;
            return true;
          }
        };
    
        Timeline.prototype.start = function(time) {
          this.setStartTime(time);
          !time && (t.add(this), this.state = 'play');
          return this;
        };
    
        Timeline.prototype.pause = function() {
          this.removeFromTweener();
          this.state = 'pause';
          return this;
        };
    
        Timeline.prototype.stop = function() {
          this.removeFromTweener();
          this.setProgress(0);
          this.state = 'stop';
          return this;
        };
    
        Timeline.prototype.restart = function() {
          this.stop();
          return this.start();
        };
    
        Timeline.prototype.removeFromTweener = function() {
          t.remove(this);
          return this;
        };
    
        Timeline.prototype.setStartTime = function(time) {
          this.getDimentions(time);
          return this.startTimelines(this.props.startTime);
        };
    
        Timeline.prototype.startTimelines = function(time) {
          var i, _results;
          i = this.timelines.length;
          (time == null) && (time = this.props.startTime);
          _results = [];
          while (i--) {
            _results.push(this.timelines[i].start(time));
          }
          return _results;
        };
    
        Timeline.prototype.setProgress = function(progress) {
          if (this.props.startTime == null) {
            this.setStartTime();
          }
          progress = h.clamp(progress, 0, 1);
          return this.update(this.props.startTime + progress * this.props.repeatTime);
        };
    
        Timeline.prototype.getDimentions = function(time) {
          if (time == null) {
            time = performance.now();
          }
          this.props.startTime = time + this.props.delay + (this.props.shiftTime || 0);
          this.props.endTime = this.props.startTime + this.props.shiftedRepeatTime;
          return this.props.endTime -= this.props.shiftTime || 0;
        };
    
        return Timeline;
    
      })();
    
      module.exports = Timeline;
    
    }).call(this);
    
    },{"../h":12,"./tweener":32}],31:[function(require,module,exports){
    (function() {
      var Tween, easing, h, t;
    
      h = require('../h');
    
      t = require('./tweener');
    
      easing = require('../easing/easing');
    
      Tween = (function() {
        Tween.prototype.defaults = {
          duration: 600,
          delay: 0,
          repeat: 0,
          yoyo: false,
          easing: 'Linear.None',
          onStart: null,
          onComplete: null,
          onReverseComplete: null,
          onFirstUpdate: null,
          onUpdate: null,
          onFirstUpdateBackward: null,
          isChained: false
        };
    
        function Tween(o) {
          this.o = o != null ? o : {};
          this.extendDefaults();
          this.vars();
          this;
        }
    
        Tween.prototype.vars = function() {
          this.h = h;
          this.progress = 0;
          this.prevTime = 0;
          return this.calcDimentions();
        };
    
        Tween.prototype.calcDimentions = function() {
          this.props.time = this.props.duration + this.props.delay;
          return this.props.repeatTime = this.props.time * (this.props.repeat + 1);
        };
    
        Tween.prototype.extendDefaults = function() {
          var key, value, _ref;
          this.props = {};
          _ref = this.defaults;
          for (key in _ref) {
            value = _ref[key];
            this.props[key] = this.o[key] != null ? this.o[key] : value;
          }
          this.props.easing = easing.parseEasing(this.o.easing || this.defaults.easing);
          return this.onUpdate = this.props.onUpdate;
        };
    
        Tween.prototype.start = function(time) {
          this.isCompleted = false;
          this.isStarted = false;
          if (time == null) {
            time = performance.now();
          }
          this.props.startTime = time + this.props.delay + (this.props.shiftTime || 0);
          this.props.endTime = this.props.startTime + this.props.repeatTime - this.props.delay;
          return this;
        };
    
        Tween.prototype.update = function(time, isGrow) {
          var _ref, _ref1, _ref2, _ref3, _ref4;
          if ((time >= this.props.startTime) && (time < this.props.endTime)) {
            this.isOnReverseComplete = false;
            this.isCompleted = false;
            if (!this.isFirstUpdate) {
              if ((_ref = this.props.onFirstUpdate) != null) {
                _ref.apply(this);
              }
              this.isFirstUpdate = true;
            }
            if (!this.isStarted) {
              if ((_ref1 = this.props.onStart) != null) {
                _ref1.apply(this);
              }
              this.isStarted = true;
            }
            this._updateInActiveArea(time);
            if (time < this.prevTime && !this.isFirstUpdateBackward) {
              if ((_ref2 = this.props.onFirstUpdateBackward) != null) {
                _ref2.apply(this);
              }
              this.isFirstUpdateBackward = true;
            }
          } else {
            if (time >= this.props.endTime && !this.isCompleted) {
              this._complete();
            }
            if (time > this.props.endTime) {
              this.isFirstUpdate = false;
            }
            if (time > this.props.endTime) {
              this.isFirstUpdateBackward = false;
            }
          }
          if (time < this.prevTime && time <= this.props.startTime) {
            if (!this.isFirstUpdateBackward) {
              if ((_ref3 = this.props.onFirstUpdateBackward) != null) {
                _ref3.apply(this);
              }
              this.isFirstUpdateBackward = true;
            }
            if (isGrow) {
              this._complete();
            } else if (!this.isOnReverseComplete) {
              this.isOnReverseComplete = true;
              this.setProgress(0, !this.props.isChained);
              if ((_ref4 = this.props.onReverseComplete) != null) {
                _ref4.apply(this);
              }
            }
            this.isFirstUpdate = false;
          }
          this.prevTime = time;
          return this.isCompleted;
        };
    
        Tween.prototype._complete = function() {
          var _ref;
          this.setProgress(1);
          if ((_ref = this.props.onComplete) != null) {
            _ref.apply(this);
          }
          this.isCompleted = true;
          this.isStarted = false;
          return this.isOnReverseComplete = false;
        };
    
        Tween.prototype._updateInActiveArea = function(time) {
          var cnt, elapsed, elapsed2, proc, startPoint;
          startPoint = this.props.startTime - this.props.delay;
          elapsed = (time - startPoint) % (this.props.delay + this.props.duration);
          cnt = Math.floor((time - startPoint) / (this.props.delay + this.props.duration));
          if (startPoint + elapsed >= this.props.startTime) {
            elapsed2 = (time - this.props.startTime) % (this.props.delay + this.props.duration);
            proc = elapsed2 / this.props.duration;
            return this.setProgress(!this.props.yoyo ? proc : cnt % 2 === 0 ? proc : 1 - (proc === 1 ? 0 : proc));
          } else {
            return this.setProgress(this.prevTime < time ? 1 : 0);
          }
        };
    
        Tween.prototype.setProgress = function(p, isCallback) {
          if (isCallback == null) {
            isCallback = true;
          }
          this.progress = p;
          this.easedProgress = this.props.easing(this.progress);
          if (this.props.prevEasedProgress !== this.easedProgress && isCallback) {
            if (typeof this.onUpdate === "function") {
              this.onUpdate(this.easedProgress, this.progress);
            }
          }
          return this.props.prevEasedProgress = this.easedProgress;
        };
    
        Tween.prototype.setProp = function(obj, value) {
          var key, val;
          if (typeof obj === 'object') {
            for (key in obj) {
              val = obj[key];
              this.props[key] = val;
              if (key === 'easing') {
                this.props.easing = easing.parseEasing(this.props.easing);
              }
            }
          } else if (typeof obj === 'string') {
            if (obj === 'easing') {
              this.props.easing = easing.parseEasing(value);
            } else {
              this.props[obj] = value;
            }
          }
          return this.calcDimentions();
        };
    
        Tween.prototype.run = function(time) {
          this.start(time);
          !time && (t.add(this));
          return this;
        };
    
        Tween.prototype.stop = function() {
          this.pause();
          this.setProgress(0);
          return this;
        };
    
        Tween.prototype.pause = function() {
          this._removeFromTweener();
          return this;
        };
    
        Tween.prototype._removeFromTweener = function() {
          t.remove(this);
          return this;
        };
    
        return Tween;
    
      })();
    
      module.exports = Tween;
    
    }).call(this);
    
    },{"../easing/easing":9,"../h":12,"./tweener":32}],32:[function(require,module,exports){
    (function() {
      var Tweener, h, i, t;
    
      require('../polyfills/raf');
    
      require('../polyfills/performance');
    
      h = require('../h');
    
      i = 0;
    
      Tweener = (function() {
        function Tweener() {
          this.vars();
          this;
        }
    
        Tweener.prototype.vars = function() {
          this.tweens = [];
          return this.loop = h.bind(this.loop, this);
        };
    
        Tweener.prototype.loop = function() {
          var time;
          if (!this.isRunning) {
            return false;
          }
          time = performance.now();
          this.update(time);
          if (!this.tweens.length) {
            return this.isRunning = false;
          }
          requestAnimationFrame(this.loop);
          return this;
        };
    
        Tweener.prototype.startLoop = function() {
          if (this.isRunning) {
            return;
          }
          this.isRunning = true;
          return requestAnimationFrame(this.loop);
        };
    
        Tweener.prototype.stopLoop = function() {
          return this.isRunning = false;
        };
    
        Tweener.prototype.update = function(time) {
          var _results;
          i = this.tweens.length;
          _results = [];
          while (i--) {
            if (this.tweens[i].update(time) === true) {
              _results.push(this.remove(i));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        };
    
        Tweener.prototype.add = function(tween) {
          this.tweens.push(tween);
          return this.startLoop();
        };
    
        Tweener.prototype.removeAll = function() {
          return this.tweens.length = 0;
        };
    
        Tweener.prototype.remove = function(tween) {
          var index;
          index = typeof tween === 'number' ? tween : this.tweens.indexOf(tween);
          if (index !== -1) {
            return this.tweens.splice(index, 1);
          }
        };
    
        return Tweener;
    
      })();
    
      t = new Tweener;
    
      module.exports = t;
    
    }).call(this);
    
    },{"../h":12,"../polyfills/performance":15,"../polyfills/raf":16}],33:[function(require,module,exports){
    
    /*!
      LegoMushroom @legomushroom http://legomushroom.com
      MIT License 2014
     */
    
    
    /* istanbul ignore next */
    
    (function() {
      (function() {
        var Main;
        Main = (function() {
          function Main(o) {
            this.o = o != null ? o : {};
            if (window.isAnyResizeEventInited) {
              return;
            }
            this.vars();
            this.redefineProto();
          }
    
          Main.prototype.vars = function() {
            window.isAnyResizeEventInited = true;
            this.allowedProtos = [HTMLDivElement, HTMLFormElement, HTMLLinkElement, HTMLBodyElement, HTMLParagraphElement, HTMLFieldSetElement, HTMLLegendElement, HTMLLabelElement, HTMLButtonElement, HTMLUListElement, HTMLOListElement, HTMLLIElement, HTMLHeadingElement, HTMLQuoteElement, HTMLPreElement, HTMLBRElement, HTMLFontElement, HTMLHRElement, HTMLModElement, HTMLParamElement, HTMLMapElement, HTMLTableElement, HTMLTableCaptionElement, HTMLImageElement, HTMLTableCellElement, HTMLSelectElement, HTMLInputElement, HTMLTextAreaElement, HTMLAnchorElement, HTMLObjectElement, HTMLTableColElement, HTMLTableSectionElement, HTMLTableRowElement];
            return this.timerElements = {
              img: 1,
              textarea: 1,
              input: 1,
              embed: 1,
              object: 1,
              svg: 1,
              canvas: 1,
              tr: 1,
              tbody: 1,
              thead: 1,
              tfoot: 1,
              a: 1,
              select: 1,
              option: 1,
              optgroup: 1,
              dl: 1,
              dt: 1,
              br: 1,
              basefont: 1,
              font: 1,
              col: 1,
              iframe: 1
            };
          };
    
          Main.prototype.redefineProto = function() {
            var i, it, proto, t;
            it = this;
            return t = (function() {
              var _i, _len, _ref, _results;
              _ref = this.allowedProtos;
              _results = [];
              for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                proto = _ref[i];
                if (proto.prototype == null) {
                  continue;
                }
                _results.push((function(proto) {
                  var listener, remover;
                  listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
                  (function(listener) {
                    var wrappedListener;
                    wrappedListener = function() {
                      var option;
                      if (this !== window || this !== document) {
                        option = arguments[0] === 'onresize' && !this.isAnyResizeEventInited;
                        option && it.handleResize({
                          args: arguments,
                          that: this
                        });
                      }
                      return listener.apply(this, arguments);
                    };
                    if (proto.prototype.addEventListener) {
                      return proto.prototype.addEventListener = wrappedListener;
                    } else if (proto.prototype.attachEvent) {
                      return proto.prototype.attachEvent = wrappedListener;
                    }
                  })(listener);
                  remover = proto.prototype.removeEventListener || proto.prototype.detachEvent;
                  return (function(remover) {
                    var wrappedRemover;
                    wrappedRemover = function() {
                      this.isAnyResizeEventInited = false;
                      this.iframe && this.removeChild(this.iframe);
                      return remover.apply(this, arguments);
                    };
                    if (proto.prototype.removeEventListener) {
                      return proto.prototype.removeEventListener = wrappedRemover;
                    } else if (proto.prototype.detachEvent) {
                      return proto.prototype.detachEvent = wrappedListener;
                    }
                  })(remover);
                })(proto));
              }
              return _results;
            }).call(this);
          };
    
          Main.prototype.handleResize = function(args) {
            var computedStyle, el, iframe, isEmpty, isNoPos, isStatic, _ref;
            el = args.that;
            if (!this.timerElements[el.tagName.toLowerCase()]) {
              iframe = document.createElement('iframe');
              el.appendChild(iframe);
              iframe.style.width = '100%';
              iframe.style.height = '100%';
              iframe.style.position = 'absolute';
              iframe.style.zIndex = -999;
              iframe.style.opacity = 0;
              iframe.style.top = 0;
              iframe.style.left = 0;
              computedStyle = window.getComputedStyle ? getComputedStyle(el) : el.currentStyle;
              isNoPos = el.style.position === '';
              isStatic = computedStyle.position === 'static' && isNoPos;
              isEmpty = computedStyle.position === '' && el.style.position === '';
              if (isStatic || isEmpty) {
                el.style.position = 'relative';
              }
              if ((_ref = iframe.contentWindow) != null) {
                _ref.onresize = (function(_this) {
                  return function(e) {
                    return _this.dispatchEvent(el);
                  };
                })(this);
              }
              el.iframe = iframe;
            } else {
              this.initTimer(el);
            }
            return el.isAnyResizeEventInited = true;
          };
    
          Main.prototype.initTimer = function(el) {
            var height, width;
            width = 0;
            height = 0;
            return this.interval = setInterval((function(_this) {
              return function() {
                var newHeight, newWidth;
                newWidth = el.offsetWidth;
                newHeight = el.offsetHeight;
                if (newWidth !== width || newHeight !== height) {
                  _this.dispatchEvent(el);
                  width = newWidth;
                  return height = newHeight;
                }
              };
            })(this), this.o.interval || 62.5);
          };
    
          Main.prototype.dispatchEvent = function(el) {
            var e;
            if (document.createEvent) {
              e = document.createEvent('HTMLEvents');
              e.initEvent('onresize', false, false);
              return el.dispatchEvent(e);
            } else if (document.createEventObject) {
              e = document.createEventObject();
              return el.fireEvent('onresize', e);
            } else {
              return false;
            }
          };
    
          Main.prototype.destroy = function() {
            var i, it, proto, _i, _len, _ref, _results;
            clearInterval(this.interval);
            this.interval = null;
            window.isAnyResizeEventInited = false;
            it = this;
            _ref = this.allowedProtos;
            _results = [];
            for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
              proto = _ref[i];
              if (proto.prototype == null) {
                continue;
              }
              _results.push((function(proto) {
                var listener;
                listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
                if (proto.prototype.addEventListener) {
                  proto.prototype.addEventListener = Element.prototype.addEventListener;
                } else if (proto.prototype.attachEvent) {
                  proto.prototype.attachEvent = Element.prototype.attachEvent;
                }
                if (proto.prototype.removeEventListener) {
                  return proto.prototype.removeEventListener = Element.prototype.removeEventListener;
                } else if (proto.prototype.detachEvent) {
                  return proto.prototype.detachEvent = Element.prototype.detachEvent;
                }
              })(proto));
            }
            return _results;
          };
    
          return Main;
    
        })();
        if ((typeof define === "function") && define.amd) {
          return define("any-resize-event", [], function() {
            return new Main;
          });
        } else if ((typeof module === "object") && (typeof module.exports === "object")) {
          return module.exports = new Main;
        } else {
          if (typeof window !== "undefined" && window !== null) {
            window.AnyResizeEvent = Main;
          }
          return typeof window !== "undefined" && window !== null ? window.anyResizeEvent = new Main : void 0;
        }
      })();
    
    }).call(this);
    
    },{}],34:[function(require,module,exports){
    //     Underscore.js 1.8.3
    //     http://underscorejs.org
    //     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //     Underscore may be freely distributed under the MIT license.
    
    (function() {
    
      // Baseline setup
      // --------------
    
      // Establish the root object, `window` in the browser, or `exports` on the server.
      var root = this;
    
      // Save the previous value of the `_` variable.
      var previousUnderscore = root._;
    
      // Save bytes in the minified (but not gzipped) version:
      var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
    
      // Create quick reference variables for speed access to core prototypes.
      var
        push             = ArrayProto.push,
        slice            = ArrayProto.slice,
        toString         = ObjProto.toString,
        hasOwnProperty   = ObjProto.hasOwnProperty;
    
      // All **ECMAScript 5** native function implementations that we hope to use
      // are declared here.
      var
        nativeIsArray      = Array.isArray,
        nativeKeys         = Object.keys,
        nativeBind         = FuncProto.bind,
        nativeCreate       = Object.create;
    
      // Naked function reference for surrogate-prototype-swapping.
      var Ctor = function(){};
    
      // Create a safe reference to the Underscore object for use below.
      var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
      };
    
      // Export the Underscore object for **Node.js**, with
      // backwards-compatibility for the old `require()` API. If we're in
      // the browser, add `_` as a global object.
      if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
          exports = module.exports = _;
        }
        exports._ = _;
      } else {
        root._ = _;
      }
    
      // Current version.
      _.VERSION = '1.8.3';
    
      // Internal function that returns an efficient (for current engines) version
      // of the passed-in callback, to be repeatedly applied in other Underscore
      // functions.
      var optimizeCb = function(func, context, argCount) {
        if (context === void 0) return func;
        switch (argCount == null ? 3 : argCount) {
          case 1: return function(value) {
            return func.call(context, value);
          };
          case 2: return function(value, other) {
            return func.call(context, value, other);
          };
          case 3: return function(value, index, collection) {
            return func.call(context, value, index, collection);
          };
          case 4: return function(accumulator, value, index, collection) {
            return func.call(context, accumulator, value, index, collection);
          };
        }
        return function() {
          return func.apply(context, arguments);
        };
      };
    
      // A mostly-internal function to generate callbacks that can be applied
      // to each element in a collection, returning the desired result — either
      // identity, an arbitrary callback, a property matcher, or a property accessor.
      var cb = function(value, context, argCount) {
        if (value == null) return _.identity;
        if (_.isFunction(value)) return optimizeCb(value, context, argCount);
        if (_.isObject(value)) return _.matcher(value);
        return _.property(value);
      };
      _.iteratee = function(value, context) {
        return cb(value, context, Infinity);
      };
    
      // An internal function for creating assigner functions.
      var createAssigner = function(keysFunc, undefinedOnly) {
        return function(obj) {
          var length = arguments.length;
          if (length < 2 || obj == null) return obj;
          for (var index = 1; index < length; index++) {
            var source = arguments[index],
                keys = keysFunc(source),
                l = keys.length;
            for (var i = 0; i < l; i++) {
              var key = keys[i];
              if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
            }
          }
          return obj;
        };
      };
    
      // An internal function for creating a new object that inherits from another.
      var baseCreate = function(prototype) {
        if (!_.isObject(prototype)) return {};
        if (nativeCreate) return nativeCreate(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor;
        Ctor.prototype = null;
        return result;
      };
    
      var property = function(key) {
        return function(obj) {
          return obj == null ? void 0 : obj[key];
        };
      };
    
      // Helper for collection methods to determine whether a collection
      // should be iterated as an array or as an object
      // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
      // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
      var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
      var getLength = property('length');
      var isArrayLike = function(collection) {
        var length = getLength(collection);
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
      };
    
      // Collection Functions
      // --------------------
    
      // The cornerstone, an `each` implementation, aka `forEach`.
      // Handles raw objects in addition to array-likes. Treats all
      // sparse array-likes as if they were dense.
      _.each = _.forEach = function(obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj)) {
          for (i = 0, length = obj.length; i < length; i++) {
            iteratee(obj[i], i, obj);
          }
        } else {
          var keys = _.keys(obj);
          for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
          }
        }
        return obj;
      };
    
      // Return the results of applying the iteratee to each element.
      _.map = _.collect = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            results = Array(length);
        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
      };
    
      // Create a reducing function iterating left or right.
      function createReduce(dir) {
        // Optimized iterator function as using arguments.length
        // in the main function will deoptimize the, see #1991.
        function iterator(obj, iteratee, memo, keys, index, length) {
          for (; index >= 0 && index < length; index += dir) {
            var currentKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[currentKey], currentKey, obj);
          }
          return memo;
        }
    
        return function(obj, iteratee, memo, context) {
          iteratee = optimizeCb(iteratee, context, 4);
          var keys = !isArrayLike(obj) && _.keys(obj),
              length = (keys || obj).length,
              index = dir > 0 ? 0 : length - 1;
          // Determine the initial value if none is provided.
          if (arguments.length < 3) {
            memo = obj[keys ? keys[index] : index];
            index += dir;
          }
          return iterator(obj, iteratee, memo, keys, index, length);
        };
      }
    
      // **Reduce** builds up a single result from a list of values, aka `inject`,
      // or `foldl`.
      _.reduce = _.foldl = _.inject = createReduce(1);
    
      // The right-associative version of reduce, also known as `foldr`.
      _.reduceRight = _.foldr = createReduce(-1);
    
      // Return the first value which passes a truth test. Aliased as `detect`.
      _.find = _.detect = function(obj, predicate, context) {
        var key;
        if (isArrayLike(obj)) {
          key = _.findIndex(obj, predicate, context);
        } else {
          key = _.findKey(obj, predicate, context);
        }
        if (key !== void 0 && key !== -1) return obj[key];
      };
    
      // Return all the elements that pass a truth test.
      // Aliased as `select`.
      _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        _.each(obj, function(value, index, list) {
          if (predicate(value, index, list)) results.push(value);
        });
        return results;
      };
    
      // Return all the elements for which a truth test fails.
      _.reject = function(obj, predicate, context) {
        return _.filter(obj, _.negate(cb(predicate)), context);
      };
    
      // Determine whether all of the elements match a truth test.
      // Aliased as `all`.
      _.every = _.all = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }
        return true;
      };
    
      // Determine if at least one element in the object matches a truth test.
      // Aliased as `any`.
      _.some = _.any = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          if (predicate(obj[currentKey], currentKey, obj)) return true;
        }
        return false;
      };
    
      // Determine if the array or object contains a given item (using `===`).
      // Aliased as `includes` and `include`.
      _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
        if (!isArrayLike(obj)) obj = _.values(obj);
        if (typeof fromIndex != 'number' || guard) fromIndex = 0;
        return _.indexOf(obj, item, fromIndex) >= 0;
      };
    
      // Invoke a method (with arguments) on every item in a collection.
      _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
          var func = isFunc ? method : value[method];
          return func == null ? func : func.apply(value, args);
        });
      };
    
      // Convenience version of a common use case of `map`: fetching a property.
      _.pluck = function(obj, key) {
        return _.map(obj, _.property(key));
      };
    
      // Convenience version of a common use case of `filter`: selecting only objects
      // containing specific `key:value` pairs.
      _.where = function(obj, attrs) {
        return _.filter(obj, _.matcher(attrs));
      };
    
      // Convenience version of a common use case of `find`: getting the first object
      // containing specific `key:value` pairs.
      _.findWhere = function(obj, attrs) {
        return _.find(obj, _.matcher(attrs));
      };
    
      // Return the maximum element (or element-based computation).
      _.max = function(obj, iteratee, context) {
        var result = -Infinity, lastComputed = -Infinity,
            value, computed;
        if (iteratee == null && obj != null) {
          obj = isArrayLike(obj) ? obj : _.values(obj);
          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            if (value > result) {
              result = value;
            }
          }
        } else {
          iteratee = cb(iteratee, context);
          _.each(obj, function(value, index, list) {
            computed = iteratee(value, index, list);
            if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
              result = value;
              lastComputed = computed;
            }
          });
        }
        return result;
      };
    
      // Return the minimum element (or element-based computation).
      _.min = function(obj, iteratee, context) {
        var result = Infinity, lastComputed = Infinity,
            value, computed;
        if (iteratee == null && obj != null) {
          obj = isArrayLike(obj) ? obj : _.values(obj);
          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            if (value < result) {
              result = value;
            }
          }
        } else {
          iteratee = cb(iteratee, context);
          _.each(obj, function(value, index, list) {
            computed = iteratee(value, index, list);
            if (computed < lastComputed || computed === Infinity && result === Infinity) {
              result = value;
              lastComputed = computed;
            }
          });
        }
        return result;
      };
    
      // Shuffle a collection, using the modern version of the
      // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
      _.shuffle = function(obj) {
        var set = isArrayLike(obj) ? obj : _.values(obj);
        var length = set.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
          rand = _.random(0, index);
          if (rand !== index) shuffled[index] = shuffled[rand];
          shuffled[rand] = set[index];
        }
        return shuffled;
      };
    
      // Sample **n** random values from a collection.
      // If **n** is not specified, returns a single random element.
      // The internal `guard` argument allows it to work with `map`.
      _.sample = function(obj, n, guard) {
        if (n == null || guard) {
          if (!isArrayLike(obj)) obj = _.values(obj);
          return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
      };
    
      // Sort the object's values by a criterion produced by an iteratee.
      _.sortBy = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        return _.pluck(_.map(obj, function(value, index, list) {
          return {
            value: value,
            index: index,
            criteria: iteratee(value, index, list)
          };
        }).sort(function(left, right) {
          var a = left.criteria;
          var b = right.criteria;
          if (a !== b) {
            if (a > b || a === void 0) return 1;
            if (a < b || b === void 0) return -1;
          }
          return left.index - right.index;
        }), 'value');
      };
    
      // An internal function used for aggregate "group by" operations.
      var group = function(behavior) {
        return function(obj, iteratee, context) {
          var result = {};
          iteratee = cb(iteratee, context);
          _.each(obj, function(value, index) {
            var key = iteratee(value, index, obj);
            behavior(result, value, key);
          });
          return result;
        };
      };
    
      // Groups the object's values by a criterion. Pass either a string attribute
      // to group by, or a function that returns the criterion.
      _.groupBy = group(function(result, value, key) {
        if (_.has(result, key)) result[key].push(value); else result[key] = [value];
      });
    
      // Indexes the object's values by a criterion, similar to `groupBy`, but for
      // when you know that your index values will be unique.
      _.indexBy = group(function(result, value, key) {
        result[key] = value;
      });
    
      // Counts instances of an object that group by a certain criterion. Pass
      // either a string attribute to count by, or a function that returns the
      // criterion.
      _.countBy = group(function(result, value, key) {
        if (_.has(result, key)) result[key]++; else result[key] = 1;
      });
    
      // Safely create a real, live array from anything iterable.
      _.toArray = function(obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (isArrayLike(obj)) return _.map(obj, _.identity);
        return _.values(obj);
      };
    
      // Return the number of elements in an object.
      _.size = function(obj) {
        if (obj == null) return 0;
        return isArrayLike(obj) ? obj.length : _.keys(obj).length;
      };
    
      // Split a collection into two arrays: one whose elements all satisfy the given
      // predicate, and one whose elements all do not satisfy the predicate.
      _.partition = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var pass = [], fail = [];
        _.each(obj, function(value, key, obj) {
          (predicate(value, key, obj) ? pass : fail).push(value);
        });
        return [pass, fail];
      };
    
      // Array Functions
      // ---------------
    
      // Get the first element of an array. Passing **n** will return the first N
      // values in the array. Aliased as `head` and `take`. The **guard** check
      // allows it to work with `_.map`.
      _.first = _.head = _.take = function(array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[0];
        return _.initial(array, array.length - n);
      };
    
      // Returns everything but the last entry of the array. Especially useful on
      // the arguments object. Passing **n** will return all the values in
      // the array, excluding the last N.
      _.initial = function(array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
      };
    
      // Get the last element of an array. Passing **n** will return the last N
      // values in the array.
      _.last = function(array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[array.length - 1];
        return _.rest(array, Math.max(0, array.length - n));
      };
    
      // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
      // Especially useful on the arguments object. Passing an **n** will return
      // the rest N values in the array.
      _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
      };
    
      // Trim out all falsy values from an array.
      _.compact = function(array) {
        return _.filter(array, _.identity);
      };
    
      // Internal implementation of a recursive `flatten` function.
      var flatten = function(input, shallow, strict, startIndex) {
        var output = [], idx = 0;
        for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
          var value = input[i];
          if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
            //flatten current level of array or arguments object
            if (!shallow) value = flatten(value, shallow, strict);
            var j = 0, len = value.length;
            output.length += len;
            while (j < len) {
              output[idx++] = value[j++];
            }
          } else if (!strict) {
            output[idx++] = value;
          }
        }
        return output;
      };
    
      // Flatten out an array, either recursively (by default), or just one level.
      _.flatten = function(array, shallow) {
        return flatten(array, shallow, false);
      };
    
      // Return a version of the array that does not contain the specified value(s).
      _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
      };
    
      // Produce a duplicate-free version of the array. If the array has already
      // been sorted, you have the option of using a faster algorithm.
      // Aliased as `unique`.
      _.uniq = _.unique = function(array, isSorted, iteratee, context) {
        if (!_.isBoolean(isSorted)) {
          context = iteratee;
          iteratee = isSorted;
          isSorted = false;
        }
        if (iteratee != null) iteratee = cb(iteratee, context);
        var result = [];
        var seen = [];
        for (var i = 0, length = getLength(array); i < length; i++) {
          var value = array[i],
              computed = iteratee ? iteratee(value, i, array) : value;
          if (isSorted) {
            if (!i || seen !== computed) result.push(value);
            seen = computed;
          } else if (iteratee) {
            if (!_.contains(seen, computed)) {
              seen.push(computed);
              result.push(value);
            }
          } else if (!_.contains(result, value)) {
            result.push(value);
          }
        }
        return result;
      };
    
      // Produce an array that contains the union: each distinct element from all of
      // the passed-in arrays.
      _.union = function() {
        return _.uniq(flatten(arguments, true, true));
      };
    
      // Produce an array that contains every item shared between all the
      // passed-in arrays.
      _.intersection = function(array) {
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = getLength(array); i < length; i++) {
          var item = array[i];
          if (_.contains(result, item)) continue;
          for (var j = 1; j < argsLength; j++) {
            if (!_.contains(arguments[j], item)) break;
          }
          if (j === argsLength) result.push(item);
        }
        return result;
      };
    
      // Take the difference between one array and a number of other arrays.
      // Only the elements present in just the first array will remain.
      _.difference = function(array) {
        var rest = flatten(arguments, true, true, 1);
        return _.filter(array, function(value){
          return !_.contains(rest, value);
        });
      };
    
      // Zip together multiple lists into a single array -- elements that share
      // an index go together.
      _.zip = function() {
        return _.unzip(arguments);
      };
    
      // Complement of _.zip. Unzip accepts an array of arrays and groups
      // each array's elements on shared indices
      _.unzip = function(array) {
        var length = array && _.max(array, getLength).length || 0;
        var result = Array(length);
    
        for (var index = 0; index < length; index++) {
          result[index] = _.pluck(array, index);
        }
        return result;
      };
    
      // Converts lists into objects. Pass either a single array of `[key, value]`
      // pairs, or two parallel arrays of the same length -- one of keys, and one of
      // the corresponding values.
      _.object = function(list, values) {
        var result = {};
        for (var i = 0, length = getLength(list); i < length; i++) {
          if (values) {
            result[list[i]] = values[i];
          } else {
            result[list[i][0]] = list[i][1];
          }
        }
        return result;
      };
    
      // Generator function to create the findIndex and findLastIndex functions
      function createPredicateIndexFinder(dir) {
        return function(array, predicate, context) {
          predicate = cb(predicate, context);
          var length = getLength(array);
          var index = dir > 0 ? 0 : length - 1;
          for (; index >= 0 && index < length; index += dir) {
            if (predicate(array[index], index, array)) return index;
          }
          return -1;
        };
      }
    
      // Returns the first index on an array-like that passes a predicate test
      _.findIndex = createPredicateIndexFinder(1);
      _.findLastIndex = createPredicateIndexFinder(-1);
    
      // Use a comparator function to figure out the smallest index at which
      // an object should be inserted so as to maintain order. Uses binary search.
      _.sortedIndex = function(array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0, high = getLength(array);
        while (low < high) {
          var mid = Math.floor((low + high) / 2);
          if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
        }
        return low;
      };
    
      // Generator function to create the indexOf and lastIndexOf functions
      function createIndexFinder(dir, predicateFind, sortedIndex) {
        return function(array, item, idx) {
          var i = 0, length = getLength(array);
          if (typeof idx == 'number') {
            if (dir > 0) {
                i = idx >= 0 ? idx : Math.max(idx + length, i);
            } else {
                length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
            }
          } else if (sortedIndex && idx && length) {
            idx = sortedIndex(array, item);
            return array[idx] === item ? idx : -1;
          }
          if (item !== item) {
            idx = predicateFind(slice.call(array, i, length), _.isNaN);
            return idx >= 0 ? idx + i : -1;
          }
          for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
            if (array[idx] === item) return idx;
          }
          return -1;
        };
      }
    
      // Return the position of the first occurrence of an item in an array,
      // or -1 if the item is not included in the array.
      // If the array is large and already in sort order, pass `true`
      // for **isSorted** to use binary search.
      _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
      _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
    
      // Generate an integer Array containing an arithmetic progression. A port of
      // the native Python `range()` function. See
      // [the Python documentation](http://docs.python.org/library/functions.html#range).
      _.range = function(start, stop, step) {
        if (stop == null) {
          stop = start || 0;
          start = 0;
        }
        step = step || 1;
    
        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);
    
        for (var idx = 0; idx < length; idx++, start += step) {
          range[idx] = start;
        }
    
        return range;
      };
    
      // Function (ahem) Functions
      // ------------------
    
      // Determines whether to execute a function as a constructor
      // or a normal function with the provided arguments
      var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result)) return result;
        return self;
      };
    
      // Create a function bound to a given object (assigning `this`, and arguments,
      // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
      // available.
      _.bind = function(func, context) {
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
        var args = slice.call(arguments, 2);
        var bound = function() {
          return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
        };
        return bound;
      };
    
      // Partially apply a function by creating a version that has had some of its
      // arguments pre-filled, without changing its dynamic `this` context. _ acts
      // as a placeholder, allowing any combination of arguments to be pre-filled.
      _.partial = function(func) {
        var boundArgs = slice.call(arguments, 1);
        var bound = function() {
          var position = 0, length = boundArgs.length;
          var args = Array(length);
          for (var i = 0; i < length; i++) {
            args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
          }
          while (position < arguments.length) args.push(arguments[position++]);
          return executeBound(func, bound, this, this, args);
        };
        return bound;
      };
    
      // Bind a number of an object's methods to that object. Remaining arguments
      // are the method names to be bound. Useful for ensuring that all callbacks
      // defined on an object belong to it.
      _.bindAll = function(obj) {
        var i, length = arguments.length, key;
        if (length <= 1) throw new Error('bindAll must be passed function names');
        for (i = 1; i < length; i++) {
          key = arguments[i];
          obj[key] = _.bind(obj[key], obj);
        }
        return obj;
      };
    
      // Memoize an expensive function by storing its results.
      _.memoize = function(func, hasher) {
        var memoize = function(key) {
          var cache = memoize.cache;
          var address = '' + (hasher ? hasher.apply(this, arguments) : key);
          if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
          return cache[address];
        };
        memoize.cache = {};
        return memoize;
      };
    
      // Delays a function for the given number of milliseconds, and then calls
      // it with the arguments supplied.
      _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function(){
          return func.apply(null, args);
        }, wait);
      };
    
      // Defers a function, scheduling it to run after the current call stack has
      // cleared.
      _.defer = _.partial(_.delay, _, 1);
    
      // Returns a function, that, when invoked, will only be triggered at most once
      // during a given window of time. Normally, the throttled function will run
      // as much as it can, without ever going more than once per `wait` duration;
      // but if you'd like to disable the execution on the leading edge, pass
      // `{leading: false}`. To disable execution on the trailing edge, ditto.
      _.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
          previous = options.leading === false ? 0 : _.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        };
        return function() {
          var now = _.now();
          if (!previous && options.leading === false) previous = now;
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }
          return result;
        };
      };
    
      // Returns a function, that, as long as it continues to be invoked, will not
      // be triggered. The function will be called after it stops being called for
      // N milliseconds. If `immediate` is passed, trigger the function on the
      // leading edge, instead of the trailing.
      _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
    
        var later = function() {
          var last = _.now() - timestamp;
    
          if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
              if (!timeout) context = args = null;
            }
          }
        };
    
        return function() {
          context = this;
          args = arguments;
          timestamp = _.now();
          var callNow = immediate && !timeout;
          if (!timeout) timeout = setTimeout(later, wait);
          if (callNow) {
            result = func.apply(context, args);
            context = args = null;
          }
    
          return result;
        };
      };
    
      // Returns the first function passed as an argument to the second,
      // allowing you to adjust arguments, run code before and after, and
      // conditionally execute the original function.
      _.wrap = function(func, wrapper) {
        return _.partial(wrapper, func);
      };
    
      // Returns a negated version of the passed-in predicate.
      _.negate = function(predicate) {
        return function() {
          return !predicate.apply(this, arguments);
        };
      };
    
      // Returns a function that is the composition of a list of functions, each
      // consuming the return value of the function that follows.
      _.compose = function() {
        var args = arguments;
        var start = args.length - 1;
        return function() {
          var i = start;
          var result = args[start].apply(this, arguments);
          while (i--) result = args[i].call(this, result);
          return result;
        };
      };
    
      // Returns a function that will only be executed on and after the Nth call.
      _.after = function(times, func) {
        return function() {
          if (--times < 1) {
            return func.apply(this, arguments);
          }
        };
      };
    
      // Returns a function that will only be executed up to (but not including) the Nth call.
      _.before = function(times, func) {
        var memo;
        return function() {
          if (--times > 0) {
            memo = func.apply(this, arguments);
          }
          if (times <= 1) func = null;
          return memo;
        };
      };
    
      // Returns a function that will be executed at most one time, no matter how
      // often you call it. Useful for lazy initialization.
      _.once = _.partial(_.before, 2);
    
      // Object Functions
      // ----------------
    
      // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
      var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
      var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                          'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
    
      function collectNonEnumProps(obj, keys) {
        var nonEnumIdx = nonEnumerableProps.length;
        var constructor = obj.constructor;
        var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
    
        // Constructor is a special case.
        var prop = 'constructor';
        if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
    
        while (nonEnumIdx--) {
          prop = nonEnumerableProps[nonEnumIdx];
          if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
            keys.push(prop);
          }
        }
      }
    
      // Retrieve the names of an object's own properties.
      // Delegates to **ECMAScript 5**'s native `Object.keys`
      _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        // Ahem, IE < 9.
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
      };
    
      // Retrieve all the property names of an object.
      _.allKeys = function(obj) {
        if (!_.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        // Ahem, IE < 9.
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
      };
    
      // Retrieve the values of an object's properties.
      _.values = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
          values[i] = obj[keys[i]];
        }
        return values;
      };
    
      // Returns the results of applying the iteratee to each element of the object
      // In contrast to _.map it returns an object
      _.mapObject = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys =  _.keys(obj),
              length = keys.length,
              results = {},
              currentKey;
          for (var index = 0; index < length; index++) {
            currentKey = keys[index];
            results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
          }
          return results;
      };
    
      // Convert an object into a list of `[key, value]` pairs.
      _.pairs = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) {
          pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
      };
    
      // Invert the keys and values of an object. The values must be serializable.
      _.invert = function(obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
          result[obj[keys[i]]] = keys[i];
        }
        return result;
      };
    
      // Return a sorted list of the function names available on the object.
      // Aliased as `methods`
      _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
          if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
      };
    
      // Extend a given object with all the properties in passed-in object(s).
      _.extend = createAssigner(_.allKeys);
    
      // Assigns a given object with all the own properties in the passed-in object(s)
      // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
      _.extendOwn = _.assign = createAssigner(_.keys);
    
      // Returns the first key on an object that passes a predicate test
      _.findKey = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = _.keys(obj), key;
        for (var i = 0, length = keys.length; i < length; i++) {
          key = keys[i];
          if (predicate(obj[key], key, obj)) return key;
        }
      };
    
      // Return a copy of the object only containing the whitelisted properties.
      _.pick = function(object, oiteratee, context) {
        var result = {}, obj = object, iteratee, keys;
        if (obj == null) return result;
        if (_.isFunction(oiteratee)) {
          keys = _.allKeys(obj);
          iteratee = optimizeCb(oiteratee, context);
        } else {
          keys = flatten(arguments, false, false, 1);
          iteratee = function(value, key, obj) { return key in obj; };
          obj = Object(obj);
        }
        for (var i = 0, length = keys.length; i < length; i++) {
          var key = keys[i];
          var value = obj[key];
          if (iteratee(value, key, obj)) result[key] = value;
        }
        return result;
      };
    
       // Return a copy of the object without the blacklisted properties.
      _.omit = function(obj, iteratee, context) {
        if (_.isFunction(iteratee)) {
          iteratee = _.negate(iteratee);
        } else {
          var keys = _.map(flatten(arguments, false, false, 1), String);
          iteratee = function(value, key) {
            return !_.contains(keys, key);
          };
        }
        return _.pick(obj, iteratee, context);
      };
    
      // Fill in a given object with default properties.
      _.defaults = createAssigner(_.allKeys, true);
    
      // Creates an object that inherits from the given prototype object.
      // If additional properties are provided then they will be added to the
      // created object.
      _.create = function(prototype, props) {
        var result = baseCreate(prototype);
        if (props) _.extendOwn(result, props);
        return result;
      };
    
      // Create a (shallow-cloned) duplicate of an object.
      _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
      };
    
      // Invokes interceptor with the obj, and then returns obj.
      // The primary purpose of this method is to "tap into" a method chain, in
      // order to perform operations on intermediate results within the chain.
      _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
      };
    
      // Returns whether an object has a given set of `key:value` pairs.
      _.isMatch = function(object, attrs) {
        var keys = _.keys(attrs), length = keys.length;
        if (object == null) return !length;
        var obj = Object(object);
        for (var i = 0; i < length; i++) {
          var key = keys[i];
          if (attrs[key] !== obj[key] || !(key in obj)) return false;
        }
        return true;
      };
    
    
      // Internal recursive comparison function for `isEqual`.
      var eq = function(a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
          // Strings, numbers, regular expressions, dates, and booleans are compared by value.
          case '[object RegExp]':
          // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
          case '[object String]':
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return '' + a === '' + b;
          case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN
            if (+a !== +a) return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
          case '[object Date]':
          case '[object Boolean]':
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        }
    
        var areArrays = className === '[object Array]';
        if (!areArrays) {
          if (typeof a != 'object' || typeof b != 'object') return false;
    
          // Objects with different constructors are not equivalent, but `Object`s or `Array`s
          // from different frames are.
          var aCtor = a.constructor, bCtor = b.constructor;
          if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                                   _.isFunction(bCtor) && bCtor instanceof bCtor)
                              && ('constructor' in a && 'constructor' in b)) {
            return false;
          }
        }
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    
        // Initializing stack of traversed objects.
        // It's done here since we only need them for objects and arrays comparison.
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
          // Linear search. Performance is inversely proportional to the number of
          // unique nested structures.
          if (aStack[length] === a) return bStack[length] === b;
        }
    
        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);
    
        // Recursively compare objects and arrays.
        if (areArrays) {
          // Compare array lengths to determine if a deep comparison is necessary.
          length = a.length;
          if (length !== b.length) return false;
          // Deep compare the contents, ignoring non-numeric properties.
          while (length--) {
            if (!eq(a[length], b[length], aStack, bStack)) return false;
          }
        } else {
          // Deep compare objects.
          var keys = _.keys(a), key;
          length = keys.length;
          // Ensure that both objects contain the same number of properties before comparing deep equality.
          if (_.keys(b).length !== length) return false;
          while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
          }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return true;
      };
    
      // Perform a deep comparison to check if two objects are equal.
      _.isEqual = function(a, b) {
        return eq(a, b);
      };
    
      // Is a given array, string, or object empty?
      // An "empty" object has no enumerable own-properties.
      _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
        return _.keys(obj).length === 0;
      };
    
      // Is a given value a DOM element?
      _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
      };
    
      // Is a given value an array?
      // Delegates to ECMA5's native Array.isArray
      _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) === '[object Array]';
      };
    
      // Is a given variable an object?
      _.isObject = function(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
      };
    
      // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
      _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
        _['is' + name] = function(obj) {
          return toString.call(obj) === '[object ' + name + ']';
        };
      });
    
      // Define a fallback version of the method in browsers (ahem, IE < 9), where
      // there isn't any inspectable "Arguments" type.
      if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
          return _.has(obj, 'callee');
        };
      }
    
      // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
      // IE 11 (#1621), and in Safari 8 (#1929).
      if (typeof /./ != 'function' && typeof Int8Array != 'object') {
        _.isFunction = function(obj) {
          return typeof obj == 'function' || false;
        };
      }
    
      // Is a given object a finite number?
      _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
      };
    
      // Is the given value `NaN`? (NaN is the only number which does not equal itself).
      _.isNaN = function(obj) {
        return _.isNumber(obj) && obj !== +obj;
      };
    
      // Is a given value a boolean?
      _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
      };
    
      // Is a given value equal to null?
      _.isNull = function(obj) {
        return obj === null;
      };
    
      // Is a given variable undefined?
      _.isUndefined = function(obj) {
        return obj === void 0;
      };
    
      // Shortcut function for checking if an object has a given property directly
      // on itself (in other words, not on a prototype).
      _.has = function(obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
      };
    
      // Utility Functions
      // -----------------
    
      // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
      // previous owner. Returns a reference to the Underscore object.
      _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
      };
    
      // Keep the identity function around for default iteratees.
      _.identity = function(value) {
        return value;
      };
    
      // Predicate-generating functions. Often useful outside of Underscore.
      _.constant = function(value) {
        return function() {
          return value;
        };
      };
    
      _.noop = function(){};
    
      _.property = property;
    
      // Generates a function for a given object that returns a given property.
      _.propertyOf = function(obj) {
        return obj == null ? function(){} : function(key) {
          return obj[key];
        };
      };
    
      // Returns a predicate for checking whether an object has a given set of
      // `key:value` pairs.
      _.matcher = _.matches = function(attrs) {
        attrs = _.extendOwn({}, attrs);
        return function(obj) {
          return _.isMatch(obj, attrs);
        };
      };
    
      // Run a function **n** times.
      _.times = function(n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, context, 1);
        for (var i = 0; i < n; i++) accum[i] = iteratee(i);
        return accum;
      };
    
      // Return a random integer between min and max (inclusive).
      _.random = function(min, max) {
        if (max == null) {
          max = min;
          min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
      };
    
      // A (possibly faster) way to get the current timestamp as an integer.
      _.now = Date.now || function() {
        return new Date().getTime();
      };
    
       // List of HTML entities for escaping.
      var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
      };
      var unescapeMap = _.invert(escapeMap);
    
      // Functions for escaping and unescaping strings to/from HTML interpolation.
      var createEscaper = function(map) {
        var escaper = function(match) {
          return map[match];
        };
        // Regexes for identifying a key that needs to be escaped
        var source = '(?:' + _.keys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function(string) {
          string = string == null ? '' : '' + string;
          return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
      };
      _.escape = createEscaper(escapeMap);
      _.unescape = createEscaper(unescapeMap);
    
      // If the value of the named `property` is a function then invoke it with the
      // `object` as context; otherwise, return it.
      _.result = function(object, property, fallback) {
        var value = object == null ? void 0 : object[property];
        if (value === void 0) {
          value = fallback;
        }
        return _.isFunction(value) ? value.call(object) : value;
      };
    
      // Generate a unique integer id (unique within the entire client session).
      // Useful for temporary DOM ids.
      var idCounter = 0;
      _.uniqueId = function(prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
      };
    
      // By default, Underscore uses ERB-style template delimiters, change the
      // following template settings to use alternative delimiters.
      _.templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape      : /<%-([\s\S]+?)%>/g
      };
    
      // When customizing `templateSettings`, if you don't want to define an
      // interpolation, evaluation or escaping regex, we need one that is
      // guaranteed not to match.
      var noMatch = /(.)^/;
    
      // Certain characters need to be escaped so that they can be put into a
      // string literal.
      var escapes = {
        "'":      "'",
        '\\':     '\\',
        '\r':     'r',
        '\n':     'n',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };
    
      var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
    
      var escapeChar = function(match) {
        return '\\' + escapes[match];
      };
    
      // JavaScript micro-templating, similar to John Resig's implementation.
      // Underscore templating handles arbitrary delimiters, preserves whitespace,
      // and correctly escapes quotes within interpolated code.
      // NB: `oldSettings` only exists for backwards compatibility.
      _.template = function(text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);
    
        // Combine delimiters into one regular expression via alternation.
        var matcher = RegExp([
          (settings.escape || noMatch).source,
          (settings.interpolate || noMatch).source,
          (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');
    
        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
          source += text.slice(index, offset).replace(escaper, escapeChar);
          index = offset + match.length;
    
          if (escape) {
            source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
          } else if (interpolate) {
            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
          } else if (evaluate) {
            source += "';\n" + evaluate + "\n__p+='";
          }
    
          // Adobe VMs need the match returned to produce the correct offest.
          return match;
        });
        source += "';\n";
    
        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
    
        source = "var __t,__p='',__j=Array.prototype.join," +
          "print=function(){__p+=__j.call(arguments,'');};\n" +
          source + 'return __p;\n';
    
        try {
          var render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
          e.source = source;
          throw e;
        }
    
        var template = function(data) {
          return render.call(this, data, _);
        };
    
        // Provide the compiled source as a convenience for precompilation.
        var argument = settings.variable || 'obj';
        template.source = 'function(' + argument + '){\n' + source + '}';
    
        return template;
      };
    
      // Add a "chain" function. Start chaining a wrapped Underscore object.
      _.chain = function(obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance;
      };
    
      // OOP
      // ---------------
      // If Underscore is called as a function, it returns a wrapped object that
      // can be used OO-style. This wrapper holds altered versions of all the
      // underscore functions. Wrapped objects may be chained.
    
      // Helper function to continue chaining intermediate results.
      var result = function(instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
      };
    
      // Add your own custom functions to the Underscore object.
      _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
          var func = _[name] = obj[name];
          _.prototype[name] = function() {
            var args = [this._wrapped];
            push.apply(args, arguments);
            return result(this, func.apply(_, args));
          };
        });
      };
    
      // Add all of the Underscore functions to the wrapper object.
      _.mixin(_);
    
      // Add all mutator Array functions to the wrapper.
      _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
          var obj = this._wrapped;
          method.apply(obj, arguments);
          if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
          return result(this, obj);
        };
      });
    
      // Add all accessor Array functions to the wrapper.
      _.each(['concat', 'join', 'slice'], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
          return result(this, method.apply(this._wrapped, arguments));
        };
      });
    
      // Extracts the result from a wrapped and chained object.
      _.prototype.value = function() {
        return this._wrapped;
      };
    
      _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    
      _.prototype.toString = function() {
        return '' + this._wrapped;
      };
    
    
      if (typeof define === 'function' && define.amd) {
        define('underscore', [], function() {
          return _;
        });
      }
    }.call(this));
    
    },{}]},{},[1,2,3])