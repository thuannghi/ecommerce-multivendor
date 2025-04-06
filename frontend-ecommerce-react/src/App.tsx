import "./App.css";
import { Button, ButtonBase, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from "./customer/components/Navbar/Navbar";
import customeTheme from "./Theme/customeTheme";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
