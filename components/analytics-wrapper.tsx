"use client"

import React from "react";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";



export default function AnalyticsWrapper() {
    return (
        <>
            <GoogleTagManager gtmId={"GTM-N2JMTL7M"} />
            <GoogleAnalytics gaId={"G-HZQ2M6Z3C7"} debugMode={false} />
        </>
    )

}
