import {useMemo, useCallback} from "react";
import * as D from '../data'
import {Button} from "../theme/daisyui";
import {Title} from "../components";

export default function HighOrderCallback() {
    const alertCallback = (name:string) => () => alert(`${name} clicked`)
    const onClick = useCallback(alertCallback, [])
    const buttons = useMemo(
        () =>
            D.makeArray(3)
                .map(D.randomName)
                .map((name, index) => (
                    <Button key={index} onClick={onClick(name)} className={`btn btn-primary normal-case btn-wide btn-xs`}>
                        {name}
                    </Button>
                )),
        [onClick]
    )
    return (
        <div className={`mt-4`}>
            <Title>Callback</Title>
            <div className={`flex justify-evenly mt-4`}>{buttons}</div>
        </div>
    )
}

