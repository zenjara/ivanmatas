import {FlexLayout} from "../../ui";
import {Box, Button, Image, Link, Text} from "theme-ui";
import {podcastImage} from "../../ui/assets/images";
import GeneratorIcon from "../../ui/assets/images/generator.svg";
import PlayIcon from "../../ui/assets/images/playIcon.svg";

const ContentItem = ({
                         isPodcast = false,
                         episodeText = 'Ep. #01',
                         title = 'DIY - Create Your Own Rails Generator',
                         description = 'Generators are an essential tool to improve your workflow. In a few simple steps, we’ll walk you through the process of creating your very own generator...',
                         btnText = isPodcast ? 'Play' : 'Read more',
                         img = null,
                         url = 'https://medium.com/@ivanmatas/diy-create-your-own-rails-generator-6bf3d299a009'
                     }) => {

    const episodeBadge = () => {
        return (<FlexLayout mb={12} bg='black' px={11} py='7px' sx={{borderRadius: '16px', maxWidth: 'max-content'}}>
            <Text color='white' sx={{fontSize: '12px', lineHeight: '14px'}}>{episodeText}</Text>
        </FlexLayout>)
    }

    return (
        <FlexLayout flexDirection={['column', 'row']} alignItems='center' p={[0, '24px']} sx={{
            minHeight: '310px',
            maxWidth: '1020px',
            borderRadius: '0px 8px 8px 0px',
            boxShadow: '0px 12px 40px rgba(38, 50, 56, 0.13)'
        }} bg='white'>
            <Box sx={{
                flexBasis: '50%', borderRadius: '8px 0px 0px 8px', padding: ['24px 12px 0'],
                height: '100%',
                width: '100%',
                maxWidth: ['300px', '100%']
            }}>
                {isPodcast ?
                    (<Image src={podcastImage}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: isPodcast ? 'contain' : 'fill',
                                borderRadius: '8px 0px 0px 8px'
                            }}/>)
                    : <GeneratorIcon/>
                }
            </Box>
            <FlexLayout px={['12px', '44px']} py={isPodcast ? [24, 20] : [24, 40]} flexBasis='50%'
                        flexDirection='column'>
                {isPodcast && episodeBadge()}
                <Text as='h4' mb={isPodcast ? [16, 32] : [16, 40]} variant='contentItemTitle'>{title}</Text>
                <Text as='p' mb={[24, 56]} variant='contentDescription'>{description}</Text>
                <Link href={url} sx={{alignSelf: 'center'}} target="_blank">
                    <Button>
                        {isPodcast && <FlexLayout mr={10}><PlayIcon/></FlexLayout>}
                        {btnText}
                    </Button>
                </Link>
            </FlexLayout>
        </FlexLayout>
    );
}

export default ContentItem;
