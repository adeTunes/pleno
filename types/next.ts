import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageX = NextPage & {
    Layout?: (props: { children: ReactNode }) => ReactElement;
    LayoutProps?: { [key: string]: string };
};

export type AppPropsX = AppProps & {
    Component: NextPageX;
};
