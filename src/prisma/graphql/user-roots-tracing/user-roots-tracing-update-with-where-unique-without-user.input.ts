import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { Type } from 'class-transformer';
import { UserRootsTracingUpdateWithoutUserInput } from './user-roots-tracing-update-without-user.input';

@InputType()
export class UserRootsTracingUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;

    @Field(() => UserRootsTracingUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserRootsTracingUpdateWithoutUserInput)
    data!: UserRootsTracingUpdateWithoutUserInput;
}
