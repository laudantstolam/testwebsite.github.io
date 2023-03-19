## 下載須知

- 最新進度都在 develop
- 下載步驟
  1. 打開 terminal 輸入 `git clone https://github.com/BirShuDeyy2023/what-does-Shu-say.git `
  - (如果要指定 branch 下載的話在後面加上 -b develop 代表下載 develope 分支上的東西)
  2. 進入"what-does-shu-say"資料夾輸入`npm install`下載套件

  3. 輸入`npm start`，會自動開啟 http://localhost:3000， 頁面會自動更新

---

### 3/3-3/8 已更新項目

- 滑鼠游標>大便
- 背景
- demo 圖片
- 字體設定
- footer(頁尾ICON>>shu 推特/YT 連結) 完成
- favicon title添加
- target 放置
- 隨機生成shu

### 3/12-3/18 已更新項目
- 彈出視窗
- 彈出視窗改為bootstrap可滾動式視窗
- 隨機生成shu配上對應音效(特殊shu*6)
- 連結在新分頁中開啟
- favicon的路徑問題解決
- 壓縮部分圖片加快網頁加載速度
---

撰寫邏輯

- 主要內容都在 src/app.js，渲染在 App.css
- firebase 相關設定資料在 firebaseconfig.js
- 圖片都在 public/image
- 彈出視窗(popuppage)定義了兩種寫法，目前採用bootatrap(參考scroll.js)，另一種react寫法在(popup.js)
- icannotcode T_T
