export class Leaner {
    private name: string
    private email: string

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }
}