### Usage
```typescript
import { TimerService } from '@axa-ch/ng2-component-starter/components/timer';
...
@Component({
    ...
    providers: [TimerService],
    ...
})
...
constructor(public timerService:TimerService){}
...
this.timerService.start(numOfSeconds, optionalCallbackFunction);
```

### Clock events
- `timerend` - fired when timer is over
