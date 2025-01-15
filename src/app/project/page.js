'use client';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const Project = () => {
	const [projectPage, setProjectPage] = useState(false);
	return (
		<div>
			{projectPage ? <BigProject /> : <Thira_Project />}
			<PageNum>
				<a className="num" onClick={() => setProjectPage(false)}>
					1
				</a>
				<a className="num">,</a>
				<a className="num" onClick={() => setProjectPage(true)}>
					2
				</a>
			</PageNum>
		</div>
	);
};

export default Project;

function Thira_Project() {
	return (
		<TotalSke>
			<h1 className="project">Thirarobotics</h1>
			<h2 className="project_name">Map Editor 개발</h2>
			<div className="gap">
				<p className="explain">
					AMR(자율 이동 로봇)을 조이스틱으로 조작하여 내장된 카메라로 장소를 스캔하고, 이를 기반으로
					맵을 생성하는 Map Editor를 개발했습니다.
					<br />
					생성된 맵의 이미지를 편집하고, 로봇의 동선을 설계할 수 있는 기능을 구현했습니다.
					<br />
					맵 생성 및 관리 페이지를 React-query를 사용하여 개발했으며,
					<br />
					Three.js를 활용해 맵 위에 오브젝트를 생성, 수정할 수 있는 기능을 추가했습니다.
					<br />
					또한, Canvas와 Three.js를 결합하여 화면에 그림을 그리거나 이미지를 추출하는 기능을
					구현했습니다.
				</p>
				<p>진행 기간: 2024년 6월 ~ 2024년 11월</p>
				<p>기술 스택: React, TypeScript, React-query, Three.js, GitLab</p>
				<hr className="line" />
			</div>
			<h2 style={{ marginTop: '20px' }} className="project_name">
				FMS(Zone Management)
			</h2>
			<div className="gap">
				<p className="explain">
					여러 대의 AMR(자율 이동 로봇)을 제어하고 관리하는 FMS(Fleet Management System)의 전체적인
					버그를 수정했습니다.
					<br />
					150개 이상의 버그를 한 달 반 동안 수정하며 안정성을 대폭 개선했습니다.
					<br />
					FMS는 약 20개의 탭으로 구성된 복잡한 프로그램으로, 각 탭의 프로세스를 점검하고 필요에 따라
					전체 리팩토링을 진행했습니다.
					<br />
					이를 통해 보다 자연스러운 사용자 경험을 제공했습니다.
				</p>
				<p>진행 기간: 2024년 3월 ~ 2024년 4월</p>
				<p>기술 스택: JavaScript, jQuery, GitLab</p>
				<hr className="line" />
			</div>
			<h2 style={{ marginTop: '20px' }} className="project_name">
				FMS(Bug Fix)
			</h2>
			<div className="gap">
				<p className="explain">
					여러 대의 AMR(자율 이동 로봇)을 제어하고 관리하는 FMS(Fleet Management System)의 전체적인
					버그를 수정했습니다.
					<br />
					150개 이상의 버그를 한 달 반 동안 수정하며 안정성을 대폭 개선했습니다.
					<br />
					FMS는 약 20개의 탭으로 구성된 복잡한 프로그램으로, 각 탭의 프로세스를 점검하고 필요에 따라
					전체 리팩토링을 진행했습니다.
					<br />
					이를 통해 보다 자연스러운 사용자 경험을 제공했습니다.
				</p>
				<p>진행 기간: 2024년 3월 ~ 2024년 4월</p>
				<p>기술 스택: JavaScript, jQuery, GitLab</p>
				<hr className="line" />
			</div>
			<h2 style={{ marginTop: '20px' }} className="project_name">
				FMS(Bay Management)
			</h2>
			<div className="gap">
				<p className="explain">
					여러 대의 AMR(자율 이동 로봇)을 제어하고 관리하는 FMS(Fleet Management System)의 전체적인
					버그를 수정했습니다.
					<br />
					150개 이상의 버그를 한 달 반 동안 수정하며 안정성을 대폭 개선했습니다.
					<br />
					FMS는 약 20개의 탭으로 구성된 복잡한 프로그램으로, 각 탭의 프로세스를 점검하고 필요에 따라
					전체 리팩토링을 진행했습니다.
					<br />
					이를 통해 보다 자연스러운 사용자 경험을 제공했습니다.
				</p>
				<p>진행 기간: 2024년 3월 ~ 2024년 4월</p>
				<p>기술 스택: JavaScript, jQuery, GitLab</p>
				<hr className="line" />
			</div>
			<h2 style={{ marginTop: '20px' }} className="project_name">
				MISSION
			</h2>
			<div className="gap">
				<p className="explain">
					여러 대의 AMR(자율 이동 로봇)을 제어하고 관리하는 FMS(Fleet Management System)의 전체적인
					버그를 수정했습니다.
					<br />
					150개 이상의 버그를 한 달 반 동안 수정하며 안정성을 대폭 개선했습니다.
					<br />
					FMS는 약 20개의 탭으로 구성된 복잡한 프로그램으로, 각 탭의 프로세스를 점검하고 필요에 따라
					전체 리팩토링을 진행했습니다.
					<br />
					이를 통해 보다 자연스러운 사용자 경험을 제공했습니다.
				</p>
				<p>진행 기간: 2024년 3월 ~ 2024년 4월</p>
				<p>기술 스택: JavaScript, jQuery, GitLab</p>
				<hr className="line" />
			</div>
			<h2 style={{ marginTop: '20px' }} className="project_name">
				PORTAL
			</h2>
			<div className="gap">
				<p className="explain">
					여러 대의 AMR(자율 이동 로봇)을 제어하고 관리하는 FMS(Fleet Management System)의 전체적인
					버그를 수정했습니다.
					<br />
					150개 이상의 버그를 한 달 반 동안 수정하며 안정성을 대폭 개선했습니다.
					<br />
					FMS는 약 20개의 탭으로 구성된 복잡한 프로그램으로, 각 탭의 프로세스를 점검하고 필요에 따라
					전체 리팩토링을 진행했습니다.
					<br />
					이를 통해 보다 자연스러운 사용자 경험을 제공했습니다.
				</p>
				<p>진행 기간: 2024년 3월 ~ 2024년 4월</p>
				<p>기술 스택: JavaScript, jQuery, GitLab</p>
				<hr className="line" />
			</div>
		</TotalSke>
	);
}

