import { createRoot } from "react-dom/client";
import { StoreApp } from "./App.tsx";
import "./css/index.css";
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(<StoreApp />);
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
