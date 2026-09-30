import { createRouter } from './router.js';

const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const lime = '#d5ff00';

const courses = [
  { slug: 'learn-figma-from-basic', title: 'Learn Figma from Basic', category: 'Design', image: '/assets/course-figma.jpg', lessons: 17, duration: '2 hours 16 mins', reviews: 59, author: 'PurePearl Studio', price: 25, rating: '4.5', level: 'Beginner' },
  { slug: 'build-digital-assets', title: 'Build Digital Asset', category: 'Design', image: '/assets/course-assets.jpg', lessons: 17, duration: '2 hours 16 mins', reviews: 59, author: 'PurePearl Studio', price: 25, rating: '4.5', level: 'Beginner' },
  { slug: 'power-of-big-data', title: 'the Power of Big Data', category: 'Business', image: '/assets/course-data.jpg', lessons: 17, duration: '2 hours 16 mins', reviews: 59, author: 'PurePearl Studio', price: 25, rating: '4.5', level: 'Beginner' },
  { slug: 'balancing-productivity', title: 'Balancing Productivity and Creativity', category: 'Productivity', image: '/assets/course-productivity.jpg', lessons: 17, duration: '2 hours 16 mins', reviews: 59, author: 'PurePearl Studio', price: 25, rating: '4.5', level: 'Beginner' },
  { slug: 'mastering-money-management', title: 'Mastering Money Management', category: 'Finance', image: '/assets/course-money.jpg', lessons: 17, duration: '2 hours 16 mins', reviews: 59, author: 'PurePearl Studio', price: 25, rating: '4.5', level: 'Beginner' },
  { slug: 'from-idea-to-startup-success', title: 'From Idea to Startup Success', category: 'Business', image: '/assets/course-startup.jpg', lessons: 17, duration: '2 hours 16 mins', reviews: 59, author: 'PurePearl Studio', price: 25, rating: '4.5', level: 'Beginner' },
];
const categories = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking'];
const modules = [
  ['Module 1: Introduction to Digital Assets', 'Lay the groundwork with lessons like “Understanding Digital Elements” and “Navigating Design Software Tools.”'],
  ['Module 2: Design Principles for Impact', 'Master the principles that drive impactful designs with lessons on color theory and typography.'],
  ['Module 3: Advanced Techniques in Digital Creation', 'Learn techniques for refining and polishing your digital work.'],
  ['Module 4: User-Centric Design Strategies', 'Understand user-centered design and create digital assets that work for people.'],
  ['Module 5: Interactive Media and Engagement', 'Explore interactive presentations and engaging multimedia experiences.'],
  ['Module 6: Project Showcase and Critique', 'Present your work and learn through thoughtful peer feedback.'],
];
const icons = {
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 4.2 4.2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 10 6-10 6z" fill="currentColor" stroke="none"/></svg>',
  star: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10 2.2 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2L2.5 7.7l5.2-.8L10 2.2Z" fill="currentColor" stroke="none"/></svg>',
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  video: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></svg>',
  searchSmall: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 4.2 4.2"/></svg>',
};

const brand = (small = false) => `<a class="brand ${small ? 'brand-small' : ''}" href="/" data-link aria-label="ByteSpace home"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 28 28"><path d="M1 0h6.5c5.2 0 9.3 4.1 9.3 9.2v1.3h2.6c5 0 8.6 3.6 8.6 8.7s-3.6 8.8-8.6 8.8H8.2C3.7 28 0 24.4 0 19.8V3C0 1.4.5.4 1 0Z"/><path d="M14.6 11.8c3.8 0 7 2.7 8 6.7l-8 5.2v-11.9Z"/></svg></span><span>ByteSpace</span></a>`;

const header = () => `<header class="site-header grid-blue"><div class="wrap header-inner">${brand()}<nav class="main-nav" aria-label="Main navigation"><a href="/" data-link>Home</a><a href="/search" data-link>Courses</a><a href="/creator/purepearl-studio" data-link>Creators</a></nav><div class="header-actions"><a href="/login" data-link>Sign In</a><a href="/register" data-link>Join Us</a><a class="bag-link" href="/search" data-link aria-label="Browse courses">${icons.bag}</a></div><button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button><nav class="mobile-nav"><a href="/" data-link>Home</a><a href="/search" data-link>Courses</a><a href="/creator/purepearl-studio" data-link>Creators</a><a href="/login" data-link>Sign In</a><a href="/register" data-link>Join Us</a></nav></div></header>`;

