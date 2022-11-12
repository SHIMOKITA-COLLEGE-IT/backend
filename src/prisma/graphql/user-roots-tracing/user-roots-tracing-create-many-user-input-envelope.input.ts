import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingCreateManyUserInput } from './user-roots-tracing-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRootsTracingCreateManyUserInputEnvelope {

    @Field(() => [UserRootsTracingCreateManyUserInput], {nullable:false})
    @Type(() => UserRootsTracingCreateManyUserInput)
    data!: Array<UserRootsTracingCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
