import {useCallback, useMemo, useState} from "react";
import type {ChangeEvent} from "react";
import * as D from '../data'
import {Subtitle, Title} from "../components";

export default function RadioInputTest() {

    const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle),[])
    const [selectedJobTitle, setSelectedJobTitle] = useState<string>(jobTitles[0])
    const onchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSelectedJobTitle(notUsed => e.target.value)
    },[])
    const radioInputs = useMemo(
        () =>
    jobTitles.map((value, index) => (
        <label key={index} className={`flex justify-start cursor-pointer label`}>
            <input type={`radio`} name={`jobs`} className={`mr-4 radio radio-primary`} checked={value === selectedJobTitle} defaultValue={value} onChange={onchange}/>
            <span className={`label-text`}>{value}</span>
        </label>
    )),[jobTitles, selectedJobTitle, onchange])


    return (
        <section className={`mt-4`}>
            <Title>RadioInputTest</Title>
            <div className={`flex flex-col justify-center mt-4`}>
                <Subtitle>What is your job?</Subtitle>
                <Subtitle className={`mt-4`}>Selected Job : {selectedJobTitle}</Subtitle>
                <div className={`flex justify-center p-4 mt-4`}>
                    <div className={`flex flex-col mt-4`}>{radioInputs}</div>
                </div>
            </div>
        </section>
    )
}
