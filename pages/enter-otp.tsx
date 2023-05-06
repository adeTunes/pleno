import { Button, PinInput } from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";

function EnterOTP() {
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
                            Enter your email address below, and we&apos;ll email
                            you a 6-digit pin to reset your password.
                        </p>
                    </div>
                    <div className="gap-8 flex flex-col">
                        <PinInput
                            classNames={{
                                root: "justify-between",
                                input: " h-[54px] w-[50px] text-white bg-transparent border border-pleno-stroke-neutral-500 rounded-lg",
                            }}
                            type="number"
                            length={6}
                        />
                        <div className="flex flex-col gap-11 items-center">
                            <div className="flex flex-col gap-6 items-center w-full">
                                <Button className=" bg-pleno-primary-500 w-full hover:bg-pleno-primary-500 rounded-[4px] h-[49px]">
                                    Submit
                                </Button>
                                <p className="text-[white] leading-6">
                                    Can&apos;t find 6-digit pin?{" "}
                                    <span className="text-[#5EA09F]">
                                        Resend Pin
                                    </span>
                                </p>
                            </div>
                            <Link
                                href="/login"
                                className="text-[white] flex cursor-pointer items-center text-[13px] gap-3 leading-5"
                            >
                                <ArrowLeft2 size="20" color="#FFFFFF" />
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default EnterOTP;
