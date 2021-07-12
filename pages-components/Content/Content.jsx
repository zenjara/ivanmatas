import {FlexLayout} from "../../ui";
import {Text} from "theme-ui";
import ContentItem from "../ContentItem";

const Content = () => {
    return (
        <FlexLayout flexDirection='column' mb={[80, 220]} px={['16px', 0]}>
            <FlexLayout flexDirection='column' mb={[80, 136]} mx='auto'>
                <Text as='h2' mb={[24, 88]} variant='contentTitle'>Latest Blog Posts</Text>
                <ContentItem/>
            </FlexLayout>
            <FlexLayout flexDirection='column' mx='auto'>
                <Text as='h2' mb={[24, 88]} variant='contentTitle'>Latest Podcasts</Text>
                <ContentItem isPodcast={true} title='Jurica Šeparović - od rada u agenciji do freelanceanja'
                             description='Gost u prvoj epizodi Chakule je Jurica Šeparović. On nas vodi kroz svoj poslovni put i objašnjava nam žašto i kako je počeo s freelance radom.'
                             url='https://www.youtube.com/watch?v=-aEvqLuYTK8&ab_channel=MTSProgramming'/>
            </FlexLayout>
        </FlexLayout>
    );
}

export default Content;
