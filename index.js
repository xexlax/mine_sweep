var map=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
//初始化
var discover=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
const color=['rgba(0,0,0,0)','#e6fbf8','#8300f1',
    '#ffa700','#026e00','#ff5845',
    '#5dcbff','#333','#000']
var map_size=18,mine_num=60;
var count_mine,time=0,timer_on=false,gameover=false;
var timer =setInterval(timefun,1000);
function timefun(){
    if(timer_on&&!gameover)
    time++;
    document.getElementById('time').innerText=" 用时："+time+"秒";

}
window.onload=function(){
    let a=map_size,b=count_mine;
    document.getElementById('mineland').style.width=26*a+4*(a+1)-3+'px';
    document.getElementById('mineland').style.height=26*a+4*(a+1)-3+'px';
        document.oncontextmenu = function(e){
            e.preventDefault();
        };




initial();
}
//难度设置
function  set(a,b) {

    let r=confirm('确定更改设定吗？');
    if(!r)return;
    map_size=a;
    document.getElementById('mineland').style.width=26*a+4*(a+1)-3+'px';
    document.getElementById('mineland').style.height=26*a+4*(a+1)-3+'px';
    mine_num=b;
    if(r) initial();


}
function initial() {
    gameover=false;
    time=0;
    set_block();
    set_mine(mine_num);
    paint();

}
//画格子
function set_block() {
    var mineLand=document.getElementById("mineland");

    let string='';
    for(let i=0;i<map_size;i++){
        for(let j=0;j<map_size;j++){
            string+="<mineblock id='i"+i+"j"+j+"' onclick='right_click("+i+","+j+")' ondblclick='double_click("+i+","+j+")' oncontextmenu='flag("+i+","+j+")'></mineblock>"
        }
        string+="<br/>"
    }

    mineLand.innerHTML=string;

    for(let i=0;i<map_size;i++){
        for(let j=0;j<map_size;j++){
            discover[i][j]=0; map[i][j]=0;
        }
      
    }

}
//埋雷
function set_mine(num){
    for(let i=0;i<num;i++){
        while(true){
            let x=Math.floor(Math.random()*map_size);
            let y=Math.floor(Math.random()*map_size);
            if(map[x][y]===0) {map[x][y]=-1; break;}
        }
    }
    calc();
    count_mine=mine_num;

}
//描绘地图
function paint() {
    document.getElementById('mine_last').innerText='剩余雷数：'+count_mine;
    for(let i=0;i<map_size;i++){
        for(let j=0;j<map_size;j++){
            let dom_obj=document.getElementById('i'+i+'j'+j);
            if(discover[i][j]===1){
                if(map[i][j]===-1) {dom_obj.innerText='💣';}
                else{
                dom_obj.style.backgroundColor='#82ddae'
                dom_obj.style.color=color[map[i][j]];
                dom_obj.innerText=map[i][j];}

            }
            else{
                dom_obj.innerText='';
                if(discover[i][j]===2){

                    dom_obj.innerText='🚩';

                }
                else{dom_obj.innerText='';
                    }
            }
        }
        }
}
//计算
function calc() {
    for(let i=0;i<map_size;i++){
        for(let j=0;j<map_size;j++)
        if(map[i][j]!==-1){
            let s=0;
            //上下左右
            if(j<map_size-1&&map[i][j+1]===-1) s++;
            if(j>0&&map[i][j-1]===-1) s++;
            if(i<map_size-1&&map[i+1][j]===-1) s++;
            if(i>0&&map[i-1][j]===-1) s++;
            //四角
            if(i<map_size-1&&j<map_size-1&&map[i+1][j+1]===-1) s++;
            if(i>0&&j<map_size-1&&map[i-1][j+1]===-1) s++;
            if(i>0&&j>0&&map[i-1][j-1]===-1) s++;
            if(j>0&&i<map_size-1&&map[i+1][j-1]===-1) s++;
            map[i][j]=s;

        }
    }

}
//揭示
function right_click(i,j){
    if(timer_on===false){document.getElementById('pause').innerText='继续'}
    else{ document.getElementById('pause').innerText='暂停'}
 timer_on=true;
    if(i<0||j<0||i>=map_size||j>=map_size) return;
    if(discover[i][j]===0){
        discover[i][j]=1;
        if(map[i][j]>=0){
            ripple(i,j);

        }
        if(map[i][j]===-1){
            paint();
            bomb();
        }
        paint();
        check_win();
    }

}



//揭示(递归）

