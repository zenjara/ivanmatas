import {FlexLayout} from "../../ui";
import {Link, Text} from "theme-ui";

const Footer = () => {
    return (
        <FlexLayout mb={24} justifyContent='center' alignItems='center' flexDirection='column'>
            <Text mb='8px' sx={{fontSize: ['12px', '14px'], fontWeight: 500}}>Copyright© Ivan
                Matas. {new Date().getFullYear()} All rights reserved. </Text>
            <Text pl={2} sx={{fontSize: ['12px', '14px'], borderLeft: '1px solid red'}}>Design by: <Link
                href='https://www.linkedin.com/in/tea-matas-a8345b115/' target="_blank" sx={{fontWeight: 600}}>Tea
                Matas</Link> </Text>
        </FlexLayout>

    );
}

export default Footer;
