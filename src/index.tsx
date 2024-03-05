//index.tsx

import "@/asserts/css/global.css";
import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.querySelector("#app_root") as Element).render(<App />);
