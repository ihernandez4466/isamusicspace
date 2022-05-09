import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet';
import { FormPreviousLink } from 'grommet-icons/icons/FormPreviousLink';
import { FormNextLink } from 'grommet-icons/icons/FormNextLink';
export const mytheme = deepMerge(grommet, {
    global: {
        colors: {
            brand: {
                light: '#fc3c44',
                dark: '#f94c57'
            },
            'brand-accent' : {
                light: '#fcebeb',
                dark: '#fbcfcf'
            },
            'accent-1': '#FD898E',
            'accent-1light': '#DEE8EC',
            'accent-2': '#7D1E23',
            'accent-3': '#98D2EB',
            'accent-4': '#C93038',
            'accent-5': '#944872',
            'neutral-1': '#7D4346',
            'neutral-2': '#7D1E23',
            'neutral-3': '#C96D71',
            'neutral-4': '#C9A9AB',
            background: {
                dark: '#121212',
                light: '#FFFFFF',
            },
            'background-back': {
            dark: '#3D5467',
            light: '#E1f2FE',
            },
            'background-front': {
            dark: '#404B5C',
            light: '#FFFFFF',
            },
            'background-contrast': {
            dark: '#FFFFFF14',
            light: '#0000000A',
            },
            text: {
                dark: '#C0CADC',
                light: '#444444',
            },
            'text!': {
                light: '#C0CADC',
                dark: '#444444',
            },
            'text-strong': {
                dark: '#FFFFFF',
                light: '#000000',
            },
            'text-weak': {
                dark: '#8C98AA',
                light: '#757575',
            },
            'text-xweak': {
                dark: '#606B7D',
                light: '#BBBBBB',
            },
            border: {
                dark: '#7887A1',
                light: '#999999',
            },
            'border-strong': {
                dark: '#AFBCD2',
                light: '#666666',
            },
            'border-weak': {
                dark: '#606B7D',
                light: '#BBBBBB',
            },
            'active-background': 'background-contrast',
            'active-text': 'text',
            'disabled-text': 'text-weak', // deprecated, use text-weak instead
            'selected-background': 'brand-accent',
            'selected-text': 'text-strong',
            focus: 'accent-5',
            placeholder: 'text-weak',
        },
        font: { family: 'Georgia' },
    },
    button: {
        hover: {
            primary: {
              background: { color: "brand-accent" },
              color: 'neutral-1'
            },
            default: {
                background: { color: "accent-4" },
                color: 'brand-accent'
            },
            secondary: {
                background: { color: "brand-accent" },
            }
        },
        default: {
            color: '!text',
            padding: {
                horizontal: '12px',
                vertical: '8px',
            },
            background: { color: 'brand-accent' }
        },
        primary: {
            background: { color: 'brand' },
            //  border: undefined,
            color: 'text-strong',
            font: { weight: 'bold' },
            padding: {
                horizontal: '12px',
                vertical: '8px',
            },
            /*hover: {
                background: { color: 'accent-2' },
            }*/
        },
        secondary: {
            background: 'background',
            //  border: undefined,
            color: 'text-strong',
            font: { weight: 'bold' },
            padding: {
                horizontal: '12px',
                vertical: '8px',
            },
        }
    },
    tab: {
        active: {
            background: 'background',
            color: 'accent-1',
        },
        background: 'dark-3',
        border: undefined,
        color: 'white',
        hover: {
            background: 'background',
        },
        margin: undefined,
        pad: {
            bottom: undefined,
            horizontal: 'small',
        },
    },
    pagination: {
        button: {
            color: 'text-strong',
            border: {},
            active: {
                background: {
                    color: 'salmon',
                },
                color: 'text',
            },
            hover: {
                background: {
                    color: 'blue'
                }
            }
        },
        icons: {
            next: FormNextLink,
            previous: FormPreviousLink,
        }
    }
});
