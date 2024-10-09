import sun from "../assets/stratis-ui-sun-03.svg";
import moon from "../assets/stratis-ui-moon-01.svg";

interface HeaderProps {
  pageTheme: string;
  setPageTheme: (pageTheme: string) => void;
}

interface NavigationButtonProps {
  link: string;
  title: string;
}

export default function Header({ pageTheme, setPageTheme }: HeaderProps) {
  function handleClick() {
    if (pageTheme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("page_theme", "dark");
      setPageTheme("dark");
    } else if (pageTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("page_theme", "light");
      setPageTheme("light");
    }
  }

  return (
    <header className="h-16 flex items-center justify-between">
      <span className="flex items-center gap-2"></span>
      <span className="flex items-center gap-2">
        <NavigationButton link="/curriculo" title="Currículo" />
        <button onClick={handleClick} className="p-1 rounded">
          <img src={pageTheme === "light" ? moon : sun}/>
        </button>
      </span>
    </header>
  );
}

function NavigationButton({ link, title }: NavigationButtonProps) {
  return (
    <a href={link} className="px-1 py-1 rounded">
      {title}
    </a>
  );
}
