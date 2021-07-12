import {FlexLayout} from "../../ui";
import {Box, Link, Text} from "theme-ui";
import Profile from "../../ui/assets/images/profile.svg";
import LinkedinIcon from "../../ui/assets/images/linkedin.svg";
import InstagramIcon from "../../ui/assets/images/instagram.svg";
import GithubIcon from "../../ui/assets/images/github.svg";
import YoutubeIcon from "../../ui/assets/images/youtube.svg";
import IntroText from "./IntroText";
import {useEffect} from "react";
import animateText from "../../utils/textAnimation";


const Intro = () => {
    useEffect(() => animateText());

    return (
        <FlexLayout sx={{width: '100%'}} justifyContent='flex-end' alignItems={['flex-start', 'center']}
                    pr={[0, '60px']} pl={[0, 136]}>
            <FlexLayout display={['none', 'flex']} flexGrow={1}>
                <IntroText/>
            </FlexLayout>
            <FlexLayout display={['flex', 'none']}>
                <Text as='h2' variant='introTitle' className="txt-rotate" data-period="2000" data-rotate='[ "Hi! :)" ]'/>
            </FlexLayout>
            <FlexLayout mr={['7%', '18%']} sx={{
                maxHeight: ['248px', '618px'],
                height: '100%',
                width: '100%',
                maxWidth: ['197px', '458px']
            }}>
                <Profile/>
            </FlexLayout>
            <FlexLayout flexDirection='column' space='24px' display={['none', 'flex']}>
                <Box sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                    <Link href='https://www.linkedin.com/in/ivan-matas-258326107/'
                          target="_blank"><LinkedinIcon color='white'/></Link>
                </Box>
                <Box sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                    <Link href='https://www.instagram.com/xivanmatas/' target="_blank"><InstagramIcon
                        color='white'/></Link>
                </Box>
                <Box sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                    <Link href='https://github.com/zenjara' target="_blank"><GithubIcon color='white'/></Link>
                </Box>
                <Box sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                    <Link href='https://www.youtube.com/channel/UCjSkilftOHgTQQfP-BQV8HQ'
                          target="_blank"><YoutubeIcon color='white'/></Link>
                </Box>
            </FlexLayout>
        </FlexLayout>
    );
}

export default Intro;
