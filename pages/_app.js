import '../styles/globals.css'
import {ThemeProvider} from 'theme-ui'
import theme from '../ui/theme/index'
import Head from "next/head";


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <title>Ivan Matas</title>
            </Head>
            <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
        </>
    )
}

export default MyApp
