import { Leaner } from "../../../src/usecases/register-leaner-on-mailing-list/leaner";
import { ILeanerRepository } from "../../../src/usecases/register-leaner-on-mailing-list/ports/i-leaner-repository";
import { InMemoryLeanerRepository } from "../../../src/usecases/register-leaner-on-mailing-list/repositories/in-memory-leaner-repository";

describe('Register leaner on mailing list Use Case', () =>{

    test('should add leaner with complete data to mailing list', async () => {
        const leaner: Leaner = new Leaner('Test', 'test@test.com')
        const repository: ILeanerRepository = new InMemoryLeanerRepository()
        //const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repository)

        //const response = await usecase.register()
    })

})