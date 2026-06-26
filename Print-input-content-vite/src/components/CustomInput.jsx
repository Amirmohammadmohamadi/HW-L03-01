const CustomInput = ({type,id,onFocus})=> {
    return (
        <input type={type} id={id} onFocus={onFocus} className="py-1.5 px-3 border border-fuchsia-700 text-fuchsia-700 rounded-xs outline-none"/>
    );
};

export default CustomInput;