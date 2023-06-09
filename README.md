# tmp-react-based-wordpress

このリポジトリは、ReactベースのWordpressテーマのテンプレートです。  
構成にはViteやTailwindCSSが含まれます。  

> **Warning**  
> このテンプレートは個人的なベストプラクティスに基づいて作成されたものです。  
> 破壊的な変更に注意してください。  

## 前提

- [VSCodeのインストール](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [VSCodeの推奨拡張機能のインストール](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Voltaのインストール](https://docs.volta.sh/guide/getting-started)

## 設定

### 実行環境の作成

下記のコマンドで実行環境を作成する。  

```zsh
volta install node@18.16.0 npm@9.5.1 pnpm@8.2.0

pnpm install
```

### 環境変数の設定

下記のコマンドで環境ファイルを作成し、環境変数を設定する。  

```zsh
cp .env.template .env
```

## 使用方法

下記のコマンドでローカルサーバーを起動する。  

```zsh
npm run dev
```

ビルドする場合は、下記のコマンドで実行する。  

```zsh
npm run build
```

## フォントのサブセットと変換

下記のアプリでフォントのサブセットと変換を行う。  
フォントに格納する文字は`subset.txt`を参照する。  

- [サブセットフォントメーカー](https://opentype.jp/subsetfontmk.htm)
- [WOFFコンバータ](https://opentype.jp/woffconv.htm)

## スクリプト

| スクリプト | 説明 |
|:-------|:--------|
| `npm run update`| パッケージの一括更新 |
| `npm run dev` | ローカルサーバーの起動 |
| `npm run build` | 本番ビルド |
| `npm run sb` | Storybookの起動 |

## 参考

### ドキュメント

- [React](https://react.dev/)
- [Storybook](https://storybook.js.org/)
- [Vite](https://ja.vitejs.dev/)
- [TailwindCSS](https://tailwindui.com/)
- [SWR](https://swr.vercel.app/ja)
- [date-fns](https://date-fns.org/)
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- [REST API Handbook](https://developer.wordpress.org/rest-api/)

## ライセンス

[MIT](https://opensource.org/licenses/MIT)
