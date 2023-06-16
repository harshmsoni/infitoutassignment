import React from "react";

const Input = ({
  FullWidth = false,
  isLabel = false,
  labeltext,
  className,

  ...inputProps
}) => {
  const getWidth = FullWidth ? "w-full" : "";
  return (
    <div className="relative w-full ">
      <input
        className={`peer ${getWidth} h-12 py-4 px-2 transition-all duration-700 ease-in-out  outline-none  brightness-150  font-rubi  text-black   placeholder-transparent  appearance-none   border-2 border-transparent border-zinc-500 selection:bg-blue-700 selection:text-white  ${
          isLabel === false && "placeholder-zinc-400"
        } ${className}`}
        {...inputProps}
      />
      {isLabel && (
        <label
          htmlFor={inputProps.id}
          className={`absolute  transition-all font-serif text-zinc-500 left-2   peer-placeholder-shown:text-zinc-500 peer-placeholder-shon:top-6 px-2   peer-focus:-top-3   placeholder:text-zinc-500   peer-focus:w-min  bg-stone-50 ${
            inputProps.value !== "bg-transparent" && "-top-3 bg-stone-50"
          }`}
        >
          {inputProps.placeholder}
        </label>
      )}
    </div>
  );
};

export default Input;