function BigProject() {
	return (
		<TotalSke>
			<h1 className="project">Project</h1>
			<h2 className="project_name">만나잔 프로젝트</h2>
			<div className="gap">
				<p className="explain">
					지도 기반의 소셜 네트워킹 플랫폼으로, 그룹 멤버들의 중간 위치를 찾아내고 주변의 술집을
					추천하는 독특한 기능을 제공합니다.
					<br />
					최대 4명의 사용자가 모임을 계획할 때, 서비스는 모든 사용자에게 편리한 중간 지점을
					찾아줍니다.
					<br />
					또한, 이 서비스는 사용자들에게 주변 술집에 대한 정보를 제공하고, 다른 사용자들이 남긴
					리뷰를 통해 각 술집의 평판을 확인할 수 있게 합니다.
					<br />
					사용자들은 자신이 좋아하는 술집과 리뷰를 '좋아요'로 표시할 수 있으며, 이런 정보는 개인의
					'마이 페이지'에서 확인할 수 있습니다.
				</p>
				<div>
					<Flex>
						<a className="hrefName">사이트:</a>
						<a className="href" href="https://maanna-zan-fe-1.vercel.app/">
							https://maanna-zan-fe-1.vercel.app/
						</a>
					</Flex>

					<br />
					<Flex>
						<a className="hrefName">깃헙:</a>
						<a className="href" href="https://github.com/Maanna-zan/Maanna-zan_FE">
							https://github.com/Maanna-zan/Maanna-zan_FE
						</a>
					</Flex>
				</div>
				<p>수행인원: 8명 (프론트 3명, 백 4명 , 디자이너 1명)</p>
				<p>진행기간: 23년 3월 31일 ~ 23년 5월 12일 (6주)</p>
				<p>역할: 부리더(프론트엔드 리더), 총무 , 발표자</p>
				<Flex>
					<a className="hrefName">발표영상:</a>
					<a className="href" href="https://www.youtube.com/watch?v=XxAuNna20Bc">
						https://www.youtube.com/watch?v=XxAuNna20Bc
					</a>
				</Flex>

				<p>
					Skill Set : React, JavaScript, Tanstack-query, Next.js ,Style-components ,Vercel ,Github
				</p>
				<hr className="line" />
				<ProjectOfFirst />
				<hr className="line" />
				<ProjectOfSecond />
				<hr className="line" />
				<ProjectOfThird />
				<hr className="line" />
			</div>
		</TotalSke>
	);
}

