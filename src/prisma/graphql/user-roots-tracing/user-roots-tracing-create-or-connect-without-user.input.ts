import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateWithoutUserInput } from './user-roots-tracing-create-without-user.input';

@InputType()
export class UserRootsTracingCreateOrConnectWithoutUserInput {

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;

    @Field(() => UserRootsTracingCreateWithoutUserInput, {nullable:false})
    @Type(() => UserRootsTracingCreateWithoutUserInput)
    create!: UserRootsTracingCreateWithoutUserInput;
}
