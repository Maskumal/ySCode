Ramadhan = {
  "title": "Jadwal Imsakiyah Ramadhan 1441H / 2020M",
  "author": "Maskumal",
  "email" : "maskumal43@gmail.com",
  "region": "Tangerang Kota, Banten - Indonesia",
  "time_zone": "Waktu Indonesia Barat",
  "version": "1.0.0",
  "data_source": "Kementrian Agama Repubkik Indonesia", 
  "data": [
    {
      "now": "new Date().getDate()",    //#1 - 24
      "time": "4.26" 
    },
    {
      "now": "new Date().getDate()",    //#2 - 25
      "time": "4.26" 
    },
    {
      "now": "new Date().getDate()",    //#3 - 26
      "time": "4.26"
    },
    {
      "now": "new Date().getDate()",    //#4 - 27
      "time": "4.26"
    },
    {
      "now": "new Date().getDate()",    //#5 - 28
      "time": "4.26"
    },
    {
      "now": "new Date().getDate()",    //#6 - 29
      "time": "4.26"
    },
    {
      "now": "new Date().getDate()",    //#7 - 30
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#8 - 01
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#9 - 02
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#10 - 03
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#11 - 04
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#12 - 05
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#13 - 06
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#14 - 07
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#15 - 08
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#16 - 09
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#17 - 10
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#18 - 11
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#19 - 12
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#20 - 13
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#21 - 14
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#22 - 15
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#23 - 16
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#24 - 17
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#25 - 18
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#26 - 19
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#27 - 20
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#28 - 21
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#29 - 22
      "time": "4.25"
    },
    {
      "now": "new Date().getDate()",    //#30 - 23
      "time": "4:26"
    }
  ],
  "valid_code": 1,
  "status": 1,
  "status_info": "success"  
}
   
function time() {   
   date = eval(Ramadhan.data[0].now)
   timeUp = eval(Ramadhan.data[0].time)
   nowday = new Date().getDate();
   if(date){
     return timeUp;
   }
}