function ripple(x,y){
    discover[x][y]=1;
    if(map[x][y]===0)
    { if(y>0&&discover[x][y-1]===0) ripple(x,y-1);
       if(x<map_size-1&&discover[x+1][y]===0) ripple(x+1,y);
       if(x>0&&discover[x-1][y]===0) ripple(x-1,y);
       if(y<map_size-1&&discover[x][y+1]===0) ripple(x,y+1);
        if(y<map_size-1&&x<map_size-1&&discover[x+1][y+1]===0) ripple(x+1,y+1);
        if(y<map_size-1&&x>0&&discover[x-1][y+1]===0) ripple(x-1,y+1);
        if(x<map_size-1&&y>0&&discover[x+1][y-1]===0) ripple(x+1,y-1);
        if(x>0&&y>0&&discover[x-1][y-1]===0)ripple(x-1,y-1);

    }


}



function flag(i,j){
    if(timer_on===false){document.getElementById('pause').innerText='继续'}
    else{ document.getElementById('pause').innerText='暂停'}
    timer_on=true;
        discover[i][j]=2-discover[i][j];
        count_mine-=discover[i][j]-1;


    paint();
    check_win();

}
//双击开屏
function double_click(x,y){
    //更新计时器状态
    if(timer_on===false){document.getElementById('pause').innerText='继续'}
    else{ document.getElementById('pause').innerText='暂停'}
    timer_on=true;
    //统计旗子数量
    let s=0;
    //上下左右
    if(y<map_size-1&&discover[x][y+1]===2) s++;
    if(y>0&&discover[x][y-1]===2) s++;
    if(x<map_size-1&&discover[x+1][y]===2) s++;
    if(x>0&&discover[x-1][y]===2) s++;
    //四角
    if(x<map_size-1&&y<map_size-1&&discover[x+1][y+1]===2) s++;
    if(x>0&&y<map_size-1&&discover[x-1][y+1]===2) s++;
    if(x>0&&y>0&&discover[x-1][y-1]===2) s++;
    if(y>0&&x<map_size-1&&discover[x+1][y-1]===2) s++;

    if(s===map[x][y]&&s>0){

    if(discover[x+1][y]===0) right_click(x+1,y);
    if(discover[x][y-1]===0) right_click(x,y-1);
    if(discover[x-1][y]===0) right_click(x-1,y);
    if(discover[x][y+1]===0) right_click(x,y+1);
    if(discover[x+1][y+1]===0) right_click(x+1,y+1);
    if(discover[x-1][y+1]===0) right_click(x-1,y+1);
    if(discover[x+1][y-1]===0) right_click(x+1,y-1);
    if(discover[x-1][y-1]===0) right_click(x-1,y-1);
}
}
function check_win() {
    if(gameover)return;
    for(let i=0;i<map_size;i++){
        for(let j=0;j<map_size;j++){
            if(discover[i][j]===0) return false;
        }
    }

    win();
}

function win() {
    gameover=true;
    timer_on=false;
 alert('congratulations');
}
function bomb(){
    for(let i=0;i<map_size;i++){
        for(let j=0;j<map_size;j++){
            if(map[i][j]===-1) discover[i][j]=1;
        }
    }
    paint();
    gameover=true;
    timer_on=false;
    alert('gameover');
}
function pause() {
    if(timer_on===true){timer_on=false; document.getElementById('pause').innerText='继续'}
    else{timer_on=true; document.getElementById('pause').innerText='暂停'}


}
function restart() {
   let r=confirm('确定重新开始吗QAQ？');

   if(r) initial();

}
function characterize() {

        let a=Math.floor(prompt("请输入地图的边长","18"));
    let b=Math.floor(prompt("请输入地雷的数量","60"));

    while(a>19){alert('边长不得超过19'); a=Math.floor(prompt("请输入地图的边长","18"));};
    while(a<1){alert('边长不得低于1');    a=Math.floor(prompt("请输入地图的边长","18"));};
    while(b>a*a){alert('地雷过多，请重新输入');b=Math.floor(prompt("请输入地雷的数量","60"));};

    set(a,b);


}
function  showHelp() {
    alert('这是扫雷的游戏说明，可惜遭到制作者的删减：数字代表方格周围的地雷数目，按鼠标左键揭示一个方格，如果点击到了地雷，你会输掉游戏；按鼠标右键可以将方格用红旗标记；双击一个已经揭示的方格可以快捷打开其周围所有的方格；你的目标是把所有非雷的方格点开。今天能重新看到这段说明，👴非常感动')

}