const footer = () => `<footer class="site-footer"><div class="wrap footer-top"><div class="footer-brand">${brand()}<p>Stay up to date with our latest features and releases by joining our newsletter.</p><form class="newsletter"><label class="sr-only" for="newsletter-email">Your email</label><input id="newsletter-email" type="email" placeholder="Enter your email" required><button type="submit">Search</button></form><small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small></div><div class="footer-column"><strong>Featured Courses</strong><a href="/search" data-link>Featured Categories</a><a href="/search?category=Business" data-link>Business</a><a href="/search?category=IT%20%26%20Software" data-link>IT</a><a href="/search?category=Design" data-link>Design</a></div><div class="footer-column"><strong>Development</strong><a href="/search?category=Marketing" data-link>Marketing</a><a href="/search?category=Photography" data-link>Photography</a><a href="/search?category=Finance" data-link>Finance</a><a href="/search?category=Sport" data-link>Sport</a></div><div class="footer-column"><strong>Become a Creator</strong><a href="/creator/purepearl-studio" data-link>Affiliate Program</a><a href="#contact">Contact</a><a href="#help">Help</a><a href="/" data-link>About</a></div></div><div class="wrap footer-bottom"><span>© 2023 ByteSpace. All rights reserved.</span><div><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a><a href="#cookies">Cookies Settings</a></div></div></footer>`;

const avatarPhotos = ['photo-1534528741775-53994a69daeb', 'photo-1500648767791-00dcc994a43e', 'photo-1544005313-94ddf0286df2', 'photo-1506794778202-cad84cf45f1d', 'photo-1531123897727-8f129e1688ce'];
const avatars = (extra = '26+') => `<span class="avatar-stack" aria-label="Course students">${avatarPhotos.slice(0, 4).map(id => `<img src="${photo(id, 70)}" alt="" loading="lazy">`).join('')}<b>${extra}</b></span>`;
const courseCard = (course) => `<article class="course-card"><a class="course-image" href="/course/${course.slug}" data-link><img src="${course.image}" alt="${course.title}" loading="lazy"></a><div class="course-card-body"><div class="course-title-row"><a href="/course/${course.slug}" data-link class="course-title">${course.title}</a><span class="rating"><b>${course.rating}</b><span>★</span></span></div><a class="course-author" href="/creator/purepearl-studio" data-link>by purepearl studio</a><div class="course-card-meta"><span class="level"><i aria-hidden="true">▥</i> Beginner</span>${avatars()}<span class="price"><b>$25</b><small>/lifetime</small></span></div></div></article>`;
const courseGrid = (items) => `<div class="course-grid">${items.map(courseCard).join('')}</div>`;
const categoryPills = (list = categories, active = 'Featured') => `<div class="category-pills">${list.map(name => `<button class="category-pill ${name === active ? 'active' : ''}" data-category="${name}">${name}</button>`).join('')}${list === categories ? '<a class="more-link" href="/search" data-link>+ More</a>' : ''}</div>`;
const grid = '<span class="hero-grid-lines" aria-hidden="true"></span>';

