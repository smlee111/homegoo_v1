// css
import '../../css/components/footer-sub.css'
//
import ilWoman from '../../assets/images/il-woman02.png';

function SubFooter(){
    return (
        <div className="subFooter">
            <div className="w1400">
                <ul className="sec">
                    <li>
                        <p className="tit">고객지원</p>
                        <p className="phone">02-1234-5678</p>
                        <p className="time">
                            <span className="ic" />
                            <span className="st">평일</span> <span className="slice" />am09:00 ~ pm06:00 (점심
                            pm12:00 ~ pm01:00)
                        </p>
                        <ul className="menu">
                            <li>온라인 상담</li>
                            <li>원격지원</li>
                            <li>사업 제휴</li>
                            <li>전자 계약서</li>
                        </ul>
                    </li>
                    <li>
                        <p className="tit">
                            공지사항<span className="arrowR" />
                        </p>
                        <ul className="sent">
                            <li>운영정책 변경 추가 공지</li>
                            <li>운영정책 변경 공지</li>
                        </ul>
                        <p className="tit">
                            커뮤니티<span className="arrowR" />
                        </p>
                        <ul className="sent">
                            <li>서비스 OPEN!</li>
                            <li>겨울, 따뜻한 집 만드는 법 (방한 꿀팁)</li>
                            <li>곰팡이 없는 깨끗한 집 (feat.락스)</li>
                        </ul>
                    </li>
                    <li>
                        <p className="tit">
                            뉴스<span className="desc">부동산 최신 소식을 받아보세요!</span>
                        </p>
                        <div className="letterWrap">
                            <input type="text" placeholder="이메일을 적어주세요" />
                            <div className="btn-submit" />
                        </div>
                        <img src={ ilWoman } alt=" " />
                        <div className="memWrap">
                            <p className="tit">MEMBER 모집</p>
                            <p className="desc">
                                저희와 함께하실
                                <br />
                                실력있는 <span className="st">멤버</span>를 모집합니다
                                <span className="btn-member" />
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SubFooter;