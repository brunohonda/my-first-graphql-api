import { Resolver, Query } from 'type-graphql';

@Resolver()
export class AppoitmentsResolver {
    @Query(() => String)
    async helloWord() {
        return 'Hello World!!!';
    }
}