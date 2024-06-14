import Link from "next/link";



export default function ItemDetails() {
    return(
        <>
            <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <a className="text-[#60778a] text-base font-medium leading-normal" href="#">Home</a>
              <span className="text-[#60778a] text-base font-medium leading-normal">/</span>
              <span className="text-[#111518] text-base font-medium leading-normal">Audio</span>
            </div>
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px]"
                ></div>
              </div>
            </div>
            <h1 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Beats Studio Buds</h1>
            <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Beats Studio Buds are the latest true wireless earbuds from Beats. With active noise cancellation, a comfortable fit and a balanced sound profile, they're a great
              choice for anyone looking for high-quality audio
            </p>
            <p className="text-[#60778a] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">4.5 of 5 stars</p>
            <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Color</h3>
            <div className="flex gap-3 p-3 overflow-x-hidden">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f5] pl-4 pr-4">
                <p className="text-[#111518] text-sm font-medium leading-normal">Black</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f5] pl-4 pr-4">
                <p className="text-[#111518] text-sm font-medium leading-normal">White</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f5] pl-4 pr-4">
                <p className="text-[#111518] text-sm font-medium leading-normal">Red</p>
              </div>
            </div>
            <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Price</h3>
            <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-2 pt-4">$149</h2>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <Link href="/cart"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Add to Cart</span>
                </Link>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        </>
    )
}
