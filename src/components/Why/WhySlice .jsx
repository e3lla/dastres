import { createSlice } from "@reduxjs/toolkit";
import Icon1 from  "../../Images/icon1.png"
import Icon2 from  "../../Images/icon2.png"
import Icon3 from  "../../Images/icon3.png"
import Icon4 from  "../../Images/icon4.png"


const initialState = {
  benefits: [
    {
      id: 1,
      title: "مشاوره تخصصی برای خرید محصول",
      description: "برای خرید هر محصول با تیم دسترسی در ارتباط باشید تا بهترین انتخاب رو انجام دهید.",
      icon: Icon2,
    },
    {
      id: 2,
      title: "قیمت مناسب با بالاترین کیفیت",
      description: " گروه دسترسی در تلاش است که کالای با کیفیت را با مناسب‌ترین قیمت به دست شما برساند.",
      icon: Icon1,
    },
    {
      id: 3,
      title: "ارسال سریع",
      description: "ارسال از طریق تیپاکس، پست پیشتاز و پیک موتوری (ویژه تهران) صورت می گیرد.",
      icon: Icon3,
    },
    {
      id: 4,
      title: "امکان خرید حضور",
      description: "مشتری گرامی جهت خرید حضوری می‌توانید به آدرس مندرج در پایین سایت مراجعه نمایید.",
      icon: Icon4,
    },
  ],
};

const WhySlice = createSlice({
  name: "why",
  initialState,
  reducers: {
    updateBenefit(state, action) {
      const { id, title, description, icon } = action.payload;
      const index = state.benefits.findIndex((b) => b.id === id);
      if (index !== -1) {
        state.benefits[index] = { id, title, description, icon };
      }
    },
  },
});

export const { updateBenefit } = WhySlice.actions;
export default WhySlice.reducer;
