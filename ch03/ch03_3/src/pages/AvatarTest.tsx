import * as D from '../data'
import {Avatar, Div, Title} from "../components";

export default function AvatarTest() {
    const avatars = D.range(0,10).map(index => (
        <Avatar
            className="inline-block -ml-6 border-4 border-white"
            key={index}
            src={D.randomAvatar()}
        />
    ))
    return (
        <section className="mt-4">
            <Title>Avatar Test</Title>
            <Div className="px-12 py-4 m-8 bg-blue-300">{avatars}</Div>
        </section>
    )
}
