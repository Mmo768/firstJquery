// ========== start ==========

$(".sec-two a").click(openclose);
$(".sec-one a i").click(openclose);
slide();
setInterval(date,1000);
character();


// ========== functions ==========
function openclose(){
    if($(".sec-one").attr("toggle") == "false"){
        $(".sec-one").show(500);
        $(".sec-one").attr("toggle","true");
        $(".sec-two").animate({"width":`${window.innerWidth - 260}px`},500);
    }else{
        $(".sec-one").hide(500);
        $(".sec-one").attr("toggle","false");
        $(".sec-two").animate({"width":"100%"},500);
    };
};


function slide(){
    for(let i=0 ; i<$(".two li").length ; i+=2){
        $(".two li").eq(i).click(()=>{
            $(".two li").eq(i+1).slideToggle(500);
            $(".two li").filter(".body").not($(".two li").eq(i+1)).slideUp(500);
        });
    };
};


function date(){
    let time = new Date("2023-06-03") - new Date();
    let days = Math.floor(time/(1000*60*60*24));
    let hours = Math.floor((time/(1000*60*60*24) - days)*24);
    let minutes = Math.floor(((time/(1000*60*60*24) - days)*24 - hours)*60);
    let seconds = Math.floor((((time/(1000*60*60*24) - days)*24 - hours)*60 -minutes) * 60);

    $("#days").text(`${days} D`);
    $("#hours").text(`${hours} h`);
    $("#minutes").text(`${minutes} m`);
    $("#seconds").text(`${seconds} s`);
};


function character(){
    $("textarea").keyup(()=>{
        let text = $("textarea").val();
        if(text.length < 100){
            $("#decount").text(100 - text.length);
        }else{
            $("#decount").text('your available character finished');
        }
        
    });
    };

