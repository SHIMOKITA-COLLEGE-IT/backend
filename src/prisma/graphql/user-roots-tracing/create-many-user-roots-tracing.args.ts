import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingCreateManyInput } from './user-roots-tracing-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserRootsTracingArgs {

    @Field(() => [UserRootsTracingCreateManyInput], {nullable:false})
    @Type(() => UserRootsTracingCreateManyInput)
    data!: Array<UserRootsTracingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