function MiniProject() {
	return (
		<TotalSke>
			<h1 className="project">Mini Project</h1>
			<h2 className="project_name">Balance Game</h2>
			<div className="gap">
				<p className="explain">
					이것은 사용자 중심의 엔터테인먼트 웹사이트로, 사용자들이 직접 자신만의 '밸런스 게임'을
					만들고 공유하는 플랫폼입니다.
					<br />
					다른 사용자들은 이 게임에 참여하여 댓글로 자신의 의견을 남기고, 좋아요 기능을 통해 가장
					흥미로운 게임을 추천할 수 있습니다.
					<br />이 웹사이트는 참여와 상호작용을 통한 재미를 제공하는 간단하면서도 독특한
					엔터테인먼트 공간입니다.
				</p>
				<div>
					<Flex>
						<a className="hrefname"> 깃헙:</a>
						<a className="href" href="https://github.com/heyimcsy/-project02_99_balanceGame-2">
							https://github.com/heyimcsy/-project02_99_balanceGame-2
						</a>
					</Flex>
				</div>
				<p>수행인원: 6명 ( 프론트 3명 , 백 3명 ) </p>
				<p>진행기간: 23년 3월 17일 ~ 23년 5월 23일 (1주)</p>
				<p>역할: 팀원</p>

				<p>Skill Set : React, JavaScript, Redux-Thunk,Style-components ,Github</p>
				<hr className="line" />
				<DetailProject>
					<h3 className="project_title">밸런스게임 상세보기 페이지를 담당했습니다. </h3>
					<PExpalin>
						두개의 의견을 보여주는 창과 , 좋아요를 원하는 만큼 누를 수 있는 하트 기능, 댓글을 달 때
						option을 선택해 원하는 의견 밑에 댓글을 달아주는 기능들을 넣어줬습니다.
					</PExpalin>
				</DetailProject>
				<hr className="line" />
			</div>
		</TotalSke>
	);
}

