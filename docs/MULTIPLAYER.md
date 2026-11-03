# 배타고 (BAETAGO) 멀티플레이

공용 방 하나, 최대 5명, 익명 접속입니다. 기존 Vite/Three.js 화면과 GitHub Pages를 유지하며 WebSocket 서버만 Cloudflare Workers + SQLite Durable Objects로 분리합니다. 계정·채팅·저장·방 생성 기능은 없습니다. HINA SURVIVAL 원본은 사용하거나 수정하지 않습니다.

## 로컬 실행

Node.js 24에서:

```sh
npm ci
npm run server:dev
```

다른 터미널에서 기존 `.env.local`이 없다면 `.env.example`을 복사합니다. 기존 파일이 있으면 덮어쓰지 말고 `VITE_MULTIPLAYER_URL=ws://127.0.0.1:8787/room` 한 항목만 추가하세요.

```sh
npm run dev -- --port 5173 --strictPort
```

`http://127.0.0.1:5173/`를 두 창에서 엽니다. 로컬 Worker는 `http://127.0.0.1:8787/health`로 상태를 확인합니다. 로컬 허용 origin은 `localhost:5173`과 `127.0.0.1:5173`입니다. 서버 URL이 설정되지 않은 빌드는 기존처럼 혼자 항해하며 서버 미연결 상태를 표시합니다.

## 검증

```sh
npm test
npm run test:server
npm run build
python3 server/tests/browser_check.py
```

마지막 명령은 위의 Vite/Workers 두 서버가 켜져 있고 Vite에 로컬 WebSocket 환경변수가 적용된 상태에서 실행합니다. Python Playwright와 `/usr/bin/chromium`이 필요합니다. 브라우저 검사는 독립 창으로 이동·닉네임·중복 캐릭터·입퇴장·재접속·정원 초과·idle 전송 억제를 확인합니다. 소프트웨어 GPU 부하를 줄이기 위해 낮은 pixel ratio를 사용하고, 정원 확인용 창은 렌더링만 정지합니다. 모바일 검사는 Chromium 터치 **에뮬레이션**이며 실제 휴대폰 검사를 대체하지 않습니다.

## 실제 배포 (인증 제공 후)

1. Cloudflare 계정에 Workers 배포와 Durable Objects 마이그레이션 권한이 있는 API 토큰을 준비합니다. `CLOUDFLARE_API_TOKEN`과 `CLOUDFLARE_ACCOUNT_ID`를 안전한 환경변수로 설정합니다. GitHub 변수나 VITE_* 변수에 토큰을 넣지 마세요. 제한된 실행 환경에서는 `api.cloudflare.com` 접근도 필요합니다.
2. `npx wrangler whoami`로 인증을 확인하고 `npm run server:deploy`를 실행합니다. `wrangler.jsonc`의 v1 마이그레이션은 `new_sqlite_classes: ["SeaRoom"]`을 사용합니다. 임시 계정이나 인증 우회 옵션은 사용하지 않습니다.
3. 배포 출력의 실제 Worker 주소를 확인합니다. 예: `https://sea-multiplayer.<실제 계정 서브도메인>.workers.dev`. 이 예시 주소를 그대로 사용하지 마세요. `/health`가 `ok: true`, `protocol: 1`, `capacity: 5`를 반환해야 합니다.
4. GitHub `wnalstlr777/Sea` → Settings → Secrets and variables → Actions → Variables에 **SEA_MULTIPLAYER_URL**을 실제 `wss://...workers.dev/room`으로 등록합니다. `.github/workflows/deploy.yml`이 이를 공개 Vite 설정 `VITE_MULTIPLAYER_URL`로 주입합니다.
5. GitHub Actions의 **Deploy GitHub Pages**를 수동 실행하거나 main을 업데이트해 다시 빌드합니다. 개발용 `.env.local`을 커밋하지 마세요.
6. 실제 `https://wnalstlr777.github.io/Sea/` 두 창에서 상태가 `함께 항해 중 · 2/5명`인지 확인하고, 개발자 도구에서 실제 Worker로의 WebSocket 101 응답과 위치 패킷을 확인합니다. 마지막으로 실제 휴대폰에서도 같은 주소에 접속해 조작·표시를 확인합니다.

프로덕션 Worker의 허용 origin은 `https://wnalstlr777.github.io`입니다. 별도 도메인으로 Pages를 바꾸면 `ALLOWED_ORIGINS`도 변경·재배포해야 합니다. HTTPS Pages는 `wss://` 서버만 연결합니다.

**현재 실제 Cloudflare 서버와 GitHub Pages 간 연결은 인증 및 서버 주소 설정 전까지 미검증입니다.** 로컬 검증 성공은 공개 배포 성공을 뜻하지 않습니다.

## 동작과 범위

- 서버가 ID·닉네임·히나/다은·스폰 슬롯을 배정합니다. 캐릭터는 각각 50%이며 중복 허용입니다. 재접속은 새로운 익명 ID와 스폰을 받습니다.
- 클라이언트는 100ms마다 변경된 상태만 보냅니다. heartbeat는 20초 간격입니다. 위치·회전·걷기/대기를 공유하고 다른 플레이어는 약 100ms 지연 버퍼로 보간합니다.
- 메시지 크기·전송률·유한 숫자·순서·갑판 경계·Y 높이·이동량을 서버에서 확인합니다. 유효하지 않은 이동은 보정하고 잘못된 형식/전송률 위반은 연결을 끊습니다. 기본 검증이며 완전한 부정행위 방지는 범위 밖입니다.
- Durable Object는 `acceptWebSocket`과 자동 ping 응답을 사용합니다. 각 socket attachment의 플레이어 상태를 읽으므로 hibernation 재생성 후에도 멤버십을 복원합니다. 서버에 상시 타이머는 없으며 게임 상태를 DB에 영구 저장하지 않습니다.
- 정원 초과는 자동 재시도 폭주 없이 안내와 수동 재접속 버튼을 표시합니다. 네트워크 종료는 지수 backoff로 자동 재접속하며 이전 캐릭터와 닉네임 DOM·GPU 리소스를 정리합니다.
- 바다·조명·항해·날씨·오디오 시간은 각 기기의 기존 로컬 연출입니다. 이 단계는 플레이어 상태만 공유합니다.
