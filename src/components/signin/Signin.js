import { Fragment } from "react";
import { FcApproval } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";
const Signin = () => {

    return (
        <aside className="h-full max-h-[850px] flex justify-center items-center justify-center">
            <section className="w-1/2">
                <img src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?cs=srgb&dl=pexels-anna-nekrashevich-6802049.jpg&fm=jpg" style={{ clipPath: "polygon(0 0, 100% 0, 86% 100%, 1% 100%)" }} width={'649px'} height={'1024px'} />
            </section>

            <section className="w-1/2">
                <h1 className="text-neutral-900 font-sans not-italic font-bold text-2xl tracking-[0.03em]">Create an account with Kanz</h1>
                <span className="inline-flex flex-col">
                    <div className="inline-flex flex-col mt-8">
                        <label className="text-neutral-700 h-5 font-sans not-italic font-semibold text-sm leading-5 tracking-[0.03em]">Full name</label>
                        <input className="box-border rounded-md border-[1px] border-solid border-neutral-300 flex-row items-center px-[13px] py-[9px] w-[400px] h-[42px]" placeholder="Enter here" />
                    </div>
                    <div className="inline-flex flex-col mt-6">
                        <label className="text-neutral-700 h-5 font-sans not-italic font-semibold text-sm leading-5 tracking-[0.03em]">Email address</label>
                        <input className="box-border rounded-md border-[1px] border-solid border-neutral-300 flex-row items-center px-[13px] py-[9px] w-[400px] h-[42px]" placeholder="Enter here" />
                    </div>
                    <div className="inline-flex flex-col mt-6">
                        <label className="text-neutral-700 h-5 font-sans not-italic font-semibold text-sm leading-5 tracking-[0.03em]">Password</label>
                        <input className="box-border rounded-md border-[1px] border-solid border-neutral-300 flex-row items-center px-[13px] py-[9px] w-[400px] h-[42px]" placeholder="Enter here" />
                    </div>
                </span>
                <div className="flex flex-row mt-4">
                    <div className="flex flex-row">
                        <div>
                            <FcApproval />
                        </div>
                        <div className="">
                            <p className="font-sans not-italic font-normal text-sm leading-5 text-center tracking-[0.03em] text-neutral-500">Upper case</p>
                        </div>
                    </div>
                    <div className="flex flex-row pl-4">
                        <div>
                            <FcApproval />
                        </div>
                        <div>
                            <p className="font-sans not-italic font-normal text-sm leading-5 text-center tracking-[0.03em] text-neutral-500"> Lower case letter</p>
                        </div>
                    </div>
                    <div className="flex flex-row pl-4">
                        <div>
                            <FcApproval />
                        </div>
                        <div>
                            <p className="font-sans not-italic font-normal text-sm leading-5 text-center tracking-[0.03em] text-neutral-500">Min 8 character</p>
                        </div>
                    </div>
                </div>
                <div className="py-[9px] px-[17px] w-[418px] h-[38px] l-[824px] t-[522px] bg-cyan-800 rounded-md mt-[20px] flex flex-row">
                    <button className="w-44 text-center font-['Source Sans Pro'] font-semibold text-sm leading-5 tracking-[0.03em] text-white ml-[100px]">Create Account</button>
                </div>
                <span className="flex flex-row mt-[35px] mr-[40px]">
                    <div className="w-1/6 py-[12px]">
                        <hr className="border-neutral-300 w-[142px] h-[1px]" />
                    </div>
                    <div className="w-1/7 ml-[20px]">
                        <p className="font-sans text-center text-neutral-500 not-italic leading-5 tracking-[0.03em] text-sm">Or Sign in with</p>
                    </div>
                    <div className="w-1/6">
                        <hr className="my-[12px] ml-[22px] border-neutral-300 w-[142px] h-[1px]" />
                    </div>
                </span>
                <span className="flex flex-row">
                    <div className="w-1/2">
                        <div className="border-neutral-300 border-solid border-[1px] bg-white py-[9px] px-[17px] w-[202.47px] h-[38px] l-[0px] t-[0px] rounded-md">
                            <div className="flex flex-row justify-center"><TfiLinkedin /></div>
                        </div>
                    </div>
                    <div className="w-1/2 mr-[490px]">
                        <div className="border-neutral-300 border-solid border-[1px] bg-white py-[9px] px-[17px] w-[202.47px] h-[38px] l-[0px] t-[0px] rounded-md">
                            <div className="flex flex-row justify-center"><FaGoogle /></div>
                        </div>
                    </div>
                </span>
            </section>
        </aside>
    );
};

export default Signin;