function ProjectOfFirst() {
	const [projectOfFirst1, setProjectOfFirst1] = useState(false);
	const [projectOfFirst2, setProjectOfFirst2] = useState(false);
	const [projectOfFirst3, setProjectOfFirst3] = useState(false);
	const [projectOfFirst4, setProjectOfFirst4] = useState(false);
	return (
		<DetailProject>
			<h3 className="project_title">프로젝트 초반 기획 및 구성 </h3>
			{projectOfFirst1 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfFirst1(false)}>
						일정 관리 (7일)
					</h4>
					<PExpalin>
						프로젝트를 처음 시작 할 때 전체 회의 때 기획을 세우고 API를 결정하는 시간을 최대 7일로
						잡았습니다. 기획은 2일만에 중요한 부분들은 세웠지만, 당시 부족했던 경험으로 확신이 서지
						않은 결정은 일주일동안 기술적 한계에 대해 알아보면서 다시 정하는 방식으로 진행했습니다.
					</PExpalin>
					<PExpalin>
						Next.js와 Tanstack-Query의 사용을 바로 정해졌기에 , 빠른 진행을 위해 저는 2일 안에
						공부해서 폴더 구조를 잡아 깃에 공유하고 , 두가지 스택에 대한 공부 자료를 공유하면서
						중요한 점을 알려줘 프로젝트에 적용하는 방식으로 진행했습니다.
					</PExpalin>
					<PExpalin>
						로그인,회원가입 기능을 처음 구현을 하는데, 팀의 기술 구현에 원활한 진행을 위해 위의 기초
						공부를 끝내고 2일 내로 구현해 API 통신을 하여 기능을 구현 할 때의 불편함이 없도록
						했습니다.
					</PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfFirst1(true)}>
						일정 관리 (7일)
					</h4>
				</div>
			)}

			{projectOfFirst2 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfFirst2(false)}>
						기능 담당 구성
					</h4>
					<PExpalin>로그인 , 회원가입 , 마이페이지 , 댓글, 대댓글을 담당했습니다. </PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfFirst2(true)}>
						기능 담당 구성
					</h4>
				</div>
			)}
			{projectOfFirst3 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfFirst3(false)}>
						next.js 초기 폴더구조 세팅 및 설정
					</h4>
					<PExpalin>
						Next.js는 URL 경로가 폴더 구조에 바로 매핑되는 방식을 사용합니다. 이 점을 고려하여, 팀원
						모두가 코드를 편리하게 작성할 수 있도록 초기에 기본 폴더 구조를 정리하고 Git에
						업로드했습니다.
					</PExpalin>
					<PExpalin>
						prettierc 파일을 통해 코드 포매팅 규칙을 설정했습니다. 여러명이 함께 진행하면서 코드들이
						규칙없이 생성 되면 혼란을 야기 할 수 있음을 대비해 기본적인 규칙을 설정해 깔끔한
						양식으로 코드가 작성되도록 했습니다.
					</PExpalin>
					<PExpalin>
						jsconfig.json 파일을 이용하여 절대 경로를 설정했습니다. 이를 통해 코드의 가독성을
						향상시키고, 모듈을 더욱 쉽게 가져올 수 있도록 했습니다. 이러한 설정은 프로젝트의 구조를
						이해하는데 도움이 되었고, 코드의 복잡성을 줄이는 데 기여했습니다.
					</PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfFirst3(true)}>
						next.js 초기 폴더구조 세팅 및 설정
					</h4>
				</div>
			)}

			{projectOfFirst4 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfFirst4(false)}>
						깃 프로젝트 및 이슈 관리 도입
					</h4>
					<PExpalin>
						우리 팀은 Git을 도입하여 프로젝트의 진행 상황을 보다 효율적으로 관리하기 시작했습니다.
						프로젝트의 각 단계에서는 이슈를 생성하고, 그에 따른 브랜치를 생성하여 작업을
						진행했습니다. 작업이 완료되면 이슈를 닫아 각자의 진행 상황을 명확하게 표시했습니다.
						초기에는 각자 이슈를 생성하고, 코드를 작성한 후 해당 이슈를 닫고 병합하는 방식으로
						프로젝트를 진행했습니다. 그러나, 프로젝트가 진행되면서, 이러한 방식을 좀 더 개선하여
						간단한 작업 설명을 프로젝트에 포함시켰습니다. 또한 이슈를 닫기 전에 해당 브랜치에서
						수행한 작업에 대한 정보를 기록하도록 변경했습니다.이런 변화를 통해 팀원 모두가 서로의
						코드를 이해하고, 작업 내용을 파악하는데 더욱 용이하게 되었습니다. 이는 상호 코드 리뷰와
						피드백 과정을 통해 프로젝트의 품질을 향상시키는데 크게 기여했습니다.
					</PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfFirst4(true)}>
						깃 프로젝트 및 이슈 관리 도입
					</h4>
				</div>
			)}
		</DetailProject>
	);
}

