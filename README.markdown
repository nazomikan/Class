<a name="README">[Class](http://github.com/nazomikan/Class)</a>
=======
**javascriptでクラシカル構文をサポートするライブラリ**

アクセス修飾子(public/private)をもったクラスライクな構文を提供してくれます

そのうち継承とかにも対応します。
そのうち。

****

* [はじめに](#Usage)
* [提供するAPI](#TheAPI)
* [使い方](#Howto)

****

## <a name="Usage">はじめに</a>

Class.jsを読み込みます 

    <script type="text/javascript" src="/path/to/Class.js"></script>


## <a name="TheAPI">提供するAPI</a>

Class.jsが提供するAPI

* `Class` コンストラクタが定義できます
* `release` クラス名を定義できます(どの名前空間に定義するかを指定することもできます)
* `publics` 公開するAPIを定義することができます
* `privates` 非公開なAPIを定義することができます

## <a name="Howto">使い方</a>
こんなかんじ

    Class(function (name) {
        this.name = name;
    }).release(
        "HogeClass"
    ).publics({
        getName: function() {
            console.log(this.name);
        },
        callPrivateMethod: function () {
            this.privateMethod();
        }
    }).privates({
        privateMethod: function () {
            console.log('call privateMethod')
        }
    });

    var hoge = new HogeClass("tarou");
    hoge.getName(); // tarou
    hoge.callPrivateMethod(); // call privateMethod
    hoge.privateMethod(); // reference error


