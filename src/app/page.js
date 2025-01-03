'use client'

import Image from 'next/image'
import seoyoon from '../../public/seoyoon.png'
import React, { useState } from 'react'
import { styled } from 'styled-components'

export default function Home() {
  return (
    <div>
      <HeadIntro>
        성장을 지향하는 프론트엔드 개발자 <Span>최서윤</Span> 입니다.
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

  return (
    <IntroTextBox>
      <h1>Introduce</h1>
      <div style={{border: '1px solid green', height: 'auto', width: '600px'}}>
        1년 4개월 차 개발자로 AMR(자율 이동 로봇)회사에서 웹과 에디터를 개발 및 보수유지 하였습니다.
      </div>
    </IntroTextBox>
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


