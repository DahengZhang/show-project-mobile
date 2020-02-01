import App from 'next/app'

import '../assets/reset.scss'

export default class _App extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, isServer: !!ctx.req }) : {})
            }
        }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Component {...pageProps} />
        )
    }
}
