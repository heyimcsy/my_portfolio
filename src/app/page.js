'use client';

import Image from 'next/image';
import seoyoon from '../../public/seoyoon.png';
import React, { useState } from 'react';
import { styled } from 'styled-components';

export default function Home() {
	return (
		<div>
			<HeadIntro>
				성장을 지향하는 프론트엔드 개발자 <Span>최서윤</Span> 입니다.
			</HeadIntro>
			<Introbox>
				<Image src={seoyoon} alt="프로필사진" className="profileImage" width={350} />
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
	);
}

function Intro() {
	const intros = [
		{
			title: 'Introduce',
			content: [
				'저는 1년 4개월 차 프론트엔드 개발자로, AMR(자율 이동 로봇) 회사에서 에디터 개발과 로봇 관리 웹의 유지보수를 담당했습니다.',
				'새로운 기술에 대한 학습과 적용에 적극적이며, 이를 통해 프로젝트에 기여할 수 있는 능동적인 자세를 갖추고 있습니다.',
				' 부족한 점은 스스로 찾아 개선하며 꾸준히 성장해 나가는 개발자로서, 항상 더 나은 결과를 만들어 내기 위해 노력하고 있습니다.',
			],
		},
		{
			title: 'Career',
			content: '티라로보틱스 ( 2023년 9월 1일 - 2024년 11월 30일 )',
		},
		{
			title: 'Skills',
			content: 'React, Java-Script, Next.js, React-query, THREE.js, Recoil, Redux , Git',
		},
		{
			title: 'Education',
			array: [
				{
					h3: '한국방송통신대학교',
					subContent: '2024.03 3학년 입학 예정',
					content: '컴퓨터 과학과',
				},
				{
					h3: '국민대학교',
					subContent: '2017.03 ~ 2022.02 졸업',
					content: '의상 디자인과',
				},
			],
		},
	];
	return (
		<>
			{intros.map((data) => (
				<IntroTextBox>
					{data.array ? (
						<>
							<h1>{data.title}</h1>
							{data.array.map((content) => (
								<>
									<div style={{ height: 'auto', width: '650px' }}>
										<h3>{content.h3}</h3>
										<p style={{ marginTop: '12px', color: '#af9a91', fontSize: '14px' }}>
											{content.subContent}
										</p>
										<p style={{ marginTop: '12px' }}>{content.content}</p>
									</div>
								</>
							))}
						</>
					) : (
						<>
							<h1>{data.title}</h1>
							<div style={{ height: 'auto', width: '650px' }}>
								{typeof data.content === 'object' ? (
									data.content.map((content, index) => (
										<p style={{ marginTop: '5px' }} key={index}>
											{content}
										</p>
									))
								) : (
									<>{data.content}</>
								)}
							</div>
						</>
					)}
				</IntroTextBox>
			))}
		</>
	);
}

const HeadIntro = styled.h1`
	font-size: 36px;
`;

const Introbox = styled.div`
	margin-top: 50px;
	width: 100%;
	height: 350px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 40px;
`;
const IntroTextBox = styled.div`
	display: flex;
	padding: 30px 45px;
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
`;
const Span = styled.a`
	color: rgb(255, 173, 126);
`;
const Flex = styled.div`
	display: flex;
	align-items: center;
`;
