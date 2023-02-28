import type {IUser} from "./User";
import {makeRandomUser} from "./User";
import * as D from './date'
import * as C from './chance'
import * as I from './image'

export type ICard = {
    uuid: string
    writer: IUser
    image: string
    title: string
    paragraph: string
    dayMonthYearDate: string
    relativeDate: string | null
}

export const makeCard = (
    uuid: string,
    writer: IUser,
    image: string,
    title: string,
    paragraph: string,
    dayMonthYearDate: string,

    relativeDate: string | null
): ICard => ({uuid, writer, image, title, paragraph, dayMonthYearDate ,relativeDate})

export const makeRandomCard = () => {
    const date = D.makeRandomPastDate()
    return makeCard(
            C.randomUUID(),
            makeRandomUser(),
            I.randomImage(800,600),
            C.randomTitleText(),
            C.randomParagraphs(5),
            D.makeDayMonthYear(date),
            D.makeRelativeDate(date)

    )
}
