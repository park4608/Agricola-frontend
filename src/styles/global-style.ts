import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 그밖에 글로벌 스타일 작성하기  */
  body{
    margin:0;
    padding:0;
  }
`;