// navigation

(function ($) {
	"use strict"

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});

	// JavaScript to toggle the navigation menu in mobile view
	document.querySelector('.menu-toggle a').addEventListener('click', function () {
		const nav = document.querySelector('.main-nav');
		nav.classList.toggle('active'); // Toggle the 'active' class
	});

	// //////////////////////////////////////////////
	
	// Event listeners for language switcher buttons
	document.getElementById("english").addEventListener("click", function () {
		switchLanguage('en');
	});

	document.getElementById("arabic").addEventListener("click", function () {
		switchLanguage('ar');
	});

	const englishText = {
		about: "Welcome to Magic Store, your premier destination for exceptional digital shopping. We strive to offer the best digital products with an easy and secure shopping experience. We believe that quality is the foundation, so we strive to provide innovative options that meet your needs and exceed your expectations. At Magic Store, your satisfaction is our priority.",
		aboutUs: "About us",
		startShop: "Start shopping",
		pp: "Privacy Policy",
		creative: "We are creative",
		account: "My Account",
		money: "USD",
		register: "Register",
		Email1: "Email",
		phone: "Phone",
		pass: "Password",
		Confirm: "Confirm",
		registerSubmitButton: "Register",
		already: "Already have an account?",
		login1: "log in",
		login2: "log in",
		login3: "log in",
		Remember: "Remember me!",
		forgot: "Forgot Password?",
		dont: "Don't have an account?",
		returns: "Orders and Returns",
		conditions: "Terms & Conditions",
		menu: "Menu",
		Home: "Home",
		Offers: "Offers",
		BestSelling: "Best Selling",
		Categories: "Categories",
		AboutUs: "About Us",
		ContactUs: "Contact Us",
		Subscribe: "Subscribe",
		EnterEmail: "Enter Your Email",
		register_: "Create Account ",
		customers:"Customers' opinions",
	};

	const arabicText = {
		about: "مرحبًا بكم في ماجيك ستور، وجهتكم الأولى للتسوق الرقمي المميز. نسعى لتقديم أفضل المنتجات الرقمية، بتجربة تسوق سهلة وآمنة. نؤمن بأن الجودة هي الأساس، لذا نحرص على توفير خيارات مبتكرة تلبي احتياجاتكم وتفوق توقعاتكم. في ماجيك ستور، رضاكم هو أولويتنا.",
		aboutUs: "حولنا",
		startShop: "ابدأ التسوق",
		pp: "سياسة الخصوصية",
		creative: "نحن مبدعون",
		account: "حسابي",
		money: "ريال سعودي",
		register: "حساب جديد",
		Email1: "الإيميل",
		phone: "رقم الهاتف",
		pass: "كلمة المرور",
		Confirm: "تأكيد كلمة المرور",
		registerSubmitButton: "إنشاء حساب",
		already: "لديك حساب بالفعل؟",
		login1: "سجل الدخول",
		login2: "سجل الدخول",
		login3: "سجل الدخول",
		Remember: "تذكّرني",
		forgot: "هل نسيت كلمة المرور؟",
		dont: "ليس لديك حساب؟",
		returns: "الاسترجاع والاستبدال",
		conditions: "الشروط والأحكام",
		menu: "القائمة",
		Home: "الرئيسية",
		Offers: "العروض",
		BestSelling: "الأكثر مبيعاً",
		Categories: "الأصناف",
		AboutUs: "حولنا",
		ContactUs: "تواصل معنا",
		Subscribe: "سجل",
		EnterEmail: "أدخل إيميلك",
		register_: "حساب جديد",
		customers:"آراء الزبائن",
	};

	// Function to switch language
	function switchLanguage(lang) {
		const text = lang === 'en' ? englishText : arabicText;
		document.body.lang = lang;

		const elementsToUpdate = [
			"about", "aboutUs", "startShop", "pp", "creative",
			"account", "money", "register", "register_", "Email1", "Email2", "phone",
			"pass", "Confirm", "registerSubmitButton", "already", "menu",
			"login1", "login2", "login3", "Remember", "forgot", "dont", "returns",
			"conditions", "Home", "Offers", "BestSelling",
			"Categories", "AboutUs", "ContactUs", "Subscribe", "EnterEmail",
			"customers",
		];

		elementsToUpdate.forEach(id => {
			const element = document.getElementById(id);
			if (element) {
				element.innerText = text[id];
			} else {
				console.warn(`Element with ID "${id}" not found.`);
			}
		});

		// Update money icon
		document.getElementById("money-icon").className = lang === 'en' ? "fa fa-dollar" : "fa fa-riyal";
	}
	// ////////////////////////////////////////////////////////

	// START SHOPPING

	let lastScrollTop = 0;
	const button = document.getElementById('signInBtn');

	window.addEventListener('scroll', function () {
		const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

		if (currentScroll > lastScrollTop) {
			// Scrolling down
			button.style.opacity = '0'; // Hide the button
		} else {
			// Scrolling up
			button.style.opacity = '1'; // Show the button
		}
		lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
	});

	// ////////////////////////////////
   
	// MENU TOGGLE

	document.addEventListener('DOMContentLoaded', function () {
		const responsiveNav = document.getElementById('responsive-nav');
		const navbarNav = document.getElementById('navbarNav');
		const menuIcon = document.getElementById('menu-icon');
	
		// Function to close the responsive nav
		function closeNav() {
			responsiveNav.classList.remove('active');
		}
	
		// Function to open the responsive nav
		function openNav() {
			responsiveNav.classList.add('active');
		}
	
		// Event listener for clicks outside the nav
		document.addEventListener('click', function (event) {
			if (!responsiveNav.contains(event.target) && !event.target.closest('#menu-icon')) {
				closeNav();
			}
		});
	
		// Close nav when a link is clicked
		const navLinks = navbarNav.querySelectorAll('.nav-link');
		navLinks.forEach(link => {
			link.addEventListener('click', closeNav);
		});
	
		// Open the nav when the menu icon is clicked
		menuIcon.addEventListener('click', function (event) {
			event.preventDefault(); // Prevent default anchor behavior
			event.stopPropagation(); // Prevent the click from closing the nav immediately
			if (responsiveNav.classList.contains('active')) {
				closeNav(); // If it's already open, close it
			} else {
				openNav(); // If it's closed, open it
			}
		});
	});
	







	// ///////////////////////////////////////


	//SIGN IN
	document.getElementById('signInBtn').onclick = function () {
		toggleForms();
	};


	function toggleForms() {
		const floatingForm = document.getElementById('floating-form');
		floatingForm.style.display = (floatingForm.style.display === 'none' || floatingForm.style.display === '') ? 'block' : 'none';
		showLoginForm(); // Show login form by default when toggled
	}

	function showRegisterForm() {
		document.getElementById('login-box').style.display = 'none';
		document.getElementById('register-box').style.display = 'block';
	}

	function showLoginForm() {
		document.getElementById('register-box').style.display = 'none';
		document.getElementById('login-box').style.display = 'block';
	}


	//  Registered or new?

	const registerButton = document.getElementById('register-button');
	const loginForm = document.getElementById('login-box');
	const registerForm = document.getElementById('register-box');

	registerButton.addEventListener('click', function () {
		loginForm.style.display = 'none';
		registerForm.style.display = 'flex';
	});

	const loginButton = document.getElementById('login-button');

	loginButton.addEventListener('click', function () {
		loginForm.style.display = 'flex';
		registerForm.style.display = 'none';
	})

	// ----------------------------------------------
	// Confirm password
	const passwordInput = document.getElementById("password");
	const confirmPasswordInput = document.getElementById("confirmPassword");
	const registerSubmitButton = document.getElementById("registerSubmitButton");

	// Add event listener to the register button
	registerSubmitButton.addEventListener("click", function () {
		// Get the values entered in the password and confirm password fields
		const passwordValue = passwordInput.value;
		const confirmPasswordValue = confirmPasswordInput.value;

		// Check if the password and confirm password match
		if (passwordValue === confirmPasswordValue) {
			// Passwords match, proceed with the registration
			console.log("Registration successful!");
			// Add your registration code here

		} else {
			// Passwords do not match, display an error message
			console.log("Passwords do not match!");
			// Add your error message display code here
		}
	});


	// -----------------------------------------------

	// Password visibility


	var allpasswordInputs = document.querySelectorAll(".passwordInput");
	var alleyeIcons = document.querySelectorAll("#eye");

	alleyeIcons.forEach(
		function togglePasswordVisibility(eyeIcon) {
			eyeIcon.onclick = function () {

				allpasswordInputs.forEach(
					function showOrHide(passwordInput) {
						if (passwordInput.type === "password") {
							passwordInput.type = "text";
							eyeIcon.classList.remove("fa-eye");
							eyeIcon.classList.add("fa-eye-slash");
						} else {
							passwordInput.type = "password";
							eyeIcon.classList.remove("fa-eye-slash");
							eyeIcon.classList.add("fa-eye");
						}
					})
			}
		})

	document.getElementById('close-btn').onclick = function () {
		closeForm();
	};

	function closeForm() {
		document.getElementById('floating-form').style.display = 'none';
	}

	// Event listener for clicks outside the form
	document.addEventListener('click', function (event) {
		const floatingForm = document.getElementById('floating-form');

		// Check if the click is outside the floating form
		if (floatingForm.style.display === 'block' && !floatingForm.contains(event.target)) {
			closeForm();
		}
	});

	// ///////////////////////////////////////////

	// Close top Carousel
	
	function closeCarousel() {
		document.querySelector('.carousel-container').style.display = 'none';
	}
	// ///////////////////////////////////////

	// Products Slick
	$('.products-slick').each(function () {
		var $this = $(this),
			$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function () {
		var $this = $(this),
			$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

	/////////////////////////////////////////

	// Product Main img Slick
	$('#product-main-img').slick({
		infinite: true,
		speed: 300,
		dots: false,
		arrows: true,
		fade: true,
		asNavFor: '#product-imgs',
	});

	// Product imgs Slick
	$('#product-imgs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
		asNavFor: '#product-main-img',
		responsive: [{
			breakpoint: 991,
			settings: {
				vertical: false,
				arrows: false,
				dots: true,
			}
		},
		]
	});

	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img');
	if (zoomMainProduct) {
		$('#product-main-img .product-preview').zoom();
	}

	/////////////////////////////////////////

	// Input number
	$('.input-number').each(function () {
		var $this = $(this),
			$input = $this.find('input[type="number"]'),
			up = $this.find('.qty-up'),
			down = $this.find('.qty-down');

		down.on('click', function () {
			var value = parseInt($input.val()) - 1;
			value = value < 1 ? 1 : value;
			$input.val(value);
			$input.change();
			updatePriceSlider($this, value)
		})

		up.on('click', function () {
			var value = parseInt($input.val()) + 1;
			$input.val(value);
			$input.change();
			updatePriceSlider($this, value)
		})
	});

	var priceInputMax = document.getElementById('price-max'),
		priceInputMin = document.getElementById('price-min');

	priceInputMax.addEventListener('change', function () {
		updatePriceSlider($(this).parent(), this.value)
	});

	priceInputMin.addEventListener('change', function () {
		updatePriceSlider($(this).parent(), this.value)
	});

	function updatePriceSlider(elem, value) {
		if (elem.hasClass('price-min')) {
			console.log('min')
			priceSlider.noUiSlider.set([value, null]);
		} else if (elem.hasClass('price-max')) {
			console.log('max')
			priceSlider.noUiSlider.set([null, value]);
		}
	}

	// Price Slider
	var priceSlider = document.getElementById('price-slider');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [1, 999],
			connect: true,
			step: 1,
			range: {
				'min': 1,
				'max': 999
			}
		});

		priceSlider.noUiSlider.on('update', function (values, handle) {
			var value = values[handle];
			handle ? priceInputMax.value = value : priceInputMin.value = value
		});
	}

})(jQuery);
