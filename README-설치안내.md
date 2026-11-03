# PICTORIA — 공식 웹사이트 배포 안내

**희망 공식 주소: `https://pictoria31.github.io/`**

사이트는 정적 HTML·CSS·JavaScript로 개발되었으며, 빌드 과정이나 유료 서버가 필요하지 않습니다. GitHub Pages로 무료 호스팅할 수 있습니다.

## 1. 먼저 GitHub `pictoria31` 조직을 생성하세요 (필수)

`pictoria31.github.io`는 저장소 파일 이름만으로 얻을 수 있는 주소가 아닙니다. **GitHub 조직 또는 사용자 계정의 이름 자체가 `pictoria31`여야 합니다.** 현재 연결된 계정 `pokjuman`의 저장소를 단순히 `pictoria31.github.io`라고 만들어도 그 사이트 주소를 확보할 수 없습니다.

1. GitHub 계정 `pokjuman`으로 로그인합니다.
2. GitHub의 사용자 설정에서 **Settings → Organizations → New organization**으로 들어갑니다. 개인 계정을 변경하는 대신 Pictoria 공식 조직을 따로 운영하는 방식을 추천합니다.
3. 무료 조직 플랜을 선택하고 조직명에 **`pictoria31`**를 입력합니다. *이 이름이 실제 사용 가능하거나 등록 가능한지는 GitHub에서 최종 확인됩니다.*
4. 생성한 조직 `pictoria31`에서 공개(Public) 저장소를 **`pictoria31.github.io`**라는 이름으로 만듭니다. 기본 브랜치는 `main`을 사용하세요.
5. 이 ZIP의 **최상위 모든 웹사이트 파일**을 그 저장소의 루트에 업로드합니다. 반드시 `index.html`이 저장소 최상위에 위치해야 합니다.
6. 저장소 **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**를 지정합니다.
7. 게시 후 브라우저에서 `https://pictoria31.github.io/`, `/support.html`, `/game-privacy.html`을 열어 보세요. 사이트가 표시되지 않으면 GitHub Pages의 배포 상태와 저장소 권한을 확인하세요.

📌 **중요**: GitHub 조직 `pictoria31`를 만들고 해당 저장소를 만든 뒤 ChatGPT와 연결된 GitHub 앱에 그 조직/저장소에 대한 접근권을 주면, 이후에는 이 대화에서 사이트 파일 업로드와 업데이트를 도와드릴 수 있습니다. 현재 연결된 GitHub 앱은 개인 계정 `pokjuman`에만 설치되어 있습니다. 

**조직명을 확보할 수 없다면** `pictoria31.github.io` 주소는 사용할 수 없습니다. 이때는 다른 GitHub 조직명이나 **직접 소유한 사용자 정의 도메인**을 선택해야 합니다. GitHub Pages는 사용자 정의 도메인을 지원합니다.

## 2. 이번에 완성한 내용

- [x] 메인, 출시·출시예정 게임 분류, 리블룸 프로젝트 카드와 상세 팝업
- [x] 회사 소개, 고객지원/비즈니스 문의, FAQ
- [x] 실제 공식 이메일 `pictoria31@gmail.com` 적용 (두 문의 유형 모두)
- [x] 한국어/영어 전환, 반응형 스마트폰 디자인
- [x] 웹사이트 개인정보 안내 페이지 `privacy.html`
- [x] 개별 게임 개인정보처리방침을 연결할 정책 허브 `game-privacy.html`
- [x] `pictoria31.github.io`용 canonical, OG URL, 조직 검색 메타데이터, `sitemap.xml`, `robots.txt`
- [x] Search Console HTML 태그 추가 위치 마련
- [x] AdMob의 `app-ads.txt`를 나중에 루트에 추가할 수 있는 정적 호스팅 구조
- [ ] 실제 GitHub 조직 및 저장소 생성, 사이트 게시 (사용자 계정 작업 필요)
- [ ] Google Search Console 소유권 인증, Google Play 조직 계정 인증
- [ ] 게임의 실제 데이터 처리를 반영한 개별 개인정보처리방침 발행
- [ ] 실제 AdMob 계정값 반영 및 AdMob 크롤러 인증

**확정되지 않은 출시일, 스토어 링크, 사업자 주소는 임의로 입력하지 않았습니다.**

## 3. Google Search Console / Google Play 조직 웹사이트 인증

