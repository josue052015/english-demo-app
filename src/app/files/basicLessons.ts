import { IRoadmap } from "../models/interfaces";

export const basicEnglishRoadmap: IRoadmap = {
    id: "1f979714-fa97-4c33-a4e0-39c0e00d35fe",
    modules: [
      {
        id: "eca607cc-2c05-488c-86d5-32eeaa12cfb3",
        isLocked: false,
        title: "Alphabet & Basic Greetings",
        exercises: [
          {
            id: "f582aaeb-7f02-4f57-9138-fdce5c18f20c",
            exerciseType: "select word",
            phrase:
              "Select the missing letter in the alphabet sequence: A, B, C, __, E",
            correctAnswer: "D",
          },
          {
            id: "eac5c9e9-a327-4573-ab98-c921575ae1ce",
            exerciseType: "complete",
            phrase: "Hello, my name is ___",
            correctAnswer: "John / your name",
          },
          {
            id: "0d33ec97-acd5-4bef-a0fb-a8e90a911ca3",
            exerciseType: "repeat",
            phrase: "Good morning",
            correctAnswer: "Good morning",
          },
        ],
      },
      {
        id: "0bf306c4-f9fa-4a88-805d-e409d4736fb5",
        isLocked: true,
        title: "Introducing Yourself",
        exercises: [
          {
            id: "4fede694-baf9-4f66-876c-2e98eac05efc",
            exerciseType: "repeat",
            phrase: "Read and repeat and think",
            correctAnswer: "Read and repeat and think",
          },
          {
            id: "00fbfae0-c68b-47ac-ba7d-787b4bf92c8b",
            exerciseType: "complete",
            phrase: "Hello, nice to meet y__",
            correctAnswer: "ou",
          },
          {
            id: "4e58d3e5-a74d-4218-bd63-1c1bb32b3175",
            exerciseType: "select word",
            phrase:
              "Select the best word to complete the sentence: I ___ 25 years old.",
            correctAnswer: "am",
            options: ["am", "are", "the", "two"]
          },
          
        ],
      },
      {
        id: "11b3567b-cc54-4a97-91f8-26be3e1724d5",
        isLocked: true,
        title: "Numbers & Time",
        exercises: [
          {
            id: "cf8b0816-6738-4fa4-b231-5536199b1bde",
            exerciseType: "select word",
            phrase: "Select the correct number word: 7 = ___",
            correctAnswer: "seven",
          },
          {
            id: "f08b948b-22ae-4687-9dbc-5ed739a62dcd",
            exerciseType: "voice",
            phrase:
              "Say today's date, e.g., 'It is December 30th, 2024.'",
            correctAnswer: "It is December 30th, 2024.",
          },
          {
            id: "7ea07f11-69b7-4e6b-bb80-0c92c1ebb5b7",
            exerciseType: "complete",
            phrase: "It is ___ o'clock.",
            correctAnswer: "number from 1-12",
          },
        ],
      },
      {
        id: "fa508dd9-46ef-47be-aa82-ebee7c620a70",
        isLocked: true,
        title: "Simple Present Tense",
        exercises: [
          {
            id: "946b4fc6-b529-4629-b369-6270abdd7fbc",
            exerciseType: "complete",
            phrase: "I ___ English every day.",
            correctAnswer: "study / speak",
          },
          {
            id: "7058d856-5903-42e6-957d-c0a6c3556963",
            exerciseType: "repeat",
            phrase: "She works at a bank.",
            correctAnswer: "She works at a bank.",
          },
          {
            id: "b2d21029-70a9-45e4-8217-136b804786e0",
            exerciseType: "select word",
            phrase: "Select the correct form: He ___ coffee in the morning.",
            correctAnswer: "drinks",
          },
        ],
      },
      {
        id: "858d5eb0-3f8a-4124-b2b4-5543ec26f011",
        isLocked: true,
        title: "Basic Vocabulary & Common Phrases",
        exercises: [
          {
            id: "c4933f54-4d26-416e-9f28-22bdbd5ff99a",
            exerciseType: "select word",
            phrase:
              "A common phrase for asking for help is: 'Can you please ___ me?'",
            correctAnswer: "help",
          },
          {
            id: "c3ca5d23-d2f9-4b09-b45a-a7ea01667185",
            exerciseType: "voice",
            phrase: "Say: 'Excuse me, where is the bathroom?'",
            correctAnswer: "Excuse me, where is the bathroom?",
          },
        ],
      },
    ],
  };
  