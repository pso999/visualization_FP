  function myFunction() {
      var x,xyqz,ljqz,sw,zy;
      var jishu=0;
      var myDate=new Array("1月19日","1月20日","1月21日","1月22日","1月23日","1月24日","1月25日","1月26日","1月27日","1月28日","1月29日","1月30日","1月31日","2月1日","2月2日","2月3日","2月4日","2月5日","2月6日","2月7日","2月8日","2月9日","2月10日","2月11日","2月12日","2月13日","2月14日","2月15日","2月16日","2月17日","2月18日","2月19日","2月20日","2月21日","2月22日","2月23日","2月24日","2月25日","2月26日");
      var xyqzs=new Array(1,17,26,32,53,76,109,144,184,236,305,386,512,592,669,777,838,895,949,977,994,1007,995,977,955,927,906,878,845,794,755,708,664,614,596,567,535,499,467);
      var ljqzs=new Array(1,17,26,32,53,78,111,146,188,241,311,393,520,604,683,797,870,944,1018,1075,1120,1151,1177,1219,1241,1261,1294,1316,1322,1328,1331,1332,1333,1339,1342,1345,1347,1347,1347);
      var sws=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,4,4,5,5,5,5,6,6,7,7,7);
      var zys=new Array(0,0,0,0,0,2,2,2,4,5,6,7,8,12,14,20,32,49,68,97,125,143,181,241,284,332,386,436,473,530,571,619,664,720,740,772,805,841,873);
    x = document.getElementById("inputdate").value;
   for(var i=0;i<myDate.length;i++){
    if(x==myDate[i]){
      jishu++;
      xyqz=xyqzs[i];
      ljqz=ljqzs[i];
      sw=sws[i];
      zy=zys[i];
    document.getElementById("现有确诊病例").innerHTML = xyqz;
    document.getElementById("累计确诊病例").innerHTML = ljqz;
    document.getElementById("死亡病例").innerHTML = sw;
    document.getElementById("治愈病例").innerHTML = zy;

    }
   }
   if(jishu==0){
    alert("输入内容不符合要求");
   }  
}