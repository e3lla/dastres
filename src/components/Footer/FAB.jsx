import React, { useState } from "react";
import Imagesvg from "../../../public/Images/7.svg"

const FAB = () => {
  const [open, setOpen] = useState(false);

  const BUTTON_SIZE = 56; 
  const GAP = 12;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative w-14 h-14">
        <div
          role="dialog"
          aria-hidden={!open}
          className="absolute right-0"
          style={{
            bottom: open ? `${BUTTON_SIZE + GAP}px` : `-${BUTTON_SIZE}px`,
            transition: "bottom 180ms ease, opacity 180ms ease",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transformOrigin: "bottom right",
            width: 320,
            maxWidth: "calc(100vw - 48px)",
            zIndex: 9998,
          }}
        >
          <div className="card bg-primary text-primary-content shadow-lg">
            <div className="card-body">
              <p>
                
سیستم مشاوره و پشتیبانی آنلاین دسترسی
www.dastresi.com
              </p>
              <div className="card-actions justify-end">
                <button className="btn">شروع مکالمه</button>
              </div>
            </div>
          </div>
        </div>

       <button
  type="button"
  aria-label="open-fab"
  aria-expanded={open}
  onClick={() => setOpen((v) => !v)}
  className="absolute fbabg right-0 bottom-0 btn btn-lg btn-circle shadow-lg"
  style={{ 
    zIndex: 9999, 
    backgroundColor: "#3f51b5", 
    padding: 0,
  }}
>
  <img 
    src={Imagesvg}
    alt="chat-logo" 
    className="w-10 h-10 m-auto" 
  />
</button>

      </div>
    </div>
  );
};

export default FAB;