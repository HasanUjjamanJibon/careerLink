import React from "react";
import shape1 from "../../assets/Icons/shape-1.png";
import shape2 from "../../assets/Icons/shape-2.png";

const Blogs = () => {
  return (
    <div>
      <div>
        <div className="text-center relative py-28 mb-5 bg-gradient-to-r from-[#7e90f40d] to-[#98ffff0d]">
          <img
            src={shape2}
            className="absolute hidden z-10 lg:block right-0 -top-[75px]"
            alt=""
          />
          <h2 className="text-4xl font-semibold">Blogs</h2>
          <img
            src={shape1}
            className="absolute hidden lg:block left-0 bottom-0"
            alt=""
          />
        </div>
        <div className="px-4 md:px-0 my-12 max-w-7xl mx-auto">
          <div className="h-fit mb-4 p-8 w-full border-2 rounded-md bg-slate-50">
            <h3 className="text-2xl font-semibold">
              When should you use context API?
            </h3>
            <p className="p-6">
              <li>
                When data exists and needs to be accessed by multiple
                components.
              </li>
              <li>
                When I have multiple nested components, passing props through
                multiple components is cumbersome.
              </li>
              <li>
                When there is a need to pass data to unrelated components.
              </li>
            </p>
          </div>
          <div className="h-fit mb-4 p-8 w-full border-2 rounded-md bg-slate-50">
            <h3 className="text-2xl font-semibold">What is a custom hook?</h3>
            <li className="p-6">
              A function of custom hook is a Javascript functionality used in an
              application to make complex tasks simple and reusable.
            </li>
          </div>
          <div className="h-fit mb-4 p-8 w-full border-2 rounded-md bg-slate-50">
            <h3 className="text-2xl font-semibold">What is useMemo?</h3>
            <li className="p-6">
              useRef is a hook in React that returns mutable values ​​and is
              used to access DOM nodes or to store mutable values ​​unrelated to
              the component.
            </li>
          </div>
          <div className="h-fit mb-4 p-8 w-full border-2 rounded-md bg-slate-50">
            <h3 className="text-2xl font-semibold">What is useMemo?</h3>
            <li className="p-6">
              useMemo is a hook in React that memorizes the result of a
              function, so that it recalculates when something changes, thus
              avoiding unnecessary re-rendering and optimizing application
              performance.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
