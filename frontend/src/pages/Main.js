// hooks
import { useEffect } from "react";
// jquery
import $ from 'jquery';

// components
import Page from '../components/Page';
import MainVisual from '../layouts/main/MainVisual';
import SecStop01 from '../layouts/main/SecStep01';
import Footer from '../layouts/main/Footer';

export default function Main() {
    useEffect(() => {
        prdscript();
    }, []);
    const prdscript = () => {
        $('.menu-product li').hover(function(){
            $(this).toggleClass('on');
        });
    }

    return (
        <Page>
            <MainVisual />
            <SecStop01 />
            <Footer />
        </Page>
    );
}