import {Box, Link} from "theme-ui";
import LinkedinIcon from "../../ui/assets/images/linkedin_black.svg";
import InstagramIcon from "../../ui/assets/images/instagram.svg";
import GithubIcon from "../../ui/assets/images/github.svg";
import YoutubeIcon from "../../ui/assets/images/youtube.svg";
import {FlexLayout} from "../../ui";


const SocialIcons = ({color = 'inherit', justifyContent = 'flex-start', space = [24, 20], mt = 0}) => {
    return (
        <FlexLayout pl={['8px', 32]} space={space} justifyContent={justifyContent} mt={mt}>
            <Box sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                <Link href='https://www.linkedin.com/in/ivan-matas-258326107/'
                      target="_blank"><LinkedinIcon color={color}/></Link>
            </Box>
            <Box sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                <Link href='https://www.instagram.com/xivanmatas/' target="_blank"><InstagramIcon color={color}/></Link>
            </Box>
            <Box sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                <Link href='https://github.com/zenjara' target="_blank"><GithubIcon color={color}/></Link>
            </Box>
            <Box sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                <Link href='https://www.youtube.com/channel/UCjSkilftOHgTQQfP-BQV8HQ'
                      target="_blank"><YoutubeIcon color={color}/></Link>
            </Box>
        </FlexLayout>
    );
}

export default SocialIcons;

