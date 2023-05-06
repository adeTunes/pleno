import "@/styles/globals.css";
import Providers from "@/providers";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div
            className="h-screen overflow-auto"
            style={{ background: "#15161A" }}
        >
            <Providers>
                <Component {...pageProps} />
            </Providers>
        </div>
    );
}
