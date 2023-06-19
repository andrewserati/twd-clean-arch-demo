import { Leaner } from "../../../../src/usecases/register-leaner-on-mailing-list/leaner"
import { ILeanerRepository } from "../../../../src/usecases/register-leaner-on-mailing-list/ports/i-leaner-repository"
import { InMemoryLeanerRepository } from "../../../../src/usecases/register-leaner-on-mailing-list/repositories/in-memory-leaner-repository"

describe('In Memory Leaner Repository', () => {

    test('should add a leaner sucessfully', async () => {
        const leaner: Leaner = new Leaner('Test', 'test@test.com')
        const repository: ILeanerRepository = new InMemoryLeanerRepository()

        const response = await repository.register(leaner)

        expect(response).toBeTruthy()
    })

    test('should reject add a duplicate leaner', async () => {
        const leaner: Leaner = new Leaner('Test', 'test@test.com')
        const repository: ILeanerRepository = new InMemoryLeanerRepository([leaner])

        const response = await repository.register(leaner)

        expect(response).toBeFalsy()
    })

    test('should return all leaners', async () => {
        const leaners = [
            new Leaner('Test1', 'test1@test.com'),
            new Leaner('Test1', 'test1@test.com'),
            new Leaner('Test1', 'test1@test.com')
        ]
        const repository: ILeanerRepository = new InMemoryLeanerRepository(leaners)

        const response = await repository.findAll()

        expect(response.length).toBe(3)
    })

    test('should return null if leaner is not found', async () => {
        const leaner = new Leaner('Test', 'test@test.com')
        const repository: ILeanerRepository = new InMemoryLeanerRepository()
        
        const response: Leaner = await repository.findByEmail(leaner.getEmail())
        
        expect(response).toBeNull()
    })

    test('should return the leaner if leaner is found', async () => {
        const leaner = new Leaner('Test', 'test@test.com')
        const repository: ILeanerRepository = new InMemoryLeanerRepository([leaner])
        
        const response: Leaner = await repository.findByEmail(leaner.getEmail())
        
        expect(response.getEmail()).toBe('test@test.com')
    })

    test('should return true if leaner exist', async () => {
        const leaner = new Leaner('Test', 'test@test.com')
        const repository: ILeanerRepository = new InMemoryLeanerRepository([leaner])
        
        const response: boolean = await repository.exists(leaner)
        
        expect(response).toBeTruthy()
    })

    test('should return false if leaner not exist', async () => {
        const leaner = new Leaner('Test', 'test@test.com')
        const repository: ILeanerRepository = new InMemoryLeanerRepository()
        
        const response: boolean = await repository.exists(leaner)
        
        expect(response).toBeFalsy()
    })
})