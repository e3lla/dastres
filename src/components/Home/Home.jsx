import CountDown from "../CountDown/CountDown";
import Divider from "../Divider/Divider";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import ListProducts from "../ListProducts/ListProducts";
import SecondSlider from "../SecondSlider/SecondSlider";
import Slider2 from "../ProductCard/Slider2";
import Why from "../Why/Why";
import Favorite from "../Favorite/Favorite";
import LastArticle from "../LastArticle/LastArticle";

const Home = () => {
    return (
     <>
       <div className=" w-[86%] h-[100%] mx-auto px-4">
         <Slider />

         {/* نسخه دسکتاپ و بقیه سایزها همون قبلی */}
         <div className="card w-full bg-[#E2E2E2] rounded-t-2xl rounded-b-none h-[50px] place-items-end mt-8  hidden sm:hidden md:block ">
            <div className="flex justify-between w-full px-[5%]"> 
              <div className="flex items-center gap-2 xl:text-4xl lg:text-3xl md:text-2xl pt-2.5">
                <svg className="mr-12" fill="#FE5F55" width="30px" height="30px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#FE5F55">
                  <path d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z"/>
                </svg>
                <span>تخفیف‌های روزانه دسترسی</span>
              </div>
              <div className="flex items-center bg-[#E2E2E2] gap-2 text-2xl">
                <CountDown />
              </div>
            </div>
         </div>

         {/* محصولات دسکتاپ */}
         <div className="w-[100%] h-[839px] xl:h-[600px]  lg:h-[650px] bg-[#E2E2E2] rounded-2xl rounded-t-none hidden pr-[5%] 2xl:flex xl:flex lg:flex md:flex">
            <Products/>  
          <Divider/> 
         </div>

         {/* نسخه sm: تخفیف‌ها داخل قسمت سبز */}
         <div className="w-full justify-center sm:h-[1010px]   mt-8 bg-[#E2E2E2] rounded-2xl sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden flex-col">
            <div className="card w-full bg-[#E2E2E2] rounded-t-2xl rounded-b-none h-[50px] place-items-end  mt-[-10px]">
              <div className="flex justify-between w-full px-[5%]">
                <div className="flex items-center gap-2 text-[19px]  pt-2.5">
                  <svg className="mr-12" fill="#FE5F55" width="30px" height="30px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#FE5F55">
                    <path d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z"/>
                  </svg>
                  <span>تخفیف‌های روزانه دسترسی</span>
                </div>
                <div className="sm:flex hidden items-center bg-[#E2E2E2] gap-2 text-xl">
                  <CountDown />
                </div>
              </div>
            </div>

            <ListProducts/>
         </div>

         <div>
           <SecondSlider/>
         </div>

         <div className="w-full h-[545px] mt-[60px] mx-auto rounded-2xl bg-[#E2E2E2]">
           <Slider2/>
         </div>

         <Why/>

         <div className="w-full h-[545px] mt-[60px] mx-auto rounded-2xl bg-[#E2E2E2]">
           <Slider2/>
         </div>

         <Favorite/>
         <LastArticle/>
       </div>
     </>
    );
}

export default Home;
