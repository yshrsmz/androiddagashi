__NUXT_JSONP__("/issue/50-2019-01-13", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{milestone:{id:"MDk6TWlsZXN0b25lMzk0NDM5Mg==",number:50,url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fmilestone\u002F50",title:"50 2019-01-13",description:"DroidKaigi 2019のタイムテーブルが公開される、DroidKaigi 2019公式アプリのコードが公開される、SQLDelight 1.0.0リリース、Looperの閉じ忘れでファイルディスクリプタが枯渇する話など。",closedAt:"2019-01-13T10:51:36Z",issues:{totalCount:10,pageInfo:{startCursor:"Y3Vyc29yOnYyOpLPgAAAAAAAA-fOF8EWUw==",endCursor:"Y3Vyc29yOnYyOpLPgAAAAAAAAGPOF55F-A==",hasPreviousPage:a,hasNextPage:a},nodes:[{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F618",title:"DBのIDをinline classで表現する",body:"https:\u002F\u002Fjakewharton.com\u002Finline-classes-make-great-database-ids\u002F\r\nhttps:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Faek2pg\u002Finline_classes_make_great_database_ids_jake\u002F\r\n\r\ninline classを利用すれば、異なるテーブルのIDを間違って使わずにすむ、ということのようです。\r\n",labels:{nodes:[{name:j,description:b,color:k},{name:h,description:b,color:i}]},comments:{totalCount:f,pageInfo:{startCursor:m,endCursor:m,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"SQLDelightが自動的にAS文から生成してくれるのですね。なるほど。",publishedAt:"2019-01-13T08:34:54Z",author:{login:c,url:d,avatarUrl:e}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F617",title:"Androidのコードはハンガリアン記法をやめたの？",body:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Fae4i43\u002Fdoes_android_team_starts_to_abandon_hungarian\r\n\r\nGoogleチームからコメントが入ってますが、別にやめたわけではなく、マテリアデザインのライブラリはAOSPのコーティングルールでなくGoogleのコーティングルールに従っているというだけのようです。",labels:{nodes:[{name:h,description:b,color:i}]},comments:{totalCount:f,pageInfo:{startCursor:n,endCursor:n,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"ところでポストにリンクがあるハンガリアン記法（という名称は正確ではないのですが）をスタイルガイドに導入した人の記事はなかなかおもしろかったです。\r\nhttp:\u002F\u002Fbeust.com\u002Fweblog\u002F2017\u002F07\u002F17\u002Fi-am-the-reason-for-hungarian-notation-in-android\u002F",publishedAt:"2019-01-12T04:06:11Z",author:{login:c,url:d,avatarUrl:e}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F616",title:"DroidKaigi 2019公式アプリのコードが公開される",body:"https:\u002F\u002Fgithub.com\u002FDroidKaigi\u002Fconference-app-2019\r\n\r\n今年は\r\n\r\n- Flux\r\n- Kotlin Multiplatform Project\r\n\r\nな構成のようです。\r\nいろいろissueが立っているので、はじめてのOSS活動に良いかもしれません",labels:{nodes:[{name:o,description:b,color:p},{name:j,description:b,color:k}]},comments:{totalCount:l,pageInfo:{startCursor:g,endCursor:g,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F615",title:"DroidKaigi 2019のタイムテーブルが公開される",body:"https:\u002F\u002Fdroidkaigi.jp\u002F2019\u002Ftimetable\r\n\r\n開催は2\u002F7, 2\u002F8です",labels:{nodes:[{name:o,description:b,color:p}]},comments:{totalCount:l,pageInfo:{startCursor:g,endCursor:g,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F614",title:"Looperの閉じ忘れでファイルディスクリプタが枯渇する話",body:"https:\u002F\u002Fblog.japantaxi.co.jp\u002F2018\u002F12\u002F23\u002F3108\r\n\r\n使っていたSDKがLooperを閉じ忘れており、そのせいでファイルディスクリプタが枯渇してアプリ側でエラーになっていたそうです。Looperを直で触るときは覚えておきたいですね。",labels:{nodes:[]},comments:{totalCount:f,pageInfo:{startCursor:q,endCursor:q,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"余談ですが『Androidを支える技術』にLooperをepollで実装する話は出てきた覚えがあります",publishedAt:"2019-01-09T09:07:43Z",author:{login:c,url:d,avatarUrl:e}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F613",title:"SQLDelight 1.0.0リリース",body:"https:\u002F\u002Fmedium.com\u002F@anstrong22\u002Fannouncing-sqldelight-1-0-d482aa408f64\r\nhttps:\u002F\u002Fgithub.com\u002Fsquare\u002Fsqldelight\r\n\r\n抜本的な書き直しを行い、Kotlin Multiplatform Projectにも対応しました。\r\niOS用のアーティファクトも用意されています。\r\n\r\nRxJava2にも対応し、リソースの集中のためかSQLBriteが非推奨になりました。",labels:{nodes:[{name:j,description:b,color:k},{name:h,description:b,color:i}]},comments:{totalCount:f,pageInfo:{startCursor:r,endCursor:r,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"Roomとの比較がRedditで議論されています。Alec, JakeとYigitの考えは多少異なるようです。余談ですがReddit上でこういった（社内で行われ得る）議論が可視化されるのはよいことだと感じます。\r\nhttps:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Fadxwr3\u002Fannouncing_sqldelight_10_alec_strong_medium\u002F",publishedAt:"2019-01-12T06:34:22Z",author:{login:c,url:d,avatarUrl:e}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F612",title:"技術記事を検索してもチュートリアルばかり出てくるという嘆き",body:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Fadi3i9\u002Frant_the_headache_of_reading_through_one_android\u002F\r\n\r\nAndroidアプリ開発に限らないですが、英語の記事でも事情はおなじようです",labels:{nodes:[{name:h,description:b,color:i}]},comments:{totalCount:f,pageInfo:{startCursor:s,endCursor:s,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"なお、Medium記事にある \"unnecessary meme images\" というのは思わず頷いてしまいました",publishedAt:"2019-01-08T07:10:58Z",author:{login:c,url:d,avatarUrl:e}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F611",title:"複数Activityにまたがるデータをどう管理するか",body:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Fadaecm\u002Fhow_do_you_or_your_team_scope_an_object_that\u002F\r\n\r\nLiveDataやSingle Activity、Intentでバケツリレー、シングルトンといった方法が議論されています。",labels:{nodes:[{name:h,description:b,color:i}]},comments:{totalCount:f,pageInfo:{startCursor:t,endCursor:t,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"Single Activity + Fluxが主流になっていくのかなぁという気はします。",publishedAt:"2019-01-08T06:59:50Z",author:{login:c,url:d,avatarUrl:e}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F610",title:"Android Qがシステム全体でダークモードを持つという噂",body:"https:\u002F\u002Fwww.androidpolice.com\u002F2019\u002F01\u002F06\u002Fgoogler-seemingly-confirms-that-android-q-will-have-system-wide-dark-mode\u002F\r\n\r\nChromeチームのメンバーが公開範囲を誤って書き込んだとのことです。前から噂はあったのですが、Qではダークモードがきそうな気配です。",labels:{nodes:[]},comments:{totalCount:l,pageInfo:{startCursor:g,endCursor:g,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F609",title:"クライアントとサーバーどちらに実装するかの設計指針をチームで持つこと",body:"http:\u002F\u002Ftomoima525.hatenablog.com\u002Fentry\u002F2019\u002F01\u002F06\u002F075644\r\n\r\nよく議論になるトピックなので指針を持つのはよさそうです",labels:{nodes:[]},comments:{totalCount:2,pageInfo:{startCursor:"Y3Vyc29yOnYyOpHOGuzmWQ==",endCursor:"Y3Vyc29yOnYyOpHOGwzDBg==",hasPreviousPage:a,hasNextPage:a},nodes:[{body:"なお、自分もクライアントサイドがメインなのでポジショントークに聞こえるかもしれませんが、この記事にあるのと同じ理由で基本的にサーバーでロジックを持つべきと考えています。テストもはるかに書きやすいと思います。",publishedAt:"2019-01-06T11:08:19Z",author:{login:c,url:d,avatarUrl:e}},{body:"私も基本的に同じスタンスです。\r\n同じ処理を各プラットフォームで実装するのも手間ですしね",publishedAt:"2019-01-13T11:18:51Z",author:{login:"yshrsmz",url:"https:\u002F\u002Fgithub.com\u002Fyshrsmz",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F654889?v=4"}}]}}]}},title:"#50 2019-01-13"}],fetch:{},mutations:[]}}(false,"","hkurokawa","https:\u002F\u002Fgithub.com\u002Fhkurokawa","https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6446183?v=4",1,null,"reddit","d93f0b","Kotlin","EC953C",0,"Y3Vyc29yOnYyOpHOGwydzQ==","Y3Vyc29yOnYyOpHOGwsuaQ==","DroidKaigi","FDC137","Y3Vyc29yOnYyOpHOGvp6pw==","Y3Vyc29yOnYyOpHOGwtIQw==","Y3Vyc29yOnYyOpHOGvP7rw==","Y3Vyc29yOnYyOpHOGvP0Qg==")));