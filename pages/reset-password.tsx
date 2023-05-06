import { Button, PasswordInput } from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";

function ResetPassword() {
    return (
        <main className="overflow-auto h-full flex justify-center items-center">
            <section className="p-[64px] flex flex-col items-center gap-[36px] h-fit bg-[#1B1C21] border border-[#27282E] rounded-lg">
                <img
                    src="/authentication/pleno-logo.png"
                    alt="Pleno Logo"
                    className="h-[44px]"
                />
                <div className="flex gap-[55px] flex-col">
                    <div className="flex flex-col gap-[27px]">
                        <h2 className="text-[20px] text-center leading-[30px] text-white ">
                            Forgot password?
                        </h2>
                        <p className="text-pleno-white-700 max-w-[371px] text-center">
                            Kindly provide a new password for your account.
                        </p>
                    </div>
                    <div className="gap-8 flex flex-col">
                        <PasswordInput
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
                            label="New password"
                            placeholder="Input new password"
                        />
                        <PasswordInput
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
                            label="Confirm password"
                            placeholder="Re-enter new password"
                        />
                        <div className="flex flex-col gap-6 items-center">
                            <Button className=" bg-pleno-primary-500 w-full hover:bg-pleno-primary-500 rounded-[4px] h-[49px]">
                                Submit
                            </Button>
                            <Link
                                href="/login"
                                className="text-[white] flex cursor-pointer items-center text-[13px] gap-3 leading-5"
                            >
                                <ArrowLeft2 size="20" color="#FFFFFF" />
                                Back to Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ResetPassword;
