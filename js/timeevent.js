// trueにすると日付チェックを無効化でき、SOHO祭当日でなくとも動作します
var debug = true;

function timeradio(arr) {
    var now = new Date();
    var $radionow = $("#radionow");
    var $radiointoroduce = $('#radiointoroduce');
    if (debug) {
        var tt = timetable.radio.day1;
    } else {
        if (now.getMonth() == 10) {
            switch (now.getDate()) {
                case 5:
                    var tt = timetable.radio.day1;
                    break;
                case 6:
                    var tt = timetable.radio.day2;
                    break;
            }
        }
        if (!tt) {
            $radionow.text("雙峰祭当日をお待ちください！");
            return;
        }
    }

    var text;
    var intro;

    $.each(tt, function (i, program) {
        if (now.getHours() == program.hour) {
            if (now.getMinutes() >= program.start_minute &&
                now.getMinutes() <= program.end_minute) {
                text = program.name;
                intoro = program.description;
                console.log(program.description)
            }
        }
    });

    if (text) {
        $radionow.text(text);
        $radiointoroduce.text(intoro);
        console.log(intoro);
    } else {
        $radionow.text("現在放送中の番組はありません")
    }
}
/*現在放送中の内プロ作品*/
function timertheater(arr) {
    var now = new Date();
    var $theaternow = $("#theaternow");
    var now_id = 0;
    var t_program = timetable.theater.theater_program;
    console.log(t_program[0].content1);
    if (debug) {
        var tt = timetable.theater.day1;
    } else {
        if (now.getMonth() == 10) {
            switch (now.getDate()) {
                case 5:
                    var tt = timetable.theater.day1;
                    break;
                case 6:
                    var tt = timetable.theater.day2;
                    break;
            }
        }
        if (!tt) {
            $theaternow.text("雙峰祭当日をお待ちください！");
            return;
        }
    }

    var text;
    var intro;

    $.each(tt, function (i, program) {
        if (now.getHours() == program.hour) {
            if (now.getMinutes() >= program.start_minute &&
                now.getMinutes() <= program.end_minute) {
                text = (program.program + "幕");
                now_id = program.program;
            }
        }
    });
    console.log("now_id="+now_id);
    var $output_table = $("#now_theater");
    var $row=$("<tr></tr>");
    $row.append("<tr align=\"center\"><td class=\"black-fontC\">~" + t_program[(parseInt(now_id)-1)].type1 + "~</td></tr>");
    $row.append("<tr align=\"center\"><td class=\"black-fontB\">" + t_program[(parseInt(now_id)-1)].content1 + "</td></tr>");
    $row.append("<tr align=\"center\"><td class=\"black-fontC\">~" + t_program[(parseInt(now_id)-1)].type2 + "~</td></tr>");
    $row.append("<tr align=\"center\"><td class=\"black-fontB\">" + t_program[(parseInt(now_id)-1)].content2 + "</td></tr>");
    $row.append("<tr align=\"center\"><td class=\"black-fontC\">~" + t_program[(parseInt(now_id)-1)].type3 + "~</td></tr>");
    $row.append("<tr align=\"center\"><td class=\"black-fontB\">" + t_program[(parseInt(now_id)-1)].content3 + "</td></tr>");
    $row.append("<tr align=\"center\"><td class=\"black-fontC\">~" + t_program[(parseInt(now_id)-1)].type4 + "~</td></tr>");
    $row.append("<tr align=\"center\"><td class=\"black-fontB\">" + t_program[(parseInt(now_id)-1)].content4 + "</td></tr>");
    $output_table.append($row);
    if (text) {
        $theaternow.text(text);
    } else {
        $theaternow.text("現在放送中の番組はありません")
    }
}