import "./App.css";
// import CustomTheme from "./components/CustomTheme";
// import Form from "./components/Form";
// import FormFunctional from "./components/FormFunctional";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import Layout from "./components/Layout";
const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: green,
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
        <Layout>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route path="/create" component={Create} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
