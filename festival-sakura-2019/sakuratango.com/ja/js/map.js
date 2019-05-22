// JavaScript Document
var map;
var marker = [];
var infoWindow = [];
var markerData = [ // マーカーを立てる場所名・緯度・経度
	{
		name: 'Event Dining Space TIEMPO HALL &amp; Cafe Restaurante SANCHO PANZA',
		lat: 33.58673,
		lng: 130.39599,
	}, {
		name: 'Denki Building MIRAI HALL',
		lat: 33.582868,
		lng: 130.405323,
		icon:'https://www.sakuratango.com/2017/images/icon/pin-ti.png'
	}
];

function initMap() {
	// 地図の作成
	var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
	map = new google.maps.Map(document.getElementById('map'), { // #sampleに地図を埋め込む
		center: mapLatLng, // 地図の中心を指定
		zoom: 15, // 地図のズームを指定
		scrollwheel: false		// ホイール操作
	});
	// マーカー毎の処理
	for (var i = 0; i < markerData.length; i++) {
		markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
		marker[i] = new google.maps.Marker({ // マーカーの追加
			position: markerLatLng, // マーカーを立てる位置を指定
			map: map // マーカーを立てる地図を指定
		});

		infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
			content: '<div class="map">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
		});

		markerEvent(i); // マーカーにクリックイベントを追加
	}
	marker[0].setOptions({// TAM 東京のマーカーのオプション設定
		icon: {
			url: markerData[0]['icon']// マーカーの画像を変更
		}
	});
}
// マーカーにクリックイベントを追加
function markerEvent(i) {
	marker[i].addListener('click', function() { // マーカーをクリックしたとき
		infoWindow[i].open(map, marker[i]); // 吹き出しの表示
	});
}