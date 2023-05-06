import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";

function Home() {
    const { push } = useRouter();
    useLayoutEffect(() => {
        push("/login");
    }, []);
    return <div />;
}

export default Home;
