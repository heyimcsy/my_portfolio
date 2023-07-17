'use client'
import React from 'react'
import { styled } from 'styled-components'
import Image from 'next/image'
import 테스트그림 from '../../../public/FrontEnd-Test-Image.png'

const Cotest = () => {
  return (
    <TotalSke>
      <Image src={테스트그림} alt="test" width={600} height={600} />
      <ArtBox>
        <PinkBox>
          <WhiteBox></WhiteBox>
        </PinkBox>
        <SkyBlueBox></SkyBlueBox>
        <YellowBox></YellowBox>
      </ArtBox>
      <GreenBox>
        <RedBox>
          <GreyBox></GreyBox>
          <LittleGreyBox></LittleGreyBox>
          <BlueBox></BlueBox>
        </RedBox>
      </GreenBox>
    </TotalSke>
  )
}

export default Cotest
const TotalSke = styled.div`
  height: fit-content;
  row-gap: 50px;
  height: fit-content;
  margin-bottom: 200px;
`
const ArtBox = styled.div`
  width: 600px;
  height: 600px;
  border: 6px solid white;
  background-color: black;
  z-index: 1;
`
const WhiteBox = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid black;
  background-color: #fefefe;
  z-index: 3;
  margin-top: -3px;
  margin-left: -3px;
`
const PinkBox = styled.div`
  width: 294px;
  height: 294px;
  border: 4px solid black;
  background-color: #fd02fe;
  z-index: 2;
`
const SkyBlueBox = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid black;
  background-color: #00feff;
  margin-top: -148px;
  margin-left: 438px;
  z-index: 1;
`
const YellowBox = styled.div`
  width: 295px;
  height: 295px;
  border: 4px solid black;
  background-color: #fdfe00;
  z-index: 2;
  margin-left: 293px;
  margin-top: -3px;
`
const GreenBox = styled.div`
  width: 295px;
  height: 295px;
  border: 4px solid black;
  background-color: #03fd00;
  z-index: 4;
  margin-top: -448px;
  margin-left: 154px;
`
const RedBox = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid black;
  background-color: #fe0000;
  margin-top: 70px;
  margin-left: -3px;
  z-index: 4;
`
const GreyBox = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid black;
  background-color: #ededed;
  margin-top: 66px;
  margin-left: 66px;
  z-index: 5;
`
const LittleGreyBox = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid black;
  background-color: #fefefe;
  margin-top: -76px;
  margin-left: -80px;
  z-index: 5;
`

const BlueBox = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid black;
  background-color: #0300ff;
  margin-top: -440px;
  margin-left: 220px;
  z-index: 5;
`
