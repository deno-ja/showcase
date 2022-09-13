# Showcase

Deno本家よりも気軽に作ったものを公開できるようなShowcaseです。

# スクリーンショットの撮影方法

短めのidを決めていただいて、下記のようにスクリプトを実行してください。

```bash
deno task screenshot [url] [id]
```

その後、`showcase.json` に下記のように追記し、Pull Requestを送ってください。

```json
{
  "title": "deno-ja LP", // タイトル
  "link": "https://deno-ja.deno.dev/", // リンク先
  "github": "deno-ja/deno-ja", // GitHubのリポジトリ（あれば。省略可）
  "image": "deno-ja", // スクリーンショットのid
  "description": "deno-ja公式Webサイトです。Freshで作られていてConnpass APIを使ってイベント開催情報を取得しています。", // 説明
  "tags": ["fresh"] // タグ。複数可。
}
```

タグ機能は増えてきたら実装予定ですが、例えば `fresh` `lume` `db` など、見た人がどういった部分を参考にできそうかという観点で適当につけていただけるとありがたいです。
