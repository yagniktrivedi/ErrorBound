import React from "react";

import Hero from "./Hero";
import ErrorBoundary from "./errorBoundary";

class App extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroname="Hanuman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroname="Karna"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroname="Joker"></Hero>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
