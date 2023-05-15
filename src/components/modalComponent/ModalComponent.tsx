import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ModalState, openModal, closeModal } from '../../redux/reducers/modalReducer';

const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
  background-color: transparent;
`;

const ModalCloseIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

export const CardModalGrid = styled.div<{ n: number }>`
  display: grid;
  padding: 60px;
  width: 1200px;
  /* height: 650px; */

  grid-template-columns: repeat(${(props) => props.n}, 1fr);
  grid-template-rows: repeat(2, 280px);
  grid-gap: 10px;
  place-items: center;
  /* background-color: white; */
  background-image: url('img/etc/cardTable.svg');
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  /* & > :nth-child(6) {
    grid-column: 2 / span 2;
  } */
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
}

export const AlignRow = styled.div<AlignRowProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  gap: 10px;
  padding: 3px 5px;
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
