// css
import '../../css/pages/main.css';
//
import { Link } from 'react-router-dom';

//
import gifHome from '../../assets/gif/home.gif';
import gifTruck from '../../assets/gif/truck.gif';
import gifCheck from '../../assets/gif/check.gif';
import gifVerb from '../../assets/gif/verb.gif';

export default function SecStop01() {
    return (
        <section className="sec-main sec-main-01">
            <div className="w1400">
                <p className="tit">
                    대한민국 내 집 마련 <span>나에게 꼭 맞는 집 구하기</span>
                </p>
                <ul className="list-product-home">
                    <li>
                        <Link to="Land" />
                        <img src={gifHome} alt="home" />
                        <p className="tit">
                            독립은 처음인
                            <br />
                            너를 위해
                        </p>
                        <p className="sub">독립은 처음이라구?</p>
                        <div className="btn-go">GO</div>
                    </li>
                    <li>
                        <Link to="" />
                        <img src={gifTruck} alt="truck" />
                        <p className="tit">
                            이사하고 싶은
                            <br />
                            너를 위해
                        </p>
                        <p className="sub">이사하고 싶다구?</p>
                        <div className="btn-go">GO</div>
                    </li>
                    <li>
                        <Link to="" />
                        <img src={gifCheck} alt="truck" />
                        <p className="tit">
                            집 구했다고 끝?
                            <br />
                            아니 이제 시작!
                        </p>
                        <p className="sub">주거비가 많이 나온다구?</p>
                        <div className="btn-go">GO</div>
                    </li>
                    <li>
                        <Link to="" />
                        <img src={gifVerb} alt="truck" />
                        <p className="tit">
                            이젠 나도
                            <br />
                            부동산 척척박사
                        </p>
                        <p className="sub">부동산 지식이 어렵다구?</p>
                        <div className="btn-go">GO</div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
