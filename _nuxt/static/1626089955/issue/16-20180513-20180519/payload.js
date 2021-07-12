__NUXT_JSONP__("/issue/16-20180513-20180519", (function(a,b,c,d,e,f,g,h,i,j,k,l,m){return {data:[{milestone:{id:"MDk6TWlsZXN0b25lMzM0MTc3NA==",number:16,url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fmilestone\u002F16",title:"16-20180513-20180519",description:c,closedAt:"2018-05-20T10:53:48Z",issues:{totalCount:9,pageInfo:{startCursor:"Y3Vyc29yOnYyOpLPgAAAAAAAA4POE1j3bQ==",endCursor:"Y3Vyc29yOnYyOpLPgAAAAAAAAGPOE0eC2Q==",hasPreviousPage:a,hasNextPage:a},nodes:[{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F214",title:"LiveDataにStream API的なオペレータを追加する",body:"https:\u002F\u002Fmedium.com\u002F@henrytao\u002Fchaining-livedata-like-rxjava-with-kotlin-extension-e3a2c15ac11\r\n\r\nこんな感じ。\r\n\r\n```kotlin\r\nval liveData: MutableLiveData\u003CBoolean\u003E = MutableLiveData()\r\nliveData\r\n  .distinct()\r\n  .filter { it == false }\r\n  .map { true }\r\n  .nonNull()\r\n  .observe(lifecycleOwner, { result -\u003E\r\n    \u002F\u002F result is non-null and always true\r\n  })\r\n ```\r\n\r\n拡張関数と`MediatorLiveData` で実現しているようです",labels:{nodes:[{name:f,description:c,color:g}]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F213",title:"Dagger 2 は複雑すぎるという主張とそれに対する擁護および反論",body:"\u003Cblockquote class=\"twitter-tweet\" data-lang=\"en\" data-theme=\"light\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EWhatever philosophical or technical issues Dagger 2 was created to address, it did so at the cost of the things that made Guice \u002F Dagger 1 so easy to understand and use. The amount of time I spend munging with Dagger 2 configuration is 10x what I spent with Guice \u002F D1.\u003C\u002Fp\u003E&mdash; Rob Dickerson (@rcdickerson) \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Frcdickerson\u002Fstatus\u002F997236482351009792?ref_src=twsrc%5Etfw\"\u003EMay 17, 2018\u003C\u002Fa\u003E\u003C\u002Fblockquote\u003E\r\n\r\nちょっと長いですが、flavour ごとに component を切り替える話に始まって、それぞれの主張が入り混じっておもしろいです。ちなみに、RobもJakeもPyもRayもSquareで働いていたようです（時期が重なっているか分かりませんが）。",labels:{nodes:[]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F212",title:"KotlinでService Locatorパターンをするスニペット",body:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Fandroiddev\u002Fcomments\u002F8k6bal\u002Fgist_the_poor_mans_dagger_example_how_to\u002F\r\n\r\n一般に Service Locator はそれほどよくないとされているようですが、ご参考までに。\r\n\r\nところで、reified type を使うと、型チェックやクラス型のオブジェクトを渡したり、といったことがなくなるのはいいですね。",labels:{nodes:[{name:"reddit",description:c,color:"d93f0b"}]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F211",title:"Androidのホーム画面とナビゲーションUIの変遷",body:"https:\u002F\u002Fmedium.com\u002Fgoogle-design\u002Fevolution-of-android-homescreen-and-navigation-bad189d536f2\r\n\r\n開発からはちょっと外れますが、こうして見てみるとかなり変わっていますね",labels:{nodes:[]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F210",title:"targetSdkVersionを26以上にするときに考慮すること",body:"http:\u002F\u002Fy-anz-m.blogspot.jp\u002F2018\u002F05\u002Fio-recap-migrate-your-existing-app-to.html\r\n\r\n新規アプリだったら2018年8月以降のリリースで、既存アプリは2018年11月以降のアップデートで`targetSdkVersion \u003E= 26` が求められます。\r\n\r\nいろいろやることがあるので頑張りましょう 💪 ",labels:{nodes:[{name:"Google I\u002FO",description:c,color:"ac03bf"}]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F209",title:"Moshi v1.6.0はKotlinのコードを生成する",body:"https:\u002F\u002Fmedium.com\u002F@sweers\u002Fexploring-moshis-kotlin-code-gen-dec09d72de5e\r\n\r\n\"Kotlinから使いやすいJavaコード\"ではなく、\"Kotlinで書かれたコード\"を生成するようです。\r\nこのお陰でリフレクションを利用せずよくなり、サイズが大きいことで有名な(2.8MBくらい？) `kotlin-reflect`を使う必要がなくなりました。\r\n\r\n今までMoshiのKotlinサポートにはジェネリクス周りで不具合があり、[Kotshi](https:\u002F\u002Fgithub.com\u002Fansman\u002Fkotshi)というJsonAdapter生成ライブラリが使われていましたが、これでMoshi単体で使えるようになりそうです。\r\n\r\nKotlinのコード生成には[KotlinPoet](https:\u002F\u002Fgithub.com\u002Fsquare\u002Fkotlinpoet)というライブラリを使っています。\r\nKotlinのコードを生成するアノテーションプロセッサも今後増えていきそうですね 😇 ",labels:{nodes:[{name:f,description:c,color:g}]},comments:{totalCount:e,pageInfo:{startCursor:h,endCursor:h,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"ちなみにMoshiは[Jake氏のペットのフレンチブルドッグ](https:\u002F\u002Ftwitter.com\u002FMoshiFrenchie)の名前",publishedAt:"2018-05-18T00:23:44Z",author:{login:i,url:j,avatarUrl:k}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F208",title:"Chicago Robot 2018 のセッション動画が公開されたようです",body:"https:\u002F\u002Fchicagoroboto.com\u002Fsession-videos\u002F\r\n\r\nまだすべては出揃っていませんが、じきに揃うと思います。Jake の Picasso のセッションが楽しみ。",labels:{nodes:[]},comments:{totalCount:d,pageInfo:{startCursor:b,endCursor:b,hasPreviousPage:a,hasNextPage:a},nodes:[]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F207",title:"CookpadがminSdkVersionを21に",body:"http:\u002F\u002Ftechlife.cookpad.com\u002Fentry\u002F2018-05-15-android-minsdkversion-21\r\n\r\n\r\nこういう大きめのところも上げてくれると説得しやすい感ありますね。\r\n\r\n",labels:{nodes:[]},comments:{totalCount:e,pageInfo:{startCursor:l,endCursor:l,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"minSdkVersion の決め方も詳しく載っていていいですね。ぼくも 21 にしたいです。",publishedAt:"2018-05-17T14:01:00Z",author:{login:"hkurokawa",url:"https:\u002F\u002Fgithub.com\u002Fhkurokawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6446183?v=4"}}]}},{url:"https:\u002F\u002Fgithub.com\u002FAndroidDagashi\u002FAndroidDagashi\u002Fissues\u002F206",title:"JakeがFlutter（Flutterとは言っていない）が I\u002FO で大きく取り上げられたことに疑義を呈しているようです",body:"\u003Cblockquote class=\"twitter-tweet\" data-lang=\"en\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EAnother I\u002FO with tons of questions to the Android framework and UI toolkit teams about building apps with an &quot;alternative&quot; framework. (1\u002F7)\u003C\u002Fp\u003E&mdash; Jake Wharton (@JakeWharton) \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002FJakeWharton\u002Fstatus\u002F996080298478665733?ref_src=twsrc%5Etfw\"\u003EMay 14, 2018\u003C\u002Fa\u003E\u003C\u002Fblockquote\u003E\r\n\r\n\r\n明言はしていませんが Skia と言っているし Flutter に見えます。感情的な強い反発に対して「いつ Flutter と言った？やり直し」と返しているところは、さすがだなと思いましたw\r\nhttps:\u002F\u002Ftwitter.com\u002FJakeWharton\u002Fstatus\u002F996356491190980608\r\n\r\n個人的には、自分も Web を進化させる方が筋が良いと思っていますが、どうでしょうね。クロスプラットフォームとホットリロードへの強い要求はよく分かります。",labels:{nodes:[{name:"Flutter",description:c,color:"1591E5"},{name:"X-Plat",description:c,color:"efd4a0"}]},comments:{totalCount:e,pageInfo:{startCursor:m,endCursor:m,hasPreviousPage:a,hasNextPage:a},nodes:[{body:"「AndroidとChromeの話だけど？」って言ってる箇所もあったりして、なかなか釣り上手ですねｗ\r\n\u003Cblockquote class=\"twitter-tweet\" data-lang=\"ja\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EWho mentioned Flutter? I&#39;m talking about Android and Chrome.\u003C\u002Fp\u003E&mdash; Jake Wharton (@JakeWharton) \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002FJakeWharton\u002Fstatus\u002F996090243605516288?ref_src=twsrc%5Etfw\"\u003E2018年5月14日\u003C\u002Fa\u003E\u003C\u002Fblockquote\u003E",publishedAt:"2018-05-17T06:09:23Z",author:{login:i,url:j,avatarUrl:k}}]}}]}},title:"#16-20180513-20180519"}],fetch:{},mutations:[]}}(false,null,"",0,1,"Kotlin","EC953C","Y3Vyc29yOnYyOpHOFz_ERA==","yshrsmz","https:\u002F\u002Fgithub.com\u002Fyshrsmz","https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F654889?v=4","Y3Vyc29yOnYyOpHOFz0MkA==","Y3Vyc29yOnYyOpHOFzszBg==")));