function homePage() {
  return `${header()}<main><section class="home-hero grid-blue">${grid}<span class="hero-shape squiggle squiggle-left" aria-hidden="true"></span><span class="hero-shape squiggle-white-left" aria-hidden="true"></span><span class="hero-shape squiggle squiggle-right" aria-hidden="true"></span><span class="hero-shape hero-ring" aria-hidden="true"></span><span class="hero-shape hero-triangle" aria-hidden="true"></span><span class="hero-shape hero-block" aria-hidden="true"></span><div class="hero-copy wrap"><h1>Get Access to Hundreds<br>Courses Available</h1><p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p><form class="home-search" data-search-form><label class="sr-only" for="hero-search">Search courses</label><span>${icons.search}</span><input id="hero-search" name="q" placeholder="Course, topic, creator"><button type="submit">Search</button></form></div><div class="hero-stage"><div class="lime-disc"></div><img class="hero-student" src="/assets/hero-learner.png" alt="Learner studying online" loading="eager"><div class="float-card float-courses"><b>UI/UX Design</b><small>200 Courses&nbsp; • &nbsp;1000+ Students</small></div><div class="float-card float-progress"><small>Learning Progress</small><strong data-count="55" data-suffix="%">55%</strong><i><span data-progress="55"></span></i></div></div><div class="float-card float-happy"><b>Happy Students</b><small>4.5 (240) <em>★</em></small>${avatars('2K+')}</div></section><section class="logo-strip"><div class="wrap logo-list"><span class="logoipsum"><b>◒</b> Logoipsum</span><span class="logoipsum"><b>✺</b> Logoipsum</span><span class="logoipsum"><b>◉</b> Logoipsum</span><span class="logoipsum"><b>✿</b> Logoipsum</span><span class="logoipsum"><b>◉</b> Logoipsum</span></div></section>
    <section class="section discover-section" id="featured"><div class="wrap"><div class="section-center"><h2>Discover Your Passion,<br>Build Your Skills</h2><p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br class="desktop-break"> fields, from technology to the arts, and make a difference in your career and life.</p></div>${categoryPills()}${courseGrid(courses)}</div></section>
    <section class="category-section"><div class="wrap"><div class="section-center"><h2>Explore Diverse Learning Paths at Bytespace</h2><p>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various<br class="desktop-break"> fields, ensuring there’s something for everyone. Unleash your potential and explore our carefully curated categories.</p></div><div class="category-tiles">${[['✂','Design'],['⇧','Development'],['▱','IT & Software'],['▦','Business'],['✳','Marketing'],['▣','Photography']].map(([icon,name])=>`<a class="category-tile" href="/search?category=${encodeURIComponent(name)}" data-link><span>${icon}</span>${name}</a>`).join('')}</div></div></section>
    <section class="growth-section"><div class="wrap growth-wrap"><div class="growth-first"><div class="growth-copy"><h2>Your Path to Professional<br>Growth Starts Here!</h2><p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p><div class="growth-stats"><span><b data-count="12000" data-format="compact">12K</b><small>Students</small></span><span><b data-count="70" data-suffix="+">70+</b><small>Courses</small></span><span><b data-count="16">16</b><small>Creators</small></span></div></div><div class="feature-collage collage-one"><img class="feature-course" src="${courses[0].image}" alt="A featured learning course" loading="lazy"><img class="feature-person" src="${photo('photo-1584697964358-3e14ca57658b', 900)}" alt="Student learning with headphones" loading="lazy"><div class="float-card collage-progress"><small>Learning Progress</small><strong data-count="55" data-suffix="%">55%</strong><i><span data-progress="55"></span></i></div><span class="lime-loop"></span></div></div><div class="growth-second"><div class="feature-collage collage-two"><img class="feature-person" src="${photo('photo-1581091226825-a6a2a5aee158', 900)}" alt="Creator preparing an online course" loading="lazy"><div class="float-card revenue-card"><small>Total Revenue</small><strong data-count="120.29" data-prefix="$" data-decimals="2">$120.29</strong></div><div class="float-card happy-mini"><b>Happy Students</b>${avatars('2K+')}</div></div><div class="growth-copy growth-copy-second"><h2>Create &amp; Manage<br>Courses Easily.</h2><p>ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p><ul class="blue-checks"><li>${icons.check} Share Your Expertise</li><li>${icons.check} Monetize Your Passion</li><li>${icons.check} Flexibility and Autonomy</li><li>${icons.check} Build a Community</li></ul></div></div></div></section>
    <section class="creator-cta grid-blue">${grid}<span class="cta-shape cta-ring"></span><span class="cta-shape cta-zig"></span><span class="cta-shape cta-ploy"></span><div class="wrap"><h2>Unlock Your Potential as a<br>Creator with ByteSpace</h2><p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators.</p><a class="lime-button" href="/creator/purepearl-studio" data-link>Join as Creator</a></div></section>
    <section class="testimonials-section"><div class="wrap"><div class="testimonial-heading"><h2>Discover What Our<br>Community Is Saying</h2><p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p></div><div class="testimonial-grid">${[['Sarah M.','Enthusiastic Learner','“ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations.”','photo-1534528741775-53994a69daeb'],['James L.','Lifelong Learner','“I’ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of its courses available.”','photo-1500648767791-00dcc994a43e'],['Alex B.','Inspired Creator','“As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible.”','photo-1506794778202-cad84cf45f1d']].map(([name,role,quote,image])=>`<article class="quote-card"><img src="${photo(image,96)}" alt="${name}" loading="lazy"><b>${name}</b><a href="/creator/purepearl-studio" data-link>${role}</a><p>${quote}</p></article>`).join('')}</div></div></section></main>${footer()}`;
}

