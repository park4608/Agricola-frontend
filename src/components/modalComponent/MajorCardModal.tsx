import React from 'react';
import * as M from './ModalComponent';
import * as B from '../boardComponent/BoardComponent';

function MajorCardModal() {
  return (
    <M.Modal numOfColumns={5} modalType='majorCardModal'>
      <B.Card>major1</B.Card>
      <B.Card>major2</B.Card>
      <B.Card>major3</B.Card>
      <B.Card>major4</B.Card>
      <B.Card>major5</B.Card>
      <B.Card>major6</B.Card>
      <B.Card>major7</B.Card>
      <B.Card>major8</B.Card>
      <B.Card>major9</B.Card>
      <B.Card>major10</B.Card>
    </M.Modal>
  );
}

export default MajorCardModal;