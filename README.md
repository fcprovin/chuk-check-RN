### 🔖 Rose Connect RN  
---


### 🔖 Language
---
node 18
Electron
TypScript
Redux
Redux-toolkit
expo
React-native
React-native-web
Styled-components/native



### 🔖 실행 명령어
---

expo 설치 및 로그인
모바일 expo 다운로드

```shell
npm install -g expo-cli

expo login

npm install

npm run start

//expo 연동이 안될경우
npx expo start --tunnel

//statusPageMiddleware.js 페이지 오류가 뜰 경우 해당 페이지 19번째 줄 process.cwd() => new URL(process.cwd())로 변경
```

<b> electron 실행 </b> 
```shell

//react-native-web 빌드
npx expo export --platform web

// dist/index.html에 절대경로를 상대경로로 수정 
npm run electron

//win exe 배포
cd electron
npm run electron:win

```

<br/>