import * as D from '../data'
import User from './User'
import {Title} from "../components";


export default function UserContainer() {
    const children = D.makeArray(10)
        .map(D.makeRandomUser)
        .map(user => (
            <User user={user} className={`m-2 text-xs border-2 border-blue-300 rounded-lg`}
        minWidth={`15rem`}
        width={`15rem`} />
        ))
    return (
        <section className={`mt-4`}>
            <Title>UserContainer</Title>
            <div className="flex flex-wrap items-center justify-center p-4 mt-4">
                {children}
            </div>
        </section>
    )
}

