__NUXT_JSONP__("/issue/161-2021-02-28", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:[{milestone:{id:"MDk6TWlsZXN0b25lNjQ1NjkwOA==",number:161,url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fmilestone\u002F161",title:"161 2021-02-28",description:"Jetpack Compose Beta、DroidKaigi 2021のアプリ公開、Squareにおける素早くPRをマージするための工夫、など",closedAt:"2021-02-28T10:11:10Z",issues:{totalCount:11,pageInfo:{startCursor:"Y3Vyc29yOnYyOpLPf________5vOMJR1Jg==",endCursor:"Y3Vyc29yOnYyOpLPf_______-7POMMMW5w==",hasPreviousPage:a,hasNextPage:a},nodes:[{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1753",title:"Squareにおける素早くPRをマージするための工夫",body:"最近Squareに入社したAndroidエンジニアが気付いたPRを素早くマージするための工夫について語られています。\r\nhttps:\u002F\u002Fsaket.me\u002Fgreat-teams-merge-fast\u002F",labels:{nodes:[]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1754",title:"Kotlin coroutineの並列処理テストツール",body:"Kotlin標準ライブラリの並列処理テストを自動化するために作られたツールLincheckの紹介です。各操作を複数のスレッドでランダムに実行して線形化可能性が破れないか調べるようです。\r\nhttps:\u002F\u002Fblog.jetbrains.com\u002Fkotlin\u002F2021\u002F02\u002Fhow-we-test-concurrent-primitives-in-kotlin-coroutines\u002F",labels:{nodes:[{name:"Kotlin",description:c,color:"EC953C"}]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1755",title:"Android Studio 4.2 beta 5",body:"https:\u002F\u002Fandroidstudio.googleblog.com\u002F2021\u002F02\u002Fandroid-studio-42-beta-5-available.html",labels:{nodes:[{name:m,description:c,color:n},{name:f,description:c,color:g}]},comments:{totalCount:e,pageInfo:{startCursor:o,endCursor:o,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"redditの反応はこちら\r\nhttps:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Flqoq82\u002Fandroid_studio_42_beta_5_available\u002F",publishedAt:"2021-02-25T05:16:34Z",author:{login:h,url:i,avatarUrl:j}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1756",title:"Android Studio Arctic Fox Canary 8",body:"https:\u002F\u002Fandroidstudio.googleblog.com\u002F2021\u002F02\u002Fandroid-studio-arctic-fox-canary-8.html",labels:{nodes:[{name:m,description:c,color:n},{name:f,description:c,color:g}]},comments:{totalCount:e,pageInfo:{startCursor:p,endCursor:p,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"redditの反応はこちら\r\nhttps:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Flrj6kh\u002Fandroid_studio_arctic_fox_canary_8_available\u002F",publishedAt:"2021-02-25T05:15:29Z",author:{login:h,url:i,avatarUrl:j}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1757",title:"Deprecatedアノテーションがdeprecatedになる",body:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Flr7j9m\u002Fandroid_deprecated_annotation_is_deprecated\u002F\r\n\r\nもちろんミスによるものです",labels:{nodes:[{name:f,description:c,color:g}]},comments:{totalCount:e,pageInfo:{startCursor:q,endCursor:q,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"\u003E It's not deprecated!\r\n\u003E\r\n\u003E This was a mistake in the platform build tooling (and yes, it's my fault, it's a bug in code I wrote -- https:\u002F\u002Fandroid.googlesource.com\u002Fplatform\u002Ftools\u002Fmetalava\u002F+\u002F957c774b622d06b29c4c59e48db59e2e7f2ae734\u002Fsrc\u002Fmain\u002Fjava\u002Fcom\u002Fandroid\u002Ftools\u002Fmetalava\u002Fmodel\u002Fpsi\u002FPsiModifierItem.kt#230). This also picks up mentions of @deprecated in things like {@code} blocks which it should not. This bug has gone undetected for years... For now it's solved by using escapes to trick metalava into not recognizing @deprecated, but the proper fix will be to properly tokenize the javadoc (which we do in some other places to resolve relative imports for example.)\r\n\r\nhttps:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002Flr7j9m\u002Fandroid_deprecated_annotation_is_deprecated\u002Fgollfqv?utm_source=share&utm_medium=web2x&context=3",publishedAt:"2021-02-25T05:13:44Z",author:{login:h,url:i,avatarUrl:j}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1758",title:"Jetpack Compose Beta",body:"https:\u002F\u002Fandroid-developers.googleblog.com\u002F2021\u002F02\u002Fannouncing-jetpack-compose-beta.html\r\n\r\nJetpack ComposeがBetaになりました。APIはほぼ安定した状態となり変更や削除はされない予定です。",labels:{nodes:[{name:k,description:c,color:l}]},comments:{totalCount:e,pageInfo:{startCursor:r,endCursor:r,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"https:\u002F\u002Fwww.youtube.com\u002Fplaylist?list=PLWz5rJ2EKKc98J4VE1glWGt5b90VfXZ1e\r\n\r\nこのBetaリリースに合わせて、Jetpack Composeに関する動画がいくつか公開されています。",publishedAt:"2021-02-26T00:50:52Z",author:{login:"STAR-ZERO",url:"https:\u002F\u002Fgithub.com\u002FSTAR-ZERO",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F376376?u=c9428e145dea238d8dec3e06ef275be6b59a77b8&v=4"}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1759",title:"Jetpack ComposeのAndroid Dev Challengeが開催",body:"https:\u002F\u002Fandroid-developers.googleblog.com\u002F2021\u002F02\u002Fandroid-dev-challenge-lift-off-with.html\r\n\r\n4週に渡ってJetpack Composeに関するAndroid Dev Challengeが開催されます。毎週違ったお題が出されます。\r\nPixel5を含む何かしらの賞品がもらえる可能性があります。",labels:{nodes:[{name:k,description:c,color:l}]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1760",title:"Dagger 2.33",body:"https:\u002F\u002Fgithub.com\u002Fgoogle\u002Fdagger\u002Freleases\u002Ftag\u002Fdagger-2.33\r\n\r\nHiltがBetaになりました",labels:{nodes:[]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1761",title:"Android向けSleep APIの紹介",body:"https:\u002F\u002Fandroid-developers.googleblog.com\u002F2021\u002F02\u002Flow-power-sleep-tracking-on-android.html\r\n",labels:{nodes:[]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1762",title:"Jetpack Composeを使ったデザインシステム",body:"https:\u002F\u002Fjitinsharma.in\u002Fposts\u002Fcomposing-a-design-system\u002F\r\n\r\nTypography、Color、Shapeなどの基本的な使い方について解説しています",labels:{nodes:[{name:k,description:c,color:l}]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F1763",title:"DroidKaigi 2021のアプリ公開",body:"https:\u002F\u002Fgithub.com\u002FDroidKaigi\u002Fconference-app-2021",labels:{nodes:[]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}}]}},title:"#161 2021-02-28"}],fetch:{},mutations:[]}}(false,null,"",0,1,"reddit","d93f0b","yshrsmz","https:\u002F\u002Fgithub.com\u002Fyshrsmz","https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F654889?v=4","Jetpack Compose","006b75","AndroidStudio","9BC363","Y3Vyc29yOnYyOpHOLtOWfg==","Y3Vyc29yOnYyOpHOLtOVIQ==","Y3Vyc29yOnYyOpHOLtOTBA==","Y3Vyc29yOnYyOpHOLt53fw==")));