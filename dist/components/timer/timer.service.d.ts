export declare class TimerService {
    private totalNumberOfSeconds;
    secondsLeft: number;
    private theTimer;
    constructor();
    start(totalNumberOfSeconds: number, callback?: any): void;
    private timerCycle(callback);
}
