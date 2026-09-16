import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export const normalizePath = (rawPath?: string): string => {
  if (typeof window === 'undefined') return '/';

  // 1. Check if URL has ?p= or ?path= (e.g. from GitHub Pages 404.html redirect)
  if (window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('p') || params.get('path');
    if (p) {
      const cleanP = p.startsWith('/') ? p : `/${p}`;
      return cleanP;
    }
  }

  // 2. Check if hash routing is used (e.g. #/about)
  const hash = window.location.hash;
  if (hash.startsWith('#/')) {
    return hash.slice(1);
  }

  // 3. Normal path
  let path = rawPath || window.location.pathname || '/';

  // Strip trailing /index.html
  if (path.endsWith('/index.html')) {
    path = path.slice(0, -'/index.html'.length) || '/';
  }

  // Strip trailing slash if not root
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  // If deployed in a GitHub Pages or static host subfolder (e.g., /repo-name/teachers)
  const knownRoutes = ['/about', '/courses', '/teachers', '/campus', '/events', '/contact', '/payment'];
  for (const route of knownRoutes) {
    if (path.endsWith(route)) {
      return route;
    }
  }
  if (path.includes('/events/')) {
    return path.slice(path.indexOf('/events/'));
  }

  return path || '/';
};

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => normalizePath());

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPath(normalizePath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigate = (to: string) => {
    const target = to.startsWith('/') ? to : `/${to}`;
    if (target === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    try {
      window.history.pushState({}, '', target);
    } catch {
      window.location.hash = target;
    }
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  id,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  const combinedClass = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a
      href={to}
      onClick={handleClick}
      className={combinedClass}
      id={id || `link-${to.replace(/[^a-zA-Z0-9]/g, '-') || 'home'}`}
      {...props}
    >
      {children}
    </a>
  );
};
