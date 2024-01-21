import {RadioButtonProps} from "react-native-radio-buttons-group/lib/types";

const buttonColor = "#3B285C"

export const eventRadioButtons: RadioButtonProps[] = [
    {
        id: '1',
        selected: true,
        color: buttonColor
    },
    {
        id: '2',
        selected: true,
        color: buttonColor
    },
    {
        id: '3',
        selected: true,
        color: buttonColor
    },
    {
        id: '4',
        selected: true,
        color: buttonColor
    },
]

export const eventButtonsLabel = [
    {
        id: '1',
        label: 'По популярности',
    },
    {
        id: '2',
        label: 'По дате проведения',
    },
    {
        id: '3',
        label: 'По цене min',
    },
    {
        id: '4',
        label: 'По цене max',
    },
]

export const communityRadioButtons: RadioButtonProps[] = [
    {
        id: '1',
        selected: true,
        color: buttonColor
    },
    {
        id: '2',
        selected: true,
        color: buttonColor
    },
    {
        id: '3',
        selected: true,
        color: buttonColor
    },
]

export const communityButtonsLabel: RadioButtonProps[] = [
    {
        id: '1',
        label: 'По популярности',
        selected: true,
        color: buttonColor
    },
    {
        id: '2',
        label: 'По количеству человек min',
        selected: true,
        color: buttonColor
    },
    {
        id: '3',
        label: 'По количеству человек max',
        selected: true,
        color: buttonColor
    },
]