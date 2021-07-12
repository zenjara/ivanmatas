import {FlexLayout} from "../../../ui";
import {Link, Text} from "theme-ui";

const Certificates = () => {

    const certificate = (name, issuer, url) => {
        return (
            <Link href={url} target="_blank" rel="noreferrer">
                <FlexLayout flexDirection={['column', 'row']} space={['4px', 16]} alignItems={['flex-start', 'center']}>
                    <Text as='span' variant='aboutItem'>{name}</Text>
                    <Text as='span' variant='aboutItemSubtitle'>{issuer}</Text>
                </FlexLayout>
            </Link>

        )
    }

    return (
        <FlexLayout mb={24} flexDirection='column'>
            <FlexLayout mb={36} sx={{background: '#F6635A', maxWidth: 'max-content'}} px={30} py={11}
                        display={['none', 'flex']}>
                <Text as='h3' variant='aboutTitle'>Certificates</Text>
            </FlexLayout>
            <FlexLayout flexDirection='column' space={16}>
                {certificate('Advanced JavaScript', 'ui.dev', '/certificate-of-completion-for-_advanced-javascript.pdf')}
                {certificate('Modern JavaScript', 'ui.dev', '/certificate-of-completion-for-_modern-javascript.pdf')}
                {certificate('React', 'ui.dev', '/certificate-of-completion-for-_react.pdf')}
                {certificate('Front End Development Program, Computer Engineering', 'freeCodeCamp', 'https://www.freecodecamp.org/certification/zenjara/legacy-front-end')}
                {certificate('YouTube Best Practices - Tips for Starting a YouTube Channel', 'Udemy', 'https://www.udemy.com/certificate/UC-K134ALPI/')}
                {certificate('Building a Personal Brand', 'Udemy', 'https://www.udemy.com/certificate/UC-CBTJ4JLE/')}
                {certificate('Practical PHP: Master the Basics and Code Dynamic Websites', 'Udemy', 'https://www.udemy.com/certificate/UC-YMYJQ713/')}
                {certificate('Programming for Everybody', 'Coursera', '/coursera.pdf')}
            </FlexLayout>
        </FlexLayout>

    );
}

export default Certificates;
