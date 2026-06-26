import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const Print = ()=> {
    const buttonClicked = (e)=> {
        e.target.style.backgroundColor="oklch(51.8% 0.253 323.949)";
        e.target.style.color="white";
        e.target.style.boxShadow="0 0 8px oklch(51.8% 0.253 323.949)";
        const input = document.getElementById("input");
        console.log(input.value);
        input.style="";
    };

    const inputFocus = (e)=> {
        e.target.style.boxShadow="0 0 8px oklch(51.8% 0.253 323.949)";
        const button = document.getElementById("button");
        button.style="";
    };
    
    return (
        <div className="flex flex-col items-center gap-3.5 my-20 mx-auto py-4 px-4 w-fit  shadow-xl/30 shadow-fuchsia-400/80 rounded-md">
            <CustomInput id="input" type="text" onFocus={inputFocus}/>
            <CustomButton id="button" onClick={buttonClicked} lable="Print"/>
        </div>
    );
};

export default Print;