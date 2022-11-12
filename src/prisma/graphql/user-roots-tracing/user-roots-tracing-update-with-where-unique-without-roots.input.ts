import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { Type } from 'class-transformer';
import { UserRootsTracingUpdateWithoutRootsInput } from './user-roots-tracing-update-without-roots.input';

@InputType()
export class UserRootsTracingUpdateWithWhereUniqueWithoutRootsInput {

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;

    @Field(() => UserRootsTracingUpdateWithoutRootsInput, {nullable:false})
    @Type(() => UserRootsTracingUpdateWithoutRootsInput)
    data!: UserRootsTracingUpdateWithoutRootsInput;
}
