import * as D from '../data'
import {Div, Title} from "../components";
import {Icon} from "../Icon";

const src = D.randomImage(800,500)
export default function PositionTest() {

    const icons = ['home', 'search', 'settings', 'favorite'].map(name => (
        <Icon key={name} name={name} className="mr-2"/>
    ))

    return (
        <Div>
            <Title>PositionTest</Title>
            <Div className="relative border-2 border-gray-500" src={src} height="10rem">
                <Div className="absolute border-2 border-red-500" src={src} left="1rem" top="1rem">{icons}</Div>
                <Div className="absolute border-2 border-blue-500" src={src} right="1rem" top="1rem">{icons}</Div>
                <Div className="absolute border-2 border-pink-500" src={src} right="1rem" bottom="1rem">{icons}</Div>
                <Div className="absolute border-2 border-yellow-500" src={src} left="1rem" bottom="1rem">{icons}</Div>

            </Div>
        </Div>
    )
}
