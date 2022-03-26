/** @jsxImportSource @emotion/react */
import { fontFamily, fontSize, gray2 } from './Styles';
import { css } from '@emotion/react';
import { Header } from './Header';
import { HomePage } from './HomePage';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}
export default App;
