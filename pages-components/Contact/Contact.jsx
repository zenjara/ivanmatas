import {FlexLayout} from "../../ui";
import {Box, Text} from "theme-ui";
import ContactIcon from "../../ui/assets/images/contact.svg";
import SocialIcons from "../Shared";


const Contact = () => {
    return (
        <FlexLayout flexDirection={['column-reverse', 'row']} id="contact" justifyContent='space-between'
                    alignItems='center' mb={['100px', '136px']} sx={{width: '100%'}} px={[32, 156]}
                    space={[0, 56]}>
            <FlexLayout flexDirection='column'>
                <Box mb={[32, 44]} sx={{borderLeft: `3px solid #F6635A`}} pl={[12, 44]}>
                    <Text as='p' mb={[16, 28]} sx={{
                        fontSize: ['16px', '24px'],
                        lineHeight: '29px',
                        textDecoration: 'underline'
                    }}>ivan.matas2@gmail.com</Text>
                    <Text as='p' variant='contactText'>You have a question for me? </Text>
                    <Text as='p' variant='contactText'>You have a blog/podcast topic suggestions? </Text>
                    <Text as='p' variant='contactText'>You have business inquires? </Text>
                    <Text as='p' variant='contactText'>Just wanna say hi? </Text>
                    <Text as='p' variant='contactText'>Send me an email and I will respond as soon as I can :)</Text>
                </Box>
                <SocialIcons/>
            </FlexLayout>
            <Box sx={{maxWidth: ['230px', '561px'], width: '100%'}} mb={[32, 0]}>
                <ContactIcon/>
            </Box>
        </FlexLayout>

    );
}

export default Contact;

