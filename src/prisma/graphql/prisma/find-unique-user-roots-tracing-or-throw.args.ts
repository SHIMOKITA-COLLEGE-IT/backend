import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingWhereUniqueInput } from '../user-roots-tracing/user-roots-tracing-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserRootsTracingOrThrowArgs {

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;
}
