const ContactBar = () => {
  return (
    <div className="portlet bg-[#E2E2E2] w-full text-[#757575] my-11" id="yw18">
      <div className="portlet-content">
        <div className="flex flex-col lg:flex-row justify-between text-black-87 p-6 text-sm max-w-screen-xl mx-auto">
          {/* تلفن */}
          <div className="flex items-center mb-4 lg:mb-0">
            <span className="flex gap-2 items-center text-gray">
<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6038 12.7268L15.5652 9.08666C15.2572 8.69067 15.1032 8.49267 15.0225 8.27061C14.9511 8.07411 14.9215 7.86486 14.9357 7.65628C14.9518 7.42055 15.045 7.18766 15.2313 6.72187L15.942 4.94513C16.2177 4.25581 16.3556 3.91116 16.5934 3.68525C16.8029 3.48618 17.0656 3.3519 17.3496 3.29856C17.672 3.23803 18.0321 3.32806 18.7524 3.50812L20.7197 4.00002C20.7197 14 13.72 21 3.71973 21L3.2281 19.0324C3.04804 18.3122 2.95801 17.952 3.01854 17.6297C3.07188 17.3456 3.20616 17.083 3.40522 16.8734C3.63113 16.6356 3.97579 16.4977 4.66511 16.222L6.25064 15.5878C6.78204 15.3752 7.04773 15.2689 7.31264 15.2608C7.54678 15.2536 7.77934 15.3013 7.99171 15.4002C8.23199 15.512 8.43434 15.7144 8.83904 16.1191L11.9254 19.1569" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>              
<span >02133902646</span>
            </span>
          </div>

          {/* ساعات  */}
          <div className="flex items-center mb-4 lg:mb-0 leading-7">
            <span className="flex gap-2 items-center text-gray">
<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>              <span>
                شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18 پنجشنبه‌ها از 10 صبح الی ساعت 16
              </span>
            </span>
          </div>

          {/* آدرس */}
          <div className="flex items-center gap-2 leading-7 lg:items-center text-gray">
<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path stroke="#000000" stroke-linejoin="round" stroke-width="2" d="M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
  <path stroke="#000000" stroke-linejoin="round" stroke-width="2" d="M17.5 9.5c0 3.038-2 6.5-5.5 10.5-3.5-4-5.5-7.462-5.5-10.5a5.5 5.5 0 1 1 11 0Z"/>
</svg>            <span>
              تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه بدیع
            </span>
          </div>

          {/* دکمه برو بالا */}
          <div
  id="button"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="hidden xl:flex bg-white text-xs text-gray rounded-xl p-2 pr-2 pl-1 cursor-pointer hover-black items-center show w-24 justify-between leading-5 shadow-md"
>
  <span>برو بالا</span>
  <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
      fill="#000000"
    />
  </svg>
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactBar;
