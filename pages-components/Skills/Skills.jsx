import {FlexLayout} from "../../ui";
import {Box, Text} from "theme-ui";

const Skills = () => {
    const skill = (name) => {
        return (
            <FlexLayout justifyContent='center' px={['8px', 32]} py={['6px', 16]}
                        sx={{background: '#2F4858', borderRadius: '50px'}}
                        mb={['12px', 36]}>
                <Text sx={{color: 'white', fontSize: ['14px', '16px']}}>{name}</Text>
            </FlexLayout>
        )
    }

    const softSkill = (name) => {
        return (
            <FlexLayout space={['4px', 16]} alignItems='center'>
                <Box sx={{width: '8px', height: '8px', borderRadius: '50%', background: '#F6635A'}}/>
                <Text sx={{fontSize: ['14px', '16px']}}>{name}</Text>
            </FlexLayout>
        )
    }

    const displaySkills = () => {
        return (
            <FlexLayout flexDirection='column' display={['none', 'flex']}>
                <FlexLayout space={['8px', 56]} justifyContent='center'>
                    {skill('Ruby on Rails')}
                    {skill('Javascript')}
                    {skill('React')}
                    {skill('NodeJS')}
                    {skill('HTML')}
                    {skill('CSS')}
                </FlexLayout>
                <FlexLayout space={['8px', 56]} justifyContent='center'>
                    {skill('NextJS')}
                    {skill('Gatsby')}
                    {skill('GIT')}
                    {skill('SQL')}
                    {skill('Rspec')}
                    {skill('PHP')}
                    {skill('Heroku')}
                </FlexLayout>
            </FlexLayout>
        )
    }

    const displaySkillsMobile = () => {
        return (
            <FlexLayout flexDirection='column' display={['flex', 'none']}>
                <FlexLayout space={['8px', 56]} justifyContent='center'>
                    {skill('Ruby on Rails')}
                    {skill('Javascript')}
                    {skill('React')}
                </FlexLayout>
                <FlexLayout space={['8px', 56]} justifyContent='center'>
                    {skill('NodeJS')}
                    {skill('HTML')}
                    {skill('CSS')}
                    {skill('NextJS')}
                    {skill('Gatsby')}
                </FlexLayout>
                <FlexLayout space={['8px', 56]} justifyContent='center'>
                    {skill('GIT')}
                    {skill('SQL')}
                    {skill('Rspec')}
                    {skill('PHP')}
                    {skill('Heroku')}
                </FlexLayout>
            </FlexLayout>
        )
    }

    return (
        <FlexLayout sx={{width: '100%'}} px={[28, 256]} flexDirection='column' alignItems='center' mb={[56, 156]}>
            <Text as='h2' mb={[16, 54]} variant='skillsTitle'>My Skills</Text>
            <FlexLayout flexDirection='column' mb={[32, 58]} space={[24, 48]} alignItems='center'>
                <Text variant='skillsSubtitle'>Technical</Text>
                {displaySkills()}
                {displaySkillsMobile()}
            </FlexLayout>
            <FlexLayout flexDirection='column' space={['8px', 28]} alignItems='center'>
                <Text variant='skillsSubtitle'>Soft</Text>
                <FlexLayout space={[16, 56]} display={['none', 'flex']}>
                    {softSkill('Communication')}
                    {softSkill('Team Work')}
                    {softSkill('Flexibility')}
                    {softSkill('Work ethic')}
                </FlexLayout>
                <FlexLayout flexDirection='column' space={2} display={['flex', 'none']}>
                    <FlexLayout space={[16, 56]}>
                        {softSkill('Communication')}
                        {softSkill('Team Work')}
                    </FlexLayout>
                    <FlexLayout space={[16, 56]}>
                        {softSkill('Flexibility')}
                        {softSkill('Work ethic')}
                    </FlexLayout>
                </FlexLayout>
            </FlexLayout>
        </FlexLayout>
    );
}

export default Skills;
