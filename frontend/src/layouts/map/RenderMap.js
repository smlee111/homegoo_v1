// global kakao
// css
import '../../css/pages/map.css';
// jquery
import $ from 'jquery';
// hooks
import React, { useEffect } from 'react';
// redux
import { useSelector } from 'react-redux';

//
import RenderAllMarkers from '../../sections/map/AllMarkers';
import RenderMyMarkers from '../../sections/map/MyMarkers';

export default function RenderMap() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        RenderAllMarkers();
    }, []);

    return (
        <div id="map">
            <div className="info-detail" />
            {(userInfo && userInfo.isSuperuser) || (userInfo && userInfo.isStaff) ? (
                <ul className="filter-marker">
                    <li>
                        <button
                            className="on"
                            onClick={() => {
                                $('.info-detail').hide();
                                RenderAllMarkers();
                            }}
                        >
                            전체
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => {
                                $('.info-detail').hide();
                                RenderMyMarkers(userInfo);
                            }}
                        >
                            MY
                        </button>
                    </li>
                </ul>
            ) : null}
        </div>
    );
}
