/**
 *  9:15 開発開始
 *  9:35 musics.jsの作成完了
 * 10:08 CSS,HTMLの設計+コーディング完了
 * 10:28 JSのトリッキーなコード完成
 * 10:50 デザインの微調節
 * 実質50行くらいしか無いのに1.5時間もかかってしまった...
 */
window.onload = () => Musics.split("\n").filter(v => v !== "").reduce((pv, cv) => {
	cv = cv.trim();
	if (cv.startsWith("# ")) {
		if (pv) document.getElementById("root").appendChild(pv);
		pv = document.createElement("div");
		var h = document.createElement("h1");
		h.innerText = cv.substr(2).trim();
		pv.appendChild(h);
		var u = document.createElement("ul");
		u.setAttribute("class", "songs fullH listV");
		pv.appendChild(u);
	} else if (cv.startsWith("- ")) {
		var l = document.createElement("li");
		var t = cv.substr(2).split(" ").map(v => v.trim());
		l.onclick = () => location.href = t[t.length - 1];
		l.innerText = t.slice(0, t.length - 1).join(" ");
		pv.getElementsByTagName("ul")[0].appendChild(l);
	}
	return pv;
}, undefined);