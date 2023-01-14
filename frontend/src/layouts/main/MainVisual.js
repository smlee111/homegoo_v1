// css
import '../../css/pages/main.css'
//
import icSearchB from '../../assets/images/ic-search-b.png';

export default function MainVisual(){
    return (
        <div className="mainVisual">
            <div className="wrap">
                <p className="tit">대한민국 주거 교과서</p>
                <div className="searchBox">
                    <img src={icSearchB} alt="검색" />
                    <input type="text" placeholder="지역명으로 매물 검색" />
                </div>
                <div className="menu-depth-detail">
                    <ul className="w1400">
                        <li />
                        <li>
                            <div className="wrap">
                                <ul className="menu">
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">첫독립</p>
                                    </li>
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">첫이사</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="wrap">
                                <ul className="menu">
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">월주거비</p>
                                    </li>
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">자금마련</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="wrap">
                                <ul className="menu">
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">내집마련</p>
                                    </li>
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">오구</p>
                                    </li>
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">나도건물주</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="wrap">
                                <ul className="menu">
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">아파트</p>
                                    </li>
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">원룸</p>
                                    </li>
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">투룸+</p>
                                    </li>
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">오피스텔</p>
                                    </li>
                                    <li>
                                        <div className="thumb" />
                                        <p className="tit">사무실</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
