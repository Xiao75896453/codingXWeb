$(function () {
    var disease = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    var drug = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: disease
    });
    $(".drugs").autocomplete({
        source: disease
    });
    $(".addIcon").click(function () {
        $("#addInput").append(
            '<div class="inline width100 newInputRow">\
            <div class= "newCol1 tcenter">\
            <input class="tcenter downLine drugs newInput2" id="" type="text" name="">\
                                </div>\
            <div class="newCol2 hcenter">\
                <div class="col-lg-6">\
                    <input type="text" class="justAnInputBox" placeholder="" />\
                </div>\
            </div>\
            <div class="newCol3 hcenter">\
                <div class="col-lg-6">\
                    <input type="text" class="justAnotherInputBox" placeholder="" />\
                </div>\
            </div>\
            <div class="newCol4 tcenter">\
                <input class="tcenter downLine newInput2" id="" type="text" name="">\
                                </div>\
                <div class="newCol5 tcenter">\
                    <input class="downLine newInput2" id="" type="text" name="">\
                                </div>\
                    <div class="newCol6 tcenter vcenter">\
                        <img class="modeIcon addIcon dpShadow" id="addIcon" src="assets/src/add.png"\
                            alt="add">\
                                </div>\
                    </div>');
    });
    $("#searchBtn").click(function () {

    });
    $("#makeBtn").click(function () {

    });


});

var lcol = 0;
$("#searchBtn").click(function () {
    if (window.lcol != 1) {
        document.getElementById("searchBtn").style.backgroundColor = "rgb(128, 162, 255)";
        document.getElementById("searchBtn").style.color = "white";
        document.getElementById("makeBtn").style.backgroundColor = "white";
        document.getElementById("makeBtn").style.color = "black";
        window.lcol = 1;
    }

});
$("#makeBtn").click(function () {
    if (window.lcol != 2) {
        document.getElementById("searchBtn").style.backgroundColor = "white";
        document.getElementById("searchBtn").style.color = "black";
        document.getElementById("makeBtn").style.backgroundColor = "rgb(128, 162, 255)";
        document.getElementById("makeBtn").style.color = "white";
        window.lcol = 2;
    }

});
var mode = 0;
$("#newBtn").click(function () {
    if (window.mode != 1) {
        document.getElementById("newBtn").style.borderBottom = "5px rgb(128, 162, 255) solid";
        document.getElementById("hisBtn").style.borderBottom = "0";
        window.mode = 1;
    }

});
$("#hisBtn").click(function () {
    if (window.mode != 2) {
        document.getElementById("newBtn").style.borderBottom = "0";
        document.getElementById("hisBtn").style.borderBottom = "5px rgb(128, 162, 255) solid";
        window.mode = 2;
    }

});

var SampleJSONData = [
    {
        id: 0,
        title: '早上'
    }, {
        id: 1,
        title: '中午',
    }, {
        id: 2,
        title: '晚上'
    }, {
        id: 3,
        title: '睡前'
    },
];

var comboTree1, comboTree2;

jQuery(document).ready(function ($) {

    comboTree1 = $('.justAnInputBox').comboTree({
        source: SampleJSONData,
        isMultiple: true
    });
    comboTree2 = $('.justAnotherInputBox').comboTree({
        source: SampleJSONData,
        isMultiple: false
    });
});

