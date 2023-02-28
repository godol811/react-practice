import {Icon} from "../../theme/daisyui/Icon";

export default function IconTest() {
    const onclick = () => alert('Icon clicked')
    return (
        <section className={`mt-4`}>
            <h2 className={`font-bold text-3xl text-center`}>IconTest</h2>
            <div className={`flex items-center justify-around mt-4`}>
                <Icon className={`btn-primary btn-lg `} name="settings" onClick={onclick} />
                <Icon className={`btn-secondary btn-md`} name="done" onClick={onclick} />
                <Icon className={`btn-accent btn-s,`} name="menu" onClick={onclick} />
                <Icon className={`btn-secondary btn-xs`} name="file_upload" onClick={onclick} />
            </div>
        </section>
    )
}
