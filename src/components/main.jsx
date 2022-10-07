import { useState } from "react"
import "./main.css"

export const Main = () => {

    const [text, setText] = useState("")
    let character = text.length,
        txt = text.trim(),
        wrd = txt.split(/\s+/).filter(item => item.length)
        , word = wrd.length
    return (
        <div className="main">

            <div className="d-flex">
                <label htmlFor="main-text-area" className="main-label">
                    <p id="main-p">
                        Enter text...
                    </p>
                </label>
                <textarea
                    name="text"
                    id="main-text-area"
                    className="text-area"
                    placeholder="some text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <div className="count">
                    <div className="bg-black w-5 num">

                        <p>Word: <span>{`${word}`}</span></p>
                    </div>
                    <div className="bg-black w-5 num">
                        <p>Character: <span>{`${character}`}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
