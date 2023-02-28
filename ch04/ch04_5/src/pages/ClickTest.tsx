import {useCallback, useRef} from "react";
import {Title} from "../components";

export default function ClickTest() {
    const inputRef = useRef<HTMLInputElement>(null)
    const onclick = useCallback(() => inputRef.current?.click(), [])


    return (
        <section className={`mt-4`}>
            <Title>Click Test</Title>
            <div className={`mt-4 flex justify-center items-center`}>
                <button className={`btn btn-primary mr-4`} onClick={onclick}>
                    Click ME
                </button>
                <input ref={inputRef} className={`hidden`} type={`file`} accept={`image/*`} />
            </div>
        </section>
    )
}