function searchPage() {
  const params = new URLSearchParams(location.search);
  const query = params.get('q') || '';
  const active = params.get('category') || 'Featured';
  const matching = courses.filter(course => {
    const q = `${course.title} ${course.category} ${course.author}`.toLowerCase();
    const matchesQuery = !query || q.includes(query.toLowerCase());
    const matchesCategory = active === 'Featured' || course.category === active || (active === 'UI/UX Design' && course.category === 'Design') || (active === 'Web Development' && course.category === 'Development');
    return matchesQuery && matchesCategory;
  });
  const repeated = matching.length ? Array.from({ length: Math.ceil(12 / matching.length) }, () => matching).flat().slice(0, 12) : [];
  return `${header()}<main><section class="search-hero grid-blue">${grid}<h1>Find Your Next Course</h1><form class="search-bar" data-search-form><label class="sr-only" for="catalog-search">Search courses</label><span>${icons.search}</span><input id="catalog-search" name="q" value="${escapeHTML(query)}" placeholder="Search"><button type="submit">Search</button><button class="search-select" type="button">Courses⌄</button></form></section><section class="catalog-section"><div class="wrap"><div class="catalog-toolbar"><div><button class="filter-chip">⚲ &nbsp;Filter</button><button class="filter-chip">▥ &nbsp;Level</button><button class="filter-chip">♧ &nbsp;Category</button></div><button class="filter-chip sort-chip">☰ &nbsp;Most relevant</button></div>${categoryPills(['Featured','Music','Drawing & Painting','Marketing','Animation','Social Media','UI/UX Design','Creative Marketing','Cooking'], active)}<div class="catalog-results" id="catalog-courses">${repeated.length ? courseGrid(repeated) : '<p class="empty-result">No courses match this search. Try another topic.</p>'}</div><nav class="pagination" aria-label="Course pages"><button aria-label="Previous page">‹</button>${[1,2,3,4,5].map((n,i)=>`<button class="${i===0?'current':''}">${n}</button>`).join('')}<button aria-label="Next page">›</button></nav></div></section></main>${footer()}`;
}

function courseHeader() {
  return `<section class="course-hero grid-blue">${grid}<div class="wrap course-hero-inner"><div class="course-title-block"><h1>Build Digital Asset: A Comprehensive Guide</h1><p>Unlock the Power of Digital Creation with Expert Guidance</p><small>by purepearl studio</small><div class="course-badges"><span>▥ &nbsp;Intermediate</span><span>★ &nbsp;4.8 (172 reviews)</span><span>♧ &nbsp;999 Students</span><button data-share>↗ &nbsp;Share</button></div></div><div class="course-showcase"><button class="video-frame" aria-label="Play course preview"><img src="/assets/course-instructor.jpg" alt="The course instructor" loading="eager"></button><aside class="enroll-card"><h2>112 Lessons (24 hours)</h2><ol class="lesson-preview"><li><span>01</span><b>Introduction to Digital Assets</b><small>12 mins</small></li><li><span>02</span><b>Design Principles for Impact</b><small>21 mins</small></li><li><span>03</span><b>Advanced Techniques in Digital Creation</b><small>16 mins</small></li></ol><p class="more-lessons">99 more videos</p><p class="ready-copy">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p><p class="enroll-price"><b>$25</b><span>/lifetime</span></p><button class="lime-button enroll-button" data-enroll>Enroll Now</button><h3>This course include</h3><ul class="included-list"><li>${icons.video} Learning Resources</li><li>${icons.video} Quality Lesson Videos</li><li>${icons.check} Certificate of Completion</li><li>${icons.check} Private Consultation</li></ul><div class="instructor-mini"><img src="${photo('photo-1580489944761-15a19d654956',80)}" alt="PurePearl Studio"><span><b>PurePearl Studio</b><small>Professional Creator</small></span></div><p>Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p><a class="mini-outline" href="/creator/purepearl-studio" data-link>See Full Profile</a></aside></div></div></section>`;
}
const tabs = active => `<nav class="course-tabs" aria-label="Course sections"><a class="${active==='about'?'active':''}" href="/course/build-digital-assets" data-link>About</a><a class="${active==='lesson'?'active':''}" href="/course/build-digital-assets/lessons" data-link>Lesson</a><a class="${active==='reviews'?'active':''}" href="/course/build-digital-assets/reviews" data-link>Reviews</a></nav>`;
const sidebar = () => '';

