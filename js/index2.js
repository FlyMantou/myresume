var renderWidth = 1000;
var renderHeight = 300;
var div;


var staffType = 0;//0,双谱表，1,高音单谱表，2,低音单谱表，3,中音单谱表
var showStaff = true;
var showKeysig = true;
var showTimesig = true;
var notes1 = [];
var notes2 = [];
var stave1clef = "treble";
var stave2clef = "bass";
var stave1timesig = "4/4";
var stave2timesig = "4/4";
var stave1keysig = "C";
var stave2keysig = "C";
var stave1left = 0;
var stave1top = 40;
var stave1width = 1000;
var stave2left = 0;
var stave2top = 130;
var stave2width = 1000;

var renderer;
var context;
var stave1;
var stave2;
VF = Vex.Flow;

var addStave1Barline = false;
var addStave2Barline = false;
var barLineX = 0;

var selectIndex1 = -1;//第一行普选中状态音符指针，为实现高亮
var selectIndex2 = -1;//第二行谱选中状态音符指针，为实现高亮

$(document).ready(function () {




    div = document.getElementById("boo");


    //var note = new VF.StaveNote({clef: stave1clef, keys: ["c/4"], duration: "w"})
    // .addAccidental(0, new VF.Accidental("n"))
    // .addDotToAll().addDotToAll();

    //notes1.push(note);

    createStaff();


    $("#show_staff").click(function () {
        showStaff = true;
        createStaff()
    });
    
    $("#hide_staff").click(function () {
        showStaff = false;
        createStaff()
    });
    $("#tb_staff").click(function () {
        staffType = 0;
        createStaff()
    });
    $("#t_staff").click(function () {
        staffType = 1;
        createStaff()
    });
    $("#b_staff").click(function () {
        staffType = 2;
        createStaff()
    });
    $("#a_staff").click(function () {
        staffType = 3;
        createStaff()
    });

    $("#key0").click(function () {
        stave1keysig = "C";
        stave2keysig = "C";
        createStaff()
    });
    $("#key1b").click(function () {
        stave1keysig = "F";
        stave2keysig = "F";
        createStaff()
    });
    $("#key2b").click(function () {
        stave1keysig = "Bb";
        stave2keysig = "Bb";
        createStaff()
    });
    $("#key3b").click(function () {
        stave1keysig = "Eb";
        stave2keysig = "Eb";
        createStaff()
    });
    $("#key4b").click(function () {
        stave1keysig = "Ab";
        stave2keysig = "Ab";
        createStaff()
    });
    $("#key5b").click(function () {
        stave1keysig = "Db";
        stave2keysig = "Db";
        createStaff()
    });
    $("#key6b").click(function () {
        stave1keysig = "Gb";
        stave2keysig = "Gb";
        createStaff()
    });
    $("#key7b").click(function () {
        stave1keysig = "Cb";
        stave2keysig = "Cb";
        createStaff()
    });

    $("#key1s").click(function () {
        stave1keysig = "G";
        stave2keysig = "G";
        createStaff()
    });
    $("#key2s").click(function () {
        stave1keysig = "D";
        stave2keysig = "D";
        createStaff()
    });
    $("#key3s").click(function () {
        stave1keysig = "A";
        stave2keysig = "A";
        createStaff()
    });
    $("#key4s").click(function () {
        stave1keysig = "E";
        stave2keysig = "E";
        createStaff()
    });
    $("#key5s").click(function () {
        stave1keysig = "B";
        stave2keysig = "B";
        createStaff()
    });
    $("#key6s").click(function () {
        stave1keysig = "F#";
        stave2keysig = "F#";
        createStaff()
    });
    $("#key7s").click(function () {
        stave1keysig = "C#";
        stave2keysig = "C#";
        createStaff()
    });
    $("#show_timesig").click(function () {
        showTimesig = true;
        stave1timesig = $("#timesig_input").val();
        stave2timesig = $("#timesig_input").val();
        createStaff()
    });
    $("#hide_timesig").click(function () {
        showTimesig = false;
        createStaff()
    });

    var noteChoose;
    var acc;
    var dot;

    var lineChoose = "1";
    var accChoose = "0";
    var dotChoose = "0";



    //按钮点击事件
    $("#up").click(function () {
        getChoose();
        note = lineChoose==="1"?notes1[selectIndex1]:notes2[selectIndex2];
        if (note!==undefined){
            var type = note.duration;
            var keys = note.getKeys();
            var change = getUpOrDownNoteName(keys[0],"up",1);
            var noteName = keys[0].charAt(0);
            var octave = keys[0].charAt(keys[0].length-1);
            var cKey = (keys[0].replace(noteName,change.charAt(0)));
            cKey = (cKey.replace(octave,change.charAt(1)));
            note1 = new VF.StaveNote({clef: lineChoose==="1"?stave1clef:stave2clef, keys: [cKey], duration: type});
            if (lineChoose==="1"){
                notes1[selectIndex1] = note1;
            }else {
                notes2[selectIndex2] = note1;
            }

        }
        createStaff();
    });
    $("#down").click(function () {
        getChoose();
        var note = lineChoose==="1"?notes1[selectIndex1]:notes2[selectIndex2];
        if (note!==undefined){
            var type = note.duration;
            console.log(type);
            var keys = note.getKeys();
            var change = getUpOrDownNoteName(keys[0],"down",1);
            var noteName = keys[0].charAt(0);
            var octave = keys[0].charAt(keys[0].length-1);
            var cKey = (keys[0].replace(noteName,change.charAt(0)));
            cKey = (cKey.replace(octave,change.charAt(1)));
            note1 = new VF.StaveNote({clef: lineChoose==="1"?stave1clef:stave2clef, keys: [cKey], duration: type});
            if (lineChoose==="1"){
                notes1[selectIndex1] = note1;
            }else {
                notes2[selectIndex2] = note1;
            }

        }
        createStaff();
    });
    $("#left").click(function () {

    });
    $("#right").click(function () {

    });
    $("#cursor_left").click(function () {
        getChoose();
        if (lineChoose==="1"){
            if (selectIndex1===-1){
                return;
            }
            selectIndex1--;
        }else {
            if (selectIndex2===-1){
                return;
            }
            selectIndex2--;
        }
        createStaff();
    });
    $("#cursor_right").click(function () {
        getChoose();

        if (lineChoose==="1"){
            if (selectIndex1===notes1.length-1){
                return;
            }
            selectIndex1++;
        }else {
            if (selectIndex2===notes2.length-1){
                return;
            }
            selectIndex2++;
        }

        createStaff();
    });
    $("#add_note").click(function () {

        getChoose();
        console.log(dotChoose);
        note = new VF.StaveNote({clef: lineChoose==="1"?stave1clef:stave2clef, keys: ["c/4"], duration: noteChoose });

        if (accChoose!=="0"){
            note.addAccidental(0, new VF.Accidental(accChoose));
        }
        if (dotChoose!=="0"){
            if (dotChoose==="1"){
                note.addDotToAll();
            }else if (dotChoose==="2"){
                note.addDotToAll().addDotToAll();
            }else {
                console.log("出错");
            }
        }
        if (lineChoose==="1"){
            selectIndex1 = notes1.length;
            notes1.push(note);
        }else if(lineChoose==="2"){
            selectIndex1 = notes2.length;
            notes2.push(note);
        }else {
            console.log("出错");
        }

        createStaff();
    });
    $("#remove_note").click(function () {
        getChoose();
        if (lineChoose==="1"){
            notes1.splice(notes1.length-1,1);
        }else {
            notes2.splice(notes2.length-1,1);
        }
        createStaff();
    });
    $("#add_barline").click(function () {
        getChoose();
        console.log(lineChoose);
        if (lineChoose==="1"){
            console.log("----------------");
            addStave1Barline = true;
            //取集合最后一个音符的x坐标
           // barLineX =
        }else {
            addStave2Barline = true;
        }
        createStaff();
    });
    $("#remove_barline").click(function () {

    });


    //公共方法
    function getChoose() {
        accs = $("#acc").find("input");
        $.each(accs,function () {
            v = $(this);
            if (v[0].checked){
                accChoose = v[0].value;
            }
        });

        dots = $("#dot").find("input");
        $.each(dots,function () {
            v = $(this);
            if (v[0].checked){
                dotChoose = v[0].value;
            }
        });

        lines = $("#lines").find("input");
        $.each(lines,function () {
            v = $(this);
            if (v[0].checked){
                lineChoose = v[0].value;
            }
        });
        notes = $("#note_choose").find("input");
        // console.log(notes);
        //no = $("#note_choose");
        $.each(notes,function () {
            v = $(this);
           // console.log(v);
            if (v[0].checked){
                console.log("nihao");
                noteChoose = v[0].value;
            }
        });
    }

    function getUpOrDownNoteName(key,direction,step) {
       // console.log(key);
        var dic = ["c","d","e","f","g","a","b"];

        var noteName = key.charAt(0);
        var octave = key.charAt(key.length-1);
        var time = 0;
        var stepIndex = 0;
        var isStart = false;
        var noteNameResult;
        var octaveResult = parseInt(octave);
        if (direction=="up"){
            for (var x=0;x<dic.length;x++){
                //console.log("-----------------x---------------"+x);
                var value = dic[x];
                if (stepIndex==step){
                    noteNameResult = value;
                    octaveResult += time;
                    break;
                }
                if (noteName==value){
                   // console.log("value-->"+value);
                    isStart = true;
                }
                if (isStart){
                   // console.log("x-->"+x);
                    stepIndex++;
                }
                if (x==dic.length-1){
                    x=0;
                    time++;
                }
            }
        }else {
            for (var x=dic.length-1;x>=0;x--){
                var value = dic[x];
                if (stepIndex==step){
                    noteNameResult = value;
                    octaveResult += time;
                    break;
                }
                if (noteName==value){
                    isStart = true;
                }
                if (isStart){
                    stepIndex++;
                }
                if (x==0){
                    x=dic.length-1;
                    time--;

                }
            }
        }


       // console.log(noteNameResult+""+octaveResult);
        return noteNameResult+""+octaveResult;
    }

});


