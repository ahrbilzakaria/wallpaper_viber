import { useEffect, useRef } from "react";
import CloseButtons from "./CloseButtons";

const Header = () => {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if(window.electron) {
      window.electron.onToggleTitlebar((show: boolean) => {
        if (show) {
          header.current?.classList.remove("hidden");
        } else {
          header.current?.classList.add("hidden");
        }
      });
    }
  }, []);

  return (
    <nav
      ref={header}
      className=" dark:bg-main-dark bg-zinc-900 z-10 drag "
    >
      <div className="h-full w-lg ">{window.electron && <CloseButtons />}</div>
    </nav>
  );
};

export default Header;
