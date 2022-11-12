import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { Type } from 'class-transformer';
import { UserRootsTracingUpdateWithoutUserInput } from './user-roots-tracing-update-without-user.input';
import { UserRootsTracingCreateWithoutUserInput } from './user-roots-tracing-create-without-user.input';

@InputType()
export class UserRootsTracingUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;

    @Field(() => UserRootsTracingUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserRootsTracingUpdateWithoutUserInput)
    update!: UserRootsTracingUpdateWithoutUserInput;

    @Field(() => UserRootsTracingCreateWithoutUserInput, {nullable:false})
    @Type(() => UserRootsTracingCreateWithoutUserInput)
    create!: UserRootsTracingCreateWithoutUserInput;
}
