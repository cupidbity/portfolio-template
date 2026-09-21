import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';
import { FileText, ArrowUp } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 mt-auto transition-colors duration-300" style={{
      backgroundColor: isDarkMode ? themeColors.background.gradientEnd : themeColors.colors.pink[50]
    }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left - Made with heart and copyright (centered on mobile) */}
          <div className="flex flex-col items-center md:items-start space-y-2 md:flex-1">
            <div className="flex items-center" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[700] }}>
              <span className="text-m font-medium">
                Made with
                <span className="mx-1" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] }}>˚ʚ♡ɞ˚</span>
              </span>
            </div>
            <div className="text-sm" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[700] }}>
              © {currentYear} Sania Mandary. All rights reserved.
            </div>
          </div>

          {/* Center - Back to top button */}
          <div className="flex flex-col items-center justify-center md:flex-1">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{
                backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
                color: themeColors.colors.pink[500],
                border: `2px solid ${themeColors.colors.pink[300]}`,
                outline: 'none !important',
                WebkitTapHighlightColor: 'transparent'
              }}
              onFocus={(e) => e.currentTarget.blur()}
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
            <span className="text-xs mt-2" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[700] }}>
              back to top
            </span>
          </div>

          {/* Right - Social buttons */}
          <div className="flex items-center justify-end space-x-4 md:flex-1">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
                color: themeColors.colors.pink[500],
                border: `1px solid ${themeColors.colors.pink[200]}`,
              }}
              aria-label="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
                color: themeColors.colors.pink[500],
                border: `1px solid ${themeColors.colors.pink[200]}`,
              }}
              aria-label="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
                color: themeColors.colors.pink[500],
                border: `1px solid ${themeColors.colors.pink[200]}`,
              }}
              aria-label="View Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;