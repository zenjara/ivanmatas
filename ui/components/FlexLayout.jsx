import {Box, BoxProps} from 'theme-ui';

const FlexLayout = (
    {
        alignItems,
        display = 'flex',
        flexBasis,
        flexDirection = 'row',
        flexGrow,
        flexShrink,
        flexWrap,
        justifyContent,
        space,
        sx = {},
        ...rest
    },
    ref,
) => {
    const marginDirection = flexDirection === 'column' ? 'mb' : 'mr';

    return (
        <Box
            sx={{
                ...sx,
                alignItems,
                display,
                flexBasis,
                flexDirection,
                flexGrow,
                flexShrink,
                flexWrap,
                justifyContent,
                '> :not(:last-child)': {
                    [marginDirection]: space,
                },
            }}
            {...rest}
        />
    );
};

export default FlexLayout;
