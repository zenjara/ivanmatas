import {FlexLayout} from "../../ui";
import {Box, Link as ThemeLink, Text} from "theme-ui";
import Link from 'next/link'
import MenuIcon from "../../ui/assets/images/menu.svg";
import {useState} from "react";
import SocialIcons from "../Shared";

const Header = ({mb = ['24px', '24px', '68px']}) => {
    const [open, setOpen] = useState(false);

    const overlayStyles = {
        height: '100%',
        width: '100%',
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        backgroundColor: 'rgba(17, 17, 17, 1)',
        overflowX: 'hidden',
        transition: '0.5s',
    }

    const overlayContentStyles = {
        position: 'relative',
        left: 0,
        top: '5%',
        width: '100%',
        overflowX: 'hidden',
        transition: '0.5s',
    }

    const displayMobileMenu = () => {
        return (
            <FlexLayout flexDirection='column' display={['flex', 'none']} pl={24} space={40}
                        sx={overlayContentStyles}>
                <FlexLayout justifyContent='flex-end'>
                    <MenuIcon onClick={() => setOpen(false)} sx={{textAlign: 'right'}}/>
                </FlexLayout>
                <Link href="/"><Text variant='headerLinksMobileMenu'>Home</Text></Link>
                <Link href="/about"><Text variant='headerLinksMobileMenu'>About</Text></Link>
                <ThemeLink href="https://medium.com/@ivanmatas" target="_blank"><Text
                    variant='headerLinksMobileMenu'>Blog</Text></ThemeLink>
                <ThemeLink href="https://www.youtube.com/channel/UCjSkilftOHgTQQfP-BQV8HQ/videos"
                           target="_blank"><Text
                    variant='headerLinksMobileMenu'>Podcast</Text></ThemeLink>
                <Link href="/#contact"><Text variant='headerLinksMobileMenu'>Contact</Text></Link>
                <SocialIcons color='white' justifyContent='center' space={40} mt={24}/>
            </FlexLayout>
        )
    }

    const displayHeader = () => {
        return (
            <>
                <Link href='/'>
                    <FlexLayout flexDirection='column' space={1}>
                        <Text as='h4' variant='nameLogo'
                              sx={{
                                  background: '#F6635A',
                                  maxWidth: 'max-content',
                                  color: 'white',
                                  cursor: 'pointer'
                              }} pl={[36, 36, 136]}
                              pr='20px'>IM</Text>
                        <Text as='h4' variant='jobTitle' pl={[36, 36, 136]}>Fullstack Web Developer</Text>
                    </FlexLayout>
                </Link>

                <FlexLayout alignItems='center' space={32} display={['none', 'none', 'flex']}>
                    <Link href="/about"><Text variant='headerLinks'>About</Text></Link>
                    <ThemeLink href="https://medium.com/@ivanmatas" target="_blank"><Text
                        variant='headerLinks'>Blog</Text></ThemeLink>
                    <ThemeLink href="https://www.youtube.com/channel/UCjSkilftOHgTQQfP-BQV8HQ/videos"
                               target="_blank"><Text
                        variant='headerLinks'>Podcast</Text></ThemeLink>
                    <Link href="/#contact"><Box sx={{border: '2px solid black', borderRadius: '4px'}} px={2}
                                                py={2}><Text
                        variant='headerLinks'>Contact</Text></Box></Link>
                </FlexLayout>
                <FlexLayout display={['flex', 'none']}>
                    <MenuIcon onClick={() => setOpen(true)}/>
                </FlexLayout>
            </>
        )
    }

    return (
        <FlexLayout justifyContent='space-between' alignItems={['flex-start', 'center']} pr={['36px', 0, '38%']}
                    mb={mb} sx={open ? overlayStyles : {marginTop: '32px'}}>
            {open ? displayMobileMenu() : displayHeader()}
        </FlexLayout>
    );
}

export default Header;
