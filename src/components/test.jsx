import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import img1 from "../../../../../public/images/pricing/accordion-img1.png";
import img3 from "../../../../../public/images/pricing/accordion-img3.png";

export default function PricingAccordion() {
    // States
    const [isOpen, setIsOpen] = useState(null);
    const toggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));

    return (
        <section className="px-[15px] md:px-[60px] xl:px-[120px] 2xl:px-[350px] py-[70px] lg:py-[100px] dark:bg-slate-900">
            {/* First Accordion */}
            <div className=" rounded-lg hover:border-2 border-blue-600 dark:border-white mb-10 lg:mb-14 bg-blue-50 dark:bg-slate-700 dark:text-white">

                <div>
                    <button onClick={() => toggle(0)} className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-4 md:py-0 px-5 text-black dark:text-white font-medium">
                        <img className="w-24 h-24 lg:w-28 lg:h-28 md:mb-4" src={img1} alt="accordion image" />
                        <div className="space-y-3  text-start">
                            <h2 className="text-xl text-blue-600 dark:text-white font-semibold">See how photo editing pricing works</h2>
                            <p className="text-sm text-blue-600 dark:text-white font-medium">Take a look at what goes into your total cost</p>
                        </div>
                        <div className="rounded-full bg-white p-5">
                            <svg className="shrink-0 fill-[#00A2FF]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen == 0 && '!rotate-180'}`} />
                                <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen == 0 && '!rotate-180'}`} />
                            </svg>
                        </div>
                    </button>
                    <div className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${isOpen == 0 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6"> <h2 className="text-lg md:text-xl font-semibold">Every order is different, and your total photo editing rates will be calculated based on your services, number of images, overall complexity, and speed of your edits.</h2>
                            <p className="text-sm lg:text-base">When you start a new order, we&apos;ll ask a few questions and then analyze your images on the spot. You&apos;ll get an accurate quote right away, so you know exactly how much your order will cost before you finish your request.</p>
                            <p className="text-sm lg:text-base">Here&apos;s a breakdown of what we&apos;re looking at when we assess your order and determine your photo editing rates:</p>
                            <ul>
                                <li className="pb-4">
                                    <div className="flex items-center gap-2 text-sm lg:text-lg"><span className="text-blue-400 dark:text-white">1.</span><h3 className="font-semibold">Service type</h3></div>
                                    <div className="text-sm lg:text-base ps-6 py-2">
                                        Each service has a different starting price based on how complicated it is, and how long it will take your designer. You can also combine services—for example background removal + shadow—and when you do this, you&apos;ll get a combined total that accounts for all of the services you&apos;ve chosen.
                                    </div>
                                </li>
                                <li className="py-4">
                                    <div className="flex items-center gap-2 text-sm lg:text-lg"><span className="text-blue-400 dark:text-white">2.</span><h3 className="font-semibold">Complexity</h3></div>
                                    <div className="text-sm lg:text-base ps-6 py-2">
                                        Not all edits are created equal. If you only need a simple cutout against a plain background, that will cost less than something more complicated (for example, a cutout of a birdcage, or a curly-haired model standing against a wire fence). We&apos;ll analyze each image to see how complicated your edits are, then price them to match.
                                    </div>
                                </li>
                                <li className="py-4">
                                    <div className="flex items-center gap-2 text-sm lg:text-lg"><span className="text-blue-400 dark:text-white">3.</span><h3 className="font-semibold">Turnaround time</h3></div>
                                    <div className="text-sm lg:text-base ps-6 py-2">
                                        The default turnaround time is 24 hours, but if you need your edits faster, you can choose to pay a bit more and get them sooner. Likewise, if you don&apos;t mind waiting, you can save some money.
                                    </div>
                                </li>
                                <li className="pb-4">
                                    <div className="flex items-center gap-2 text-sm lg:text-lg"><span className="text-blue-400 dark:text-white">4.</span><h3 className="font-semibold">Number of copies</h3></div>
                                    <div className="text-sm lg:text-base ps-6 py-2">
                                        Need multiple copies of the same image in different sizes or formats? These are priced per copy, at a rate of 20¢ per file if you&apos;ve chosen the standard turnaround time.
                                    </div>
                                </li>
                            </ul>
                            <div className="bg-blue-100 dark:bg-slate-700 py-8 px-8 rounded-lg space-y-6">
                                <p className="text-lg text-center text-blue-600 dark:text-white">It&apos;s quick and easy to <span className="font-semibold">see exactly how much your photo editing rates will cost.</span> Just start a new order, upload your images, and see your total right there.</p>
                                <div className="flex items-center justify-center">
                                    <PrimaryButton name={"Start Your Free Trial"} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* Second Accordion */}
            <div className=" rounded-lg hover:border-2 border-blue-600 dark:border-white bg-blue-50 dark:bg-slate-700 dark:text-white lg:pt-6 md:pt-4">

                <div>
                    <button onClick={() => toggle(3)} className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-4 md:py-0 px-5 text-black dark:text-white font-medium">
                        <img className="w-24 h-24 lg:w-28 lg:h-28 md:mb-4" src={img3} alt="accordion image" />
                        <div className="space-y-3  text-start">
                            <h2 className="text-xl text-blue-600 dark:text-white font-semibold">Pricing for large orders</h2>
                            <p className="text-sm text-blue-600 dark:text-white font-medium">Get custom support and pricing for high-volume photo edits</p>
                        </div>
                        <div className="rounded-full bg-white p-5">
                            <svg className="shrink-0 fill-[#00A2FF]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen == 3 && '!rotate-180'}`} />
                                <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen == 3 && '!rotate-180'}`} />
                            </svg>
                        </div>
                    </button>
                    <div className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${isOpen == 3 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6"><p className="text-sm lg:text-base">If you need more than 100 images edited at a time, or are ordering 1000+ images per month, we can set you up with custom support and pricing.</p>
                            <p className="text-sm lg:text-base"><Link className="text-sky-400 dark:text-white font-medium dark:font-semibold" href="/contact">Contact us</Link> and we&apos;ll look after you.</p></div>
                    </div>
                </div>
            </div>

        </section>
    )
};