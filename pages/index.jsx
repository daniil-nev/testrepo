import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'SteraGlobalDesignSysLightTheme';
import SteraHomeReactComp from 'components/SteraHomeReact/SteraHomeReact';

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <main>
            <SteraHomeReactComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Home;
