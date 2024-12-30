export interface ILevels {
    id: number;
    title: string;
    description: string;
    icon: string;
    redirect: string;
}

export interface IRoadmap {
    id: string;
    modules: IModule[]
}

export interface IModule {
    id: string;
    isLocked: boolean;
    title: string;
    exercises: IExercise[]
}

type ExerciseType = 'select word' | 'complete' | 'repeat' | 'voice'

export interface IExercise {
    id: string;
    exerciseType: ExerciseType;
    phrase: string;
    correctAnswer: string;
}