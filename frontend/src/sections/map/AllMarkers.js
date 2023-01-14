// global kakao
// jquery
import $ from 'jquery';
//
import GetMarkers from './GetMarkers';
//
import pre from '../../assets/images/house02.jpg';

const { kakao } = window;
// Render All Markers
export default async function RenderAllMarkers() {
    $('.filter-marker li button').removeClass('on');
    $('.filter-marker li').eq(0).children('button').addClass('on');

    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 7,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 클러스터러를 생성합니다
    const clusterer = new kakao.maps.MarkerClusterer({
        map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 5, // 클러스터 할 최소 지도 레벨
    });

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            map,
            locPosition,
        });

        const iwContent = message; // 인포윈도우에 표시할 내용
        const iwRemoveable = true;

        // 인포윈도우를 생성합니다
        const infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
        });

        // 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);

        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);
    }

    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도

            const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            const message = '<div style="padding:5px;">내 위치</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
        });
    }

    // 마커 불러오기
    /* eslint-disable global-require */
    async function renderMarker() {
        const getMarkers = await GetMarkers();
        const markerPos = { positions: [] };
        await getMarkers.forEach((el) => {
            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(el.address, (result, status) => {
                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                    // console.log(result[0].y, result[0].x);
                    el.lat = result[0].y;
                    el.lng = result[0].x;
                    const posTmp = {
                        lat: parseFloat(el.lat),
                        lng: parseFloat(el.lng),
                    };
                    markerPos.positions.push(posTmp);

                    // 커스텀 마커
                    const imageSrc = require('../../assets/images/marker02.png'); // 마커이미지의 주소입니다
                    const imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
                    const imageOption = { offset: new kakao.maps.Point(27, 69) };
                    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                    // 마커를 생성합니다
                    const marker = new kakao.maps.Marker({
                        // 마커가 표시 될 지도
                        map,
                        // 마커가 표시 될 위치
                        position: new kakao.maps.LatLng(el.lat, el.lng),
                        // 마커에 hover시 나타날 title
                        title: el.title,
                        image: markerImage,
                        clickable: true,
                    });
                    // 마커를 맵 객체에 전달합니다.
                    marker.setMap(map);

                    // 마커에 클릭이벤트를 등록합니다
                    kakao.maps.event.addListener(marker, 'click', () => {
                        // 부드럽게 화면 이동
                        function panTo(lat, lng) {
                            // 이동할 위도 경도 위치를 생성합니다
                            const moveLatLon = new kakao.maps.LatLng(lat, lng);

                            // 지도 중심을 부드럽게 이동시킵니다
                            // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
                            map.panTo(moveLatLon);
                        }
                        panTo(el.lat, el.lng);
                        // 우측 정보창을 생성 합니다.
                        const $infoTmp = $(`
                                <div class="section pt">
                                        <div class="pre">
                                            <img src=' + ${pre} + '/>
                                            <span class="cnt">1/6</span>
                                        </div>
                                        <p class="tit">전세 ${el.price_year}</p>
                                        <p class="el desc"># ${el.desc}</p>
                                </div>
    
                                <div class="section">
                                    <p class="sub">주소</p>
                                    <p class="el">${el.address}</p>
                                </div>
                                <div class="section">
                                    <p class="sub">유형</p>
                                    <p class="el">${el.house_type}</p>
                                </div>
                                <div class="section">
                                    <p class="sub">입주시기</p>
                                    <p class="el">${el.date}'</p>
                                </div>
                                <div class="section">
                                    <p class="sub">구조</p>
                                    <p class="el">${el.structure}</p>
                                </div>
                                <div class="section">
                                    <p class="sub">평수</p>
                                    <p class="el">${el.size}㎡</p>
                                </div>
                                <div class="section">
                                    <p class="sub">난방</p>
                                    <p class="el">${el.heating}</p>
                                </div>
                                <div class="section">
                                    <p class="sub">월 예상 주거비</p>
                                    <p class="el small">관리비 ${el.maintenance_fee}원</p>
                                    <p class="el small">대출상환금 ${el.loan_repayment}원</p>
                                    <p class="el small">${el.utility_bill}원</p>
                                    <p class="el cost">약 ${el.cost}원</p>
                                </div>
    
                                <div class="section">
                                    <div class="realtor-info">
                                        <span class="tag">LIVE 중개</span>
                                        <span class="company">365 공인중개사 사무소 ></span>
                                    </div>
                                    <div class="realtor-img"></div>
                                    <p class="realtor-name">공인중개사</p>
                                    <div class="btn-realtor">상담하기</div>
                                </div>
    
                                <div class="section">
                                    <div class="ad">대출 광고</div>
                                </div>
                            `);
                        $('.info-detail').empty();
                        $('.info-detail').append($infoTmp);
                        $('.info-detail').show();
                        console.log('infoWindow open');
                    });
                }
            });
        });
        return markerPos;
    }
    const result = await renderMarker();
    console.log(result.positions.length);
    const test = $(result.positions).map((i, position) => {
        return new kakao.maps.Marker({
            position : new kakao.maps.LatLng(position.lat, position.lng)
        });
    });
    clusterer.addMarkers(test);
}
