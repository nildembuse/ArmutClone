import { useState } from "react"

function Form(){
    const [step, setStep] = useState(1)

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <form className="formDuzen" onSubmit={handleSubmit}>
            {
                step === 1 && (<>
                        <label className="markable-elements"> 1+1 <input type="radio" className="home-number-of-flats" />
                            <span className="checkmark"></span>
                        </label>
                </>)
            }

            {
                step === 2 && (<>
                <label className="markable-elements"> 2+1 <input type="radio" className="home-number-of-flats" />
                    <span className="checkmark"></span>
                </label>
             </>)
            }

            {
                step === 3 && (<>
                <label className="markable-elements"> 3+1 <input type="radio" className="home-number-of-flats" />
                    <span className="checkmark"></span>
                </label>
                </>)
            }

            <button _ngcontent-jex-c63="" type="submit" id="next-button" className="devam">Devam</button>
        </form>
    )
}
export default Form