import { useState } from "react";
import Calculator from "../Calendar/Calendar";
const InputForm = () => {
    const [date, setDate] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [enableSubmit, setEnableSubmit] = useState(false);
    const collectData = (event) =>{
        setEnableSubmit(true);
        setShowCalendar(false);
        const data = event.target.value;
        setDate(data);
    }

    const dateSubmit = () => {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", showCalendar);
        if (date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            console.log("date.match(/\d{4}-\d{2}-\d{2}/)", date.match(/\d{4}-\d{2}-\d{2}/))
            setShowCalendar(true);    
        } else {
            alert("wrong date format. Please reenter");
        }
    }

    return ( 
        <>
            <div className="text-xl font-bold px-4 py-6">Hello Folks, Welcome to Calendar App. If you want to know which day of the Month a specific Date falls on. Please enter the date in input field</div>
                <div className="flex self-center flex-col max-width-[25%]">
                    <input role="date-input" name="fdate" className="text-center border-indigo-700 border-4" type="text" placeholder="yyyy-mm-dd" onChange={(e) => {collectData(e)}} value={date}/>
                    <button disabled={!enableSubmit} role="date-submit" onClick={dateSubmit} className=" rounded-full border-2 border-indigo-700 bg-blue-700 my-4">Show</button>
                </div>
                {
                    showCalendar && <Calculator dateValue={date}/>
                }   
            
        </>
     );
}
 
export default InputForm;