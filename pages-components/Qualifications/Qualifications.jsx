import {useState} from "react";
import {FlexLayout} from "../../ui";
import Experience from "./Experience";
import Certificates from "./Certificates";
import Footer from "../Footer";
import {Button, Text} from "theme-ui";

const Qualifications = () => {
    const [experienceActive, setExperienceActive] = useState(true);

    return (
        <>
            <FlexLayout display={['flex', 'none']} mb={32} mx='auto'>
                <Button variant='toggle' bg={experienceActive ? '#2F4858' : 'white'}
                        color={experienceActive ? 'white' : 'rgba(136, 136, 136, 0.7)'}
                        sx={{borderRadius: '6px 0px 0px 6px'}} onClick={() => setExperienceActive(true)}>
                    <Text>Experience</Text>
                </Button>
                <Button variant='toggle' bg={!experienceActive ? '#2F4858' : 'white'}
                        color={!experienceActive ? 'white' : 'rgba(136, 136, 136, 0.7)'}
                        sx={{borderRadius: '0px 6px 6px 0px'}} onClick={() => setExperienceActive(false)}>
                    <Text>Certificates</Text>
                </Button>
            </FlexLayout>
            <FlexLayout flexDirection='column' justifyContent='center' sx={{width: '100%', maxWidth: '1440px'}}
                        mx='auto'>
                <FlexLayout justifyContent='space-between' mb={88} space={114} px={80} display={['none', 'flex']}>
                    <Experience/>
                    <Certificates/>
                </FlexLayout>
                <FlexLayout justifyContent='space-between' mb={56} space={114} px={24} display={['flex', 'none']}>
                    {experienceActive ? <Experience/> : <Certificates/>}
                </FlexLayout>
                <Footer/>
            </FlexLayout>
        </>
    );
}

export default Qualifications;
