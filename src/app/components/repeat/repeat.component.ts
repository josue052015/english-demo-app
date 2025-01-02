import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ExerciseStatus } from 'src/app/enums/exerciseStatus.enum';
import { IExercise, IExercisePagination } from 'src/app/models/interfaces';

interface IPhraseWord {
  word: string
  isMisspelled: boolean
}

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.scss']
})
export class RepeatComponent implements OnInit, OnChanges {
  @Input() exerciseInfo: IExercise
  @Input() pagination: IExercisePagination
  @Output() onCompleted = new EventEmitter()
  transcript: string = '';
  isListening: boolean = false;
  recognition!: any;
  exerciseStatus = ExerciseStatus
  message: string;
  recordStarted = false
  phraseWords: IPhraseWord[] = []

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    // The Web Speech API is prefixed in some browsers, hence webkitSpeechRecognition.
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('Speech Recognition API not supported in this browser.');
      return;
    }

    // Create an instance of SpeechRecognition
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true; // Set to true if you want partial (interim) results
    this.recognition.continuous = true;     // Continue listening even after a pause

    // Fired when the recognition service starts
    this.recognition.onstart = () => {
      this.isListening = true;
      console.log('Speech recognition started.');
    };

    // Fired when the recognition service returns a result
    this.recognition.onresult = (event: any) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcriptPart = result[0].transcript;
        if (result.isFinal) {
          this.transcript += i == (event.results.length - 1) ? transcriptPart : transcriptPart + ' ';
          changeDetectorRef.detectChanges()
          this.checkExercise()
        } else {
          interimTranscript += transcriptPart;
        }
      }
      // (Optional) Log or do something with the partial results
      console.log('Interim: ', interimTranscript);
    };

    // Fired when the recognition service ends (stops listening)
    this.recognition.onend = () => {
      this.isListening = false;
      console.log('Speech recognition ended.');
    };

    // (Optional) Handle any speech recognition errors
    this.recognition.onerror = (event) => {
      console.error('Speech recognition error: ', event);
      this.isListening = false;
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["exerciseInfo"]) {
      this.phraseWords = this.exerciseInfo.phrase.split(' ').map((x => {
        return {
          word: x,
          isMisspelled: false
        }
      }))
    }
  }

  /** Start listening for speech input */
  startListening(): void {
    if (this.recognition && !this.isListening) {
      this.transcript = ''; // Clear the transcript if needed
      this.recognition.start();
    }
  }

  /** Stop listening for speech input */
  stopListening(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }

  }

  ngOnInit(): void {
    this.exerciseInfo.status = this.exerciseStatus.uncorrected
  }

  toggleListening() {
    this.recordStarted = !this.recordStarted
    if (this.isListening) {
      this.stopListening()
    }
    else {
      this.startListening()
    }
  }

  checkExercise() {
    console.log('this.transcript', this.transcript)
    if (this.recordStarted) this.toggleListening()
    if (this.transcript?.toLowerCase() == this.exerciseInfo?.correctAnswer?.toLowerCase()) {
      this.exerciseInfo.status = this.exerciseStatus.success
      this.message = "Correct answer!"
      this.phraseWords.filter(x => x.isMisspelled).forEach(x => {
        x.isMisspelled = false
      })
    }
    else {
      const transcriptWords = this.transcript.split(' ')
      this.phraseWords.forEach((x, index) => {
        const wordConcidence = transcriptWords?.filter(z => z == x?.word)
        if (wordConcidence?.length) {
          if (wordConcidence.length > 1) {

          }
          else {
            x.isMisspelled = false
          }
        }
        else {
          x.isMisspelled = true
        }
      })
      this.exerciseInfo.status = this.exerciseStatus.error
      this.message = "Incorrect answer!"
    }
    this.changeDetectorRef.detectChanges()
  }
  nextExercise() {
    this.onCompleted.emit()
  }

  repeatWord(word: IPhraseWord) {
    const utterance = new SpeechSynthesisUtterance(word?.word);
    speechSynthesis.speak(utterance);
  }

}