function createStaff() {
    var cxt=div.getContext("2d");
    renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
    renderer.resize(renderWidth, renderHeight);
    context = renderer.getContext();

    switch (staffType){
        case 0://高低音双谱表
            stave1clef = "treble";
            stave2clef = "bass";
            break;
        case 1://高音谱表
            stave1clef = "treble";
            break;
        case 2://低音谱表
            stave1clef = "bass";
            break;
        case 3://中音谱表
            stave1clef = "alto";
            break;
    }

    stave1 = new VF.Stave(stave1left, stave1top, stave1width,{fill_style:'#000000',left_bar: false,right_bar:false});
    stave1.addClef(stave1clef);
    if (showTimesig){//显示拍号
        stave1.addTimeSignature(stave1timesig);
    }
    if (showKeysig){
        stave1.addKeySignature(stave1keysig)
    }
    VF.Formatter.FormatAndDraw(context, stave1, notes1);
    notes1.forEach(function (v,i,a) {
        v.setContext(context).draw();
       // console.log(b.getBoundingBox());
        console.log(selectIndex1);

    });

    stave1.setTempo(100,100);



    if (!showStaff){
        stave1.setNumLines(0);
    }
    stave1.setContext(context).draw();



    if (staffType===0){
        stave2 = new VF.Stave(stave2left, stave2top, stave2width,{fill_style:'#000000',left_bar: false,right_bar:false});
        stave2.addClef(stave2clef);
        if (showTimesig){//显示拍号
            stave2.addTimeSignature(stave2timesig);
        }
        if (showKeysig){
            stave2.addKeySignature(stave2keysig)
        }
        if (!showStaff){
            stave2.setNumLines(0);
        }
        stave2.setContext(context).draw();

        VF.Formatter.FormatAndDraw(context, stave2, notes2);
        notes2.forEach(function (v,i,a) {
            console.log(i);
            v.setContext(context).draw()
        });
    }

    if (addStave1Barline){
        console.log("增加小节线");
        stave1.drawVerticalBarFixed(500);
        addStave1Barline = false;
    }else if (addStave2Barline){
        stave2.drawVerticalBarFixed(100);
        addStave2Barline = false;
    }

    startX = stave1.getNoteStartX();
    endX = stave1.getNoteEndX();
    getTopLineTopY = stave1.getTopLineTopY();
    getModifierXShift = stave1.getModifierXShift();
    x = stave1.getX();

    tieStartX = stave1.getTieStartX();
    tieEndX = stave1.getTieEndX();

    notes1.forEach(function (v,i,a) {
        if (i===selectIndex1){
            bound = v.getBoundingBox();
            cxt.fillStyle="rgba(0,134,139,0.8)";
            console.log(bound.x);
            console.log(bound.y);
            console.log(bound.w);
            console.log(bound.h);
            cxt.fillRect(bound.x,bound.y,bound.w,bound.h);
            console.log(i);
        }
    });
    notes2.forEach(function (v,i,a) {
        if (i===selectIndex2){
            bound = v.getBoundingBox();
            cxt.fillStyle="rgba(0,0,0,0.5)";
            console.log(bound.x);
            console.log(bound.y);
            console.log(bound.w);
            console.log(bound.h);
            cxt.fillRect(bound.x,bound.y,bound.w,bound.h);
            console.log(i);
        }
    });

    /*cxt.fillStyle="rgba(0,0,0,0.3)";
    cxt.fillRect(startX,stave1top,endX-startX,200);
    cxt.fillStyle="rgba(255,0,0,0.3)";
    cxt.fillRect(getModifierXShift,getTopLineTopY,10,200);*/

}




