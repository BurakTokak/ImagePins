function Kapak(posX, posY, text, z){
    this.posX = posX;
    this.posY = posY;
    this.text = text;   
    this.posZ = z;
}


var nodeArr = [];

nodeArr[1] = new Kapak(185, 141, "Darbe Barları", 99);
nodeArr[2] = new Kapak(188, 265, "Sıyırıcılar", 98);
nodeArr[3] = new Kapak(447, 117, "Centroll Üst Merkezleme Sistemleri", 97);
nodeArr[4] = new Kapak(437, 193, "Centroll Otomatik Merkezleme Rulosu", 101);
nodeArr[5] = new Kapak(680, 130, "Hava Patlaçları", 95);
nodeArr[6] = new Kapak(720, 244, "Rulo İstasyonları", 94);
nodeArr[7] = new Kapak(958, 329, "Primer Sıyırıcılar", 95);
nodeArr[8] = new Kapak(610, 250, "Dublesill Toz Sızdırmazlık Ekipmanları", 100);
nodeArr[9] = new Kapak(690, 339, "Bant Fırçaları", 98);
nodeArr[10] = new Kapak(800, 364, "Sekonder Sıyırıcılar", 90);

var kapak = document.getElementById("kapak");
var i = 1;
while(i <= 11){
    console.log(nodeArr[i].text);
    kapak.innerHTML = kapak.innerHTML + "<div class='node' style='left:"+nodeArr[i].posX+"px; top:"+nodeArr[i].posY+"px;z-index:"+nodeArr[i].posZ+"'><div class='title'>"+nodeArr[i].text+"</div></div>";
i++;
}

