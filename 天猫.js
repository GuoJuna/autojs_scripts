strat_hours = 15
start_minutes = 15

while(true){
    date = new Date();
    hours = date.getHours()
    minutes = date.getMinutes()
    if(hours == strat_hours && minutes == start_minutes){
        qg()
        break;
    }
}




function qg(){
    one= className("android.view.View").indexInParent("3").findOne();
    one.click()
    sleep(200)

    // scrollDown()
    // scrollUp()

    checkbox = className("android.widget.Image").text("T0cAAAAASUVORK5CYII=").findOne().parent()
    checkbox.click();

    dhList = text("立即兑换").find()
    dhList[0].click()
    sleep(200)
    wks = className("android.view.View").text("活动时间暂未开始")
    if(wks.exists()){
        back()
        qg()
    }
}

function back(){
    id("lReturn").findOne().click()
    sleep(200)
}

console.log(checkbox)