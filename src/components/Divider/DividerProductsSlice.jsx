import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDividerProducts = createAsyncThunk(
  'dividerProducts/fetchDividerProducts',
  async (_, { rejectWithValue }) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch('http://localhost:3001/dividerProducts', {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`خطای HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      if (error.name === 'AbortError') {
        return rejectWithValue('اتصال timeout خورد. سرور پاسخ نمی‌دهد');
      }
      return rejectWithValue(`سرور در دسترس نیست: ${error.message}`);
    }
  }
);

const DividerProductsSlice = createSlice({
  name: "dividerProducts",
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDividerProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchDividerProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDividerProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const selectDividerProducts = (state) => state.dividerProducts.items;
export const selectDividerProductsStatus = (state) => state.dividerProducts.status;
export const selectDividerProductsError = (state) => state.dividerProducts.error;

export default DividerProductsSlice.reducer;