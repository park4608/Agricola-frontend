import * as B from './BoardComponent';
import React, { useState } from 'react';
import { HomeProps, HomeBtnProps, FenceBtnColumnProps, FenceBtnRowProps, Point } from '../../interface/interfaces';

const maze: number[][] = [
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
];

function FenceBtnRow({ ID, color, onClick }: FenceBtnRowProps) {
  const [btnColor, setBtnColor] = useState(color);

  const handleBtnClick = () => {
    setBtnColor(btnColor === color ? 'red' : color);
    if (btnColor !== 'red') {
      setCellValue(maze, ID, 1);
      //console.log(maze);
    } else {
      setCellValue(maze, ID, 0);
    }
    onClick();
  };

  return <B.FenceBtnRow color={btnColor} onClick={handleBtnClick}></B.FenceBtnRow>;
}

function FenceBtnColumn({ ID, color, onClick }: FenceBtnColumnProps) {
  const [btnColor, setBtnColor] = useState(color);

  const handleBtnClick = () => {
    setBtnColor(btnColor === color ? 'red' : color);
    if (btnColor !== 'red') {
      setCellValue(maze, ID, 1);
      //console.log(maze);
    } else {
      setCellValue(maze, ID, 0);
    }
    onClick();
  };

  return <B.FenceBtnColumn color={btnColor} onClick={handleBtnClick} />;
}

export function HomeTile({ ...props }: HomeProps) {
  if (props.HomeType === 1) {
    return (
      <B.Home>
        {props.HomeName}
        <img src={`img/house/woodHouse.jpg`} alt='' style={{ width: '90%', height: '90%' }} />
      </B.Home>
    );
  }
  if (props.HomeType === 2) {
    return (
      <B.Home>
        {props.HomeName}
        <img src={`img/house/stoneHouse.jpg`} alt='' style={{ width: '90%', height: '90%' }} />
      </B.Home>
    );
  }
  if (props.HomeType === 3) {
    return (
      <B.Home>
        {props.HomeName}
        <img src={`img/house/brickHouse.jpg`} alt='' style={{ width: '90%', height: '90%' }} />
      </B.Home>
    );
  }
  if (props.HomeType === 4) {
    return (
      <B.Home>
        {props.HomeName}
        <img src={`img/house/Fields.jpg`} alt='' style={{ width: '90%', height: '90%' }} />
      </B.Home>
    );
  } else {
    return (
      <B.Home>
        {/* {props.HomeName} */}
        <img src={`img/house/empty.jpg`} alt='' style={{ width: '100%', height: '100%' }} />
      </B.Home>
    );
  }
}

export function HomeBtn({ onClick }: HomeBtnProps) {
  const handleBtnClick = () => {
    onClick();
  };

  return <B.HomeBtn onClick={handleBtnClick}>Click</B.HomeBtn>;
}

export function HomeArea() {
  const [btnColor, setBtnColor] = useState('transparent');

  const handleBtnClick = () => {
    //setBtnColor('black');
  };

  const checkBtnClick = () => {
    const path = findMatchingHomeIds(maze, homeIds, 11);
    window.alert(path);
    console.log('Path IDs:', path);

    const walls = findMatchingFenceIds(maze, homeIds, 11);

    console.log('Wall IDs:', walls);
  };

  return (
    <B.HomeTile>
      {/* <B.HomeBtnWrapper>
        <HomeBtn onClick={checkBtnClick}></HomeBtn>
      </B.HomeBtnWrapper> */}

      <B.FenceContentWrapper>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={1}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={3}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={5}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={7}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={9}></FenceBtnRow>
      </B.FenceContentWrapper>

      <B.HomeContentWrapper>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={11}></FenceBtnColumn>
        <HomeTile HomeName={'1'} HomeType={0} ID={12}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={13}></FenceBtnColumn>
        <HomeTile HomeName={'2'} HomeType={0} ID={14}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={15}></FenceBtnColumn>
        <HomeTile HomeName={'3'} HomeType={0} ID={16}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={17}></FenceBtnColumn>
        <HomeTile HomeName={'4'} HomeType={0} ID={18}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={19}></FenceBtnColumn>
        <HomeTile HomeName={'5'} HomeType={0} ID={20}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={21}></FenceBtnColumn>
      </B.HomeContentWrapper>
      <B.FenceContentWrapper>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={23}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={25}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={27}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={29}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={31}></FenceBtnRow>
      </B.FenceContentWrapper>

      <B.HomeContentWrapper>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={33}></FenceBtnColumn>
        <HomeTile HomeName={'6'} HomeType={0} ID={34} handleClick={() => console.log('Home clicked!')}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={35}></FenceBtnColumn>
        <HomeTile HomeName={'7'} HomeType={0} ID={36}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={37}></FenceBtnColumn>
        <HomeTile HomeName={'8'} HomeType={0} ID={38}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={39}></FenceBtnColumn>
        <HomeTile HomeName={'9'} HomeType={0} ID={40}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={41}></FenceBtnColumn>
        <HomeTile HomeName={'10'} HomeType={0} ID={42}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={43}></FenceBtnColumn>
      </B.HomeContentWrapper>

      <B.FenceContentWrapper>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={45}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={47}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={49}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={51}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={53}></FenceBtnRow>
      </B.FenceContentWrapper>

      <B.HomeContentWrapper>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={55}></FenceBtnColumn>
        <HomeTile HomeName={'11'} HomeType={0} ID={56}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={57}></FenceBtnColumn>
        <HomeTile HomeName={'12'} HomeType={0} ID={58}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={59}></FenceBtnColumn>
        <HomeTile HomeName={'13'} HomeType={0} ID={60}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={61}></FenceBtnColumn>
        <HomeTile HomeName={'14'} HomeType={0} ID={62}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={63}></FenceBtnColumn>
        <HomeTile HomeName={'15'} HomeType={0} ID={64}></HomeTile>
        <FenceBtnColumn color={btnColor} onClick={handleBtnClick} ID={65}></FenceBtnColumn>
      </B.HomeContentWrapper>

      <B.FenceContentWrapper>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={67}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={69}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={71}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={73}></FenceBtnRow>
        <FenceBtnRow color={btnColor} onClick={handleBtnClick} ID={75}></FenceBtnRow>
      </B.FenceContentWrapper>
    </B.HomeTile>
  );
}

