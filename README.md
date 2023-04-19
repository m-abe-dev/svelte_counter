# Svelte.js を使った counter アプリ

### 要件

- TypeScript を使うこと
- フロントエンド FW は Svelte を使うこと
- カウントのプラス、マイナス、リセットができる
- カウンター自体を増やせる。削除できる
- それぞれのカウンターに入力欄があり、タイトルを入力できる
- 複数のカウンターの合計値が表示される

### フロー

1. Local で上記システムを作成
2. GitHubRepository にソースを UP
3. ソースを AWS 　 Amplify に hosting して実行できるようにする
4. GitHub Repository URL と Amplify の URL を提出しレビューを受ける

### 見本

https://vue-ts-composition.vercel.app/

## 完成した作品

https://master.d1sq6qt5d56htp.amplifyapp.com/

### 工夫した点

- なるべくチュートリアルで習ったことを慣れるために満遍なく使った(store による状態管理など)
- アトミックデザインでディレクトリを構成した

### 苦労した点

- 慣れていなかったためケアレスなミスで時間がかかってしまった

- svelte 独自のメソッドで一部理解が曖昧な部分がある

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```
