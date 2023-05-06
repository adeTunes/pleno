import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { ReactElement } from "react";

function Providers({ children }: { children: ReactElement }) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider>
                <Notifications position="top-right" />
                {children}
            </MantineProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default Providers;
