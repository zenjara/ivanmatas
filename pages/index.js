import Header from "../pages-components/Header";
import {FlexLayout} from "../ui";
import Intro from "../pages-components/Intro";
import Divider from "../pages-components/Divider";
import Content from "../pages-components/Content";
import Contact from "../pages-components/Contact";
import Footer from "../pages-components/Footer";
import IntroText from "../pages-components/Intro/IntroText";

export default function Home() {
    return (
        <FlexLayout flexDirection='column' sx={{width: '100%'}}>
            <FlexLayout flexDirection='column' mb={[32, 0]}
                        sx={{background: 'linear-gradient(to left, #F6635A 0%,#F6635A 35%,#000000 35%,white 35%,white 100%)'}}>
                <Header/>
                <Intro/>
            </FlexLayout>
            <FlexLayout display={['flex', 'none']} mb={[80]}>
                <IntroText/>
            </FlexLayout>
            <Divider/>
            <FlexLayout justifyContent='center' sx={{width: '100%', maxWidth: '1440px'}} mx='auto'>
                <Content/>
            </FlexLayout>
            <Divider text='Contact'/>
            <FlexLayout justifyContent='center' sx={{width: '100%', maxWidth: '1440px'}} mx='auto'>
                <Contact/>
            </FlexLayout>
            <Footer/>
        </FlexLayout>
    )
}
