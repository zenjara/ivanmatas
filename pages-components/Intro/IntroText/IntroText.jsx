import {FlexLayout} from "../../../ui";
import {Box, Link as ThemeLink, Text} from "theme-ui";
import PointerIcon from "../../../ui/assets/images/pointer.svg";

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

const IntroText = () => {
    return (
        <FlexLayout flexDirection='column' space={[2,3]} flexGrow={1} px={24}>
            <FlexLayout flexDirection='column' space={3} display={['none', 'flex']}>
                <Text as='h2' variant='introTitle'>I'm Ivan</Text>
                <Text as='h2' variant='introTitle'>Matas</Text>
            </FlexLayout>
            <Text as='p' variant='intro'>I am software developer and occasional content creator.</Text>
            <Text as='p' variant='intro'>Born and raised in Split, Croatia. Currently living in Zagreb.</Text>
            <Text as='p' variant='intro'>{getAge('1993-01-10')} years young and self employed @ MTSProgramming </Text>
            <FlexLayout alignItems='flex-start'>
                <Text as='p' variant='intro' mb={10}>Co-founder of <ThemeLink href='https://doniraj.hr/'
                                                                              target="_blank"
                                                                              variant='main'>doniraj.hr</ThemeLink>
                </Text>
                <Box sx={{width: '30px'}} pt={10}><PointerIcon/></Box>
            </FlexLayout>

            <Text variant='intro' sx={{fontWeight: [300, 400]}}>Croatian
                platform created to simplify charity donations to organizations in need.</Text>
        </FlexLayout>
    );
}

export default IntroText;
