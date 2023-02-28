import Basic from "./Basic";
import Size from "./Size"
import Border from "./Border"
import Color from "./Color"

export default function inputTest() {
    return <section className={`mt-4`}>
        <h2 className={`text-5xl font-bold text-center`}>inputTest</h2>
        <div className={`mt-4`}>
            <Size />
            <Border/>
            <Color />
            <Basic />
        </div>
    </section>
}