function ProjectOfSecond() {
	const [projectOfSecond1, setProjectOfSecond1] = useState(false);
	const [projectOfSecond2, setProjectOfSecond2] = useState(false);
	const [projectOfSecond3, setProjectOfSecond3] = useState(false);

	return (
		<DetailProject>
			<h3 className="project_title">프로젝트 진행과정 </h3>
			{projectOfSecond1 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfSecond1(false)}>
						일정 관리 (~5주)
					</h4>
					<PExpalin>
						3주차에 완성이 되어야 하는 주요 기능들과 그 이후 5주까지 완성되야 하는 기능을
						구별했습니다.
					</PExpalin>
					<PExpalin>
						오후 2시와 8시마다 회의를 열어 서로의 진행상황을 나누어 기능 구현하는 부분에서 책임감을
						가지고 진행하도록 했습니다.
					</PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfSecond1(true)}>
						일정 관리 (~5주)
					</h4>
				</div>
			)}
			{projectOfSecond2 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfSecond2(false)}>
						팀원과의 소통 및 다른 팀과의 소통
					</h4>
					<PExpalin>
						프론트엔드 리더로써, 백엔드와 디자이너 그리고 다른 팀의 리더들과 적극적으로 소통하며
						유익한 정보를 수집하였습니다. 이를 통해 저희 팀 내에서도 지식을 공유하며 발생한 문제를
						해결하는 데 기여하였습니다. 특히, 코드나 진행상의 어려움이 발생했을 때, 다른 팀원들의
						경험을 공유하여 이 문제를 해결하는 데 도움이 되었습니다. 필요한 경우, 팀원들을 다른
						사람들과 연결하여 보다 효과적인 도움을 받을 수 있게 하였습니다. 또한, 코드 컨벤션과
						회의의 진행 방식 등에서 보완이 필요한 부분을 찾아내, 다른 팀 리더들과의 대화를 통해
						효과적인 변화를 도모하였습니다.
					</PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfSecond2(true)}>
						팀원과의 소통 및 다른 팀과의 소통
					</h4>
				</div>
			)}
			{projectOfSecond3 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfSecond3(false)}>
						트러블 슈팅
					</h4>
					<PExpalin>
						일반적인 어세스 토큰 발급과 다르게, 토큰 만료시 리프레시 토큰을 헤더로 넣어 다시
						요청하면 어세스 토큰을 발급받는 과정에서의 문제가 있었습니다.
					</PExpalin>
					<PExpalin>
						구글링을 했을 시 인터셉터에서 API를 구성해 리프레시토큰을 보내주고 어세스토큰을 받는
						방법이 주로 있고 기존 API 에 토큰 만료 시 헤더에 리프레시토큰을 넣어 발급받은
						어세스토큰을 바꿔넣어주는 방식은 거의 나와있지 않았습니다. 인터셉터에서 바로
						리프레시토큰을 헤더에 넣어 요청하는 방식의 코드를 짜서 실행도 했지만, 제대로 작동하지
						않았습니다.
					</PExpalin>
					<PExpalin>
						리액트 쿼리의 onError처리에 요청을 다시 넣어볼 수 있지 않을까 하는 생각에 401이 뜨면 ,
						헤더에 리프레시토큰을 넣어 다시 요청을 하도록 했고 네트워크를 통해 어세스토큰이 새로
						발급되어 응답이 오는 것을 발견했습니다. 하지만, 그곳에서 발급받은 토큰을 쿠키스에
						넣어주는 방법을 찾지못해, 인터셉터를 끼워넣어 발급된 토큰을 쿠키로 바꿔넣어주는 식을
						완성하였습니다. 또한 이 기능을 전역적으로 기능하는 내비게이션 바에 넣어 어느 화면에 있든
						상관없게 토큰을 받아오도록 했습니다.
					</PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfSecond3(true)}>
						트러블 슈팅
					</h4>
				</div>
			)}
		</DetailProject>
	);
}

