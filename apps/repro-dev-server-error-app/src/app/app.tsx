import styled from 'styled-components';

import NxWelcome from './nx-welcome';

import { buildableLib } from "@repro-dev-server-error/buildable-lib"

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <button onClick={() => console.log(buildableLib())}>Click me</button>
      <NxWelcome title="repro-dev-server-error-app" />
    </StyledApp>
  );
}

export default App;
