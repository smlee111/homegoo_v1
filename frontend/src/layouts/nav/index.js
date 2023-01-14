// css
import '../../css/components/nav.css';
// jquery
import $ from 'jquery';
// router
import { Link, useLocation } from 'react-router-dom';
// hooks
import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';

//
import gifMove from '../../assets/gif/move.gif';

export default function Nav() {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const { pathname } = useLocation();

    const logoutHandler = () => {
        dispatch(logout());
    };

    useEffect(() => {
        navscript();
    });
    let menuIdx = null;
    const navscript = () => {
        $('.menu-cate > li').mouseenter(() => {
            if (menuIdx !== $(this).index()) {
                menuIdx = $(this).index();
            }
            if (menuIdx !== null || menuIdx !== 0) {
                $('.menu-depth-detail > .w1400 > li').hide();
                $('.menu-depth-detail > .w1400 > li').eq(menuIdx).fadeIn(100);
            }
        });
        $('.subNav').mouseenter(() => {
            $('.menu-depth-detail > .w1400 > li').eq(menuIdx).hide();
        });
        $('.menu-depth-detail > .w1400 > li').mouseleave(() => {
            $('.menu-depth-detail > .w1400 > li').eq(menuIdx).hide();
        });

        if (pathname === '/') {
            $('nav').addClass('small');
        } else {
            $('nav').removeClass('small');
        }
    };

    return (
        <>
            <nav>
                <div className="wrap">
                    <Link to="/">
                        <p className="logo">
                            <img src={gifMove} alt=" " />
                        </p>
                    </Link>
                    <ul className="menu menu-cate">
                        <li>
                            <Link to="/">메인</Link>
                        </li>
                        <li>
                            <Link to="/map">지도보기</Link>
                        </li>
                        {/* <li>
                            <Link to="">대출상품</Link>
                        </li>
                        <li>
                            <Link to="">생활의달인</Link>
                        </li> */}
                        {userInfo && userInfo.isStaff ? (
                            <li>
                                <Link to="/land">매물등록</Link>
                            </li>
                        ) : null}
                        {userInfo && userInfo.isSuperuser ? (
                            <li>
                                <Link to="http://localhost:8000/admin">관리자</Link>
                            </li>
                        ) : null}
                    </ul>
                    <ul className="menu menu-user">
                        {userInfo ? (
                            <>
                                <li className="name">{userInfo.name}님</li>
                                <li>
                                    <Link to="#" onClick={logoutHandler} />
                                    로그아웃
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/register" />
                                    회원가입
                                </li>
                                <li>
                                    <Link to="/login" />
                                    로그인
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}