function ProjectOfThird() {
	const [projectOfThird1, setProjectOfThird1] = useState(false);
	const [projectOfThird2, setProjectOfThird2] = useState(false);

	return (
		<DetailProject>
			<h3 className="project_title">프로젝트 후반 관리</h3>
			{projectOfThird1 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfThird1(false)}>
						UT 를 거치면서 나온 105가지의 개선 사항 중 90개 이상의 개선 사항 적용
					</h4>
					<PExpalin>
						기능만이 구현 되면 됐다는 초기의 마음가짐에서 UT 이후 나온 개선사항들을 보고 유저의
						입장에서 UX\UI적인 니즈가 많다는 것을 알게 됐고, 필요에 의해 많은 부분을 개선했습니다.
						그로 인해 유저의 입장에서 항상 사이트의 기능들을 누르고 사용해보면서 스스로 개선사항을
						내 고칠 수 있는 역량을 가질 수 있었습니다.
					</PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfThird1(true)}>
						UT 를 거치면서 나온 105가지의 개선 사항 중 90개 이상의 개선 사항 적용
					</h4>
				</div>
			)}
			{projectOfThird2 ? (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfThird2(false)}>
						개발에 대한 이해도 향상으로 인한 소통능력의 증가
					</h4>
					<PExpalin>
						초기 프로젝트 단계에서는 개발에 대한 이해도가 상대적으로 부족했기 때문에, 프로젝트
						기획과 코드 구현에 필요한 요소들을 명확히 파악하고, 그것들이 소요 시간과 난이도를
						객관적으로 평가하는 것이 어려웠습니다. 그러나 지속적인 회의와 개발 경험을 통해 이해도가
						점차 향상되었습니다. 이제 각 기능을 구현하는 데 필요한 요소들이 무엇인지, 그리고 해당
						작업이 완료되는 데 얼마나 걸릴지에 대해 더욱 정확하게 파악할 수 있게 되었습니다. 이렇게
						개발에 대한 이해도가 향상되면서 팀원과의 소통 역량도 함께 향상되었습니다. 팀원에게는
						특정 기능에 대한 문제를 어떤 방식으로 코드를 작성하여 해결할 수 있는지에 대한 설명을
						명확하게 전달할 수 있게 되었습니다. 또한 백엔드 팀과의 커뮤니케이션에서도 문제가
						발생했을 때 어떤 부분이 잘못되었는지, 어떤 API가 필요한지, 그리고 어떻게 구현할 것인지에
						대한 설명을 보다 명료하게 제시할 수 있게 되었습니다. 이러한 소통 능력은 팀 내에서의
						협업을 원활하게 만들어줬고, 프로젝트의 성공적인 진행을 이끌어내는 데 크게
						기여하였습니다.
					</PExpalin>
				</div>
			) : (
				<div className="detailProjectList">
					<h4 className="detailExplainTitle" onClick={() => setProjectOfThird2(true)}>
						개발에 대한 이해도 향상으로 인한 소통능력의 증가
					</h4>
				</div>
			)}
		</DetailProject>
	);
}

const Flex = styled.div`
	display: flex;
	align-items: center;

	.href {
		height: fit-content;
		text-decoration: underline;
		cursor: pointer;
	}

	.href:hover {
		color: rgb(255, 173, 126);
	}
`;
const TotalSke = styled.div`
	width: 800px;
	margin: auto;
	padding-bottom: 100px;

	.line {
		background-color: rgb(170, 119, 89);
		height: 2px;
		border: 0;
	}

	.project {
		padding-bottom: 40px;
	}

	.project_name {
		padding-bottom: 20px;
		color: rgb(255, 173, 126);
	}

	.gap {
		display: flex;
		flex-direction: column;
		row-gap: 20px;
	}

	.explain {
		font-size: 14px;
		height: fit-content;
		text-align: left;
		margin-top: 2px;
	}
`;
const DetailProject = styled.div`
	padding-bottom: 3px;

	.detailProjectList {
		color: rgb(170, 119, 89);
		padding: 3px;
	}

	.project_title {
		padding-bottom: 20px;
	}

	.detailExplainTitle {
		cursor: pointer;
	}

	.detailExplainTitle:hover {
		cursor: pointer;
		color: rgb(255, 173, 126);
	}
`;
const PExpalin = styled.li`
	width: 780px;
	font-size: 15px;
	padding: 3px;
`;

const PageNum = styled.div`
	display: flex;
	width: fit-content;
	margin: auto;
	padding-bottom: 100px;

	.num {
		cursor: pointer;
		padding: 2px;

		&:hover {
			color: rgb(255, 173, 126);
		}
	}
`;
