



export default function LandingPageHeader() {

    

    return(
        <>
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-10 py-3">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-[#0e151b]">
                            <div className="size-4">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                                    fill="currentColor"
                                ></path>
                                </svg>
                            </div>
                        <h2 className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em]">Ecommerce</h2>
                        </div>
                        <div className="flex items-center gap-9">
                            <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Featured</a>
                            <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Women</a>
                            <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Men</a>
                            <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Home</a>
                            <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Jewelry</a>
                            <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Beauty</a>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <label className="flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                            <div
                            className="text-[#507695] flex border-none bg-[#e8eef3] items-center justify-center pl-4 rounded-l-xl border-r-0"
                            data-icon="MagnifyingGlass"
                            data-size="24px"
                            data-weight="regular"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                ></path>
                            </svg>
                            </div>
                            <input
                            placeholder="Search"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-full placeholder:text-[#507695] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            
                            />
                        </div>
                        </label>
                        <button
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e8eef3] text-[#0e151b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                        >
                        <div className="text-[#0e151b]" data-icon="ShoppingCart" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
                            ></path>
                            </svg>
                        </div>
                        </button>
                    </div>
            </header>
        </>
    )
}