1. 실제 웹사이트가 게시되어 공개적으로 접속되는지 먼저 확인합니다.
2. [Google Search Console](https://search.google.com/search-console/)에 `https://pictoria31.github.io/`를 **URL 접두어** 속성으로 추가합니다.
3. 소유권 확인 방법으로 **HTML 태그**를 선택하면 `<meta name="google-site-verification" content="...">`가 발급됩니다.
4. `index.html`의 `<head>`에 이미 마련된 Search Console 주석 바로 아래에 **실제 발급받은 태그**를 붙여넣고 저장소에 반영합니다. 변경사항이 배포되면 Search Console에서 확인을 눌러 주세요.
5. Google Play/Android Developer Console에서 **웹사이트 확인 요청**을 별도로 진행합니다. 동일한 Google 계정으로 Search Console의 사이트 소유권을 등록하면 연결이 간단해질 수 있습니다.

> Google 서비스의 인증 승인 여부는 사이트의 진위, 계정 상태 및 Google의 심사에 좌우됩니다. 정적 웹사이트를 게시했다고 해서 자동으로 인증되지는 않습니다.

## 4. 게임별 개인정보처리방침 운영

현재 `game-privacy.html`에 리블룸은 개발 중으로만 표시합니다. *아직 완성되지 않은 게임용 정책을 가짜로 발행하지 않았습니다.*

게임 출시 준비가 완료되고 **실제로 수집하는 개인정보·사용 SDK·광고·분석·계정/로그인·서버·보관기간·제3자 제공·국외 이전·아동 대상 여부**가 확정되면:

1. 별도 제공된 `Pictoria_Future_Release_Templates.zip` 안의 `game-privacy-policy-checklist.md`를 작성합니다.
2. 해당 게임의 **완성·검토된 개별 개인정보처리방침**을 `games/<게임슬러그>/privacy.html` 경로에 생성하여 사이트 저장소에 업로드합니다. 예: `games/rebloom/privacy.html`.
3. `game-privacy.html`의 해당 게임 카드에 개인정보처리방침 링크를 삽입하고 출시 전·준비 중 문구를 변경합니다.
4. Google Play의 개인정보처리방침 URL 및 Apple App Store Connect의 개인정보처리방침 URL에 정식 공개 주소를 입력합니다.
5. 광고/동의 SDK 처리, Google Play 데이터 보안 양식, Apple App Privacy 답변 등은 **실제 앱 구현과 별도로 일치**하도록 검토합니다. 웹페이지 작성만으로 앱 내부의 동의 관리 의무가 충족되지는 않습니다.
6. 게임마다 업데이트를 기록하고 실제 처리방식이 변경될 때마다 갱신합니다.

## 5. AdMob 연동 — 나중에 실제 계정 발급값만 게시

1. 실제 앱을 스토어에 등록할 때 개발자 웹사이트를 `https://pictoria31.github.io/`로 설정합니다. AdMob은 스토어에 등록된 웹사이트를 사용해 `app-ads.txt`의 위치를 찾습니다.
2. **Google AdMob 계정에 표시되는 정확한 내용**(예: `google.com, pub-<실제발급값>, DIRECT, <실제발급값>`)을 복사합니다. 인터넷의 아무 예시를 붙여넣지 마세요.
3. 웹사이트 GitHub 저장소의 최상위에 소문자로 `app-ads.txt`라는 파일을 **새로 생성**하고, 발급된 실제 줄을 그대로 넣습니다. 게임이 여러 개라도 같은 공식 웹사이트 루트에서 허용 광고 판매자 정보를 운영할 수 있습니다.
4. 게시 후 **`https://pictoria31.github.io/app-ads.txt`**에서 정확한 텍스트가 보이는지 확인합니다. `robots.txt`로 검색·크롤링이 차단되어서는 안 됩니다.
5. AdMob에서 표시되는 실제 조회 URL 및 검증 상태를 확인하세요. 자동 크롤러가 사용하는 위치와 파일 형식이 맞지 않으면 도메인·호스팅을 다시 점검합니다.

**참고:** `github.io`는 일반적인 독립 도메인과 다른 공유 호스팅 도메인입니다. AdMob에서 해당 주소의 확인이 보장되는 것은 아닙니다. Google AdMob에서 `app-ads.txt` 크롤링/서브도메인 오류를 표시할 경우 **직접 소유한 사용자 정의 도메인**을 GitHub Pages에 연결해 공식 사이트 URL 및 광고 파일을 그 도메인에서 운영하는 것이 더 안정적입니다. 본 배포본에는 가짜 `app-ads.txt`를 넣지 않았습니다.

## 6. 파일 구성

| 파일 | 용도 |
|---|---|
| `index.html` | 회사 메인 및 게임 포트폴리오 |
| `support.html` | 고객지원·비즈니스 메일, FAQ |
| `privacy.html` | 웹사이트 개인정보 안내 |
| `game-privacy.html` | 게임별 개인정보처리방침 목록 |
| `config.js` | 현재 고객지원·사업 제휴 메일 설정 |
| `styles.css`, `script.js` | 디자인·상호작용 |
| `assets/` | 로고, 배경, 아이콘, 콘셉트 그래픽 |
| `robots.txt`, `sitemap.xml` | 크롤링 및 검색 경로 안내 |
| `.nojekyll` | GitHub Pages 정적 사이트 처리 보조 |
| `README-설치안내.md` | 현재 파일 |

## 참고: 공식 문서

- GitHub Pages URL 규칙: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub 조직 생성: https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch
- GitHub Pages 게시: https://docs.github.com/en/pages/quickstart
- Search Console 소유권 확인: https://support.google.com/webmasters/answer/9008080?hl=ko
- Android Developer Console 웹사이트 인증: https://support.google.com/android-developer-console/answer/16641416?hl=en
- AdMob 앱 광고 판매자 파일: https://support.google.com/admob/answer/9363762?hl=ko
- AdMob 오류 해결: https://support.google.com/admob/answer/9776740?hl=ko

© 2026 Pictoria. 웹사이트는 실제 운영 상태에 맞춰 수정해야 합니다.
