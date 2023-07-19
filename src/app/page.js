'use client'

import Image from 'next/image'
import seoyoon from '../../public/seoyoon.png'
import React, { useState } from 'react'
import { styled } from 'styled-components'

export default function Home() {
  return (
    <div>
      <HeadIntro>
        지속적으로 성장하는 프론트엔드 개발자 <Span>최서윤</Span> 입니다.
      </HeadIntro>
      <Introbox>
        <Image src={seoyoon} alt="프로필사진" className="profileImage" />
        <IntroTextBox>
          <div className="contentBox">
            <h2>--Contact--</h2>
            <Flex>
              <a className="hrefName">Email: </a>
              <a className="href">cinnamon1995@naver.com</a>
            </Flex>
            <Flex>
              <a className="hrefName">Phone: </a>
              <a className="href">010-4122-8286</a>
            </Flex>
          </div>
          <div className="contentBox">
            <h2>--Channel--</h2>
            <Flex>
              <a className="hrefName">Github: </a>
              <a className="href" href="https://github.com/heyimcsy">
                github.com/heyimcsy
              </a>
            </Flex>
            <Flex>
              <a className="hrefName">Blog: </a>
              <a className="href" href="https://seoyoonvely.tistory.com">
                seoyoonvely.tistory.com
              </a>
            </Flex>
          </div>
        </IntroTextBox>
      </Introbox>
      <Intro />
    </div>
  )
}

function Intro() {
  const [dropDown, setDropDown] = useState(false)
  const [dropDownTwo, setDropDownTwo] = useState(false)

  return (
    <Introduce>
      {dropDown ? (
        <DropDownBox>
          <Title>
            <button className="button" onClick={() => setDropDown(false)}>
              ▲
            </button>
            <p>팀을 위해 항상 한 걸음 더 나아가고,소통을 위해 노력합니다.</p>
          </Title>

          <li className="list">
            프로젝트를 진행하면서 부리더의 자리를 맡았고, 해보지 않은 업무일지라도 직접 알아보고 도전해 팀에 도움이 되고자 하는
            마음으로 발표와 총무까지 도맡아 하였습니다.
          </li>
          <li className="list">
            팀원간의 갈등요소가 있으면 양측간의 의견을 전부 듣고 , 갈등상황을 해결방안을 찾아 제시했습니다. 갈등 상황에서 독단적인
            지시가 아닌 말로서 상대측을 설득하면서 진행을 하였습니다.
          </li>
          <li className="list">
            같은 프론트엔드 팀원끼리의 실력과 속도, 기능의 난이도를 파악해 어려움을 느끼는 팀원의 기능을 분담해 구현했습니다.
          </li>
        </DropDownBox>
      ) : (
        <DropDownBox>
          <Title>
            <button className="button" onClick={() => setDropDown(true)}>
              ▼
            </button>
            <p>팀을 위해 항상 한 걸음 더 나아가고,소통을 위해 노력합니다.</p>
          </Title>
        </DropDownBox>
      )}
      {dropDownTwo ? (
        <DropDownBox>
          <Title>
            <button className="button" onClick={() => setDropDownTwo(false)}>
              ▲
            </button>
            <p>지속적인 학습을 통해 전문성을 넓히고자 합니다. 다양한 강의를 수강하며, 새로운 기술을 배우는 것을 즐깁니다.</p>
          </Title>

          <li className="list">
            스파르타 코딩 클럽에 올라온 수업 외 강의들을 스스로 들으면서 부족함을 채워나가고 실습했으며, 타 강의 사이트에서도 계속
            여러 강의를 들으면서 기본도 다지며, 새로운 부분을 받아들이는 중입니다.
          </li>
          <li className="list">
            CRA 방식으로 코드를 짜는게 익숙했지만, 더 다양하게 경험하고 싶어 SSR방식의 NEXT.js를 공부해 도입했고, 같은 프론트엔드
            팀원들 한테 공부할 수 있는 레퍼런스와 부족한 부분의 설명을 곁들여 전달줘 함께 도전 할 수 있도록 했습니다.
          </li>
          <li className="list">
            더욱 효과적인 팀 내 소통과 기술 이해를 위해, 향후에는 타입스크립트와 백엔드 Node.js를 추가로 학습할 계획입니다.
          </li>
        </DropDownBox>
      ) : (
        <DropDownBox>
          <Title>
            <button className="button" onClick={() => setDropDownTwo(true)}>
              ▼
            </button>
            <p>지속적인 학습을 통해 전문성을 넓히고자 합니다. 다양한 강의를 수강하며, 새로운 기술을 배우는 것을 즐깁니다.</p>
          </Title>
        </DropDownBox>
      )}
    </Introduce>
  )
}

const HeadIntro = styled.h1`
  font-size: 36px;
`

const Introbox = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
`
const IntroTextBox = styled.div`
  display: flex;
  padding: 50px;
  border: 3px solid black;
  border-radius: 50px;
  flex-direction: column;
  row-gap: 50px;
  .contentBox {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .hrefName {
    color: rgb(255, 173, 126);
  }
  .href {
    cursor: pointer;
    text-decoration: underline;
  }
  .href:hover {
    color: rgb(255, 173, 126);
  }
`
const Span = styled.a`
  color: rgb(255, 173, 126);
`
const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Introduce = styled.div`
  margin-top: 100px;
`
const DropDownBox = styled.div`
  width: 800px;
  margin-bottom: 40px;
  .list {
    color: rgb(170, 119, 89);
    margin: auto;
    row-gap: 10px;
    width: 715px;

    padding: 15px;
  }
`
const Title = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid black;
  border-radius: 50px;
  .button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    padding: 10px;
  }
`
