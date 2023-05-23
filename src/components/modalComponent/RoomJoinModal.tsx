import React from 'react';
import styled from 'styled-components';
import * as R from '../roomlistComponent/RoomComponent';
import * as M from './ModalComponent';

type Roomprops = {
  roomTitle: string;
  // capacity: number;
  timeset: number;
};

function RoomJoinModal({ roomTitle, timeset }: Roomprops) {
  return (
    <M.Modal modalType='roomJoinModal'>
      <M.RoomModalFrame>
        <R.Head>
          <h2>방 입장</h2>
        </R.Head>
        <R.MainContent>
          <div>
            <a>방 이름 : {roomTitle}</a>
          </div>
          <div>
            <a>행동 선택 가능시간 : {timeset}</a>
          </div>
          <R.RoomNickname>
            <a>닉네임</a>
            <input id='username' type='text' placeholder='닉네임을 입력해주세요'></input>
          </R.RoomNickname>
          <R.JoinDiv>
            <button className='joinroom'>입장하기</button>
          </R.JoinDiv>
        </R.MainContent>
      </M.RoomModalFrame>
    </M.Modal>
  );
}

export default RoomJoinModal;
