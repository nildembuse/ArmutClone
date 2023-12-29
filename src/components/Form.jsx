import { useState } from "react"

function Form(){
    const [step, setStep] = useState(1)

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <form className="formDuzen" onSubmit={handleSubmit}>
            {
                step === 1 && (<><input type="radio" /></>)
            }

            {
                step === 2 && (<><input type="radio" /></>)
            }

            {
                step === 3 && (<><input type="radio" /></>)
            }

            
        </form>
    )
}
export default Form