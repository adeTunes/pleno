import React, { ReactNode } from "react";

export default function AuthenticationLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main className="overflow-auto h-full flex justify-center items-center">
            {children}
        </main>
    );
}
