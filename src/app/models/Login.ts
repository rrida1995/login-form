export class Login {

    public email: string;
    public password: string;
    public repassword: string;

    constructor(values: Object = {}) {
        Object.assign(<Login>this, values);
    }
}