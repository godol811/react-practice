import {Title, Subtitle, Div, Icon} from "../components";

export default function DivTest() {
    return (
        <section className="mt-4">
            <Title>DivTest</Title>
            {/*<Div className="text-center text-blue-100 bg-blue-600" height="6rem"></Div>*/}
            <Div className="text-center text-blue-100 bg-blue-600"></Div>
            <Icon name="home" className="text-3xl" />
            <Subtitle>Home</Subtitle>
        </section>
    )
}
