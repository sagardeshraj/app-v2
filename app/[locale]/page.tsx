import { 
  Twitter, 
  Facebook, 
  Instagram, 
  HandHeart, 
  Bug, 
  Grid2X2Plus, 
  Mail, 
  Phone, 
  MapPin, 
  Bolt,
  Lightbulb,
  Search,
  Grid3X3,
  ChevronRight,
  Store,
  Database,
  Settings,
  Smartphone,
  ArrowRightLeft,
  ChevronsUpDown,
  Book
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
      <header className="bg-white dark:bg-background-dark border-b border-border-light dark:border-border-dark sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              className="text-primary size-8"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
            <div>
              <h1 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">
                ReviewDale
              </h1>
              <p className="text-2xs text-subtle-light dark:text-subtle-dark">
                Product Research. Simplified.
              </p>
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <div className="flex items-center gap-2">
              <nav className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1 text-xs">
                <div className="flex items-center">
                  <a
                    className="flex items-center gap-2 text-primary dark:text-primary px-3 py-1.5 rounded-md bg-white dark:bg-gray-700 shadow-sm"
                    href="#"
                  >
                    <Lightbulb className="size-4" />
                    <span className="font-bold">My Recommendations</span>
                  </a>
                  <a
                    className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-foreground-light dark:hover:text-foreground-dark px-3 py-1.5 rounded-md"
                    href="#"
                  >
                    <Search className="size-4" />
                    <span className="font-medium">Discover</span>
                  </a>
                  <a
                    className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-foreground-light dark:hover:text-foreground-dark px-3 py-1.5 rounded-md"
                    href="#"
                  >
                    <Grid3X3 className="size-4" />
                    <span className="font-medium">Browse</span>
                  </a>
                </div>
                <ChevronRight className="size-4 text-subtle-light dark:text-subtle-dark mx-1" />
                <a
                  className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-foreground-light dark:hover:text-foreground-dark px-3 py-1.5 rounded-md"
                  href="#"
                >
                  <ArrowRightLeft className="size-4" />
                  <span className="font-medium">Compare</span>
                </a>
                <ChevronRight className="size-4 text-subtle-light dark:text-subtle-dark mx-1" />
                <a
                  className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-foreground-light dark:hover:text-foreground-dark px-3 py-1.5 rounded-md"
                  href="#"
                >
                  <Store className="size-4" />
                  <span className="font-medium">Find a Store</span>
                </a>
              </nav>
              <div className="relative group ml-4">
                <button className="flex items-center gap-1 text-xs font-medium text-subtle-light dark:text-subtle-dark hover:text-foreground-light dark:hover:text-foreground-dark">
                  <span>Content Hub</span>
                  <Book className="size-4" />
                </button>
                <div className="absolute hidden group-hover:block left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark rounded-md shadow-lg py-1 z-20">
                  <a
                    className="flex items-center gap-2 px-4 py-2 text-xs text-foreground-light dark:text-foreground-dark hover:bg-gray-100 dark:hover:bg-gray-700"
                    href="#"
                  >
                    <Book className="size-4" />
                    <span>Articles</span>
                  </a>
                  <a
                    className="flex items-center gap-2 px-4 py-2 text-xs text-foreground-light dark:text-foreground-dark hover:bg-gray-100 dark:hover:bg-gray-700"
                    href="#"
                  >
                    <Database className="size-4" />
                    <span>Spec Library</span>
                  </a>
                  <a
                    className="flex items-center gap-2 px-4 py-2 text-xs text-foreground-light dark:text-foreground-dark hover:bg-gray-100 dark:hover:bg-gray-700"
                    href="#"
                  >
                    <Settings className="size-4" />
                    <span>Feature Library</span>
                  </a>
                </div>
              </div>
              <div className="border-l border-border-light dark:border-border-dark h-6 mx-4"></div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md text-xs font-medium text-foreground-light dark:text-foreground-dark">
                    <Smartphone className="size-4" />
                    <span>Mobile Devices</span>
                    <ChevronsUpDown className="size-4" />
                  </button>
                </div>
                <button className="text-subtle-light dark:text-subtle-dark hover:text-foreground-light dark:hover:text-foreground-dark">
                  <Bolt className="size-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="size-10 rounded-full bg-cover bg-center filter grayscale"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCheZHBBYJbii_w6h8YhrBUiS0PsR26SEF-i8s9uUbBABk1ikRluqJAs0wgfw1PwYnolUWXquPlBHkIA0pa87QFk4RAEMWozV2qQenslHIMiohTctpZS3ggfWHEmYUkaHKG02otGQsUo0ACfZbUR0KcVpI43WFIFD-PQIK1A3P1OyfN5-wLqkM-CtGKna6BP_dTKLeKduxz9WdD4mznwevbqHUBQeqRJSQBotgopCKs3VtzR9cEN5efiJcRar7rxAiFgccTDEaYvs5a")`,
              }}
            ></div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8 flex-grow">
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
            Welcome to ReviewDale
          </h2>
          <p className="text-subtle-light dark:text-subtle-dark max-w-2xl mx-auto">
            Your intelligent shopping assistant that helps you make better purchasing decisions through comprehensive product research and comparison.
          </p>
        </div>
      </main>
      <footer className="bg-white dark:bg-background-dark border-t border-border-light dark:border-border-dark mt-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="text-primary size-6"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h2 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">
                  ReviewDale
                </h2>
              </div>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">
                Your Intelligent Shopping Assistant
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  <Twitter className="size-5" />
                </a>
                <a
                  className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  <Facebook className="size-5" />
                </a>
                <a
                  className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  <Instagram className="size-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground-light dark:text-foreground-dark mb-4">
                ReviewDale
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                    href="#"
                  >
                    <svg
                      className="reviewdale-icon size-4"
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                    href="#"
                  >
                    <HandHeart className="size-4" />
                    <span>Help Center</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                    href="#"
                  >
                    <Bug className="size-4" />
                    <span>Report a Bug</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                    href="#"
                  >
                    <Grid2X2Plus className="size-4" />
                    <span>Request a Feature</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground-light dark:text-foreground-dark mb-4">
                Corporate
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                    href="#"
                  >
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a
                    className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground-light dark:text-foreground-dark mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark">
                  <Mail className="size-4" />
                  <a
                    className="hover:text-primary dark:hover:text-primary"
                    href="mailto:support@reviewdale.com"
                  >
                    support@reviewdale.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark">
                  <Phone className="size-4" />
                  <span>1-800-555-0199</span>
                </li>
                <li className="flex items-start gap-2 text-subtle-light dark:text-subtle-dark">
                  <MapPin className="size-4 mt-1" />
                  <span>
                    123 Tech Avenue
                    <br />
                    Innovate City, CA 90210
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark text-center text-xs text-subtle-light dark:text-subtle-dark">
            <p>© 2024 ReviewDale, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}