import '../../css/components/nav-sub.css';

export default function SubNav(){
    return(
        <div className="subNav">
            <div className="wrap">
                <p className="quick">매물별 검색</p>
                <ul className="left">
                    <li>아파트</li>
                    <li>원룸</li>
                    <li>투룸+</li>
                    <li>오피스텔</li>
                </ul>
                <ul className="right">
                    <li>고객센터</li>
                    <li>이벤트</li>
                </ul>
            </div>
        </div>
    );
}
