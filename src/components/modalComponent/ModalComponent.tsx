import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../redux/reducers/modalReducer';
import { ModalState } from '../../interface/interfaces';

export const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const ModalBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
  background-color: transparent;
`;

export const ModalCloseIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

export const RoomModalFrame = styled.div`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.tileBg};

  border-radius: 5px;
`;

export const CardModalGrid = styled.div<{ n: number }>`
  display: grid;
  padding: 60px;
  width: 1200px;
  grid-template-columns: repeat(${(props) => props.n}, 1fr);
  grid-template-rows: repeat(2, 280px);
  grid-gap: 10px;
  place-items: center;
  background-image: url('img/card/cardTable.svg');
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

export const FinalScoreModalFrame = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; */
  /* width: 1280px;
  height: 680px; */
  padding: 30px;
  background-color: ${(props) => props.theme.colors.tileBg};

  border-radius: 5px;
  /* background-image: url('img/etc/woodBoard_rope.svg');
  background-position: center;
  background-size: cover; */
`;
export const FinalScoreModalButton = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0px 20px;
  float: right;
  button {
    padding: 10px;
    margin-left: 5px;
  }
`;

export const FinalScoreGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(17, 1fr);
  /* grid-template-rows: repeat(5, 280px); */
  /* grid-gap: 1px; */
  place-items: center;
  /* background-image: url('img/etc/cardTable.svg');
  background-position: center;
  background-size: cover; */
`;

interface GridTileProps {
  w?: string | undefined;
  h?: string | undefined;
  borderR?: string | undefined;
  borderB?: string | undefined;
}

export const GridTile = styled.div<GridTileProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.w || '42px'};
  height: ${(props) => props.h || '42px'};
  padding: 3px;
  background-color: rgba(255, 255, 255, 0.5);
  border-right: ${(props) => props.borderR || '1px dashed black'};
  border-bottom: ${(props) => props.borderB || '1px solid black'};
`;

export const GameStatusModalFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 680px;
  padding: 10px;
  background-image: url('img/etc/woodBoard_rope.svg');
  background-position: center;
  background-size: cover;
`;

export const scoreText = styled.div<{ top: string | number; left: string | number }>`
  border-radius: 100%;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.base};
  background-color: ${(props) => props.theme.colors.tileBg};
  padding: ${(props) => props.theme.paddings.xs};
  position: relative;
  top: ${(props) => (props.top === undefined ? 0 : props.top)};
  left: ${(props) => (props.left === undefined ? 0 : props.left)};
  border: 1px solid ${(props) => props.theme.colors.darkGray};
`;

interface IconBoxProps {
  width: string | number;
  height: string | number;
  src?: string;
}

export const IconBox = styled.div<IconBoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.theme.paddings.xs};
  /* background-color: ${(props) => props.theme.colors.tileBg}; */
  background-image: url(${(props) => props.src || 'none'});
  background-position: center;
  background-size: cover;
`;

interface BgProps {
  backgroundColor?: string;
}

export const AlignColumn = styled.div<BgProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 7px 5px;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || 'initial'};
`;

interface AlignRowProps {
  justify: string;
  backgroundColor?: string;
}

export const AlignRow = styled.div<AlignRowProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  gap: 10px;
  padding: 3px 0px;
  background-color: ${(props) => props.backgroundColor || 'initial'};
`;

export const ColummItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icons = styled.img`
  width: 36px;
  height: 36px;
`;

export const CountText = styled.span`
  font-size: ${(props) => props.theme.fontSize.base};
  text-align: center;
`;

//ResourceExchangeModal.tsx
export const RXScreen = styled.div`
  width: 500px;
  height: 350px;
  background-color: #eeebeb;
`;
export const Name = styled.h2`
  line-height: 1.8;
  font-size: 20px;
  height: 30px;
  text-align: center;
  margin: 0 auto;
`;
export const ItemSet = styled.div`
  background-color: #d9d9d9;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  place-items: center;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  border: 1px solid black;
  align-items: center;
`;
export const Item = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
    height: 20px;
  }
`;
export const ExchangeItems = styled.div`
  background-color: #d9d9d9;
  margin: 10px;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  place-items: center;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  border: 1px solid black;
  align-items: center;
`;
export const ExchageItem = styled.div`
  margin: 10px;
  height: 35px;
  display: flex;
  align-items: center;
  img {
    height: 30px;
    margin: 2.5px;
  }
  a {
    margin: 2.5px;
  }
`;
export const HaveFood = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  img {
    height: 30px;
    margin: 2.5px;
  }
  a {
    margin: 2.5px;
  }
`;
export const BtDiv = styled.div`
  float: right;
  margin-right: 10px;
  button {
    height: 25px;
  }
`;
//FoodSelectionModal
export const FSScreen = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 100px;
  background-color: #eeebeb;
  button {
    display: flex;
    align-items: center;
    font-size: 18px;
    img {
      height: 18px;
    }
  }
`;

type Props = {
  children: React.ReactNode;
  modalType: keyof ModalState;
};

export const Modal = ({ children, modalType }: Props) => {
  const dispatch = useDispatch();
  return (
    <ModalContainer>
      <ModalBg>
        <ModalCloseIcon
          src='img/etc/close1.svg'
          onClick={() => {
            dispatch(closeModal(modalType));
          }}
        />
        {children}
      </ModalBg>
    </ModalContainer>
  );
};
