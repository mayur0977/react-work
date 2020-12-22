export interface InputRender {
    list: string[]
}

export interface InputProps {
    render: (inputRenderProps: InputRender) => React.ReactNode;
}
export interface InputState {
    inputText: string;
    isAdded: boolean;
}


export class InputClass {
    name: string;
    age: number;
    isAlive: boolean;
    constructor() {
        this.name = '';
        this.age = 0;
        this.isAlive = false;
    }
}

export class InputResponse {
    list: string[];
    object: InputClass;
    constructor() {
        this.object = new InputClass()
        this.list = [];
    }
}