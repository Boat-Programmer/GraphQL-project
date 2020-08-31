import { Arg, Resolver, Query, Mutation, Ctx } from 'type-graphql'
import { createToken, sendToken } from '../utils/tokenHandler'


@Resolver()
export class AuthResolvers {
   @Query(() => [User])
}