function courseAboutPage() {
  return `${header()}<main>${courseHeader()}<section class="course-body"><div class="wrap course-layout">${tabs('about')}<div class="course-body-grid"><article class="course-article"><h2>Description</h2><p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Asset: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p><p>In this initial module, you'll establish a solid foundation by immersing yourself in the fundamental concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p><p>As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.</p><h3>Sneak Peek</h3><div class="peek-gallery">${[courses[0],courses[1],courses[2],courses[5]].map(course=>`<img src="${course.image}" alt="${course.title}" loading="lazy">`).join('')}</div><h3>Key Points</h3><ul class="course-points">${['Foundational Concepts','Design Principles Mastery','Advanced Techniques in Digital Creation','Project Showcase and Critique','Optimizing for Various Platforms','Digital Asset Management Best Practices','Monetization Strategies','Capstone Project: Building Your Portfolio'].map(item=>`<li>${icons.check}<span>${item}</span></li>`).join('')}</ul></article><aside class="course-sidebar-sticky"><div class="side-card"><h3>Course at a glance</h3><ul class="included-list"><li>${icons.video} Learning Resources</li><li>${icons.video} Quality Lesson Videos</li><li>${icons.check} Certificate of Completion</li><li>${icons.check} Private Consultation</li></ul><div class="instructor-mini"><img src="${photo('photo-1580489944761-15a19d654956',80)}" alt="PurePearl Studio"><span><b>PurePearl Studio</b><small>Professional Creator</small></span></div><p>Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p><button class="mini-outline" data-enroll>See Full Profile</button></div></aside></div></div></section></main>${footer()}`;
}
function courseLessonPage() {
  return `${header()}<main>${courseHeader()}<section class="course-body"><div class="wrap course-layout">${tabs('lesson')}<div class="course-body-grid"><article class="course-article lesson-article"><h2>Explore the Modules</h2><p>Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p><h3>Lesson List</h3><div class="module-list">${modules.map(([title,copy],i)=>`<details class="module-item" ${i===0?'open':''}><summary><span class="module-icon">${icons.video}</span><span class="module-copy"><b>${title}</b><small>${copy}</small></span><span class="module-chevron">⌄</span></summary>${i===0?'<div class="module-lessons"><a href="#lesson-1">Understanding Digital Elements <span>12 mins</span></a><a href="#lesson-2">Navigating Design Software Tools <span>16 mins</span></a></div>':''}</details>`).join('')}</div><h3>Lesson Content</h3><p>Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p><h3>Lesson Progress Tracking</h3><p>Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p><div class="progress-card"><small>Learning Progress</small><b data-count="55" data-suffix="%">55%</b><i><span data-progress="55"></span></i></div></article><aside class="course-sidebar-sticky"><div class="side-card"><h3>This course include</h3><ul class="included-list"><li>${icons.video} Learning Resources</li><li>${icons.video} Quality Lesson Videos</li><li>${icons.check} Certificate of Completion</li><li>${icons.check} Private Consultation</li></ul><div class="instructor-mini"><img src="${photo('photo-1580489944761-15a19d654956',80)}" alt="PurePearl Studio"><span><b>PurePearl Studio</b><small>Professional Creator</small></span></div><a class="mini-outline" href="/creator/purepearl-studio" data-link>See Full Profile</a></div></aside></div></div></section></main>${footer()}`;
}
const reviews = [
  ['PurePearl Studio','UI/UX Designer','The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!','photo-1534528741775-53994a69daeb'],
  ['Albert Flores','UI/UX Designer','This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.','photo-1500648767791-00dcc994a43e'],
  ['Cody Fisher','UI/UX Designer','The project showcase and critique modules created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills.','photo-1506794778202-cad84cf45f1d'],
  ['Brooklyn Simmons','UI/UX Designer','The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape.','photo-1544005313-94ddf0286df2'],
];
function courseReviewPage() {
  return `${header()}<main>${courseHeader()}<section class="course-body"><div class="wrap course-layout">${tabs('reviews')}<div class="course-body-grid"><article class="course-article review-article"><h2>What Learners Are Saying</h2><p>Discover what our learners have to say about their experience with Build Digital Assets: A Comprehensive Guide.</p><div class="review-summary"><div class="overall-rating"><span>Ratings</span><b>4.7</b></div><div class="rating-bars">${[5,4,3,2,1].map((n,i)=>`<div><span class="rating-stars">${'★'.repeat(n)}</span><span class="rating-bar"><i style="width:${[82,42,18,12,8][i]}%"></i></span><small>${[720,120,21,22,16][i]}</small></div>`).join('')}</div></div><div class="review-filter"><h3>Individual Reviews:</h3><div>${['All Rating','5','4','3','2','1'].map((n,i)=>`<button class="${i===0?'active':''}" data-review-filter>${i===0?n:`★ ${n}`}</button>`).join('')}</div></div><div class="review-list">${reviews.map(([name,role,copy,image])=>`<article class="review-item"><img src="${photo(image,96)}" alt="${name}" loading="lazy"><div><div class="review-name"><span><b>${name}</b><small>${role}</small></span><small>a year ago</small></div><span class="rating-stars">★★★★★</span><p>${copy}</p></div></article>`).join('')}</div></article><aside class="course-sidebar-sticky"><div class="side-card"><h3>This course include</h3><ul class="included-list"><li>${icons.video} Learning Resources</li><li>${icons.video} Quality Lesson Videos</li><li>${icons.check} Certificate of Completion</li><li>${icons.check} Private Consultation</li></ul><div class="instructor-mini"><img src="${photo('photo-1580489944761-15a19d654956',80)}" alt="PurePearl Studio"><span><b>PurePearl Studio</b><small>Professional Creator</small></span></div><a class="mini-outline" href="/creator/purepearl-studio" data-link>See Full Profile</a></div></aside></div></div></section></main>${footer()}`;
}

