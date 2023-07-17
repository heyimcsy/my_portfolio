'use client'
import React from 'react'
import { styled } from 'styled-components'

const Education = () => {
  return (
    <Skeleton>
      <BigContent>
        <h1 className="title">Eduaction</h1>
        <p className="list">
          23.02.06 ~ 23.05.19 : <span className=" highlight">스파르타 코딩 클럽 부트캠프 항해 99 13기 (프론트-리액트)</span>
        </p>
        <p className="list">
          22.05.23 ~ 22.08.23 : <span className=" highlight">(주) 롯데 GFR KAPPA MD 인턴 </span>
        </p>
        <p className="list">
          21.06.25 ~ 22.05.20 : <span className=" highlight">(주) LF 여성해외패션팀 MD 인턴 </span>
        </p>
        <p className="list">
          17.03.02 ~ 22.02.21 : <span className=" highlight">국민대학교 의상디자인과 졸업</span>
        </p>
        <p className="list">
          16.03 ~ 17.10 : <span className=" highlight">아이엠미술학원 보조강사</span>
        </p>
      </BigContent>
      <BigContent>
        <h1 className="second_title">E.T.C</h1>
        <p className="list">OPIC: IH</p>
      </BigContent>
    </Skeleton>
  )
}

export default Education

const Skeleton = styled.div`
  width: 820px;
`

const BigContent = styled.div`
  .title {
    padding-bottom: 20px;
  }
  .second_title {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .list {
    color: rgb(255, 173, 126);
    padding: 2px;
  }
  .highlight {
    color: black;
  }
`
