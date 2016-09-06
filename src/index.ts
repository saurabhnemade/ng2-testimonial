import { CLOCK_DIRECTIVES } from './components/clock'
import { TIMER_DIRECTIVES } from './components/timer'

const NG2_COMPONENT_STARTER_DIRECTIVES = [ CLOCK_DIRECTIVES, TIMER_DIRECTIVES ]

export * from './components/clock';
export * from './components/timer';
export * from './module'

export default {
    directives: [
        NG2_COMPONENT_STARTER_DIRECTIVES
    ]
}