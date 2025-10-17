import { createRoot } from "react-dom/client";
import { MaxUI } from "@maxhub/max-ui";
import "@maxhub/max-ui/dist/styles.css";

const Root = () => (
  <MaxUI>
    <Home />
  </MaxUI>
);

createRoot(document.getElementById("root")).render(<Root />);
