<a name="README">[Class](http://github.com/nazomikan/Class)</a>
=======
**javascriptでクラシカル構文をサポートするライブラリ**

アクセス修飾子(public/private)をもったクラスライクな構文を提供してくれます

そのうち継承とかコンストラクタ引数とかにも対応します。
そのうち。

****

* [はじめに](#Usage)
* [提供するAPI](#TheAPI)
* [使い方](#Howto)

****

## <a name="Usage">Usage</a>

Class.jsを読み込みます 

        <script type="text/javascript" src="/path/to/Class.js"></script>


## <a name="TheAPI">The API</a>

Class.jsが提供するAPI

* `Class` コンストラクタが定義できます
* `export` クラス名を定義できます(どの名前空間に定義するかを指定することもできます)
* `public` 公開するAPIを定義することができます
* `private` 非公開なAPIを定義することができます

## <a name="Howto">使い方</a>
こんなかんじ

    Class(function () {
            this.name = "tarou"
        }).export(
            "HogeClass"
        ).public({
            getName: function() {
                console.log(this.name);
            },
            callPrivateMethod: function () {
                this.privateMethod();
            }
        }).private({
            privateMethod: function () {
                console.log('call privateMethod')
            }
        });

        var hoge = new HogeClass();
        hoge.getName(); // tarou
        hoge.callPrivateMethod(); // call privateMethod
        hoge.privateMethod(); // reference error


