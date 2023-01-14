// css
import '../../css/components/footer.css'
//
import SubFooter from './SubFooter';
//
import gifMove from '../../assets/gif/move.gif';

export default function Footer(){
    return (
        <>
            <SubFooter />
            <div className="footer">
                <div className="w1400">
                    <div className="identity">
                        <p className="logo">
                            <img src={gifMove} alt=" " />
                        </p>
                        <p className="copy">
                            Copyright (c) Inc.
                            <br />
                            All Rights Reserved.
                        </p>
                    </div>
                    <ul className="sec">
                        <li>
                            <ul>
                                <li>사업자 정보</li>
                                <li>
                                    <span />
                                    법인명 :
                                </li>
                                <li>
                                    <span />
                                    대표 : 이슬비
                                </li>
                                <li>
                                    <span />
                                    주소 : 서울 용산구
                                </li>
                                <li>
                                    <span />
                                    사업자등록번호 : 123-45-67890
                                </li>
                                <li>
                                    <span />
                                    대표번호 : 02-1234-5678
                                </li>
                                <li>
                                    <span />
                                    이메일 : sample@gmail.com
                                </li>
                                <li>
                                    <span />
                                    FAX : 02-1234-5678
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>서비스 정보</li>
                                <li>
                                    <span />
                                    회사 소개
                                </li>
                                <li>
                                    <span />
                                    개인정보처리방침
                                </li>
                                <li>
                                    <span />
                                    이용약관
                                </li>
                                <li>
                                    <span />
                                    라이선스 규정
                                </li>
                                <li>
                                    <span />
                                    컨텐츠 유의사항
                                </li>
                                <li>
                                    <span />
                                    FAQ
                                </li>
                                <li>
                                    <span />
                                    사업 제휴
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>서비스 인증</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>SNS</li>
                                <li>
                                    <span />
                                    유튜브
                                </li>
                                <li>
                                    <span />
                                    페이스북
                                </li>
                                <li>
                                    <span />
                                    인스타그램
                                </li>
                                <li>
                                    <span />
                                    네이버블로그
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
