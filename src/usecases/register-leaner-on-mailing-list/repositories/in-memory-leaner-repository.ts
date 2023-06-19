import { Leaner } from "../leaner";
import { ILeanerRepository } from "../ports/i-leaner-repository";

export class InMemoryLeanerRepository implements ILeanerRepository {
    private leanerDataSource: Leaner[]
    
    constructor(leaners: Leaner[] = []) {
        this.leanerDataSource = leaners
    }

    async register(leaner: Leaner): Promise<boolean> {
        if(await this.exists(leaner)) return false
        this.leanerDataSource.push(leaner)
        return true
    }
    
    async findAll(): Promise<Leaner[]> {
        return this.leanerDataSource
    }

    async findByEmail(email: string): Promise<Leaner> {
        const response = this.leanerDataSource.find(leaner => leaner.getEmail() === email)
        return response || null
    }

    async exists(leaner: Leaner): Promise<boolean> {
        if(await this.findByEmail(leaner.getEmail()) === null) {
            return false
        }
        return true
    }
}