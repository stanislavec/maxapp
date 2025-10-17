import { createRoot } from "react-dom/client";
import { MaxUI } from "@maxhub/max-ui";
import "@maxhub/max-ui/dist/styles.css";
import { Home } from "./Home";
import { Context, useAppState } from "./context";

const Root = () => {
  const [state, actions] = useAppState();

  return (
    <Context.Provider value={{ ...state, actions }}>
      <MaxUI>
        <Home />
      </MaxUI>
    </Context.Provider>
  );
};

createRoot(document.getElementById("root") as HTMLDivElement).render(<Root />);
