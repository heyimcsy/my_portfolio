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
        <Image src={seoyoon} alt="프로필사진" className="profileImage" width={350}/>
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
const intros = [
  {
  title: 'Introduce',
  content: '저는 1년 4개월 차 프론트엔드 개발자로, AMR(자율 이동 로봇) 회사에서 에디터 개발과 로봇 관리 웹의 유지보수를 담당했습니다. React, TypeScript, 그리고 Three.js를 활용하여 에디터를 구현하며, 다양한 기술을 접목하고 문제를 해결하는 경험을 쌓았습니다.새로운 기술에 대한 학습과 적용에 적극적이며, 이를 통해 프로젝트에 기여할 수 있는 능동적인 자세를 갖추고 있습니다. 부족한 점은 스스로 찾아 개선하며 꾸준히 성장해 나가는 개발자로서, 항상 더 나은 결과를 만들어 내기 위해 노력하고 있습니다.'
},
  {
    title: 'Introduce1',
    content: ' 1년 4개월 차 개발자로 AMR(자율 이동 로봇)회사에서 에디터를 개발하고 로봇들을 관리하는 웹을 보수유지 하였습니다.React와 TypeScript 및 THREE.js를 이용해 에디터를 만들어 다양한 기술을 접목할 수 있는 능력이 있습니다.새로운 기술을 접하더라도, 능동적으로 습득하려고 노력을 합니다. 새로운 지식을 습득하는 것을 좋아하고 ,부족한 점을 찾아 메꾸어 가는 노력을 할 수 있는 성장형 개발자입니다.'
  },
]
  return (
    <>
      {intros.map((data)=> (
        <IntroTextBox>
          <h1>{data.title}</h1>
          <div style={{ height: 'auto', width: '650px' }}>
            {data.content}
          </div>
        </IntroTextBox>
      ))}
    </>
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
  padding: 45px;
  border: 3px solid black;
  border-radius: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
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


