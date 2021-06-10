import "./App.css";
// import CustomTheme from "./components/CustomTheme";
// import Form from "./components/Form";
// import FormFunctional from "./components/FormFunctional";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { deepPurple,  red } from "@material-ui/core/colors";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
// eslint-disable-next-line
import Layout from "./components/Layout";
import NewLayout from "./components/NewLayout";
// import Loader from "./pages/Loder";
const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: red,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h3: {
      fontSize: "2rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NewLayout>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route path="/create" component={Create} />
          </Switch>
        </NewLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
