


export default function Cart() {
    return(
        <>
            <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">Your Cart</p></div>
            <div className="flex gap-4 bg-white px-4 py-3 justify-between">
              <div className="flex items-start gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                ></div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[#111518] text-base font-medium leading-normal">Wireless Speaker</p>
                  <p className="text-[#60778a] text-sm font-normal leading-normal">$99.00</p>
                  <p className="text-[#60778a] text-sm font-normal leading-normal">balck</p>
                </div>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-2 text-[#111518]">
                  <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f2f5] cursor-pointer">-</button>
                  <input
                    className="text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none"
                    type="number"
                    value="1"
                  />
                  <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f2f5] cursor-pointer">+</button>
                </div>
              </div>
            </div>
            <div className="flex gap-4 bg-white px-4 py-3 justify-between">
              <div className="flex items-start gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                ></div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[#111518] text-base font-medium leading-normal">Portable Charger</p>
                  <p className="text-[#60778a] text-sm font-normal leading-normal">$29.00</p>
                  <p className="text-[#60778a] text-sm font-normal leading-normal">white</p>
                </div>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-2 text-[#111518]">
                  <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f2f5] cursor-pointer">-</button>
                  <input
                    className="text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none"
                    type="number"
                    value="1"
                  />
                  <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f2f5] cursor-pointer">+</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">Subtotal</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">2 items</p>
              </div>
              <div className="shrink-0"><p className="text-[#111518] text-base font-normal leading-normal">$128.00</p></div>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#2094f3] text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Proceed to checkout</span>
              </button>
            </div>
          </div>
          <div className="layout-content-container flex flex-col w-[360px]">
            <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Promotions</h3>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Enter promo code"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#60778a] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Delivery</h3>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe1e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe1e6] bg-transparent text-transparent checked:border-[#111518] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111518]"
                  name="73c4e51f-1b0e-48ba-bc7b-44ed9b574ab5"
                />
                <div className="flex grow flex-col"><p className="text-[#111518] text-sm font-medium leading-normal">Standard Shipping</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe1e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe1e6] bg-transparent text-transparent checked:border-[#111518] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111518]"
                  name="73c4e51f-1b0e-48ba-bc7b-44ed9b574ab5"
                />
                <div className="flex grow flex-col"><p className="text-[#111518] text-sm font-medium leading-normal">Express Shipping</p></div>
              </label>
            </div>
            <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Payment</h3>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe1e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe1e6] bg-transparent text-transparent checked:border-[#111518] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111518]"
                  name="d2462188-9a93-42e5-b03a-af31552302b6"
                />
                <div className="flex grow flex-col"><p className="text-[#111518] text-sm font-medium leading-normal">Credit or Debit Card</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe1e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe1e6] bg-transparent text-transparent checked:border-[#111518] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111518]"
                  name="d2462188-9a93-42e5-b03a-af31552302b6"
                />
                <div className="flex grow flex-col"><p className="text-[#111518] text-sm font-medium leading-normal">PayPal</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe1e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe1e6] bg-transparent text-transparent checked:border-[#111518] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111518]"
                  name="d2462188-9a93-42e5-b03a-af31552302b6"
                />
                <div className="flex grow flex-col"><p className="text-[#111518] text-sm font-medium leading-normal">Klarna</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe1e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe1e6] bg-transparent text-transparent checked:border-[#111518] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111518]"
                  name="d2462188-9a93-42e5-b03a-af31552302b6"
                />
                <div className="flex grow flex-col"><p className="text-[#111518] text-sm font-medium leading-normal">Google Pay</p></div>
              </label>
            </div>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Card number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#60778a] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="MM/YY"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#60778a] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="CVV"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#60778a] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#dbe1e6] border-2 bg-transparent text-[#2094f3] checked:bg-[#2094f3] checked:border-[#2094f3] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe1e6] focus:outline-none"
                />
                <p className="text-[#111518] text-base font-normal leading-normal">Save credit card for later use</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#dbe1e6] border-2 bg-transparent text-[#2094f3] checked:bg-[#2094f3] checked:border-[#2094f3] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe1e6] focus:outline-none"
                />
                <p className="text-[#111518] text-base font-normal leading-normal">Billing address same as shipping</p>
              </label>
            </div>
          </div>
        </div>
        </>
    )
}