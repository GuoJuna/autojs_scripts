strat_hours = 12
start_minutes = 00


wks = className("android.widget.Button").text("未开始")
qg = className("android.widget.Button").text("立即购买")
ysq = className("android.widget.Button").text("已售罄")


while(true){
    date = new Date();
    hours = date.getHours()
    minutes = date.getMinutes()
    console.log("时间"+date.getSeconds())
    if(hours == strat_hours && minutes == start_minutes){
        if(wks.exists()){
            console.log("已售罄...")
            break
        }
        if(qg.exists()){
            qg.click();
            sleep(200);

            qr = className("android.view.View").text("取消").findOne();
            qr.click();
            break
        }else{
            swipe(500,200,500,500,200)
        }
    }
    if(minutes >= start_minutes + 1){
        break
    }
    
}


//console.log(wks.exists())
console.log(wks)