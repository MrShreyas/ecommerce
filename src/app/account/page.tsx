


export default function Account() {
    return(
        <>
            <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-[#111518] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Hello, Helen!</h1>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Account</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex flex-col justify-center">
                  <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">UserName</p>
                  <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">Helen</p>
                </div>
                <div className="shrink-0">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Change</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">Email</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">helen@gmail.com</p>
              </div>
              <div className="shrink-0">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-medium leading-normal w-fit"
                >
                  <span className="truncate">Change</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#111518] text-base font-normal leading-normal flex-1 truncate">Password</p>
              <div className="shrink-0">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-medium leading-normal w-fit"
                >
                  <span className="truncate">Change</span>
                </button>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Personal Info</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">Phone Number</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">650-394-3857</p>
              </div>
              <div className="shrink-0">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-medium leading-normal w-fit"
                >
                  <span className="truncate">Change</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">Date of Birth</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">04-29-1989</p>
              </div>
              <div className="shrink-0">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-medium leading-normal w-fit"
                >
                  <span className="truncate">Change</span>
                </button>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Saved Addresses</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#111518] text-base font-normal leading-normal flex-1 truncate">Add a new address</p>
              <div className="shrink-0">
                <div className="text-[#111518] flex size-7 items-center justify-center" data-icon="Plus" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-4 bg-white px-4 py-3 justify-between">
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal">123 Main St</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal">San Francisco, CA 94107</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal">Helen • 123 Main St</p>
              </div>
              <div className="shrink-0">
                <div className="text-[#111518] flex size-7 items-center justify-center" data-icon="Pencil" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Payment Methods</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#111518] text-base font-normal leading-normal flex-1 truncate">Add a new payment method</p>
              <div className="shrink-0">
                <div className="text-[#111518] flex size-7 items-center justify-center" data-icon="Plus" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">Visa ending in 1234</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">Visa • 1234</p>
              </div>
              <div className="shrink-0">
                <div className="text-[#111518] flex size-7 items-center justify-center" data-icon="Pencil" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">MasterCard ending in 5678</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">MasterCard • 5678</p>
              </div>
              <div className="shrink-0">
                <div className="text-[#111518] flex size-7 items-center justify-center" data-icon="Pencil" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Preferences</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#111518] text-base font-normal leading-normal flex-1 truncate">Communication Preferences</p>
              <div className="shrink-0">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-medium leading-normal w-fit"
                >
                  <span className="truncate">Edit</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#111518] text-base font-normal leading-normal flex-1 truncate">Country</p>
              <div className="shrink-0">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-medium leading-normal w-fit"
                >
                  <span className="truncate">United States</span>
                </button>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Save</span>
              </button>
            </div>
          </div>
        </div>
        </>
    )
}