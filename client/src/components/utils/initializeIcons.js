import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faGrinHearts, faSmile, faFrown, faTired, faGrimace, faAngry,
    faSmileBeam, faMehBlank, faGrinStars, faGrin, faSadTear, faSadCry,
    faDizzy, faFlushed, faGrinWink, faGrinTongue, faSurprise, faMehRollingEyes,
    faLaugh, faMeh 
} from '@fortawesome/free-regular-svg-icons';
import { faTimes, faMicrophone } from '@fortawesome/free-solid-svg-icons';

export const initializeIcons = () => {
    library.add(faGrinHearts, faSmile, faFrown, faTired, faGrimace, faAngry,
        faSmileBeam, faMehBlank, faGrinStars, faGrin, faSadTear, faSadCry,
        faDizzy, faFlushed, faGrinWink, faGrinTongue, faSurprise, faMehRollingEyes,
        faLaugh, faMeh, faTimes, faMicrophone);
}
