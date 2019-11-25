# 簡易聊天室

- 第一次使用
  - 資料庫
    - 安裝 `pgadmin4`, `docker`(不一定要一樣，反正環境記得)
    - 先建立一個資料庫連線:
      - database: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'chatroom_refactor',
        }
      - 進到資料夾
      - 執行（command line 上）: `node scripts/migrate-database.js`
        - <如果有問題先執行程式部分的指令，想重整資料庫也是這個>
      - 執行（command line 上）: `node scripts/insert-fake-data.js`
        - <正式資料可以直接替換>
  - 程式
    - 執行 `npm init` <選 yes 到底>
    - 執行 `npm install`

* 每次執行
  - 執行前編譯: `npm run build`
  - 執行: `node src`
