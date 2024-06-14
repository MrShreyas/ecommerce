import Link from "next/link"
import LandingPageHeader from "./landing-page-header"



export default function LandingPage() {
    return(
        <>
            <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="@container">
                        <div className="@[480px]:p-4">
                            <div
                            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                            >
                            <div className="flex flex-col gap-2 text-center">
                                <h1
                                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                                >
                                The Summer Collection
                                </h1>
                                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                Elevate your wardrobe with our latest styles
                                </h2>
                            </div>
                            <Link href="/item-details"
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2c90e2] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                            >
                                <span className="truncate">Shop Now</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Women's Clothing</h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            ></div>
                            <div>
                            <p className="text-[#0e151b] text-base font-medium leading-normal">Linen Sundress</p>
                            <p className="text-[#507695] text-sm font-normal leading-normal">$120</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            ></div>
                            <div>
                            <p className="text-[#0e151b] text-base font-medium leading-normal">Silk Slip Dress</p>
                            <p className="text-[#507695] text-sm font-normal leading-normal">$85</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            ></div>
                            <div>
                            <p className="text-[#0e151b] text-base font-medium leading-normal">Cotton Maxi Dress</p>
                            <p className="text-[#507695] text-sm font-normal leading-normal">$95</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            ></div>
                            <div>
                            <p className="text-[#0e151b] text-base font-medium leading-normal">Denim Mini Skirt</p>
                            <p className="text-[#507695] text-sm font-normal leading-normal">$60</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            ></div>
                            <div>
                            <p className="text-[#0e151b] text-base font-medium leading-normal">Ribbed Tank Top</p>
                            <p className="text-[#507695] text-sm font-normal leading-normal">$30</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            ></div>
                            <div>
                            <p className="text-[#0e151b] text-base font-medium leading-normal">Chiffon Blouse</p>
                            <p className="text-[#507695] text-sm font-normal leading-normal">$70</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            ></div>
                            <div>
                            <p className="text-[#0e151b] text-base font-medium leading-normal">Knit Cardigan</p>
                            <p className="text-[#507695] text-sm font-normal leading-normal">$75</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            ></div>
                            <div>
                            <p className="text-[#0e151b] text-base font-medium leading-normal">Pleated Midi Skirt</p>
                            <p className="text-[#507695] text-sm font-normal leading-normal">$80</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}