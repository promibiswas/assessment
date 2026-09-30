const staticRoutes = new Map([
  ['/', { page: 'home', title: 'Home' }],
  ['/search', { page: 'search', title: 'Search Courses' }],
  ['/login', { page: 'login', title: 'Login' }],
  ['/register', { page: 'register', title: 'Register' }],
]);

function normalizedPath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

function decodeSegment(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return null;
  }
}

export function resolveRoute(pathname) {
  const path = normalizedPath(pathname);
  const staticRoute = staticRoutes.get(path);
  if (staticRoute) return { ...staticRoute };

  const creatorMatch = path.match(/^\/creator\/([^/]+)$/);
  if (creatorMatch) {
    const slug = decodeSegment(creatorMatch[1]);
    return slug ? { page: 'creator', title: 'Creator Profile', slug } : notFoundRoute();
  }

  const courseMatch = path.match(/^\/course\/([^/]+)(?:\/(lessons|reviews))?$/);
  if (courseMatch) {
    const slug = decodeSegment(courseMatch[1]);
    if (!slug) return notFoundRoute();

    const view = courseMatch[2] || 'about';
    const title = {
      about: 'Course Details',
      lessons: 'Course Lessons',
      reviews: 'Course Reviews',
    }[view];

    return { page: 'course', title, slug, view };
  }

  return notFoundRoute();
}

function notFoundRoute() {
  return { page: 'not-found', title: '404 Not Found' };
}

export function createRouter(renderRoute) {
  let started = false;
  let scrollSaveFrame = null;

  function cancelPendingScrollSave() {
    if (scrollSaveFrame === null) return;
    window.cancelAnimationFrame(scrollSaveFrame);
    scrollSaveFrame = null;
  }

  function saveScrollPosition() {
    if (scrollSaveFrame !== null) return;
    scrollSaveFrame = window.requestAnimationFrame(() => {
      scrollSaveFrame = null;
      window.history.replaceState(
        { ...(window.history.state ?? {}), scrollY: window.scrollY },
        '',
        window.location.href,
      );
    });
  }

  function renderCurrent({ animate = false, scrollY = 0 } = {}) {
    renderRoute(resolveRoute(window.location.pathname), { animate, scrollY });
  }

  function navigate(href, { replace = false, preserveScroll = false } = {}) {
    const destination = new URL(href, window.location.href);
    if (destination.origin !== window.location.origin) {
      window.location.assign(destination.href);
      return;
    }

    if (destination.href === window.location.href) return;

    const scrollY = preserveScroll ? window.scrollY : 0;
    if (replace) {
      cancelPendingScrollSave();
      window.history.replaceState(
        { ...(window.history.state ?? {}), scrollY },
        '',
        destination.href,
      );
      renderCurrent({ scrollY });
      return;
    }

    cancelPendingScrollSave();
    window.history.replaceState(
      { ...(window.history.state ?? {}), scrollY: window.scrollY },
      '',
      window.location.href,
    );
    window.history.pushState({ scrollY: 0 }, '', destination.href);
    renderCurrent({ animate: true, scrollY: 0 });
  }

  function handleLinkClick(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    if (!(event.target instanceof Element)) return;
    const link = event.target.closest('a[data-link]');
    if (!link || link.hasAttribute('download')) return;
    if (link.target && link.target !== '_self') return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin) return;

    const current = new URL(window.location.href);
    const isHashNavigation =
      destination.pathname === current.pathname &&
      destination.search === current.search &&
      destination.hash &&
      destination.hash !== current.hash;
    if (isHashNavigation) return;

    event.preventDefault();
    navigate(destination.href);
  }

  function handlePopState(event) {
    cancelPendingScrollSave();
    renderCurrent({ animate: true, scrollY: Number(event.state?.scrollY) || 0 });
  }

  function start() {
    if (started) return;
    started = true;
    window.history.scrollRestoration = 'manual';

    const scrollY = Number(window.history.state?.scrollY) || 0;
    window.history.replaceState(
      { ...(window.history.state ?? {}), scrollY },
      '',
      window.location.href,
    );

    document.addEventListener('click', handleLinkClick);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('scroll', saveScrollPosition, { passive: true });
    renderCurrent({ scrollY });
  }

  return { navigate, start };
}
