export default {
    breakpoints: ['40em', '52em', '64em'],
    fonts: {
        body: 'Lato, system-ui, sans-serif',
        heading: 'Montserrat, sans-serif',
        monospace: 'Menlo, monospace',
        lato: 'Lato, sans-serif',
        montserrat: 'Montserrat, sans-serif',
    },
    colors: {
        text: '#000',
        description: '#2F2929',
        descriptionMobile: 'rgba(48, 48, 48, 1)',
        header: '#111111',
        background: '#fff',
        primary: '#F6635A',
        skill: '#757474',
    },
    text: {
        nameLogo: {
            color: 'header',
            fontFamily: 'montserrat',
            fontSize: ['16px', '24px'],
            fontWeight: 500,
            lineHeight: '29px'
        },
        jobTitle: {
            color: 'description',
            fontFamily: 'montserrat',
            fontSize: ['12px', '16px'],
            fontWeight: 300,
            lineHeight: '20px',
        },
        headerLinks: {
            color: 'header',
            fontFamily: 'montserrat',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '20px',
            cursor: 'pointer'
        },
        headerLinksMobileMenu: {
            color: 'white',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '24px',
        },
        introTitle: {
            color: '#474343',
            fontFamily: 'Source Sans Pro',
            fontSize: '112px',
            lineHeight: '100px',
            letterSpacing: '0.02em',
            textTransform: 'uppercase'
        },
        intro: {
            color: ['descriptionMobile', 'description'],
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.02em'
        },
        contentTitle: {
            fontFamily: 'montserrat',
            fontWeight: 600,
            fontSize: ['20px', "28px"],
            lineHeight: "34px",
        },
        contentItemTitle: {
            fontWeight: [400, 600],
            fontSize: "20px",
            lineHeight: "24px",
            borderBottom: '2px solid',
            borderColor: 'primary',
            maxWidth: 'max-content',
            paddingBottom: '8px'
        },
        contentDescription: {
            color: 'description',
            fontFamily: 'lato',
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
        },
        divider: {
            color: 'white',
            fontFamily: 'montserrat',
            fontWeight: 600,
            fontSize: ['14px', '20px'],
            lineHeight: '24px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
        },
        contactText: {
            color: 'rgba(0, 0, 0, 0.5)',
            fontFamily: 'lato',
            fontSize: ['14px', '18px'],
            fontWeight: 300
        },
        aboutTitle: {
            color: 'background',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '33px',
            maxWidth: 'max-content',
        },
        aboutItem: {
            color: 'header',
            fontWeight: 400,
            fontSize: ['14px', '18px'],
            maxWidth: 'max-content',
        },
        aboutItemSubtitle: {
            color: 'header',
            fontWeight: 300,
            fontSize: ['12px', '16px'],
            maxWidth: 'max-content',
        },
        skillsTitle: {
            color: 'header',
            fontWeight: 800,
            fontSize: ['16px', '32px'],
            lineHeight: '38px',
            letterSpacing: '0.04em'
        },
        skillsSubtitle: {
            color: 'skill',
            fontWeight: 600,
            fontSize: ['12px', '20px'],
            textTransform: 'uppercase'
        }
    },
    buttons: {
        primary: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bg: 'primary',
            borderRadius: '8px',
            padding: '10px 40px',
            cursor: 'pointer',
            width: '164px',
            height: '48px'
        },
        toggle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 24px',
            border: '1px solid',
            cursor: 'pointer',
            minWidth: '130px',
            minHeight: '36px',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '19px'
        }
    },
    links: {
        main: {
            color: 'primary',
            textDecoration: 'underline'
        }
    }
}
