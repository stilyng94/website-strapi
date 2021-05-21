import React from "react";
import Head from "next/head";

type IMetaProps = {
    title?: string
}


const Meta = ({ title = "SAYeTECH" }: IMetaProps) => {
    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=7" />
            <meta name="description" content="SAYeTECH Company Limited website" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="70x70" href="/ms-icon-70x70.png" />
            <link rel="icon" type="image/png" sizes="144x144" href="/ms-icon-144x144.png" />
            <link rel="icon" type="image/png" sizes="150x150" href="/ms-icon-150x150.png" />
            <link rel="icon" type="image/png" sizes="310x310" href="/ms-icon-310x310.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#ffffff" />
            <meta property="og:description" content="What we do here" />
            <meta property="og:url" content="https://sayetech.io" />
            <meta property="og:image" content="https://sayetech.io/image" />
            <meta
                name="keywords"
                content="SAYeTECH,sayetech,SAYETECH,THRESHER,thresher,Multi-crop,MULTI-CROP,multicrop,Agric,Agriculture,maize,sorghum,millet,rice"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title key="default">{title}</title>
        </Head>
    );
};

export default Meta;
