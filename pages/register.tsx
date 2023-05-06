import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";

function SignUp() {
    const labelStyles = { color: "rgba(255, 255, 255, 0.9)" };
    const inputStyles = {
        label: "text-base leading-6",
        input: " h-[52px] w-[391px] bg-transparent border border-pleno-stroke-neutral-500 rounded-lg",
        wrapper: "w-full",
        root: "flex flex-col items-start gap-2",
    };
    return (
        <main className="overflow-auto h-full flex justify-center items-center">
            <section className="p-[64px] flex flex-col items-center gap-[18px] h-fit bg-[#1B1C21] border border-[#27282E] rounded-lg">
                <img
                    src="/authentication/pleno-logo.png"
                    alt="Pleno Logo"
                    className="h-[44px]"
                />
                <div className="flex gap-[36px] flex-col">
                    <h2 className="text-[20px] text-center leading-[30px] text-white ">
                        Let&apos;s create an account for you
                    </h2>
                    <div className="gap-6 flex flex-col">
                        <TextInput
                            styles={{
                                label: labelStyles,
                            }}
                            classNames={inputStyles}
                            className=" placeholder:text-pleno-stroke-neutral-500"
                            label="Your email address"
                            placeholder="Enter email"
                            type="email"
                        />
                        <TextInput
                            styles={{
                                label: labelStyles,
                            }}
                            classNames={inputStyles}
                            className=" placeholder:text-pleno-stroke-neutral-500"
                            label="Your first name"
                            placeholder="Enter first name"
                        />
                        <PasswordInput
                            styles={{
                                label: labelStyles,
                            }}
                            classNames={inputStyles}
                            className=" placeholder:text-pleno-stroke-neutral-500"
                            label="Your password"
                            placeholder="Enter password"
                        />
                        <PasswordInput
                            styles={{
                                label: labelStyles,
                            }}
                            classNames={inputStyles}
                            className=" placeholder:text-pleno-stroke-neutral-500"
                            label="Confirm password"
                            placeholder="Re-enter password"
                        />
                        <div className="flex flex-col gap-[14px] items-center">
                            <Button className=" bg-pleno-primary-500 w-full hover:bg-pleno-primary-500 rounded-[4px] h-[49px]">
                                Create Account
                            </Button>
                            <p className="text-[white] text-[13px] leading-6">
                                Already have an account?{" "}
                                <Link href="/login" className="text-[#5EA09F]">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default SignUp;