let homeIds = [12, 14, 16, 18, 20, 34, 36, 38, 40, 42, 56, 58, 60, 62, 64];

let fenceIds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75];

let board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function findPath(maze: number[][], start: Point): Point[] | null {
  let check = false;
  const rows = maze.length;
  const cols = maze[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const path: Point[] = [];
  const directions: Point[] = [
    { row: -1, col: 0 }, // up
    { row: 1, col: 0 }, // down
    { row: 0, col: -1 }, // left
    { row: 0, col: 1 }, // right
  ];

  function explore(row: number, col: number): void {
    if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col] || maze[row][col] === 1) {
      return;
    }
    visited[row][col] = true;
    path.push({ row, col });
    for (const direction of directions) {
      const newRow = row + direction.row;
      const newCol = col + direction.col;
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
        check = true; // 경계에 도달할 경우 null
      }
      explore(newRow, newCol);
    }
  }

  explore(start.row, start.col);
  if (check) {
    return null;
  }
  return path.length > 0 ? path : null;
}

function findWalls(maze: number[][], start: Point): Point[] | null {
  const rows = maze.length;
  const cols = maze[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const walls: Point[] = [];
  const directions: Point[] = [
    { row: -1, col: 0 }, // up
    { row: 1, col: 0 }, // down
    { row: 0, col: -1 }, // left
    { row: 0, col: 1 }, // right
  ];

  let reachedBoundary: boolean = false;

  function explore(row: number, col: number): void {
    if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col]) {
      if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) reachedBoundary = true;
      return;
    }
    visited[row][col] = true;
    if (maze[row][col] === 1) {
      walls.push({ row, col });
      return;
    }
    for (const direction of directions) {
      const newRow = row + direction.row;
      const newCol = col + direction.col;
      explore(newRow, newCol);
    }
  }

  explore(start.row, start.col);
  if (reachedBoundary) return null;
  return walls;
}

function findMatchingHomeIds(maze: number[][], homeIds: number[], width: number): number[][] {
  // ID를 점의 좌표로 변환
  const homes: Point[] = homeIds.map((id) => ({
    row: Math.floor(id / width),
    col: id % width,
  }));

  // 새 ID 집합을 만듭니다. 2D 배열입니다.
  const newIds: number[][] = [];

  for (const home of homes) {
    // home에서 시작하는 경로 찾기
    const path = findPath(maze, home);

    if (path !== null) {
      // 경로를 ID로 변환
      const pathIds = path.map((point) => point.row * width + point.col);

      // homeIds에 저장할 새 배열 만들기
      const validPathIds: number[] = [];
      for (const id of pathIds) {
        if (homeIds.includes(id)) {
          validPathIds.push(id);
        }
      }

      // validPathIds 정렬하기
      validPathIds.sort((a, b) => a - b);

      // 새 경로가 newIds에 있는지 확인
      const isPathAlreadyExist = newIds.some((ids) => {
        if (ids.length !== validPathIds.length) return false;
        return ids.every((id, index) => id === validPathIds[index]);
      });

      // validPathIds가 비어 있지 않고 newIds에 존재하지 않으면 newIds에 추가
      if (validPathIds.length > 0 && !isPathAlreadyExist) {
        newIds.push(validPathIds);
      }
    }
  }

  return newIds;
}

function findMatchingFenceIds(maze: number[][], fence: number[], width: number): number[] {
  // ID를 점의 좌표로 변환
  const homes: Point[] = fenceIds.map((id) => ({
    row: Math.floor(id / width),
    col: id % width,
  }));

  // 새 ID 모음 만들기
  const newIds: number[] = [];

  for (const home of homes) {
    // home에서 시작하는 경로 찾기
    const path = findWalls(maze, home);

    if (path !== null) {
      // 경로를 ID로 변환
      const pathIds = path.map((point) => point.row * width + point.col);

      // 각 ID가 homeIds에 있는지 확인
      for (const id of pathIds) {
        if (fenceIds.includes(id) && !newIds.includes(id)) {
          newIds.push(id);
        }
      }
    }
  }

  return newIds;
}

function setCellValue(maze: number[][], id: number, num: number): void {
  const rows = maze.length;
  const cols = maze[0].length;
  const totalCells = rows * cols;

  if (id < 0 || id >= totalCells) {
    console.error('Invalid id: ' + id);
    return;
  }

  const row = Math.floor(id / cols);
  const col = id % cols;

  maze[row][col] = num;
  //console.log(row,col)
}
