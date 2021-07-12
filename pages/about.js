import Header from "../pages-components/Header";
import {FlexLayout} from "../ui";
import {Link, Text} from "theme-ui";
import Skills from "../pages-components/Skills";
import Qualifications from "../pages-components/Qualifications";

export default function Home() {
    return (
        <FlexLayout flexDirection='column' sx={{width: '100%'}}>
            <FlexLayout flexDirection='column' mb={[56, 105]}
                        sx={{
                            background: 'linear-gradient(to left, #F6635A 0%,#F6635A 35%,#000000 35%,white 35%,white 100%)',
                            height: 'max-content',
                        }}>
                <Header mb='0px'/>
            </FlexLayout>
            <FlexLayout mb={[42, 136]} px={[28, 136]} space={4}>
                <Text as='h2' sx={{fontSize: ['16px', '30px'], fontWeight: 300}}>TLDR;</Text>
                <Link href='/resume.pdf' target="_blank" rel="noreferrer" sx={{
                    fontWeight: 500,
                    fontSize: ['14px', '24px'],
                    maxWidth: 'max-content',
                    borderBottom: '5px solid black'
                }}>Resume</Link>
            </FlexLayout>
            <Skills/>
            <Qualifications isMobile={[true, false]}/>
        </FlexLayout>
    )
}
