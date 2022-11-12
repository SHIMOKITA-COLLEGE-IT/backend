import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateWithoutRootsInput } from './user-roots-tracing-create-without-roots.input';

@InputType()
export class UserRootsTracingCreateOrConnectWithoutRootsInput {

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;

    @Field(() => UserRootsTracingCreateWithoutRootsInput, {nullable:false})
    @Type(() => UserRootsTracingCreateWithoutRootsInput)
    create!: UserRootsTracingCreateWithoutRootsInput;
}
