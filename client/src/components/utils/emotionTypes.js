export const EMOTION_TYPE = {
    LOVE: 'LOVE',
    LIKE: 'LIKE',
    DISLIKE: 'DISLIKE',
    HATE: 'HATE',
    RAGE: 'RAGE',
    ANGER: 'ANGER',
    CALM: 'CALM',
    SERENE: 'SERENE',
    ECSTATIC: 'ECSTATIC',
    HAPPY: 'HAPPY',
    SAD: 'SAD',
    CRYING: 'CRYING',
    PANIC: 'PANIC',
    AFRAID: 'AFRAID',
    CONFIDENT: 'CONFIDENT',
    COURAGEOUS: 'COURAGEOUS',
    SURPRISE: 'SURPRISE',
    BORED: 'BORED',
    LAUGHTER: 'LAUGHTER',
    SERIOUS: 'SERIOUS'
};

const EMOTION_ICON = {
    [EMOTION_TYPE.LOVE]: 'grin-hearts',
    [EMOTION_TYPE.LIKE]: 'smile',
    [EMOTION_TYPE.DISLIKE]: 'frown',
    [EMOTION_TYPE.HATE]: 'tired',
    [EMOTION_TYPE.RAGE]: 'grimace',
    [EMOTION_TYPE.ANGER]: 'angry',
    [EMOTION_TYPE.CALM]: 'smile-beam',
    [EMOTION_TYPE.SERENE]: 'meh-blank',
    [EMOTION_TYPE.ECSTATIC]: 'grin-stars',
    [EMOTION_TYPE.HAPPY]: 'grin',
    [EMOTION_TYPE.SAD]: 'sad-tear',
    [EMOTION_TYPE.CRYING]: 'sad-cry',
    [EMOTION_TYPE.PANIC]: 'dizzy',
    [EMOTION_TYPE.AFRAID]: 'flushed',
    [EMOTION_TYPE.CONFIDENT]: 'grin-wink',
    [EMOTION_TYPE.COURAGEOUS]: 'grin-tongue',
    [EMOTION_TYPE.SURPRISE]: 'surprise',
    [EMOTION_TYPE.BORED]: 'meh-rolling-eyes',
    [EMOTION_TYPE.LAUGHTER]: 'laugh',
    [EMOTION_TYPE.SERIOUS]: 'meh'
};

export const getEmoteIcon = (emote) => {
    const icon = EMOTION_ICON[emote];

    if (!icon) {
        console.warn(`icon for ${emote} not found.`);
    }

    return icon;
};