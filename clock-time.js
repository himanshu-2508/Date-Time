setInterval(Time,1000)
        function Time(){
        let time = new Date();
        document.getElementById("Clock").innerText = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        document.getElementById("Clock").style.fontSize='30px'; 
        }
        setInterval(date,)
        function date(){
            let Tdate = new Date();
            document.getElementById('date').innerText=Tdate.getDate()+"/"+Tdate.getMonth()+"/"+Tdate.getFullYear();
            document.getElementById("date").style.fontSize='30px'; 
        }