function creatorPage() {
  return `${header()}<main><section class="creator-hero grid-blue">${grid}<div class="wrap creator-hero-inner"><div class="creator-avatar"><img src="${photo('photo-1580489944761-15a19d654956',180)}" alt="PurePearl Studio"></div><div class="creator-profile-copy"><h1>PurePearl Studio <span>Creator</span></h1><p class="creator-role">Passionate UI/UX Web designer</p><p>Welcome to the creative world of Creator’s Name. Here, you’ll discover the passion, expertise, and inspiration that drive my creative journey. Let’s explore and learn together!<br>Explore the world of creativity with me, from digital design to multimedia projects, each piece tells a unique story.</p><div class="creator-actions"><span>♧ &nbsp;Products</span><span>♧ &nbsp;12 Followers</span><button data-follow>Follow</button></div></div></div></section><section class="creator-catalog"><div class="wrap"><div class="creator-toolbar"><button>⚲ &nbsp;Filter</button><button>▥ &nbsp;Level</button><button>♧ &nbsp;Category</button><button class="sort-chip">☰ &nbsp;Most relevant</button></div>${courseGrid(courses)}</div></section></main>${footer()}`;
}

function authCard(mode) {
  const register = mode === 'register';
  return `<section class="auth-card"><div class="auth-card-heading"><span>${register?'Create an Account':'Sign In'}</span><h2>${register?'Welcome to ByteSpace':'Welcome Back'}</h2></div><form class="auth-form" data-auth-form>${register?'<label for="auth-name">Full Name</label><input id="auth-name" name="name" type="text" placeholder="Jamie Davis" required>':''}<label for="auth-email">Email</label><input id="auth-email" name="email" type="email" placeholder="designer@example.com" required><label for="auth-password">Password</label><input id="auth-password" name="password" type="password" placeholder="********" minlength="8" required><button class="lime-button auth-submit" type="submit">${register?'Continue':'Sign In'}</button></form>${register?'':`<div class="auth-divider"><span>or</span></div><div class="social-buttons"><button type="button" data-social="facebook" aria-label="Sign in with Facebook"><b>f</b></button><button type="button" data-social="google" aria-label="Sign in with Google"><b>G</b></button></div>`}<p class="auth-switch">${register?'Already have an account?':'New user?'} <a href="/${register?'login':'register'}" data-link>${register?'Login':'Create an account'}</a></p></section>`;
}
function authPage(mode='login') {
  const register = mode === 'register';
  return `<main class="auth-page grid-blue">${grid}<div class="wrap auth-layout"><section class="auth-art"><div class="auth-brand">${brand()}</div><div class="auth-copy"><h1>${register?'Sign up and come in':'Sign in with ease'}</h1><p>${register?'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.':'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}</p></div><div class="auth-cards"><article class="auth-course auth-course-back"><img src="${courses[1].image}" alt="Course preview"><b>Build Digital Asset</b><small>by purepearl studio</small><div class="auth-card-row"><span>▥ Beginner</span>${avatars()}</div><strong>$25<small>/lifetime</small></strong></article><article class="auth-course auth-course-front"><img src="${courses[2].image}" alt="The Power of Big Data course"><b>the Power of Big Data</b><small>by purepearl studio</small><div class="auth-card-row"><span>▥ Beginner</span>${avatars()}</div><strong>$25<small>/lifetime</small></strong></article><span class="auth-loop"></span><span class="auth-triangle"></span><span class="auth-scribble"></span><article class="auth-students"><b>Happy Students</b><small>4.5 (240) <em>★</em></small>${avatars('2K+')}</article></div></section>${authCard(mode)}</div></main>`;
}
function notFoundPage() {
  return `${header()}<main class="not-found-page grid-blue">${grid}<div class="not-found-content"><strong>404</strong><h1>The page you are looking<br>for doesn’t exist</h1><p>Try to use a correct url or go back to homepage to start again.</p><a class="lime-button" href="/" data-link>Back to Home</a></div></main>${footer()}`;
}
let motionObserver;
function formatCounter(element, value) {
  const target = Number(element.dataset.count);
  const prefix = element.dataset.prefix || '';
  const suffix = element.dataset.suffix || '';
  const decimals = Number(element.dataset.decimals || 0);
  const output = element.dataset.format === 'compact' && target >= 1000
    ? (value < 1000 ? Math.round(value).toLocaleString() : `${Math.round(value / 1000)}K`)
    : Number(value).toFixed(decimals);
  return `${prefix}${output}${suffix}`;
}
function startCounter(element, instant = false) {
  if (element.dataset.countStarted) return;
  element.dataset.countStarted = 'true';
  const target = Number(element.dataset.count);
  if (instant) {
    element.textContent = formatCounter(element, target);
    return;
  }
  const duration = 1350;
  const start = performance.now();
  const tick = now => {
    if (!element.isConnected) return;
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = formatCounter(element, progress === 1 ? target : target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function initMotion(root) {
  motionObserver?.disconnect();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealSelector = [
    '.logo-list', '.discover-section .section-center', '.discover-section .category-pills',
    '.discover-section .course-card', '.category-section .section-center', '.category-tile',
    '.growth-first > *', '.growth-second > *', '.creator-cta .wrap', '.testimonial-heading',
    '.quote-card', '.course-tabs', '.course-article > *', '.enroll-card', '.catalog-toolbar',
    '.catalog-section .category-pills', '.catalog-results .course-card', '.pagination',
    '.creator-avatar', '.creator-profile-copy', '.creator-toolbar', '.creator-catalog .course-card',
    '.auth-art', '.auth-card', '.not-found-content > *',
  ].join(',');
  const revealNodes = [...root.querySelectorAll(revealSelector)];
  revealNodes.forEach((node, index) => {
    node.dataset.reveal = '';
    const order = node.parentElement?.querySelectorAll('.course-card, .category-tile, .quote-card').length
      ? [...node.parentElement.querySelectorAll('.course-card, .category-tile, .quote-card')].indexOf(node)
      : index % 3;
    node.style.setProperty('--reveal-delay', `${Math.max(0, order) % 6 * 55}ms`);
  });

  const counters = [...root.querySelectorAll('[data-count]')];
  const bars = [...root.querySelectorAll('[data-progress]')];
  if (reduced || !('IntersectionObserver' in window)) {
    root.classList.remove('motion-ready');
    revealNodes.forEach(node => node.classList.add('is-visible'));
    counters.forEach(node => startCounter(node, true));
    bars.forEach(bar => {
      bar.style.setProperty('--progress-target', `${bar.dataset.progress}%`);
      bar.classList.add('is-progressed');
    });
    return;
  }

  root.classList.add('motion-ready');
  motionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const node = entry.target;
      if (node.hasAttribute('data-reveal')) node.classList.add('is-visible');
      if (node.hasAttribute('data-count')) startCounter(node);
      if (node.hasAttribute('data-progress')) {
        node.style.setProperty('--progress-target', `${node.dataset.progress}%`);
        requestAnimationFrame(() => node.classList.add('is-progressed'));
      }
      motionObserver.unobserve(node);
    }
  }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
  [...new Set([...revealNodes, ...counters, ...bars])].forEach(node => motionObserver.observe(node));
}
function escapeHTML(value) { return value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function renderPage(route) {
  switch (route.page) {
    case 'home':
      return { markup: homePage(), title: route.title };
    case 'search':
      return { markup: searchPage(), title: route.title };
    case 'login':
      return { markup: authPage('login'), title: route.title };
    case 'register':
      return { markup: authPage('register'), title: route.title };
    case 'creator':
      return route.slug === 'purepearl-studio'
        ? { markup: creatorPage(), title: route.title }
        : { markup: notFoundPage(), title: '404 Not Found' };
    case 'course': {
      const courseExists = courses.some(course => course.slug === route.slug);
      if (!courseExists) return { markup: notFoundPage(), title: '404 Not Found' };

      if (route.view === 'lessons') {
        return { markup: courseLessonPage(), title: route.title };
      }
      if (route.view === 'reviews') {
        return { markup: courseReviewPage(), title: route.title };
      }
      return { markup: courseAboutPage(), title: route.title };
    }
    default:
      return { markup: notFoundPage(), title: route.title };
  }
}

function render(route, { animate = false, scrollY = 0 } = {}) {
  const { markup, title } = renderPage(route);
  const root = document.querySelector('#app');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const restoreScroll = () => {
    window.scrollTo({ top: scrollY, behavior: 'instant' });
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: 'instant' });
    });
  };
  const paint = () => {
    root.innerHTML = markup;
    document.title = `${title} — ByteSpace`;
    initMotion(root);
    restoreScroll();
  };
  const paintWithFallbackTransition = () => {
    paint();
    root.classList.remove('route-enter');
    void root.offsetHeight;
    root.classList.add('route-enter');
    const finishTransition = event => {
      if (event.target !== root) return;
      root.classList.remove('route-enter');
      root.removeEventListener('animationend', finishTransition);
    };
    root.addEventListener('animationend', finishTransition);
  };
  if (animate && !reduced && typeof document.startViewTransition === 'function') {
    try {
      document.startViewTransition(paint).finished.then(restoreScroll).catch(() => {});
    }
    catch { paintWithFallbackTransition(); }
  } else {
    if (animate && !reduced) paintWithFallbackTransition();
    else paint();
  }
}
function showToast(message) { const toast=document.querySelector('#toast'); toast.textContent=message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove('show'),3000); }
function filterSearch(category) {
  const params = new URLSearchParams(location.search);
  params.set('category', category);
  router.navigate(`/search?${params.toString()}`, { replace: true, preserveScroll: true });
}
const router = createRouter(render);
document.addEventListener('click', event => {
  const menu=event.target.closest('.menu-toggle'); if(menu){menu.classList.toggle('open');menu.setAttribute('aria-expanded',String(menu.classList.contains('open')));document.querySelector('.mobile-nav')?.classList.toggle('open');return;}
  const category=event.target.closest('[data-category]'); if(category){filterSearch(category.dataset.category);return;}
  if(event.target.closest('[data-enroll]')) showToast('Sign in or join ByteSpace to enroll in this course.');
  if(event.target.closest('[data-social]')) showToast('Social sign-in will be available soon.');
  if(event.target.closest('[data-follow]')) {event.target.closest('[data-follow]').textContent='Following';showToast('You’re following PurePearl Studio.');}
  if(event.target.closest('[data-share]')) {navigator.clipboard?.writeText(location.href);showToast('Course link copied.');}
  if(event.target.closest('[data-review-filter]')) {document.querySelectorAll('[data-review-filter]').forEach(button=>button.classList.toggle('active',button===event.target.closest('[data-review-filter]')));}
  if(event.target.closest('.video-frame')) showToast('Course preview is ready to play.');
});
document.addEventListener('submit', event => {
  const search=event.target.closest('[data-search-form]'); if(search){event.preventDefault();const q=new FormData(search).get('q')?.toString().trim()||'';router.navigate(`/search${q?`?q=${encodeURIComponent(q)}`:''}`);return;}
  if(event.target.closest('.newsletter')){event.preventDefault();event.target.reset();showToast('You’re on the ByteSpace update list.');return;}
  if(event.target.closest('[data-auth-form]')){event.preventDefault();showToast(location.pathname==='/register'?'Your account is ready to set up.':'Welcome back to ByteSpace.');}
});
router.start();
