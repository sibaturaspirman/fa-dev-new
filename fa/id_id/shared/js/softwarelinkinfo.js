// ソフトウェアリンク
var NEW_GET_SOFTWARE_LINK_INFO = "/fa/linkinfo/SoftwareSearchService/GetSoftwareLinkInfo?";
var SOFT_NO = "&softwareNO1=";
var SOFT_KISYU_NO = "kisyuNO=";
var DIRECT_LINK_SOFTWARE_LIST		="/fa/download/software/search.page?mode=software&kisyu=/";
var DIRECT_LINK_SOFTWARE_DETAIL_1	="/fa/download/software/detailsearch.page?mode=";
var DIRECT_LINK_SOFTWARE_DETAIL_2	="&kisyu=/";
var DIRECT_LINK_SOFTWARE_DETAIL_3	="&shiryoid=";
var DIRECT_LINK_SOFTWARE_DETAIL_4	="&kisyuid=0&lang=0&select=0&softid=";
var DIRECT_LINK_SOFTWARE_DETAIL_5	="&infostatus=0_0_0&viewradio=0&viewstatus=0&viewpos=0";

// ソフトウェアリンク表示
function toSoftwareInfo(softwareNo, kisyuNo, anchorType, directFlg, softwareVol, text){

	var requesturl =  NEW_GET_SOFTWARE_LINK_INFO + SOFT_KISYU_NO + kisyuNo + SOFT_NO + softwareNo;

	$.ajax({
		type: "GET",
		url: requesturl,
		dataType:'xml',
		async: false,
		error: function() {
			document.write(softwareNo+"(-9)");
		},
		success: function(xml) {
			var errCD = $(xml).find("ErrorCD").text();
			if (Number(errCD) < 0) {
				if (errCD == "-3") {
					errCD="-2";
				}
				document.write(softwareNo+"("+errCD+")");
			} else {
				// リンク先の設定
				var sendurl = "";
				switch(Number(directFlg)) {
				case 0: // リンクなし
					break;
				case 1: // 詳細画面にリンク
					var SoftID = 0;
					var ModeStr = 'software';
					// 詳細画面ではSoftIDよる切り分けを行っていない為コメントアウト
					// if ($(xml).find("SoftSoftBunrui").text() == "サンプルライブラリ他") {
					//	SoftID = 3;
					//	ModeStr = 'lib';
					// }
					sendurl = DIRECT_LINK_SOFTWARE_DETAIL_1 + ModeStr + DIRECT_LINK_SOFTWARE_DETAIL_2 + $(xml).find("SoftKisyuCD").text() + DIRECT_LINK_SOFTWARE_DETAIL_3 + softwareNo + DIRECT_LINK_SOFTWARE_DETAIL_4 + SoftID + DIRECT_LINK_SOFTWARE_DETAIL_5;
					break;
				case 2: // 一覧画面にリンク
					sendurl = DIRECT_LINK_SOFTWARE_LIST + $(xml).find("SoftKisyuCD").text();
					break;
				case 3:
					sendurl = "file";
					break;
				default:
					document.write(softwareNo+"(-2)");
					return;
				}
				if (softwareVol === undefined || softwareVol == null) {
					softwareVol = 1;
				}
				document.write(setFileInfoOut(xml, softwareNo, anchorType, sendurl, Number(softwareVol), text));
			}
		}
	});
	return;
}

function softwareinfo(title,softname,filename,filesize,version,date){
	this.title;    // ソフトウェア名称(タイトル)
	this.softname; // ソフトウェアの表にある名称
	this.filename; // ソフトウェアの表にあるファイル名
	this.filesize; // ソフトウェアの表にあるファイルサイズ
	this.version;  // ソフトウェアの表にあるバージョン
	this.date;     // ソフトウェアの表にある更新日
}

function setFileInfoOut(xml, softwareNo, anchorType, sendurl, softvol, text) {
	var ahtm = new Array
	var setUrl = sendurl;
	if (Number(anchorType) == 0) {
		if (setUrl != null && setUrl != "") {
			if (sendurl == "file") {
				setUrl = $(xml).find("SoftFileURL").eq(0).text();
			}
			ahtm.push("<a href=\"");
			ahtm.push(setUrl);
			if (sendurl == "file") {
				ahtm.push("\"");
			}
			ahtm.push("\">");
		}
		ahtm.push($(xml).find("SoftSoftName").text());
		if (setUrl != null && setUrl != "") {
			ahtm.push("</a>");
		}
	} else {
		var size = $(xml).find("SoftFileInfoName").size();
		var i = 0;
		if (softvol > size) {
			return softwareNo + "(-3)";
		} else if (softvol > 0){
			size = softvol;
			i = softvol-1;
		}
		var cnt = size - softvol;
		for (; i < size; i++ ) {
			if (sendurl == "file") {
				setUrl = $(xml).find("SoftFileURL").eq(i).text();
			}
			if (setUrl != null && setUrl != "") {
				ahtm.push("<a href=\"");
				ahtm.push(setUrl);
				if (sendurl == "file") {
					ahtm.push("\"");
				}
				ahtm.push("\">");
			}
			switch(Number(anchorType)) {
				case 1:
					ahtm.push($(xml).find("SoftFileInfoName").eq(i).text());
					break;
				case 2:
					ahtm.push($(xml).find("SoftFileVer").eq(i).text());
					break;
				case 3:
					ahtm.push($(xml).find("SoftFileSize").eq(i).text().replace( /([0-9]+?)(?=(?:[0-9]{3})+$)/g,'$1,'));
					break;
				case 4:
					ahtm.push($(xml).find("SoftFileUpdate").eq(i).text());
					break;
				case 5:
					ahtm.push($(xml).find("SoftFileName").eq(i).text());
					break;
				case 6:
					ahtm.push(text);
					break;
				default:
					return softwareNo + "(-2)";
			}
			if (setUrl != null && setUrl != "") {
				ahtm.push("</a>");
			}
			if (cnt > 1) {
				ahtm.push("&nbsp;[");
				ahtm.push(i+1);
				ahtm.push("/");
				ahtm.push(cnt);
				ahtm.push("]");
				if (i+1 <cnt) {
					ahtm.push("<br/>");
				}
			}
		}
	}
	// ステータス
	var status = $(xml).find("SoftStatusNm").eq(0).text();
	var registtype = $(xml).find("SoftRegistTypeNm").eq(0).text();
	if (status != null && status != "") {
		ahtm.push("<br/>");
		ahtm.push("<span style=\"color:red;\">");
		ahtm.push(status);
		if (registtype != null && registtype != "") {
			ahtm.push("&nbsp;(");
			ahtm.push(registtype);
			ahtm.push(")");
		}
		ahtm.push("</span>");
	}
	return ahtm.join("");
}

