$(document).ready(function () {

    var div = document.getElementById("boo");
    VF = Vex.Flow;
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
    renderer.resize(1000, 500);
    var context = renderer.getContext();
    var stave = new VF.Stave(10, 40, 400);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();

    //  var voice = new VF.Voice({num_beats: 4, beat_value: 2});
    $('#btn_quarter_note').click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 800);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();
        /*var notes = [new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"}),
            new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q"}),
            new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr"}),
            new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q"})
        ];

        voice.addTickables(notes);
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 200);
        voice.draw(context, stave);*/


        var notes = [
            new VF.StaveNote({
                clef: "treble",
                keys: ["e##/5"],
                duration: "8d"
            }).addAccidental(0, new VF.Accidental("##")).addDotToAll(),
            new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "16"}).addAccidental(0, new VF.Accidental("b")),
            new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "8"}),
            new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "16"}),
            new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "16"}),
            new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q"}),
            new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q"})
        ];

        var beams = VF.Beam.generateBeams(notes);
        VF.Formatter.FormatAndDraw(context, stave, notes);
        beams.forEach(function (b) {
            b.setContext(context).draw()
        });

        var ties = [
            new VF.StaveTie({
                first_note: notes[4],
                last_note: notes[5],
                first_indices: [0],
                last_indices: [0]
            }),
            new VF.StaveTie({
                first_note: notes[5],
                last_note: notes[6],
                first_indices: [0],
                last_indices: [0]
            })
        ];
        ties.forEach(function (t) {
            t.setContext(context).draw()
        })

        /* var notes = [
             new VF.StaveNote({clef: "treble", keys: ["e##/5"], duration: "8d" }).
             addAccidental(0, new VF.Accidental("##")).addDotToAll(),

             new VF.StaveNote({clef: "treble", keys: ["eb/5"], duration: "16" }).
             addAccidental(0, new VF.Accidental("b")),

             new VF.StaveNote({clef: "treble", keys: ["d/5", "eb/4"], duration: "h" }).
             addDot(0),

             new VF.StaveNote({clef: "treble", keys: ["c/5", "eb/5", "g#/5"], duration: "q" }).
             addAccidental(1, new VF.Accidental("b")).
             addAccidental(2, new VF.Accidental("#")).addDotToAll()
         ];

         VF.Formatter.FormatAndDraw(context, stave, notes);*/
    });
    var notes = [];

    $("#test").click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();


        var note = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "w"});

        notes.push(note);

        VF.Formatter.FormatAndDraw(context, stave, notes);
        notes.forEach(function (b) {
            b.setContext(context).draw()
        });
    });
    $("#test0").click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();


        var note = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "h"});

        notes.push(note);

        VF.Formatter.FormatAndDraw(context, stave, notes);
        notes.forEach(function (b) {
            b.setContext(context).draw()
        });
    });

    $('#test1').click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();


        var note = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"});

        notes.push(note);

        VF.Formatter.FormatAndDraw(context, stave, notes);
        notes.forEach(function (b) {
            b.setContext(context).draw()
        });
    });
    $("#test2").click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();


        var note = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "8d"});

        notes.push(note);

        VF.Formatter.FormatAndDraw(context, stave, notes);
        notes.forEach(function (b) {
            b.setContext(context).draw()
        });
    });
    $("#test3").click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();


        var note = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "16"});

        notes.push(note);

        VF.Formatter.FormatAndDraw(context, stave, notes);
        notes.forEach(function (b) {
            b.setContext(context).draw()
        });
    });
    
    $("#up").click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();

        var note = notes[notes.length-1];
        var type = note.duration;


        if (note!=undefined){
            var keys = note.getKeys();
            var change = getUpOrDownNoteName(keys[0],"up",1);
            //console.log(typeof keys);
           // console.log(keys);
            var noteName = keys[0].charAt(0);
            var octave = keys[0].charAt(keys[0].length-1);

            var cKey = (keys[0].replace(noteName,change.charAt(0)));
            cKey = (cKey.replace(octave,change.charAt(1)));
            var note1 = new VF.StaveNote({clef: "treble", keys: [cKey], duration: type});
            notes[notes.length-1] = note1;
            VF.Formatter.FormatAndDraw(context, stave, notes);
            notes.forEach(function (b) {
                b.setContext(context).draw();
            });
        }
    });
    
    $("#down").click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();

        var note = notes[notes.length-1];
        var type = note.duration;

        if (note!=undefined){
            var keys = note.getKeys();
            var change = getUpOrDownNoteName(keys[0],"down",1);
            console.log("huanghai-->"+change);
          //  console.log(keys);
            var noteName = keys[0].charAt(0);
            var octave = keys[0].charAt(keys[0].length-1);
            var cKey = (keys[0].replace(noteName,change.charAt(0)));
            cKey = (cKey.replace(octave,change.charAt(1)));
            var note1 = new VF.StaveNote({clef: "treble", keys: [cKey], duration: type});

            notes[notes.length-1] = note1;
            VF.Formatter.FormatAndDraw(context, stave, notes);
            notes.forEach(function (b) {
                b.setContext(context).draw()
            });
        }
    });

    $("#clear").click(function () {
        notes = [];
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();


    });
    $("#delete").click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();
        notes.splice(notes.length-1,1);
        VF.Formatter.FormatAndDraw(context, stave, notes);
        notes.forEach(function (b) {
            b.setContext(context).draw()
        });
    });

    
    $("#submit").click(function () {
        var text = $("#input").val();
        console.log("text-->"+text);
        if (text==""){
            return;
        }else {
            var arr = text.split(":");
            var inputType = parseInt(arr[0]);
            var keys = [];
            for (var x=1;x<arr.length;x++){
                keys.push(arr[x].charAt(0)+"/"+arr[x].charAt(1));
            }
            var type = "q";
            switch (inputType){
                case 0:
                    type = "w";
                    break;
                case 2:
                    type = "h";
                    break;
                case 4:
                    type = "q";
                    break;
                case 8:
                    type = "8d";
                    break;
                case 16:
                    type = "16";
                    break;
            }

            VF = Vex.Flow;
            var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
            renderer.resize(1000, 500);
            var context = renderer.getContext();
            var stave = new VF.Stave(10, 50, 400);
            stave.addClef("treble").addTimeSignature("4/4");

            stave.setRepetitionTypeLeft(8,0,0);
            stave.setSection(1,0);

           // stave.setNumLines(100);100线谱
          //  stave.setConfigForLine(10);//The line number must be within the range of the number of lines in the Stave
           // stave.setText("你好",new ,[]);
            //stave.setTempo(1,0);//不好用
            stave.addModifier(new VF.Barline(3));
            stave.setContext(context).draw();


            var note = new VF.StaveNote({clef: "treble", keys:keys, duration: type});

            notes.push(note);

            VF.Formatter.FormatAndDraw(context, stave, notes);




            var stave1 = new VF.Stave(410, 50, 400);

            stave1.setContext(context).draw();
            //notes.push(note);

            VF.Formatter.FormatAndDraw(context, stave1, notes);
            notes.forEach(function (b) {
                b.setContext(context).draw();
            });


        }
    });
    function getUpOrDownNoteName(key,direction,step) {
        console.log(key);
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
                console.log("-----------------x---------------"+x);
                var value = dic[x];
                if (stepIndex==step){
                    noteNameResult = value;
                    octaveResult += time;
                    break;
                }
                if (noteName==value){
                    console.log("value-->"+value);
                    isStart = true;
                }
                if (isStart){
                    console.log("x-->"+x);
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


        console.log(noteNameResult+""+octaveResult);
        return noteNameResult+""+octaveResult;
    }
    
    
    $("#test4").click(function () {
        VF = Vex.Flow;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.CANVAS);
        renderer.resize(1000, 500);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();


        console.log(stave);

    });
    
    
    $("#easyscore").click(function () {
        console.log("huanghai");
        var vf = new Vex.Flow.Factory({renderer: {elementId: 'div',width:2000,height: 500}});
        console.log(vf);
        var score = vf.EasyScore();
        console.log(score);
        var system = vf.System();
        console.log(system);
        //console.log(vf.getOptions());


        var stave = system.addStave({
            voices: [
                score.voice(score.notes('C#5/8, B4, A4, G#4, B4, A4, G#4, G#4', {stem: 'up'})),
                score.voice(score.notes('C#4/h, C#4', {stem: 'down'})),
            ]
        }).addClef('treble').addTimeSignature('4/4');
        stave.setMeasure(10);
        system.addStave({
            voices: [
                score.voice(score.notes('C#3/q, B2, A2/8, B2, C#3, D3', {clef: 'bass', stem: 'up'})),
                score.voice(score.notes('C#2/h, C#2', {clef: 'bass', stem: 'down'}))
            ]
        }).addClef('bass').addTimeSignature('4/4');

        system.addStave({
            voices: [
                score.voice(score.notes('C#3/q, B2, A2/8, B2, C#3, D3', {clef: 'bass', stem: 'up'})),
                score.voice(score.notes('C#2/h, C#2', {clef: 'bass', stem: 'down'}))
            ]
        }).addClef('bass').addTimeSignature('4/4');
        system.addConnector();


        //vf.draw();

        // vf.reset();
        console.log(stave);


        vf.draw();
       // stave.setContext(context).draw();
        stave.addModifier(new VF.Barline(2))
        vf.draw();

    });

});




