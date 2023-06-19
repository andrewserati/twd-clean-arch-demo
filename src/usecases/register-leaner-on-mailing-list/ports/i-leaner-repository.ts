import { Leaner } from "../leaner";

export interface ILeanerRepository {
    register(leaner: Leaner): Promise<boolean>
    findAll(): Promise<Leaner[]>
    findByEmail(email: string): Promise<Leaner>
    exists(leaner: Leaner): Promise<boolean>
}