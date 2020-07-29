import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import LoadingBar from "react-redux-loading-bar";
import CharacterList from "./pages/CharacterList";
import CharacterDetail from "./pages/CharacterDetail";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './theme';
import { changeTheme } from './actions/theme';

const Container = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.bgPrimary};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textPrimary};
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`;

const App = ({ theme, changeTheme }) => {
  const otherTheme = theme === 'light' ? 'dark' : 'light';
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <LoadingBar />
        <Title>Character Checker</Title>
        <Button onClick={() => changeTheme(otherTheme)}>Swith to {otherTheme}</Button>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route path="/character/:id" component={CharacterDetail} />
        </Switch>
      </Container>
    </ThemeProvider>
  )
};

const mapStateToProps = ({ theme }) => ({
  theme: theme.name,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (themeName) => {
    return dispatch(changeTheme(themeName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
