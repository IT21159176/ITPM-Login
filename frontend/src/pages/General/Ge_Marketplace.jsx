import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Ge_post from "./Ge_Component/Ge_post";
import Ge_Header from "./Ge_Component/Ge_Header";
import { Typography } from "@mui/material";
import LabelBottomNavigation from '../../Components/bottom' ;


const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Ge_Header />
      <LabelBottomNavigation/>
      <Typography variant="h4" color={"GrayText"} sx={{ textAlign: "center", marginTop: 5 }}>
        Market Place
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "30px", marginRight: '20px' }}>
          <Ge_post />
        </div>
        <div style={{ marginTop: "30px" }}>
          <Ge_post />
        </div>
      </div>
    </ThemeProvider>
  );
}
