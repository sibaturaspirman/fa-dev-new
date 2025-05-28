/* Rollover Script */

if(navigator.appVersion.charAt(0) >=3){
var rolimg = new Array();
for( i = 0 ; i < 11 ; i++ ){
rolimg[i] = new Image();
}

// ���摜�̃C���[�W�̃p�X
rolimg[0].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle00.jpg"
rolimg[1].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle01.jpg"
rolimg[2].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle02.jpg"
rolimg[3].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle03.jpg"
rolimg[4].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle04.jpg"
rolimg[5].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle05.jpg"
rolimg[6].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle06.jpg"
rolimg[7].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle07.jpg"
rolimg[8].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle08.jpg"
rolimg[9].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle09.jpg"
rolimg[10].src= "/id_id/products/cnt/plcr/pmerit/concept/img/concept_circle10.jpg"}

function paintRol(dim,cnt){
if(navigator.appVersion.charAt(0) >= 3 ){
document.images[dim].src=rolimg[cnt].src;
}
}

//�C���[�W�}�b�v�̋��E��������
var ua = navigator.userAgent;
var chkFF = ua.indexOf("Firefox",0);
if(chkFF>0){
	if($("#Map area").length){
		$("#Map area").attr("onFocus","");
	}
}