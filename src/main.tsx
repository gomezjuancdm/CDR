import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import { initializeDatabase } from "./app/services/dataInitializer";

// Inicializar base de datos
initializeDatabase();

createRoot(document.getElementById("root")!).render(<App />);
