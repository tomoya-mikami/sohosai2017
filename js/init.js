/*ラジオタイムテーブル用変数*/
var radio_daymode = 0;
var radio_daypage = 0;
var theater_daymode = 0;
var theater_daypage = 0;
var input_table;
var program_num;

$(function () {
    $("#top").vegas({
        overlay: true,
        transition: 'flash',
        transitionDuration: 2000,
        delay: 10000,
        animation: 'fade1',
        animationDuration: 20000,
        slides: [
            { src: './img/pictures-edited/pic1.png' },
            { src: './img/pictures-edited/pic2.png' },
            { src: './img/pictures-edited/pic3.png' },
            { src: './img/pictures-edited/pic4.png' },
            { src: './img/pictures-edited/pic5.png' },
            { src: './img/pictures-edited/pic6.png' },
        ]
    });

    /*ラジオのページを変える関数*/
    /*日付を変える*/
    $(document).on("click", "#r_daychange_R", function () {
        radio_daymode += 1;
        radio_table();
        var $r_daychange_button = $("#r_daychange_button");
        $r_daychange_button.html("<div id=\"r_daychange_L\"><img src=\"img/pictures-edited/menew-left.png\" class=\"change_arrowL\"></div>");
    });
    $(document).on("click", "#r_daychange_L", function () {
        radio_daymode -= 1;
        radio_table();
        var $r_daychange_button = $("#r_daychange_button");
        $r_daychange_button.html("<div id=\"r_daychange_R\"><img src=\"img/pictures-edited/menew-right.png\" class=\"change_arrowR\"></div>");
    });

    /*ページを変える*/
    $(document).on("click", "#r_pagechange_R", function () {
        radio_daypage += 1;
        radio_table();
        var $r_daychange_button = $("#r_pagechange_button");
        if (radio_daypage < program_num - 1) {
            $r_daychange_button.html("<div id=\"r_pagechange_L\"><img src=\"img/pictures-edited/menew-left.png\" class=\"change_arrowL\"></div> <div id=\"r_pagechange_R\"><img src=\"img/pictures-edited/menew-right.png\" class=\"change_arrowR\"></div>");
        } else {
            $r_daychange_button.html("<div id=\"r_pagechange_L\"><img src=\"img/pictures-edited/menew-left.png\" class=\"change_arrowL\"></div>");
        }
    });
    $(document).on("click", "#r_pagechange_L", function () {
        radio_daypage -= 1;
        radio_table();
        var $r_daychange_button = $("#r_pagechange_button");
        if (radio_daypage > 0) {
            $r_daychange_button.html("<div id=\"r_pagechange_L\"><img src=\"img/pictures-edited/menew-left.png\" class=\"change_arrowL\"></div> <div id=\"r_pagechange_R\"><img src=\"img/pictures-edited/menew-right.png\" class=\"change_arrowR\"></div>");
        } else {
            $r_daychange_button.html("<div id=\"r_pagechange_R\"><img src=\"img/pictures-edited/menew-right.png\" class=\"change_arrowR\"></div>");
        }
    });
    /*内プロのページを変える関数*/
    /*日付を変える*/
    $(document).on("click", "#t_daychange_R", function () {
        theater_daymode += 1;
        theater_table();
        var $t_daychange_button = $("#t_daychange_button");
        $t_daychange_button.html("<div id=\"t_daychange_L\"><img src=\"img/pictures-edited/menew-left-black.png\" class=\"change_arrowL\"></div>");
    });
    $(document).on("click", "#t_daychange_L", function () {
        theater_daymode -= 1;
        theater_table();
        var $t_daychange_button = $("#t_daychange_button");
        $t_daychange_button.html("<div id=\"t_daychange_R\"><img src=\"img/pictures-edited/menew-right-black.png\" class=\"change_arrowR\"></div>");
    });

});

// 0 だったら 00 にするやつ
function pp(n) { //pretty print
    if (n == 0) {
        return "00";
    } else {
        return n.toString();
    }
}

/*ラジオのタイムテーブルを10件づつだす関数*/
function radio_table() {
    var radiott = $("#radiotable");
    var $output_table = $("#radiotable-day");
    var $radiotime = timetable.radio;
    var $elme = $("#radio_day");

    /*テーブルの初期化*/
    $output_table.text("");
    /*編集するページを会得*/
    if (radio_daymode % 2 == 0) {
        $elme.text("1日目");
        var input_table = timetable.radio.day1;
    }
    else {
        $elme.text("2日目");
        var input_table = timetable.radio.day2;
    }
    for (i = 0; i < 9; i++) {
        if (radio_daypage * 9 + i > input_table.length - 1) break;
        else {
            var $row = $("<tr></tr>");
            console.log(input_table[radio_daypage * 9 + i].name);
            /*nameがあまりにも長い時の判定*/
            if (input_table[radio_daypage * 9 + i].name.length > 42) {
                $row.append("<td class=\"white-fontD\">" + input_table[radio_daypage * 9 + i].name + "</td>");
            } else {
                $row.append("<td>" + input_table[radio_daypage * 9 + i].name + "</td>");
            }
            $row.append("<td>" + pp(input_table[radio_daypage * 9 + i].hour) + ":" + pp(input_table[radio_daypage * 9 + i].start_minute) + "</td>");
            $row.append("<td>" + pp(input_table[radio_daypage * 9 + i].hour) + ":" + pp(input_table[radio_daypage * 9 + i].end_minute) + "</td>");
            $output_table.append($row);
        }
    }
    page_num();
    var $page = $("#r_page_count");
    $page.text((radio_daypage + 1) + "/" + program_num);
}

/*プログラムからページ数を決める関数*/
function p_num_calc(table) {
    if (table.length % 9 == 0) {
        program_num = parseInt(table.length / 9);
    } else {
        program_num = parseInt(table.length / 9 + 1);
    }
}
function page_num() {
    if (radio_daymode % 2 == 0) {
        p_num_calc(timetable.radio.day1);
    }
    else {
        p_num_calc(timetable.radio.day2);
    }
}

/*内プロページ作成関数*/
function theater_table() {
    var theatertt = $("#theatertable");
    var $output_table = $("#theatertable-day");
    var $theatertime = timetable.theater;
    var $elme = $("#theater_day");

    /*テーブルの初期化*/
    $output_table.text("");
    /*編集するページを会得*/
    if (theater_daymode % 2 == 0) {
        $elme.text("1日目");
        var input_table = timetable.theater.day1;
    }
    else {
        $elme.text("2日目");
        var input_table = timetable.theater.day2;
    }
    for (i = 0; i < 9; i++) {
        if (i>input_table.length - 1) break;
        else {
            var $row = $("<tr></tr>");
            console.log(input_table[i].program);
            $row.append("<td>" + input_table[i].program + "</td>");
            $row.append("<td>" + pp(input_table[i].hour) + ":" + pp(input_table[i].start_minute) + "</td>");
            $row.append("<td>" + pp(input_table[i].hour) + ":" + pp(input_table[i].end_minute) + "</td>");
            $output_table.append($row);
        }
    }
}
