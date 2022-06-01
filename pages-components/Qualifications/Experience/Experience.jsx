import {FlexLayout} from "../../../ui";
import {Text} from "theme-ui";

const Experience = () => {

    const experienceItem = (position, company, from, to) => {
        return (
            <FlexLayout flexDirection='column' space={1}>
                <FlexLayout flexDirection={['column', 'row']} space={['8px', 16]}>
                    <Text as='p' variant='aboutItem' mb={2}>{position}</Text>
                    <Text as='p' variant='aboutItemSubtitle'>{company}</Text>
                </FlexLayout>
                <Text as='span' variant='aboutItemSubtitle'>{from} - {to}</Text>
            </FlexLayout>)
    }

    return (
        <FlexLayout mb={24} flexDirection='column'>
            <FlexLayout mb={36} sx={{background: '#F6635A', maxWidth: 'max-content'}} px={30} py={11}
                        display={['none', 'flex']}>
                <Text as='h3' variant='aboutTitle'>Experience</Text>
            </FlexLayout>
            <Text mb={32} sx={{fontSize: ['14px', '16px']}}>WORK HISTORY</Text>
            <FlexLayout flexDirection='column' space={32} mb={56}>
                {experienceItem('Self Employed', 'MTSProgramming', 'August 2021', 'Present')}
                {experienceItem('Full Stack Developer', 'Ars Futura', 'September 2018', 'August 2021')}
                {experienceItem('Outsource Software Developer', 'Privredna Banka Zagreb d.d.', 'March 2018', 'September 2018')}
                {experienceItem('Software Developer', 'Locastic', 'December 2016', 'September 2018')}
            </FlexLayout>
            <Text mb={32}>EDUCATION</Text>
            <FlexLayout flexDirection='column' space={2}>
                <Text as='span' variant='aboutItem'>Faculty of Electrical Engineering, Mechanical Engineering And Naval
                    Architecture (FESB)</Text>
                <Text as='span' variant='aboutItemSubtitle'>Master’s Degree , Telecommunication and Informatics </Text>
                <Text as='span' variant='aboutItemSubtitle'>2014 - 2016</Text>
            </FlexLayout>
        </FlexLayout>

    );
}

export default Experience;
