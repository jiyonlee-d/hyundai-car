# 현대자동차 프로젝트

## Introduction

안녕하세요!
현대차에서 어떤 프로젝트를 하고 있을지 궁금해서 생각해보다가 만들게 된 웹입니다.
Job Description `데이터 분석 시스템 및 OTA 서비스 개발`을 보고 어떤 개발을 하는지 생각해보았습니다.
이 중 OTA 서비스 개발은 프로젝트용으로 만들기에는 어떤 기획을 해야 하는지 어떤 디자인일지 막막했기 때문에 데이터 분석 시스템을 위주로 생각했습니다.

직무상세에 `사용자 피드백 수집 분석 채널과 데이터 분석 결과 조회 시스템`와 우대사항에 `웹 UI 및 인터렉션 개발 경험`으로 보아 자동차 및 사용자별로 차트를 보여주는 대시보드가 있을 것 같았습니다. 그래서 자동차 종류를 나열하고 각 자동차에 따른 차트를 그려보기로 했습니다.

차량 정보와 이미지는 [현대자동차 웹사이트](https://www.hyundai.com/kr/ko/e/all-vehicles)에서 가져왔습니다.
차트 정보는 임의로 생성한 데이터입니다.

코파일럿을 사용하지 않았으며 처음 사용해보는 `Vite`, `Rechart`, `React-query`, `React Awsome Slider`는 최대한 공식문서를 보고 적용했습니다.

## Features

#### 대시보드

대시보드에 현대자동차가 제공하는 다양한 차종에 대한 정보(모델명, 이미지, 추가 정보)를 보여줍니다.

#### 모달 차트

차종을 클릭하면 나오는 모달에는 현대자동차 차량의 주행거리, 평균 주행속도, 주행시간에 따른 연비 변화 지표를 시각화한 차트가 포함됩니다.

## Stacks

#### FE

<div style={{ display: flex }}>
<img alt="Static Badge" src="https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img alt="Static Badge" src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/rechart-646CFF?style=for-the-badge&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/react awesome slider-646CFF?style=for-the-badge&logoColor=white">
</div>

#### BE

<img alt="Static Badge" src="https://img.shields.io/badge/json server-646CFF?style=for-the-badge&logoColor=white">

#### Deploy

<img alt="Static Badge" src="https://img.shields.io/badge/vercel-000?style=for-the-badge&logo=vercel&logoColor=white">

#### Package Manager

<img alt="Static Badge" src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white">

## Installation

`git clone https://github.com/jiyonlee-d/hyundai-car.git`

`pnpm install`

`pnpm run dev`

브라우저에서 http://localhost:3000으로 접속합니다.

## Deploy

라이브 데모는 https://hyundai-car-portfolio.vercel.app/에서 확인하실 수 있습니다.
