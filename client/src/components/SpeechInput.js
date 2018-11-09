import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpeechInput = ({onInput}) => {
    const speechRecognitionApi = window.webkitSpeechRecognition || window.SpeechRecognition;
    const audioId = new window.Audio('/sounds/speech-recognition-on.mp3');
    const audioOut = new window.Audio('/sounds/speech-recognition-off.mp3');

    const speechToText = () => {
        const recognition = new speechRecognitionApi();
        recognition.start();
        audioId.play();

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            audioOut.play();
            onInput(result);
        };
    };

    if (speechRecognitionApi) {
        return (<div className="speech-input">
            <FontAwesomeIcon className="icon-clickable" icon="microphone" size="lg" onClick={speechToText} />
        </div>);
    } else {
        return null;
    }
}

export default SpeechInput;