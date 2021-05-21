import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from 'next/app'
import CustomTheme from "../utils/theme"
import withClient from "../helpers/build_client"


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={CustomTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {

    const client = withClient(ctx)
    let data = {};

    //Do any initial fetch

    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx, client);
    }

    return { pageProps, ...data };
};



export default MyApp