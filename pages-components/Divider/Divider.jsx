import {FlexLayout} from "../../ui";
import {Text} from "theme-ui";

const Divider = ({text = 'Blog & Podcast'}) => {
    return (
        <FlexLayout mb={[56, 98]} px={[10, 40]} py={2} sx={{background: '#F6635A', maxWidth: 'max-content'}}>
            <Text variant='divider'>{text}</Text>
        </FlexLayout>
    );
}

export default Divider;
