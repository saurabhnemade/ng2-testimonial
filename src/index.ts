import { CLOCK_DIRECTIVES } from './components/clock'

const NG2_COMPONENT_STARTER_DIRECTIVES = [ CLOCK_DIRECTIVES ]

export * from './components/clock';
export * from './module'

export default {
    directives: [
        NG2_COMPONENT_STARTER_DIRECTIVES
    ]
}