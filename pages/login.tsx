import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";

function Login() {
    return (
        <main className="overflow-auto h-full flex justify-center items-center">
            <section className="p-[64px] flex flex-col items-center gap-[36px] h-fit bg-[#1B1C21] border border-[#27282E] rounded-lg">
                <img
                    src="/authentication/pleno-logo.png"
                    alt="Pleno Logo"
                    className="h-[44px]"
                />
                <div className="flex gap-[32px] flex-col">
                    <h2 className="text-[20px] text-center leading-[30px] text-white ">
                        Welcome back!
                    </h2>
                    <div className="gap-6 flex flex-col">
                        <TextInput
                            styles={{
                                label: { color: "rgba(255, 255, 255, 0.9)" },
                            }}
                            classNames={{
                                label: "text-base leading-6",
                                input: " h-[52px] w-[391px] bg-transparent border border-pleno-stroke-neutral-500 rounded-lg",
                                wrapper: "w-full",
                                root: "flex flex-col items-start gap-2",
                            }}
                            className=" placeholder:text-pleno-stroke-neutral-500"
                            label="Your email address"
                            placeholder="Enter email"
                            type="email"
                        />
                        <div className="flex flex-col gap-4">
                            <PasswordInput
                                styles={{
                                    label: {
                                        color: "rgba(255, 255, 255, 0.9)",
                                    },
                                }}
                                classNames={{
                                    label: "text-base leading-6",
                                    input: " h-[52px] w-[391px] bg-transparent border border-pleno-stroke-neutral-500 rounded-lg",
                                    wrapper: "w-full",
                                    root: "flex flex-col items-start gap-2",
                                }}
                                className=" placeholder:text-pleno-stroke-neutral-500"
                                label="Your password"
                                placeholder="Enter password"
                            />
                            <Link
                                href="/forgot-password"
                                className="self-end text-pleno-primary-500 text-[13px]"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[14px] items-center">
                            <Button className=" bg-pleno-primary-500 w-full hover:bg-pleno-primary-500 rounded-[4px] h-[49px]">
                                Login
                            </Button>
                            <p className="text-[white] leading-6">
                                Don’t have an account yet?{" "}
                                <Link
                                    href="/register"
                                    className="text-[#5EA09F]"
                                >
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
